import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Product } from '../../types';

interface ProductSearchProps {
  products: Product[];
  onSearch: (results: Product[]) => void;
}

export default function ProductSearch({ products, onSearch }: ProductSearchProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    
    const results = products.filter(product => 
      product.name.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery)
    );
    
    onSearch(results);
  };

  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        placeholder="Search for medicines and medical supplies..."
        value={query}
        onChange={handleSearch}
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}