import { optionsData } from "@/optionsData";
import Image from "next/image";
import React from "react";

export const Options = () => {
  const optionsEl = optionsData.map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-2 w-[288px] h-[80px] px-4 bg-white rounded-lg hover:scale-105 transition-all cursor-pointer"
    >
      <Image
        src={`/images/${item.img}.png`}
        width={36}
        height={36}
        alt={item.title}
      />
      <h1 className="text-[16px]">{item.title}</h1>
    </div>
  ));

  return (
    <div className="px-10 w-full flex justify-center">
      <div className="min-w-[85%] flex flex-wrap gap-5 justify-center">
        {optionsEl}
      </div>
    </div>
  );
};
