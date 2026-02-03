"use client";

import { Section } from "@/components";
import { Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.svg";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact-us" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Compliance", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const socialLinks = [
  // { icon: Twitter, href: "#", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/splitlinehq",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:support@splitline.co", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-blue-50/30 relative z-2">
      <Section className="py-12 md:py-16">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="Splitline logo" height={36} />
            </Link>
            <p className="mt-4 text-sm max-w-xs">
              Your personal income hub for the global digital economy. Route
              your earnings to crypto or banks—automatically.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 hover:text-gray-900"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium">Product</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors text-gray-700 hover:text-gray-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors text-gray-700 hover:text-gray-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors text-gray-700 hover:text-gray-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} Splitline. All rights reserved.
          </p>
          <p className="text-xs">Cheyenne · Wyoming · United States</p>
        </div>
      </Section>
    </footer>
  );
}
