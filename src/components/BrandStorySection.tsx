
import { Heart, Leaf, Award } from "lucide-react";

export const BrandStorySection = () => {
  const values = [
    {
      icon: Heart,
      title: "Heritage Craftsmanship",
      description: "Each Kurtha is a tribute to centuries-old textile traditions, crafted with love and precision by skilled artisans."
    },
    {
      icon: Leaf,
      title: "Sustainable Fabrics",
      description: "We use eco-friendly, breathable materials to create Kurthas that are as gentle on the planet as they are on your skin."
    },
    {
      icon: Award,
      title: "Timeless Elegance",
      description: "Our Kurthas blend classic silhouettes with modern flair, ensuring you look elegant for every occasion."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div>
            <h2 className="text-4xl font-light text-neutral-900 mb-6">
              Our Kurtha Story
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Born from a passion for South Asian heritage, our brand is dedicated to reviving and reimagining the Kurtha for the modern world. We believe in celebrating tradition while embracing contemporary style, offering Kurthas that empower you to express your unique identity.
            </p>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              From festive gatherings to everyday comfort, our collections are thoughtfully curated to suit every mood and moment. We partner with local artisans and use premium, sustainable fabrics to ensure every Kurtha is a masterpiece of comfort and style.
            </p>
            
            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="flex items-start animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-neutral-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <value.icon className="h-6 w-6 text-neutral-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-2">{value.title}</h3>
                    <p className="text-neutral-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Story Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800"
                alt="Our story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-sm text-neutral-500 mb-1">Established</p>
              <p className="text-2xl font-light text-neutral-900">2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
