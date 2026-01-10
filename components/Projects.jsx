"use client";
import React, { useEffect, useRef, useState } from "react";

const EngineeringTabsSlider = () => {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [research, setResearch] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
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
      }
    };

    fetchData();
  }, []);

  const checkScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;
    
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    
    const scrollAmount = 800;
    const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    container.scrollTo({
      left: targetScroll,
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
    <div className="relative w-full overflow-hidden py-12 md:py-20 min-h-screen" style={{ background: '#0a0e1a' }}>
      <PowerStructureSVG />
      
      {/* Animated circuit background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ef4444 1px, transparent 0)',
          backgroundSize: '50px 50px',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
      </div>

      {/* Title Section */}
      <div className="relative z-10 text-center mb-12 md:mb-16 px-4">
        <div className="inline-block mb-6">
          <div className="flex items-center gap-3 text-red-500 text-sm md:text-base font-bold tracking-[0.3em] mb-3">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-red-500"></div>
            ENGINEERING EXCELLENCE
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent via-red-500 to-red-500"></div>
          </div>
        </div>
       
      </div>

      {/* Big Tabs Design */}
      <div className="relative z-10 flex items-center justify-center gap-6 md:gap-8 mb-12 md:mb-16 px-4">
        {/* Projects Tab */}
        <button
          onClick={() => setActiveTab("projects")}
          className={`group relative transition-all duration-500 ${
            activeTab === "projects" ? "scale-100" : "scale-90 opacity-60 hover:opacity-80"
          }`}
        >
          <div className="relative px-12 md:px-20 py-6 md:py-10">
            {/* Background with border */}
            <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
              activeTab === "projects" 
                ? "bg-gradient-to-br from-red-600/90 to-red-700/90 shadow-2xl" 
                : "bg-slate-800/40 border-2 border-slate-700"
            }`}></div>
            
            {/* Animated glow */}
            {activeTab === "projects" && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 blur-2xl opacity-60 animate-pulse"></div>
            )}

            {/* Corner accents */}
            <div className={`absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 transition-all duration-500 ${
              activeTab === "projects" ? "border-white" : "border-slate-600"
            }`}></div>
            <div className={`absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 transition-all duration-500 ${
              activeTab === "projects" ? "border-white" : "border-slate-600"
            }`}></div>
            <div className={`absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 transition-all duration-500 ${
              activeTab === "projects" ? "border-white" : "border-slate-600"
            }`}></div>
            <div className={`absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 transition-all duration-500 ${
              activeTab === "projects" ? "border-white" : "border-slate-600"
            }`}></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4">
              <div className={`p-3 md:p-4 rounded-xl transition-all duration-500 ${
                activeTab === "projects" ? "bg-white/10" : "bg-slate-700/30"
              }`}>
                <svg className="w-10 h-10 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-white font-black text-xl md:text-3xl tracking-widest uppercase">
                Our Projects
              </span>
            </div>
          </div>
        </button>

        {/* Divider */}
        <div className="hidden md:flex flex-col items-center gap-2">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-red-500 to-transparent"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <div className="w-px h-20 bg-gradient-to-t from-transparent via-red-500 to-transparent"></div>
        </div>

        {/* Research Tab */}
        <button
          onClick={() => setActiveTab("research")}
          className={`group relative transition-all duration-500 ${
            activeTab === "research" ? "scale-100" : "scale-90 opacity-60 hover:opacity-80"
          }`}
        >
          <div className="relative px-12 md:px-20 py-6 md:py-10">
            {/* Background with border */}
            <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
              activeTab === "research" 
                ? "bg-gradient-to-br from-red-600/90 to-red-700/90 shadow-2xl" 
                : "bg-slate-800/40 border-2 border-slate-700"
            }`}></div>
            
            {/* Animated glow */}
            {activeTab === "research" && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 blur-2xl opacity-60 animate-pulse"></div>
            )}

            {/* Corner accents */}
            <div className={`absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 transition-all duration-500 ${
              activeTab === "research" ? "border-white" : "border-slate-600"
            }`}></div>
            <div className={`absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 transition-all duration-500 ${
              activeTab === "research" ? "border-white" : "border-slate-600"
            }`}></div>
            <div className={`absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 transition-all duration-500 ${
              activeTab === "research" ? "border-white" : "border-slate-600"
            }`}></div>
            <div className={`absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 transition-all duration-500 ${
              activeTab === "research" ? "border-white" : "border-slate-600"
            }`}></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4">
              <div className={`p-3 md:p-4 rounded-xl transition-all duration-500 ${
                activeTab === "research" ? "bg-white/10" : "bg-slate-700/30"
              }`}>
                <svg className="w-10 h-10 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-white font-black text-xl md:text-3xl tracking-widest uppercase">
                Research and Innovation
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* Slider with Arrows */}
      <div className="relative z-10 px-4 md:px-16">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 group transition-all duration-300 ${
            canScrollLeft ? 'opacity-100 hover:scale-110' : 'opacity-30 cursor-not-allowed'
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-red-600 to-red-700 p-4 md:p-5 rounded-full border-2 border-red-500 shadow-2xl">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 group transition-all duration-300 ${
            canScrollRight ? 'opacity-100 hover:scale-110' : 'opacity-30 cursor-not-allowed'
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-red-600 to-red-700 p-4 md:p-5 rounded-full border-2 border-red-500 shadow-2xl">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </button>

        {/* Slider Container */}
        { (
          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth py-4"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {currentData.map((item, index) => (
              <div
                key={item.id}
                className="relative transition-all duration-300 ease-out group flex-shrink-0"
                style={{
                  width: window.innerWidth < 640 ? "300px" : window.innerWidth < 768 ? "340px" : "380px",
                  height: window.innerWidth < 640 ? "420px" : window.innerWidth < 768 ? "460px" : "500px",
                  transform: hoveredIndex === index ? "translateY(-12px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card container */}
                <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl border-2 border-slate-700 hover:border-red-500 transition-all duration-500 shadow-2xl">
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      filter: hoveredIndex === index ? 'brightness(1) contrast(1.1)' : 'brightness(0.75) contrast(0.9)'
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      background: `linear-gradient(to top, 
                        rgba(10, 14, 26, 0.98) 0%, 
                        rgba(10, 14, 26, 0.90) 30%,
                        rgba(10, 14, 26, 0.5) 60%, 
                        transparent 100%)`,
                    }}
                  />

                  {/* Tech grid overlay */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(239, 68, 68, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.4) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Corner decorations */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-red-500 transition-all duration-500"
                    style={{ opacity: hoveredIndex === index ? 1 : 0.4 }}
                  ></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-red-500 transition-all duration-500"
                    style={{ opacity: hoveredIndex === index ? 1 : 0.4 }}
                  ></div>

                  {/* Top accent line */}
                  <div 
                    className="absolute top-0 left-0 right-0 bg-gradient-to-r from-transparent via-red-500 to-transparent transition-all duration-500"
                    style={{
                      height: hoveredIndex === index ? '3px' : '2px',
                      opacity: hoveredIndex === index ? 1 : 0.5
                    }}
                  ></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    {/* Category badge */}
                    <div className="mb-4">
                      <span className="inline-block px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 text-red-400 text-xs md:text-sm font-bold uppercase tracking-wider rounded-lg">
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <div 
                      className="text-white font-bold tracking-wide uppercase leading-tight mb-4 transition-all duration-300 line-clamp-3"
                      style={{
                        fontSize: hoveredIndex === index ? '1.4rem' : '1.2rem',
                        textShadow: "3px 3px 10px rgba(0, 0, 0, 0.9)",
                      }}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    
                    {/* Red accent bar */}
                    <div 
                      className="h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500 transition-all duration-500 mb-4 rounded-full"
                      style={{ width: hoveredIndex === index ? '80px' : '50px' }}
                    ></div>
                    
                    {/* View button */}
                    <div 
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: hoveredIndex === index ? '70px' : '0',
                        opacity: hoveredIndex === index ? 1 : 0
                      }}
                    >
                      <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-sm md:text-base font-bold py-3 md:py-4 px-8 md:px-10 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 flex items-center gap-3">
                        <span><a href={item.url} target="_blank" rel="noopener noreferrer">View Details</a></span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                {hoveredIndex === index && (
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-2xl blur-2xl opacity-50 -z-10 animate-pulse"></div>
                )}
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

// Power Structure SVG Background Component
const PowerStructureSVG = () => {
  return (
    <>
      {/* Transmission Tower - Top Right */}
      <svg className="absolute top-10 right-10 w-32 h-32 md:w-52 md:h-52 opacity-[0.03]" viewBox="0 0 200 200" fill="none">
        <path d="M100 20 L100 180 M60 60 L140 60 M50 100 L150 100 M40 140 L160 140 M60 60 L40 140 M140 60 L160 140 M80 60 L80 180 M120 60 L120 180" 
          stroke="#ef4444" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="100" cy="20" r="10" fill="#ef4444"/>
        <circle cx="60" cy="60" r="7" fill="#ef4444"/>
        <circle cx="140" cy="60" r="7" fill="#ef4444"/>
      </svg>

      {/* Power Lines - Left Side */}
      <svg className="absolute top-1/3 left-10 w-48 h-48 md:w-72 md:h-72 opacity-[0.03]" viewBox="0 0 200 200" fill="none">
        <path d="M20 100 Q60 80, 100 100 T180 100" stroke="#ef4444" strokeWidth="4" fill="none"/>
        <path d="M20 120 Q60 100, 100 120 T180 120" stroke="#ef4444" strokeWidth="4" fill="none"/>
        <circle cx="20" cy="100" r="6" fill="#ef4444"/>
        <circle cx="100" cy="100" r="6" fill="#ef4444"/>
        <circle cx="180" cy="100" r="6" fill="#ef4444"/>
      </svg>

      {/* Lightning Bolt - Bottom Left */}
      <svg className="absolute bottom-24 left-16 w-28 h-28 md:w-48 md:h-48 opacity-[0.03]" viewBox="0 0 200 200" fill="none">
        <path d="M100 30 L70 100 L110 100 L80 170" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="100" cy="100" r="75" stroke="#ef4444" strokeWidth="4" fill="none"/>
      </svg>

      {/* Gear - Bottom Right */}
      <svg className="absolute bottom-28 right-24 w-32 h-32 md:w-52 md:h-52 opacity-[0.03]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="45" stroke="#ef4444" strokeWidth="5" fill="none"/>
        <circle cx="100" cy="100" r="25" fill="#ef4444"/>
        <path d="M100 35 L100 15 M100 165 L100 185 M35 100 L15 100 M165 100 L185 100 M60 60 L45 45 M140 140 L155 155 M140 60 L155 45 M60 140 L45 155" 
          stroke="#ef4444" strokeWidth="7" strokeLinecap="round"/>
      </svg>

      {/* Circuit Pattern - Top Center */}
      <svg className="absolute top-20 left-1/2 -translate-x-1/2 w-40 h-40 md:w-64 md:h-64 opacity-[0.03]" viewBox="0 0 200 200" fill="none">
        <path d="M50 50 L50 100 L100 100 L100 150 M100 100 L150 100 L150 50" 
          stroke="#ef4444" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="10" fill="#ef4444"/>
        <circle cx="100" cy="100" r="10" fill="#ef4444"/>
        <circle cx="150" cy="50" r="10" fill="#ef4444"/>
        <circle cx="100" cy="150" r="10" fill="#ef4444"/>
        <circle cx="150" cy="100" r="10" fill="#ef4444"/>
      </svg>
    </>
  );
};

export default EngineeringTabsSlider;