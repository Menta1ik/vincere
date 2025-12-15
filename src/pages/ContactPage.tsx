import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Mail, Clock, HelpCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const faqs = [
    {
      q: "Can I withdraw money immediately after winning?",
      a: "Payouts are processed Monday after the competition. Depending on your bank — usually 1-3 days."
    },
    {
      q: "What if my video doesn't pass verification?",
      a: "The system automatically checks quality and format. If there are issues, you'll get detailed feedback."
    },
    {
      q: "How does AI judging work?",
      a: "AI analyzes your video across dozens of parameters (technique, originality, energy, clarity, and more). The result is transparent and objective."
    },
    {
      q: "How much can I win per month?",
      a: "No limits. Win every week if you can. The more wins, the more money."
    },
    {
      q: "What age is the platform for?",
      a: "18+. Participants under 18 need parental consent."
    },
    {
      q: "How is my content protected?",
      a: "Watermarks, anti-screenshot, anti-download features. Vincere doesn't share your content with third parties without your permission."
    }
  ];

  return (
    <Layout>
      <div className="pt-32 pb-20 container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center text-white font-['CarterOne']">Need Help?</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-platform-dark-800/50 p-8 rounded-2xl border border-platform-dark-700 text-center">
              <div className="w-16 h-16 bg-platform-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-platform-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Support Email</h3>
              <a href="mailto:support@vincere.app" className="text-2xl font-bold text-platform-primary hover:underline">support@vincere.app</a>
            </div>
            
            <div className="bg-platform-dark-800/50 p-8 rounded-2xl border border-platform-dark-700 text-center">
              <div className="w-16 h-16 bg-platform-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-platform-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Response Time</h3>
              <p className="text-2xl font-bold text-white">Usually within 24 hours</p>
            </div>
          </div>

          <div className="bg-platform-dark-800/50 p-8 rounded-2xl border border-platform-dark-700">
            <div className="flex items-center mb-8">
              <HelpCircle size={32} className="text-platform-text mr-3" />
              <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-platform-dark-600 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-platform-text text-opacity-80 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
