import { CardWrapper } from "@/components/CardWrapper";
import { homeRoutes, onlineServices } from "@/lib/homeRoutes";
import React from "react";

const Page = () => {
  return (
    <main className="flex flex-col w-full relative gap-5">
        <div className="">
          <h1 className="text-xl font-bold">Cafe Services</h1>
        </div>
        <div className="flex flex-wrap gap-3 items-start w-full justify-center md:justify-start">
          {homeRoutes.map((route) => {
            return (
              <CardWrapper
                hovercolor={route.hovercolor}
                color={route.color}
                content={route.content}
                showfooter
                icon={route.icon}
                headerLabel={route.name}
                key={route.name}
              >
                <div className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quis hic, consequatur alias in ipsum, dolore aperiam
                  maiores
                </div>
              </CardWrapper>
            );
          })}
        </div>
        <h1 className="text-xl font-bold">Communities/Supports</h1>
        <div className="flex flex-wrap gap-3 items-center w-full justify-start ">
          {onlineServices.map((route) => {
            return (
              <CardWrapper
                hovercolor={route.hovercolor}
                color={route.color}
                content={route.content}
                showfooter
                icon={route.icon}
                headerLabel={route.name}
                key={route.name}
              >
                <div className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore 
                </div>
              </CardWrapper>
            );
          })}
        </div>
    </main>
  );
};

export default Page;
