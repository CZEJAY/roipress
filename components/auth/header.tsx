import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Bolt, Plus } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex items-center gap-4">
        <div className="flex  h-10 w-10 items-center justify-center rounded-full bg-primary">
          <Bolt className="text-light-1"/>
        </div>
        <span className="text-black dark:text-white font-bold tracking-widest uppercase  font-mono hidden sm:block sm:text-2xl relative bg-gradient-to-r from-violet-500 via-pink-800 to-yellow-400 bg-clip-text">
          Roicomsat{" "}
          <Plus
            size={18}
            className="absolute top-0 -right-4 dark:text-white text-black"
          />
        </span>
      </div>

      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
