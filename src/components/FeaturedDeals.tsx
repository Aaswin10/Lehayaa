
import { FeaturedDealCard } from "@/components/sale/FeaturedDealCard";

export const FeaturedDeals = () => {
  // Conversion rate: 1 USD = 134 NPR (approximate)
  const usdToNpr = 134;
  const convertToNpr = (usdPrice: number) => Math.round(usdPrice * usdToNpr);

  const deals = [
    {
      title: "Festive Embroidered Kurtha",
      description: "Celebrate every occasion with our intricately embroidered festive Kurthas. Perfect for weddings, festivals, and special gatherings.",
      discount: "17% Off",
      originalPrice: convertToNpr(2999),
      salePrice: convertToNpr(2499)
    },
    {
      title: "Designer Silk Kurtha",
      description: "Experience luxury with our premium silk Kurthas, designed for elegance and comfort. Limited edition designer pieces.",
      discount: "13% Off",
      originalPrice: convertToNpr(3999),
      salePrice: convertToNpr(3499)
    },
    {
      title: "Everyday Cotton Kurtha",
      description: "Stay comfortable and stylish every day with our classic cotton Kurthas. Breathable, soft, and perfect for all-day wear.",
      discount: "19% Off",
      originalPrice: convertToNpr(1599),
      salePrice: convertToNpr(1299)
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mb-4">
            Featured Deals
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto px-4">
            Our biggest discounts on the most sought-after pieces
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {deals.map((deal, index) => (
            <FeaturedDealCard
              key={index}
              title={deal.title}
              description={deal.description}
              discount={deal.discount}
              originalPrice={deal.originalPrice}
              salePrice={deal.salePrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
