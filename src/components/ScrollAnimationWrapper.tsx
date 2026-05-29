// src/components/ScrollAnimationWrapper.tsx

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
}

const directionMap = {
  up:    { initial: { opacity: 0, y: 60 },    animate: { opacity: 1, y: 0 } },
  down:  { initial: { opacity: 0, y: -60 },   animate: { opacity: 1, y: 0 } },
  left:  { initial: { opacity: 0, x: -60 },   animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 60 },    animate: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0, scale: 0.85 }, animate: { opacity: 1, scale: 1 } },
  fade:  { initial: { opacity: 0 },           animate: { opacity: 1 } },
};

const ScrollAnimationWrapper = ({
  children,
  delay = 0,
  direction = "up",
}: Props) => {
  const { initial, animate } = directionMap[direction];

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;