"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import { Section } from "@/components";
import Link from "next/link";
import { Form } from "radix-ui";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("https://api.freewaitlists.com/waitlists/cml69a64p000k01p2zq14o9fn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        meta: {
          name: email,
          source: "landing-page",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitted(true);
        setEmail("");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Section className="bg-linear-to-b from-blue-50 to-blue-50/0 relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>
      <motion.div
        className="mx-auto max-w-3xl text-center relative z-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Ready to take control of your income?
        </h2>
        <p className="mt-4 text-lg text-gray-900">
          Join thousands of freelancers who've simplified their financial life
          with Splitline.
        </p>

        {/* CTA Buttons */}
        {/* <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/signup">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 h-12 px-8 text-base"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div> */}

        {/* Email Capture */}
        <div className="mt-12">
          <p className="text-sm text-gray-900 mb-4">
            {/* Not ready yet? Join our waitlist for updates. */}
            Join our waitlist for updates.
          </p>

          {submitted ? (
            <motion.div
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Thanks! We'll be in touch.</span>
            </motion.div>
          ) : (
            <Form.Root
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Form.Field className="FormField" name="email">
                <Form.Control asChild>
                  <input
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    className="px-4 h-12 min-w-40 rounded-lg border-blue-500 bg-white border-2"
                  />
                </Form.Control>
                <div className="text-left">
                  <Form.Message
                    className="text-xs text-red-500"
                    match="valueMissing"
                  >
                    Please enter your email
                  </Form.Message>
                  <Form.Message
                    className="text-xs text-red-500"
                    match="typeMismatch"
                  >
                    Please provide a valid email
                  </Form.Message>
                </div>
              </Form.Field>
              <Form.Submit asChild>
                <button
                  type="submit"
                  className="shrink-0 text-base font-medium bg-blue-600 text-white px-8 h-12 rounded-lg hover:bg-blue-500 transition-colors group flex items-center gap-2 justify-center cursor-pointer"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Form.Submit>
            </Form.Root>
          )}
        </div>
      </motion.div>
    </Section>
  );
}
