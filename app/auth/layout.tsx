import React from "react";
import "../globals.css";

import Welcome from "@/components/Welcome";
import { Metadata } from "next";
import { ThemeProviderComponent } from "@/components/context/ThemeProvider";
import AuthContext from "@/components/context/AuthContext";
import FloatingMode from "@/components/FloatingMode";

export const metadata: Metadata = {
  title: "Roicomsat | Authentication",
  description: "A social network for developers.",
  icons: "/light.jpg",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="layout-bg">
        <ThemeProviderComponent
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthContext>
            <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 text-dark-1 dark:text-light-1">
              <div className="relative hidden h-full flex-col  p-10 text-white lg:flex">
                <div className="absolute inset-0" />
                <div className="relative z-20 flex items-center text-dark-1 dark:text-light-1 text-lg font-medium">
                  Roicomsat Inc
                </div>
                <div className="my-auto">
                <Welcome />
                </div>
                <div className="relative z-20 mt-auto">
                  <blockquote className="space-y-2">
                    <p className="text-lg text-dark-1 dark:text-light-1">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut ullam culpa esse animi illum, corrupti qui quae nam saepe alias ipsa a cupiditate inventore laudantium iure non facilis velit.
                    </p>
                    <footer className="text-sm text-dark-1 dark:text-light-1">
                      &copy; 2030 Roicomsat. All rights reserved.
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="lg:p-8 relative ">
                <div className="bg-[#f082e544] hidden md:block absolute top-[-6rem] -z-10 left-0 h-[20rem]   w-[30rem] blur-[5rem] rounded-full dark:bg-[#71299256]"></div>
                <div className="bg-[#5849df56] hidden md:block absolute bottom-2 md:bottom-0 -z-10 -right-16 md:right-0 h-[15rem] w-[30rem] rounded-full blur-[5rem] dark:bg-[#31091a93]"></div>
                {children}
              </div>
            </div>
          </AuthContext>
          <FloatingMode />
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
