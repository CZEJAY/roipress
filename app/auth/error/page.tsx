"use client"
import React from "react";
import { ErrorCard } from "@/components/auth/error-card";

const page = () => {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ErrorCard />
      </React.Suspense>
    </>
  );
};

export default page;
