"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <motion.section
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </motion.section>
);

const RefundPolicy: React.FC = () => {
  return (
    <div className="pt-16">
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
              Cancellation &amp; Refund Policy
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Understanding our policies regarding cancellations, returns, and refunds
            </motion.p>
          </div>
        </div>
      </div>

      {/* Refund Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
            <Section title="1. Introduction">
              <p>
                This Cancellation and Refund Policy outlines the terms and conditions for cancellations,
                returns, and refunds related to transactions made through the Zubix app (&quot;App&quot;) operated
                by Sushibh Empires Private Limited. By using our services, you agree to comply with this policy.
              </p>
            </Section>

            <Section title="2. Payment Transactions">
              <p>
                For payment transactions facilitated through Zubix:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li>
                  Once a payment is successfully processed, it generally cannot be cancelled.
                </li>
                <li>
                  In case of erroneous transactions, you must report the issue within 24 hours to <a
                    href="mailto:support@zubixapp.com"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    support@zubixapp.com
                  </a>.
                </li>
                <li>
                  Refunds for payments to merchants are subject to the respective merchant&apos;s refund policy.
                </li>
              </ul>
            </Section>

            <Section title="3. Subscription Services">
              <p>
                For any subscription-based services offered through Zubix:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li>
                  You may cancel a subscription at any time through the App settings.
                </li>
                <li>
                  Cancellation will be effective at the end of the current billing cycle.
                </li>
                <li>
                  No partial refunds are provided for unused periods of the subscription.
                </li>
              </ul>
            </Section>

            <Section title="4. Investment Products">
              <p>
                For investment products available through Zubix:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li>
                  Redemption of investments is subject to the terms specified for each product.
                </li>
                <li>
                  Market-linked investments may be subject to market risks and applicable exit loads.
                </li>
                <li>
                  Early withdrawal penalties may apply as per the product terms.
                </li>
              </ul>
            </Section>

            <Section title="5. Split Payments">
              <p>
                For split payment features:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li>
                  Once a split payment is initiated, it cannot be cancelled by the requestor.
                </li>
                <li>
                  Participants have 7 days to decline a split payment request.
                </li>
                <li>
                  Disputes regarding split payments must be resolved between the participants.
                </li>
              </ul>
            </Section>

            <Section title="6. Failed Transactions">
              <p>
                In case of failed transactions where money is debited but the intended recipient did not receive the funds:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li>
                  Refunds for failed transactions are typically processed automatically within 5-7 business days.
                </li>
                <li>
                  If a refund is not processed automatically, please contact our customer support with the transaction details.
                </li>
              </ul>
            </Section>

            <Section title="7. Unauthorized Transactions">
              <p>
                For unauthorized or fraudulent transactions:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li>
                  Report unauthorized transactions immediately by contacting our support team.
                </li>
                <li>
                  Provide all necessary documentation to verify the unauthorized nature of the transaction.
                </li>
                <li>
                  Refunds for verified unauthorized transactions will be processed as per applicable regulations.
                </li>
              </ul>
            </Section>

            <Section title="8. Refund Processing">
              <p>
                When a refund is approved:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li>
                  Refunds will be credited to the original payment method used for the transaction.
                </li>
                <li>
                  Processing time for refunds typically takes 5-7 business days but may vary based on your payment provider.
                </li>
                <li>
                  Transaction fees, if any, may not be refundable in certain cases.
                </li>
              </ul>
            </Section>

            <Section title="9. Service Fees">
              <p>
                Service fees charged by Zubix for facilitating transactions are non-refundable unless required by law.
              </p>
            </Section>

            <Section title="10. Changes to Policy">
              <p>
                Zubix reserves the right to update or modify this policy at any time. Any significant changes will be notified to users through the App or via email.
              </p>
            </Section>

            <Section title="11. Contact Us">
              <p>
                For any questions or concerns regarding cancellations and refunds, please contact our customer support at{" "}
                <a
                  href="mailto:support@zubixapp.com"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  support@zubixapp.com
                </a>.
              </p>
            </Section>

            <motion.footer
              className="text-center text-gray-600 text-sm mt-10 pt-6 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Last updated: May 3, 2025
            </motion.footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;