import { Variants } from "framer-motion";

const sportsWrapperVariants: Variants = {
  initial: {
    opacity: 0,
  },
  entry: {
    opacity: 1,
    transition:{
      type:'spring',
      damping:40
    }
  },
  hover:{
    scale:1.05
  }
};

export default sportsWrapperVariants