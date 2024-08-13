"use client";

import { useState, useEffect, useContext } from "react";

import { CartItem, Product } from "@/types";
import CartContext from "@/contexts/cart";

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default useCart;
