import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 15C26 15 23 18 23 22C23 26 26 29 30 29C34 29 37 26 37 22C37 18 34 15 30 15Z" fill="#0EA5E9"/>
      <path d="M45 25C42 25 40 27 40 30C40 33 42 35 45 35C48 35 50 33 50 30C50 27 48 25 45 25Z" fill="#0EA5E9"/>
      <path d="M15 25C12 25 10 27 10 30C10 33 12 35 15 35C18 35 20 33 20 30C20 27 18 25 15 25Z" fill="#0EA5E9"/>
      <path d="M30 40C23 40 18 45 18 52C18 53.1 18.9 54 20 54H40C41.1 54 42 53.1 42 52C42 45 37 40 30 40Z" fill="#0EA5E9"/>
      <text x="65" y="40" className="text-2xl font-bold" fill="#0C4A6E" style={{ fontFamily: 'Arial, sans-serif' }}>
        PetShop
      </text>
    </svg>
  );
};

export default Logo; 