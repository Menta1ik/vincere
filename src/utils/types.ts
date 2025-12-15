export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
  children?: React.ReactNode;
}