import { Feature, NavigationItem } from './types';

export const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Rules', href: '/rules' },
  { label: 'Support', href: '/contact' },
];

export const legalNavigation: NavigationItem[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/rules' }, // Reusing Rules for now
  { label: 'Content Policy', href: '/rules' },
];

export const features: Feature[] = [
  // ... kept for compatibility if needed, but likely unused now
  {
    id: '1',
    title: 'AI Judging',
    description: 'Objective scoring powered by advanced machine learning',
    icon: 'brain',
  },
  // ...
];

export const platformStats = [
  { label: 'Paid to creators', value: '$5M+' },
  { label: 'Competitions held', value: '10K+' },
  { label: 'Countries represented', value: '50+' },
  { label: 'Average rating', value: '4.9' },
];

export const contactInfo = {
  email: 'support@vincere.app',
  phone: '', // Removed as not in doc
  address: '', // Removed as not in doc
};
