"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';

const EngineeringTabsSlider = () => {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [research, setResearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Pagination states for mobile
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // WHY SANPEC Static Data
  const whySanpecData = [
    {
      id: 1,
      title: "Strategic Thinking & Innovation",
      excerpt: "As global energy infrastructure faces increasing complexity, innovation in transmission...",
      category: "Excellence",
      img: "/images/why_sanpec/80.png",
      url: "/why-sanpec#strategic-thinking"
    },
    {
      id: 2,
      title: "The SunZia Story",
      excerpt: "Ajay Mallik, P.E. President and CEO of SANPEC Engineering, shares his team's critical role...",
      category: "Pattern",
      img: "/images/why_sanpec/83.png",
      url: "/why-sanpec#sunzia-story"
    },
    {
      id: 3,
      title: "365 Approach",
      excerpt: "At SANPEC, we embrace a '365' approach, three strategic directions, six...",
      category: "Excellence",
      img: "/images/why_sanpec/82.png",
      url: "/why-sanpec#Our-approach"
    },
    {
      id: 4,
      title: "Strategic Positioning",
      excerpt: "As a leading transmission and distribution & engineering company, SANPEC is committed to engineering...",
      category: "Pillars",
      img: "/images/why_sanpec/81.png",
      url: "/why-sanpec#strategic-positioning"
    }
  ];

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
          
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = categoryName;
          categoryName = tempDiv.textContent || tempDiv.innerText || categoryName;
          
          return {
            id: post.id,
            title: post.title.rendered,
            category: categoryName,
            img: "/images/home/1.png",
            slug: post.slug,
            url: `/Projects/transmission/${post.slug}`
          };
        });
        
        const formattedResearch = researchData.map((post) => {
          const categories = post._embedded?.["wp:term"]?.[0] || [];
          let categoryName = categories.length > 0 ? categories[0].name : "Research";
          
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = categoryName;
          categoryName = tempDiv.textContent || tempDiv.innerText || categoryName;
          
          let excerpt = "";
          
          if (post.excerpt?.rendered) {
            excerpt = post.excerpt.rendered;
          } else if (post.content?.rendered) {
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
            slug: post.slug,
            url: `/research-and-innovation/${post.slug}`
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

  // Reset to page 1 when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const checkScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;
    
    setCanScrollLeft(container.scrollLeft > 10);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    
    const scrollAmount = 400;
    
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

  const currentData = activeTab === "projects" ? projects : activeTab === "research" ? research : whySanpecData;

  // Calculate pagination
  const totalPages = Math.ceil(currentData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = currentData.slice(startIndex, endIndex);

  return (
    <div className="w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* amit TOP DECORATIVE LINE - Similar to your image */}
      <div className="max-w-[1600px] mx-auto mb-8 md:mb-12">
        <div className="flex items-center justify-center gap-3">
          <div className="h-[2px] w-20 sm:w-32 md:w-48 bg-gradient-to-r from-transparent to-[#CD091B]"></div>
          <div className="relative">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#CD091B]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
            </svg>
          </div>
          <div className="h-[2px] w-20 sm:w-32 md:w-48 bg-gradient-to-l from-transparent to-[#CD091B]"></div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* VERTICAL TABS - LEFT SIDE */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-8">
              
              {/* Tabs with Vertical Line */}
              <div className="relative space-y-4 md:space-y-6 pb-12 md:pb-16">
                
                {/* Vertical Line - Hidden on mobile */}
                <div className="hidden md:block absolute left-6 top-0 bottom-12 w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>

                {/* Projects Tab */}
                <div className="relative md:pl-16">
                  {/* Connector - Hidden on mobile */}
                  <div className="hidden md:block absolute left-4 top-8 w-4 h-4 bg-gray-50 border-2 border-gray-400 rounded-full"></div>
                  <div className={`hidden md:block absolute left-7 top-9 h-0.5 w-9 ${activeTab === "projects" ? 'bg-[#CD091B]' : 'bg-gray-400'}`}></div>

                  <button
                    onClick={() => setActiveTab("projects")}
                    className={`w-full text-left p-4 md:p-6 rounded-xl border-2 transition-all ${
                      activeTab === "projects"
                        ? 'border-[#CD091B] bg-white shadow-lg scale-105' 
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                  >
                    <h3 className="text-xl md:text-2xl font-black text-gray-900">Our Projects</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">Transmission and Distribution</p>
                    
                    {activeTab === "projects" && (
                      <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2">
                        <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-[#CD091B] rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </button>
                </div>

                {/* Research Tab */}
                <div className="relative md:pl-16">
                  {/* Connector - Hidden on mobile */}
                  <div className="hidden md:block absolute left-4 top-8 w-4 h-4 bg-gray-50 border-2 border-gray-400 rounded-full"></div>
                  <div className={`hidden md:block absolute left-7 top-9 h-0.5 w-9 ${activeTab === "research" ? 'bg-[#CD091B]' : 'bg-gray-400'}`}></div>

                  <button
                    onClick={() => setActiveTab("research")}
                    className={`w-full text-left p-4 md:p-6 rounded-xl border-2 transition-all ${
                      activeTab === "research"
                        ? 'border-[#CD091B] bg-white shadow-lg scale-105' 
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                  >
                    <h3 className="text-xl md:text-2xl font-black text-gray-900">Research & Innovation</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">Technical Papers</p>
                    
                    {activeTab === "research" && (
                      <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2">
                        <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-[#CD091B] rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </button>
                </div>

                {/* WHY SANPEC Tab */}
                <div className="relative md:pl-16">
                  {/* Connector - Hidden on mobile */}
                  <div className="hidden md:block absolute left-4 top-8 w-4 h-4 bg-gray-50 border-2 border-gray-400 rounded-full"></div>
                  <div className={`hidden md:block absolute left-7 top-9 h-0.5 w-9 ${activeTab === "whysanpec" ? 'bg-[#CD091B]' : 'bg-gray-400'}`}></div>

                  <button
                    onClick={() => setActiveTab("whysanpec")}
                    className={`w-full text-left p-4 md:p-6 rounded-xl border-2 transition-all ${
                      activeTab === "whysanpec"
                        ? 'border-[#CD091B] bg-white shadow-lg scale-105' 
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                  >
                    <h3 className="text-xl md:text-2xl font-black text-gray-900">Why SANPEC</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">Building the Grid of the Future</p>
                    
                    {activeTab === "whysanpec" && (
                      <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2">
                        <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-[#CD091B] rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </button>
                </div>

                {/* Tower Base Foundation - AT BOTTOM - Hidden on mobile */}
                <div className="hidden md:block absolute left-2 bottom-0 w-9 h-12 bg-gradient-to-b from-gray-400 to-gray-500 opacity-30" 
                     style={{clipPath: 'polygon(32% 0%, 70% 0%, 100% 100%, 0% 100%)'}}></div>
              </div>
            </div>
          </div>

          {/* GRID CONTENT - RIGHT SIDE */}
          <div className="flex-1">
            <div className="relative">

              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="h-64 md:h-80 bg-gray-200 animate-pulse rounded-xl"></div>
                  ))}
                </div>
              ) : (
                <>
                  <div className={`grid gap-4 md:gap-6 ${
                    activeTab === "whysanpec" 
                      ? 'grid-cols-1 lg:grid-cols-2' 
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  }`}>
                    {activeTab === "whysanpec" ? (
                      // WHY SANPEC - NEW CREATIVE DESIGN (No pagination - show all)
                      currentData.map((item, index) => (
                        <Link
                          key={item.id}
                          href={item.url}
                          className="group block"
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200 group-hover:shadow-2xl transition-all duration-500 h-full">
                            
                            {/* Image Section - Top */}
                            <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                              <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                              />
                              
                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10"></div>
                            </div>

                            {/* Content Section - Bottom */}
                            <div className="p-6 md:p-8 space-y-4 bg-white">
                              
                              {/* Title */}
                              <h3 
                                className="text-gray-900 font-black text-xl md:text-2xl leading-tight group-hover:text-[#CD091B] transition-colors duration-300"
                                dangerouslySetInnerHTML={{ __html: item.title }}
                              />
                              
                              {/* Decorative Divider */}
                              <div className="flex items-center gap-3">
                                <div className="h-1 w-12 bg-gradient-to-r from-[#CD091B] to-transparent rounded-full"></div>
                                <div className="w-2 h-2 bg-[#CD091B] rounded-full"></div>
                              </div>
                              
                              {/* Excerpt */}
                              <div 
                                className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3"
                                dangerouslySetInnerHTML={{ __html: item.excerpt }}
                              />
                              
                              {/* Read More Link */}
                              <div className="pt-4 flex items-center gap-2 text-[#CD091B] font-bold text-sm group-hover:gap-4 transition-all duration-300">
                                <span>Explore More</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </div>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#CD091B]/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Bottom Border Animation */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#CD091B] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      // PROJECTS & RESEARCH - Use paginated data on mobile, full data on desktop
                      <>
                        {/* Desktop: Show all data */}
                        <div className="hidden md:contents">
                          {currentData.map((item, index) => (
                            <Link
                              key={item.id}
                              href={item.url}
                              className="relative h-[300px] md:h-[350px] group block"
                              onMouseEnter={() => setHoveredIndex(index)}
                              onMouseLeave={() => setHoveredIndex(null)}
                            >
                              <div className="relative h-full overflow-hidden rounded-xl shadow-lg border-2 border-white/50 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500">
                                
                                {/* Background Image */}
                                <img
                                  src={item.img}
                                  alt={item.title}
                                  loading="lazy"
                                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                
                                {/* Category Badge - Top Left */}
                                <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10">
                                  <div className="px-3 md:px-4 py-1 md:py-1.5 bg-[#CD091B] rounded-lg shadow-lg">
                                    <span className="text-white text-xs font-bold uppercase tracking-wide">{item.category}</span>
                                  </div>
                                </div>
                                
                                {/* Content - CENTER */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6">
                                  <div className="text-center max-w-md space-y-3 md:space-y-4">
                                    
                                    {activeTab === "projects" ? (
                                      <>
                                        {/* Decorative Element */}
                                        
                                        
                                        {/* Title */}
                                        <h3 
                                          className="text-white font-extrabold text-lg md:text-xl leading-tight tracking-tight px-2"
                                          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.9)' }}
                                          dangerouslySetInnerHTML={{ __html: item.title }}
                                        />
                                        
                                        {/* Bottom Decorative Element */}
                                        <div className="flex items-center justify-center gap-2 mt-2 md:mt-3">
                                          <div className="h-px w-8 md:w-12 bg-[#CD091B]"></div>
                                          <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#CD091B] rounded-full"></div>
                                          <div className="h-px w-8 md:w-12 bg-[#CD091B]"></div>
                                        </div>
                                      </>
                                    ) : (
                                      <div className="space-y-3 md:space-y-4">
                                        {/* Title for Research */}
                                        <h3 
                                          className="text-white font-extrabold text-base md:text-lg leading-tight tracking-tight px-2"
                                          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.9)' }}
                                          dangerouslySetInnerHTML={{ __html: item.title }}
                                        />
                                        
                                        {/* Divider */}
                                        {item.excerpt && (
                                          <>
                                            <div className="flex items-center justify-center gap-2">
                                              <div className="h-px w-8 md:w-10 bg-white/50"></div>
                                              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white/50 rounded-full"></div>
                                              <div className="h-px w-8 md:w-10 bg-white/50"></div>
                                            </div>
                                            
                                            {/* Excerpt */}
                                            <div 
                                              className="text-white/95 font-medium text-xs md:text-sm leading-relaxed line-clamp-3 px-2"
                                              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9)' }}
                                              dangerouslySetInnerHTML={{ __html: item.excerpt }}
                                            />
                                          </>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                {/* Hover Arrow - Bottom Right */}
                                <div className="absolute bottom-4 md:bottom-5 right-4 md:right-5 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                                  <div className="bg-white p-2 md:p-3 rounded-full shadow-2xl group-hover:bg-[#CD091B] transition-colors">
                                    <svg className="w-4 md:w-5 h-4 md:h-5 text-[#CD091B] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Mobile: Show paginated data */}
                        <div className="md:hidden contents">
                          {paginatedData.map((item, index) => (
                            <Link
                              key={item.id}
                              href={item.url}
                              className="relative h-[300px] md:h-[350px] group block"
                              onMouseEnter={() => setHoveredIndex(index)}
                              onMouseLeave={() => setHoveredIndex(null)}
                            >
                              <div className="relative h-full overflow-hidden rounded-xl shadow-lg border-2 border-white/50 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500">
                                
                                {/* Background Image */}
                                <img
                                  src={item.img}
                                  alt={item.title}
                                  loading="lazy"
                                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                
                                {/* Category Badge - Top Left */}
                                <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10">
                                  <div className="px-3 md:px-4 py-1 md:py-1.5 bg-[#CD091B] rounded-lg shadow-lg">
                                    <span className="text-white text-xs font-bold uppercase tracking-wide">{item.category}</span>
                                  </div>
                                </div>
                                
                                {/* Content - CENTER */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6">
                                  <div className="text-center max-w-md space-y-3 md:space-y-4">
                                    
                                    {activeTab === "projects" ? (
                                      <>
                                        {/* Decorative Element */}
                                        <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
                                          <div className="h-px w-8 md:w-12 bg-[#CD091B]"></div>
                                          <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#CD091B] rounded-full"></div>
                                          <div className="h-px w-8 md:w-12 bg-[#CD091B]"></div>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 
                                          className="text-white font-extrabold text-lg md:text-xl leading-tight tracking-tight px-2"
                                          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.9)' }}
                                          dangerouslySetInnerHTML={{ __html: item.title }}
                                        />
                                        
                                        {/* Bottom Decorative Element */}
                                        <div className="flex items-center justify-center gap-2 mt-2 md:mt-3">
                                          <div className="h-px w-8 md:w-12 bg-[#CD091B]"></div>
                                          <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#CD091B] rounded-full"></div>
                                          <div className="h-px w-8 md:w-12 bg-[#CD091B]"></div>
                                        </div>
                                      </>
                                    ) : (
                                      <div className="space-y-3 md:space-y-4">
                                        {/* Title for Research */}
                                        <h3 
                                          className="text-white font-extrabold text-base md:text-lg leading-tight tracking-tight px-2"
                                          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.9)' }}
                                          dangerouslySetInnerHTML={{ __html: item.title }}
                                        />
                                        
                                        {/* Divider */}
                                        {item.excerpt && (
                                          <>
                                            <div className="flex items-center justify-center gap-2">
                                              <div className="h-px w-8 md:w-10 bg-white/50"></div>
                                              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white/50 rounded-full"></div>
                                              <div className="h-px w-8 md:w-10 bg-white/50"></div>
                                            </div>
                                            
                                            {/* Excerpt */}
                                            <div 
                                              className="text-white/95 font-medium text-xs md:text-sm leading-relaxed line-clamp-3 px-2"
                                              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9)' }}
                                              dangerouslySetInnerHTML={{ __html: item.excerpt }}
                                            />
                                          </>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                {/* Hover Arrow - Bottom Right */}
                                <div className="absolute bottom-4 md:bottom-5 right-4 md:right-5 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                                  <div className="bg-white p-2 md:p-3 rounded-full shadow-2xl group-hover:bg-[#CD091B] transition-colors">
                                    <svg className="w-4 md:w-5 h-4 md:h-5 text-[#CD091B] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                {/* Pagination - Only for Projects & Research, Only on Mobile */}
{activeTab !== "whysanpec" && totalPages > 1 && (
  <div className="md:hidden mt-8 flex items-center justify-center gap-3">
    {/* Previous Arrow */}
    <button
      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
        currentPage === 1
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-[#CD091B] text-white hover:bg-[#a00716] shadow-lg'
      }`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    {/* Dots */}
    <div className="flex gap-2">
      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentPage(idx + 1)}
          className={`transition-all rounded-full ${
            currentPage === idx + 1
              ? 'w-8 h-3 bg-[#CD091B]'
              : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
          }`}
        />
      ))}
    </div>

    {/* Next Arrow */}
    <button
      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
        currentPage === totalPages
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-[#CD091B] text-white hover:bg-[#a00716] shadow-lg'
      }`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
)}
                </>
              )}
            </div>
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
      `}</style>
    </div>
  );
};

export default EngineeringTabsSlider;