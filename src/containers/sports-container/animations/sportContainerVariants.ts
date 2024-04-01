import { Variants } from 'framer-motion';

/**
 * Animation variants for the sports container component.
 */
const sportsContainerVariants: Variants = {
  initial: {
    opacity: 0, // Initial opacity set to 0
  },
  entry: {
    opacity: 1, // Opacity transition to fully visible
    transition: {
      staggerChildren: 0.2, // Staggered transition for children elements
    },
  },
};

export default sportsContainerVariants;
