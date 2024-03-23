import React from "react";
import Heading from "./heading";
import SportsWrapper from "./sports-wrapper";
import AdvertisementWrapper from "./advertisement-wrapper";
import BlueButton from "./blue-button";

export default function SportsContainer() {
  const [sports, setSports] = React.useState<SportsType[]>();
  const [advertisement, setAdvertisement] = React.useState<IAdvertisement>();

  React.useEffect(() => {
    const fetchSports = async () => {
      const res = await fetch("/api/sports");
      const data = await res.json();
      setSports(data);
    };
    const fetchAdvertisement = async () => {
      const res = await fetch("/api/advertisement");
      const data = await res.json();
      setAdvertisement(data);
    };
    fetchSports();
    fetchAdvertisement();
  }, []);

  if (sports && advertisement)
    return (
      <div className="w-[1200px] py-5 xl:px-0 md:px-12 px-4 flex flex-col items-center">
        <Heading title="Sports" />
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  my-6 gap-3">
          {sports.map((sport) => (
            <SportsWrapper key={sport._id} sport={sport} />
          ))}
          <AdvertisementWrapper advertisement={advertisement} />
        </div>
        <BlueButton title="See More" onClick={()=>{}}/>
      </div>
    );
}
