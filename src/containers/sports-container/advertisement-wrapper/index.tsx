import Image from "next/image";
import React from "react";

export default function AdvertisementWrapper({
  advertisement,
}: {
  advertisement: IAdvertisement;
}) {
  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px #0000000D" }}
      className="p-3 dark:bg-[#3B3E47] dark:text-white"
    >
      <div className="w-full h-full border border-[#006555]/50">
        <Image
          src={advertisement.image}
          alt="sport"
          className="h-52 w-full object-cover"
        />
        <div className="mt-4 px-3">
          <h3 className="font-medium text-[19px]">{advertisement.title}</h3>
          <h4 className="my-2 text-[13px] dark:text-[#DFDFDF]">
            {advertisement.desc}
          </h4>
        </div>
      </div>
    </div>
  );
}
