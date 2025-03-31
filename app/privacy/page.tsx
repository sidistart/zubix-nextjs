import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{children}</p>
  </section>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
      
      <Section title="1. Introduction">
        This Privacy Policy explains how Sushibh Empires Private Limited (&ldquo;Zubix,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects your personal data.
      </Section>
      
      <Section title="2. Information We Collect">
        We may collect the following types of data:
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Personal Information:</strong> Name, email, phone number, address.</li>
          <li><strong>Financial Information:</strong> Payment history, transaction details.</li>
          <li><strong>Device Information:</strong> IP address, device model, OS version.</li>
          <li><strong>Usage Data:</strong> Interaction with features, preferences, logs.</li>
        </ul>
      </Section>
      
      <Section title="3. How We Use Your Data">
        We use your data to:
        <ul className="list-disc list-inside text-gray-700">
          <li>Provide and improve Zubix services.</li>
          <li>Process payments and transactions securely.</li>
          <li>Detect and prevent fraudulent activities.</li>
          <li>Send updates, notifications, and promotions.</li>
        </ul>
      </Section>
      
      <Section title="4. Data Sharing and Disclosure">
        We do not sell or rent your data. However, we may share information with:
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Service Providers:</strong> To process payments and enhance security.</li>
          <li><strong>Legal Authorities:</strong> If required by law or to enforce our policies.</li>
          <li><strong>Business Partners:</strong> With consent, for personalized offers.</li>
        </ul>
      </Section>
      
      <Section title="5. Data Security">
        We implement industry-standard security measures to protect your data from unauthorized access, loss, or theft.
      </Section>
      
      <Section title="6. User Rights">
        You have the right to:
        <ul className="list-disc list-inside text-gray-700">
          <li>Access, update, or delete your personal data.</li>
          <li>Withdraw consent for data processing.</li>
          <li>Opt-out of promotional communications.</li>
        </ul>
      </Section>
      
      <Section title="7. Cookies and Tracking Technologies">
        Zubix uses cookies to improve user experience. You can manage cookie preferences in your device settings.
      </Section>
      
      <Section title="8. Third-Party Links">
        Our App may contain links to third-party services. We are not responsible for their privacy practices.
      </Section>
      
      <Section title="9. Data Retention">
        We retain user data as long as necessary for providing services, complying with legal obligations, or resolving disputes.
      </Section>
      
      <Section title="10. Changes to this Policy">
        We may update this Privacy Policy periodically. Users will be notified of significant changes.
      </Section>
      
      <Section title="11. Contact Us">
        For privacy concerns, contact us at <a href="mailto:support@zubix.com" className="text-blue-500">support@zubix.com</a>.
      </Section>

      <footer className="text-center text-gray-600 text-sm mt-6">
        Last updated: March 31, 2025
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
