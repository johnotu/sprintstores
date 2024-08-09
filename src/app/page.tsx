"use client";

import { storeName } from "@/utils/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const line = storeName;

  const sentence = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    initial: {
      opacity: 0,
      y: 400,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };
  return (
    <>
      <div className="absolute top-1/3 z-20 flex flex-col place-items-center w-full">
        <div className="">
          <motion.div
            variants={sentence}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-4xl md:text-6xl font-semibold text-black  overflow-hidden"
          >
            <div className="flex overflow-hidden">
              {line.split("").map((char, idx) => {
                return (
                  <motion.div key={char + "-" + idx} variants={letter}>
                    {char}
                  </motion.div>
                );
              })}
            </div>
            <Link href="/store/">
              <motion.p
                variants={letter}
                className="flex justify-center w-full place-items-center text-black underline mt-5 text-sm font-normal cursor-pointer"
              >
                Go to store
                <span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </motion.p>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
