"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="pt-16"> {/* Changed from pt-24 to pt-16 */}
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
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions about Zubix? Our team is here to help you.
            </motion.p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-blue-50 rounded-xl p-8 h-full">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-blue-600 mt-1 mr-4">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Address</h3>
                        <p className="text-gray-600">
                          38, Gayatri Nagar, Hiran Magri Sector - 5
                          <br />
                          Udaipur, Rajsthan, India - 313001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-blue-600 mt-1 mr-4">
                        <FaPhoneAlt />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Phone</h3>
                        <p className="text-gray-600">+91-9509919001</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-blue-600 mt-1 mr-4">
                        <FaEnvelope />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <p className="text-gray-600">support@zubixapp.com</p>
                      </div>
                    </div>

                    {/* <div className="flex items-start">
                      <div className="text-blue-600 mt-1 mr-4">
                        <FaClock />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9am - 6pm
                          <br />
                          Saturday: 10am - 4pm
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div> */}
                  </div>

                  <div className="mt-8">
                    <h3 className="font-medium text-gray-900 mb-3">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    Send Us a Message
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      className="bg-green-50 text-green-800 p-6 rounded-lg text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-3xl mb-3">✓</div>
                      <h3 className="text-xl font-bold mb-2">Thank you!</h3>
                      <p>
                        Your message has been sent successfully. We&apos;ll
                        respond as soon as possible.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">
                            General Inquiry
                          </option>
                          <option value="Technical Support">
                            Technical Support
                          </option>
                          <option value="Billing Question">
                            Billing Question
                          </option>
                          <option value="Partnership Opportunity">
                            Partnership Opportunity
                          </option>
                          <option value="Feature Request">
                            Feature Request
                          </option>
                        </select>
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>

                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition-colors ${
                            isSubmitting
                              ? "bg-blue-400 cursor-not-allowed"
                              : "hover:bg-blue-700"
                          }`}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-200 rounded-xl h-[400px] flex items-center justify-center">
              <p className="text-gray-500">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find quick answers to common questions about Zubix
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                className="bg-white rounded-lg shadow-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  How do I download the Zubix app?
                </h3>
                <p className="text-gray-600">
                  The Zubix app is available on both iOS and Android platforms.
                  You can download it from the App Store or Google Play Store by
                  searching for &quot;Zubix Finance&quot;.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Is my financial data secure with Zubix?
                </h3>
                <p className="text-gray-600">
                  Yes, we use bank-level security with 256-bit encryption and
                  multi-factor authentication to keep your data safe. We never
                  store your banking credentials and all connections are
                  encrypted.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  What are the fees for using Zubix?
                </h3>
                <p className="text-gray-600">
                  Zubix offers a free basic plan that includes budgeting and
                  expense tracking. Premium features like bill payments and loan
                  access are available on our subscription plans starting at
                  $5.99/month.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  How do I qualify for a loan through Zubix?
                </h3>
                <p className="text-gray-600">
                  Loan qualification is based on several factors including your
                  financial history, income, and credit score. Create an account
                  and complete your financial profile to check your eligibility.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;
