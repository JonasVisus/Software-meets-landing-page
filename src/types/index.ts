// Case/Product type definitions for the software landing page

export interface CaseFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CaseTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface CaseBenefit {
  title: string;
  description: string;
  metric?: string;
}

export interface CaseFAQ {
  question: string;
  answer: string;
}

export interface CasePricing {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

export interface CaseData {
  // Basic Info
  slug: string;
  name: string;
  company: string;
  tagline: string;
  description: string;
  
  // SEO
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  heroImage?: string;
  
  // Features Section
  featuresTitle: string;
  featuresSubtitle: string;
  features: CaseFeature[];
  
  // Benefits Section
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: CaseBenefit[];
  
  // Testimonials
  testimonials: CaseTestimonial[];
  
  // FAQ
  faq: CaseFAQ[];
  
  // Pricing (optional)
  pricing?: CasePricing[];
  
  // CTA Section
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  ctaLink: string;
  
  // Metadata
  industry: string;
  category: string;
  status: 'active' | 'coming-soon' | 'archived';
  publishedAt?: string;
}

export interface HubProduct {
  slug: string;
  name: string;
  company: string;
  tagline: string;
  description: string;
  icon: string;
  category: string;
  industry: string;
  status: 'active' | 'coming-soon' | 'archived';
}
