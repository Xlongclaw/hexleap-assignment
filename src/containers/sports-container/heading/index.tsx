import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { sportsWrapperVariants } from "../animations";

interface PropsType {
  title: string;
}

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

export default function Heading({ title }: PropsType) {
  return (
    <motion.div
    variants={sportsWrapperVariants}
     className="flex self-start">
      <h3
        className={`${poppins.className} text-[24px] text-black dark:text-white`}
      >
        {title}
        <div className="h-[2px] w-full bg-[#738FFF]"></div>
      </h3>
    </motion.div>
  );
}
