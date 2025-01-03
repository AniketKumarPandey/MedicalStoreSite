import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus } from 'lucide-react';
import { Product } from '../../types';
import ProductDetails from './ProductDetails';
import AddMedicineForm from './AddMedicineForm';

interface CategoryCardProps {
  category: string;
  products: Product[];
  isOwner?: boolean;
  onUpdateAvailability?: (id: string, available: boolean) => void;
  onAddMedicine?: (medicine: { name: string; category: string }) => void;
}

export default function CategoryCard({ 
  category, 
  products, 
  isOwner, 
  onUpdateAvailability,
  onAddMedicine 
}: CategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 flex justify-between items-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 hover:text-blue-600"
        >
          <h3 className="text-xl font-semibold">{category}</h3>
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
        
        {isOwner && onAddMedicine && (
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
          >
            <Plus className="h-5 w-5" />
            <span>Add Medicine</span>
          </button>
        )}
      </div>
      
      {isExpanded && (
        <div className="p-4 bg-gray-50">
          {showAddForm && onAddMedicine && (
            <div className="mb-4">
              <AddMedicineForm
                category={category}
                onAdd={onAddMedicine}
                onClose={() => setShowAddForm(false)}
              />
            </div>
          )}
          <div className="space-y-4">
            {products.map(product => (
              <ProductDetails
                key={product.id}
                product={product}
                isOwner={isOwner}
                onUpdateAvailability={onUpdateAvailability}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}