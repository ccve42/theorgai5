'use client'

import React, { useEffect, useRef } from 'react'

interface CursorSpotlightProps {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

export function CursorSpotlight({ 
  size = 300, 
  color = 'white',
  opacity = 0.15,
  className = '' 
}: CursorSpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      
      const { clientX, clientY } = e;
      
      // Apply some lag for smooth following effect
      requestAnimationFrame(() => {
        if (spotlightRef.current) {
          spotlightRef.current.style.left = `${clientX}px`;
          spotlightRef.current.style.top = `${clientY}px`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Only show on devices with mouse pointers
  const [showCursor, setShowCursor] = React.useState(false);
  
  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    setShowCursor(!isCoarsePointer);
  }, []);

  if (!showCursor) return null;

  return (
    <div 
      ref={spotlightRef}
      className={`fixed pointer-events-none z-[9999] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 mix-blend-soft-light will-change-transform ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        opacity: opacity,
      }}
    />
  );
}