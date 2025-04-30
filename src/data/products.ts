import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'ai-assistance',
    title: 'AI Assistance',
    description: 'A sophisticated chatbot that captures leads, integrates with your CRM, manages customer support tickets, and sets appointments with precision and intelligence.',
    features: [
      'Intelligent lead capture and qualification',
      'Seamless CRM integration (HubSpot, Salesforce, etc.)',
      'Automated customer support ticket management',
      'Smart appointment scheduling and reminders',
      'Personalized customer interactions',
      'Analytics dashboard for performance tracking'
    ],
    image: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg'
  },
  {
    id: 'voice-assistance',
    title: 'AI Voice Assistance',
    description: 'Life-like AI agents that handle calls, nurture leads, answer questions, and provide 24/7 booking support with natural conversation and emotional intelligence.',
    features: [
      'Natural-sounding voice interactions',
      'Advanced call handling and routing',
      'Intelligent lead nurturing sequences',
      'Comprehensive question answering capabilities',
      '24/7 booking and scheduling support',
      'Multi-language support for global operations'
    ],
    image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg'
  }
];