import React from 'react';
import { navigationItems, legalNavigation, contactInfo } from '../../utils/constants';
import { Mail, Instagram, Twitter, Youtube } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-platform-dark-900 border-t border-platform-dark-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
            </div>
            <p className="text-platform-text text-opacity-70 mb-6 max-w-md">
              A competition platform for video creators of all talents —
              join tournaments and earn real money with your content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-platform-text text-opacity-70 hover:text-platform-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-platform-text text-opacity-70 hover:text-platform-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-platform-text text-opacity-70 hover:text-platform-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-platform-text mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-platform-text text-opacity-70 hover:text-platform-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-platform-text mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalNavigation.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-platform-text text-opacity-70 hover:text-platform-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-platform-text mb-2">Contact</h3>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-platform-primary" />
                <span className="text-platform-text text-opacity-70">{contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-platform-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Left: Tech Stack */}
          <div className="text-platform-text text-opacity-40 mb-4 md:mb-0 text-center md:text-left">
            Powered by <a href="https://nxgenlowcode.biz/" target="_blank" rel="noopener noreferrer" className="text-platform-text text-opacity-60 font-semibold hover:text-platform-primary transition-colors">NextGen Low-code Platform</a>
          </div>

          {/* Center: Copyright */}
          <div className="text-platform-text text-opacity-30 mb-4 md:mb-0 text-center">
            © 2025 Vincere. All rights reserved.
          </div>

          {/* Right: Security */}
          <div className="flex items-center gap-2 text-platform-text text-opacity-40">
            <span>Secured by</span>
            <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-platform-text text-opacity-60 hover:text-platform-primary transition-colors">Stripe</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
