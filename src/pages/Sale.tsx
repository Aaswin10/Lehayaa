
import { Layout } from "@/components/Layout";
import { ProductList } from "@/components/ProductList";
import { SaleHero } from "@/components/SaleHero";
import { SaleCategories } from "@/components/SaleCategories";
import { FeaturedDeals } from "@/components/FeaturedDeals";
import { SaleTerms } from "@/components/SaleTerms";
import { useProducts } from "@/hooks/useProducts";

const Sale = () => {
  const { products, loading } = useProducts({ collection: "sale", gender: "women" });

  if (loading) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <p>Loading sale items...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SaleHero />
      <SaleCategories />
      <FeaturedDeals />
      <ProductList 
        products={products}
        title="Kurtha Sale Items"
        description="Don't miss out on these incredible Kurtha deals and limited-time offers."
      />
      <SaleTerms />
    </Layout>
  );
};

export default Sale;
