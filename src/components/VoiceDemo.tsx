import React, { useState, useRef, useEffect } from 'react';
import { Phone, PhoneOff, Volume2 } from 'lucide-react';
import Vapi from '@vapi-ai/web';

const VoiceDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isCallLoading, setIsCallLoading] = useState(false);
  const [volume, setVolume] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const waveformRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const vapiRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Vapi
    vapiRef.current = new Vapi('bd71af37-5e7f-4cb2-a30b-05f89e4bf0e8');
    
    // Set up event listeners
    vapiRef.current.on('call-start', () => {
      setIsCallActive(true);
      setIsCallLoading(false);
    });
    
    vapiRef.current.on('call-end', () => {
      setIsCallActive(false);
      setIsCallLoading(false);
    });
    
    vapiRef.current.on('volume-level', (vol: number) => {
      setVolume(vol);
    });
    
    vapiRef.current.on('error', (error: Error) => {
      console.error('Vapi error:', error);
      setIsCallActive(false);
      setIsCallLoading(false);
    });
    
    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
      }
    };
  }, []);

  const startCall = async () => {
    try {
      setIsCallLoading(true);
      await vapiRef.current.start('f0514ee5-109a-47f3-b7d1-17f3d454f28b');
    } catch (error) {
      console.error('Failed to start call:', error);
      setIsCallLoading(false);
    }
  };

  const endCall = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
    }
  };
  
  // Create a simulated audio wave animation
  const updateWaveform = () => {
    if (!waveformRef.current || !audioRef.current) return;
    
    const bars = waveformRef.current.querySelectorAll('.waveform-bar');
    const audioElement = audioRef.current;
    
    bars.forEach((bar) => {
      const barElement = bar as HTMLElement;
      
      // Only animate if audio is playing
      if (isPlaying) {
        const randomHeight = Math.floor(Math.random() * 100) + 20;
        barElement.style.height = `${randomHeight}%`;
        barElement.style.opacity = '1';
      } else {
        barElement.style.height = '30%';
        barElement.style.opacity = '0.5';
      }
    });
    
    setCurrentTime(audioElement.currentTime);
    
    animationFrameRef.current = requestAnimationFrame(updateWaveform);
  };
  
  const togglePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  React.useEffect(() => {
    if (isPlaying) {
      animationFrameRef.current = requestAnimationFrame(updateWaveform);
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);
  
  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  return (
    <div className="container mx-auto px-4 mb-20">
      <div className="flex items-center gap-3 mb-10">
                    <h3 className="text-white text-2xl font-semibold">Hear It In Action</h3>
                    <div className="h-px flex-grow bg-gradient-to-r from-white/30 to-transparent"></div>
      </div>
  
      <div className="space-y-8">
      <div className="glassmorphism rounded-xl overflow-hidden p-8 md:p-10">
        {/* Hidden audio element */}
        <audio
          ref={audioRef}
          onEnded={() => setIsPlaying(false)}
          onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
          src="https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
          loop
        />
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Phone visualization */}
          <div className="w-full md:w-2/5 relative perspective-1000">
            <div className="relative w-40 h-80 mx-auto rounded-3xl glossy-black border border-neutral-700 overflow-hidden shadow-lg">
              {/* Phone screen */}
              <div className="absolute inset-1 rounded-2xl bg-black/80 flex flex-col justify-between overflow-hidden">
                {/* Phone header */}
                <div className="p-3 flex justify-between items-center">
                  <span className="text-white text-xs">9:41</span>
                  <div className="w-16 h-4 bg-black rounded-full mx-auto"></div>
                  <div className="flex gap-1">
                    <Volume2 className="w-3 h-3 text-white" />
                  </div>
                </div>
                
                {/* Call visualization */}
                <div className="flex-1 flex flex-col items-center justify-center gap-3">
                  <div className="w-24 h-24 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-700/30 to-transparent"></div>
                    <Phone className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-white text-lg font-medium">AI Voice Assistant</h4>
                  <p className="text-neutral-400 text-sm">00:{formatTime(currentTime)}</p>
                </div>
                
                {/* Phone action buttons */}
                <div className="p-4 flex justify-center">
                  <button
                    onClick={isCallActive ? endCall : startCall}
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isCallActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                    } transition-all duration-300`}
                  >
                    {isCallActive ? 
                      <PhoneOff className="w-6 h-6 text-white" /> : 
                      <Phone className="w-6 h-6 text-white" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Voice waveform */}
          <div className="w-full md:w-3/5">
            <h3 className="text-white text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">Experience Our AI Voice Assistant</h3>
            <p className="text-neutral-300 mb-6">
              Listen to our lifelike AI voice assistant in action. This demo showcases how our technology handles customer inquiries with natural-sounding speech patterns and emotional intelligence.
            </p>
            
            {/* Waveform visualization */}
            <div className="h-24 mb-6 flex items-center p-3 border border-neutral-800 rounded-xl bg-black/40 backdrop-blur-sm shadow-inner">
              <div 
                ref={waveformRef}
                className="w-full h-full flex items-center justify-between gap-1"
              >
                {Array.from({ length: 50 }).map((_, i) => {
                  const height = isCallActive ? Math.max(30, volume * 100) : 30;
                  return (
                    <div 
                      key={i}
                      className={`waveform-bar w-1 bg-white rounded-full opacity-50 transition-all duration-100 ease-out ${
                        isCallActive ? 'animate-pulse' : ''
                      }`}
                      style={{ 
                        height: `${height}%`,
                        animationDelay: `${i * 20}ms`,
                      }}
                    />
                  );
                })}
              </div>
            </div>
            
            {/* Player controls */}
            <div className="flex items-center gap-6">
              <button
                onClick={isCallActive ? endCall : startCall}
                disabled={isCallLoading}
                aria-label={isCallActive ? "End voice call" : "Start voice call"}
                className={`voice-call-button ${isCallActive ? 'active' : ''} ${isCallLoading ? 'loading' : ''} shadow-2xl`}
              >
                <div className="button-icon-container">
                  {isCallLoading ? (
                    <div className="voice-loader">
                      <div className="voice-loader-circle"></div>
                      <div className="voice-loader-circle"></div>
                      <div className="voice-loader-circle"></div>
                    </div>
                  ) : isCallActive ? (
                    <PhoneOff className="phone-icon phone-off" />
                  ) : (
                    <Phone className="phone-icon phone-on" />
                  )}
                </div>
                <div className="button-ripple"></div>
              </button>
              
              <div className="flex-1">
                <p className="text-white text-sm font-medium mb-2">
                  {isCallLoading 
                    ? 'Connecting to AI assistant...' 
                    : isCallActive 
                      ? 'Call in progress...' 
                      : 'Click to start demo'}
                </p>
                <div 
                  className={`progress-bar ${isCallLoading ? 'active' : ''}`}
                  role="progressbar" 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                  aria-valuenow={isCallLoading ? 100 : 0}
                  aria-label={isCallLoading ? "Loading voice assistant" : ""}
                >
                  <div className="progress-track w-full"></div>
                </div>
                <p className="text-neutral-500 text-xs mt-2">
                  {isCallActive ? 'Press button to end call' : 'High-quality voice synthesis demo'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default VoiceDemo;