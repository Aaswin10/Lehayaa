
import { useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";

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

interface ProductListProps {
  products: Product[];
  title: string;
  description: string;
}

export const ProductList = ({ products, title, description }: ProductListProps) => {
  const [favorites, setFavorites] = useState(new Set<number>());

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const hasHeader = Boolean(title || description);
  return (
    <section className={hasHeader ? "py-12 sm:py-16 lg:py-20" : "py-0"}>
      <div className="container mx-auto px-4">
        {hasHeader && (
          <div className="text-center mb-12 sm:mb-16">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-neutral-600 text-lg px-4">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
