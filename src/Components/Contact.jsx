import React, { useState, useEffect, useRef } from 'react';
import pic from '../assets/khan.jpeg'; // Hero section wali picture

// Single Contact Info Card Component
const ContactInfoCard = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
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
        transitionDelay: isVisible ? `${(index % 4) * 150}ms` : '0ms',
      }}
      className={`flex flex-col items-center text-center p-4 rounded-xl bg-[#121212] border border-neutral-800/80 hover:border-yellow-500/40 transition-all ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-12 scale-95'
      } hover:-translate-y-1.5 duration-300`}
    >
      <div className="w-14 h-14 rounded-full bg-[#181818] border border-neutral-800 flex items-center justify-center mb-3 text-yellow-500 shadow-md transition-transform duration-300 hover:scale-110">
        {item.icon}
      </div>
      <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-1">
        {item.title}
      </h3>
      <p className="text-neutral-400 text-xs break-all">
        {item.value}
      </p>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: false });
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isFormBoxVisible, setIsFormBoxVisible] = useState(false);

  const headerRef = useRef(null);
  const formBoxRef = useRef(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => setIsHeaderVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const formBoxObserver = new IntersectionObserver(
      ([entry]) => setIsFormBoxVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (formBoxRef.current) formBoxObserver.observe(formBoxRef.current);

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      if (formBoxRef.current) formBoxObserver.unobserve(formBoxRef.current);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    // Capitalized keys for Email presentation
    const payload = {
      Name: formData.name,
      Email: formData.email,
      Subject: formData.subject,
      Message: formData.message,
    };

    try {
      const response = await fetch('https://formspree.io/f/maewzbze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: true });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  const contactDetails = [
    {
      title: 'ADDRESS',
      value: 'Bahawalpur, Punjab, Pakistan',
      icon: (
        <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'CONTACT NUMBER',
      value: '+92 311 6526265',
      icon: (
        <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: 'EMAIL ADDRESS',
      value: 'mk03116526265@gmail.com',
      icon: (
        <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'PORTFOLIO',
      value: 'moazzamkhan.dev',
      icon: (
        <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center relative mb-10 sm:mb-12">
          <span
            style={{ transitionDuration: '3000ms' }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl lg:text-9xl font-black text-neutral-800/30 uppercase tracking-wider select-none pointer-events-none -z-0 transition-all ease-out transform ${
              isHeaderVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            Contact
          </span>

          <h2
            style={{ transitionDuration: '3000ms', transitionDelay: '100ms' }}
            className={`relative text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white z-10 mb-2 transition-all ease-out transform ${
              isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            Contact Me
          </h2>

          <p
            style={{ transitionDuration: '3000ms', transitionDelay: '200ms' }}
            className={`relative text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto z-10 transition-all ease-out transform ${
              isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Feel free to reach out for frontend web development projects, freelance collaborations, or inquiries.
          </p>
        </div>

        {/* 4 Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactDetails.map((item, index) => (
            <ContactInfoCard
              key={index}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* Contact Form & Framed Image Split Box */}
        <div
          ref={formBoxRef}
          className="max-w-5xl mx-auto bg-[#121212] border border-neutral-800/90 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.9)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Section */}
            <div
              style={{ transitionDuration: '3000ms' }}
              className={`lg:col-span-5 flex justify-center items-center transition-all ease-out transform ${
                isFormBoxVisible
                  ? 'opacity-100 translate-x-0 scale-100'
                  : 'opacity-0 -translate-x-20 scale-95'
              }`}
            >
              <div className="relative group w-full max-w-[320px] sm:max-w-[360px] lg:max-w-full">
                
                {/* Tech Glowing Corner Accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-yellow-500 rounded-tl-lg z-20" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-yellow-500 rounded-br-lg z-20" />

                {/* Beveled Image Box */}
                <div className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[#1c1c1c] to-[#0d0d0d] border border-neutral-700/60 shadow-2xl">
                  <img
                    src={pic}
                    alt="Moazzam Khan"
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />

                  {/* Available Badge */}
                  <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-white tracking-wide">Moazzam Khan</span>
                    <span className="inline-flex items-center text-[10px] font-bold text-yellow-400 uppercase tracking-widest">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 mr-1.5 animate-pulse" />
                      Available
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Form Section */}
            <div
              style={{ transitionDuration: '3000ms' }}
              className={`lg:col-span-7 flex flex-col justify-center transition-all ease-out transform ${
                isFormBoxVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-20'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-[#181818] border border-neutral-700/60 text-white placeholder-neutral-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-[#181818] border border-neutral-700/60 text-white placeholder-neutral-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-[#181818] border border-neutral-700/60 text-white placeholder-neutral-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-[#181818] border border-neutral-700/60 text-white placeholder-neutral-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-sm resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status.success && (
                  <p className="text-sm font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-xl px-4 py-2">
                    ✓ Message sent successfully! I will get back to you soon.
                  </p>
                )}

                {status.error && (
                  <p className="text-sm font-semibold text-rose-400 bg-rose-950/40 border border-rose-500/30 rounded-xl px-4 py-2">
                    ✕ Failed to send message. Please try again or email directly.
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="px-9 py-3.5 rounded-full bg-yellow-500 text-black font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-yellow-400 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] cursor-pointer"
                  >
                    {status.loading ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;