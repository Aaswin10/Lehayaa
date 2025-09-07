
import { TrendingDown, Clock, Gift } from "lucide-react";

export const SaleHeroStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto mt-12">
      <div className="text-center">
        <TrendingDown className="h-8 w-8 text-red-600 mx-auto mb-3" />
        <h3 className="font-medium text-neutral-900 mb-2">Up to 50% Off</h3>
        <p className="text-sm text-neutral-600">Significant savings on premium pieces</p>
      </div>
      <div className="text-center">
        <Clock className="h-8 w-8 text-red-600 mx-auto mb-3" />
        <h3 className="font-medium text-neutral-900 mb-2">Limited Time</h3>
        <p className="text-sm text-neutral-600">Sale ends when stock runs out</p>
      </div>
      <div className="text-center">
        <Gift className="h-8 w-8 text-red-600 mx-auto mb-3" />
        <h3 className="font-medium text-neutral-900 mb-2">Premium Quality</h3>
        <p className="text-sm text-neutral-600">Same high standards, better prices</p>
      </div>
    </div>
  );
};
