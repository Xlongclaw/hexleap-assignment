import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

interface PropsType {
  title: string;
  subtitle: string;
}

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

export default function Heading({ title, subtitle }: PropsType) {
  return (
    <motion.div className="flex flex-col justify-center items-center">
      <h3
        className={`${poppins.className} text-xl xs:text-3xl md:text-5xl xl:text-[50px] font-bold text-black dark:text-white`}
      >
        {title}
      </h3>
      <h4 className="text-xs xs:text-[14px] sm:max-w-[25rem] md:max-w-[37rem] lg:max-w-[55rem] px-8 sm:px-0 mt-5  dark:text-white text-center">
        {subtitle}
      </h4>
    </motion.div>
  );
}
