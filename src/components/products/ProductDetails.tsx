import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Product } from '../../types';

interface ProductDetailsProps {
  product: Product;
  isOwner?: boolean;
  onUpdateAvailability?: (id: string, available: boolean) => void;
}

export default function ProductDetails({ product, isOwner, onUpdateAvailability }: ProductDetailsProps) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          {product.available ? (
            <CheckCircle className="h-5 w-5 text-green-500" />
          ) : (
            <XCircle className="h-5 w-5 text-red-500" />
          )}
          <span className={product.available ? 'text-green-500' : 'text-red-500'}>
            {product.available ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        <span className="font-medium">{product.name}</span>
      </div>
      
      {isOwner && onUpdateAvailability && (
        <button
          onClick={() => onUpdateAvailability(product.id, !product.available)}
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Toggle Availability
        </button>
      )}
    </div>
  );
}