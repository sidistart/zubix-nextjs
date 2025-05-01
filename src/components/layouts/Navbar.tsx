"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaChartLine } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm shadow-lg text-gray-900"
          : "bg-transparent backdrop-blur-sm text-white"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <FaChartLine
                className={`h-8 w-8 ${
                  scrolled ? "text-primary" : "text-primary-light"
                }`}
              />
              <span
                className={`ml-2 text-xl font-bold ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Zubix
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="/" scrolled={scrolled}>
                Home
              </NavLink>
              <NavLink href="/features" scrolled={scrolled}>
                Features
              </NavLink>
              <NavLink href="/about" scrolled={scrolled}>
                About
              </NavLink>
              <NavLink href="/contact" scrolled={scrolled}>
                Contact
              </NavLink>
              <button className="ml-4 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-primary-light"
              } focus:outline-none`}
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
              <button className="w-full px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors">
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
  scrolled,
}: {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium transition-colors ${
        scrolled
          ? "text-gray-700 hover:text-primary"
          : "text-white hover:text-primary-light"
      }`}
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
      className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium transition-colors"
    >
      {children}
    </Link>
  );
};

export default Navbar;
