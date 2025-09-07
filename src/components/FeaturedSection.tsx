
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const FeaturedSection = () => {
  const collections = [
    {
      title: "Elegant Ensemble",
      description: "A perfect blend of tradition and modern style.",
      image: "/uploads/WhatsApp Image 2025-07-14 at 12.32.14.jpeg",
      cta: "Shop Now"
    },
    {
      title: "Festive Radiance",
      description: "Vibrant colors for special occasions.",
      image: "/uploads/WhatsApp Image 2025-07-14 at 12.32.13 (2).jpeg",
      cta: "Shop Now"
    },
    {
      title: "Chic Simplicity",
      description: "Effortless style for everyday comfort.",
      image: "/uploads/WhatsApp Image 2025-07-14 at 12.32.13 (1).jpeg",
      cta: "Shop Now"
    },
    {
      title: "Designer Statement",
      description: "Stand out with unique, bold designs.",
      image: "/uploads/WhatsApp Image 2025-07-14 at 12.32.13.jpeg",
      cta: "Shop Now"
    },
    {
      title: "Classic Beauty",
      description: "Timeless looks for every season.",
      image: "/uploads/WhatsApp Image 2025-07-14 at 12.32.12 (2).jpeg",
      cta: "Shop Now"
    },
    {
      title: "Modern Muse",
      description: "Inspired by contemporary trends.",
      image: "/uploads/WhatsApp Image 2025-07-14 at 12.32.12 (1).jpeg",
      cta: "Shop Now"
    },
    {
      title: "Subtle Grace",
      description: "Soft tones and graceful silhouettes.",
      image: "/uploads/WhatsApp Image 2025-07-14 at 12.32.12.jpeg",
      cta: "Shop Now"
    },
    {
      title: "Urban Edge",
      description: "A bold look for the city life.",
      image: "/uploads/WhatsApp Image 2025-07-14 at 12.32.11 (2).jpeg",
      cta: "Shop Now"
    },
    {
      title: "Cultural Heritage",
      description: "Celebrating roots with style.",
      image: "/uploads/WhatsApp Image 2025-07-14 at 12.32.11.jpeg",
      cta: "Shop Now"
    },
    {
      title: "Evening Glamour",
      description: "Perfect for night outs and events.",
      image: "/uploads/WhatsApp Image 2025-07-14 at 12.32.10.jpeg",
      cta: "Shop Now"
    },
    {
      title: "Minimalist Mood",
      description: "Clean lines and simple elegance.",
      image: "/uploads/WhatsApp Image 2025-07-14 at 12.32.08.jpeg",
      cta: "Shop Now"
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Featured Looks Section (from Lookbook) */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-neutral-900 mb-4">
              Featured Looks
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Inspiration for your next outfit—mix, match, and make it your own
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                src: "/uploads/WhatsApp Image 2025-07-14 at 12.32.14.jpeg",
                title: "Elegant Ensemble",
                desc: "A perfect blend of tradition and modern style."
              },
              {
                src: "/uploads/WhatsApp Image 2025-07-14 at 12.32.13 (2).jpeg",
                title: "Festive Radiance",
                desc: "Vibrant colors for special occasions."
              },
              {
                src: "/uploads/WhatsApp Image 2025-07-14 at 12.32.13 (1).jpeg",
                title: "Chic Simplicity",
                desc: "Effortless style for everyday comfort."
              },
              {
                src: "/uploads/WhatsApp Image 2025-07-14 at 12.32.13.jpeg",
                title: "Designer Statement",
                desc: "Stand out with unique, bold designs."
              }
            ].map((img, idx) => (
              <div key={idx} className="group bg-neutral-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col items-center text-center p-4">
                <img src={img.src} alt={img.title} className="w-full h-64 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" />
                <h3 className="font-medium text-neutral-900 mb-2 text-lg">{img.title}</h3>
                <p className="text-sm text-neutral-600 mb-2">{img.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
