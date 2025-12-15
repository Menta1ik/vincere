import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingIcons } from '../ui/FloatingIcons';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <FloatingIcons />
      <Header />
      <main className="pt-20 relative z-10"> {/* Отступ для фиксированного хедера */}
        {children}
      </main>
      <Footer />
    </div>
  );
};