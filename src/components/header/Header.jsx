import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header className="h-[76px] w-full bg-white flex flex-col items-end justify-center p-8 shadow-sm">
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full w-[40px] h-[40px] object-cover"
          src="/images/profile.png"
          alt="pfp"
          width={40}
          height={40}
        />
        <div>
          <div className="text-sm text-[#1f2121]">Muhammad Afzal</div>
          <div className="text-xs text-[#848e98]">Account Settings</div>
        </div>
        <Image
          src="/images/dropdown.png"
          alt="dropdown"
          width={22}
          height={18}
        />
      </div>
    </header>
  );
};
