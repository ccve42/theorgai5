import React, { useEffect } from 'react';
import { HeroWithSpline } from '../components/ui/hero-sections'; 
import { Product2 } from '../components/Product2'; 
import { getCalApi } from "@calcom/embed-react";
import ProblemSection from '../components/sections/ProblemSection';
import SolutionSection from '../components/sections/SolutionSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import CtaSection from '../components/sections/CtaSection';
import SocialProof from '../components/sections/SocialProof';
import FeaturesSection from '../components/sections/FeaturesSection';
import BookingSection from '../components/sections/BookingSection';
import FaqSection from '../components/sections/FaqSection';
import VoiceDemo from '../components/VoiceDemo';
import AssistantDemo from '../components/AssistantDemo';

const HomePage: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <>
      {/* Hero Section with Spline Integration */}
      <HeroWithSpline />
      <ProblemSection />
      <SolutionSection />
      <AssistantDemo />
      <VoiceDemo />
      <HowItWorksSection />
      <BookingSection />
      <FaqSection />
    </>
  );
};

export default HomePage;