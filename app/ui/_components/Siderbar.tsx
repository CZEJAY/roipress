"use client";
import { Links } from "@/constants";
import clsx from "clsx";
import {
  ArrowLeftCircle,
  Bolt,
  LucideArrowRightCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBolt } from "react-icons/fa";
import ModeSide from "./ModeSide";
import { useTrigger } from "@/components/context/store/UseTrigger";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Siderbar = () => {
  const params = usePathname();
  const { toggleIsOpen, isOpen } = useTrigger();
  // console.log(isOpen);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "x" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggleIsOpen();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggleIsOpen]);
  return (
    <div
      className={clsx(
        "leftsidebar1 transition-all duration-300",
        isOpen && "w-60 transition-all duration-300"
      )}
    >
      <div className="flex items-center pl-1">
        <div className="">
          <div className="flex  h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Bolt className="text-light-1" />
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "w-full mb-auto flex flex-col gap-7 items-center justify-center pt-10"
        )}
      >
        {Links.map((item, index) => {
          const { icon: Icon, pathname, label } = item;
          const isActive = params === pathname;
          return (
            <Link
              key={index}
              href={pathname}
              className={clsx(
                "relative text-neutral-500 w-full pl-10 flex items-center gap-9 cursor-pointer hover:dark:text-light-1 hover:text-dark-1 transition-all duration-200",
                isActive && "text-light-1 dark:bg-dark-1 bg-light-1 py-3"
              )}
            >
              <div className="">
                <Icon
                  className={clsx(isActive && "text-dark-1 dark:text-light-1")}
                />
              </div>
              <div className="">
                <span
                  className={clsx(
                    "transition-all duration-400 hidden",
                    isActive && "text-dark-1 dark:text-light-1",
                    isOpen && "opacity-100 !flex"
                  )}
                >
                  {label}
                </span>
              </div>
              {isActive && (
                <span className="absolute h-7 w-1 bg-primary right-0 top-[11.5px] rounded-tl rounded-bl transition-all duration-300"></span>
              )}
            </Link>
          );
        })}

        <div className={clsx("w-full pl-6")}>
          <ModeSide />
        </div>
      </div>

      <div className="flex gap-6 flex-col text-neutral-500 w-full pl-10">
        <div className="flex items-center gap-9">
          <div className="">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <LucideArrowRightCircle
                    onClick={toggleIsOpen}
                    className={clsx(
                      "cursor-pointer rotate-0 hover:dark:text-light-1 hover:text-dark-1 transition-all duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </TooltipTrigger>
                <TooltipContent>⌘ x toggle sidebar </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {isOpen && (
            <span
              className={clsx(
                "transition-all duration-400 hidden text-sm",
                isOpen && "!block"
              )}
            >
              Toggle
            </span>
          )}
        </div>
        <div className="flex items-center gap-9">
          <div className="">
            <Settings
              className={clsx(
                "cursor-pointer hover:dark:text-light-1 hover:text-dark-1 transition-all duration-200 ",
                isOpen && "rotate-180"
              )}
            />
          </div>
          {isOpen && (
            <span
              className={clsx(
                "transition-all duration-400 opacity-0 text-sm",
                isOpen && "!opacity-100"
              )}
            >
              Settings
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Siderbar;
