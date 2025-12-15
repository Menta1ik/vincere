import React, { useState } from 'react';
import { navigationItems } from '../../utils/constants';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-platform-text hover:text-platform-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="text-platform-text hover:text-platform-primary transition-colors duration-300 font-medium">
              Sign in
            </button>
            <button className="bg-platform-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium">
              Get started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-platform-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-platform-text hover:text-platform-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col space-y-4 mt-6">
              <button className="text-platform-text hover:text-platform-primary transition-colors duration-300 font-medium text-left">
                Sign in
              </button>
              <button className="bg-platform-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium">
                Get started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
