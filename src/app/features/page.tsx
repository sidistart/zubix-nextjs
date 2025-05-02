"use client";

import { motion } from "framer-motion";
import {
  FaChartBar,
  FaRegCreditCard,
  FaMobileAlt,
  FaHandHoldingUsd,
  FaShieldAlt,
} from "react-icons/fa";
import Link from "next/link";

const FeaturePage = () => {
  const features = [
    {
      id: "budgeting",
      title: "Smart Budgeting",
      icon: <FaChartBar className="text-blue-600 text-5xl mb-6" />,
      description:
        "Take control of your finances with Zubix's smart budgeting tools. Track your spending patterns, set personalized savings goals, and get AI-powered insights to optimize your financial habits.",
      benefits: [
        "Categorize transactions automatically",
        "Set monthly budgets for different expense categories",
        "Get notifications when you're close to exceeding budget limits",
        "View detailed spending analytics and trends",
        "Receive personalized tips to save more money",
      ],
    },
    {
      id: "bill-payments",
      title: "Bill Payments",
      icon: <FaRegCreditCard className="text-green-600 text-5xl mb-6" />,
      description:
        "Never miss a payment again. Zubix lets you manage and pay all your bills in one place with scheduled payments, reminders, and a complete history of your transactions.",
      benefits: [
        "Pay utility bills, subscriptions, and services from one app",
        "Schedule automatic payments to avoid late fees",
        "Get timely reminders before due dates",
        "Track payment history for better financial planning",
        "Earn rewards and cashback on selected bill payments",
      ],
    },
    {
      id: "recharges",
      title: "Mobile Recharges",
      icon: <FaMobileAlt className="text-purple-600 text-5xl mb-6" />,
      description:
        "Quick and easy recharges for your mobile, data plans, DTH services, and more. Save time and enjoy special discounts exclusive to Zubix users.",
      benefits: [
        "Recharge prepaid mobile across all major carriers",
        "Purchase data plans at competitive rates",
        "Pay DTH and broadband bills seamlessly",
        "Schedule recurring recharges automatically",
        "Get exclusive discounts and cashback offers",
      ],
    },
    {
      id: "loans",
      title: "Instant Loans",
      icon: <FaHandHoldingUsd className="text-amber-600 text-5xl mb-6" />,
      description:
        "Access quick personal loans when you need them most. With competitive interest rates, flexible repayment options, and a paperless application process, Zubix makes borrowing simple and transparent.",
      benefits: [
        "Apply for loans up to 5,00,000/- rupees directly in the app",
        "Get instant approval with minimal documentation",
        "Choose flexible repayment terms that fit your budget",
        "Enjoy competitive interest rates based on your profile",
        "Track loan status and make repayments through the app",
      ],
    },
    {
      id: "security",
      title: "Secure Transactions",
      icon: <FaShieldAlt className="text-red-600 text-5xl mb-6" />,
      description:
        "Your financial security is our top priority. Zubix employs bank-grade encryption, biometric authentication, and advanced fraud detection to keep your money and data safe.",
      benefits: [
        "End-to-end encryption for all transactions",
        "Multi-factor authentication options",
        "Biometric security including fingerprint and face recognition",
        "Real-time fraud monitoring and alerts",
        "Remote device management to secure your account",
      ],
    },
  ];

  return (
    <div className="pt-16">
      {" "}
      {/* Changed from pt-24 to pt-16 */}
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Powerful Financial Features
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover all the ways Zubix helps you manage your money smarter,
              faster, and more securely.
            </motion.p>
          </div>
        </div>
      </div>
      {/* Features Navigation */}
      <div className="sticky top-19 z-30 bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-4 no-scrollbar">
            {features.map((feature) => (
              <a
                key={feature.id}
                href={`#${feature.id}`}
                className="whitespace-nowrap px-5 py-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-700 transition-colors text-sm font-medium flex-shrink-0"
              >
                {feature.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Detailed Features */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {features.map((feature, index) => (
              <div key={feature.id} id={feature.id} className="scroll-mt-32">
                <div
                  className={`flex flex-col md:flex-row gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-50 p-8 rounded-2xl text-center">
                      {feature.icon}
                      <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        {feature.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-6">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      Key Benefits
                    </h3>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to experience Zubix?
            </h2>
            <p className="text-lg mb-8 text-gray-600">
              Download the app now and start managing your finances more
              efficiently.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/">
                <span className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors inline-block">
                  Download App
                </span>
              </Link>
              <Link href="/contact">
                <span className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors inline-block">
                  Contact Support
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
