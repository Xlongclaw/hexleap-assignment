import React from 'react';
import { motion } from 'framer-motion'; // Importing motion from framer-motion for animations
import { sportsWrapperVariants } from '../animations'; // Importing animation variants

/**
 * Props interface for the BlueButton component.
 */
interface PropsType {
  title: string; // The title text for the button when not expanded.
  expandedTitle: string; // The title text for the button when expanded.
  onClick: () => void; // Function to be called when the button is clicked.
  expanded: boolean; // Flag indicating whether the button is expanded or not.
}

/**
 * BlueButton component represents a blue button.
 * @param title The title text for the button when not expanded.
 * @param expandedTitle The title text for the button when expanded.
 * @param onClick Function to be called when the button is clicked.
 * @param expanded Flag indicating whether the button is expanded or not.
 * @returns JSX element representing the BlueButton component.
 */
export default function BlueButton({ title, onClick, expanded, expandedTitle }: PropsType): React.JSX.Element {
  // Render the button with motion animation
  return (
    <motion.button
      variants={sportsWrapperVariants} 
      onClick={onClick}
      className="bg-[#2C9CF0] hover:bg-[#2c77f0] text-white px-5 py-2 text-[14px] rounded"
    >
      {/* Render the title text or expanded title text based on the expanded flag */}
      {!expanded ? title : expandedTitle}
    </motion.button>
  );
}
