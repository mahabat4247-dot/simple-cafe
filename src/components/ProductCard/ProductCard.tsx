import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(product.id);

  return (
    <div className="group relative flex flex-col rounded-2xl bg-white p-3 shadow-sm border border-cream-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-cream-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-medium tracking-wide shadow-sm ${
              product.badge === 'Best Seller'
                ? 'bg-sage-800 text-white'
                : product.badge === 'Sale'
                ? 'bg-rose-600 text-white'
                : 'bg-blush-500 text-white'
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Favorite Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(product.id);
          }}
          aria-label={favorite ? `Remove ${product.name} from favorites` : `Add ${product.name} to favorites`}
          className={`absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm transition-colors duration-200 hover:bg-white ${
            favorite ? 'text-rose-600' : 'text-sage-800 hover:text-rose-600'
          }`}
        >
          <Heart className={`h-5 w-5 ${favorite ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Add overlay button */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, 'Standard', 1);
            }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-sage-800 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-sage-900 active:scale-[0.98] transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="mt-3 flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-sage-700">
            <span className="font-medium text-sage-800">{product.category}</span>
            <span>•</span>
            <div className="flex items-center text-amber-500">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span className="ml-1 text-xs font-semibold text-sage-900">{product.rating}</span>
              <span className="ml-0.5 text-xs text-sage-700">({product.reviewCount})</span>
            </div>
          </div>

          <Link to={`/product/${product.slug}`} className="block mt-1">
            <h3 className="font-serif text-lg font-semibold text-sage-900 hover:text-sage-700 transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 line-clamp-2 text-xs text-sage-700">
            {product.description}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-cream-100 pt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-sans text-lg font-bold text-sage-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-sage-700 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <Link
            to={`/product/${product.slug}`}
            className="text-xs font-semibold text-sage-800 hover:text-sage-900 hover:underline"
          >
            View Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};
