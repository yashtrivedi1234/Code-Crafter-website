import React from 'react';
import PageHero from '../WhatWeDo/components/PageHero';

const Terms = () => {
  return (
    <div className="w-full">
      <PageHero 
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services"
      />
      
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8">
            <div>
              <h2 className="text-black mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing and using Code Crafter's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-black mb-4">2. Use License</h2>
              <p className="text-gray-600 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Code Crafter's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>• Modifying or copying the materials</li>
                <li>• Using the materials for any commercial purpose or for any public display</li>
                <li>• Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>• Removing any copyright or other proprietary notations from the materials</li>
                <li>• Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-black mb-4">3. Disclaimer</h2>
              <p className="text-gray-600">
                The materials on Code Crafter's website are provided on an 'as is' basis. Code Crafter makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-black mb-4">4. Limitations</h2>
              <p className="text-gray-600">
                In no event shall Code Crafter or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Code Crafter's website.
              </p>
            </div>

            <div>
              <h2 className="text-black mb-4">5. Accuracy of Materials</h2>
              <p className="text-gray-600">
                The materials appearing on Code Crafter's website could include technical, typographical, or photographic errors. Code Crafter does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </div>

            <div>
              <h2 className="text-black mb-4">6. Links</h2>
              <p className="text-gray-600">
                Code Crafter has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Code Crafter of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-black mb-4">7. Modifications</h2>
              <p className="text-gray-600">
                Code Crafter may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-black mb-4">8. Governing Law</h2>
              <p className="text-gray-600">
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-black mb-4">9. Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="text-gray-600 mt-3">
                <p>Code Crafter</p>
                <p>Email: legal@codecrafter.com</p>
                <p>Address: 123 Tech Street, Silicon Valley, CA 94025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
