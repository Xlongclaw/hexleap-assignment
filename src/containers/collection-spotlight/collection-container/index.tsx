import React from "react";
import TicketWrapper from "./ticket-wrapper";
import SVGLeft from "./ticket-wrapper/SVGLeft";
import SVGRight from "./ticket-wrapper/SVGRight";

export default function CollectionContainer() {
  const [collections, setCollections] = React.useState<ICollection[] | null>(
    null
  );
  const [xPos, setxPos] = React.useState(0);
  const refInner = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    fetch("api/spotlight")
      .then((res) => res.json())
      .then((data) => {
        setCollections(data);
      });
  }, []);
  
  if (collections)
    return (
      <div className="flex items-center px-16 gap-24">
        <button
          onClick={() => {
            xPos <= -20 &&
              setxPos(
                (pos) =>
                  pos + refInner.current?.scrollWidth! / collections.length
              );
          }}
          className="border-2 h-16 px-3 border-[#2C9CF0]"
        >
          <SVGLeft />
        </button>
        <div className="overflow-hidden ">
          <div
            style={{ transform: `translateX(${xPos}px)` }}
            ref={refInner}
            className="flex gap-8 py-16 transition-transform ease-out duration-500"
          >
            {collections.map((collection) => (
              <TicketWrapper key={collection._id} collection={collection} />
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            xPos >=
              refInner.current?.scrollWidth! * -1 +
                20 +
                refInner.current?.clientWidth! &&
              setxPos(
                (pos) =>
                  pos - refInner.current?.scrollWidth! / collections.length
              );
          }}
          className="border-2 h-16 px-3 border-[#2C9CF0]"
        >
          <SVGRight />
        </button>
      </div>
    );
}
