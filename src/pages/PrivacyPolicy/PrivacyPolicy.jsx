import React from 'react';
import PageHero from '../WhatWeDo/components/PageHero';

const PrivacyPolicy = () => {
  return (
    <div className="w-full">
      <PageHero 
        title="Privacy Policy"
        subtitle="Your privacy is important to us"
      />
      
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8">
            <div>
              <h2 className="text-black mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                Code Crafter ("we", "our", or "us") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </div>

            <div>
              <h2 className="text-black mb-4">2. Information Collection and Use</h2>
              <p className="text-gray-600 mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <h3 className="text-black font-semibold mb-2">Types of Data Collected:</h3>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>• Personal Data: Name, email address, phone number, address, cookies and usage data</li>
                <li>• Usage Data: Browser type, IP address, pages visited, time spent, referring URL</li>
                <li>• Tracking Cookies: We use cookies to track activity on our site</li>
              </ul>
            </div>

            <div>
              <h2 className="text-black mb-4">3. Use of Data</h2>
              <p className="text-gray-600">
                Code Crafter uses the collected data for various purposes:
              </p>
              <ul className="text-gray-600 space-y-2 ml-4 mt-3">
                <li>• To provide and maintain our Service</li>
                <li>• To notify you about changes to our Service</li>
                <li>• To allow you to participate in interactive features of our Service</li>
                <li>• To provide customer support</li>
                <li>• To gather analysis or valuable information for improving our Service</li>
                <li>• To monitor the usage of our Service</li>
                <li>• To detect, prevent and address fraud, security issues and technical problems</li>
              </ul>
            </div>

            <div>
              <h2 className="text-black mb-4">4. Security of Data</h2>
              <p className="text-gray-600">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-black mb-4">5. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-black mb-4">6. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="text-gray-600 mt-3">
                <p>Code Crafter</p>
                <p>Email: privacy@codecrafter.com</p>
                <p>Address: 123 Tech Street, Silicon Valley, CA 94025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
