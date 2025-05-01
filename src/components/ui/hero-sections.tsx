import { ArrowRight } from 'lucide-react'
import { SplineScene } from './spline'
import { Link } from 'react-router-dom'
import { ElegantShape } from './shape-landing-hero'
import { Spotlight } from './spotlight'
import FeaturesSection from '../../components/sections/FeaturesSection'
import SocialProof from '../../components/sections/SocialProof'
import Cta from '../../components/Cta'

export function HeroWithSpline() {
  return (
    <section className="relative min-h-screen flex flex-col pb-12">
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
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="absolute inset-0 bg-black/95 rounded-3xl backdrop-blur-sm z-0 shadow-2xl"></div>
        <Spotlight className="z-[1] hidden md:block" size={200} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 p-4 sm:p-8 md:p-12 lg:p-20">
          <div className="text-center lg:text-left">
            <h1 className="mb-4 lg:mb-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Never Miss a Lead Again With</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">24/7 AI Assistant</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/40 mb-6 lg:mb-10 leading-relaxed font-light tracking-wide max-w-xl mx-auto lg:mx-0">
              Transform customer engagement with our AI Assistance and AI Voice Assistance solutions. Streamline operations, capture leads, and deliver 24/7 support. Say goodbye to missed opportunities and high costs.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Cta />
            </div>
          </div>
          
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] hidden lg:block">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <SocialProof />
    </section>
  )
}