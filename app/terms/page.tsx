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

const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms &amp; Conditions</h1>
      
      <Section title="1. Introduction">
        <p>Welcome to Zubix! These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the Zubix app (the &ldquo;App&rdquo;), owned and operated by Sushibh Empires Private Limited. By using the App, you agree to comply with these Terms. If you do not agree, please do not use the App.</p>
      </Section>
      
      <Section title="2. Definitions">
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>&ldquo;Zubix,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;</strong> refers to Sushibh Empires Private Limited.</li>
          <li><strong>&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;</strong> refers to any person accessing or using the App.</li>
          <li><strong>&ldquo;Services&rdquo;</strong> refer to the features and functionalities provided by the App, including payments, investments, shopping, split payments, and financial utilities.</li>
        </ul>
      </Section>
      
      <Section title="3. User Eligibility">
        <p>To use the App, you must be at least 16 years old or have legal parental consent. By using Zubix, you confirm that you meet these requirements.</p>
      </Section>
      
      <Section title="4. Account Registration">
        <p>To access certain features, you must create an account by providing accurate information. You are responsible for maintaining the confidentiality of your account credentials.</p>
      </Section>
      
      <Section title="5. Services">
        <p>Zubix offers financial tools including payments, investments, shopping, split payments, and financial utilities. We may update, modify, or discontinue services at any time without prior notice.</p>
      </Section>
      
      <Section title="6. Payments and Transactions">
        <p>Zubix enables users to make transactions through various payment methods. You are responsible for ensuring sufficient funds are available. We are not liable for transaction failures due to insufficient balance, incorrect details, or third-party failures.</p>
      </Section>
      
      <Section title="7. Data Protection">
        <p>Your data privacy is important to us. Our Privacy Policy governs the collection, usage, and protection of your data.</p>
      </Section>
      
      <Section title="8. Prohibited Activities">
        <p>You agree not to:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Use the App for fraudulent or illegal activities.</li>
          <li>Interfere with the App&rsquo;s security or disrupt services.</li>
          <li>Violate any applicable laws or third-party rights.</li>
        </ul>
      </Section>
      
      <Section title="9. Intellectual Property">
        <p>All content in the App, including trademarks, logos, and software, is the property of Sushibh Empires Private Limited. You may not use, copy, or distribute any content without our permission.</p>
      </Section>
      
      <Section title="10. Disclaimer of Warranties">
        <p>Zubix provides services &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee uninterrupted, error-free, or secure operations.</p>
      </Section>
      
      <Section title="11. Limitation of Liability">
        <p>Zubix shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the App.</p>
      </Section>
      
      <Section title="12. Termination">
        <p>We may suspend or terminate your access to Zubix if you violate these Terms.</p>
      </Section>
      
      <Section title="13. Governing Law">
        <p>These Terms shall be governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of the courts in [Your City].</p>
      </Section>
      
      <Section title="14. Changes to Terms">
        <p>Zubix reserves the right to update these Terms at any time. Continued use of the App after changes constitutes acceptance of the new Terms.</p>
      </Section>
      
      <Section title="15. Contact Us">
        <p>For any queries, contact us at <a href="mailto:support@zubixapp.com" className="text-blue-500">support@zubixapp.com</a>.</p>
      </Section>

      <footer className="text-center text-gray-600 text-sm mt-6">
        Last updated: March 31, 2025
      </footer>
    </div>
  );
};

export default TermsAndConditions;
