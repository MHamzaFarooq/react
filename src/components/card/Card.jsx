import { cardsData } from "@/cardsData";
import Image from "next/image";
import React from "react";

export const Card = () => {
  const cardEl = cardsData.map((item) => (
    <section
      key={item.id}
      className="max-w-[428px] w-full min-w-[240px] bg-white rounded-lg shadow-md hover:scale-105 transition-all cursor-pointer"
    >
      <div className="flex items-center gap-4 max-w-[436px] h-[128px] p-7 border-b">
        <Image
          src={`/images/${item.img}.png`}
          width={48}
          height={48}
          alt={`${item.img}`}
        />
        <div>
          <h1 className="text-[20px] font-bold">{item.total}</h1>
          <p className="text-sm text-[#848e98]">{item.label}</p>
        </div>
      </div>
      <div className="flex justify-around py-4">
        <div className="w-1/2 flex flex-col items-center font-bold">
          {item.active}
          <div className="text-sm text-[#848e98] font-normal">
            {item.activeLabel}
          </div>
        </div>
        <div className="h-[36px] w-[1px] bg-[#d1dbe7]"></div>
        <div className="w-1/2 flex flex-col items-center font-bold">
          {item.Deactive}
          <div className="text-sm text-[#848e98] font-normal">
            {item.deactiveLabel}
          </div>
        </div>
      </div>
    </section>
  ));

  return (
    <div className="px-10 mb-10 w-full flex flex-wrap gap-8 justify-center lg:justify-evenly 2xl:justify-between">
      {cardEl}
    </div>
  );
};
