import React from "react";
import Heading from "./heading";
import SportsWrapper from "./sports-wrapper";
import AdvertisementWrapper from "./advertisement-wrapper";
import BlueButton from "./blue-button";
import fetchSports from "./utils/fetchSports";
import fetchAdvertisement from "./utils/fetchAdvertisement";
import { motion } from "framer-motion";
import { sportsContainerVariants } from "./animations";
import Loading from "./loading";

/**
 * SportsContainer component displays sports information along with an advertisement.
 * @returns JSX element representing the SportsContainer component.
 */
export default function SportsContainer(): JSX.Element {
  // State to store sports data and advertisement data
  const [sports, setSports] = React.useState<SportsType[] | null>(null);
  const [advertisement, setAdvertisement] =
    React.useState<IAdvertisement | null>(null);
  const [showMore, setShowMore] = React.useState<boolean>(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const scrollMoreRef = React.useRef<HTMLDivElement>(null);

  // Fetch sports data and advertisement data when component mounts
  React.useEffect(() => {
    fetchSports().then((data) => setSports(data));
    fetchAdvertisement().then((data) => setAdvertisement(data));
  }, []);

  const handleSeeMorePress = () => {
    showMore && scrollRef.current?.scrollIntoView();
    if (showMore)
      setTimeout(() => {
        setShowMore((status) => !status);
      }, 600);
    else setShowMore((status) => !status);
  };

  React.useEffect(() => {
    if (showMore)
      setTimeout(() => {
        scrollMoreRef.current?.scrollIntoView();
      }, 100);
  }, [showMore]);

  // Render loading message if sports data is not available yet
  if (!sports) return <Loading />;

  // Render the SportsContainer component
  return (
    <motion.div
      variants={sportsContainerVariants}
      initial="initial"
      animate="entry"
      ref={scrollRef}
      className="w-[1200px] py-5 xl:px-0 md:px-12 px-4 flex flex-col items-center"
    >
      {/* Heading */}
      <Heading title="Sports" />
      {/* Sports and advertisement grid */}
      <motion.div
        variants={sportsContainerVariants}
        initial="initial"
        animate="entry"
        className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-6 gap-3"
      >
        {/* Map over sports data and render SportsWrapper component for each sport */}
        {sports.map(
          (sport, i) => i < 4 && <SportsWrapper key={sport._id} sport={sport} />
        )}
        {/* Render AdvertisementWrapper component if advertisement data is available */}
        {advertisement && (
          <AdvertisementWrapper key={advertisement.title} advertisement={advertisement} />
        )}
        {showMore &&
          sports.map(
            (sport, i) =>
              i >= 4 && (
                <div key={sport._id} ref={scrollMoreRef}>
                  <SportsWrapper sport={sport} />
                </div>
              )
          )}
      </motion.div>
      {/* Button to see more */}
      <BlueButton
        expanded={showMore}
        title="See More"
        expandedTitle="See Less"
        onClick={handleSeeMorePress}
      />
    </motion.div>
  );
}
