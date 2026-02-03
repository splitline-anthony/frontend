"use client";

import { motion } from "motion/react";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Section, SectionHeader } from "@/components";

const steps = [
  {
    number: "01",
    title: "Create Your Virtual Bank Accounts",
    description:
      "Sign up and open VBAs with our trusted providers. Get USD, EUR, or other currency accounts in minutes—complete with real bank details your clients can pay into.",
  },
  {
    number: "02",
    title: "Set Up Your Payout Rules",
    description:
      "Define how your money should flow. Want 70% to your crypto wallet and 30% to your local bank? Set it once, and Splitline handles the rest automatically.",
  },
  {
    number: "03",
    title: "Receive & Route Automatically",
    description:
      "When payment arrives, your rules execute instantly. Watch your funds split and route in real-time—crypto hits your wallet, fiat goes to your bank.",
  },
  {
    number: "04",
    title: "Track Everything in One Place",
    description:
      "View all your accounts, transactions, and payouts in a beautiful dashboard. Know exactly where your money is at all times.",
  },
];

export function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <SectionHeader
        badge="How It Works"
        title="Simple, powerful, automatic"
        description="Get set up in minutes and let Splitline handle the complexity of global money movement."
      />

      <motion.div
        className="relative z-2 w-max mx-auto max-w-full"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Vertical Line */}
        <motion.div
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,
          }}
          className="absolute left-8 top-0 bottom-20 w-0.5 bg-blue-500 hidden md:block"
        />

        <div className="space-y-12 md:space-y-16">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className="relative flex gap-6 md:gap-12"
              variants={fadeIn}
            >
              {/* Step Number */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative z-10 shrink-0"
              >
                <div className="flex h-14 md:h-16 w-14 md:w-16 items-center justify-center rounded-2xl bg-gray-50 border-2 border-blue-500 shadow-lg">
                  <span className="font-display text-lg md:text-xl font-bold text-blue-500">
                    {step.number}
                  </span>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 pt-0 md:pt-2 max-w-xl text-gray-900">
                <h3 className="font-display text-xl md:text-2xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm md:text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
