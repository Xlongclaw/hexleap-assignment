import React from "react";
import ImageContainer from "./image-container";
import SportDetails from "./sport-details";
import { motion } from "framer-motion";
import { sportsWrapperVariants } from "../animations";

export default function SportsWrapper({ sport }: { sport: SportsType }) {

  return (
    <motion.div
      variants={sportsWrapperVariants}
      style={{ boxShadow: "0px 4px 8px 0px #0000000D" }}
      className="p-[10px] dark:bg-[#3B3E47] bg-white dark:text-white"
    >
      <ImageContainer image={sport.image} />
      <h3 className="font-medium my-2">{sport.title}</h3>
      <SportDetails sport={sport.sport} totalEvents={sport.totalEvents} />
    </motion.div>
  );
}
