
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border py-16 relative z-0 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Le Hayaa</h3>
            <p className="text-muted-foreground">
              Contemporary fashion for the modern lifestyle. Elevate your wardrobe with our curated collections.
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
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/new-arrivals" className="hover:text-foreground transition-colors">New Arrivals</Link></li>
              {/* Remove Best Sellers if not implemented, or link to a relevant page */}
              <li><Link to="/sale" className="hover:text-foreground transition-colors">Sale</Link></li>
              <li><Link to="/lookbook" className="hover:text-foreground transition-colors">Lookbook</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-medium mb-4">Customer Care</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium mb-4">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">Subscribe to get updates on new arrivals and exclusive offers.</p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-accent/50 border-border text-foreground placeholder:text-muted-foreground/70"
              />
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>&copy; 2024 Le Hayaa. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
