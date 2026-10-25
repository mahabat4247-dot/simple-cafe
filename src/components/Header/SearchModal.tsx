import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { products } from '../../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const filtered = searchTerm.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleSelectProduct = (slug: string) => {
    onClose();
    setSearchTerm('');
    navigate(`/product/${slug}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-sage-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative mx-auto max-w-2xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all">
        {/* Search Header */}
        <div className="relative flex items-center border-b border-cream-200 px-4">
          <Search className="h-5 w-5 text-sage-800" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for roses, peonies, bouquets, or occasions..."
            className="w-full border-0 bg-transparent px-4 py-4 text-sm font-medium text-sage-900 placeholder-sage-700 focus:outline-none focus:ring-0"
            autoFocus
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="p-1 text-sage-700 hover:text-sage-900"
              aria-label="Clear search text"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="ml-2 rounded-lg p-1.5 text-sage-800 hover:bg-cream-100 transition-colors"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto p-4">
          {searchTerm.trim() === '' ? (
            <div className="py-6 text-center text-xs text-sage-700">
              <p className="font-semibold text-sage-800">Popular Searches:</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {['Blush Rose', 'Peonies', 'Sunshine Bouquet', 'Lilies', 'Orchid'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSearchTerm(tag)}
                    className="rounded-full bg-cream-100 px-3 py-1 text-xs text-sage-800 hover:bg-blush-100 hover:text-blush-600 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-10 text-center text-sm text-sage-700">
              No flowers matching &ldquo;<span className="font-semibold text-sage-900">{searchTerm}</span>&rdquo; found.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2">
              {filtered.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => handleSelectProduct(prod.slug)}
                  className="flex items-center justify-between rounded-xl p-2.5 hover:bg-cream-100 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="h-12 w-12 rounded-lg object-cover bg-cream-200"
                    />
                    <div>
                      <p className="font-serif text-sm font-semibold text-sage-900">{prod.name}</p>
                      <p className="text-xs text-sage-700">{prod.category} • ${prod.price}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blush-500 hover:underline">
                    View
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
