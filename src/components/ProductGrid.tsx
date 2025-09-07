
import { useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { useProducts } from "@/hooks/useProducts";

export const ProductGrid = () => {
  const [favorites, setFavorites] = useState(new Set<number>());
  const { products, loading } = useProducts({ collection: "new-arrivals", gender: "women", limit: 6 });

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

  if (loading) {
    return (
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 mb-4">
            New Arrivals
          </h2>
          <p className="text-neutral-600 text-lg px-4">
            Discover our latest pieces crafted for the modern wardrobe
          </p>
        </div>

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
