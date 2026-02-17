"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, ArrowRight, Pause, X } from 'lucide-react';
import { useSlider } from '@/app/context/SliderContext';

const slides = [
  {
    id: 1,
    type: "video",
    videoUrl: "https://vimeo.com/1054591267?fl=pl&fe=sh",
    preTitle: "",
    title:"INNOVATING SOLUTIONS",
    desc: "",
    image: "images/slider/4.png",
    bgColor: "#cd091b"
  },
  {
    id: 2,
    preTitle: "VISIT US AT BOOTH NO-900",
    title: "INNOVATING FOR CRITICAL GLOBAL INFRASTRUCTURE",
    desc: "Electrical Transmission & Substation Structures Conference",
    image: "images/slider/1.png",
    bgColor: "#cd091b",
    buttonText: "Explore Now",
    buttonLink: "/blog/electrical-transmission-substation-structures-conference-ets"
  },
  {
    id: 3,
    preTitle: "THE JOURNEY OF EXCELLENCE",
    title: "BRINGING ENGINEERING EXCELLENCE IMPROVING POWER GRID RELIABILITY",
    desc: "Leadership | Process Excellence | Quality and Safety | Resilience | Sustainability",
    image: "images/slider/2.png",
    bgColor: "#cd091b",
    buttonText: "Explore Now",
    buttonLink: "/electric-power/transmission-and-distribution/design-and-engineering"
  },
  {
    id: 4,
    preTitle: "POWERING THE FUTURE",
    title: "U.S. DEPARTMENT OF ENERGY PARTNERSHIP FOR AGING WORKFORCE",
    desc: "Training | Education | Research | Leadership",
    image: "images/slider/3.jpg",
    bgColor: "#cd091b",
    buttonText: "Explore Now",
    buttonLink: "/research"
  },
  {
    id: 5,
    type: "video",
    videoUrl: "images/slider/5.mp4",
    preTitle: "DATA-DRIVEN, INTEGRATED SYSTEMS",
    title: "QUALITY SOLUTION AND RISK MITIGATION",
    desc: "Grid Resilience | Business Resilience | Value Chain Resilience",
    image: "images/slider/1.png",
    bgColor: "#cd091b"
  },
  {
    id: 6,
    preTitle: "LEADING THE WAY",
    title: "BUILDING RESILIENT TRANSMISSION LINE IMPROVING THE QUALITY OF LIFE",
    desc: "PURPOSE-LED | VALUE-ALIGNED | INNOVATION-DRIVEN BUSINESS MODEL",
    image: "images/slider/6.jpg",
    bgColor: "#cd091b",
    buttonText: "Explore Now",
    buttonLink: "/about"
  },
  {
    id: 7,
    preTitle: "HIGH-PERFORMING, RESILIENT WORKFORCE",
    title: "IMPLEMENTING THE PROCESS OF THE FUTURE, TODAY",
    desc: "OPTIMIZED WORKFLOWS | OPERATIONAL EFFICIENCY | HIGH PERFORMING TEAM | SUPERIOR OUTCOME",
    image: "images/slider/7.png",
    bgColor: "#cd091b",
    buttonText: "Explore Now",
    buttonLink: "/sanpec-six-pillars/systems-and-structures"
  },
];

export default function HeroSlider() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showPlayOverlay, setShowPlayOverlay] = useState(true);
  const [showMobileVideoModal, setShowMobileVideoModal] = useState(false);
  const containerRef = useRef(null);
  const videoIframeRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const tabRefs = useRef([]);
  const { setCurrentSlide } = useSlider();

  const minSwipeDistance = 50;

  useEffect(() => {
    setCurrentSlide(active);
  }, [active, setCurrentSlide]);

  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };
    if (slides[active]?.image) preloadImage(slides[active].image);
    const nextIndex = (active + 1) % slides.length;
    if (slides[nextIndex]?.image) preloadImage(slides[nextIndex].image);
    const prevIndex = (active - 1 + slides.length) % slides.length;
    if (slides[prevIndex]?.image) preloadImage(slides[prevIndex].image);
  }, [active]);

  const scrollTabIntoView = (index) => {
    if (tabRefs.current[index] && tabsContainerRef.current) {
      const tabElement = tabRefs.current[index];
      const container = tabsContainerRef.current;
      const tabLeft = tabElement.offsetLeft;
      const tabWidth = tabElement.offsetWidth;
      const containerWidth = container.offsetWidth;
      const targetScroll = tabLeft - (containerWidth / 2) + (tabWidth / 2);
      container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  const handleSlideChange = (newIndex) => {
    if (active === 0 && isVideoPlaying) {
      setIsVideoPlaying(false);
      setShowPlayOverlay(true);
    }
    setActive(newIndex);
    scrollTabIntoView(newIndex);
  };

  const nextSlide = () => handleSlideChange((active + 1) % slides.length);
  const prevSlide = () => handleSlideChange((active - 1 + slides.length) % slides.length);
  const goToSlide = (index) => index !== active && handleSlideChange(index);

  const handlePlayVideo = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setShowMobileVideoModal(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVideoPlaying(true);
      setShowPlayOverlay(false);
    }
  };

  const handlePauseVideo = () => {
    setIsVideoPlaying(false);
    setShowPlayOverlay(true);
  };

  const handleCloseMobileModal = () => {
    setShowMobileVideoModal(false);
    document.body.style.overflow = '';
  };

  const handleButtonClick = (link) => link && router.push(link);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    else if (isRightSwipe) prevSlide();
  };

  const splitTitleIntoTwoLines = (title) => {
    const words = title.split(' ');
    if (words.length <= 3) {
      return { firstLine: words.slice(0, 2).join(' '), secondLine: words.slice(2).join(' ') };
    }
    let mid = Math.floor(words.length / 2);
    const breakingWords = ['FOR', 'AND', 'WITH', 'TO', 'THE', 'OF', 'IN', 'BY'];
    for (let i = mid; i < words.length - 1; i++) {
      if (breakingWords.includes(words[i].toUpperCase())) {
        return { firstLine: words.slice(0, i).join(' '), secondLine: words.slice(i).join(' ') };
      }
    }
    return { firstLine: words.slice(0, mid).join(' '), secondLine: words.slice(mid).join(' ') };
  };

  const getVimeoVideoId = (url) => {
    const match = url.match(/(?:vimeo\.com\/)(\d+)/);
    return match ? match[1] : null;
  };

  const NavButton = ({ direction, onClick, disabled }) => (
    <button type="button" onClick={onClick} disabled={disabled}
      className={`group w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-full border border-white/20 hover:border-[#cd091b] hover:bg-[#cd091b]/20 transition-all duration-300`}>
      {direction === 'left' ? 
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" /> :
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
      }
    </button>
  );

  const PaginationButton = ({ direction, onClick, disabled }) => {
    const isLeft = direction === 'left';
    return (
      <button type="button" onClick={onClick} disabled={disabled}
        className={`group px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 bg-white/20 backdrop-blur-md text-[10px] sm:text-xs md:text-sm font-semibold transition-all duration-300 border-2 ${
          disabled ? 'border-white/20 text-white/40 cursor-not-allowed' : 'border-white/30 text-white hover:border-[#cd091b] hover:bg-[#cd091b] hover:shadow-lg hover:shadow-[#cd091b]/30'
        }`}
        style={{
          borderTopLeftRadius: isLeft ? '9999px' : '6px',
          borderBottomLeftRadius: isLeft ? '9999px' : '6px',
          borderTopRightRadius: isLeft ? '6px' : '9999px',
          borderBottomRightRadius: isLeft ? '6px' : '9999px'
        }}>
        <span className="flex items-center gap-0.5 sm:gap-1 md:gap-1.5">
          {isLeft && <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>}
          <span className="hidden sm:inline">{isLeft ? 'Prev' : 'Next'}</span>
          {!isLeft && <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>}
        </span>
      </button>
    );
  };

  return (
    <>
      <link rel="preload" as="image" href={slides[0].image} />
      {slides[1] && <link rel="preload" as="image" href={slides[1].image} />}
      
      <section ref={containerRef} className="relative w-full h-[70vh] md:h-[85vh] lg:h-screen overflow-hidden bg-gray-900"
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div className="relative h-full w-full">
          {slides.map((slide, index) => {
            const { firstLine, secondLine } = splitTitleIntoTwoLines(slide.title);
            return (
              <div key={slide.id} className={`absolute inset-0 transition-opacity duration-500 ${index === active ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}>
                <div className="absolute inset-0">
                  {slide.type === "video" ? (
                    <div className="relative w-full h-full">
                      {slide.videoUrl.includes('vimeo.com') ? (
                        <>
                          <img src={slide.image} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" decoding="async" />
                          {showPlayOverlay && <div className="absolute inset-0 bg-black/10"></div>}
                          {isVideoPlaying && (
                            <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
                              <iframe ref={videoIframeRef}
                                src={`https://player.vimeo.com/video/${getVimeoVideoId(slide.videoUrl)}?autoplay=1&muted=0&title=0&byline=0&portrait=0&controls=1&background=0`}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                style={{ width: '100vw', height: '56.25vw', minHeight: '100vh', minWidth: '177.77vh', border: 'none' }}
                                frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                            </div>
                          )}
                        </>
                      ) : (
                        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="auto">
                          <source src={slide.videoUrl} type="video/mp4" />
                        </video>
                      )}
                      {slide.videoUrl.includes('vimeo.com') && showPlayOverlay && (
                        <div className="absolute inset-0 flex items-center justify-center cursor-pointer z-20" onClick={handlePlayVideo}>
                          <div className="relative group">
                            <div className="absolute inset-0 bg-[#cd091b] rounded-full opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
                          </div>
                        </div>
                      )}
                      {slide.videoUrl.includes('vimeo.com') && isVideoPlaying && (
                        <div className="absolute bottom-8 right-8 z-30 cursor-pointer" onClick={handlePauseVideo}>
                          <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 border border-white/20 hover:border-[#cd091b] transition-all duration-300">
                            <Pause className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" loading={index === 0 || index === active ? "eager" : "lazy"} decoding="async" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/40 lg:to-transparent"></div>
                    </>
                  )}
                </div>

                {slide.type !== "video" && (
                  <div className="relative h-full flex items-end pb-28 sm:pb-32 md:pb-36 lg:pb-40">
                    <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:pl-16 xl:pl-24 lg:pr-8">
                      <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                        <div className="flex items-center gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-5 overflow-hidden">
                          <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold text-white uppercase tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] lg:tracking-[4px]">
                            {slide.preTitle}
                          </span>
                        </div>

                        <div className="mb-3 sm:mb-4 md:mb-5">
                          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.2] sm:leading-tight uppercase">
                            <div className="overflow-hidden mb-1 sm:mb-1.5">
                              <span className="inline-block">{firstLine}</span>
                            </div>
                            <div className="overflow-hidden">
                              <span className="inline-block">
                                <span className="text-[#cd091b]">{secondLine.split(' ')[0]}</span>
                                {secondLine.split(' ').slice(1).length > 0 && " " + secondLine.split(' ').slice(1).join(' ')}
                              </span>
                            </div>
                          </h1>
                          <div className="mt-2 sm:mt-3 md:mt-4 h-1 bg-gradient-to-r from-[#cd091b] to-transparent w-14 sm:w-16 md:w-20"></div>
                        </div>

                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/95 mb-4 sm:mb-5 md:mb-6 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-relaxed">
                          {slide.desc}
                        </p>

                        {slide.buttonText && (
                          <button type="button" onClick={() => handleButtonClick(slide.buttonLink)}
                            className="group relative px-5 sm:px-7 md:px-9 py-3 sm:py-3.5 md:py-4 bg-[#cd091b] text-white font-bold text-sm sm:text-base md:text-lg rounded-lg overflow-hidden transition-all duration-300 border-2 border-[#cd091b] hover:bg-[#a00716] hover:border-[#a00716] hover:shadow-xl hover:shadow-[#cd091b]/50 active:scale-95 shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <span className="relative z-10 flex items-center gap-2 sm:gap-2.5">
                              <span className="uppercase tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]">{slide.buttonText}</span>
                              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform transition-transform duration-300 group-hover:translate-x-2" />
                            </span>
                            <div className="absolute top-0 left-0 w-2.5 h-2.5 md:w-3 md:h-3 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 md:w-3 md:h-3 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div className="absolute top-1/2 left-2 md:left-4 lg:left-6 right-2 md:right-4 lg:right-8 transform -translate-y-1/2 z-20">
            <div className="flex justify-between">
              <NavButton direction="left" onClick={prevSlide} />
              <NavButton direction="right" onClick={nextSlide} />
            </div>
          </div>
        </div>

        <div className={`absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-300 ${isVideoPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ maxWidth: '95%', width: 'auto' }}>
          <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 px-1 sm:px-2">
            <PaginationButton direction="left" onClick={prevSlide} disabled={active === 0} />

            <div ref={tabsContainerRef} className="flex overflow-x-auto scroll-smooth gap-1 sm:gap-1.5 md:gap-2 items-center px-0.5 sm:px-1" style={{ maxWidth: 'calc(5 * (2.5rem + 0.25rem))', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {slides.map((slide, index) => (
                <button type="button" key={slide.id} ref={el => tabRefs.current[index] = el} onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-md sm:rounded-lg border-2 text-[10px] sm:text-xs md:text-sm font-bold transition-all duration-300 ${
                    index === active ? 'bg-[#cd091b] border-[#cd091b] text-white shadow-lg shadow-[#cd091b]/40 scale-110' : 'bg-white/20 backdrop-blur-md border-white/30 text-white hover:border-[#cd091b] hover:bg-[#cd091b]/30 hover:scale-105'
                  }`}>
                  {index + 1}
                </button>
              ))}
            </div>

            <PaginationButton direction="right" onClick={nextSlide} disabled={active === slides.length - 1} />
          </div>
        </div>

        <style jsx>{`
          .overflow-x-auto::-webkit-scrollbar { display: none; }
          .overflow-x-auto { -ms-overflow-style: none; scrollbar-width: none; }
          .scroll-smooth { scroll-behavior: smooth; }
        `}</style>

        {showMobileVideoModal && (
          <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center" onClick={handleCloseMobileModal}>
            <button onClick={handleCloseMobileModal}
              className="absolute top-4 right-4 z-[10000] w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30 hover:bg-[#cd091b] hover:border-[#cd091b] transition-all duration-300">
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()} style={{ aspectRatio: '16/9' }}>
              <iframe src={`https://player.vimeo.com/video/${getVimeoVideoId(slides[0].videoUrl)}?autoplay=1&muted=0&title=0&byline=0&portrait=0&controls=1`}
                className="absolute inset-0 w-full h-full rounded-lg" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">Tap outside to close</div>
          </div>
        )}
      </section>
    </>
  );
}