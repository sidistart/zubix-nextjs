"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaGlobeAmericas,
} from "react-icons/fa";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former fintech executive with 15+ years of experience in digital banking and financial inclusion initiatives.",
      image: "/team-1.jpg", // Placeholder image path
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Tech innovator with background in AI and machine learning, focused on creating secure and intuitive financial technologies.",
      image: "/team-2.jpg",
    },
    {
      name: "Aisha Patel",
      role: "Chief Product Officer",
      bio: "Product strategist specializing in user-centered design and financial product development for diverse audiences.",
      image: "/team-3.jpg",
    },
    {
      name: "David Okoro",
      role: "Head of Finance",
      bio: "Certified financial analyst with expertise in risk management and sustainable financial growth strategies.",
      image: "/team-4.jpg",
    },
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description:
        "We constantly push boundaries to create financial tools that are ahead of the curve.",
    },
    {
      icon: <FaUsers />,
      title: "Inclusion",
      description:
        "We believe financial tools should be accessible and beneficial to everyone, regardless of background.",
    },
    {
      icon: <FaChartLine />,
      title: "Empowerment",
      description:
        "We provide the insights and tools people need to take control of their financial future.",
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Responsibility",
      description:
        "We operate with transparency and always prioritize the financial wellbeing of our users.",
    },
  ];

  return (
    <div className="pt-24">
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
              Our Story
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Zubix was founded with a simple mission: make financial management
              accessible, intuitive, and beneficial for everyone.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Zubix, we believe financial wellness should be accessible
                  to everyone. Our mission is to simplify financial management
                  and empower individuals to make smarter decisions with their
                  money.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We saw that many people struggled with managing multiple
                  financial tools across different platforms, often leading to
                  missed payments, poor budgeting, and financial stress. That&apos;s
                  why we created an all-in-one solution that brings clarity and
                  control to personal finance.
                </p>
                <p className="text-lg text-gray-600">
                  Since our founding in 2022, we&apos;ve helped over 500,000 users
                  take control of their finances and build better financial
                  habits.
                </p>
              </motion.div>

              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-50 rounded-2xl p-8 md:p-10">
                  <div className="aspect-square bg-blue-500 rounded-xl mb-6"></div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Financial Inclusion
                  </h3>
                  <p className="text-gray-600">
                    We&apos;re committed to providing financial tools that work for
                    everyone, regardless of their financial background or
                    literacy level.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development
              to customer support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Zubix who are dedicated to
              transforming financial management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* This would normally be an image, but we're using a placeholder */}
                <div className="aspect-[4/3] bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">500K+</div>
              <div className="text-blue-200">Active Users</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <div className="text-blue-200">Bills Paid Monthly</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-blue-200">App Store Rating</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-blue-200">Countries Served</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
