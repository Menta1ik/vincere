import React from 'react';
import { Layout } from '../components/layout/Layout';
import { HeroSection } from '../components/sections/HeroSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { CategoriesSection } from '../components/sections/CategoriesSection';
import { WhyVincereSection } from '../components/sections/WhyVincereSection';
import { StatsSection } from '../components/sections/StatsSection';
import { CommunitySection } from '../components/sections/CommunitySection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <CategoriesSection />
      <WhyVincereSection />
      <CommunitySection />
      <TestimonialsSection />
    </Layout>
  );
};