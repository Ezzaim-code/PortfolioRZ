import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary border-t mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <span className="font-display text-2xl font-bold text-primary">
                Beauté & Santé
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Votre destination pour des produits de beauté naturels et efficaces. 
              Nous sélectionnons les meilleures marques pour prendre soin de vous.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Boutique</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/boutique" className="text-muted-foreground hover:text-primary">Tous les produits</Link></li>
              <li><Link to="/boutique?category=soins-visage" className="text-muted-foreground hover:text-primary">Soins Visage</Link></li>
              <li><Link to="/boutique?category=corps" className="text-muted-foreground hover:text-primary">Corps</Link></li>
              <li><Link to="/boutique?category=maquillage" className="text-muted-foreground hover:text-primary">Maquillage</Link></li>
              <li><Link to="/boutique?category=bien-etre" className="text-muted-foreground hover:text-primary">Bien-être</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-4">Aide</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link to="/livraison" className="text-muted-foreground hover:text-primary">Livraison</Link></li>
              <li><Link to="/retours" className="text-muted-foreground hover:text-primary">Retours</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link to="/cgv" className="text-muted-foreground hover:text-primary">CGV</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recevez nos offres exclusives et conseils beauté.
            </p>
            <form className="flex gap-2">
              <Input placeholder="Votre email" type="email" className="flex-1" />
              <Button type="submit" size="sm">OK</Button>
            </form>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> 01 23 45 67 89
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> contact@beaute-sante.fr
              </p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Beauté & Santé. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
