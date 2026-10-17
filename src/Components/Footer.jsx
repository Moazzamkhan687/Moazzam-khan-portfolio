import React, { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Development',
    'Frontend Design',
    'Upwork Bidding',
    'Graphic Design',
    'Canva Specialist',
    'UI/UX Prototyping',
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white pt-20 pb-12 border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Column 1: About */}
          <div
            style={{
              transitionDuration: '3000ms',
              transitionDelay: isVisible ? '0ms' : '0ms',
            }}
            className={`lg:col-span-4 space-y-6 transition-all ease-out transform ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              About
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Passionate Frontend Developer and Software Engineering student crafting fast, responsive, and modern web applications with seamless user experiences.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 pt-2">
              
              {/* WhatsApp (Direct Chat Link) */}
              <a
                href="https://wa.me/923116526265"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#181818] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-yellow-500 hover:border-yellow-500/50 hover:bg-[#202020] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* Facebook Profile Link */}
              <a
                href="https://www.facebook.com/share/17YyjFxZeP/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#181818] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-yellow-500 hover:border-yellow-500/50 hover:bg-[#202020] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.69 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              {/* Instagram Profile Link */}
              <a
                href="https://www.instagram.com/moazzam8056?igsi=cjB2Nml3ajJvM2xz"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#181818] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-yellow-500 hover:border-yellow-500/50 hover:bg-[#202020] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Column 2: Links */}
          <div
            style={{
              transitionDuration: '3000ms',
              transitionDelay: isVisible ? '200ms' : '0ms',
            }}
            className={`lg:col-span-2 space-y-4 transition-all ease-out transform ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <h3 className="text-xl font-bold tracking-tight text-white">
              Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 text-sm hover:text-yellow-500 transition-colors flex items-center group"
                  >
                    <span className="text-yellow-500 mr-2 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div
            style={{
              transitionDuration: '3000ms',
              transitionDelay: isVisible ? '400ms' : '0ms',
            }}
            className={`lg:col-span-3 space-y-4 transition-all ease-out transform ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <h3 className="text-xl font-bold tracking-tight text-white">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service, index) => (
                <li key={index} className="text-neutral-400 text-sm flex items-center group">
                  <span className="text-yellow-500 mr-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                  <span className="group-hover:text-white transition-colors">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Have Questions? */}
          <div
            style={{
              transitionDuration: '3000ms',
              transitionDelay: isVisible ? '600ms' : '0ms',
            }}
            className={`lg:col-span-3 space-y-4 transition-all ease-out transform ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <h3 className="text-xl font-bold tracking-tight text-white">
              Have Questions?
            </h3>
            <ul className="space-y-4 text-sm text-neutral-400">
              
              {/* Location */}
              <li className="flex items-start space-x-3">
                <span className="text-yellow-500 mt-0.5 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>Bahawalpur, Punjab, Pakistan</span>
              </li>

              {/* Phone */}
              <li className="flex items-center space-x-3">
                <span className="text-yellow-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:+923116526265" className="hover:text-yellow-500 transition-colors">
                  +92 311 6526265
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center space-x-3">
                <span className="text-yellow-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:mk03116526265@gmail.com" className="hover:text-yellow-500 transition-colors break-all">
                  mk03116526265@gmail.com
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Copyright Line */}
        <div
          style={{
            transitionDuration: '3000ms',
            transitionDelay: isVisible ? '800ms' : '0ms',
          }}
          className={`pt-8 border-t border-neutral-900 text-center transition-all ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-neutral-500 text-xs sm:text-sm tracking-wide">
            Copyright ©{new Date().getFullYear()} All rights reserved | Designed & Developed by{' '}
            <span className="font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(234,179,8,0.7)] hover:drop-shadow-[0_0_16px_rgba(234,179,8,1)] transition-all duration-300">
              MOAZZAM KHAN
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;