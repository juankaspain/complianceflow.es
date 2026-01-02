'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar?: string;
  companyLogo?: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Redujo nuestro tiempo de compliance de 6 meses a 2 semanas. La integración fue increíblemente sencilla y el soporte técnico excepcional.",
    author: "Carlos Martínez",
    role: "CTO",
    company: "TechCorp Spain",
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    quote: "La API de SII nos ahorra 40 horas al mes. Los informes automáticos y el dashboard en tiempo real son imprescindibles para nuestro equipo financiero.",
    author: "Ana López",
    role: "CFO",
    company: "FinTech Solutions",
    rating: 5,
  },
  {
    id: 3,
    quote: "Certificaciones ISO 27001 y SOC 2 verificables. La mejor decisión que tomamos para nuestro stack de compliance. ROI en menos de 3 meses.",
    author: "Miguel Álvarez",
    role: "CISO",
    company: "SecureBank",
    rating: 5,
    featured: true,
  },
  {
    id: 4,
    quote: "Documentación clara, ejemplos prácticos y SDKs en todos los lenguajes. Nuestros developers lo integraron en un día. Increíble DX.",
    author: "Laura García",
    role: "Lead Developer",
    company: "Startup Labs",
    rating: 5,
  },
  {
    id: 5,
    quote: "El uptime de 99.99% no es solo marketing. Llevamos 18 meses sin un solo incidente. La infraestructura es sólida y escalable.",
    author: "David Ruiz",
    role: "DevOps Manager",
    company: "CloudFirst",
    rating: 5,
  },
  {
    id: 6,
    quote: "Verifactu implementado en record time. El equipo de soporte nos guió en cada paso. Ahora cumplimos con toda la normativa sin esfuerzo.",
    author: "Patricia Sánchez",
    role: "CEO",
    company: "RetailPlus",
    rating: 5,
    featured: true,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gray-950">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              500+ Companies
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See what our customers say about their compliance transformation
          </p>
        </motion.div>

        {/* Featured Carousel */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} featured />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-400/50 flex items-center justify-center transition-all group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white/60 group-hover:text-primary-400 transition-colors" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-400/50 flex items-center justify-center transition-all group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white/60 group-hover:text-primary-400 transition-colors" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid of All Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-sm text-gray-400">Active Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-sm text-gray-400">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-sm text-gray-400">Customer Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: Testimonial;
  featured?: boolean;
}) {
  return (
    <GlassCard
      hover
      className={`p-6 sm:p-8 h-full flex flex-col ${
        featured ? 'border-primary-400/30' : ''
      }`}
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-10 h-10 text-primary-400/50" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Quote Text */}
      <blockquote className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 flex-grow">
        "{testimonial.quote}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
          {testimonial.author.charAt(0)}
        </div>

        {/* Name & Role */}
        <div className="flex-grow">
          <div className="font-semibold text-white">{testimonial.author}</div>
          <div className="text-sm text-gray-400">
            {testimonial.role} @ {testimonial.company}
          </div>
        </div>

        {/* Company Logo Placeholder */}
        {testimonial.companyLogo && (
          <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
            {/* Logo would go here */}
          </div>
        )}
      </div>
    </GlassCard>
  );
}
