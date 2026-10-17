import React, { useState, useEffect, useRef } from 'react';
import pic from '../assets/khan.jpeg'; // Extension verify kar lein

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative bg-black flex items-start lg:items-center pt-20 pb-6 lg:pt-20 lg:pb-0 lg:min-h-screen overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-2 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-10 lg:gap-12 lg:min-h-[calc(100vh-5rem)]">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-left z-10">
            
            {/* 1. Greeting Tag (3000ms Ultra Slow Drop) */}
            <span
              style={{ transitionDuration: '3000ms' }}
              className={`text-yellow-500 font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase mb-3 inline-flex items-center gap-2 transition-all ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping inline-block" />
              HELLO!
            </span>

            {/* 2. Main Title (3000ms Ultra Slow Slide from Left) */}
            <h1
              style={{ transitionDuration: '3000ms', transitionDelay: '200ms' }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-5 sm:mb-8 transition-all ease-out transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              I'm <span className="text-yellow-500">Moazzam Khan</span>
              <br />
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold block mt-2">
                Frontend Developer
              </span>
            </h1>

            {/* 3. Action Buttons (3000ms Smooth Lift Up) */}
            <div
              style={{ transitionDuration: '3000ms', transitionDelay: '400ms' }}
              className={`flex flex-wrap items-center gap-4 transition-all ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              <a
                href="#contact"
                className="px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-yellow-500 text-black font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)]"
              >
                HIRE ME
              </a>

              <a
                href="#resume"
                className="px-7 sm:px-8 py-3 sm:py-3.5 rounded-full border border-white/40 text-white font-bold text-xs sm:text-sm tracking-widest uppercase hover:border-yellow-500 hover:text-yellow-500 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-sm"
              >
                MY WORKS
              </a>
            </div>
          </div>

          {/* Right Image Container (3000ms Smooth Glide from Right + Scale) */}
          <div
            style={{ transitionDuration: '3000ms', transitionDelay: '300ms' }}
            className={`w-full lg:w-1/2 flex justify-center lg:justify-end items-center z-10 mt-2 lg:mt-0 transition-all ease-out transform ${
              isVisible
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-28 sm:translate-x-40 scale-90'
            }`}
          >
            <div className="relative group flex items-center justify-center">
              
              {/* Outer Glowing Ambient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-500/30 via-yellow-400/50 to-amber-600/30 blur-2xl transform scale-110 group-hover:scale-125 animate-pulse transition-all duration-1000 ease-out" />

              {/* Rotating Dashed Orbit Ring */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-dashed border-yellow-500/40 animate-[spin_20s_linear_infinite] group-hover:border-yellow-400/80 transition-colors duration-500 pointer-events-none" />

              {/* Counter-rotating Accent Orbit Dot */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-full border border-yellow-500/20 animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />

              {/* Main Circular Image Wrapper */}
              <div className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden p-1.5 bg-gradient-to-b from-yellow-400 via-amber-500 to-neutral-900 shadow-[0_0_40px_rgba(234,179,8,0.25)] group-hover:shadow-[0_0_60px_rgba(234,179,8,0.55)] transition-all duration-700 ease-out">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#141414]">
                  <img
                    src={pic}
                    alt="Moazzam Khan"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;