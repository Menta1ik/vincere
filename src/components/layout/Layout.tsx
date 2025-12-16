import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingIcons } from '../ui/FloatingIcons';
import { AbstractBackground } from '../ui/AbstractBackground';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <AbstractBackground />
      <FloatingIcons />
      <Header />
      <main className="pt-20 relative z-10"> {/* Отступ для фиксированного хедера */}
        {children}
      </main>
      <Footer />
    </div>
  );
};