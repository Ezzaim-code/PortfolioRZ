import { Link } from "react-router-dom";
import { ShoppingBag, User, Menu, Search, Heart, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

const navLinks = [
  { href: "/boutique", label: "Boutique" },
  { href: "/boutique?category=soins-visage", label: "Soins Visage" },
  { href: "/boutique?category=corps", label: "Corps" },
  { href: "/boutique?category=maquillage", label: "Maquillage" },
  { href: "/boutique?category=bien-etre", label: "Bien-être" },
];

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user } = useAuth();
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-primary">
            Beauté
          </span>
          <span className="font-display text-2xl text-foreground">&</span>
          <span className="font-display text-2xl font-bold text-primary">
            Santé
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          {isSearchOpen ? (
            <div className="flex items-center gap-2">
              <Input
                placeholder="Rechercher..."
                className="w-[200px] md:w-[300px]"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          {/* Wishlist */}
          <Link to="/wishlist">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>

          {/* Cart */}
          <Link to="/panier" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {itemCount}
                </Badge>
              )}
            </Button>
          </Link>

          {/* User */}
          <Link to={user ? "/compte" : "/connexion"}>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
