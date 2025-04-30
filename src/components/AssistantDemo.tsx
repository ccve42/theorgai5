import React from 'react';
import { Send } from 'lucide-react';

const AssistantDemo: React.FC = () => {
  return (
    <div id="assistant-demo" className="container mx-auto px-4 mb-20">
      <div className="flex item-center gap-3 mb-10 justify-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            See It In Action
          </h2>
      </div>
    <div className="glassmorphism rounded-xl overflow-hidden p-8 shadow-glow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-white text-xl font-medium mb-4">Interactive AI Assistant</h4>
            <p className="text-neutral-300 mb-6">
              Experience how our AI assistance can engage with your customers, capture leads, and manage support tickets. Try the interactive demo by clicking the blue circle on the bottom right of your screen.
            </p>
            <div className="space-y-4">
              <div className="bg-black/40 border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-all duration-300">
                <h5 className="text-white font-medium mb-2">Lead Capture</h5>
                <p className="text-neutral-400 text-sm">
                  The AI identifies potential leads and collects relevant information to qualify them.
                </p>
              </div>
              <div className="bg-black/40 border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-all duration-300">
                <h5 className="text-white font-medium mb-2">CRM Integration</h5>
                <p className="text-neutral-400 text-sm">
                  Customer information is automatically added to your CRM, eliminating manual data entry.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="h-full flex items-center justify-center">
              <div className="w-64 h-96 rounded-2xl border border-neutral-800 bg-black/60 overflow-hidden shadow-lg relative">
                <div className="absolute inset-0 flex flex-col">
                  <div className="p-4 border-b border-neutral-800">
                    <h4 className="text-white font-medium">AI Chat Assistant</h4>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    <div className="bg-neutral-800 text-white rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Hi there! How can I assist you today?</p>
                    </div>
                    <div className="bg-white text-black rounded-lg p-3 max-w-[80%] ml-auto">
                      <p className="text-sm">I'm interested in your AI solutions</p>
                    </div>
                    <div className="bg-neutral-800 text-white rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Great! I'd be happy to tell you about our AI solutions. Would you like to schedule a demo?</p>
                    </div>
                  </div>
                  <div className="p-4 border-t border-neutral-800">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 bg-black/60 border border-neutral-700 rounded-lg px-3 py-2 text-white text-sm"
                        disabled
                      />
                      <button className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center">
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
};

export default AssistantDemo;