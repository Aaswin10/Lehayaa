import { Layout } from "@/components/Layout";
import { ShowcaseGrid } from "@/components/showcase/ShowcaseGrid";

const Traditional = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-neutral-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-light text-neutral-900 mb-6">
            Traditional Heritage
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Celebrate the rich heritage of traditional kurtha craftsmanship. Our traditional collection 
            honors time-tested techniques, classic silhouettes, and authentic embellishments that have 
            been passed down through generations.
          </p>
        </div>
      </section>

      {/* Traditional Collection */}
      <ShowcaseGrid 
        collection="traditional"
        title="Timeless Traditions"
        description="Each piece in our traditional collection is a testament to the enduring beauty of classical design and artisanal excellence."
      />

      {/* Heritage Story */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-neutral-900 mb-8">
              Preserving Heritage Through Fashion
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Our traditional collection is more than just clothing—it's a celebration of cultural heritage. 
              We work closely with master craftsmen who have dedicated their lives to preserving ancient 
              techniques, ensuring that each kurtha carries forward the legacy of traditional artistry.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧵</span>
                </div>
                <h3 className="font-medium text-neutral-900 mb-2">Hand Embroidery</h3>
                <p className="text-sm text-neutral-600">Intricate patterns created by skilled artisans</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="font-medium text-neutral-900 mb-2">Classic Silhouettes</h3>
                <p className="text-sm text-neutral-600">Time-honored cuts that never go out of style</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="font-medium text-neutral-900 mb-2">Authentic Details</h3>
                <p className="text-sm text-neutral-600">Traditional motifs and cultural significance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Traditional;