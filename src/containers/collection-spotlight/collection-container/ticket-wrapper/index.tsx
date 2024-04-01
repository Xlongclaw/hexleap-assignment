import React from 'react';
import Image from 'next/image';
import CollectionDetails from './collection-details';
import CollectionButton from './collection-button'; 

/**
 * Props for the TicketWrapper component.
 */
interface PropsType {
  collection: ICollection; // Collection data
}

/**
 * TicketWrapper component renders a ticket wrapper with collection details and button.
 * @component
 * @param props - The props of the component.
 * @returns JSX.Element - The rendered component.
 */
export default function TicketWrapper(props: PropsType): React.JSX.Element {
  return (
    <div className="p-[15px] shadow-custom flex flex-col gap-3 bg-white dark:bg-[#3B3E47] flex-shrink-0 w-[100%] md:w-[45.6%] lg:w-[30%]">
      {/* Render collection image */}
      <Image className='shadow-xl' src={props.collection.image} alt="" />
      <div className="flex items-center gap-4">
        {/* Left dot */}
        <div className="dark:bg-[#1f1e2b] bg-[#f5f9ff] w-7 h-7 rounded-full border-r dark:border-r-0 ml-[-28px]"></div>
        {/* Divider */}
        <div className="border-b-2 border-dashed border-[#A9ACB2] relative flex-1"></div>
        {/* Right dot */}
        <div className="dark:bg-[#1f1e2b] bg-[#f5f9ff] w-7 h-7 rounded-full border-l dark:border-l-0 mr-[-28px]"></div>
      </div>
      {/* Render collection details */}
      <CollectionDetails
        address={props.collection.address}
        title={props.collection.title}
        date={props.collection.date}
      />
      {/* Render collection button */}
      <CollectionButton title={props.collection.collectionType} />
    </div>
  );
}
