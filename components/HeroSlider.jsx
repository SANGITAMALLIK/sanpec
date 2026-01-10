"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    preTitle: "visit us at booth no-900",
    title: "INNOVATING FOR CRITICAL GLOBAL INFRASTRUCTURE",
    desc: "Electrical Transmission & Substation Structures Conference",
    image: "images/slider/1.png",
    bgColor: "#cd091b"
  },
  {
    id: 2,
    preTitle: "THE JOURNEY OF EXCELLENCE",
    title: "Bringing Engineering Excellence Improving Power Grid Reliability",
    desc: "Leadership | Process Excellence | Quality and Safety | Resilience | Sustainability",
    image: "images/slider/2.png",
    bgColor: "#cd091b"
  },
  {
    id: 3,
    preTitle: "Powering the Future",
    title: "U.S. Department of Energy Partnership for Aging Workforce",
    desc: "Training | Education | Research | Leadership",
    image: "images/slider/3.jpg",
    bgColor: "#cd091b"
  },
  {
    id: 4,
    preTitle: "Data-driven, Integrated Systems",
    title: "Quality solution and risk mitigation",
    desc: "grid resilience | business resilience | Value chain resilience",
    image: "images/slider/1.png",
    bgColor: "#cd091b"
  },
  {
    id: 5,
    preTitle: "LEADING THE WAY",
    title: "Building Resilient transmission line Improving the quality of life",
    desc: "PURPOSE-LED | VALUE-ALIGNED | INNOVATION-DRIVEN BUSINESS MODEL",
    image: "images/slider/2.png",
    bgColor: "#cd091b"
  },
  {
    id: 6,
    preTitle: "High-performing, resilient workforce",
    title: "Implementing the process of the future, today",
    desc: "OPTIMIZED WORKFLOWS | operational efficiency | HIGH PERFORMING TEAM | superior outcome",
    image: "images/slider/3.jpg",
    bgColor: "#cd091b"
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const tabsRef = useRef(null);

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => resolve(src);
        img.src = src;
      });
    };

    const loadAllImages = async () => {
      const uniqueImages = [...new Set(slides.map(s => s.image))];
      await Promise.all(uniqueImages.map(src => loadImage(src)));
      
      const loaded = {};
      uniqueImages.forEach(src => {
        loaded[src] = true;
      });
      
      setImagesLoaded(loaded);
      setAllImagesLoaded(true);
    };

    loadAllImages();
  }, []);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTabClick = (index) => {
    setActive(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#cd091b]">
      {/* Loading Overlay */}
      {!allImagesLoaded && (
        <div className="absolute top-0 left-0 w-full h-full bg-[#cd091b] flex flex-col items-center justify-center z-[100] text-white">
          <div className="w-[50px] h-[50px] border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
          <p className="text-xl font-semibold tracking-[2px] uppercase">Loading...</p>
        </div>
      )}

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ${
            index === active && allImagesLoaded ? 'opacity-100 visible z-[1]' : 'opacity-0 invisible z-0'
          }`}
        >
          <div className="flex flex-col lg:flex-row h-full w-full">
            {/* Left Side - Image with blend */}
            <div className="flex-1 relative overflow-hidden bg-[#cd091b] h-[35vh] lg:h-full">
              {/* Skeleton loader for image */}
              {!imagesLoaded[slide.image] && (
                <div className="absolute top-0 left-0 w-full h-full z-[1] animate-shimmer"
                     style={{
                       background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)',
                       backgroundSize: '200% 100%'
                     }}></div>
              )}
              <img 
                src={slide.image} 
                alt={slide.title}
                className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
                  index === active && allImagesLoaded ? 'animate-fadeIn' : ''
                }`}
                style={{ opacity: imagesLoaded[slide.image] ? 1 : 0 }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute top-0 right-0 w-full lg:w-1/2 h-1/2 lg:h-full pointer-events-none z-[2] lg:bottom-auto bottom-0 lg:top-0"
                   style={{
                     background: window.innerWidth >= 1024 
                       ? `linear-gradient(to right, transparent 0%, rgba(205, 9, 27, 0.3) 40%, rgba(205, 9, 27, 0.6) 70%, ${slide.bgColor} 100%)`
                       : `linear-gradient(to bottom, transparent 0%, rgba(205, 9, 27, 0.3) 40%, rgba(205, 9, 27, 0.6) 70%, ${slide.bgColor} 100%)`
                   }}></div>
            </div>

            {/* Right Side - Text with Color Background */}
            <div className="flex-1 flex items-center justify-center p-6 lg:p-16 transition-colors duration-700 relative overflow-hidden h-[65vh] lg:h-full"
                 style={{ backgroundColor: slide.bgColor }}>
              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 pointer-events-none z-[1]"
                   style={{
                     backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                     backgroundSize: window.innerWidth >= 1024 ? '50px 50px' : window.innerWidth >= 640 ? '40px 40px' : '30px 30px'
                   }}></div>
              
              <div className={`max-w-full lg:max-w-[600px] text-white relative z-[2] ${
                index === active && allImagesLoaded ? 'animate-slideInRight' : 'opacity-0'
              }`}>
                <h4 className="text-base uppercase tracking-[2px] font-semibold mb-6 opacity-90">
                  {slide.preTitle}
                </h4>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-[3.5rem] font-bold mb-6 leading-[1.6] tracking-wide">
                  {slide.title}
                </h1>
                <p className="text-lg mb-8 leading-[1.6] opacity-95">
                  {slide.desc}
                </p>
                <button className="px-10 py-4 bg-white/20 text-white border-2 border-white rounded cursor-pointer transition-all duration-300 font-semibold hover:bg-white hover:text-[#cd091b] hover:-translate-y-1"
                        style={{ backdropFilter: 'blur(10px)' }}>
                  Explore now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button 
        onClick={prevSlide} 
        disabled={!allImagesLoaded}
        className="absolute top-1/2 -translate-y-1/2 z-[20] w-[60px] h-[60px] bg-white/90 border-none rounded-full text-[#333] cursor-pointer flex items-center justify-center transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:scale-110 left-4 lg:left-8">
        <ChevronLeft size={32} />
      </button>

      {/* Right Arrow */}
      <button 
        onClick={nextSlide} 
        disabled={!allImagesLoaded}
        className="absolute top-1/2 -translate-y-1/2 z-[20] w-[60px] h-[60px] bg-white/90 border-none rounded-full text-[#333] cursor-pointer flex items-center justify-center transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:scale-110 right-4 lg:right-8">
        <ChevronRight size={32} />
      </button>

      {/* Navigation Tabs */}
      <div className="absolute bottom-0 left-0 right-0 z-[10] bg-black/30 border-t border-white/10 overflow-x-auto overflow-y-hidden"
           style={{ 
             backdropFilter: 'blur(10px)',
             scrollbarWidth: 'thin',
             scrollbarColor: 'rgba(255, 255, 255, 0.3) transparent'
           }}>
        <div className="flex p-0 min-w-min" ref={tabsRef}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => allImagesLoaded && handleTabClick(index)}
              className={`flex items-center gap-4 px-8 py-6 cursor-pointer transition-all duration-300 border-b-[3px] whitespace-nowrap min-w-fit ${
                index === active 
                  ? 'bg-white/10 border-b-[#cd091b] text-white' 
                  : 'bg-transparent border-b-transparent text-white/70 hover:bg-white/5 hover:text-white'
              }`}
              style={{ cursor: allImagesLoaded ? 'pointer' : 'not-allowed' }}>
              <span className="font-bold text-xl text-[#cd091b]">
                {`0${slide.id}`}
              </span>
              <span className="text-sm uppercase tracking-[1px]">
                {slide.preTitle}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .left-side { height: 40vh; }
          .right-side { height: 60vh; padding: 2rem 1.5rem; }
          .text-content { max-width: 100%; }
          .main-title { font-size: 1.8rem; }
          .description { font-size: 0.95rem; }
          .arrow-btn { width: 50px; height: 50px; }
          .left-arrow { left: 1rem; }
          .right-arrow { right: 1rem; }
          .tab-item { padding: 1rem 1.5rem; }
          .tab-number { font-size: 1rem; }
          .tab-title { font-size: 0.8rem; }
        }

        @media (max-width: 640px) {
          .left-side { height: 35vh; }
          .right-side { height: 65vh; padding: 1.5rem 1rem; }
          .main-title { font-size: 1.5rem; margin-bottom: 1rem; }
          .description { font-size: 0.9rem; margin-bottom: 1.5rem; }
          .explore-btn { padding: 0.8rem 2rem; font-size: 0.9rem; }
          .arrow-btn { width: 45px; height: 45px; }
          .left-arrow { left: 0.5rem; }
          .right-arrow { right: 0.5rem; }
          .tab-item { padding: 0.8rem 1rem; gap: 0.5rem; }
          .tab-number { font-size: 0.9rem; }
          .tab-title { font-size: 0.7rem; }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out 0.2s forwards;
        }

        ::-webkit-scrollbar {
          height: 4px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
}