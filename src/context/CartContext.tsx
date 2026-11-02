import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, GarmentSize } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, size: GarmentSize, quantity?: number) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  subtotal: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'sard_cart_v2';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure price is 750 EGP and originalPrice is 1200 EGP
        return parsed.map((item: CartItem) => ({
          ...item,
          price: 750,
          originalPrice: 1200
        }));
      }
      return [];
    } catch {
      return [];
    }
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }, [items]);

  const addToCart = (product: Product, size: GarmentSize, quantity: number = 1) => {
    setItems((prev) => {
      const existingId = `${product.id}-${size}`;
      const existing = prev.find((item) => item.id === existingId);
      if (existing) {
        return prev.map((item) =>
          item.id === existingId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      const newItem: CartItem = {
        id: existingId,
        productId: product.id,
        title: product.title,
        titleAr: product.titleAr,
        colorName: product.colorName,
        colorNameAr: product.colorNameAr,
        storyPhrase: product.storyPhrase,
        storyPhraseAr: product.storyPhraseAr,
        size,
        price: 750,
        originalPrice: 1200,
        quantity,
        image: product.images.front
      };
      return [...prev, newItem];
    });
    setIsDrawerOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isDrawerOpen,
        setIsDrawerOpen,
        subtotal,
        itemCount
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
