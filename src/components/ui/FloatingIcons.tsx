import React from 'react';
import { Music, Gamepad2, Video, Star, Zap, Play } from 'lucide-react';

export const FloatingIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left - Music */}
      <div className="absolute top-[15%] left-[5%] text-platform-primary opacity-10 animate-float" style={{ animationDelay: '0s' }}>
        <Music size={64} />
      </div>

      {/* Top Right - Gamepad */}
      <div className="absolute top-[20%] right-[10%] text-platform-secondary opacity-10 animate-float" style={{ animationDelay: '2s' }}>
        <Gamepad2 size={80} />
      </div>

      {/* Middle Left - Video */}
      <div className="absolute top-[50%] left-[8%] text-white opacity-5 animate-float" style={{ animationDelay: '4s' }}>
        <Video size={56} />
      </div>

      {/* Middle Right - Star */}
      <div className="absolute top-[60%] right-[5%] text-yellow-400 opacity-10 animate-float" style={{ animationDelay: '1s' }}>
        <Star size={48} />
      </div>

      {/* Bottom Left - Zap */}
      <div className="absolute bottom-[20%] left-[15%] text-platform-primary opacity-10 animate-float" style={{ animationDelay: '3s' }}>
        <Zap size={72} />
      </div>

      {/* Bottom Right - Play */}
      <div className="absolute bottom-[10%] right-[20%] text-platform-secondary opacity-10 animate-float" style={{ animationDelay: '5s' }}>
        <Play size={64} />
      </div>
    </div>
  );
};
