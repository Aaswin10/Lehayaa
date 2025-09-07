
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8" />
          </div>
          
          <h2 className="text-4xl font-light mb-6">
            Stay in Style
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Be the first to know about new arrivals, exclusive offers, and styling tips. Join our community of style enthusiasts.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <Button 
                type="submit"
                className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-3 rounded-lg font-medium flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </form>
          ) : (
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-green-300 font-medium">
                Thank you for subscribing! Welcome to our style community.
              </p>
            </div>
          )}

          <p className="text-sm text-neutral-400 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
