import React from 'react';

export const GradientBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Основной градиент с темными оттенками из OCR */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#37001A] via-[#2A0014] via-[#1D000E] to-[#14000A]">
        {/* Дополнительный слой для анимации */}
        <div className="absolute inset-0 bg-gradient-to-tr from-platform-primary via-platform-secondary to-transparent opacity-30 animate-gradient-shift"></div>
        
        {/* Анимированные элементы для глубины */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-platform-primary rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-platform-secondary rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Дополнительные floating элементы */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FF007F] rounded-full filter blur-2xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-[#F974CA] rounded-full filter blur-2xl opacity-10 animate-float" style={{ animationDelay: '4.5s' }}></div>
      </div>
      
      {/* Контент поверх фона */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};