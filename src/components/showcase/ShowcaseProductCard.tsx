import { useState } from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductImageModal } from "@/components/ProductImageModal";

interface ShowcaseProduct {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  style: string;
  fabric: string;
  occasion: string;
}

interface ShowcaseProductCardProps {
  product: ShowcaseProduct;
  index: number;
}

export const ShowcaseProductCard = ({ product, index }: ShowcaseProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleInquire = () => {
    const whatsappNumber = '9779808609520';
    const message = encodeURIComponent(`Hi, I'm interested in the "${product.name}" kurtha. Could you please provide more details?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div 
      className="group cursor-pointer animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <ProductImageModal 
        image={product.image} 
        name={product.name} 
        description={product.description}
      >
        <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4] bg-neutral-100 cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-white text-center">
              <Eye className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">View Details</p>
            </div>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-neutral-800 px-3 py-1 rounded-full text-xs font-medium">
              {product.category}
            </span>
          </div>
        </div>
      </ProductImageModal>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="text-xl font-medium text-neutral-900 leading-tight">
          {product.name}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded-md">
            {product.fabric}
          </span>
          <span className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded-md">
            {product.style}
          </span>
          <span className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded-md">
            {product.occasion}
          </span>
        </div>
        
        {/* Inquire Button */}
        <Button 
          className="w-full mt-4 bg-neutral-900 hover:bg-neutral-800 text-white"
          onClick={handleInquire}
        >
          <Eye className="h-4 w-4 mr-2" />
          Inquire
        </Button>
      </div>
    </div>
  );
};