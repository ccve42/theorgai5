import React from 'react';
import { PhoneCall, FileCheck, Rocket } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { translations } from '../../translations';
import { ElegantShape } from '../ui/shape-landing-hero';

interface OutletContext {
  lang: 'en' | 'jp';
}

const HowItWorksSection: React.FC = () => {
  const { lang } = useOutletContext<OutletContext>();
  const t = translations[lang].howItWorks;

  const steps = {
    en: [
      {
        title: "Start with Your Free Call",
        description: "Schedule your quick, no-obligation strategy session to discuss your needs and goals."
      },
      {
        title: "Get Your Custom AI Plan",
        description: "We analyze your requirements and design the perfect AI assistant setup specifically tailored for your business."
      },
      {
        title: "Launch & See Results",
        description: "We handle the seamless implementation and help optimize your AI for maximum impact and growth."
      }
    ],
    jp: [
      {
        title: "無料相談から始める",
        description: "ご要望と目標について、無料で気軽に戦略セッションを予約できます。"
      },
      {
        title: "カスタムAIプランの作成",
        description: "お客様の要件を分析し、ビジネスに最適なAIアシスタントの設定を設計します。"
      },
      {
        title: "導入と結果の確認",
        description: "シームレスな実装を行い、最大の効果と成長のためにAIを最適化します。"
      }
    ]
  };

  return (
    <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
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
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-16">
            {t.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps[lang].map((step, index) => (
              <div key={index} className="glassmorphism p-8 rounded-xl text-center hover:border-neutral-700 transition-all group">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-neutral-800 flex items-center justify-center mx-auto mb-6 group-hover:border-neutral-700 transition-all">
                  {index === 0 && <PhoneCall className="w-8 h-8 text-white" />}
                  {index === 1 && <FileCheck className="w-8 h-8 text-white" />}
                  {index === 2 && <Rocket className="w-8 h-8 text-white" />}
                </div>
                <div className="text-2xl font-bold text-white mb-2">{index + 1}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-neutral-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <button
            onClick={() => {
              document.getElementById('booking-calendar')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
          >
            {translations[lang].booking.button}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;