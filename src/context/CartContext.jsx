"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Cargar carrito desde localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart:v1");
      if (raw) setCart(JSON.parse(raw));
    } catch (e) {
      console.error("Error reading cart from localStorage", e);
    }
  }, []);

  // Persistir cambios
  useEffect(() => {
    try {
      localStorage.setItem("cart:v1", JSON.stringify(cart));
    } catch (e) {
      console.error("Error saving cart to localStorage", e);
    }
  }, [cart]);

  function addToCart(product, qty = 1) {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + qty } : p));
      }
      return [...prev, { ...product, qty }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function updateQty(id, qty) {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce((s, p) => s + p.price * p.qty, 0);
  const count = cart.reduce((s, p) => s + p.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, clearCart, total, count }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export default CartContext;
