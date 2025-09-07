
import { Badge } from "@/components/ui/badge";

interface SaleCategoryCardProps {
  title: string;
  description: string;
  discount: string;
}

export const SaleCategoryCard = ({ title, description, discount }: SaleCategoryCardProps) => {
  return (
    <div className="bg-red-50 p-4 sm:p-6 rounded-lg text-center hover:bg-red-100 transition-colors cursor-pointer border border-red-100">
      <h3 className="font-medium text-neutral-900 mb-2">{title}</h3>
      <p className="text-sm text-neutral-600 mb-3">{description}</p>
      <Badge className="bg-red-600 text-white text-xs">{discount}</Badge>
    </div>
  );
};
