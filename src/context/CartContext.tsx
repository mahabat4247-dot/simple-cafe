import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product, ArrangementSize } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size?: ArrangementSize, quantity?: number, selectedDate?: string, cardMessage?: string) => void;
  removeFromCart: (productId: string, size: ArrangementSize) => void;
  updateQuantity: (productId: string, size: ArrangementSize, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  freeShippingThreshold: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'simple_cafe_cart_v1';

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignore storage errors
    }
  }, [cart]);

  const getSizePriceMultiplier = (size: ArrangementSize) => {
    switch (size) {
      case 'Deluxe': return 1.25;
      case 'Premium': return 1.5;
      case 'Standard':
      default: return 1.0;
    }
  };

  const addToCart = (
    product: Product,
    size: ArrangementSize = 'Standard',
    quantity: number = 1,
    selectedDate?: string,
    cardMessage?: string
  ) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        if (selectedDate) updated[existingIndex].selectedDate = selectedDate;
        if (cardMessage) updated[existingIndex].cardMessage = cardMessage;
        return updated;
      }

      return [...prevCart, { product, size, quantity, selectedDate, cardMessage }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, size: ArrangementSize) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const updateQuantity = (productId: string, size: ArrangementSize, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce((sum, item) => {
    const itemPrice = Math.round(item.product.price * getSizePriceMultiplier(item.size));
    return sum + itemPrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        freeShippingThreshold: 75,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
