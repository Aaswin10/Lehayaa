import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

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

  // WhatsApp floating button (appears on every page)
  const whatsappNumber = '9779808609520'; // Updated number

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
                  to="/new-arrivals"
                  className="block py-2 px-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  New Arrivals
                </Link>
                <Link
                  to="/women"
                  className="block py-2 px-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Women
                </Link>
                <Link
                  to="/lookbook"
                  className="block py-2 px-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Lookbook
                </Link>
                <Link
                  to="/accessories"
                  className="block py-2 px-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Accessories
                </Link>
                <Link
                  to="/sale"
                  className="block py-2 px-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sale
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

      {/* WhatsApp Floating Button - Sticky */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] bg-green-500 hover:bg-green-600 text-white rounded-full p-4 flex items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        style={{
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          willChange: 'transform',
          WebkitTapHighlightColor: 'transparent'
        }}
        aria-label="Contact us on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          className="drop-shadow-sm"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.175.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347z" />
        </svg>
      </a>
    </div>
  );
};