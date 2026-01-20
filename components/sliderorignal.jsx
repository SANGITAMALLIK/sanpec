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

  // Auto scroll tabs when active slide changes
  useEffect(() => {
    if (tabsRef.current && allImagesLoaded) {
      const activeTab = tabsRef.current.children[active];
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [active, allImagesLoaded]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900 lg:bg-[#cd091b]">
      {/* Loading Overlay */}
      {!allImagesLoaded && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 lg:bg-[#cd091b] flex flex-col items-center justify-center z-[100] text-white">
          <div className="w-12 h-12 lg:w-[50px] lg:h-[50px] border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
          <p className="text-lg lg:text-xl font-semibold tracking-[2px] uppercase">Loading...</p>
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
            <div className="flex-1 relative overflow-hidden bg-transparent lg:bg-[#cd091b] h-[50vh] lg:h-full">
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
              
              {/* Gradient Overlay - Only on Desktop */}
              <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full pointer-events-none z-[2]"
                   style={{
                     background: `linear-gradient(to right, transparent 0%, rgba(205, 9, 27, 0.3) 40%, rgba(205, 9, 27, 0.6) 70%, ${slide.bgColor} 100%)`
                   }}></div>
              
              {/* Mobile Gradient Overlay - Bottom */}
              <div className="block lg:hidden absolute bottom-0 left-0 w-full h-1/3 pointer-events-none z-[2]"
                   style={{
                     background: `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.7) 100%)`
                   }}></div>
            </div>

            {/* Right Side - Text with Color Background */}
            <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-16 transition-colors duration-700 relative overflow-hidden h-[50vh] lg:h-full"
                 style={{ backgroundColor: slide.bgColor }}>
              {/* Grid Pattern Overlay - Only on Desktop */}
              <div className="hidden lg:block absolute inset-0 pointer-events-none z-[1]"
                   style={{
                     backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                     backgroundSize: '50px 50px'
                   }}></div>
              
              <div className={`max-w-full lg:max-w-[600px] text-white relative z-[2] ${
                index === active && allImagesLoaded ? 'animate-slideInRight' : 'opacity-0'
              }`}>
                <h4 className="text-xs sm:text-sm lg:text-base uppercase tracking-[1.5px] lg:tracking-[2px] font-semibold mb-3 lg:mb-6 opacity-90">
                  {slide.preTitle}
                </h4>
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-6 leading-[1.3] sm:leading-[1.4] lg:leading-[1.3] tracking-wide overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      textOverflow: 'ellipsis'
                    }}>
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-8 leading-relaxed lg:leading-[1.6] opacity-95">
                  {slide.desc}
                </p>
                <button className="px-6 py-3 lg:px-10 lg:py-4 bg-white/20 text-white border-2 border-white rounded cursor-pointer transition-all duration-300 text-sm lg:text-base font-semibold hover:bg-white hover:text-[#cd091b] hover:-translate-y-1"
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
        className="absolute top-1/2 -translate-y-1/2 z-[20] w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] bg-white/90 border-none rounded-full text-[#333] cursor-pointer flex items-center justify-center transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:scale-110 left-2 sm:left-4 lg:left-8">
        <ChevronLeft size={24} className="lg:w-8 lg:h-8" />
      </button>

      {/* Right Arrow */}
      <button 
        onClick={nextSlide} 
        disabled={!allImagesLoaded}
        className="absolute top-1/2 -translate-y-1/2 z-[20] w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] bg-white/90 border-none rounded-full text-[#333] cursor-pointer flex items-center justify-center transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:scale-110 right-2 sm:right-4 lg:right-8">
        <ChevronRight size={24} className="lg:w-8 lg:h-8" />
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
              className={`flex items-center gap-2 sm:gap-3 lg:gap-4 px-3 py-3 sm:px-5 sm:py-4 lg:px-8 lg:py-6 cursor-pointer transition-all duration-300 border-b-[3px] whitespace-nowrap min-w-fit ${
                index === active 
                  ? 'bg-white/10 border-b-[#cd091b] text-white' 
                  : 'bg-transparent border-b-transparent text-white/70 hover:bg-white/5 hover:text-white'
              }`}
              style={{ cursor: allImagesLoaded ? 'pointer' : 'not-allowed' }}>
              <span className="font-bold text-base sm:text-lg lg:text-xl text-[#cd091b]">
                {`0${slide.id}`}
              </span>
              <span className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.5px] sm:tracking-[1px]">
                {slide.preTitle}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
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