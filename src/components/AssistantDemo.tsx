import React from 'react';
import { Send } from 'lucide-react';
import { translations } from '../translations';
import { ElegantShape } from './ui/shape-landing-hero';

interface AssistantDemoProps {
  lang: 'en' | 'jp';
}

const AssistantDemo: React.FC<AssistantDemoProps> = ({ lang }) => {
  const t = translations[lang].assistantDemo;

  return (
    <section id="assistant-demo" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      <div className="absolute inset-0 bg-grain opacity-[0.03] z-0"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex item-center gap-3 mb-10 justify-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            {t.title}
          </h2>
        </div>
        <div className="glassmorphism rounded-xl overflow-hidden p-8 shadow-glow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white text-xl font-medium mb-4">{t.subtitle}</h4>
              <p className="text-neutral-300 mb-6">
                {t.description}
              </p>
              <div className="space-y-4">
                <div className="bg-black/40 border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-all duration-300">
                  <h5 className="text-white font-medium mb-2">{t.features.leadCapture.title}</h5>
                  <p className="text-neutral-400 text-sm">
                    {t.features.leadCapture.description}
                  </p>
                </div>
                <div className="bg-black/40 border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-all duration-300">
                  <h5 className="text-white font-medium mb-2">{t.features.crmIntegration.title}</h5>
                  <p className="text-neutral-400 text-sm">
                    {t.features.crmIntegration.description}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="h-full flex items-center justify-center">
                <div className="w-64 h-96 rounded-2xl border border-neutral-800 bg-black/60 overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0 flex flex-col">
                    <div className="p-4 border-b border-neutral-800">
                      <h4 className="text-white font-medium">{t.chat.title}</h4>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                      <div className="bg-neutral-800 text-white rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">{t.chat.messages.greeting}</p>
                      </div>
                      <div className="bg-white text-black rounded-lg p-3 max-w-[80%] ml-auto">
                        <p className="text-sm">{t.chat.messages.user}</p>
                      </div>
                      <div className="bg-neutral-800 text-white rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">{t.chat.messages.response}</p>
                      </div>
                    </div>
                    <div className="p-4 border-t border-neutral-800">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder={t.chat.input.placeholder}
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
    </section>
  );
};

export default AssistantDemo;