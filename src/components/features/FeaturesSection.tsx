"use client";

import { motion } from "framer-motion";
import {
  FaChartBar,
  FaRegCreditCard,
  FaMobileAlt,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaUserClock,
} from "react-icons/fa";

const FeatureCard = ({
  icon,
  title,
  description,
  delay = 0,
  iconBgColor,
  iconTextColor,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  iconBgColor: string;
  iconTextColor: string;
}) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div
        className={`rounded-full ${iconBgColor} w-14 h-14 flex items-center justify-center mb-5 ${iconTextColor} text-2xl`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaChartBar />,
      title: "Smart Budgeting",
      description:
        "Track expenses, set savings goals, and get personalized insights to optimize your spending habits.",
      id: "budgeting",
      iconBgColor: "bg-primary/10",
      iconTextColor: "text-primary",
    },
    {
      icon: <FaRegCreditCard />,
      title: "Bill Payments",
      description:
        "Pay all your utilities, subscriptions, and other bills in one place, with automated reminders.",
      id: "bill-payments",
      iconBgColor: "bg-secondary/10",
      iconTextColor: "text-secondary",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Recharges",
      description:
        "Quickly recharge your mobile, data, DTH and other services with just a few taps.",
      id: "recharges",
      iconBgColor: "bg-amber-100",
      iconTextColor: "text-amber-600",
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Instant Loans",
      description:
        "Access quick personal loans with competitive rates and flexible repayment options.",
      id: "loans",
      iconBgColor: "bg-green-100",
      iconTextColor: "text-green-600",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Transactions",
      description:
        "Bank-grade encryption and multi-factor authentication to keep your financial data safe.",
      id: "security",
      iconBgColor: "bg-purple-100",
      iconTextColor: "text-purple-600",
    },
    {
      icon: <FaUserClock />,
      title: "24/7 Support",
      description:
        "Get help whenever you need it with our round-the-clock customer support team.",
      id: "support",
      iconBgColor: "bg-red-100",
      iconTextColor: "text-red-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need To Manage Your Finances
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zubix combines all essential financial tools in one powerful yet
            simple application.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.id} id={feature.id}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
                iconBgColor={feature.iconBgColor}
                iconTextColor={feature.iconTextColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
