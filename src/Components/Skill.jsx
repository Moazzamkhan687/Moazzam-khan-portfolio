import React, { useState, useEffect, useRef } from 'react';

// Single Skill Row Component (Independent Screen Observer + Smooth Number Counter)
const SkillItem = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // 20% visible hone par animation start hogi
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  // Number Count-Up Effect (0 to target % smoothly in 3000ms)
  useEffect(() => {
    let animationFrameId;

    if (isVisible) {
      const duration = 3000; // 3 seconds line fill ke sath perfectly synced
      let startTime = null;

      const animateCounter = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Smooth easeOutQuad curve
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const currentVal = Math.floor(easeProgress * skill.percentage);

        setCount(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateCounter);
        } else {
          setCount(skill.percentage);
        }
      };

      const timeoutId = setTimeout(() => {
        animationFrameId = requestAnimationFrame(animateCounter);
      }, 300);

      return () => {
        clearTimeout(timeoutId);
        cancelAnimationFrame(animationFrameId);
      };
    } else {
      setCount(0);
    }
  }, [isVisible, skill.percentage]);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      style={{
        transitionDuration: '3000ms',
      }}
      className={`space-y-3 transition-all ease-out transform ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : isLeft
          ? 'opacity-0 -translate-x-16'
          : 'opacity-0 translate-x-16'
      }`}
    >
      {/* Skill Label & Animated Counter Value */}
      <div className="flex justify-between items-center">
        <span className="text-base sm:text-lg font-bold text-white tracking-wide">
          {skill.name}
        </span>
        <span className="text-sm sm:text-base font-semibold text-yellow-500 font-mono">
          {count}%
        </span>
      </div>

      {/* Progress Bar Track */}
      <div className="w-full bg-neutral-900 rounded-full h-3 overflow-hidden border border-neutral-800">
        {/* Animated Fill Bar (3000ms Duration) */}
        <div
          className="bg-yellow-500 h-full rounded-full shadow-[0_0_12px_rgba(234,179,8,0.5)] transition-all ease-out"
          style={{
            width: isVisible ? `${skill.percentage}%` : '0%',
            transitionDuration: '3000ms',
            transitionDelay: '300ms',
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
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

  const skillsList = [
    { name: 'HTML5 & CSS3', percentage: 95 },
    { name: 'JavaScript (ES6+)', percentage: 85 },
    { name: 'React.js', percentage: 90 },
    { name: 'Tailwind CSS', percentage: 95 },
    { name: 'Canva & Graphic Design', percentage: 85 },
    { name: 'Upwork Bidding & Proposals', percentage: 80 },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header (3000ms Duration) */}
        <div ref={headerRef} className="text-center relative mb-16 sm:mb-20">
          <span
            style={{ transitionDuration: '3000ms' }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl lg:text-9xl font-black text-neutral-800/30 uppercase tracking-wider select-none pointer-events-none -z-0 transition-all ease-out transform ${
              isHeaderVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            Skills
          </span>

          <h2
            style={{ transitionDuration: '3000ms', transitionDelay: '100ms' }}
            className={`relative text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white z-10 mb-4 transition-all ease-out transform ${
              isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            My Skills
          </h2>

          <p
            style={{ transitionDuration: '3000ms', transitionDelay: '200ms' }}
            className={`relative text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto z-10 transition-all ease-out transform ${
              isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Proficiencies across core web technologies, frontend frameworks, client proposal strategy, and visual asset designing.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 sm:gap-y-10">
          {skillsList.map((skill, index) => (
            <SkillItem
              key={index}
              skill={skill}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;