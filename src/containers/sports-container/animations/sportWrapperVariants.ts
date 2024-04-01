import { Variants } from 'framer-motion';

/**
 * Animation variants for the sports wrapper component.
 */
const sportsWrapperVariants: Variants = {
  initial: {
    opacity: 0, // Initial opacity set to 0
  },
  entry: {
    opacity: 1, // Opacity transition to fully visible
    transition: {
      type: 'spring', // Type of transition
      damping: 40, // Damping effect for the spring animation
    },
  },
  hover: {
    scale: 1.05, // Scale effect when hovered
  },
};

// Exporting the sportsWrapperVariants object
export default sportsWrapperVariants;
