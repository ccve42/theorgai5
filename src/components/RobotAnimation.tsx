import React, { useEffect, useRef } from 'react';

const RobotAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyesRef = useRef<{ left: HTMLDivElement | null; right: HTMLDivElement | null }>({
    left: null,
    right: null
  });
  const spotlightRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create robot eye tracking effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !eyesRef.current.left || !eyesRef.current.right) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;
      
      // Calculate angle from center of container to mouse position
      const angleX = (e.clientX - containerCenterX) / (containerRect.width / 2);
      const angleY = (e.clientY - containerCenterY) / (containerRect.height / 2);
      
      // Limit eye movement range
      const maxEyeMove = 3;
      const eyeMoveX = Math.min(Math.max(angleX * maxEyeMove, -maxEyeMove), maxEyeMove);
      const eyeMoveY = Math.min(Math.max(angleY * maxEyeMove, -maxEyeMove), maxEyeMove);
      
      // Apply transformation to eyes
      eyesRef.current.left.style.transform = `translate(${eyeMoveX}px, ${eyeMoveY}px)`;
      eyesRef.current.right.style.transform = `translate(${eyeMoveX}px, ${eyeMoveY}px)`;
      
      // Move spotlight
      if (spotlightRef.current) {
        const spotlightX = Math.min(Math.max(angleX * 15, -15), 15);
        const spotlightY = Math.min(Math.max(angleY * 15, -15), 15);
        spotlightRef.current.style.transform = `translate(${spotlightX}px, ${spotlightY}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Add a subtle idle animation
    const interval = setInterval(() => {
      if (!containerRef.current) return;

      // Random micro-movements for the robot
      const randomX = (Math.random() - 0.5) * 2;
      const randomY = (Math.random() - 0.5) * 2;
      
      containerRef.current.style.transform = `translate(${randomX}px, ${randomY}px)`;
      
      // Reset after a short time
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transform = 'translate(0, 0)';
        }
      }, 500);
    }, 3000);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div 
      className="h-[500px] w-full max-w-lg mx-auto relative"
      ref={containerRef}
    >
      {/* Spotlight effect */}
      <div 
        ref={spotlightRef}
        className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-70 transition-transform duration-300 ease-out"
        style={{ transformOrigin: 'center center' }}
      />
      
      {/* Robot Body */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-64 rounded-2xl glossy-black shadow-2xl transition-all duration-500 animate-float reflective">
          {/* Robot Head */}
          <div className="w-40 h-40 rounded-2xl glossy-black absolute -top-28 left-1/2 transform -translate-x-1/2 shadow-xl reflective">
            {/* Robot Eyes */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-center gap-8 transform -translate-y-1/2">
              {/* Left Eye */}
              <div className="w-6 h-6 rounded-full bg-black/60 border border-neutral-800 flex items-center justify-center">
                <div 
                  ref={(el) => (eyesRef.current.left = el)}
                  className="w-3 h-3 rounded-full bg-white shadow-glow transition-transform duration-200 ease-out animate-pulse-slow"
                />
              </div>
              
              {/* Right Eye */}
              <div className="w-6 h-6 rounded-full bg-black/60 border border-neutral-800 flex items-center justify-center">
                <div 
                  ref={(el) => (eyesRef.current.right = el)}
                  className="w-3 h-3 rounded-full bg-white shadow-glow transition-transform duration-200 ease-out animate-pulse-slow"
                />
              </div>
            </div>
            
            {/* Robot Mouth */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-neutral-700 rounded-full" />
          </div>
          
          {/* Robot Chest */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-8 rounded-lg bg-black/40 border border-neutral-700 flex items-center justify-center overflow-hidden">
            <div className="w-full h-1 bg-white/10 absolute animate-pulse-slow" />
          </div>
          
          {/* Robot Arms */}
          <div className="absolute top-16 -left-8 w-6 h-32 rounded-full glossy-black reflective" />
          <div className="absolute top-16 -right-8 w-6 h-32 rounded-full glossy-black reflective" />
        </div>
      </div>
    </div>
  );
};

export default RobotAnimation;