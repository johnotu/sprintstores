"use client";

import { Product } from "@/types";
import { API_BASEURL } from "@/utils/data";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useProduct(id: string) {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const requestController = new AbortController();

    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get<Product>(
          `${API_BASEURL}/products/${id}`
        );
        if (data) setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();

    return () => requestController.abort();
  }, [id]);

  return { product, isLoading };
}
