import React from 'react';
import { Layout } from '../components/layout/Layout';
import { HeroSection } from '../components/sections/HeroSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { TournamentModelSection } from '../components/sections/TournamentModelSection';

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <TournamentModelSection />
      <FeaturesSection />
    </Layout>
  );
};