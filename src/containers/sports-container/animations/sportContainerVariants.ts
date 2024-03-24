import { Variants } from "framer-motion";

const sportsContainerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  entry: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default sportsContainerVariants;
