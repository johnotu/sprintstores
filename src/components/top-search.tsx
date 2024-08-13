"use client";

import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function TopSearch({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    if (searchText.length) {
      const regex = new RegExp(searchText, "i");
      const filteredResult = products.filter((product) =>
        regex.test(product.title)
      );
      setFilteredProducts(filteredResult);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className="navbot bg-cusgray z-30 w-full px-1 md:px-0">
      <div className=" mx-auto md:flex place-items-center max-w-6xl justify-between">
        <div className="category overflow-x-auto flex flex-wrap place-items-center py-2 px-4">
          <button className="bg-cusblack text-white shadow-lg py-2.5 px-6 rounded-3xl text-xs mr-3 mb-2 md:mb-0">
            {category}
          </button>
        </div>
        <div className="flex relative group md:ml-auto justify-between pr-4 place-items-center h-full rounded-3xl bg-white w-full md:w-1/2">
          <input
            onChange={handleChange}
            className="text-xs group pl-4 rounded-3xl p-2.5 focus:outline-none w-full text-cusblack"
            type="text"
            placeholder="Search product"
          />
          <div className="p-5 shadow-lg hidden duration-100 group-focus-within:inline group-active:inline top-11 bg-white absolute rounded-2xl w-full z-20">
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <div className="p-2 flex place-items-center cursor-pointer text-xs font-light text-cusblack hover:bg-gray-100 active:bg-gray-200">
                    <span>
                      <Image
                        width={700}
                        height={700}
                        src={product.image}
                        className="w-7 h-7 mr-1 rounded-lg"
                        alt=""
                      />
                    </span>
                    {product.title}
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-xs text-cusblack font-light">No item found</p>
            )}
          </div>
          <svg
            className="w-4 h-4 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
