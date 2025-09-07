
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Entrepreneur",
      content: "The Kurthas are incredibly comfortable and stylish. I wore one to a family function and received so many compliments!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400"
    },
    {
      name: "Priya Patel",
      role: "Fashion Enthusiast",
      content: "I love the attention to detail in the embroidery. The festive Kurtha I bought is now my favorite outfit for celebrations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400"
    },
    {
      name: "Rohan Verma",
      role: "Designer",
      content: "Finally, a brand that brings together tradition and modern design. The fabric quality and fit are outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400"
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-neutral-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Real feedback from women who've made our pieces part of their everyday style
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-white p-8 rounded-lg shadow-sm animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-neutral-900">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
