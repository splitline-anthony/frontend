"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export interface RotateWordsProps {
  words: string[];
  options?: {
    interval?: number;
    duration?: number;
    translateY?: number;
  };
}

export function RotateWords({ words, options }: RotateWordsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, options?.interval || 5000);
    return () => clearInterval(intervalId);
  }, [words.length, options?.interval]);

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={words[index]}
        initial={{
          opacity: 0,
          y: options?.translateY ? options?.translateY * -1 : -40,
        }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: options?.translateY || 40 }}
        transition={{ duration: options?.duration || 0.3 }}
      >
        {words[index]}
      </motion.p>
    </AnimatePresence>
  );
}
