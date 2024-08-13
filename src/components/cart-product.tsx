"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import useCart from "@/hooks/use-cart";
import { CartItem } from "@/types";
import { formatAmount } from "@/utils/functions";

export default function CartProduct({ cartItem }: { cartItem: CartItem }) {
  const { removeFromCart, updateQuantity } = useCart();
  return (
    <div
      className="product md:flex justify-between mb-6"
      suppressHydrationWarning
    >
      <Link href={"/products/" + cartItem.id}>
        <div className="image md:flex cursor-pointer">
          <motion.div
            initial={{ scale: 1.5, x: 50, y: -50, opacity: 0 }}
            animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
          >
            <img
              className="w-full md:w-32 h-32 object-cover rounded-xl"
              src={cartItem.image}
              alt=""
            />
          </motion.div>
          <div className="ml-3 flex flex-col text-cusblack justify-between py-2">
            <p className="font-medium">{cartItem.title}</p>
            <ul className="text-xs md:text-sm leading-relaxed text-gray-400">
              <li>Category: {cartItem.category}</li>
              <li>Quantity: {cartItem.quantity}</li>
            </ul>
          </div>
        </div>
      </Link>
      <div className="flex flex-col justify-between py-1">
        <div className="font-semibold text-cusblack text-right">
          <h1 className="font-semibold text-cusblack text-right">
            {formatAmount(Number(cartItem.price))}
          </h1>
        </div>

        <div className="flex ml-auto text-cusblack mt-1 md:mt-0">
          <button
            onClick={() => {
              if (cartItem.quantity > 1)
                updateQuantity(cartItem.id, cartItem.quantity - 1);
            }}
            className="border border-cusblack active:bg-gray-800 rounded-sm p-1 hover:bg-cusblack hover:text-white duration-100"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>
          <button
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
            className="border border-cusblack active:bg-gray-800 rounded-sm p-1 hover:bg-cusblack hover:text-white duration-100 mx-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <button
            onClick={() => removeFromCart(cartItem.id)}
            className="border border-cusblack active:bg-gray-800 rounded-sm p-1 hover:bg-cusblack hover:text-white duration-100 text-xs px-2 font-medium"
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
}
