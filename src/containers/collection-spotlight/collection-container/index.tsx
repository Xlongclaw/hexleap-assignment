import React from "react";
import TicketWrapper from "./ticket-wrapper";

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
      <div className="grid grid-cols-3 px-48 gap-8 py-16">
        {collections.map((collection) => (
          <TicketWrapper key={collection._id} collection={collection} />
        ))}
      </div>
    );
}
