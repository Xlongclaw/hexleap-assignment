import React from "react";
import TicketWrapper from "./ticket-wrapper";
import SVGLeft from "./ticket-wrapper/SVGLeft";
import SVGRight from "./ticket-wrapper/SVGRight";

export default function CollectionContainer() {
  const [collections, setCollections] = React.useState<ICollection[] | null>(
    null
  );

  React.useEffect(() => {
    fetch("api/spotlight")
      .then((res) => res.json())
      .then((data) => {
        setCollections(data);
      });
  }, []);

  if (collections)
    return (
      <div className="flex items-center px-16">
        <button className="border-2 h-16 px-3 border-[#2C9CF0]">
          <SVGLeft />
        </button>
        <div className="grid grid-cols-3 px-28 gap-8 py-16">
          {collections.map((collection) => (
            <TicketWrapper key={collection._id} collection={collection} />
          ))}
        </div>
        <button className="border-2 h-16 px-3 border-[#2C9CF0]">
          <SVGRight />
        </button>
      </div>
    );
}
