import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly can I implement your AI solutions?",
      answer: "Our AI solutions can be deployed in as little as 2-4 weeks, depending on the complexity of your requirements and the level of customization needed. Our implementation team works closely with you to ensure a smooth integration with your existing systems."
    },
    {
      question: "Do your AI solutions integrate with my existing CRM?",
      answer: "Yes, our AI solutions are designed to integrate seamlessly with popular CRM platforms including Salesforce, HubSpot, Zoho, Microsoft Dynamics, and many others. We also offer custom integration services for proprietary systems."
    },
    {
      question: "How is the AI trained to understand my business needs?",
      answer: "We use a combination of pre-trained models and custom training specific to your industry and business requirements. During implementation, we gather example conversations, common queries, and business rules to tailor the AI to your specific needs."
    },
    {
      question: "Can the AI handle multiple languages?",
      answer: "Yes, our AI solutions support multiple languages including English, Spanish, French, German, Chinese, Japanese, and many others. This allows you to provide consistent service to customers around the world."
    },
    {
      question: "What kind of ROI can I expect from implementing your solutions?",
      answer: "Most of our clients see ROI within 3-6 months of implementation. Typical results include 30-60% reduction in customer service costs, 40% increase in lead conversion rates, and significant improvements in customer satisfaction scores."
    },
    {
      question: "Still have questions?",
      answer: "Click the blue circle on the bottom right of your screen. Ask anything about AI Organization to the Live Chat."
    }
  ];

  return (
    <section className="py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-300">
              Find quick answers to common questions about our AI solutions.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="faq-item glassmorphism rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-white text-xl font-medium">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-white transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`answer-wrapper ${openIndex === index ? 'open' : ''}`}
                >
                  <p className="text-neutral-300 px-6 pb-6 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 space-y-4">
            <h3 className="text-white text-2xl font-semibold">Ready to Transform Your Business?</h3>
            <p className="text-neutral-300 mb-6">Book your personalized demo call in just 10 seconds - no lengthy forms required.</p>
            <div>
              <button
                onClick={() => {
                  const demoSection = document.getElementById('booking-calendar');
                  demoSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                Book Your Call in 10 Seconds
              </button>
              <div className="flex items-center justify-center gap-2 mt-4">
                <img
                  src="/images/theorgai_white_logo.png"
                  alt="Company Logo"
                  className="w-10 h-10 object-cover"
                />
                <span className="text-white/80 text-base font-medium">Limited Spaces Left</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;