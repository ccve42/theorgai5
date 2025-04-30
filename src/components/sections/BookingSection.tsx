import React from 'react';
import Cal from "@calcom/embed-react";

const BookingSection: React.FC = () => {
  return (
    <section id="booking-calendar" className="py-20 bg-black scroll-mt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grain opacity-[0.03] z-0"></div>
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Book Your Free AI Consultation Now
            </h2>
            <p className="text-xl text-neutral-300 leading-relaxed mb-4 max-w-2xl mx-auto">
              In just 15-30 minutes, discover how AI can specifically help your business capture more leads and improve efficiency. No pressure, just insights.
            </p>
          </div>
          
          <div className="glassmorphism rounded-xl overflow-hidden relative">
            {/* Calendar widget container */}
            <div className="h-[600px]">
              <Cal
                calLink="aiorganization/introductory-meeting"
                style={{width:"100%",height:"100%",overflow:"scroll"}}
                config={{
                  layout: "month_view",
                  theme: "dark"
                }}
              />
            </div>
            
            {/* Reassurance text */}
            <div className="text-center mt-4 pb-4">
              <p className="text-neutral-400 text-sm">
                Your details are safe. We'll discuss your specific needs and answer all questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;