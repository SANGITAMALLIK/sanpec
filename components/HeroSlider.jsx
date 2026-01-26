"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Play, Pause } from 'lucide-react';

// Sample data - FIRST SLIDE WILL BE VIDEO, REST WILL BE IMAGES
const slides = [
  {
    id: 1,
    type: "video",
    videoUrl: "https://vimeo.com/1054591267?fl=pl&fe=sh",
    preTitle: "visit us at booth no-900",
    title:"Innovating Solutions",
    desc: "",
    image: "images/slider/4.png",
    bgColor: "#cd091b"
  },
  {
    id: 2,
    preTitle: "visit us at booth no-900",
    title: "INNOVATING FOR CRITICAL GLOBAL INFRASTRUCTURE",
    desc: "Electrical Transmission & Substation Structures Conference",
    image: "images/slider/1.png",
    bgColor: "#cd091b"
  },
  {
    id: 3,
    preTitle: "THE JOURNEY OF EXCELLENCE",
    title: "Bringing Engineering Excellence Improving Power Grid Reliability",
    desc: "Leadership | Process Excellence | Quality and Safety | Resilience | Sustainability",
    image: "images/slider/2.png",
    bgColor: "#cd091b"
  },
  {
    id: 4,
    preTitle: "Powering the Future",
    title: "U.S. Department of Energy Partnership for Aging Workforce",
    desc: "Training | Education | Research | Leadership",
    image: "images/slider/3.jpg",
    bgColor: "#cd091b"
  },
  {
    id: 5,
    type: "video",
    videoUrl: "images/slider/5.mp4",
    preTitle: "Data-driven, Integrated Systems",
    title: "Quality solution and risk mitigation",
    desc: "grid resilience | business resilience | Value chain resilience",
    image: "images/slider/1.png",
    bgColor: "#cd091b"
  },
  {
    id: 6,
    preTitle: "LEADING THE WAY",
    title: "Building Resilient transmission line Improving the quality of life",
    desc: "PURPOSE-LED | VALUE-ALIGNED | INNOVATION-DRIVEN BUSINESS MODEL",
    image: "images/slider/6.jpg",
    bgColor: "#cd091b"
  },
  {
    id: 7,
    preTitle: "High-performing, resilient workforce",
    title: "Implementing the process of the future, today",
    desc: "OPTIMIZED WORKFLOWS | operational efficiency | HIGH PERFORMING TEAM | superior outcome",
    image: "images/slider/7.png",
    bgColor: "#cd091b"
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showPlayOverlay, setShowPlayOverlay] = useState(true);
  const containerRef = useRef(null);
  const videoIframeRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const tabRefs = useRef([]);

  const minSwipeDistance = 50;

  // Function to scroll tab into view
  const scrollTabIntoView = (index) => {
    if (tabRefs.current[index] && tabsContainerRef.current) {
      const tabElement = tabRefs.current[index];
      const container = tabsContainerRef.current;
      
      const tabLeft = tabElement.offsetLeft;
      const tabWidth = tabElement.offsetWidth;
      const containerWidth = container.offsetWidth;
      
      // Calculate the center position
      const targetScroll = tabLeft - (containerWidth / 2) + (tabWidth / 2);
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    if (active === 0 && isVideoPlaying) {
      setIsVideoPlaying(false);
      setShowPlayOverlay(true);
    }
    const newIndex = (active + 1) % slides.length;
    setActive(newIndex);
    scrollTabIntoView(newIndex);
  };

  const prevSlide = () => {
    if (active === 0 && isVideoPlaying) {
      setIsVideoPlaying(false);
      setShowPlayOverlay(true);
    }
    const newIndex = (active - 1 + slides.length) % slides.length;
    setActive(newIndex);
    scrollTabIntoView(newIndex);
  };

  const goToSlide = (index) => {
    if (index === active) return;
    
    if (active === 0 && isVideoPlaying) {
      setIsVideoPlaying(false);
      setShowPlayOverlay(true);
    }
    
    setActive(index);
    scrollTabIntoView(index);
  };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    setShowPlayOverlay(false);
  };

  const handlePauseVideo = () => {
    setIsVideoPlaying(false);
    setShowPlayOverlay(true);
  };

  // Touch events for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Smart title splitting for exactly 2 lines
  const splitTitleIntoTwoLines = (title) => {
    const words = title.split(' ');
    
    if (words.length <= 3) {
      return {
        firstLine: words.slice(0, 2).join(' '),
        secondLine: words.slice(2).join(' ')
      };
    }
    
    let mid = Math.floor(words.length / 2);
    
    const breakingWords = ['FOR', 'AND', 'WITH', 'TO', 'THE', 'OF', 'IN', 'BY'];
    for (let i = mid; i < words.length - 1; i++) {
      if (breakingWords.includes(words[i].toUpperCase())) {
        return {
          firstLine: words.slice(0, i).join(' '),
          secondLine: words.slice(i).join(' ')
        };
      }
    }
    
    return {
      firstLine: words.slice(0, mid).join(' '),
      secondLine: words.slice(mid).join(' ')
    };
  };

  // Vimeo video ID extractor
  const getVimeoVideoId = (url) => {
    const match = url.match(/(?:vimeo\.com\/)(\d+)/);
    return match ? match[1] : null;
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gray-900"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Main Slider Container - Full Width */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => {
          const { firstLine, secondLine } = splitTitleIntoTwoLines(slide.title);
          
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === active ? 'z-10 opacity-100' : 'z-0 opacity-0'
              }`}
            >
              {/* Background Image/Video with Overlay */}
              <div className="absolute inset-0">
                {slide.type === "video" ? (
                  <div className="relative w-full h-full">
                    {slide.videoUrl.includes('vimeo.com') ? (
                      <>
                        <img
                          src={slide.image}
                          alt="Video thumbnail"
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        
                        {showPlayOverlay && (
                          <div className="absolute inset-0 bg-black/10"></div>
                        )}
                        
                        {isVideoPlaying && (
                          <div className="absolute inset-0 w-full h-full">
                            <iframe
                              ref={videoIframeRef}
                              src={`https://player.vimeo.com/video/${getVimeoVideoId(slide.videoUrl)}?autoplay=1&muted=0&title=0&byline=0&portrait=0&controls=1`}
                              className="absolute top-0 left-0 w-full h-full"
                              style={{ height: '100vh' }}
                              frameBorder="0"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        )}
                      </>
                    ) : (
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={slide.videoUrl} type="video/mp4" />
                      </video>
                    )}
                    
                    {slide.videoUrl.includes('vimeo.com') && showPlayOverlay && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
                        onClick={handlePlayVideo}
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-[#cd091b] rounded-full opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
                        </div>
                      </div>
                    )}
                    
                    {slide.videoUrl.includes('vimeo.com') && isVideoPlaying && (
                      <div 
                        className="absolute bottom-8 right-8 z-20 cursor-pointer"
                        onClick={handlePauseVideo}
                      >
                        <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 border border-white/20 hover:border-[#cd091b] transition-all duration-300">
                          <Pause className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/50 lg:via-black/30 lg:to-transparent"></div>
                  </>
                )}
              </div>

              {/* Text Content Container - ONLY FOR IMAGE SLIDES */}
              {slide.type !== "video" && (
                <div className="relative h-full flex items-end pb-32 md:pb-36">
                  <div className="container mx-auto pl-12 sm:pl-16 lg:pl-24 xl:pl-32 pr-4 sm:pr-6 lg:pr-8">
                    <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl">
                      {/* Pre-title with animated underline */}
                      <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 overflow-hidden">
                        <div className="relative">
                          <div className="w-8 md:w-12 h-[2px] bg-[#cd091b] transform -rotate-45"></div>
                          <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 border-2 border-[#cd091b]"></div>
                        </div>
                        <span className="text-xs md:text-sm lg:text-base font-semibold text-white uppercase tracking-[2px] md:tracking-[3px] lg:tracking-[4px]">
                          {slide.preTitle}
                        </span>
                      </div>

                      {/* Main Title - Responsive typography */}
                      <div className="mb-3 md:mb-4">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight md:leading-tight">
                          <div className="h-[1.2em] overflow-hidden mb-1">
                            <span className="inline-block">
                              {firstLine}
                            </span>
                          </div>
                          
                          <div className="h-[1.2em] overflow-hidden">
                            <span className="inline-block">
                              <span className="text-[#cd091b]">{secondLine.split(' ')[0]}</span>
                              {secondLine.split(' ').slice(1).length > 0 && " " + secondLine.split(' ').slice(1).join(' ')}
                            </span>
                          </div>
                        </h1>
                        
                        <div className="mt-2 md:mt-3 h-1 bg-gradient-to-r from-[#cd091b] to-transparent w-20"></div>
                      </div>

                      {/* Description */}
                      <p className="text-sm md:text-base lg:text-lg text-white/90 mb-4 md:mb-6 max-w-xl md:max-w-2xl leading-relaxed">
                        {slide.desc}
                      </p>

                      {/* CTA Button - Responsive */}
                      <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-transparent text-white font-bold text-sm md:text-base rounded-lg overflow-hidden transition-all duration-300 border-2 border-white/30 hover:border-[#cd091b]">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cd091b]/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        
                        <span className="relative z-10 flex items-center gap-2">
                          <span className="uppercase tracking-[1px] md:tracking-[2px]">Explore now</span>
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-300 group-hover:translate-x-2" />
                        </span>
                        
                        <div className="absolute top-0 left-0 w-2 h-2 md:w-3 md:h-3 border-t-2 border-l-2 border-[#cd091b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 border-b-2 border-r-2 border-[#cd091b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-2 md:left-4 lg:left-6 right-2 md:right-4 lg:right-8 transform -translate-y-1/2 z-20">
          <div className="flex justify-between">
            <button
              onClick={prevSlide}
              className="group w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-full border border-white/20 hover:border-[#cd091b] transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
            </button>
            
            <button
              onClick={nextSlide}
              className="group w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-full border border-white/20 hover:border-[#cd091b] transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Tabs - Pagination Style */}
      <div className={`absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-300 ${isVideoPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ maxWidth: '550px', width: 'calc(100% - 24px)' }}>
        <div className="flex items-center justify-center gap-2 px-2">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            disabled={active === 0}
            className={`px-4 py-2 rounded-md border-2 bg-white text-sm font-medium transition-all duration-300 ${
              active === 0
                ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 text-gray-600 hover:border-[#cd091b] hover:text-[#cd091b]'
            }`}
          >
            ← Prev
          </button>

          {/* Numbers Container - Scrollable */}
          <div ref={tabsContainerRef} className="flex overflow-x-auto scroll-smooth gap-2 items-center max-w-[300px] px-1">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                ref={el => tabRefs.current[index] = el}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-10 h-10 rounded-md border-2 text-sm font-semibold transition-all duration-300 ${
                  index === active 
                    ? 'bg-[#cd091b] border-[#cd091b] text-white shadow-lg' 
                    : 'bg-white border-gray-300 text-gray-700 hover:border-[#cd091b] hover:text-[#cd091b]'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={active === slides.length - 1}
            className={`px-4 py-2 rounded-md border-2 bg-white text-sm font-medium transition-all duration-300 ${
              active === slides.length - 1
                ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 text-gray-600 hover:border-[#cd091b] hover:text-[#cd091b]'
            }`}
          >
            Next →
          </button>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }
      `}</style>
    </section>
  );
}