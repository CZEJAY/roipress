import React from "react";
import { Input } from "../ui/input";
import Icon from "../Icons";
import { DefaultCammand } from "./DefaultCammand";

const SearchInput = () => {
  return (
    <div className="p-2 flex w-full items-center relative">
      <Input className="focus:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0 h-12 dark:bg-neutral-950 bg-light-2 placeholder:text-neutral-500 dark:placeholder:text-neutral-500  ring-light-1  text-dark-1 dark:text-light-1 border-2 border-neutral-500/20 dark:border-light-1  rounded w-72" placeholder="Search..."/>
      <div className="">
        <DefaultCammand />
      </div>
    </div>
  );
};

export default SearchInput;
