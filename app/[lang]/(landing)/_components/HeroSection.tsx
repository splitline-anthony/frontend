"use client";

import { motion, stagger, type Variants } from "motion/react";
import { staggerContainer, fadeIn } from "@/lib/animations";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Globe,
  Landmark,
  Wallet,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { RotateWords } from "./RotateWords";
import { Section } from "@/components";

export function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 rounded-full border-2 border-gray-700/30 flex items-start justify-center p-2">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-gray-700"
        />
      </div>
    </motion.div>
  );
}
// Word-by-word reveal animation
const wordReveal: Variants = {
  initial: {},
  animate: {
    transition: { delayChildren: stagger(0.15, { startDelay: 0.2 }) },
  },
};

export function HeroSection() {
  const headlineWords: Array<string | React.ReactNode> = [
    "Get",
    "Paid",
    "Globally.",
    "Split",
    "Instantly.",
    <RotateWords
      key="rotate-words"
      words={["On Your Terms.", "Without Borders."]}
      options={{ interval: 16000 }}
    />,
  ];

  return (
    <Section className="mt-16 bg-linear-to-b from-white to-blue-50/20 relative">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-8 text-center relative z-2"
      >
        {/* Badge */}
        <motion.div variants={fadeIn}>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-500">
            <Globe className="h-4 w-4" />
            <RotateWords
              words={[
                "Built for the global digital economy",
                "Borderless Income Protocol",
                "Global Digital Wage Rail",
                "Independent Salary Wallet",
                "Trusted global money layer",
                "Protocol-grade reliability",
                "Infrastructure for global money",
                "Universal Earnings Infrastructure",
                "Secure by design",
              ]}
              options={{ translateY: 10 }}
            />
          </span>
        </motion.div>
        <div>
          {/* Animated Headline */}
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-gray-900 mx-auto max-w-4xl"
          >
            <motion.span
              className="flex flex-wrap justify-center gap-x-4"
              variants={wordReveal}
              initial="initial"
              animate="animate"
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  // biome-ignore lint/suspicious/noArrayIndexKey: <word order>
                  key={i}
                  custom={i}
                  variants={fadeIn}
                  className={i === 5 ? "text-blue-500" : ""}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-blue-900 max-w-3xl mx-auto leading-relaxed mt-6"
            variants={fadeIn}
          >
            Splitline is your personal income hub. Get paid once, then
            automatically route your earnings to wallets or banks—securely,
            transparently, and on your terms.
          </motion.p>
          <motion.p
            className="text-sm font-medium text-blue-900/70 mx-auto max-w-2xl mt-4"
            variants={fadeIn}
          >
            By supporting stable digital assets, Splitline enables consistent
            value transfer across borders and reduces exposure to currency
            volatility.
          </motion.p>
        </div>

        {/* CTA buttons */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact-us"
            className="text-base font-medium bg-blue-600 text-white px-8 h-12 rounded-lg hover:bg-blue-500 transition-colors group flex items-center gap-2 justify-center"
          >
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#how-it-works"
            className="text-base font-medium border border-gray-300 text-gray-700 bg-gray-100 px-8 h-12 rounded-lg hover:bg-white transition-colors flex items-center gap-2 justify-center"
          >
            See How It Works
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn}
          className="relative max-w-2xl mx-auto mb-10 mt-16"
        >
          {/* Animated Flow Illustration */}
          <div className="relative mx-auto max-w-2xl">
            {/* Flow Diagram */}
            <div className="border bg-white border-gray-200 p-3 sm:p-8 rounded-2xl shadow-xl">
              <div className="flex items-center justify-center max-w-md mx-auto">
                {/* Employer Payment */}
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.div
                    className="flex flex-col h-18 w-18 items-center justify-center gap-2 rounded-2xl border border-gray-500"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      delay: 2,
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 7,
                    }}
                  >
                    <BriefcaseBusiness className="h-6 w-6 text-gray-500" />
                    <span className="text-xs font-medium text-gray-900">
                      Client
                    </span>
                  </motion.div>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  className="h-0.5 bg-blue-500/20 relative w-28 flex-1 z-0 overflow-hidden"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 h-full w-1/2 bg-linear-to-r from-blue-500/0 to-blue-500"
                    initial={{ right: "100%" }}
                    animate={{
                      right: "-50%",
                    }}
                    transition={{
                      delay: 3,
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 7,
                    }}
                  />
                </motion.div>

                {/* Splitline Hub */}
                <motion.div
                  className="flex flex-col items-center relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.div className="flex flex-col h-20 md:h-24 w-20 md:w-24 items-center justify-center rounded-2xl border-2 border-blue-500/50 bg-white shadow-xl text-blue-500">
                    {/* <Logo className="w-10 h-10" /> */}
                    <Landmark className="h-6 w-6 text-blue-500" />
                    <span className="text-xs font-medium mt-1">
                      Virtual Bank Account
                    </span>
                  </motion.div>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  className="flex-1 w-28"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  <div className="rotate-[-15deg] h-0.5 relative bg-green-500/20 w-full origin-top-left overflow-hidden">
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 h-full w-1/2 bg-linear-to-r from-green-500/0  to-green-500"
                      initial={{ right: "100%" }}
                      animate={{
                        right: "-50%",
                      }}
                      transition={{
                        delay: 4,
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 7,
                      }}
                    />
                  </div>
                  <div className="rotate-15 h-0.5 bg-yellow-500/20 relative w-full overflow-hidden origin-top-left">
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 h-full w-1/2 bg-linear-to-r from-yellow-500/0 to-yellow-500"
                      initial={{ right: "100%" }}
                      animate={{
                        right: "-50%",
                      }}
                      transition={{
                        delay: 4,
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 7,
                      }}
                    />
                  </div>
                </motion.div>

                {/* Split Wallets */}
                <motion.div
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  {/* To Crypto */}
                  <motion.div
                    className="flex items-center gap-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      delay: 5,
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 7,
                    }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-600">
                      <Wallet className="h-5 w-5 text-green-600" />
                    </div>
                  </motion.div>
                  {/* To Bank */}
                  <motion.div
                    className="flex items-center gap-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      delay: 5,
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 7,
                    }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-600">
                      <Building2 className="h-5 w-5 text-yellow-600" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              {/* Percentage Labels */}
              <motion.div
                className="flex gap-8 text-xs font-medium justify-center mt-8"
                animate={{ opacity: [0.5, 1, 1, 0.5] }}
                transition={{
                  delay: 4,
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 6,
                }}
              >
                <span className="text-green-600">70% → Crypto Wallet</span>
                <span className="text-yellow-600">30% → Bank Account</span>
              </motion.div>
            </div>
          </div>

          {/* Floating Notification Cards */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 lg:-left-32 top-8 p-4 rounded-xl bg-gray-50/80 backdrop-blur-xs hidden lg:block border border-gray-400/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-900 font-medium">
                  Payment Received
                </p>
                <p className="text-xs text-gray-700">+$4,450.00 USD</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 lg:-right-48 bottom-8 p-4 rounded-xl bg-gray-50/80 backdrop-blur-xs hidden lg:block border border-gray-400/30"
          >
            <div className="flex items-center gap-3">
              <motion.div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-500" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Auto-routed to 2 destinations
                </p>
                <p className="text-xs text-gray-900">In progress...</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <ScrollIndicator />
    </Section>
  );
}
