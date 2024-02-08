
import { Button } from "@/components/ui/button";
import React from "react";
import { Bolt, Plus } from "lucide-react";
import { ModeToggle } from "@/components/ThemeSwitch";
import Link from "next/link";
import { SignedIn, SignedOut } from "@/components/SignedIn";
// import UserButton from "@/components/UserButton";
import "../../globals.css"

const Header = () => {
  return (
    <nav
      className="
    w-full h-20 bg-transparent backdrop-blur-sm sm:backdrop-blur-lg text-white flex items-center justify-between px-[2.5vw] fixed top-0 shadow-xl z-50
    "
    >
      <Link href={"/"} className="flex items-center gap-2">
        <div className="flex  h-10 w-10 items-center justify-center rounded-full bg-primary">
          <Bolt/>
        </div>
        <span className="text-black dark:text-white font-bold tracking-widest uppercase  font-mono hidden sm:block sm:text-2xl relative bg-gradient-to-r from-violet-500 via-pink-800 to-yellow-400 bg-clip-text">
          Roicomsat {" "} 
          <Plus
            size={18}
            className="absolute top-0 -right-4 dark:text-white text-black"
          />
        </span>
      </Link>

      <SignedIn>
        <div className=" flex items-center gap-1">
          <Link href={"/auth/sign-up"}>
            <Button
              className="
            
             hover:opacity-70 transition-all duration-200
             border-0"
            >
              Get Started
            </Button>
          </Link>
          <Link href={"/auth/login"}>
            <Button
              variant="outline"
              className="text-gray-950 dark:text-gray-50"
            >
              Login
            </Button>
          </Link>
          <div className="text-black dark:text-gray-50">
            <ModeToggle />
          </div>
        </div>
      </SignedIn>

      
    </nav>
  );
};

export default Header;
