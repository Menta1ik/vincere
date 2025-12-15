import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black gradient-text font-['CarterOne'] mb-6">Oops!</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">You're Not Supposed to Be Here</h2>
        <p className="text-xl text-platform-text text-opacity-80 max-w-lg mb-12">
          This page doesn't exist. But your talent definitely does. Get back to competing.
        </p>
        
        <Link to="/">
          <Button variant="primary" size="lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
};
