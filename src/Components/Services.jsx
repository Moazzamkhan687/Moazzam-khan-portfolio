import React, { useState, useEffect, useRef } from 'react';

// Single Service Card Component (Apni screen visibility khud track karega)
const ServiceCard = ({ service, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15, // 15% card screen par aate hi animate hoga
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        transitionDuration: '3000ms',
        transitionDelay: isVisible ? `${(index % 3) * 150}ms` : '0ms',
      }}
      className={`group bg-[#141414] hover:bg-[#1a1a1a] border border-neutral-800/80 hover:border-yellow-500/40 rounded-xl p-8 sm:p-10 flex flex-col items-center justify-center text-center shadow-lg transition-all ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-16 scale-95'
      } hover:-translate-y-2 duration-300`}
    >
      {/* Service Icon */}
      <div className="mb-6 flex items-center justify-center">
        {service.icon}
      </div>

      {/* Service Title */}
      <h3 className="text-base sm:text-lg font-bold tracking-widest text-white uppercase mb-4 transition-colors group-hover:text-yellow-400">
        {service.title}
      </h3>

      {/* Yellow Decorative Bottom Divider */}
      <div className="w-8 h-[2px] bg-yellow-500 rounded-full mb-4 transition-all duration-300 group-hover:w-16" />

      {/* Short Description */}
      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

const Services = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const servicesList = [
    {
      title: 'WEB DEVELOPMENT',
      description: 'Building clean, fast, and dynamic web applications with modern tech stacks.',
      icon: (
        <svg className="w-12 h-12 text-yellow-500 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'FRONTEND DESIGN',
      description: 'Crafting responsive, interactive, and mobile-first user interfaces using React & Tailwind.',
      icon: (
        <svg className="w-12 h-12 text-yellow-500 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'UPWORK BIDDING',
      description: 'Project requirement analysis, winning proposal crafting, and client lead generation.',
      icon: (
        <svg className="w-12 h-12 text-yellow-500 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'GRAPHIC DESIGN',
      description: 'Custom creative graphics, brand visuals, promotional kits, and digital identity.',
      icon: (
        <svg className="w-12 h-12 text-yellow-500 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      title: 'CANVA SPECIALIST',
      description: 'Fast, modern marketing materials, presentations, and social media creative assets.',
      icon: (
        <svg className="w-12 h-12 text-yellow-500 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: 'UI/UX & WIREFRAMING',
      description: 'User-centered wireframes, component structure, and seamless usability flow.',
      icon: (
        <svg className="w-12 h-12 text-yellow-500 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative min-h-screen bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (3000ms Duration) */}
        <div ref={headerRef} className="text-center relative mb-16 sm:mb-20">
          <span
            style={{ transitionDuration: '3000ms' }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl lg:text-9xl font-black text-neutral-800/30 uppercase tracking-wider select-none pointer-events-none -z-0 transition-all ease-out transform ${
              isHeaderVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            Services
          </span>

          <h2
            style={{ transitionDuration: '3000ms', transitionDelay: '100ms' }}
            className={`relative text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white z-10 mb-4 transition-all ease-out transform ${
              isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            Services
          </h2>

          <p
            style={{ transitionDuration: '3000ms', transitionDelay: '200ms' }}
            className={`relative text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto z-10 transition-all ease-out transform ${
              isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Comprehensive digital services covering frontend web development, client bidding strategies, and modern visual design solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;