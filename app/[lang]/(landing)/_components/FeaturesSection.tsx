"use client";

import { motion } from "motion/react";
import {
  CreditCard,
  Shuffle,
  Shield,
  Globe2,
  Wallet,
  Building2,
} from "lucide-react";
import { staggerContainer, fadeIn } from "@/lib/animations";
import {
  SectionHeader,
  AnimatedCard,
  AnimatedCardHeader,
  AnimatedCardContent,
  Section,
} from "@/components";

const features = [
  {
    icon: CreditCard,
    title: "Virtual Bank Accounts",
    description:
      "Open USD, EUR, and other local accounts through trusted partners. Get paid globally as if you had a local bank everywhere.",
  },
  {
    icon: Shuffle,
    title: "Smart Routing Rules",
    description:
      "Automatically split and route income by percentage, amount, or conditions—fully configurable to match how you earn and spend.",
  },
  {
    icon: Wallet,
    title: "Crypto Wallet Payouts",
    description:
      "Route funds directly to your crypto wallets in USDC, USDT, or other stable assets to reduce exposure to local currency risk.",
  },
  {
    icon: Building2,
    title: "Bank Transfers",
    description:
      "Send funds to local or international bank accounts whenever you need fiat—without manual conversions or friction.",
  },
  {
    icon: Shield,
    title: "No Balance Holding",
    description:
      "Splitline does not store customer balances. Funds move directly between your chosen endpoints, always under your control.",
  },
  {
    icon: Globe2,
    title: "Built for Global Earners",
    description:
      "Designed for freelancers, remote teams, and digital workers—wherever you live, however you get paid.",
  },
];

export function FeaturesSection() {
  return (
    <Section
      id="features"
      className="bg-linear-to-b from-blue-50/20 to-blue-50/80"
    >
      <SectionHeader
        badge="Features"
        title="Everything you need to take control"
        description="Splitline gives freelancers the financial infrastructure they deserve. Simple, powerful, and built for the global economy."
      />

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-2"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {features.map((feature) => (
          <motion.div key={feature.title} variants={fadeIn}>
            <AnimatedCard className="h-full" hoverScale={1.02}>
              <AnimatedCardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <feature.icon className="h-6 w-6 text-blue-500" />
                </div>
              </AnimatedCardHeader>
              <AnimatedCardContent>
                <h3 className="font-display text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm">{feature.description}</p>
              </AnimatedCardContent>
            </AnimatedCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
