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

      {/* Tabs - Mobile Optimized */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
        <button
          onClick={() => setActiveTab("projects")}
          className={`w-full sm:w-auto relative px-6 sm:px-10 md:px-16 lg:px-20 py-4 sm:py-5 md:py-7 lg:py-10 rounded-xl sm:rounded-2xl transition-all duration-500 ${
            activeTab === "projects" 
              ? "bg-gradient-to-br from-red-600/90 to-red-700/90 scale-100" 
              : "bg-slate-800/40 border-2 border-slate-700 scale-95 sm:scale-90 opacity-60"
          }`}
        >
          <div className="relative z-10 flex flex-row sm:flex-col items-center gap-3 sm:gap-4">
            <div className={`p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl ${activeTab === "projects" ? "bg-white/10" : "bg-slate-700/30"}`}>
              <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-white font-black text-sm sm:text-lg md:text-xl lg:text-3xl tracking-wider sm:tracking-widest uppercase">Our Projects</span>
          </div>
        </button>

        <button
          onClick={() => setActiveTab("research")}
          className={`w-full sm:w-auto relative px-6 sm:px-10 md:px-16 lg:px-20 py-4 sm:py-5 md:py-7 lg:py-10 rounded-xl sm:rounded-2xl transition-all duration-500 ${
            activeTab === "research" 
              ? "bg-gradient-to-br from-red-600/90 to-red-700/90 scale-100" 
              : "bg-slate-800/40 border-2 border-slate-700 scale-95 sm:scale-90 opacity-60"
          }`}
        >
          <div className="relative z-10 flex flex-row sm:flex-col items-center gap-3 sm:gap-4">
            <div className={`p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl ${activeTab === "research" ? "bg-white/10" : "bg-slate-700/30"}`}>
              <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-white font-black text-sm sm:text-lg md:text-xl lg:text-3xl tracking-wider sm:tracking-widest uppercase">Research & Innovation</span>
          </div>
        </button>
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
    <svg className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-52 lg:h-52 opacity-[0.03]" viewBox="0 0 200 200" fill="none">
      <path d="M100 20 L100 180 M60 60 L140 60 M50 100 L150 100 M40 140 L160 140 M60 60 L40 140 M140 60 L160 140" 
        stroke="#ef4444" strokeWidth="5"/>
      <circle cx="100" cy="20" r="10" fill="#ef4444"/>
    </svg>
    <svg className="absolute bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-28 right-8 sm:right-12 md:right-16 lg:right-24 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-52 lg:h-52 opacity-[0.03]" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="45" stroke="#ef4444" strokeWidth="5" fill="none"/>
      <circle cx="100" cy="100" r="25" fill="#ef4444"/>
    </svg>
  </>
);

export default EngineeringTabsSlider;