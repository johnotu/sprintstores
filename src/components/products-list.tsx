"use client";

import { Product } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { formatAmount } from "@/utils/functions";
import ProductsLoader from "./products-loader";

export default function ProductsList({
  isLoading,
  products,
  grid,
}: {
  isLoading: boolean;
  products: Product[];
  grid: number;
}) {
  if (isLoading) return <ProductsLoader />;

  if (!products.length)
    return (
      <p className="col-span-full mx-auto text-sm text-gray-400">
        No item found
      </p>
    );

  return (
    <div
      className={`grid grid-cols-${grid} md:grid-cols-${grid} lg:grid-cols-${grid} gap-x-4 gap-y-6`}
    >
      {products.map(({ id, image, title, price, rating }) => (
        <div className="rounded-xl cursor-pointer" key={id}>
          <div className="overflow-hidden cursor-default rounded-xl relative group flex items-center justify-center">
            <motion.div
              initial={{ scale: 1.3, x: 50, opacity: 0 }}
              animate={{ scale: 1, x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ height: "120px" }}
            >
              <Image
                height={700}
                width={700}
                loading="lazy"
                src={image}
                alt=""
                className="rounded-xl w-full h-full bg-cusgray"
              />
            </motion.div>
            <div className="hidden absolute rounded-xl h-full w-full bg-gray-500 backdrop-filter backdrop-blur-sm bg-opacity-30 top-0 group group-hover:flex justify-center place-items-center z-10">
              <div className="flex overflow-hidden cursor-pointer">
                <button className="p-2 bg-white hover:bg-gray-100 active:bg-gray-200 rounded-lg">
                  <svg
                    className="w-6 m-auto h-6 text-cusblack"
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
          <Link href={"/products/" + id} className="px-2 py-2">
            <p className="text-sm line-clamp-1">{title}</p>
            <p className="text-xs my-2 text-gray-400">{rating.rate}</p>
            <p className="text-sm font-semibold">
              {formatAmount(Number(price))}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
