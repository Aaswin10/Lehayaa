
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreCollection = () => {
    navigate('/collections');
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
          Le Hayaa
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8 opacity-90 animate-fade-in delay-200">
          Where Tradition Meets Contemporary Elegance
        </h2>
        <p className="text-xl md:text-2xl mb-8 font-light opacity-90 animate-fade-in delay-200">
          Curated collection of premium kurthas for the modern connoisseur
        </p>
        <div className="space-x-4 animate-fade-in delay-400">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-neutral-100 px-8 py-3 text-lg font-medium"
            onClick={handleExploreCollection}
          >
            Explore Collection
          </Button>
        </div>
      </div>
    </section>
  );
};
