import { useState } from 'react';
import { Product } from '../../../types';
import { initialProducts } from '../../../data/products';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);

  const handleUpdateAvailability = (id: string, available: boolean) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, available } : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const handleAddMedicine = (medicine: { name: string; category: string }) => {
    const newMedicine: Product = {
      id: Date.now().toString(), // Simple ID generation
      name: medicine.name,
      category: medicine.category,
      available: true,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400'
    };
    
    const updatedProducts = [...products, newMedicine];
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  return {
    products,
    filteredProducts,
    setFilteredProducts,
    handleUpdateAvailability,
    handleAddMedicine,
  };
}