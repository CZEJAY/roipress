"use client";
import React, { useState } from "react";
import { Calendar as LucideCalendar } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";

const Calender = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className=" hidden lg:flex text-zinc-800 dark:text-light-1 gap-2 items-center justify-center">
      <div className="">
        <Popover>
          <PopoverTrigger>
            <LucideCalendar className=" " />
          </PopoverTrigger>
          <PopoverContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date: Date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
              initialFocus
              className="rounded-md border"
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className=" text-sm font-extrabold font-['Inter'] leading-snug">
        <div className="">{date && `${format(date, "PPP")}`}</div>
      </div>
    </div>
  );
};

export default Calender;
