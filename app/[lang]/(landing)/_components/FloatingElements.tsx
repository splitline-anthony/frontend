"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const currencies = ["$", "€", "£", "¥", "₿", "Ξ"];

export function FloatingElements() {
  const [positions, setPositions] = useState<Array<{
    x: number;
    y: number;
  }> | null>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setPositions(
      currencies.map(() => ({
        x: Math.random() * width,
        y: height + 100,
      })),
    );
  }, []);

  if (!positions) return null; // prevents hydration mismatch

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-1">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px]"
        />
      </div>

      {/* Floating Currency Symbols */}
      {currencies.map((currency, index) => (
        <motion.div
          key={currency}
          initial={{
            x: positions[index].x,
            y: positions[index].y,
          }}
          animate={{
            y: -100,
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + index * 5,
            repeat: Infinity,
            delay: index * 3,
            ease: "linear",
          }}
          className="absolute text-4xl font-light text-gray-500/10"
        >
          {currency}
        </motion.div>
      ))}

      {/* Floating Geometric Shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          // biome-ignore lint/suspicious/noArrayIndexKey: <simple geometry>
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + i * 15}%`,
          }}
          className={`absolute ${
            i % 3 === 0
              ? "w-8 h-8 border-2 border-blue-500/20 rounded-lg"
              : i % 3 === 1
                ? "w-6 h-6 bg-blue-500/10 rounded-full"
                : "w-10 h-10 border border-blue-500/20 rounded-xl rotate-45"
          }`}
        />
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[60px_60px] opacity-50" />
    </div>
  );
}
