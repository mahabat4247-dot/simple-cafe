import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, X, RotateCcw } from 'lucide-react';
import { products } from '../../data/products';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { FlowerType, Occasion, FlowerColor, SortOption } from '../../types';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract query params
  const categoryParam = searchParams.get('category');
  const occasionParam = searchParams.get('occasion');
  const filterQueryParam = searchParams.get('filter');

  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    categoryParam && categoryParam !== 'Occasions' ? [categoryParam] : []
  );
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>(
    occasionParam ? [occasionParam] : []
  );
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(120);
  const [sortBy, setSortBy] = useState<SortOption>(
    filterQueryParam === 'bestsellers' ? 'best-selling' : 'featured'
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const flowerTypes: FlowerType[] = [
    'Roses',
    'Peonies',
    'Lilies',
    'Tulips',
    'Hydrangeas',
    'Mixed Bouquets',
    'Orchids',
  ];

  const occasions: Occasion[] = [
    'Birthday',
    'Anniversary',
    'Love & Romance',
    'Congratulations',
    'Thank You',
    'Sympathy',
    'Just Because',
  ];

  const flowerColors: FlowerColor[] = ['Pink', 'Red', 'White', 'Yellow', 'Purple', 'Pastel'];

  const handleTypeToggle = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleOccasionToggle = (occ: string) => {
    setSelectedOccasions((prev) =>
      prev.includes(occ) ? prev.filter((o) => o !== occ) : [...prev, occ]
    );
  };

  const handleColorToggle = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const resetFilters = () => {
    setSelectedTypes([]);
    setSelectedOccasions([]);
    setSelectedColors([]);
    setMaxPrice(120);
    setSortBy('featured');
    setSearchParams({});
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Filter by flower type
        if (selectedTypes.length > 0 && !selectedTypes.includes(p.category)) {
          return false;
        }
        // Filter by occasion
        if (
          selectedOccasions.length > 0 &&
          !p.occasion.some((occ) => selectedOccasions.includes(occ))
        ) {
          return false;
        }
        // Filter by color
        if (
          selectedColors.length > 0 &&
          !p.colors.some((color) => selectedColors.includes(color as FlowerColor))
        ) {
          return false;
        }
        // Filter by price
        if (p.price > maxPrice) {
          return false;
        }
        // Filter query param for best sellers
        if (filterQueryParam === 'bestsellers' && p.badge !== 'Best Seller') {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'best-selling') return b.reviewCount - a.reviewCount;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured default
      });
  }, [selectedTypes, selectedOccasions, selectedColors, maxPrice, sortBy, filterQueryParam]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="border-b border-cream-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-sage-900">
            Flower Collections
          </h1>
          <p className="mt-2 text-sm text-sage-800">
            Explore fresh handcrafted floral arrangements designed for life’s beautiful moments.
          </p>
        </div>

        {/* Mobile Filter Toggle & Desktop Sort */}
        <div className="flex items-center justify-between md:justify-end gap-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 rounded-xl bg-cream-100 px-4 py-2 text-xs font-semibold text-sage-800 hover:bg-cream-200 transition-colors"
          >
            <Filter className="h-4 w-4" />
            Filters
          </button>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-xs font-medium text-sage-800 whitespace-nowrap">
              Sort By:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="rounded-xl border border-cream-200 bg-white px-3 py-2 text-xs font-semibold text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-800"
            >
              <option value="featured">Featured</option>
              <option value="best-selling">Best Selling</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block space-y-8 pr-4 border-r border-cream-200">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-sage-900 flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-blush-500" />
              Filter By
            </h3>
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs text-sage-800 hover:text-blush-500 font-medium flex items-center gap-1"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </button>
          </div>

          {/* Flower Type */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sage-900">Flower Type</h4>
            <div className="space-y-2">
              {flowerTypes.map((type) => (
                <label key={type} className="flex items-center gap-2.5 text-xs text-sage-800 cursor-pointer hover:text-sage-900">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleTypeToggle(type)}
                    className="rounded border-cream-200 text-sage-800 focus:ring-sage-800 h-4 w-4"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Occasion */}
          <div className="space-y-3 border-t border-cream-200 pt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sage-900">Occasion</h4>
            <div className="space-y-2">
              {occasions.map((occ) => (
                <label key={occ} className="flex items-center gap-2.5 text-xs text-sage-800 cursor-pointer hover:text-sage-900">
                  <input
                    type="checkbox"
                    checked={selectedOccasions.includes(occ)}
                    onChange={() => handleOccasionToggle(occ)}
                    className="rounded border-cream-200 text-sage-800 focus:ring-sage-800 h-4 w-4"
                  />
                  <span>{occ}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="space-y-3 border-t border-cream-200 pt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sage-900">Color Palette</h4>
            <div className="flex flex-wrap gap-2">
              {flowerColors.map((color) => {
                const active = selectedColors.includes(color);
                return (
                  <button
                    key={color}
                    type="button"
                    onClick={() => handleColorToggle(color)}
                    className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
                      active
                        ? 'bg-sage-800 text-white border-sage-800'
                        : 'bg-cream-50 text-sage-800 border-cream-200 hover:bg-cream-100'
                    }`}
                  >
                    {color}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Max Price Range Slider */}
          <div className="space-y-3 border-t border-cream-200 pt-6">
            <div className="flex justify-between items-center text-xs">
              <h4 className="font-bold uppercase tracking-wider text-sage-900">Max Price</h4>
              <span className="font-bold text-sage-900">${maxPrice}</span>
            </div>
            <input
              type="range"
              min="50"
              max="150"
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-sage-800"
            />
          </div>
        </aside>

        {/* Main Product Grid */}
        <main className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-cream-200 p-12 text-center space-y-4">
              <h3 className="font-serif text-xl font-bold text-sage-900">No flowers found</h3>
              <p className="text-xs text-sage-800 max-w-sm mx-auto">
                No floral arrangements match your selected filter criteria. Try adjusting your filters.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="rounded-xl bg-sage-800 px-6 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-sage-900 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-sage-900/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-cream-200">
              <h3 className="font-serif text-lg font-bold text-sage-900">Filters</h3>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 rounded-full text-sage-800 hover:bg-cream-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="py-4 space-y-6">
              {/* Type */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sage-900">Type</h4>
                {flowerTypes.map((t) => (
                  <label key={t} className="flex items-center gap-2 text-xs text-sage-800">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(t)}
                      onChange={() => handleTypeToggle(t)}
                    />
                    <span>{t}</span>
                  </label>
                ))}
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold uppercase text-sage-900">Max Price</span>
                  <span>${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="150"
                  step="5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full rounded-xl bg-sage-800 py-3 text-xs font-semibold text-white"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
