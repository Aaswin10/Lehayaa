import { Layout } from "@/components/Layout";
import { ProductList } from "@/components/ProductList";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, TrendingUp, Briefcase, Coffee } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";

const NewArrivalsPage = () => {
  const { products, loading } = useProducts({ collection: "new-arrivals" });

  return (
    <>
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-neutral-600 mr-2" />
            <Badge className="bg-neutral-900 text-white">New Kurthas</Badge>
          </div>
          <h1 className="text-5xl font-light text-neutral-900 mb-6">
            Latest Kurtha Arrivals
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Discover the newest Kurtha styles—fresh colors, unique patterns, and modern fits. Be the first to wear the latest in Kurtha fashion.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-neutral-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Updated Weekly</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span>Trending Now</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-neutral-900 mb-4">
              This Week's Kurtha Highlights
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Handpicked Kurthas that define elegance, comfort, and tradition
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-neutral-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-neutral-600" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-2">Premium Materials</h3>
              <p className="text-sm text-neutral-600">Sustainably sourced fabrics and eco-friendly production</p>
            </div>
            <div className="text-center">
              <div className="bg-neutral-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-neutral-600" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-2">Trending Designs</h3>
              <p className="text-sm text-neutral-600">Fashion-forward pieces inspired by global trends</p>
            </div>
            <div className="text-center">
              <div className="bg-neutral-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-neutral-600" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-2">Limited Edition</h3>
              <p className="text-sm text-neutral-600">Exclusive pieces with limited availability</p>
            </div>
          </div>
        </div>
      </section>

      <ProductList 
        products={products}
        title="Fresh Kurtha Arrivals"
        description="Be the first to discover our newest Kurtha collection."
      />

      {/* Redesigned Style Guide Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-neutral-900 mb-6">
              Style Your Kurtha
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Explore creative ways to style your new Kurtha—mix, match, and make it your own for every occasion.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Office Ready Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-neutral-900">Office Ready</h3>
                    <p className="text-neutral-500">Professional & Polished</p>
                  </div>
                </div>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Craft a sophisticated presence that commands respect. Blend timeless elegance with modern comfort for a look that effortlessly transitions from morning meetings to evening networking.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-neutral-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="font-medium text-neutral-700">Classic White Cotton Kurtha</span>
                    <span className="text-neutral-500 mx-2">+</span>
                    <span className="font-medium text-neutral-700">Pastel Linen Kurtha</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-neutral-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-neutral-600">Layer with a colorful dupatta</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-neutral-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-neutral-600">Comfortable ethnic sandals</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700 font-medium">
                    💡 Pro Tip: Add a structured bag and subtle jewelry to complete the power look
                  </p>
                </div>
              </div>
            </div>

            {/* Weekend Casual Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <Coffee className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-neutral-900">Weekend Vibes</h3>
                    <p className="text-neutral-500">Effortless & Relaxed</p>
                  </div>
                </div>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Embrace leisurely luxury with pieces that feel as good as they look. Create effortless elegance perfect for brunch dates, gallery visits, or afternoon strolls.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-neutral-50 rounded-lg">
                    <div className="w-2 h-2 bg-primary/50 rounded-full mr-3"></div>
                    <span className="font-medium text-neutral-700">Printed Boho Kurtha</span>
                    <span className="text-neutral-500 mx-2">+</span>
                    <span className="font-medium text-neutral-700">Chikankari Kurtha</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-neutral-50 rounded-lg">
                    <div className="w-2 h-2 bg-primary/50 rounded-full mr-3"></div>
                    <span className="text-neutral-600">Add a statement necklace</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-neutral-50 rounded-lg">
                    <div className="w-2 h-2 bg-primary/50 rounded-full mr-3"></div>
                    <span className="text-neutral-600">Mix textures and add a matching stole for the perfect finish</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-primary/80 font-medium">
                    💡 Style Tip: Mix textures and add a crossbody bag for the perfect casual-chic finish
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Style Inspiration */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-neutral-900 text-white rounded-full">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="font-medium">Mix, Match & Make Your Kurtha Unique</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrivalsPage;
