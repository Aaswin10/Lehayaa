
import { GallerySection } from "@/components/showcase/GallerySection";

export const FeaturedSection = () => {

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-neutral-900 mb-6">
            Crafted with Passion
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Each kurtha in our collection tells a story of heritage, craftsmanship, and contemporary design. 
            Discover pieces that celebrate tradition while embracing modern sensibilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="bg-neutral-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-medium text-neutral-900 mb-4">Artisan Crafted</h3>
            <p className="text-neutral-600 leading-relaxed">
              Every piece is carefully crafted by skilled artisans who bring generations of expertise to each stitch.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-neutral-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-xl font-medium text-neutral-900 mb-4">Premium Fabrics</h3>
            <p className="text-neutral-600 leading-relaxed">
              We source only the finest natural fabrics that feel luxurious against your skin and age beautifully.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-neutral-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-medium text-neutral-900 mb-4">Timeless Design</h3>
            <p className="text-neutral-600 leading-relaxed">
              Our designs transcend trends, offering pieces that remain elegant and relevant season after season.
            </p>
          </div>
        </div>
      </div>
      
      <GallerySection />
    </section>
  );
};
