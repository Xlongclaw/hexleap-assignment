import Image from "next/image";
import React from "react";

export default function SportsWrapper({ sport }: { sport: SportsType }) {
  return (
    <div style={{ boxShadow: "0px 4px 8px 0px #0000000D" }} className="p-3 dark:bg-[#3B3E47] dark:text-white">
      <Image src={sport.image} alt="sport" className="h-96 w-full object-cover" />
      <h3 className="font-medium my-2">{sport.title}</h3>
      <div className="bg-[#eeeeee] dark:bg-[#292B32] flex p-2">
        <div className="w-1/2">
          <h3 className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">Total Events</h3>
          <h3 className="text-[14px] font-medium">
            {sport.totalEvents} Events
          </h3>
        </div>
        <div>
          <h3 className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">Sport</h3>
          <h3 className="text-[14px] font-medium">{sport.sport}</h3>
        </div>
      </div>
    </div>
  );
}
