import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Map from "@/components/Map";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-light text-neutral-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Ready to find your perfect style? We're here to help you discover
            amazing pieces and answer any questions you might have about our
            collection.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-neutral-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-medium text-neutral-900 mb-3">
                    Send us a Message
                  </h2>
                  <p className="text-neutral-600">
                    Tell us what you're looking for and we'll get back to you
                    within 24 hours
                  </p>
                </div>

                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-800 mb-3">
                        First Name *
                      </label>
                      <Input
                        placeholder="Your first name"
                        className="h-12 text-base border-neutral-200 focus:border-neutral-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-800 mb-3">
                        Last Name *
                      </label>
                      <Input
                        placeholder="Your last name"
                        className="h-12 text-base border-neutral-200 focus:border-neutral-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-800 mb-3">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="h-12 text-base border-neutral-200 focus:border-neutral-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-800 mb-3">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="h-12 text-base border-neutral-200 focus:border-neutral-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-3">
                      What are you interested in?
                    </label>
                    <Input
                      placeholder="Specific product, styling advice, size consultation..."
                      className="h-12 text-base border-neutral-200 focus:border-neutral-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-3">
                      Tell us more
                    </label>
                    <Textarea
                      placeholder="Share your requirements, preferred styles, size information, or any questions you have about our collection..."
                      rows={5}
                      className="text-base border-neutral-200 focus:border-neutral-400 transition-colors resize-none"
                    />
                  </div>

                  <Button className="w-full h-14 bg-primary hover:bg-primary/80 text-primary-foreground text-base font-medium rounded-lg transition-colors">
                    <Send className="h-5 w-5 mr-3" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information - Takes 1 column */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white/90 border border-primary/30 shadow-lg rounded-2xl p-8">
                <h3 className="text-2xl font-medium mb-6 text-primary">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-1">
                        Email Us
                      </h4>
                      <p className="text-neutral-700 text-sm">
                        info@lehayaa.com
                      </p>
                      <p className="text-neutral-500 text-xs mt-1">
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-1">Call Us</h4>
                      <p className="text-neutral-700 text-sm">
                        +977 980‑8609520
                      </p>
                      <p className="text-neutral-500 text-xs mt-1">
                        Mon-Fri, 9AM-6PM EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-1">
                        Visit Our Store
                      </h4>
                      <p className="text-neutral-700 text-sm">
                        Durbar Marg
                        <br />
                        Kathmandu, Nepal
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action Card */}
              <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 p-8 rounded-2xl">
                <h3 className="text-xl font-medium text-neutral-900 mb-3">
                  Browse Collections
                </h3>
                <p className="text-neutral-600 text-sm mb-6">
                  Explore our latest arrivals and find pieces that speak to your
                  style.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 h-11"
                >
                  <Link to="/new-arrivals">View Collections</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
