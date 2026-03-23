import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type CartItem = {
  id: string;
  title: string;
  desc: string;
  rating: string;
  price: string;
  categoryId: string;
};

type CartContextType = {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = "APP_CART";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Load cart from storage on app start
  useEffect(() => {
    const loadCart = async () => {
      try {
        const data = await AsyncStorage.getItem(CART_KEY);
        if (data) {
          setCart(JSON.parse(data));
        }
      } catch (err) {
        console.log("Error loading cart:", err);
      }
    };

    loadCart();
  }, []);

  // ✅ Save cart whenever it changes
  useEffect(() => {
    const saveCart = async () => {
      try {
        await AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
      } catch (err) {
        console.log("Error saving cart:", err);
      }
    };

    saveCart();
  }, [cart]);

  // ✅ Add item
  const addItem = (item: CartItem) => {
    console.log(item.title)
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  // ✅ Remove item
  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}