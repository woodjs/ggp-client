import { useState, useCallback } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.productId === item.productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === item.productId
            ? { ...i, grams: i.grams + item.grams }
            : i
        );
      }
      return [...prev, item];
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  return { cart, addToCart, removeFromCart, clearCart };
};
