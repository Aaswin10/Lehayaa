
import { useState, useEffect } from 'react';
import productsData from '../data/products.json';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew: boolean;
  onSale: boolean;
  gender: string;
  collection: string;
}

interface UseProductsProps {
  collection?: string;
  gender?: string;
  isNew?: boolean;
  onSale?: boolean;
  limit?: number;
}

export const useProducts = (filters: UseProductsProps = {}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = () => {
      setLoading(true);
      
      let filteredProducts = productsData.products;

      // Apply filters
      if (filters.collection) {
        filteredProducts = filteredProducts.filter(product => 
          product.collection === filters.collection
        );
      }

      if (filters.gender) {
        filteredProducts = filteredProducts.filter(product => 
          product.gender === filters.gender || product.gender === 'unisex'
        );
      }

      if (filters.isNew !== undefined) {
        filteredProducts = filteredProducts.filter(product => 
          product.isNew === filters.isNew
        );
      }

      if (filters.onSale !== undefined) {
        filteredProducts = filteredProducts.filter(product => 
          product.onSale === filters.onSale
        );
      }

      // Apply limit
      if (filters.limit) {
        filteredProducts = filteredProducts.slice(0, filters.limit);
      }

      setProducts(filteredProducts);
      setLoading(false);
    };

    loadProducts();
  }, [filters.collection, filters.gender, filters.isNew, filters.onSale, filters.limit]);

  return { products, loading };
};
