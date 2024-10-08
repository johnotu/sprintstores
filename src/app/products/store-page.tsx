"use client";

import { useState } from "react";
import useProducts from "./use-products";
import CategoriesNav from "@/components/categories-nav";
import SortDropdown from "@/components/sort-dropdown";
import GridSelector from "@/components/grid-selector";
import ProductsList from "@/components/products-list";
import StoreCarousel from "@/components/store-carousel";
import useCategories from "./use-categories";
import TopSearch from "@/components/top-search";

export default function StorePage() {
  const { products, isLoading, category } = useProducts();
  const { categories } = useCategories();

  const [openCategoryMenu, setOpenCategoryMenu] = useState<boolean>(false);
  const [grid, setGrid] = useState<number>(4);

  const toggleOpenCategoryMenu = () =>
    setOpenCategoryMenu((openCategoryMenu) => !openCategoryMenu);

  const handleSetGrid = (grid: number) => {
    setGrid(grid);
  };

  return (
    <div className="min-h-screen bg-cusgray pb-10">
      <button
        onClick={toggleOpenCategoryMenu}
        className="w-12 h-12 rounded-full bg-white fixed z-30 drop-shadow-2xl lg:hidden flex justify-center place-items-center bottom-0 left-0 m-5"
      >
        <svg
          className="w-6 text-cusblack h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </button>
      <div className="max-w-6xl mx-auto pt-14 md:px-0">
        <TopSearch products={products} />
        <div className="grid grid-cols-4 gap-x-6">
          <div
            onClick={toggleOpenCategoryMenu}
            className={`${
              openCategoryMenu ? `fixed` : `hidden`
            } lg:static lg:inline lg:bg-cusgray h-screen bg-opacity-30 z-20 flex w-full justify-center place-items-center top-0 lg:p-4`}
          >
            <CategoriesNav
              currentCategory={category}
              categories={categories || []}
            />
          </div>
          <div className="col-span-4 md:col-span-4 lg:col-span-3 flex flex-col py-4 mx-2 md:mx-0">
            <StoreCarousel />
            <div className="rounded-2xl overflow-hidden shadow-lg w-full bg-white mt-6 px-5 py-4">
              <div className="mb-3">
                <div className="flex justify-between place-items-center text-gray-600 text-sm relative">
                  <GridSelector setGrid={handleSetGrid} />
                  <SortDropdown />
                </div>
              </div>
              <ProductsList
                isLoading={isLoading}
                products={products}
                grid={grid}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
