"use client";

import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </section>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100">
              How we handle and protect your data at Zubix
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 py-16">
        <Section title="1. Introduction">
          This Privacy Policy explains how Sushibh Empires Private Limited
          (&ldquo;Zubix,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) collects, uses, and protects your personal data.
        </Section>

        <Section title="2. Information We Collect">
          We may collect the following types of data:
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li className="mb-2">
              <strong>Personal Information:</strong> Name, email, phone number,
              address.
            </li>
            <li className="mb-2">
              <strong>Financial Information:</strong> Payment history,
              transaction details.
            </li>
            <li className="mb-2">
              <strong>Device Information:</strong> IP address, device model, OS
              version.
            </li>
            <li className="mb-2">
              <strong>Usage Data:</strong> Interaction with features,
              preferences, logs.
            </li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Data">
          We use your data to:
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li className="mb-2">Provide and improve Zubix services.</li>
            <li className="mb-2">
              Process payments and transactions securely.
            </li>
            <li className="mb-2">Detect and prevent fraudulent activities.</li>
            <li className="mb-2">
              Send updates, notifications, and promotions.
            </li>
          </ul>
        </Section>

        <Section title="4. Data Sharing and Disclosure">
          We do not sell or rent your data. However, we may share information
          with:
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li className="mb-2">
              <strong>Service Providers:</strong> To process payments and
              enhance security.
            </li>
            <li className="mb-2">
              <strong>Legal Authorities:</strong> If required by law or to
              enforce our policies.
            </li>
            <li className="mb-2">
              <strong>Business Partners:</strong> With consent, for personalized
              offers.
            </li>
          </ul>
        </Section>

        <Section title="5. Data Security">
          We implement industry-standard security measures to protect your data
          from unauthorized access, loss, or theft.
        </Section>

        <Section title="6. User Rights">
          You have the right to:
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li className="mb-2">
              Access, update, or delete your personal data.
            </li>
            <li className="mb-2">Withdraw consent for data processing.</li>
            <li className="mb-2">Opt-out of promotional communications.</li>
          </ul>
        </Section>

        <Section title="7. Cookies and Tracking Technologies">
          Zubix uses cookies to improve user experience. You can manage cookie
          preferences in your device settings.
        </Section>

        <Section title="8. Third-Party Links">
          Our App may contain links to third-party services. We are not
          responsible for their privacy practices.
        </Section>

        <Section title="9. Data Retention">
          We retain user data as long as necessary for providing services,
          complying with legal obligations, or resolving disputes.
        </Section>

        <Section title="10. Changes to this Policy">
          We may update this Privacy Policy periodically. Users will be notified
          of significant changes.
        </Section>

        <Section title="11. Contact Us">
          For privacy concerns, contact us at{" "}
          <a
            href="mailto:support@zubixapp.com"
            className="text-blue-500 hover:underline"
          >
            support@zubixapp.com
          </a>
          .
        </Section>

        <div className="text-center text-gray-600 text-sm mt-12 pt-6 border-t border-gray-200">
          Last updated: May 2, 2025
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
