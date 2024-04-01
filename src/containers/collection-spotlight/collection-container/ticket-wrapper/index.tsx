import Image from "next/image";
import React from "react";
import CollectionDetails from "./collection-details";
import CollectionButton from "./collection-button";

interface IProps {
  collection: ICollection;
}

export default function TicketWrapper(props: IProps) {
  return (
    <div className="p-[15px] shadow-custom flex flex-col gap-3 bg-white dark:bg-[#3B3E47] flex-shrink-0 w-[100%] md:w-[45.6%] lg:w-[30%]">
      <Image src={props.collection.image} alt="" />
      <div className="flex items-center gap-4">
        <div className="dark:bg-[#1f1e2b] bg-[#f5f9ff] w-7 h-7 rounded-full border-r dark:border-r-0 ml-[-28px]"></div>
        <div className="border-b-2 border-dashed border-[#A9ACB2] relative flex-1"></div>
        <div className="dark:bg-[#1f1e2b] bg-[#f5f9ff] w-7 h-7 rounded-full border-l dark:border-l-0 mr-[-28px]"></div>
      </div>
      <CollectionDetails
        address={props.collection.address}
        title={props.collection.title}
        date={props.collection.date}
      />
      <CollectionButton title={props.collection.collectionType} />
    </div>
  );
}
