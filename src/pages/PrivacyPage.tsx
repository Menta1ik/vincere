import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Shield, Lock, FileText, UserCheck } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20 container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center text-white font-['CarterOne']">Your Data is Safe with Us</h1>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-platform-dark-800/50 p-8 rounded-2xl border border-platform-dark-700">
            <div className="flex items-center mb-4">
              <Shield size={32} className="text-platform-primary mr-3" />
              <h2 className="text-2xl font-bold text-white">Data Protection</h2>
            </div>
            <ul className="space-y-3 text-platform-text text-opacity-80">
              <li className="flex items-start">• GDPR and international privacy law compliant</li>
              <li className="flex items-start">• Your personal information is encrypted</li>
              <li className="flex items-start">• We never sell your data to third parties</li>
            </ul>
          </div>

          <div className="bg-platform-dark-800/50 p-8 rounded-2xl border border-platform-dark-700">
            <div className="flex items-center mb-4">
              <Lock size={32} className="text-platform-secondary mr-3" />
              <h2 className="text-2xl font-bold text-white">Payment Security</h2>
            </div>
            <ul className="space-y-3 text-platform-text text-opacity-80">
              <li className="flex items-start">• PCI-DSS Level 1 certified</li>
              <li className="flex items-start">• Secure payment processing with Stripe</li>
              <li className="flex items-start">• Your financial information is protected</li>
            </ul>
          </div>

          <div className="bg-platform-dark-800/50 p-8 rounded-2xl border border-platform-dark-700">
            <div className="flex items-center mb-4">
              <FileText size={32} className="text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Content Security</h2>
            </div>
            <ul className="space-y-3 text-platform-text text-opacity-80">
              <li className="flex items-start">• Blockchain verification of ownership</li>
              <li className="flex items-start">• Watermarked content protection</li>
              <li className="flex items-start">• Anti-plagiarism detection</li>
              <li className="flex items-start">• Digital rights management</li>
            </ul>
          </div>

          <div className="bg-platform-dark-800/50 p-8 rounded-2xl border border-platform-dark-700">
            <div className="flex items-center mb-4">
              <UserCheck size={32} className="text-green-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Account Security</h2>
            </div>
            <ul className="space-y-3 text-platform-text text-opacity-80">
              <li className="flex items-start">• Two-factor authentication available</li>
              <li className="flex items-start">• Secure password requirements</li>
              <li className="flex items-start">• Session timeout protection</li>
              <li className="flex items-start">• Login activity monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
