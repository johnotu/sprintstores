"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import { API_BASEURL } from "@/utils/data";

export default function useCategories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const requestController = new AbortController();

    const fetchCategories = async () => {
      try {
        const { data } = await axios.get<string[]>(
          `${API_BASEURL}/products/categories`
        );
        if (data) setCategories(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();

    return () => requestController.abort();
  }, []);

  return { categories, isLoading };
}
