
"use client";
import React, { useEffect, useRef, useState } from "react";

const EngineeringTabsSlider = () => {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [research, setResearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [projectsRes, researchRes] = await Promise.all([
          fetch("https://news.sanpec-excellence.com/wp-json/wp/v2/posts?categories=42&per_page=100&_embed"),
          fetch("https://news.sanpec-excellence.com/wp-json/wp/v2/posts?categories=36&per_page=100&_embed")
        ]);
        
        const projectsData = await projectsRes.json();
        const researchData = await researchRes.json();
        
        const formattedProjects = projectsData.map((post) => {
          const categories = post._embedded?.["wp:term"]?.[0] || [];
          const categoryName = categories.length > 0 ? categories[0].name : "Project";
          
          return {
            id: post.id,
            title: post.title.rendered,
            category: categoryName,
            img: "/images/home/projectimage.png",
            url: post.link
          };
        });
        
        const formattedResearch = researchData.map((post) => {
          const categories = post._embedded?.["wp:term"]?.[0] || [];
          const categoryName = categories.length > 0 ? categories[0].name : "Research";
          
          return {
            id: post.id,
            title: post.title.rendered,
            category: categoryName,
            img: "/images/home/projectimage.png",
            url: post.link
          };
        });
        
        setProjects(formattedProjects);
        setResearch(formattedResearch);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const checkScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;
    
    setCanScrollLeft(container.scrollLeft > 10);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    
    const scrollAmount = window.innerWidth < 768 ? 300 : 900;
    container.scrollTo({
      left: container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScrollButtons();
    container.addEventListener('scroll', checkScrollButtons);
    window.addEventListener('resize', checkScrollButtons);

    return () => {
      container.removeEventListener('scroll', checkScrollButtons);
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, [projects, research, activeTab]);

  const currentData = activeTab === "projects" ? projects : research;

  return (
    <div className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen bg-[#101631]">
      <PowerStructureSVG />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        {/* Animated grid lines */}
        <div className="absolute inset-0 animate-pulse-slow" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(239, 68, 68, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          backgroundPosition: '25px 25px'
        }}></div>
      </div>

      {/* Title Section with Full Width Power Lines */}
      <div className="relative z-10 text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 px-4">
        {/* Full Width Animated Power Lines Background */}
        <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none" style={{ marginTop: '-40px', marginBottom: '-40px' }}>
          <svg className="w-full h-full" viewBox="0 0 1400 200" preserveAspectRatio="none">
            <defs>
              {/* Gradient for electricity flow */}
              <linearGradient id="electricFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0">
                  <animate attributeName="offset" values="-0.3;1" dur="2.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="30%" stopColor="#60a5fa" stopOpacity="1">
                  <animate attributeName="offset" values="0;1.3" dur="2.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.8">
                  <animate attributeName="offset" values="0.2;1.5" dur="2.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0">
                  <animate attributeName="offset" values="0.5;1.8" dur="2.5s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
              
              <linearGradient id="electricFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#CD091B" stopOpacity="0">
                  <animate attributeName="offset" values="-0.3;1" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="30%" stopColor="#ef4444" stopOpacity="1">
                  <animate attributeName="offset" values="0;1.3" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#f87171" stopOpacity="0.8">
                  <animate attributeName="offset" values="0.2;1.5" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#CD091B" stopOpacity="0">
                  <animate attributeName="offset" values="0.5;1.8" dur="3s" repeatCount="indefinite" />
                </stop>
              </linearGradient>

              <linearGradient id="electricFlow3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0">
                  <animate attributeName="offset" values="-0.3;1" dur="2.8s" repeatCount="indefinite" />
                </stop>
                <stop offset="30%" stopColor="#60a5fa" stopOpacity="1">
                  <animate attributeName="offset" values="0;1.3" dur="2.8s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.8">
                  <animate attributeName="offset" values="0.2;1.5" dur="2.8s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0">
                  <animate attributeName="offset" values="0.5;1.8" dur="2.8s" repeatCount="indefinite" />
                </stop>
              </linearGradient>

              {/* Enhanced Glow Filter */}
              <filter id="powerGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Left Tower/Pole */}
            <g opacity="0.6">
              <rect x="50" y="60" width="8" height="80" fill="#1e293b"/>
              <line x1="20" y1="70" x2="85" y2="70" stroke="#1e293b" strokeWidth="4"/>
              <circle cx="20" cy="80" r="5" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="54" cy="60" r="6" fill="#CD091B">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="85" cy="80" r="5" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Right Tower/Pole */}
            <g opacity="0.6">
              <rect x="1342" y="60" width="8" height="80" fill="#1e293b"/>
              <line x1="1315" y1="70" x2="1380" y2="70" stroke="#1e293b" strokeWidth="4"/>
              <circle cx="1315" cy="80" r="5" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="1346" cy="60" r="6" fill="#CD091B">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="1380" cy="80" r="5" fill="#3b82f6">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
              </circle>
            </g>
            
            {/* Wire Lines with flowing electricity - Full Width */}
            {/* Top wire */}
            <path d="M 20,80 L 1380,80" stroke="#1e293b" strokeWidth="2" fill="none" opacity="0.4"/>
            <path d="M 20,80 L 1380,80" stroke="url(#electricFlow1)" strokeWidth="4" fill="none" filter="url(#powerGlow)"/>
            
            {/* Middle wire */}
            <path d="M 20,100 L 1380,100" stroke="#1e293b" strokeWidth="2" fill="none" opacity="0.4"/>
            <path d="M 20,100 L 1380,100" stroke="url(#electricFlow2)" strokeWidth="4" fill="none" filter="url(#powerGlow)"/>
            
            {/* Bottom wire */}
            <path d="M 20,120 L 1380,120" stroke="#1e293b" strokeWidth="2" fill="none" opacity="0.4"/>
            <path d="M 20,120 L 1380,120" stroke="url(#electricFlow3)" strokeWidth="4" fill="none" filter="url(#powerGlow)"/>
            
            {/* Connection points along the wires */}
            <circle cx="350" cy="80" r="4" fill="#3b82f6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="80" r="4" fill="#3b82f6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" begin="0.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="1050" cy="80" r="4" fill="#3b82f6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" begin="1.6s" repeatCount="indefinite" />
            </circle>
            
            <circle cx="450" cy="100" r="4" fill="#CD091B" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="100" r="4" fill="#CD091B" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="950" cy="100" r="4" fill="#CD091B" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="2s" repeatCount="indefinite" />
            </circle>
            
            <circle cx="280" cy="120" r="4" fill="#3b82f6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="120" r="4" fill="#3b82f6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" begin="0.9s" repeatCount="indefinite" />
            </circle>
            <circle cx="1120" cy="120" r="4" fill="#3b82f6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" begin="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        
        <div className="inline-block relative">
          <div className="flex items-center gap-3 sm:gap-4 text-[#CD091B] text-sm sm:text-base md:text-lg font-bold tracking-widest mb-3 relative z-10">
            <div className="w-12 sm:w-16 md:w-24 h-px bg-[#CD091B]"></div>
            <span className="whitespace-nowrap">ENGINEERING EXCELLENCE</span>
            <div className="w-12 sm:w-16 md:w-24 h-px bg-[#CD091B]"></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="relative z-10 flex items-center justify-center mb-12 sm:mb-16 md:mb-20 px-4">
        <div className="relative inline-flex bg-white p-2 rounded-full shadow-2xl">
          <div 
            className={`absolute top-2 bottom-2 bg-[#CD091B] rounded-full transition-all duration-300 ${
              activeTab === "projects" ? "left-2" : "left-1/2"
            }`}
            style={{ width: 'calc(50% - 0.5rem)' }}
          ></div>
          
          <button
            onClick={() => setActiveTab("projects")}
            className="relative z-10 px-8 sm:px-12 md:px-16 py-4 sm:py-5 rounded-full transition-all duration-300"
          >
            <span className={`font-bold text-base sm:text-lg md:text-xl uppercase tracking-wide ${
              activeTab === "projects" ? "text-white" : "text-slate-700"
            }`}>
              Our Projects
            </span>
          </button>

          <button
            onClick={() => setActiveTab("research")}
            className="relative z-10 px-8 sm:px-12 md:px-16 py-4 sm:py-5 rounded-full transition-all duration-300"
          >
            <span className={`font-bold text-base sm:text-lg md:text-xl uppercase tracking-wide ${
              activeTab === "research" ? "text-white" : "text-slate-700"
            }`}>
              Research & Innovation
            </span>
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 transition-all ${
            canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-[#CD091B] p-4 sm:p-5 rounded-full shadow-2xl hover:scale-110 transition-transform">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 transition-all ${
            canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-[#CD091B] p-4 sm:p-5 rounded-full shadow-2xl hover:scale-110 transition-transform">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        {loading ? (
          <div className="flex gap-6 sm:gap-8 overflow-hidden py-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] h-[450px] sm:h-[500px] bg-[#101631]/60 rounded-3xl animate-pulse border border-white/10"></div>
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-6 sm:gap-8 md:gap-10 overflow-x-auto scrollbar-hide scroll-smooth py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentData.map((item, index) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] h-[450px] sm:h-[500px] group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card Container */}
                <div className="relative h-full rounded-3xl overflow-hidden bg-[#0f1729] border border-white/5 group-hover:border-[#CD091B]/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#CD091B]/20">
                  
                  {/* Image Section - Top Half */}
                  <div className="relative h-3/5 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      style={{ filter: 'brightness(0.8)' }}
                    />
                    <div className="absolute inset-0 bg-[#101631]/40"></div>
                    
                    {/* Category Badge on Image */}
                    <div className="absolute top-5 left-5">
                      <div className="flex items-center gap-2 px-4 py-2 bg-[#CD091B]/90 backdrop-blur-sm rounded-lg">
                       
                        <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section - Bottom Half - HOVER EFFECT HERE */}
                  <div className="relative h-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#0a0e1a] group-hover:bg-[#CD091B] transition-all duration-500">
                    
                    {/* Title */}
                    <div>
                      <h3 
                        className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-tight line-clamp-2 mb-4"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      
                      {/* Decorative Line */}
                      <div className="h-1 w-16 bg-[#CD091B] group-hover:bg-white rounded-full mb-4 transition-all duration-500"></div>
                    </div>
                    
                    {/* Button - HOVER EFFECT HERE */}
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full bg-[#CD091B] group-hover:bg-white text-white group-hover:text-[#CD091B] font-semibold text-sm sm:text-base py-4 px-6 rounded-xl border border-[#CD091B] group-hover:border-white transition-all duration-500 shadow-lg hover:shadow-xl"
                    >
                      <span className="tracking-wide">View Details</span>
                      <svg className="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

const PowerStructureSVG = () => (
  <>
  {/* Transmission Tower - Top Right */}
    <svg className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 w-20 h-32 sm:w-28 sm:h-40 md:w-36 md:h-52 lg:w-48 lg:h-64 opacity-[0.04]" viewBox="0 0 200 300" fill="none">
      <path d="M100 20 L100 280 M70 80 L130 80 M60 120 L140 120 M50 160 L150 160 M40 200 L160 200 M30 240 L170 240 M70 80 L40 200 M130 80 L160 200 M40 200 L30 240 M160 200 L170 240" 
        stroke="#3b82f6" strokeWidth="4"/>
      <circle cx="100" cy="20" r="8" fill="#3b82f6"/>
      <line x1="80" y1="280" x2="120" y2="280" stroke="#3b82f6" strokeWidth="6"/>
    </svg>

    {/* Power Pole - Left Side */}
    <svg className="absolute top-1/3 left-4 sm:left-8 md:left-12 w-16 h-40 sm:w-20 sm:h-48 md:w-24 md:h-56 lg:w-32 lg:h-72 opacity-[0.04]" viewBox="0 0 150 400" fill="none">
      <rect x="65" y="80" width="20" height="320" fill="#3b82f6"/>
      <line x1="30" y1="100" x2="120" y2="100" stroke="#3b82f6" strokeWidth="5"/>
      <line x1="30" y1="100" x2="30" y2="120" stroke="#3b82f6" strokeWidth="4"/>
      <line x1="120" y1="100" x2="120" y2="120" stroke="#3b82f6" strokeWidth="4"/>
      <circle cx="30" cy="130" r="6" fill="#3b82f6"/>
      <circle cx="120" cy="130" r="6" fill="#3b82f6"/>
      <circle cx="75" cy="75" r="8" fill="#ef4444"/>
    </svg>

    {/* Electric Substation - Bottom Right */}
    <svg className="absolute bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-28 right-8 sm:right-12 md:right-16 lg:right-24 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 opacity-[0.04]" viewBox="0 0 250 250" fill="none">
      <rect x="50" y="100" width="150" height="120" stroke="#3b82f6" strokeWidth="5" fill="none"/>
      <rect x="70" y="120" width="40" height="60" fill="#3b82f6"/>
      <rect x="140" y="120" width="40" height="60" fill="#3b82f6"/>
      <circle cx="90" cy="100" r="12" fill="#ef4444"/>
      <circle cx="160" cy="100" r="12" fill="#ef4444"/>
      <line x1="90" y1="80" x2="90" y2="88" stroke="#ef4444" strokeWidth="4"/>
      <line x1="160" y1="80" x2="160" y2="88" stroke="#ef4444" strokeWidth="4"/>
      <path d="M40 100 L80 80 M170 80 L210 100" stroke="#3b82f6" strokeWidth="4"/>
    </svg>

    {/* Power Lines - Top Left */}
    <svg className="absolute top-20 sm:top-24 md:top-32 left-1/4 w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 opacity-[0.05]" viewBox="0 0 300 100" fill="none">
      <path d="M0 50 Q75 30 150 50 T300 50" stroke="#3b82f6" strokeWidth="3" fill="none"/>
      <path d="M0 60 Q75 40 150 60 T300 60" stroke="#3b82f6" strokeWidth="3" fill="none"/>
      <path d="M0 70 Q75 50 150 70 T300 70" stroke="#3b82f6" strokeWidth="3" fill="none"/>
      <circle cx="0" cy="50" r="5" fill="#ef4444"/>
      <circle cx="150" cy="50" r="5" fill="#ef4444"/>
      <circle cx="300" cy="50" r="5" fill="#ef4444"/>
    </svg>
    {/* Transformer - Bottom Left */}
    <svg className="absolute bottom-1/4 left-12 sm:left-16 md:left-24 w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 lg:w-36 lg:h-40 opacity-[0.04]" viewBox="0 0 150 180" fill="none">
      <rect x="40" y="60" width="70" height="100" stroke="#3b82f6" strokeWidth="4" fill="none" rx="5"/>
      <circle cx="75" cy="40" r="15" stroke="#ef4444" strokeWidth="4" fill="none"/>
      <line x1="75" y1="55" x2="75" y2="60" stroke="#ef4444" strokeWidth="3"/>
      <line x1="60" y1="80" x2="90" y2="80" stroke="#3b82f6" strokeWidth="3"/>
      <line x1="60" y1="100" x2="90" y2="100" stroke="#3b82f6" strokeWidth="3"/>
      <line x1="60" y1="120" x2="90" y2="120" stroke="#3b82f6" strokeWidth="3"/>
      <circle cx="60" cy="140" r="5" fill="#ef4444"/>
      <circle cx="90" cy="140" r="5" fill="#ef4444"/>
    </svg>

    {/* Circuit Symbol - Middle Right */}
    <svg className="absolute top-1/2 right-1/4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-[0.05]" viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="40" stroke="#3b82f6" strokeWidth="4" fill="none"/>
      <circle cx="60" cy="60" r="20" fill="#3b82f6"/>
      <line x1="60" y1="20" x2="60" y2="40" stroke="#ef4444" strokeWidth="4"/>
      <line x1="60" y1="80" x2="60" y2="100" stroke="#ef4444" strokeWidth="4"/>
      <line x1="20" y1="60" x2="40" y2="60" stroke="#ef4444" strokeWidth="4"/>
      <line x1="80" y1="60" x2="100" y2="60" stroke="#ef4444" strokeWidth="4"/>
    </svg>
  </>
);

export default EngineeringTabsSlider;