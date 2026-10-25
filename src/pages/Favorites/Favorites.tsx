import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { useFavorites } from '../../context/FavoritesContext';
import { products } from '../../data/products';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="border-b border-cream-200 pb-6 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-sage-900 flex items-center gap-3">
            <Heart className="h-7 w-7 text-rose-600 fill-current" />
            Your Favorites ({favoriteProducts.length})
          </h1>
          <p className="mt-2 text-sm text-sage-800">
            Save arrangements you love and return anytime to order or share with someone special.
          </p>
        </div>
      </div>

      {favoriteProducts.length === 0 ? (
        <div className="bg-white rounded-3xl border border-cream-200 p-12 text-center space-y-4 max-w-md mx-auto my-12">
          <div className="h-16 w-16 bg-cream-100 text-rose-500 rounded-full flex items-center justify-center mx-auto">
            <Heart className="h-8 w-8" />
          </div>
          <h2 className="font-serif text-xl font-bold text-sage-900">No Favorites Yet</h2>
          <p className="text-xs text-sage-800 leading-relaxed">
            Click the heart icon on any flower product card to save your favorite arrangements here.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-xl bg-sage-800 px-6 py-3 text-xs font-semibold text-white shadow-sm hover:bg-sage-900 transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            Explore Flowers
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      )}
    </div>
  );
};
