
import { Percent } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SaleHeroStats } from "@/components/sale/SaleHeroStats";

export const SaleHero = () => {
  return (
    <section className="bg-gradient-to-br from-red-50 to-orange-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <Percent className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 mr-3" />
          <Badge className="bg-red-600 text-white animate-pulse text-xs sm:text-sm">Limited Time Sale</Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 mb-6">
          Exceptional Savings
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto mb-8 px-4">
          Don't miss out on these incredible deals and limited-time offers. Premium pieces at unbeatable prices - but only while supplies last.
        </p>
        <SaleHeroStats />
      </div>
    </section>
  );
};
