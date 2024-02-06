"use client";
import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useTrigger } from "@/components/context/store/UseTrigger";

const ModeSide = ({isMobile}: {isMobile?: true}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setIsMounted] = useState(false);
  const { isOpen } = useTrigger();

  useEffect(() => {
    if (!mounted) {
      setIsMounted(true);
    }
  }, []);
  if (!mounted) return <ModeSkeleton />;
  return (
    <div className={clsx(
      "flex items-center gap-5 ",
      isMobile && "rotate-90 mt-11"
    )}>
      <div className="">
        <div className="flex flex-col gap-4 h-28 justify-evenly w-[58px] items-center mt-6 rounded-full border-2 bg-light-1 dark:bg-dark-3 py-1">
          <Sun
            size={20}
            className={clsx(
              "cursor-pointer rounded-full w-11 h-12 p-3",
              theme === "light" && "bg-emerald-500/70 text-light-1"
            )}
            onClick={() => setTheme("light")}
          />
          <Moon
            size={20}
            className={clsx(
              "cursor-pointer rounded-full w-11 h-12 p-3 ",
              theme === "dark" && "bg-emerald-500/70 text-light-1",
              theme !== "dark" && "text-neutral-500",
              isMobile && "rotate-180"
            )}
            onClick={() => setTheme("dark")}
          />
        </div>
      </div>

      {isOpen && !isMobile && (
        <div className="flex flex-col items-center h-28 justify-between mt-1">
          <div className="mt-5 text-sm text-neutral-500">Light Mode</div>
          {/* <div className="w-1 border h-full rounded animate-pulse"></div> */}
          <div className="text-sm text-neutral-500">Dark Mode</div>
        </div>
      )}
    </div>
  );
};

export default ModeSide;

export const ModeSkeleton = () => {
  return (
    <Skeleton className="flex flex-col gap-4 h-28 justify-evenly w-[58px] items-center mt-6 rounded-full border-2 bg-light-1 dark:bg-dark-3 py-1">
      <div className="flex w-full items-center gap-2 flex-col">
        <Skeleton className="cursor-pointer rounded-full w-11 h-12 p-3" />
        <Skeleton className="cursor-pointer rounded-full w-11 h-12 p-3" />
      </div>
    </Skeleton>
  );
};
