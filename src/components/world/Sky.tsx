'use client';

import React from 'react';

interface SkyProps {
  totalHeight?: string | number;
}

export const Sky: React.FC<SkyProps> = ({ totalHeight = '100%' }) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      style={{
        height: totalHeight,
        background: `
          linear-gradient(
            180deg,
            #05030e 0%,
            #090618 18%,
            #0e0a24 40%,
            #150c2f 65%,
            #1f103b 85%,
            #140827 96%,
            #080412 100%
          )
        `,
      }}
    >
      {/* Soft atmospheric radial gradients representing cosmic ambient depth */}
      <div
        className="absolute top-[8%] left-[20%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-[35%] right-[15%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-[70%] left-[30%] w-[700px] h-[700px] rounded-full blur-[180px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[5%] left-[50%] -translate-x-1/2 w-[900px] h-[450px] rounded-full blur-[160px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #f59e0b 0%, #7c3aed 40%, transparent 75%)' }}
      />
    </div>
  );
};
