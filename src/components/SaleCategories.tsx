
import { SaleCategoryCard } from "@/components/sale/SaleCategoryCard";

export const SaleCategories = () => {
  const categories = [
    {
      title: "Clothing",
      description: "Dresses, blazers, and more",
      discount: "Up to 40% Off"
    },
    {
      title: "Outerwear", 
      description: "Jackets, coats, and layers",
      discount: "Up to 35% Off"
    },
    {
      title: "Accessories",
      description: "Bags, scarves, and jewelry", 
      discount: "Up to 30% Off"
    },
    {
      title: "Footwear",
      description: "Shoes for every occasion",
      discount: "Up to 25% Off"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mb-4">
            Women's Sale Categories
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto px-4">
            Discover discounted items from our women's collections only
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <SaleCategoryCard
              key={index}
              title={category.title}
              description={category.description}
              discount={category.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
