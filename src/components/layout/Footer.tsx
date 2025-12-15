import React from 'react';
import { navigationItems, contactInfo } from '../../utils/constants';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import { Logo } from '../ui/Logo';

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
                <Github size={20} />
              </a>
              <a href="#" className="text-platform-text text-opacity-70 hover:text-platform-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-platform-text text-opacity-70 hover:text-platform-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-platform-text mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-platform-text text-opacity-70 hover:text-platform-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-platform-text mb-4">Contacts</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-platform-primary" />
                <span className="text-platform-text text-opacity-70">{contactInfo.email}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-platform-primary" />
                <span className="text-platform-text text-opacity-70">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-platform-primary" />
                <span className="text-platform-text text-opacity-70">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-platform-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-platform-text text-opacity-50 text-sm">
            © 2024 Vincere. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-platform-text text-opacity-50 hover:text-platform-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-platform-text text-opacity-50 hover:text-platform-primary text-sm transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
