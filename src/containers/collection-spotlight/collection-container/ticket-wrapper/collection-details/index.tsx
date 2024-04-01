import React from 'react';
import { Poppins } from 'next/font/google';

/**
 * Props for the CollectionDetails component.
 */
interface PropsType {
  title: string; // Collection title
  address: string; // Collection address
  date: number; // Collection date
}

// Define Poppins font with specified weight and subsets
const poppins = Poppins({ weight: '500', subsets: ['latin'] });

/**
 * CollectionDetails component renders collection details.
 * @component
 * @param props - The props of the component.
 * @returns  - The rendered component.
 */
export default function CollectionDetails({ title, address, date }: PropsType): React.JSX.Element {
  return (
    <div className="flex-col flex gap-2 dark:text-white">
      {/* Render collection title */}
      <h3 className={`font-medium text-sm xl:text-[17px] text-center ${poppins.className}`}>{title}</h3>
      <div className={`flex justify-center text-xs xl:text-[14px] gap-2 ${poppins.className}`}>
        {/* Render date components */}
        <h4>OCT</h4>
        <div className="w-[1px] my-[5px] dark:bg-white bg-black"></div>
        <h4>SUN</h4>
        <div className="w-[1px] my-[5px] dark:bg-white bg-black"></div>
        <h4>4:30 PM</h4>
      </div>
      {/* Render collection address */}
      <h3 className="text-center text-[14px] text-[#525965] dark:text-white">{address}</h3>
    </div>
  );
}
