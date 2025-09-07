
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopCollection = () => {
    navigate('/women');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/uploads/WhatsApp Image 2025-07-14 at 12.32.14.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide animate-fade-in">
          Discover the Essence of Kurthas
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light opacity-90 animate-fade-in delay-200">
        Where Modesty Meets Elegance.
        </p>
        <div className="space-x-4 animate-fade-in delay-400">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-neutral-100 px-8 py-3 text-lg font-medium"
            onClick={handleShopCollection}
          >
            Shop Collection
          </Button>

        </div>
      </div>
    </section>
  );
};
