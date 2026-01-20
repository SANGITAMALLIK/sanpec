"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const slides = [
  {
    id: 1,
    preTitle: "visit us at booth no-900",
    title: "INNOVATING FOR CRITICAL GLOBAL INFRASTRUCTURE",
    desc: "Electrical Transmission & Substation Structures Conference",
    image: "images/slider/1.png"
  },
  {
    id: 2,
    preTitle: "THE JOURNEY OF EXCELLENCE",
    title: "Bringing Engineering Excellence Improving Power Grid Reliability",
    desc: "Leadership | Process Excellence | Quality and Safety | Resilience | Sustainability",
    image: "images/slider/2.png"
  },
  {
    id: 3,
    preTitle: "Powering the Future",
    title: "U.S. Department of Energy Partnership for Aging Workforce",
    desc: "Training | Education | Research | Leadership",
    image: "images/slider/3.jpg"
  },
  {
    id: 4,
    preTitle: "Data-driven, Integrated Systems",
    title: "Quality solution and risk mitigation",
    desc: "grid resilience | business resilience | Value chain resilience",
    image: "images/slider/1.png"
  },
  {
    id: 5,
    preTitle: "LEADING THE WAY",
    title: "Building Resilient transmission line Improving the quality of life",
    desc: "PURPOSE-LED | VALUE-ALIGNED | INNOVATION-DRIVEN BUSINESS MODEL",
    image: "images/slider/2.png"
  },
  {
    id: 6,
    preTitle: "High-performing, resilient workforce",
    title: "Implementing the process of the future, today",
    desc: "OPTIMIZED WORKFLOWS | operational efficiency | HIGH PERFORMING TEAM | superior outcome",
    image: "images/slider/3.jpg"
  },
];

export default function ModernHeroSlider() {
  const [active, setActive] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null);

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

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && allImagesLoaded && !isTransitioning) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, allImagesLoaded, isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning || !allImagesLoaded) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 400);
  };

  const prevSlide = () => {
    if (isTransitioning || !allImagesLoaded) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActive((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 400);
  };

  const handleTabClick = (index) => {
    if (isTransitioning || !allImagesLoaded || index === active) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(index);
      setIsTransitioning(false);
    }, 400);
  };

  const currentSlide = slides[active];

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen bg-transparent overflow-hidden"
      style={{
        backgroundColor: 'transparent',
        backgroundImage: 'none'
      }}
    >
      {/* Main Slides - Completely Transparent Background */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-500 ${
              index === active && allImagesLoaded ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{
              backgroundColor: 'transparent'
            }}
          >
            {/* Image Container - No Overlay, No Effects */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover object-center"
                style={{
                  opacity: imagesLoaded[slide.image] ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                  // No filters, no overlays, clean image
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Minimal Content Overlay - Transparent Glass Effect */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="container mx-auto px-4 pb-12">
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto">
            {/* Pre-title */}
            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                {currentSlide.preTitle}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
              {currentSlide.title}
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed">
              {currentSlide.desc}
            </p>

            {/* Action Button */}
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-300">
              Explore Now
              <span className="ml-1">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Minimal Navigation Controls - Fixed to Bottom Right */}
      <div className="absolute bottom-4 right-4 z-30">
        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full p-1">
          {/* Play/Pause */}
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors duration-300"
          >
            {autoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          {/* Navigation Arrows */}
          <div className="flex items-center">
            <button
              onClick={prevSlide}
              disabled={isTransitioning || !allImagesLoaded}
              className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={isTransitioning || !allImagesLoaded}
              className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Minimal Slide Indicators - Bottom Center */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
        <div className="flex items-center gap-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === active ? 'bg-red-600 w-6' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slide Counter - Top Right */}
      <div className="absolute top-4 right-4 z-30">
        <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-white text-sm font-medium">
            0{active + 1}/0{slides.length}
          </span>
        </div>
      </div>

      {/* CSS for Smooth Transitions */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}