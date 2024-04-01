import React, { useRef, useState, useEffect } from 'react'; 
import TicketWrapper from './ticket-wrapper'; 
import SVGLeft from './ticket-wrapper/SVGLeft'; 
import SVGRight from './ticket-wrapper/SVGRight'; 

/**
 * Props for the CollectionContainer component.
 */
interface PropsType {}

/**
 * CollectionContainer component displays a collection container with left and right navigation buttons.
 * @returns - The rendered component.
 */
const CollectionContainer: React.FC<PropsType> = () => {
  const [collections, setCollections] = useState<ICollection[] | null>(null);
  const [xPos, setxPos] = useState(0); 
  const refInner = useRef<HTMLDivElement>(null);

  // Fetch collections data on component mount
  useEffect(() => {
    fetch('api/spotlight')
      .then((res) => res.json())
      .then((data) => {
        setCollections(data);
      });
  }, []);

  // Render collections if available
  if (collections) 
    return (
      <div className="flex items-center smd:px-[20%] md:px-16 gap-2 sm:gap-8 xl:gap-24 justify-center">
        {/* Left navigation button */}
        <button
          onClick={() => {
            // Move left if position is less than or equal to -20
            xPos <= -20 &&
              setxPos((pos) => pos + refInner.current?.scrollWidth! / collections.length);
          }}
          className="border-2 h-12 xs:h-16 px-2 xs:px-3 border-[#2C9CF0]"
        >
          <SVGLeft />
        </button>
        <div className="overflow-hidden w-[12.2rem] smd:w-auto">
          <div
            style={{ transform: `translateX(${xPos}px)` }}
            ref={refInner}
            className="flex gap-[5%] xl:gap-8 py-16 transition-transform ease-out duration-500"
          >
            {/* Map through collections and render TicketWrapper for each */}
            {collections.map((collection) => (
              <TicketWrapper key={collection._id} collection={collection} />
            ))}
          </div>
        </div>
        {/* Right navigation button */}
        <button
          onClick={() => {
            // Move right if position is greater than or equal to total scroll width
            xPos >=
              refInner.current?.scrollWidth! * -1 +
                20 +
                refInner.current?.clientWidth! &&
              setxPos((pos) => pos - refInner.current?.scrollWidth! / collections.length);
          }}
          className="border-2 h-12 xs:h-16 px-2 xs:px-3 border-[#2C9CF0]"
        >
          <SVGRight />
        </button>
      </div>
    );
    return <></>; // Return null if collections data is not available
  };

export default CollectionContainer;
