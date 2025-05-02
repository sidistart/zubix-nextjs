"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById("how-it-works");
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <motion.nav
      className="fixed w-full z-50 transition-all duration-300 bg-white backdrop-blur-sm shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo.png"
                alt="Zubix Logo"
                width={36}
                height={36}
                className="h-14 w-14"
                priority
              />
              <span className="ml-2 text-xl font-bold text-primary">Zubix</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/features">Features</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <button
                onClick={scrollToHowItWorks}
                className="ml-4 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/features">Features</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
            <div className="pt-2">
              <button
                onClick={scrollToHowItWorks}
                className="w-full px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-sm font-normal transition-colors text-secondary/90 hover:text-primary"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors"
    >
      {children}
    </Link>
  );
};

export default Navbar;
