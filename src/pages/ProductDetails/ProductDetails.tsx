import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Star, ShoppingBag, Truck, Calendar, Sparkles, Check, ChevronRight } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { ArrangementSize } from '../../types';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug) || products[0];

  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState<ArrangementSize>('Standard');
  const [quantity, setQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [cardMessage, setCardMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'description' | 'care' | 'delivery'>('description');
  const [addedSuccess, setAddedSuccess] = useState(false);

  useEffect(() => {
    setSelectedImage(product.image);
    setSelectedSize('Standard');
    setQuantity(1);
    setAddedSuccess(false);
  }, [product]);

  const sizePrices: Record<ArrangementSize, number> = {
    Standard: product.price,
    Deluxe: Math.round(product.price * 1.25),
    Premium: Math.round(product.price * 1.5),
  };

  const currentPrice = sizePrices[selectedSize];
  const favorite = isFavorite(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity, selectedDate, cardMessage);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 3000);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.rating >= 4.8))
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs text-sage-800">
        <Link to="/" className="hover:text-sage-900">Home</Link>
        <ChevronRight className="h-3 w-3 text-cream-200" />
        <Link to="/shop" className="hover:text-sage-900">Shop</Link>
        <ChevronRight className="h-3 w-3 text-cream-200" />
        <span className="font-semibold text-sage-900">{product.name}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left: Product Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-cream-100 border border-cream-200 shadow-sm">
            <img
              src={selectedImage}
              alt={product.name}
              className="h-full w-full object-cover object-center transition-all duration-300"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 rounded-full bg-sage-800 px-3.5 py-1 text-xs font-semibold text-white shadow-md">
                {product.badge}
              </span>
            )}
          </div>

          {/* Gallery Thumbnails */}
          <div className="flex gap-4">
            {product.gallery.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(img)}
                className={`relative aspect-square w-20 overflow-hidden rounded-xl border-2 bg-cream-100 transition-all ${
                  selectedImage === img ? 'border-sage-800 ring-2 ring-sage-800/20' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Purchase Options */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-sage-800 mb-1">
              <span className="font-semibold text-sage-900">{product.category}</span>
              <span>•</span>
              <div className="flex items-center text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 font-bold text-sage-900">{product.rating}</span>
                <span className="ml-1 text-sage-800">({product.reviewCount} customer reviews)</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-sage-900">
              {product.name}
            </h1>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-sans text-3xl font-bold text-sage-900">
                ${currentPrice}
              </span>
              {product.originalPrice && selectedSize === 'Standard' && (
                <span className="text-sm text-sage-800 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="mt-3 text-sm text-sage-800 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Size Selector */}
          <div className="space-y-3 border-t border-cream-200 pt-5">
            <label className="text-xs font-bold uppercase tracking-wider text-sage-900 block">
              1. Choose Size
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['Standard', 'Deluxe', 'Premium'] as ArrangementSize[]).map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-xs font-semibold transition-all ${
                    selectedSize === size
                      ? 'border-sage-800 bg-sage-800 text-white shadow-md'
                      : 'border-cream-200 bg-white text-sage-800 hover:bg-cream-50'
                  }`}
                >
                  <span>{size}</span>
                  <span className={`text-[11px] font-normal mt-0.5 ${selectedSize === size ? 'text-cream-200' : 'text-sage-800'}`}>
                    ${sizePrices[size]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Delivery Date Selection */}
          <div className="space-y-3 border-t border-cream-200 pt-5">
            <label className="text-xs font-bold uppercase tracking-wider text-sage-900 flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-blush-500" />
              2. Delivery Date (Optional)
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full rounded-xl border border-cream-200 bg-white px-4 py-2.5 text-xs text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-800"
            />
          </div>

          {/* Gift Message */}
          <div className="space-y-3 border-t border-cream-200 pt-5">
            <label className="text-xs font-bold uppercase tracking-wider text-sage-900 block">
              3. Complimentary Gift Card Message
            </label>
            <textarea
              rows={2}
              placeholder="Write a sweet note to accompany your flowers..."
              value={cardMessage}
              onChange={(e) => setCardMessage(e.target.value)}
              className="w-full rounded-xl border border-cream-200 bg-white px-4 py-2.5 text-xs text-sage-900 placeholder-sage-800 focus:outline-none focus:ring-2 focus:ring-sage-800"
            />
          </div>

          {/* Quantity & CTA Buttons */}
          <div className="space-y-4 border-t border-cream-200 pt-5">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-cream-200 rounded-xl bg-white p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center text-sage-800 hover:bg-cream-100 rounded-lg text-sm font-bold"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-xs text-sage-900">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center text-sage-800 hover:bg-cream-100 rounded-lg text-sm font-bold"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-sage-800 py-3.5 px-6 text-sm font-semibold text-white shadow-md hover:bg-sage-900 active:scale-[0.99] transition-all"
              >
                <ShoppingBag className="h-4 w-4" />
                ADD TO BAG • ${(currentPrice * quantity)}
              </button>

              <button
                type="button"
                onClick={() => toggleFavorite(product.id)}
                aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
                className={`p-3.5 rounded-xl border transition-colors ${
                  favorite
                    ? 'border-rose-200 bg-rose-50 text-rose-600'
                    : 'border-cream-200 bg-white text-sage-800 hover:bg-cream-100'
                }`}
              >
                <Heart className={`h-5 w-5 ${favorite ? 'fill-current' : ''}`} />
              </button>
            </div>

            {addedSuccess && (
              <div className="rounded-xl bg-sage-800 p-3 text-center text-xs font-medium text-white shadow-sm flex items-center justify-center gap-2">
                <Check className="h-4 w-4 text-blush-300" />
                Added to your shopping bag successfully!
              </div>
            )}
          </div>

          {/* Quick guarantees */}
          <div className="rounded-2xl bg-cream-100 p-4 border border-cream-200 space-y-2 text-xs text-sage-800">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-blush-500" />
              <span>Same-day hand delivery across Chicago metro area</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blush-500" />
              <span>7-Day freshness guarantee on all seasonal stems</span>
            </div>
          </div>

        </div>
      </div>

      {/* Tabbed Information Section */}
      <div className="border-t border-cream-200 pt-10">
        <div className="flex space-x-8 border-b border-cream-200 pb-3">
          {(['description', 'care', 'delivery'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`font-serif text-base font-semibold capitalize pb-3 transition-all relative ${
                activeTab === tab
                  ? 'text-sage-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sage-800'
                  : 'text-sage-800 hover:text-sage-900'
              }`}
            >
              {tab === 'description' ? 'Description' : tab === 'care' ? 'Flower Care' : 'Delivery Information'}
            </button>
          ))}
        </div>

        <div className="py-6 text-xs sm:text-sm text-sage-800 leading-relaxed max-w-3xl">
          {activeTab === 'description' && (
            <div className="space-y-3">
              <p>{product.longDescription}</p>
              <p className="font-semibold text-sage-900">Occasions: {product.occasion.join(', ')}</p>
            </div>
          )}

          {activeTab === 'care' && (
            <ul className="list-disc pl-5 space-y-2">
              {product.careInstructions.map((instruction, idx) => (
                <li key={idx}>{instruction}</li>
              ))}
            </ul>
          )}

          {activeTab === 'delivery' && (
            <div className="space-y-2">
              <p>{product.deliveryInfo}</p>
              <p className="text-sage-800 font-medium">Standard delivery window: Mon-Sun 9:00 AM - 6:00 PM CST.</p>
            </div>
          )}
        </div>
      </div>

      {/* "You May Also Like" Section */}
      <div className="border-t border-cream-200 pt-12 space-y-8">
        <h2 className="font-serif text-2xl font-bold text-sage-900">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};
