"use client";

import { animate, motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6; // number of steps
  return totalSteps - index - 1;
};

export const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs, each representing a step of stairs.
    Each div will have the some animation defined by the stairAnimation object
    The delay for each div is calculated dynamically based on it's reversed index,
    creating a staggered effectwith decreasing delay for each subsequent stop.
    */}

      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        ></motion.div>
      ))}
    </>
  );
};
