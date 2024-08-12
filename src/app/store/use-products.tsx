"use client";

import { Product } from "@/types";
import { API_BASEURL } from "@/utils/data";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const requestController = new AbortController();

    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get<Product[]>(
          `${API_BASEURL}/products${category ? "/category/" + category : ""}`
        );
        if (data) setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();

    return () => requestController.abort();
  }, [category]);

  return { products, isLoading };
}
