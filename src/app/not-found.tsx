import { storeName } from "@/utils/data";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${storeName} | 404`,
};

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-cusgray flex justify-center place-items-center">
      <div className="flex flex-col justify-center place-items-center">
        <h1 className="text-6xl text-cusblack">404</h1>
        <h1 className="text-xl text-gray-400">
          Not sure what you&apos;re looking for, it&apos;s probably not here
        </h1>
      </div>
    </div>
  );
}
