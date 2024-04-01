import React from "react";
import ImageContainer from "./image-container";
import SportDetails from "./sport-details";
import { motion } from "framer-motion"; 
import { sportsWrapperVariants } from "../animations";

/**
 * SportsWrapper component represents a wrapper for sports information.
 * @param sport The object containing information about the sport.
 * @returns JSX element representing the SportsWrapper component.
 */
export default function SportsWrapper({ sport }: { sport: SportsType }): React.JSX.Element {
  // Render the sports wrapper with motion animation
  return (
    <motion.div
      variants={sportsWrapperVariants} // Animation variants
      style={{ boxShadow: "0px 4px 8px 0px #0000000D" }} // Styling for box shadow
      className="p-[10px] dark:bg-[#3B3E47] bg-white dark:text-white" // CSS classes for styling
    >
      {/* Render the ImageContainer component with the sport image */}
      <ImageContainer image={sport.image} />
      {/* Render the sport title */}
      <h3 className="font-medium my-2">{sport.title}</h3>
      {/* Render the SportDetails component with sport information */}
      <SportDetails sport={sport.sport} totalEvents={sport.totalEvents} />
    </motion.div>
  );
}
