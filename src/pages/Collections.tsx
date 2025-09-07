import { Layout } from "@/components/Layout";
import { ShowcaseGrid } from "@/components/showcase/ShowcaseGrid";
import { useShowcaseProducts } from "@/hooks/useShowcaseProducts";

const Collections = () => {
  const { collections, loading } = useShowcaseProducts();

  if (loading) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-neutral-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-neutral-200 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-light text-neutral-900 mb-6">
            Our Collections
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated collections, each telling a unique story of craftsmanship, 
            tradition, and contemporary design. From timeless classics to modern interpretations, 
            find the perfect kurtha for every moment.
          </p>
        </div>
      </section>

      {/* Collections */}
      {Object.entries(collections).map(([key, collection]) => (
        <div key={key} className={key === 'featured' ? 'bg-white' : key === 'traditional' ? 'bg-neutral-50' : key === 'contemporary' ? 'bg-white' : 'bg-neutral-50'}>
          <ShowcaseGrid 
            collection={key}
            title={collection.title}
            description={collection.description}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Collections;