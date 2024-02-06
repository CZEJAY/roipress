"use client";
import React, { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Settings } from "lucide-react";
import { FaBolt } from "react-icons/fa";
import { Links } from "@/constants";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useTrigger } from "@/components/context/store/UseTrigger";
import ModeSide from "@/app/ui/_components/ModeSide";

const MenuTrigger = () => {
  const params = usePathname();
  const { toggleIsOpen, isOpen } = useTrigger();

  return (
    <Sheet>
      <SheetTrigger className="text-neutral-950 dark:text-neutral-50">
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="overflow-y-scroll">
        <SheetHeader className="w-full">
          <SheetTitle>
            <div className="flex items-center gap-9">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/70">
                <FaBolt className="text-light-1" />
              </div>
              <div className="">Dashboard</div>
            </div>
          </SheetTitle>
          <SheetDescription className="w-full flex-col h-full pt-11 flex items-center  gap-9">
            {Links.map((item, index) => {
              const { icon: Icon, pathname, label } = item;
              const isActive = params === pathname;
              return (
                <Link
                  key={index}
                  href={pathname}
                  className={clsx(
                    "relative text-neutral-500 w-full pl-10 flex items-center gap-9 cursor-pointer hover:dark:text-light-1 hover:text-dark-1 transition-all duration-200",
                    isActive && "text-light-1"
                  )}
                >
                  <Icon
                    className={clsx(
                      isActive && "text-dark-1 dark:text-light-1"
                    )}
                  />
                  <span
                    className={clsx(
                      "transition-all duration-400",
                      isActive && "text-dark-1 dark:text-light-1 capitalize"
                    )}
                  >
                    {label}
                  </span>
                  {isActive && (
                    <span className="absolute h-5 w-1 bg-dark-1 dark:bg-light-1 right-0 top-0.5 rounded-tl rounded-bl transition-all duration-300"></span>
                  )}
                </Link>
              );
            })}
            <div className={clsx("w-full pl-6")}>
              <ModeSide isMobile />
            </div>

            <div className="flex gap-6 flex-col text-neutral-500 w-full pl-10">
      
              <div className="flex items-center gap-9">
                <div className="">
                  <Settings
                    className={clsx(
                      "cursor-pointer hover:dark:text-light-1 hover:text-dark-1 transition-all duration-200 ",
                    )}
                  />
                </div>
                  <span
                    className={clsx(
                      "transition-all duration-400 text-sm",
                    )}
                  >
                    Settings
                  </span>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MenuTrigger;
