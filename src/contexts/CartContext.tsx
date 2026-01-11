import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./AuthContext";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  product_id: string;
  variant_id: string | null;
  quantity: number;
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    compare_at_price: number | null;
    stock_quantity: number;
    product_images: { image_url: string; is_primary: boolean }[];
  };
}

interface CartContextType {
  items: CartItem[];
  isLoading: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (productId: string, quantity?: number, variantId?: string) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>;
  clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchCart = async () => {
    if (!user) {
      setItems([]);
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("cart_items")
      .select(`
        id,
        product_id,
        variant_id,
        quantity,
        product:products (
          id,
          name,
          slug,
          price,
          compare_at_price,
          stock_quantity,
          product_images (
            image_url,
            is_primary
          )
        )
      `)
      .eq("user_id", user.id);

    if (!error && data) {
      setItems(data as unknown as CartItem[]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  const addItem = async (productId: string, quantity = 1, variantId?: string) => {
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour ajouter des articles au panier",
        variant: "destructive",
      });
      return;
    }

    const existingItem = items.find(
      (item) => item.product_id === productId && item.variant_id === (variantId || null)
    );

    if (existingItem) {
      await updateQuantity(existingItem.id, existingItem.quantity + quantity);
    } else {
      const { error } = await supabase.from("cart_items").insert({
        user_id: user.id,
        product_id: productId,
        variant_id: variantId || null,
        quantity,
      });

      if (error) {
        toast({
          title: "Erreur",
          description: "Impossible d'ajouter l'article au panier",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Article ajouté",
          description: "L'article a été ajouté à votre panier",
        });
        await fetchCart();
      }
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    if (quantity < 1) {
      await removeItem(itemId);
      return;
    }

    const { error } = await supabase
      .from("cart_items")
      .update({ quantity })
      .eq("id", itemId);

    if (!error) {
      await fetchCart();
    }
  };

  const removeItem = async (itemId: string) => {
    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("id", itemId);

    if (!error) {
      toast({
        title: "Article supprimé",
        description: "L'article a été retiré de votre panier",
      });
      await fetchCart();
    }
  };

  const clearCart = async () => {
    if (!user) return;

    await supabase
      .from("cart_items")
      .delete()
      .eq("user_id", user.id);

    setItems([]);
  };

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isLoading,
        itemCount,
        subtotal,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
