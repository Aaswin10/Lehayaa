import { ShowcaseProductCard } from "./ShowcaseProductCard";
import { useShowcaseProducts } from "@/hooks/useShowcaseProducts";

interface ShowcaseGridProps {
  collection?: string;
  limit?: number;
  title?: string;
  description?: string;
}

export const ShowcaseGrid = ({ collection, limit, title, description }: ShowcaseGridProps) => {
  const { products, loading } = useShowcaseProducts({ collection, limit });

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-neutral-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-neutral-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl font-light text-neutral-900 mb-6">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ShowcaseProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};