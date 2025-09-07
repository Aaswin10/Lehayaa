import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Camera, Star, Heart } from "lucide-react";

const lookbookImages = [
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
  },
  {
    src: "/uploads/WhatsApp Image 2025-07-14 at 12.32.12 (2).jpeg",
    title: "Classic Beauty",
    desc: "Timeless looks for every season."
  },
  {
    src: "/uploads/WhatsApp Image 2025-07-14 at 12.32.12 (1).jpeg",
    title: "Modern Muse",
    desc: "Inspired by contemporary trends."
  },
  {
    src: "/uploads/WhatsApp Image 2025-07-14 at 12.32.12.jpeg",
    title: "Subtle Grace",
    desc: "Soft tones and graceful silhouettes."
  },
  {
    src: "/uploads/WhatsApp Image 2025-07-14 at 12.32.11 (2).jpeg",
    title: "Urban Edge",
    desc: "A bold look for the city life."
  },
  {
    src: "/uploads/WhatsApp Image 2025-07-14 at 12.32.11.jpeg",
    title: "Cultural Heritage",
    desc: "Celebrating roots with style."
  },
  {
    src: "/uploads/WhatsApp Image 2025-07-14 at 12.32.10.jpeg",
    title: "Evening Glamour",
    desc: "Perfect for night outs and events."
  },
  {
    src: "/uploads/WhatsApp Image 2025-07-14 at 12.32.08.jpeg",
    title: "Minimalist Mood",
    desc: "Clean lines and simple elegance."
  },
];

const Lookbook = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-neutral-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Camera className="h-8 w-8 text-pink-600 mr-3" />
            <Badge className="bg-pink-600 text-white">Lookbook</Badge>
          </div>
          <h1 className="text-5xl font-light text-neutral-900 mb-6">
            Style Inspirations & Seasonal Edits
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Explore our curated gallery of looks—discover how to style, layer, and accessorize for every occasion. Get inspired by the latest trends and timeless classics.
          </p>
        </div>
      </section>

      {/* Lookbook Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-neutral-900 mb-4">
              Featured Looks
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Inspiration for your next outfit—mix, match, and make it your own
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lookbookImages.map((img, idx) => (
              <div key={idx} className="group bg-neutral-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col items-center text-center p-4">
                <img src={img.src} alt={img.title} className="w-full h-64 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" />
                <h3 className="font-medium text-neutral-900 mb-2 text-lg">{img.title}</h3>
                <p className="text-sm text-neutral-600 mb-2">{img.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Tips Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-neutral-900 mb-4">
              Style Tips from Our Editors
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Elevate your look with these expert tips and tricks
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center">
              <Sparkles className="h-8 w-8 text-pink-500 mb-3" />
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Mix Textures</h3>
              <p className="text-neutral-600 mb-4">
                Combine silk, cotton, and linen for a rich, layered look that feels as good as it looks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center">
              <Star className="h-8 w-8 text-pink-500 mb-3" />
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Accessorize Boldly</h3>
              <p className="text-neutral-600 mb-4">
                Use statement jewelry, belts, and scarves to add personality and flair to your outfit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center">
              <Heart className="h-8 w-8 text-pink-500 mb-3" />
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Play with Color</h3>
              <p className="text-neutral-600 mb-4">
                Don’t be afraid to experiment with bold hues and unique color combinations for a standout look.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lookbook; 