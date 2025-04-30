import React from 'react';
import { MessageSquare, Phone, Plug, TrendingUp } from 'lucide-react';
import { BentoGrid, BentoItem } from '../BentoGrid';
import Cta from '../Cta';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-black scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="mb-6">Choose Our AI for Unmatched Results</h2>
          <p className="text-neutral-300 text-lg mb-10">
            Missed leads and stretched teams drain your profits. Our AI solutions empower businesses—from startups to enterprises—with seamless CRM integration (HubSpot, Salesforce) and tangible outcomes:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['300% Lead Growth', '80% Faster Response', '50% Cost Reduction'].map((metric) => (
              <div key={metric} className="feature-stat bg-white/5 border border-neutral-800 rounded-xl px-6 py-3">
                <p className="text-white font-semibold">{metric}</p>
              </div>
            ))}
          </div>
        </div>
        
        <BentoGrid className="mb-16">
          <BentoItem className="feature-card">
            <div className="feature-icon w-14 h-14 rounded-xl bg-white/5 border border-neutral-800 flex items-center justify-center mb-5">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-white text-xl font-semibold mb-2">AI Assistance</h4>
            <p className="text-neutral-300">
              Intelligent chatbot for lead capture, support ticket management, and appointment scheduling. Our clients achieve 300% lead growth with automated engagement.
            </p>
          </BentoItem>
          
          <BentoItem className="feature-card">
            <div className="feature-icon w-14 h-14 rounded-xl bg-white/5 border border-neutral-800 flex items-center justify-center mb-5">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-white text-xl font-semibold mb-2">AI Voice Assistance</h4>
            <p className="text-neutral-300">
              Life-like AI agents for 24/7 call handling and lead nurturing, delivering 80% faster responses. Transform your phone support with intelligent automation.
            </p>
          </BentoItem>
          
          <BentoItem className="feature-card">
            <div className="feature-icon w-14 h-14 rounded-xl bg-white/5 border border-neutral-800 flex items-center justify-center mb-5">
              <Plug className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-white text-xl font-semibold mb-2">Effortless Integration</h4>
            <p className="text-neutral-300">
              Connects seamlessly to your existing systems with minimal setup. Compatible with leading CRMs like HubSpot and Salesforce.
            </p>
          </BentoItem>
          
          <BentoItem className="feature-card">
            <div className="feature-icon w-14 h-14 rounded-xl bg-white/5 border border-neutral-800 flex items-center justify-center mb-5">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-white text-xl font-semibold mb-2">Proven ROI</h4>
            <p className="text-neutral-300">
              Slash operational costs by 50% while boosting conversions. Get measurable results with AI that pays for itself.
            </p>
          </BentoItem>
        </BentoGrid>
        <Cta />
      </div>
    </section>
  );
};

export default FeaturesSection;