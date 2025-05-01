"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-secondary-dark to-secondary overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary opacity-10"
              initial={{
                width: Math.random() * 400 + 100,
                height: Math.random() * 400 + 100,
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
              }}
              animate={{
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-24 md:py-32 flex flex-col md:flex-row items-center">
          {/* Hero Text Content */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 md:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Smart Financial{" "}
              <span className="text-primary-light">Management</span> For
              Everyone
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Manage budgets, pay bills, recharge services, and get loans, all
              in one seamless app. Take control of your finances with Zubix.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/features">
                <span className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors inline-block">
                  Explore Features
                </span>
              </Link>
              <Link href="/contact">
                <span className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors inline-block">
                  Contact Us
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main App Screenshot/Mockup */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="aspect-[9/16] max-w-[300px] mx-auto bg-gradient-to-b from-primary-light to-primary-dark rounded-2xl p-2">
                  <div className="bg-white h-full rounded-xl overflow-hidden flex flex-col">
                    <div className="h-10 bg-secondary w-full flex items-center justify-center">
                      <div className="w-20 h-5 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="flex-1 p-3">
                      <div className="w-full h-24 bg-tertiary rounded-lg mb-3"></div>
                      <div className="w-full h-12 bg-primary/10 rounded-lg mb-3"></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-tertiary rounded-lg"></div>
                        <div className="h-16 bg-tertiary rounded-lg"></div>
                        <div className="h-16 bg-tertiary rounded-lg"></div>
                        <div className="h-16 bg-tertiary rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-2xl shadow-lg flex items-center justify-center text-white"
                animate={{ rotate: 5, y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold">+25%</div>
                  <div className="text-xs">Savings</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-2xl shadow-lg flex items-center justify-center text-white"
                animate={{ rotate: -5, y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold">Bills</div>
                  <div className="text-xs">Automated</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
