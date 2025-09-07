import { Layout } from "@/components/Layout";
import { ProductList } from "@/components/ProductList";
import { Badge } from "@/components/ui/badge";
import { Crown, Heart, Star } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";

const Women = () => {
  const { products, loading } = useProducts({ gender: "women" });

  if (loading) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <p>Loading women's collection...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-neutral-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Crown className="h-8 w-8 text-rose-600 mr-3" />
            <Badge className="bg-rose-600 text-white">Women's Kurtha Collection</Badge>
          </div>
          <h1 className="text-5xl font-light text-neutral-900 mb-6">
            Graceful Kurthas for Every Occasion
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Explore our curated range of women's Kurthas—crafted for elegance, comfort, and tradition. From festive gatherings to everyday wear, find your perfect Kurtha.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <Heart className="h-8 w-8 text-rose-600 mx-auto mb-3" />
              <h3 className="font-medium text-neutral-900 mb-2">Festive Kurthas</h3>
              <p className="text-sm text-neutral-600">Intricate embroidery and vibrant colors for celebrations</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-rose-600 mx-auto mb-3" />
              <h3 className="font-medium text-neutral-900 mb-2">Casual Kurthas</h3>
              <p className="text-sm text-neutral-600">Soft, breathable fabrics for everyday comfort</p>
            </div>
            <div className="text-center">
              <Crown className="h-8 w-8 text-rose-600 mx-auto mb-3" />
              <h3 className="font-medium text-neutral-900 mb-2">Designer Kurthas</h3>
              <p className="text-sm text-neutral-600">Modern silhouettes with a traditional touch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-neutral-900 mb-4">
              Shop by Kurtha Style
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Discover the perfect Kurtha for every mood and moment
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-neutral-50 p-6 rounded-lg text-center hover:bg-neutral-100 transition-colors cursor-pointer">
              <h3 className="font-medium text-neutral-900 mb-2">Festive</h3>
              <p className="text-sm text-neutral-600">For weddings, festivals, and special occasions</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg text-center hover:bg-neutral-100 transition-colors cursor-pointer">
              <h3 className="font-medium text-neutral-900 mb-2">Casual</h3>
              <p className="text-sm text-neutral-600">Effortless style for daily wear</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg text-center hover:bg-neutral-100 transition-colors cursor-pointer">
              <h3 className="font-medium text-neutral-900 mb-2">Workwear</h3>
              <p className="text-sm text-neutral-600">Elegant and comfortable for the office</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg text-center hover:bg-neutral-100 transition-colors cursor-pointer">
              <h3 className="font-medium text-neutral-900 mb-2">Designer</h3>
              <p className="text-sm text-neutral-600">Statement pieces for fashion-forward looks</p>
            </div>
          </div>
        </div>
      </section>

      <ProductList 
        products={products}
        title="Women's Kurthas"
        description="Graceful, comfortable, and timeless—find your perfect Kurtha."
      />

      {/* Styling Tips */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-neutral-900 mb-4">
              Styling Your Kurtha
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Tips for accessorizing and creating unique looks with your Kurtha
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Accessorize Boldly</h3>
              <p className="text-neutral-600 mb-4">
                Pair your Kurtha with statement earrings, bangles, or a colorful dupatta for a festive look.
              </p>
              <p className="text-sm text-neutral-500">Perfect for: Celebrations, weddings, festivals</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Layer for Comfort</h3>
              <p className="text-neutral-600 mb-4">
                Add a light scarf or jacket for cooler days, or style with leggings for extra comfort.
              </p>
              <p className="text-sm text-neutral-500">Perfect for: Everyday wear, travel, work</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Mix Modern & Traditional</h3>
              <p className="text-neutral-600 mb-4">
                Combine a classic Kurtha with modern footwear or a designer bag for a chic fusion look.
              </p>
              <p className="text-sm text-neutral-500">Perfect for: Parties, brunches, creative events</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Women;
