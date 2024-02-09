
import React from "react";
import { NewPasswordForm } from "@/components/auth/new-password-form";

const page = () => {
  return (
    <>
      <React.Suspense  fallback={<div>Loading...</div>}>
        <NewPasswordForm />
      </React.Suspense>
    </>
  );
};

export default page;
