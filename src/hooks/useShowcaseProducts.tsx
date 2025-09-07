import { useState, useEffect } from 'react';
import showcaseData from '../data/showcase-products.json';

interface ShowcaseProduct {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  style: string;
  fabric: string;
  occasion: string;
}

interface Collection {
  title: string;
  description: string;
  products: ShowcaseProduct[];
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface UseShowcaseProps {
  collection?: string;
  limit?: number;
}

export const useShowcaseProducts = (filters: UseShowcaseProps = {}) => {
  const [products, setProducts] = useState<ShowcaseProduct[]>([]);
  const [collections, setCollections] = useState<Record<string, Collection>>({});
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      setLoading(true);
      
      setCollections(showcaseData.collections);
      setGallery(showcaseData.gallery);
      
      let allProducts: ShowcaseProduct[] = [];
      
      if (filters.collection && showcaseData.collections[filters.collection]) {
        allProducts = showcaseData.collections[filters.collection].products;
      } else {
        // Get all products from all collections
        Object.values(showcaseData.collections).forEach(collection => {
          allProducts = [...allProducts, ...collection.products];
        });
      }

      // Apply limit
      if (filters.limit) {
        allProducts = allProducts.slice(0, filters.limit);
      }

      setProducts(allProducts);
      setLoading(false);
    };

    loadData();
  }, [filters.collection, filters.limit]);

  return { products, collections, gallery, loading };
};