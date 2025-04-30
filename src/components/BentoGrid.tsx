import React from 'react';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
  return (
    <div className={`bento-grid ${className}`}>
      {children}
    </div>
  );
};

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BentoItem: React.FC<BentoItemProps> = ({ 
  children, 
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'col-span-1',
    md: 'col-span-1 md:col-span-1',
    lg: 'col-span-1 md:col-span-2',
  }[size];
  
  return (
    <div className={`bento-item glow-on-hover ${sizeClasses} ${className}`}>
      {children}
    </div>
  );
};