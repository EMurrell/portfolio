import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

function FadeIn({ children, isVisible }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ delay: 0.6, type: "spring", stiffness: 25 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
