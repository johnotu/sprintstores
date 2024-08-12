"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import MenuNav from "./menu-nav";
import { useState } from "react";
import { storeName } from "@/utils/data";

export default function Header() {
  const router = useRouter();

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleIsNavOpen = () => setIsNavOpen((isNavOpen) => !isNavOpen);

  return (
    <nav className="w-full mx-auto fixed bg-cusgray z-30 py-2 md:px-0 duration-200">
      <div className="px-2 navtop relative max-w-6xl mx-auto flex justify-between place-items-center py-1.5">
        <div className="burger flex items-center">
          <button onClick={toggleIsNavOpen}>
            <svg
              className="w-7 h-7 text-cusblack"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h3 className="hidden md:inline text-md mr-2 font-semibold ml-3 text-cusblack">
            {storeName}
          </h3>
        </div>
        <div className="profile flex items-center place-items-center">
          <Link href="/store">
            <div className="w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200">
              <svg
                className="w-6 h-6 text-cusblack m-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
          </Link>
          <div
            onClick={() => router.push("/cart")}
            className="w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200"
          >
            <svg
              className="w-6 h-6 text-cusblack m-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
        </div>
      </div>
      <MenuNav handleOpen={toggleIsNavOpen} isOpen={isNavOpen} />
    </nav>
  );
}
