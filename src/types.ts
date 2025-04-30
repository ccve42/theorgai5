import React from 'react';

export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'ai-assistance' | 'voice-assistance' | 'both';
  industry: string;
  results: {
    label: string;
    value: string;
  }[];
  description: string;
  image: string;
  technologies?: string[] | string;
  timeline?: string;
  challenge?: string;
  solution?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}