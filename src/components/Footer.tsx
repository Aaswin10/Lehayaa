
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border py-16 relative z-0 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Le Hayaa</h3>
            <p className="text-muted-foreground">
              Where tradition meets contemporary elegance. Discover our curated collection of premium kurthas crafted for the modern connoisseur.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Collections</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/collections" className="hover:text-foreground transition-colors">All Collections</Link></li>
              <li><Link to="/traditional" className="hover:text-foreground transition-colors">Traditional</Link></li>
              <li><Link to="/contemporary" className="hover:text-foreground transition-colors">Contemporary</Link></li>
              <li><Link to="/lookbook" className="hover:text-foreground transition-colors">Lookbook</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><a href="tel:+9779808609520" className="hover:text-foreground transition-colors">+977 980-8609520</a></li>
              <li><a href="mailto:info@lehayaa.com" className="hover:text-foreground transition-colors">info@lehayaa.com</a></li>
              <li><span className="text-sm">Durbar Marg, Kathmandu</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>&copy; 2024 Le Hayaa. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
