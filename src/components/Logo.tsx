import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export function Logo({
  className = "h-8 md:h-10",
  dark = false,
}: LogoProps) {
  const textColor = dark ? "#FFF5E5" : "#1C1C1C";
  const digitalColor = dark ? "#DDE68D" : "#6CA623";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Gambar Logo */}
      <div className={`h-full flex items-center justify-center ${dark ? 'bg-white/90 p-1 rounded-lg' : ''}`}>
        <img 
          src="/Logo%20Kembang.png" 
          alt="Kembang Digital Logo" 
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Text Kembang Digital */}
      <div className="flex flex-col justify-center pt-1">
        <span className="font-bold tracking-[0.15em] text-xl md:text-2xl leading-none" style={{ color: textColor }}>
          KEMBANG
        </span>
        <span className="text-[0.65em] font-bold tracking-[0.3em] leading-none mt-1.5" style={{ color: digitalColor }}>
          - DIGITAL -
        </span>
      </div>
    </div>
  );
}
