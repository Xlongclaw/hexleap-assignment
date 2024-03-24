import React from "react";
import { motion } from "framer-motion";
import { sportsWrapperVariants } from "../animations";

interface PropsType {
  title: string;
  expandedTitle: string;
  onClick:()=>void;
  expanded:boolean
}

export default function BlueButton({ title,onClick,expanded,expandedTitle }: PropsType) {
  return (
    <motion.button
    variants={sportsWrapperVariants}
     onClick={onClick} className="bg-[#2C9CF0] hover:bg-[#2c77f0] text-white px-5 py-2 text-[14px] rounded">
      {
        !expanded ? title :expandedTitle
      }
    </motion.button>
  );
}
