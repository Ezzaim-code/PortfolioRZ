import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface ProductFilters {
  categoryId?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  skinTypes?: string[];
  brands?: string[];
  sortBy?: "price_asc" | "price_desc" | "newest" | "popular";
  featured?: boolean;
  limit?: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  short_description: string | null;
  ingredients: string | null;
  usage_instructions: string | null;
  price: number;
  compare_at_price: number | null;
  sku: string | null;
  stock_quantity: number;
  category_id: string | null;
  brand: string | null;
  skin_type: string[] | null;
  tags: string[] | null;
  is_active: boolean;
  is_featured: boolean;
  created_at: string;
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  product_images: {
    id: string;
    image_url: string;
    alt_text: string | null;
    is_primary: boolean;
    display_order: number;
  }[];
  reviews?: {
    rating: number;
  }[];
}

export function useProducts(filters: ProductFilters = {}) {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select(`
          *,
          category:categories (id, name, slug),
          product_images (id, image_url, alt_text, is_primary, display_order),
          reviews (rating)
        `)
        .eq("is_active", true);

      if (filters.categoryId) {
        query = query.eq("category_id", filters.categoryId);
      }

      if (filters.search) {
        query = query.or(
          `name.ilike.%${filters.search}%,description.ilike.%${filters.search}%,brand.ilike.%${filters.search}%`
        );
      }

      if (filters.minPrice !== undefined) {
        query = query.gte("price", filters.minPrice);
      }

      if (filters.maxPrice !== undefined) {
        query = query.lte("price", filters.maxPrice);
      }

      if (filters.brands && filters.brands.length > 0) {
        query = query.in("brand", filters.brands);
      }

      if (filters.featured) {
        query = query.eq("is_featured", true);
      }

      // Sorting
      switch (filters.sortBy) {
        case "price_asc":
          query = query.order("price", { ascending: true });
          break;
        case "price_desc":
          query = query.order("price", { ascending: false });
          break;
        case "newest":
          query = query.order("created_at", { ascending: false });
          break;
        default:
          query = query.order("created_at", { ascending: false });
      }

      if (filters.limit) {
        query = query.limit(filters.limit);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as Product[];
    },
  });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          category:categories (id, name, slug),
          product_images (id, image_url, alt_text, is_primary, display_order),
          product_variants (id, name, sku, price, stock_quantity, attributes),
          reviews (
            id,
            rating,
            title,
            content,
            created_at,
            profile:profiles (full_name, avatar_url)
          )
        `)
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

      if (error) throw error;
      return data as Product & {
        product_variants: any[];
        reviews: any[];
      };
    },
    enabled: !!slug,
  });
}

export function useFeaturedProducts(limit = 8) {
  return useProducts({ featured: true, limit });
}

export function useNewProducts(limit = 8) {
  return useProducts({ sortBy: "newest", limit });
}
