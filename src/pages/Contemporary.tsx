import { Layout } from "@/components/Layout";
import { ShowcaseGrid } from "@/components/showcase/ShowcaseGrid";

const Contemporary = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-neutral-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-light text-neutral-900 mb-6">
            Contemporary Styles
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Where tradition meets innovation. Our contemporary collection reimagines the classic kurtha 
            for the modern lifestyle, featuring clean lines, innovative cuts, and fresh interpretations 
            of timeless designs.
          </p>
        </div>
      </section>

      {/* Contemporary Collection */}
      <ShowcaseGrid 
        collection="contemporary"
        title="Modern Interpretations"
        description="Discover how traditional craftsmanship evolves to meet contemporary aesthetics and lifestyle needs."
      />

      {/* Modern Design Philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-neutral-900 mb-8">
              Design for Today's World
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Our contemporary collection bridges the gap between heritage and modernity. We take inspiration 
              from traditional forms while incorporating modern design principles, creating pieces that are 
              both culturally rooted and globally relevant.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✂️</span>
                </div>
                <h3 className="font-medium text-neutral-900 mb-2">Modern Cuts</h3>
                <p className="text-sm text-neutral-600">Contemporary silhouettes for today's lifestyle</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-medium text-neutral-900 mb-2">Fresh Aesthetics</h3>
                <p className="text-sm text-neutral-600">Bold colors and innovative design elements</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-medium text-neutral-900 mb-2">Versatile Styling</h3>
                <p className="text-sm text-neutral-600">Pieces that transition from day to night</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contemporary;