import React from 'react';
import { Product } from '../../types';
import CategoryCard from './CategoryCard';

interface ProductListProps {
  products: Product[];
  isOwner?: boolean;
  onUpdateAvailability?: (id: string, available: boolean) => void;
  onAddMedicine?: (medicine: { name: string; category: string }) => void;
}

export default function ProductList({ 
  products, 
  isOwner, 
  onUpdateAvailability,
  onAddMedicine 
}: ProductListProps) {
  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <div className="space-y-4">
      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
        <CategoryCard
          key={category}
          category={category}
          products={categoryProducts}
          isOwner={isOwner}
          onUpdateAvailability={onUpdateAvailability}
          onAddMedicine={onAddMedicine}
        />
      ))}
    </div>
  );
}