"use client";

import Link from "next/link";
import useProduct from "./use-product";
import { formatAmount } from "@/utils/functions";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import CartContext from "@/contexts/cart";
import useCart from "@/hooks/use-cart";
import { SkeletonLoader } from "@/components/products-loader";

export default function Product({
  params: { id },
}: {
  params: { id: string };
}) {
  const { product, isLoading } = useProduct(id);
  const { addToCart } = useCart();

  if (isLoading) {
    return (
      <>
        <SkeletonLoader />
        <SkeletonLoader />
      </>
    );
  }

  if (product) {
    return (
      <div className="max-w-4xl mx-auto min-h-screen pt-16">
        <div className="flex justify-between place-items-center py-4 px-1 mb-4">
          <Link href="/products">
            <div className="w-9 h-9 shadow-lg bg-white text-cusblack hover:bg-cusblack hover:text-white duration-200 cursor-pointer rounded-full flex justify-center place-items-center">
              <svg
                className="w-4 h-4 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </Link>
          <h4 className="text-cusblack text-md">Product Details</h4>
          <div className="w-8"></div>
        </div>

        <div className="w-full bg-white md:rounded-2xl shadow-lg md:py-8 md:px-10 md:flex overflow-hidden">
          <div className="photo md:w-1/3">
            <div>
              <Image
                width={700}
                height={700}
                className="h-60 object-cover w-full md:rounded-2xl"
                src={product.image}
                alt=""
              />
            </div>
          </div>
          <div className="detail px-2 md:px-0 mt-3 md:mt-0 md:ml-6 py-2 md:w-2/3">
            <p className="flex place-items-center text-sm text-gray-400">
              {product.title}
              <motion.span className="mx-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.span>
              {product.category}
            </p>
            <h1 className="text-3xl text-cusblack font-medium my-3">
              {product.title}
            </h1>
            <p className="text-sm text-gray-400">{product.rating.rate}</p>
            <p className="my-3 font-semibold text-lg text-cusblack">
              {formatAmount(Number(product.price))}
            </p>
            <div className="buttoncart flex mt-5 w-full">
              <button
                onClick={() => addToCart({ ...product, quantity: 1 })}
                className="w-4/5 md:w-3/5 bg-cusblack overflow-hidden py-4 text-white rounded-lg text-sm active:bg-gray-800 duration-100"
              >
                <motion.span
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  className="flex justify-center place-items-center overflow-hidden"
                >
                  Add to cart
                  <span>
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </span>
                </motion.span>
              </button>
              <button
                // onClick={() => dispatch(addToWishlist(item))}
                className="w-1/5 ml-2 bg-white border border-cusblack py-4 text-cusblack rounded-lg text-sm"
              >
                <svg
                  className="w-5 h-5 m-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
