import React from 'react';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';
import { sportsWrapperVariants } from '../animations'; 

/**
 * Props interface for the Heading component.
 */
interface PropsType {
  title: string; // The title text for the heading.
}

// Define the Poppins font with specific weight and subsets
const poppins = Poppins({ weight: '700', subsets: ['latin'] });

/**
 * Heading component represents a heading.
 * @param title The title text for the heading.
 * @returns JSX element representing the Heading component.
 */
export default function Heading({ title }: PropsType): JSX.Element {
  // Render the heading with motion animation
  return (
    <motion.div variants={sportsWrapperVariants} className="flex self-start">
      <h3 className={`${poppins.className} text-[24px] text-black dark:text-white`}>
        {/* Render the title text */}
        {title}
        {/* Render a line below the title */}
        <div className="h-[2px] w-full bg-[#738FFF]"></div>
      </h3>
    </motion.div>
  );
}
