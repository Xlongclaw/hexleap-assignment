import React from "react";
import Heading from "./heading";
import SportsWrapper from "./sports-wrapper";
import AdvertisementWrapper from "./advertisement-wrapper";
import BlueButton from "./blue-button";
import fetchSports from "./utils/fetchSports";
import fetchAdvertisement from "./utils/fetchAdvertisement";

export default function SportsContainer() {
  const [sports, setSports] = React.useState<SportsType[] | null>(null);
  const [advertisement, setAdvertisement] = React.useState<IAdvertisement | null>(null);

  React.useEffect(() => {
    fetchSports().then((data) => setSports(data));
    fetchAdvertisement().then((data) => setAdvertisement(data));
  }, []);

  if (!sports) return <>Loading...</>
    return (
      <div className="w-[1200px] py-5 xl:px-0 md:px-12 px-4 flex flex-col items-center">
        <Heading title="Sports" />
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  my-6 gap-3">
          {sports.map((sport) => (
            <SportsWrapper key={sport._id} sport={sport} />
          ))}
          {advertisement && (
            <AdvertisementWrapper advertisement={advertisement} />
          )}
        </div>
        <BlueButton title="See More" onClick={() => {}} />
      </div>
    );
}
