import React from 'react';
import { Poppins } from 'next/font/google'; 
import { motion } from 'framer-motion'; 

/**
 * Props for the Heading component.
 */
interface PropsType {
  title: string; // The main title
  subtitle: string; // The subtitle
}

// Define Poppins font options
const poppins = Poppins({ weight: '700', subsets: ['latin'] });

/**
 * Heading component displays a title and a subtitle.
 * @param props - The props object containing title and subtitle.
 * @returns - The rendered component.
 */
const Heading: React.FC<PropsType> = ({ title, subtitle }: PropsType) => {
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
};

export default Heading;
