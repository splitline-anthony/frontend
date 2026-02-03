"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, stagger } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";
import { fadeInLeft } from "@/lib/animations";
import { Container } from "@/components";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#faq", label: "FAQ" },
];

const staggerContainer = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: stagger(0.05),
    },
  },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Top Navigation */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Container>
          <nav
            aria-label="Main"
            className="flex h-16 items-center justify-between"
          >
            {/* Logo */}
            <Link href="/" className="rounded-lg">
              <div className="relative flex h-9 items-center justify-center rounded-lg">
                <Image src={logo} alt="Splitline logo" height={36} />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors rounded-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-lg transition-colors"
              >
                Log in
              </Link>

              <Link
                href="#"
                className="text-sm font-medium bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-500 transition-colors group flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center p-2 rounded-lg"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed left-0 right-0 top-16 z-50 bg-white/80 backdrop-blur-lg p-4 md:hidden border-b border-gray-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <motion.ul
              className="flex flex-col gap-4"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={fadeInLeft}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors rounded"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex flex-col gap-2 pt-4 border-t border-gray-300 mt-4">
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-lg text-center transition-colors"
              >
                Log in
              </Link>

              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-500 transition-colors group flex items-center gap-2 justify-center"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
