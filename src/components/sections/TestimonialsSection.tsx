'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    content: "ComplianceFlow transformó nuestra forma de gestionar el cumplimiento normativo. La integración fue instantánea y el soporte es excepcional.",
    author: "María García",
    role: "CISO",
    company: "TechCorp Europe",
    industry: "Fintech",
    avatar: "/avatars/maria.jpg",
    rating: 5,
  },
  {
    id: 2,
    content: "Pasamos la auditoría ISO 27001 en el primer intento gracias a ComplianceFlow. Su API de audit trail es impresionante.",
    author: "Carlos Rodríguez",
    role: "CTO",
    company: "HealthTech Solutions",
    industry: "Healthcare",
    avatar: "/avatars/carlos.jpg",
    rating: 5,
  },
  {
    id: 3,
    content: "La mejor decisión que tomamos fue automatizar compliance con ComplianceFlow. ROI positivo en 3 meses.",
    author: "Ana Martínez",
    role: "Head of Compliance",
    company: "DataSafe Inc.",
    industry: "Data Management",
    avatar: "/avatars/ana.jpg",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-gray-900" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            id="testimonials-heading"
            className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Confianza de <span className="text-primary-400">500+ empresas</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            CTOs y CISOs de empresas líderes confían en ComplianceFlow para su cumplimiento normativo
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-gray-950/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 bg-primary/10 rounded-full p-3">
                <svg className="h-6 w-6 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company} • {testimonial.industry}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-800">
          {[
            { label: 'Empresas activas', value: '500+' },
            { label: 'Auditorías exitosas', value: '98%' },
            { label: 'APIs procesadas/mes', value: '10M+' },
            { label: 'Tiempo medio integración', value: '< 30min' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
