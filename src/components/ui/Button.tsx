import React from 'react';
import { ButtonProps } from '../../utils/types';
import { clsx } from 'clsx';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  onClick, 
  disabled = false 
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-platform-primary text-white hover:bg-opacity-90 focus:ring-platform-primary focus:ring-opacity-50 shadow-lg hover:shadow-xl',
    secondary: 'bg-platform-secondary text-white hover:bg-opacity-90 focus:ring-platform-secondary focus:ring-opacity-50',
    outline: 'border-2 border-platform-primary text-platform-primary hover:bg-platform-primary hover:text-white focus:ring-platform-primary focus:ring-opacity-50',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};