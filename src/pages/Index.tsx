
import { HeroSection } from "@/components/HeroSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { ProductGrid } from "@/components/ProductGrid";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BrandStorySection } from "@/components/BrandStorySection";
import { Layout } from "@/components/Layout";
import Accessories from "./Accessories";
import NewArrivalsPage from "@/components/product/NewArrivalsPage";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedSection />
      <ProductGrid />
      <BrandStorySection />
      <TestimonialsSection />
      
    </Layout>
  );
};

export default Index;
