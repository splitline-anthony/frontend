"use client";

import type * as React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  hoverShadow?: boolean;
}

export function AnimatedCard({
  children,
  className,
  hoverScale = 1.02,
  hoverShadow = true,
  ...props
}: AnimatedCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-xl border border-gray-300 bg-gray-50 text-gray-900 shadow-xs transition-shadow",
        hoverShadow && "hover:shadow-xl",
        className,
      )}
      whileHover={{ scale: hoverScale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedCardHeader({
  children,
  className,
  ...props
}: AnimatedCardHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
      {children}
    </div>
  );
}

interface AnimatedCardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedCardContent({
  children,
  className,
  ...props
}: AnimatedCardContentProps) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
}

interface AnimatedCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedCardFooter({
  children,
  className,
  ...props
}: AnimatedCardFooterProps) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
}
