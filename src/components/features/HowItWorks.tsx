"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaUserPlus,
  FaCreditCard,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaDownload />,
    title: "Download the App",
    description: "Get Zubix from your app store and install it on your device.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <FaUserPlus />,
    title: "Create an Account",
    description: "Sign up with your details and verify your identity securely.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaCreditCard />,
    title: "Connect Your Accounts",
    description: "Link your bank accounts and payment methods safely.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <FaChartLine />,
    title: "Start Managing",
    description:
      "Track expenses, pay bills, and manage your finances with ease.",
    color: "bg-amber-100 text-amber-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Zubix Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with Zubix is quick and easy. Follow these simple
            steps:
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center text-3xl mb-6`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
              <FaDownload className="mr-2" />
              Download Zubix
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
