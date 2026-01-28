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
          let categoryName = categories.length > 0 ? categories[0].name : "Project";
          
          // Decode HTML entities in category name
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = categoryName;
          categoryName = tempDiv.textContent || tempDiv.innerText || categoryName;
          
          return {
            id: post.id,
            title: post.title.rendered,
            category: categoryName,
            img: "/images/home/1.png",
            url: post.link
          };
        });
        
        const formattedResearch = researchData.map((post) => {
          const categories = post._embedded?.["wp:term"]?.[0] || [];
          let categoryName = categories.length > 0 ? categories[0].name : "Research";
          
          // Decode HTML entities in category name
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = categoryName;
          categoryName = tempDiv.textContent || tempDiv.innerText || categoryName;
          
          // Get excerpt - try multiple sources
          let excerpt = "";
          
          if (post.excerpt?.rendered) {
            excerpt = post.excerpt.rendered;
          } else if (post.content?.rendered) {
            // If no excerpt, create one from content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = post.content.rendered;
            const textContent = tempDiv.textContent || tempDiv.innerText || "";
            excerpt = textContent.trim().substring(0, 250) + '...';
          }
          
          return {
            id: post.id,
            title: post.title.rendered,
            excerpt: excerpt,
            category: categoryName,
            img: "/images/home/1.png",
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
    
    // Scroll by width of one card plus gap
    const cardWidth = container.querySelector('a')?.offsetWidth || 300;
    const scrollAmount = cardWidth + 16; // card width + gap
    
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
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-100 to-white">
      {/* Grid Pattern - Fades from bottom to top */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(200, 200, 200, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 200, 200, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to top, black 0%, transparent 60%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 60%)'
        }}></div>
      </div>

      {/* Tabs Section */}
      <div className="relative w-full pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-4 sm:pb-6 md:pb-8">
        
      {/* Tabs - Exact Copy from Reference */}
      <div className="relative z-10 mb-4 sm:mb-6 md:mb-8 px-4">
        <div className="relative mx-auto" style={{ maxWidth: '90rem' }}>
          
          {/* Main Horizontal Transmission Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"></div>
          
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 md:gap-6 relative px-4">
            {/* Our Projects Tab */}
            <div className="relative flex-1 min-w-[200px] md:min-w-0">
              
              {/* Connection Point on Main Line (Insulator) */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-3 h-3 bg-white border-2 border-gray-400 rounded-full shadow-md z-20"></div>
              
              {/* Vertical Beam Down */}
              <div className={`
                hidden md:block absolute left-1/2 -translate-x-1/2 top-9 w-0.5 h-6 transition-all duration-300
                ${activeTab === "projects" ? 'bg-gray-600' : 'bg-gray-400'}
              `}></div>

              {/* Tab Button (Transformer Box Style) */}
              <button
                onClick={() => setActiveTab("projects")}
                className={`
                  w-full md:mt-14 px-6 py-4 text-sm md:text-base font-semibold
                  transition-all duration-300 ease-out rounded-lg border-2 relative
                  ${activeTab === "projects"
                    ? 'border-gray-300 text-gray-900 shadow-xl' 
                    : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'
                  }
                `}
                style={activeTab === "projects" ? {backgroundColor: '#F3F3F3'} : {}}
              >
                <span className="relative z-10 tracking-wide uppercase">Our Projects</span>
                
                {/* Active Power Indicator */}
                {activeTab === "projects" && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center">
                    <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-gray-600 rounded-full animate-ping"></div>
                  </div>
                )}
                
                {/* Power Line to Content */}
                {activeTab === "projects" && (
                  <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                    <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-gray-300"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rotate-45 bg-gray-400 -mb-1"></div>
                  </div>
                )}
              </button>
            </div>

            {/* Research & Innovation Tab */}
            <div className="relative flex-1 min-w-[200px] md:min-w-0">
              
              {/* Connection Point on Main Line (Insulator) */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-3 h-3 bg-white border-2 border-gray-400 rounded-full shadow-md z-20"></div>
              
              {/* Vertical Beam Down */}
              <div className={`
                hidden md:block absolute left-1/2 -translate-x-1/2 top-9 w-0.5 h-6 transition-all duration-300
                ${activeTab === "research" ? 'bg-gray-600' : 'bg-gray-400'}
              `}></div>

              {/* Tab Button (Transformer Box Style) */}
              <button
                onClick={() => setActiveTab("research")}
                className={`
                  w-full md:mt-14 px-6 py-4 text-sm md:text-base font-semibold
                  transition-all duration-300 ease-out rounded-lg border-2 relative
                  ${activeTab === "research"
                    ? 'border-gray-300 text-gray-900 shadow-xl' 
                    : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'
                  }
                `}
                style={activeTab === "research" ? {backgroundColor: '#F3F3F3'} : {}}
              >
                <span className="relative z-10 tracking-wide uppercase">Research & Innovation</span>
                
                {/* Active Power Indicator */}
                {activeTab === "research" && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center">
                    <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-gray-600 rounded-full animate-ping"></div>
                  </div>
                )}
                
                {/* Power Line to Content */}
                {activeTab === "research" && (
                  <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                    <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-gray-300"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rotate-45 bg-gray-400 -mb-1"></div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative w-full pt-0 sm:pt-2 md:pt-4 pb-2 sm:pb-3 md:pb-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" style={{ gap: '16px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full h-[320px] sm:h-[340px] md:h-[360px] lg:h-[380px] bg-[#101631]/60 animate-pulse border border-white/10 rounded-xl"></div>
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth py-4 gap-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentData.map((item, index) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-shrink-0 w-[calc(25%-12px)] min-w-[280px] h-[320px] sm:h-[340px] md:h-[360px] lg:h-[380px] group cursor-pointer block"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ 
                  zIndex: hoveredIndex === index ? 30 : 10 + index
                }}
              >
                <div className="relative h-full overflow-hidden border border-white/30 rounded-xl transition-all duration-700 transform group-hover:scale-105">
                  
                  {/* Full Background Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                    style={{ objectPosition: 'center center' }}
                  />
                  
                  {/* Light Overlay for Better Text Readability */}
                  <div className="absolute inset-0 bg-black/35"></div>
                  
                  {/* Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  {/* Category Badge - Top Left */}
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                    <div className="px-3 py-1 sm:px-4 sm:py-1.5 bg-[#CD091B] rounded-md shadow-md">
                      <span className="text-white text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content - Centered */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
                    <div className="text-center max-w-md space-y-3 sm:space-y-4">
                      {activeTab === "projects" ? (
                        <>
                          {/* Simple Decorative Element */}
                          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                            <div className="h-px w-8 sm:w-12 bg-[#CD091B]"></div>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#CD091B] rounded-full"></div>
                            <div className="h-px w-8 sm:w-12 bg-[#CD091B]"></div>
                          </div>
                          
                          {/* Title */}
                          <h3 
                            className="text-white font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-tight px-2"
                            style={{ 
                              textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.9)'
                            }}
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          />
                          
                          {/* Bottom Decorative Element */}
                          <div className="flex items-center justify-center gap-2 mt-2 sm:mt-3">
                            <div className="h-px w-8 sm:w-12 bg-[#CD091B]"></div>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#CD091B] rounded-full"></div>
                            <div className="h-px w-8 sm:w-12 bg-[#CD091B]"></div>
                          </div>
                        </>
                      ) : (
                        <div className="space-y-3 sm:space-y-4">
                          {/* Title for Research */}
                          <h3 
                            className="text-white font-extrabold text-sm sm:text-base md:text-lg lg:text-xl leading-tight tracking-tight px-2"
                            style={{ 
                              textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.9)'
                            }}
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          />
                          
                          {/* Divider */}
                          {item.excerpt && (
                            <>
                              <div className="flex items-center justify-center gap-2">
                                <div className="h-px w-8 sm:w-10 bg-white/50"></div>
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/50 rounded-full"></div>
                                <div className="h-px w-8 sm:w-10 bg-white/50"></div>
                              </div>
                              
                              {/* Excerpt */}
                              <div 
                                className="text-white/95 font-medium text-[11px] sm:text-xs md:text-sm leading-relaxed line-clamp-3 px-2"
                                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9)' }}
                                dangerouslySetInnerHTML={{ __html: item.excerpt }}
                              />
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Hover Indicator - Bottom Right Arrow */}
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <div className="bg-white p-2 sm:p-3 rounded-full shadow-2xl group-hover:scale-125 transition-transform">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#CD091B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
        </div>
      </div>
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default EngineeringTabsSlider; 