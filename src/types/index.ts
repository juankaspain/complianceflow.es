// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Demo Types
export interface SIIResponse {
  status: 'success' | 'error';
  sii_data?: {
    invoice_number: string;
    date: string;
    total: number;
    vat: number;
  };
  error?: string;
}

export interface KYCResponse {
  status: 'success' | 'error';
  kyc_data?: {
    document_valid: boolean;
    face_match_score: number;
    risk_score: number;
    person: {
      name: string;
      dni: string;
      date_of_birth: string;
    };
  };
  error?: string;
}

export interface FraudResponse {
  status: 'success' | 'error';
  risk_data?: {
    risk_score: number;
    risk_level: 'low' | 'medium' | 'high';
    reasons: string[];
    recommended_action: 'approve' | 'review' | 'reject';
  };
  error?: string;
}

// Navigation Types
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

// Feature Types
export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

// Pricing Types
export interface PricingTier {
  name: string;
  price: number | string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
}

// Testimonial Types
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

// FAQ Types
export interface FAQItem {
  question: string;
  answer: string;
}