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
      <div className="relative w-full pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-4 sm:pb-6 md:pb-8">
        
      {/* Tabs */}
      <div className="relative z-10 flex items-center justify-center mb-4 sm:mb-6 md:mb-8 px-4">
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

      {/* Cards Section */}
      <div className="relative w-full py-4 sm:py-6 md:py-8">
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
          <div className="flex overflow-hidden py-4" style={{ gap: '10px' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-shrink-0 w-[85vw] xs:w-[300px] sm:w-[340px] md:w-[360px] lg:w-[380px] xl:w-[400px] h-[380px] sm:h-[420px] md:h-[450px] bg-[#101631]/60 animate-pulse border border-white/10" style={{ transform: 'skewX(-7deg)' }}></div>
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentData.map((item, index) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-shrink-0 w-[85vw] xs:w-[300px] sm:w-[340px] md:w-[360px] lg:w-[380px] xl:w-[400px] h-[380px] sm:h-[420px] md:h-[450px] group cursor-pointer block"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ 
                  marginRight: index < currentData.length - 1 ? '10px' : '0',
                  zIndex: hoveredIndex === index ? 30 : 10 + index,
                  transform: 'skewX(-7deg)'
                }}
              >
                <div className="relative h-full overflow-hidden border border-white/30 transition-all duration-700 transform group-hover:scale-105">
                  
                  {/* Full Background Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                    style={{ objectPosition: 'center center', transform: 'skewX(7deg) scale(1.15)' }}
                  />
                  
                  {/* Light Overlay for Better Text Readability */}
                  <div className="absolute inset-0 bg-black/35"></div>
                  
                  {/* Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  {/* Category Badge - Top Left */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10" style={{ transform: 'skewX(7deg)' }}>
                    <div className="px-4 py-2 sm:px-6 sm:py-2.5 bg-[#CD091B] rounded-full shadow-lg transform group-hover:scale-110 transition-all duration-300">
                      <span className="text-white text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content - Centered */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8" style={{ transform: 'skewX(7deg)' }}>
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
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100" style={{ transform: 'skewX(7deg) scale(0.75)' }}>
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