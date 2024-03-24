import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

interface PropsType {
  title: string;
  subtitle:string;
}

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

export default function Heading({ title,subtitle }: PropsType) {
  return (
    <motion.div
     className="flex flex-col justify-center items-center">
      <h3
        className={`${poppins.className} text-[50px] font-bold text-black dark:text-white`}
      >
        {title}
      </h3>
      <h4 className="text-[14px] max-w-[55rem] mt-5">{subtitle}</h4>
    </motion.div>
  );
}
