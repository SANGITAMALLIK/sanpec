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
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="absolute inset-0 animate-pulse-slow" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(239, 68, 68, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          backgroundPosition: '25px 25px'
        }}></div>
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
                <div className="relative h-full rounded-3xl overflow-hidden bg-[#0f1729] border border-white/5 group-hover:border-[#CD091B]/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#CD091B]/20">
                  
                  <div className="relative h-3/5 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      style={{ filter: 'brightness(0.8)' }}
                    />
                    <div className="absolute inset-0 bg-[#101631]/40"></div>
                    
                    <div className="absolute top-5 left-5">
                      <div className="flex items-center gap-2 px-4 py-2 bg-[#CD091B]/90 backdrop-blur-sm rounded-lg">
                        <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#0a0e1a] group-hover:bg-[#CD091B] transition-all duration-500">
                    <div>
                      <h3 
                        className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-tight line-clamp-2 mb-4"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      
                      <div className="h-1 w-16 bg-[#CD091B] group-hover:bg-white rounded-full mb-4 transition-all duration-500"></div>
                    </div>
                    
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

export default EngineeringTabsSlider;