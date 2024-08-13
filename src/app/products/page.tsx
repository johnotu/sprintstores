"use client";

import { Suspense } from "react";
import StorePage from "./store-page";

export default function Store() {
  return (
    <Suspense>
      <StorePage />
    </Suspense>
  );
}
