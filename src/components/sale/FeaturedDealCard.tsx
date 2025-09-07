
import { Badge } from "@/components/ui/badge";
import { IndianRupee } from "lucide-react";

interface FeaturedDealCardProps {
  title: string;
  description: string;
  discount: string;
  originalPrice: number;
  salePrice: number;
}

export const FeaturedDealCard = ({ title, description, discount, originalPrice, salePrice }: FeaturedDealCardProps) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-neutral-900">{title}</h3>
        <Badge className="bg-green-600 text-white">{discount}</Badge>
      </div>
      <p className="text-neutral-600 mb-4 text-sm sm:text-base">
        {description}
      </p>
      <p className="text-sm text-neutral-500 flex items-center flex-wrap">
        <span className="flex items-center mr-2">
          <IndianRupee className="h-3 w-3 mr-1" />
          Originally {originalPrice.toLocaleString()},
        </span>
        <span className="flex items-center">
          now from <IndianRupee className="h-3 w-3 mx-1" />
          {salePrice.toLocaleString()}
        </span>
      </p>
    </div>
  );
};
