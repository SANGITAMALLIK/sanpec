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
    title:"",
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
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showPlayOverlay, setShowPlayOverlay] = useState(true);
  const containerRef = useRef(null);
  const thumbnailContainerRef = useRef(null);
  const activeThumbnailRef = useRef(null);
  const intervalRef = useRef(null);
  const videoIframeRef = useRef(null);

  const minSwipeDistance = 50;

  // Auto slide every 5 seconds
  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000000);
  };

  useEffect(() => {
    if (isPlaying && active !== 0) { // Don't auto slide on video slide
      startAutoSlide();
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, active]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (activeThumbnailRef.current && thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const activeThumb = activeThumbnailRef.current;
      
      // Calculate position for vertical scroll
      const containerTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const thumbTop = activeThumb.offsetTop;
      const thumbHeight = activeThumb.clientHeight;
      
      if (thumbTop < containerTop) {
        // Scroll up if thumbnail is above view
        container.scrollTo({
          top: thumbTop - 10,
          behavior: 'smooth'
        });
      } else if (thumbTop + thumbHeight > containerTop + containerHeight) {
        // Scroll down if thumbnail is below view
        container.scrollTo({
          top: thumbTop - containerHeight + thumbHeight + 20,
          behavior: 'smooth'
        });
      }
    }
  }, [active]);

  const nextSlide = () => {
    if (active === 0 && isVideoPlaying) {
      // If video is playing, pause it when leaving
      setIsVideoPlaying(false);
      setShowPlayOverlay(true);
    }
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (active === 0 && isVideoPlaying) {
      // If video is playing, pause it when leaving
      setIsVideoPlaying(false);
      setShowPlayOverlay(true);
    }
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    if (index === active) return;
    
    if (active === 0 && isVideoPlaying) {
      // If video is playing, pause it when leaving
      setIsVideoPlaying(false);
      setShowPlayOverlay(true);
    }
    
    setActive(index);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
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
    
    // For long titles, try to find natural breaking point
    let mid = Math.floor(words.length / 2);
    
    // Look for breaking words
    const breakingWords = ['FOR', 'AND', 'WITH', 'TO', 'THE', 'OF', 'IN', 'BY'];
    for (let i = mid; i < words.length - 1; i++) {
      if (breakingWords.includes(words[i].toUpperCase())) {
        return {
          firstLine: words.slice(0, i).join(' '),
          secondLine: words.slice(i).join(' ')
        };
      }
    }
    
    // Fallback to middle split
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
      {/* Main Slider Container with Thumbnails Sidebar */}
      <div className="relative h-full w-full flex flex-col lg:flex-row">
        {/* Main Content Area - Full width on mobile, increased width on desktop */}
        <div className="relative h-full w-full lg:w-4/5">
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
                    // VIDEO SLIDES (works for any slide with type: "video")
                    <div className="relative w-full h-full">
                      {/* Video element for local MP4 files or iframe for Vimeo */}
                      {slide.videoUrl.includes('vimeo.com') ? (
                        // VIMEO VIDEO
                        <>
                          {/* Video thumbnail as background */}
                          <img
                            src={slide.image}
                            alt="Video thumbnail"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                          />
                          
                          {/* Light overlay - only shows when video is not playing */}
                          {showPlayOverlay && (
                            <div className="absolute inset-0 bg-black/10"></div>
                          )}
                          
                          {/* Video iframe - only shows when play button is clicked */}
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
                        // LOCAL MP4 VIDEO (autoplay with muted)
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
                      
                      {/* Play button overlay - shows only for Vimeo videos */}
                      {slide.videoUrl.includes('vimeo.com') && showPlayOverlay && (
                        <div 
                          className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
                          onClick={handlePlayVideo}
                        >
                          <div className="relative group">
                            {/* Outer glow effect */}
                            <div className="absolute inset-0 bg-[#cd091b] rounded-full opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
                          </div>
                        </div>
                      )}
                      
                      {/* Pause button - shows when Vimeo video is playing */}
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
                    // IMAGE FOR OTHER SLIDES
                    <>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Gradient Overlay - ONLY FOR IMAGE SLIDES - LIGHT OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/50 lg:via-black/30 lg:to-transparent"></div>
                    </>
                  )}
                </div>

                {/* Text Content Container - ONLY FOR IMAGE SLIDES */}
                {slide.type !== "video" && (
                  <div className="relative h-full flex items-end pb-16 md:pb-20">
                    {/* INCREASED LEFT PADDING TO ALIGN WITH LOGO */}
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
                            {/* First line */}
                            <div className="h-[1.2em] overflow-hidden mb-1">
                              <span className="inline-block">
                                {firstLine}
                              </span>
                            </div>
                            
                            {/* Second line with accent */}
                            <div className="h-[1.2em] overflow-hidden">
                              <span className="inline-block">
                                <span className="text-[#cd091b]">{secondLine.split(' ')[0]}</span>
                                {secondLine.split(' ').slice(1).length > 0 && " " + secondLine.split(' ').slice(1).join(' ')}
                              </span>
                            </div>
                          </h1>
                          
                          {/* Animated underline for title */}
                          <div className="mt-2 md:mt-3 h-1 bg-gradient-to-r from-[#cd091b] to-transparent w-20"></div>
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base lg:text-lg text-white/90 mb-4 md:mb-6 max-w-xl md:max-w-2xl leading-relaxed">
                          {slide.desc}
                        </p>

                        {/* CTA Button - Responsive */}
                        <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-transparent text-white font-bold text-sm md:text-base rounded-lg overflow-hidden transition-all duration-300 border-2 border-white/30 hover:border-[#cd091b]">
                          {/* Button background effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cd091b]/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                          
                          {/* Button main content */}
                          <span className="relative z-10 flex items-center gap-2">
                            <span className="uppercase tracking-[1px] md:tracking-[2px]">Explore now</span>
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-300 group-hover:translate-x-2" />
                          </span>
                          
                          {/* Corner accents */}
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

          {/* Navigation Arrows - Mobile Optimized */}
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

        {/* Thumbnails Sidebar - Hidden on mobile, shown on desktop with REDUCED WIDTH AND FIXED HEIGHT */}
        <div className="hidden lg:block w-1/5 h-full bg-black/40 backdrop-blur-sm border-l border-white/10 relative">
          {/* LIGHT GRID PATTERN BACKGROUND */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Thumbnails Header - FIXED HEIGHT */}
          <div className="p-3 border-b border-white/10 h-[80px] relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-bold text-sm flex items-center gap-2 opacity-0">
                <span className="w-2 h-5 bg-[#cd091b] rounded-full"></span>
                Slides ({slides.length})
              </h3>
              <span className="text-xs font-semibold text-white bg-[#cd091b]/30 px-2 py-1 rounded opacity-0">
                {active + 1} / {slides.length}
              </span>
            </div>
            <div className="mt-1">
              <span className="text-xs text-white/60 opacity-0">Click to view</span>
            </div>
          </div>
          
          {/* Scrollable Thumbnails Container - FIXED HEIGHT WITH SCROLL */}
          <div 
            ref={thumbnailContainerRef}
            className="h-[calc(100%-80px)] overflow-y-auto py-2 relative z-10"
          >
            <div className="space-y-2 px-2">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  ref={index === active ? activeThumbnailRef : null}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-md cursor-pointer transition-all duration-300 group ${
                    index === active 
                      ? 'ring-1 ring-[#cd091b] ring-offset-1 ring-offset-black transform scale-[1.02]' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Thumbnail Image/Video Indicator - FIXED: First thumbnail will show image */}
                  <div className="relative h-20 w-full overflow-hidden">
                    {/* ALL thumbnails now use image - including first video thumbnail */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Play icon overlay for video thumbnail */}
                    {slide.type === "video" && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-8 h-8 bg-[#cd091b] rounded-full flex items-center justify-center">
                          <Play className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Active Indicator */}
                    {index === active && (
                      <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#cd091b] rounded-full animate-pulse"></div>
                    )}
                    
                    {/* Number Badge */}
                    <div className={`absolute top-1 left-1 w-5 h-5 rounded-full flex items-center justify-center ${
                      index === active ? 'bg-[#cd091b]' : 'bg-black/70'
                    }`}>
                      <span className="text-xs font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Thumbnail Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="flex items-center gap-1 mb-0.5">
                      <div className={`w-3 h-[1px] ${index === active ? 'bg-[#cd091b]' : 'bg-white/60'}`}></div>
                      <span className="text-[9px] font-semibold text-white/80 uppercase tracking-wider truncate">
                        {slide.preTitle.length > 20 ? slide.preTitle.substring(0, 20) + '...' : slide.preTitle}
                      </span>
                    </div>
                    <h4 className="text-[10px] font-bold text-white line-clamp-2 leading-tight">
                      {slide.title.split(' ').slice(0, 3).join(' ')}...
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Thumbnails (Horizontal Scroll at Bottom) - ALSO FIXED */}
      <div className="lg:hidden absolute bottom-4 md:bottom-6 left-0 right-0 z-20">
        <div className="container mx-auto px-3">
          <div className="relative">
            {/* Active Slide Indicator */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                <span className="text-xs font-semibold text-white">
                  Slide {active + 1} of {slides.length}
                </span>
              </div>
            </div>
            
            {/* Thumbnails Container */}
            <div className="flex space-x-2 md:space-x-3 overflow-x-auto pb-2 px-1">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className="flex-shrink-0 relative group"
                >
                  <div className="w-14 h-10 md:w-16 md:h-12 rounded-md overflow-hidden relative">
                    {/* Mobile thumbnails also show image for video slide */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Play icon for video thumbnail */}
                    {slide.type === "video" && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-6 h-6 bg-[#cd091b] rounded-full flex items-center justify-center">
                          <Play className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    )}
                    <div className={`absolute inset-0 ${
                      index === active 
                        ? 'bg-[#cd091b]/50 border border-[#cd091b]' 
                        : 'bg-black/50 group-hover:bg-black/30'
                    } transition-all duration-300`}></div>
                    
                    {/* Mobile Number Badge */}
                    <div className={`absolute top-0.5 right-0.5 w-4 h-4 md:w-4 md:h-4 rounded-full flex items-center justify-center ${
                      index === active ? 'bg-[#cd091b]' : 'bg-black/70'
                    }`}>
                      <span className="text-[8px] md:text-[9px] font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Mobile Active Indicator Line */}
                  {index === active && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[#cd091b] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        /* Custom scrollbar for thumbnails */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(205, 9, 27, 0.4);
          border-radius: 2px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(205, 9, 27, 0.6);
        }
        
        /* Horizontal scrollbar for mobile thumbnails */
        .overflow-x-auto::-webkit-scrollbar {
          height: 4px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(205, 9, 27, 0.4);
          border-radius: 2px;
        }
        
        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .overflow-x-auto {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Video iframe styling */
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