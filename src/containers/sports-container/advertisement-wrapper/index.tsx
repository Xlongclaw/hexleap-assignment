import React from 'react'; 
import Image from 'next/image';

/**
 * Interface representing advertisement data.
 */
interface IAdvertisement {
  image: string; // URL of the advertisement image
  title: string; // Title of the advertisement
  desc: string; // Description of the advertisement
}

/**
 * AdvertisementWrapper component displays an advertisement.
 * @param props - Props for the component.
 * @param props.advertisement - Advertisement data.
 * @returns Rendered component.
 */
const AdvertisementWrapper: React.FC<{ advertisement: IAdvertisement }> = ({
  advertisement,
}) => {
  return (
    <div
      style={{ boxShadow: '0px 4px 8px 0px #0000000D' }}
      className="p-[10px] bg-white dark:bg-[#3B3E47] dark:text-white" 
    >
      <div className="w-full h-full border border-[#006555]/50 relative"> {/* Container for advertisement */}
        <h5 className="absolute right-[-1px] top-[-1px] text-[13px] text-white px-3 py-1 bg-black">Ad</h5> {/* Advertisement tag */}
        <Image
          src={advertisement.image} 
          alt="Advertisement" 
          className="h-52 w-full object-cover"
        />
        <div className="mt-4 px-3"> {/* Container for advertisement details */}
          <h3 className="font-medium text-[19px]">{advertisement.title}</h3> {/* Advertisement title */}
          <h4 className="my-2 text-[13px] dark:text-[#DFDFDF]">{advertisement.desc}</h4> {/* Advertisement description */}
        </div>
      </div>
    </div>
  );
};

export default AdvertisementWrapper;
