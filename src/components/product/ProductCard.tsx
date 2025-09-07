
import { useState } from "react";
import { Heart, ShoppingCart, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew: boolean;
  onSale: boolean;
}

interface ProductCardProps {
  product: Product;
  index: number;
  favorites: Set<number>;
  onToggleFavorite: (productId: number) => void;
}

export const ProductCard = ({ product, index, favorites, onToggleFavorite }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    const whatsappNumber = '9808609520';
    const message = encodeURIComponent(`Hi, I'm interested in buying the product: ${product.name} (ID: ${product.id}). Please provide more details.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div 
      className="group cursor-pointer animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 space-y-2">
          {product.isNew && (
            <Badge className="bg-neutral-900 text-white text-xs">New</Badge>
          )}
          {product.onSale && (
            <Badge className="bg-red-500 text-white text-xs">Sale</Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 space-y-2">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 sm:h-10 sm:w-10"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(product.id);
            }}
          >
            <Heart 
              className={`h-3 w-3 sm:h-4 sm:w-4 ${
                favorites.has(product.id) ? 'fill-red-500 text-red-500' : 'text-neutral-600'
              }`} 
            />
          </Button>
        </div>

        {/* Buy Now Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            className="bg-white text-black hover:bg-neutral-100 transform scale-95 group-hover:scale-100 transition-transform duration-300 text-sm sm:text-base"
            onClick={handleBuyNow}
          >
            <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            Buy Now
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <p className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wide">
          {product.category}
        </p>
        <h3 className="text-base sm:text-lg font-medium text-neutral-900 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center space-x-2 flex-wrap">
          <span className="text-base sm:text-lg font-medium text-neutral-900 flex items-center">
            <IndianRupee className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-xs sm:text-sm text-neutral-500 line-through flex items-center">
              <IndianRupee className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
              {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
