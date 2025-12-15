import { Feature, NavigationItem } from './types';

export const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Contacts', href: '/contact' },
];

export const features: Feature[] = [
  {
    id: '1',
    title: 'AI Judging',
    description: 'Objective scoring powered by advanced machine learning',
    icon: 'brain',
  },
  {
    id: '2',
    title: 'Video Uploads',
    description: 'Frictionless video upload, processing and publishing',
    icon: 'video',
  },
  {
    id: '3',
    title: 'Creator Tournaments',
    description: 'Join or host tournaments across talents at any scale',
    icon: 'trophy',
  },
  {
    id: '4',
    title: 'Cash Prizes',
    description: 'Compete in verified events and earn real money',
    icon: 'user-plus',
  },
  {
    id: '5',
    title: 'Creator Analytics',
    description: 'Performance stats and insights across tournaments',
    icon: 'bar-chart',
  },
  {
    id: '6',
    title: 'Safety & Anti‑cheat',
    description: 'Moderation, content protection and fraud prevention',
    icon: 'shield',
  },
];

export const platformStats = [
  { label: 'Active tournaments', value: '150+' },
  { label: 'Participants', value: '10K+' },
  { label: 'Evaluations', value: '50K+' },
  { label: 'Videos', value: '5K+' },
];

export const contactInfo = {
  email: 'info@vincere.ai',
  phone: '+1 (323) 555-0199',
  address: 'Los Angeles, CA 90028',
};
