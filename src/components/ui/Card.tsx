import React from 'react';
import { CardProps } from '../../utils/types';
import { clsx } from 'clsx';

export const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  icon, 
  className, 
  children 
}) => {
  return (
    <div className={clsx('platform-card rounded-xl p-6', className)}>
      {icon && (
        <div className="mb-4">
          <div className="w-12 h-12 bg-platform-primary bg-opacity-20 rounded-lg flex items-center justify-center">
            <span className="text-2xl">{icon}</span>
          </div>
        </div>
      )}
      {title && <h3 className="text-xl font-semibold text-platform-text mb-2">{title}</h3>}
      {description && <p className="text-platform-text text-opacity-80">{description}</p>}
      {children && <div className={title || description ? "mt-4" : ""}>{children}</div>}
    </div>
  );
};