import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);


  return (
    <div className="min-h-screen bg-background flex flex-col relative prevent-layout-shift">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="transition-opacity hover:opacity-80">
                <h1 className="text-2xl font-bold tracking-wide text-foreground">
                  Le Hayaa
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation & Contact Us - Right Side */}
            <div className="hidden md:flex items-center space-x-8">
              <Navigation />

              {/* Desktop Contact Us */}
              <Link
                to="/contact"
                className={`text-sm font-medium transition-all duration-200 hover:text-foreground relative group ${
                  location.pathname === "/contact" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Contact Us
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full ${
                  location.pathname === "/contact" ? "w-full" : ""
                }`}></span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-border bg-background/95 backdrop-blur-sm">
              <nav className="space-y-4 px-2">
                <Link
                  to="/collections"
                  className="block py-2 px-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Collections
                </Link>
                <Link
                  to="/traditional"
                  className="block py-2 px-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Traditional
                </Link>
                <Link
                  to="/contemporary"
                  className="block py-2 px-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contemporary
                </Link>
                <Link
                  to="/lookbook"
                  className="block py-2 px-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Lookbook
                </Link>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 page-transition">
        <div className="min-h-[calc(100vh-4rem)] prevent-layout-shift">
          {children}
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};