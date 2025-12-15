import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="font-['BigShouldersInline'] text-5xl tracking-tighter flex items-center select-none">
        <span className="text-[#FFE7F3]">vin</span>
        <span className="text-[#FF007F]">c</span>
        <span className="text-[#FFE7F3]">ere</span>
      </div>
    </div>
  );
};
