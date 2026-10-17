import React, { useState, useEffect, useRef } from 'react';

// Individual Card Component with its own Observer
const ResumeCard = ({ item, isLeft }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Card 20% screen par aate hi trigger hoga
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
      style={{ transitionDuration: '3000ms' }}
      className={`bg-[#141414] hover:bg-[#1a1a1a] border border-neutral-800/80 hover:border-yellow-500/40 rounded-xl p-6 sm:p-8 flex flex-col justify-between group shadow-lg transition-all ease-out transform ${
        isVisible
          ? 'opacity-100 translate-x-0 scale-100'
          : isLeft
          ? 'opacity-0 -translate-x-20 sm:-translate-x-32 scale-95'
          : 'opacity-0 translate-x-20 sm:translate-x-32 scale-95'
      } hover:-translate-y-1.5 duration-300`}
    >
      <div>
        {/* Year Badge */}
        <span className="text-yellow-500 text-xl sm:text-2xl font-black block mb-3 transition-colors duration-300 group-hover:text-yellow-400">
          {item.year}
        </span>

        {/* Role / Degree Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
          {item.title}
        </h3>

        {/* Institution Name */}
        <h4 className="text-xs sm:text-sm font-semibold tracking-widest text-neutral-400 uppercase mb-4">
          {item.institution}
        </h4>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const Resume = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
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

  const resumeItems = [
    {
      year: '2024 - Present',
      title: 'BS Software Engineering',
      institution: 'The Islamia University of Bahawalpur',
      description:
        'Pursuing core software engineering fundamentals, data structures, algorithms, and full-stack software development methodologies.',
    },
    {
      year: '2023 - Present',
      title: 'Frontend Web Developer',
      institution: 'Freelance & Self-Driven Projects',
      description:
        'Building responsive, fast, and interactive user interfaces using React.js, JavaScript (ES6+), HTML5, and Tailwind CSS.',
    },
    {
      year: '2023 - Present',
      title: 'Upwork Bidder & Client Acquisition',
      institution: 'Freelance Marketplace',
      description:
        'Writing compelling proposals, analyzing project requirements, and communicating with global clients to win development contracts.',
    },
    {
      year: '2022 - 2024',
      title: 'Graphic & Visual Designer',
      institution: 'Digital Media & Branding',
      description:
        'Creating high-impact visual assets, branding elements, social media kits, and UI wireframes with creative attention to detail.',
    },
    {
      year: '2022 - Present',
      title: 'Canva Design Specialist',
      institution: 'Creative Content Creation',
      description:
        'Designing polished presentations, marketing materials, infographics, and rapid UI mockups optimized for digital platforms.',
    },
    {
      year: '2022 - 2023',
      title: 'UI & Layout Designing',
      institution: 'Web & Visual Practice',
      description:
        'Transforming conceptual design layouts into clean, modern, and user-friendly digital web experiences.',
    },
  ];

  return (
    <section id="resume" className="relative min-h-screen bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (3000ms Duration) */}
        <div ref={headerRef} className="text-center relative mb-16 sm:mb-20">
          <span
            style={{ transitionDuration: '3000ms' }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl lg:text-9xl font-black text-neutral-800/30 uppercase tracking-wider select-none pointer-events-none -z-0 transition-all ease-out transform ${
              headerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            Resume
          </span>

          <h2
            style={{ transitionDuration: '3000ms', transitionDelay: '100ms' }}
            className={`relative text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white z-10 mb-4 transition-all ease-out transform ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            Resume
          </h2>

          <p
            style={{ transitionDuration: '3000ms', transitionDelay: '200ms' }}
            className={`relative text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto z-10 transition-all ease-out transform ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            A structured timeline highlighting my academic foundation in Software Engineering, frontend web development, freelance bidding, and graphic design experience.
          </p>
        </div>

        {/* Resume Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {resumeItems.map((item, index) => (
            <ResumeCard
              key={index}
              item={item}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Resume;