
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Lightbulb, Clock } from "lucide-react";

export const SaleTerms = () => {
  const saleTerms = [
    "Sale prices are valid while supplies last",
    "No additional discounts can be applied to sale items", 
    "Sale items are final sale - no returns or exchanges",
    "Limited quantities available for each item",
    "Sale prices valid for online purchases only"
  ];

  const shoppingTips = [
    "Check our size guide carefully before ordering",
    "Contact us for styling advice on sale pieces",
    "Sale items ship within 1-2 business days", 
    "Sign up for alerts on future sales and new arrivals",
    "Follow us on social media for flash sale announcements"
  ];

  return (
    <section className="py-12 sm:py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mb-4">
            Sale Information
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto px-4">
            Important details about our current sale
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
          <Card className="border-red-100 bg-white shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg sm:text-xl text-neutral-900">
                <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 mr-3" />
                Sale Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 sm:space-y-4">
                {saleTerms.map((term, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-neutral-700">{term}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-100 bg-white shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg sm:text-xl text-neutral-900">
                <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-3" />
                Shopping Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 sm:space-y-4">
                {shoppingTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-neutral-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 max-w-3xl mx-auto shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-medium text-neutral-900 mb-3">Limited Time Offer</h3>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed px-4">
                These prices won't last long! Sale items are available while supplies last and cannot be held or reserved. 
                Contact us immediately to secure your favorite pieces.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
