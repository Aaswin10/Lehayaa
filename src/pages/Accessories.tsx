import { Layout } from "@/components/Layout";
import { ProductList } from "@/components/ProductList";
import { Badge } from "@/components/ui/badge";
import { Gem, Watch, Briefcase, Sparkles } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";

const Accessories = () => {
  const { products, loading } = useProducts({ collection: "kurthas" });

  if (loading) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <p>Loading kurthas...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-neutral-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
r            <Gem className="h-8 w-8 text-primary mr-3" />
            <Badge className="bg-primary text-white">Branded Kurtha in Kathmandu</Badge>
          </div>
          <h1 className="text-5xl font-light text-neutral-900 mb-6">
            Premium & Pakistani Kurthas in Kathmandu
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Discover the best branded, premium, and Pakistani kurthas in Kathmandu. Our durable kurthas are crafted for style, comfort, and tradition—perfect for every occasion and season.
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
            <div className="text-center">
              <Gem className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium text-neutral-900 mb-2">Branded Kurthas</h3>
              <p className="text-sm text-neutral-600">Exclusive designer and branded kurthas for a standout look</p>
            </div>
            <div className="text-center">
              <Briefcase className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium text-neutral-900 mb-2">Premium Kurthas</h3>
              <p className="text-sm text-neutral-600">Crafted from high-quality, durable fabrics for lasting comfort</p>
            </div>
            <div className="text-center">
              <Watch className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium text-neutral-900 mb-2">Pakistani Kurthas</h3>
              <p className="text-sm text-neutral-600">Authentic Pakistani styles, patterns, and embroidery</p>
            </div>
            <div className="text-center">
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium text-neutral-900 mb-2">Durable Kurthas</h3>
              <p className="text-sm text-neutral-600">Made to last—perfect for daily wear and special occasions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-neutral-900 mb-4">
              Kurtha Categories
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Find the perfect kurtha for every style and moment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-primary/5 p-8 rounded-lg text-center hover:bg-primary/10 transition-colors">
                <Gem className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Designer Kurthas</h3>
                <p className="text-sm text-neutral-600 mb-4">Modern cuts, bold prints, and unique details</p>
                <ul className="text-xs text-neutral-500 space-y-1">
                  <li>• Statement Prints</li>
                  <li>• Embroidered Styles</li>
                  <li>• Limited Editions</li>
                  <li>• Festive Kurthas</li>
                </ul>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-primary/5 p-8 rounded-lg text-center hover:bg-primary/10 transition-colors">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Premium Everyday Kurthas</h3>
                <p className="text-sm text-neutral-600 mb-4">Soft, breathable, and durable for daily comfort</p>
                <ul className="text-xs text-neutral-500 space-y-1">
                  <li>• Cotton Kurthas</li>
                  <li>• Linen Kurthas</li>
                  <li>• Solid Colors</li>
                  <li>• Minimalist Styles</li>
                </ul>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-primary/5 p-8 rounded-lg text-center hover:bg-primary/10 transition-colors">
                <Watch className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Pakistani Kurthas</h3>
                <p className="text-sm text-neutral-600 mb-4">Traditional and trending Pakistani designs</p>
                <ul className="text-xs text-neutral-500 space-y-1">
                  <li>• Chikankari Kurthas</li>
                  <li>• Lawn Kurthas</li>
                  <li>• Embroidered Pakistani Styles</li>
                  <li>• Festive Pakistani Kurthas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remove extra gap above ProductList */}
      <div className="-mt-8">
        <ProductList 
          products={products}
          title=""
          description=""
        />
      </div>

      {/* Styling Guide */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-neutral-900 mb-4">
              Style Your Kurtha
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Tips for styling branded, premium, and Pakistani kurthas for every occasion
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium text-neutral-900 mb-4">Mix & Match</h3>
              <p className="text-neutral-600 mb-4">
                Pair a statement kurtha with subtle accessories, or layer a premium kurtha with a light scarf for a fresh look.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Combine bold prints with solid bottoms</li>
                <li>• Try layering with a jacket or stole</li>
                <li>• Experiment with festive and casual styles</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-neutral-900 mb-4">Occasion Tips</h3>
              <p className="text-neutral-600 mb-4">
                Choose a premium kurtha for work, a Pakistani kurtha for celebrations, or a durable kurtha for everyday wear.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Festive: Embroidered or designer kurthas</li>
                <li>• Work: Minimalist, solid color kurthas</li>
                <li>• Daily: Cotton or linen, easy-care kurthas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Care & Maintenance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-neutral-900 mb-4">
              Kurtha Care & Maintenance
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Keep your branded, premium, and Pakistani kurthas looking new with these simple care tips
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-neutral-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Gem className="h-8 w-8 text-neutral-600" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-3">Fabric Care</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Wash with like colors</li>
                <li>• Use gentle detergents</li>
                <li>• Air dry to preserve fabric quality</li>
                <li>• Iron on low heat if needed</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-neutral-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-neutral-600" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-3">Storage Tips</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Fold neatly to avoid wrinkles</li>
                <li>• Store in a cool, dry place</li>
                <li>• Use garment bags for special pieces</li>
                <li>• Avoid direct sunlight</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-neutral-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Watch className="h-8 w-8 text-neutral-600" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-3">Longevity</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Rotate your kurthas for even wear</li>
                <li>• Mend small tears promptly</li>
                <li>• Follow care labels for best results</li>
                <li>• Professional cleaning for delicate styles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Accessories;
