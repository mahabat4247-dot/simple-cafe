import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    freeShippingThreshold,
  } = useCart();

  if (!isCartOpen) return null;

  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const getSizeMultiplier = (size: string) => {
    switch (size) {
      case 'Deluxe': return 1.25;
      case 'Premium': return 1.5;
      default: return 1.0;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-sage-900/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">

          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-cream-200">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-sage-800" />
              <h2 className="font-serif text-lg font-semibold text-sage-900">
                Your Shopping Bag ({cart.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full text-sage-800 hover:bg-cream-100 hover:text-sage-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-cream-50 px-6 py-3 border-b border-cream-200">
            {remainingForFreeShipping > 0 ? (
              <p className="text-xs text-sage-800 font-medium text-center">
                Add <span className="font-bold text-blush-500">${remainingForFreeShipping.toFixed(2)}</span> more to qualify for <span className="font-semibold">FREE Delivery</span>!
              </p>
            ) : (
              <p className="text-xs text-sage-700 font-bold text-center">
                🎉 Congratulations! You unlocked FREE Delivery!
              </p>
            )}
            <div className="mt-2 h-1.5 w-full bg-cream-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blush-500 transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-cream-100">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12">
                <div className="h-16 w-16 rounded-full bg-cream-100 flex items-center justify-center text-sage-800">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-sage-900">Your bag is empty</h3>
                  <p className="text-xs text-sage-700 mt-1 max-w-xs">
                    Discover our handcrafted flower collections and add fresh beauty to your day.
                  </p>
                </div>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 rounded-xl bg-sage-800 px-6 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-sage-900 transition-colors"
                >
                  Explore Flowers
                </Link>
              </div>
            ) : (
              cart.map((item, idx) => {
                const itemUnitPrice = Math.round(item.product.price * getSizeMultiplier(item.size));
                return (
                  <div key={`${item.product.id}-${item.size}-${idx}`} className="py-4 flex gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-20 w-20 rounded-lg object-cover bg-cream-100 flex-shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm font-semibold text-sage-900">
                            {item.product.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id, item.size)}
                            className="text-sage-700 hover:text-rose-600 p-1"
                            aria-label={`Remove ${item.product.name} from cart`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xs text-sage-700">Size: {item.size}</p>
                        {item.selectedDate && (
                          <p className="text-[11px] text-sage-700 mt-0.5">Delivery: {item.selectedDate}</p>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity control */}
                        <div className="flex items-center border border-cream-200 rounded-lg bg-cream-50">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                            className="p-1 text-sage-700 hover:text-sage-900"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-sage-900">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                            className="p-1 text-sage-700 hover:text-sage-900"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Total Price for item */}
                        <span className="text-sm font-bold text-sage-900">
                          ${itemUnitPrice * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="border-t border-cream-200 bg-cream-50 p-6 space-y-4">
              <div className="space-y-1.5 text-xs text-sage-800">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-sage-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery</span>
                  <span className="font-semibold text-sage-900">
                    {subtotal >= freeShippingThreshold ? 'FREE' : '$15.00'}
                  </span>
                </div>
                <div className="border-t border-cream-200 pt-2 flex justify-between text-sm font-bold text-sage-900">
                  <span>Total</span>
                  <span>
                    ${(subtotal + (subtotal >= freeShippingThreshold ? 0 : 15)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  alert('Demo Checkout: Thank you for testing Simple Cafe Flower Store!');
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-sage-800 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-sage-900 active:scale-[0.99] transition-all"
              >
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-[11px] text-sage-700 text-center">
                🔒 Secure SSL Encryption • 100% Happiness Guarantee
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
