import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface AddMedicineFormProps {
  category: string;
  onAdd: (medicine: { name: string; category: string }) => void;
  onClose: () => void;
}

export default function AddMedicineForm({ category, onAdd, onClose }: AddMedicineFormProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd({ name: name.trim(), category });
      setName('');
      onClose();
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-medium">Add Medicine to {category}</h4>
        <button onClick={onClose}>
          <X className="h-5 w-5" />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Medicine Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter medicine name"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Medicine
        </button>
      </form>
    </div>
  );
}