'use client'

import { SplineScene } from "./spline";
import { Card } from "./card";
import { Spotlight } from "./spotlight";
import { useEffect, useRef } from "react";
 
export function DemoSplineWithCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !spotlightRef.current) return;
    
    const container = containerRef.current;
    const spotlight = spotlightRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      
      // Calculate mouse position relative to the container
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      // Calculate position as percentage of container dimensions
      const xPercent = (x / width) * 100;
      const yPercent = (y / height) * 100;
      
      // Apply movement constraint - only move when mouse is over container
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        // Apply movement with smoothing
        spotlight.style.left = `${xPercent}%`;
        spotlight.style.top = `${yPercent}%`;
        spotlight.style.opacity = '0.8';
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Card ref={containerRef} className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <div 
        ref={spotlightRef}
        className="absolute w-[300px] h-[300px] rounded-full bg-white/20 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ease-out opacity-40"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interactive 3D
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}