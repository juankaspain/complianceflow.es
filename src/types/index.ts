// Common types used across the application

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    page?: number;
    perPage?: number;
    total?: number;
  };
}

export interface DemoRequest {
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  files?: File[];
}

export interface DemoResponse {
  status: number;
  data: any;
  timestamp: string;
  duration: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: 'month' | 'year';
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaLink: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
  rating?: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
  endpoint?: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  features: string[];
  industry: string;
}
