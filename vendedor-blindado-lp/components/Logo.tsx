import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <div className="relative w-[42px] h-[42px] flex-shrink-0">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          <path 
            d="M50 95C50 95 85 75 85 30V15L50 5L15 15V30C15 75 50 95 50 95Z" 
            fill="url(#shieldGradient)" 
            stroke="rgba(255,255,255,0.2)" 
            strokeWidth="2"
          />
          
          <path 
            d="M35 35L50 65L65 35" 
            stroke="white" 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            filter="url(#glow)"
          />
          
          <path d="M50 5L85 15V30C85 35 84 40 82 45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      
      <div className="flex flex-col justify-center h-[42px]">
        <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-primary-300 uppercase leading-none mb-0.5">
          Vendedor
        </span>
        <span className="text-lg md:text-xl font-black text-white tracking-tight leading-none font-sans">
          BLINDADO
        </span>
      </div>
    </div>
  );
};

export default Logo;