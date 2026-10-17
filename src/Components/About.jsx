import React, { useState, useEffect, useRef } from 'react';
import khan2 from '../assets/khan3.png'; // Image path verify karein
import cvPdf from '../assets/Moazzam_Khan_CV.pdf'; // PDF path verify karein

const About = () => {
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

  const personalInfo = [
    { label: 'Name:', value: 'Moazzam Khan' },
    { label: 'Date of birth:', value: 'July 29, 2006' },
    { label: 'Address:', value: 'Bahawalpur, Punjab, Pakistan' },
    { label: 'Zip code:', value: '63100' },
    { label: 'Email:', value: 'moazzamkhan1101@gmail.com' },
    { label: 'Phone:', value: '+92 311 6526265' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-black text-white flex items-center py-12 lg:py-20 lg:min-h-screen overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* 1. Left Side: Framed Image */}
          <div
            style={{ transitionDuration: '3000ms' }}
            className={`lg:col-span-5 flex justify-center items-center transition-all ease-out transform ${
              isVisible
                ? 'opacity-100 scale-100 translate-y-0 rotate-0'
                : 'opacity-0 scale-90 translate-y-16 -rotate-3'
            }`}
          >
            <div className="relative group w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px]">
              
              {/* Decorative Frame */}
              <div
                style={{ transitionDuration: '3000ms', transitionDelay: '300ms' }}
                className={`absolute inset-0 rounded-2xl border-2 border-yellow-500/60 -z-0 transition-all ease-out ${
                  isVisible
                    ? 'translate-x-4 translate-y-4 sm:translate-x-5 sm:translate-y-5 opacity-100'
                    : 'translate-x-0 translate-y-0 opacity-0'
                } group-hover:translate-x-3 group-hover:translate-y-3 group-hover:border-yellow-400`}
              />
              
              {/* Image Box */}
              <div className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden bg-[#141414] border border-neutral-800 shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
                <img
                  src={khan2}
                  alt="Moazzam Khan"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

          {/* Right Side: Details & Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Heading */}
            <div className="relative mb-6">
              <span
                style={{ transitionDuration: '3000ms' }}
                className={`absolute -top-8 sm:-top-10 left-0 text-6xl sm:text-7xl lg:text-8xl font-black text-neutral-800/40 select-none uppercase tracking-wider pointer-events-none -z-0 transition-all ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-90'
                }`}
              >
                About
              </span>

              <h2
                style={{ transitionDuration: '3000ms', transitionDelay: '150ms' }}
                className={`relative text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white z-10 transition-all ease-out transform ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                About Me
              </h2>
            </div>

            {/* Tagline */}
            <p
              style={{ transitionDuration: '3000ms', transitionDelay: '300ms' }}
              className={`text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl transition-all ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Passion-driven Frontend Developer focused on crafting clean, responsive, and user-centric web interfaces with modern design principles.
            </p>

            {/* Details List */}
            <div className="space-y-3.5 mb-10 max-w-xl">
              {personalInfo.map((item, index) => (
                <div
                  key={index}
                  style={{
                    transitionDuration: '3000ms',
                    transitionDelay: isVisible ? `${350 + index * 100}ms` : '0ms',
                  }}
                  className={`grid grid-cols-12 gap-2 text-sm sm:text-base transition-all ease-out transform ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-12'
                  }`}
                >
                  <span className="col-span-4 sm:col-span-3 font-bold text-white">
                    {item.label}
                  </span>
                  <span className="col-span-8 sm:col-span-9 text-neutral-400 font-normal">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <div
              style={{
                transitionDuration: '3000ms',
                transitionDelay: isVisible ? `${350 + personalInfo.length * 100 + 150}ms` : '0ms',
              }}
              className={`transition-all ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
              }`}
            >
              <a
                href={cvPdf}
                download="Moazzam_Khan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-yellow-500 text-black font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] cursor-pointer"
              >
                <span>DOWNLOAD CV</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;