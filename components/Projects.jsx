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
            img: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || 
                 "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
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
            img: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || 
                 "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
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
    
    const scrollAmount = window.innerWidth < 768 ? 280 : 800;
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
    <div className="relative w-full overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 min-h-screen bg-[#0a0e1a]">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <PowerStructureSVG />

      {/* Title Section */}
      <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
        <div className="inline-block mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3 text-red-500 text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">
            <div className="w-8 sm:w-12 md:w-16 lg:w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-red-500"></div>
            <span className="whitespace-nowrap">ENGINEERING EXCELLENCE</span>
            <div className="w-8 sm:w-12 md:w-16 lg:w-24 h-px bg-gradient-to-l from-transparent via-red-500 to-red-500"></div>
          </div>
        </div>
      </div>

      {/* Tabs - Sleek Modern Design */}
      <div className="relative z-10 flex items-center justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
        <div className=" relative inline-flex bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-full border border-white/40 shadow-xl">
          {/* Sliding background indicator */}
          <div 
            className={`absolute top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 bg-gradient-to-r from-red-600 to-red-700 rounded-full transition-all duration-300 ease-out shadow-lg shadow-red-500/50 ${
              activeTab === "projects" ? "left-1.5 sm:left-2" : "left-1/2"
            }`}
            style={{ width: 'calc(50% - 0.375rem)' }}
          ></div>
          
          <button
            onClick={() => setActiveTab("projects")}
            className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-300"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <svg className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${activeTab === "projects" ? "text-white" : "text-slate-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className={`font-bold text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wide transition-all duration-300 whitespace-nowrap ${
                activeTab === "projects" ? "text-white" : "text-slate-400"
              }`}>
                Our Projects
              </span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("research")}
            className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-300"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <svg className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${activeTab === "research" ? "text-white" : "text-slate-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className={`font-bold text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wide transition-all duration-300 whitespace-nowrap ${
                activeTab === "research" ? "text-white" : "text-slate-400"
              }`}>
                Research & Innovation
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Slider - Mobile Optimized */}
      <div className="relative z-10 px-2 sm:px-4 md:px-8 lg:px-16">
        {/* Arrows - Mobile Optimized */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 transition-all ${
            canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-gradient-to-br from-red-600 to-red-700 p-2 sm:p-3 md:p-4 lg:p-5 rounded-full border border-red-500 shadow-lg">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 transition-all ${
            canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-gradient-to-br from-red-600 to-red-700 p-2 sm:p-3 md:p-4 lg:p-5 rounded-full border border-red-500 shadow-lg">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        {/* Loading State */}
        {loading ? (
          <div className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 overflow-hidden py-2 sm:py-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[340px] lg:w-[380px] h-[360px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-slate-800/40 rounded-xl sm:rounded-2xl animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide scroll-smooth py-2 sm:py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentData.map((item, index) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-[260px] sm:w-[280px] md:w-[340px] lg:w-[380px] h-[360px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-slate-700 hover:border-red-500 transition-all overflow-hidden shadow-xl">
                  {/* Image with lazy loading */}
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{ filter: 'brightness(0.75)' }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/70 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-8">
                    <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-red-500/20 border border-red-500/50 text-red-400 text-[10px] sm:text-xs md:text-sm font-bold uppercase rounded-lg mb-3 sm:mb-4">
                      {item.category}
                    </span>
                    
                    <div 
                      className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl uppercase leading-tight mb-3 sm:mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    
                    <div className="h-1 bg-gradient-to-r from-red-500 to-red-600 w-8 sm:w-10 md:w-12 rounded-full mb-3 sm:mb-4"></div>
                    
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs sm:text-sm font-bold py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all"
                    >
                      <span>View Details</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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