'use client';
import React, { useRef, useState, useEffect } from 'react';

const EngineeringPublications = () => {
  const publications = [
    {
      id: 1,
      category: "Transmission & Substation Design & Operation Symposium",
      title: "WHY SOURCE INSPECTION IS CRITICAL FOR TRANSMISSION STRUCTURES",
      authors: "Ajay Mallik, PE | Clinton Char, PE",
      image: "/images/r&d/1.png"
    },
    {
      id: 2,
      category: "Transmission & Substation Design & Operation Symposium",
      title: "SILICON EFFECT COLOR TRANSFORMATION ON GALV. STEEL LATTICE TOWERS",
      authors: "Ajay Mallik, PE | Clinton Char, PE",
      image: "/images/r&d/2.webp"
    },
    {
      id: 3,
      category: "Transmission & Substation Design & Operation Symposium",
      title: "CONSIDERATION OF SOCIO-ECONOMIC VALUES IN TRANSMISSION LINE ENGINEERING",
      authors: "Ajay Mallik, PE | Clinton Char, PE",
      image: "/images/r&d/3.webp"
    },
    {
      id: 4,
      category: "Transmission & Substation Design & Operation Symposium",
      title: "RISK MITIGATION PLANNING IN SUCCESSFUL EPC PROJECT",
      authors: "Ajay Mallik, PE | Clinton Char, PE",
      image: "/images/r&d/4.webp"
    },
    {
      id: 5,
      category: "American Society of Civil Engineers",
      title: "SUSTAINABILITY APPROACH WITH RESILIENCY PLANNING IN TRANSMISSION LINE ENGINEERING",
      authors: "Ajay Mallik, PE | Sangita Mallik, ENV SP",
      image: "/images/r&d/8.webp"
    },
    {
      id: 6,
      category: "EDM",
      title: "SUSTAINABILITY APPROACH IN TRANSMISSION LINE ENGINEERING",
      authors: "Ajay Mallik, PE | Clinton Char, PE",
      image: "/images/r&d/5.webp"
    },
    {
      id: 7,
      category: "EDM",
      title: "LESSON LEARNED ON THE CHOICE OF MATERIAL FOR LATTICE STEEL TRANSMISSION TOWER STRUCTURES",
      authors: "Ajay Mallik, PE | Clinton Char, PE",
      image: "/images/r&d/9.webp"
    },
    {
      id: 8,
      category: "IEEE",
      title: "SILICON EFFECT COLOR TRANSFORMATION ON GALVANIZED STEEL LATTICE TOWERS",
      authors: "Ajay Mallik, PE | Clinton Char, PE",
      image: "/images/r&d/10.webp"
    }
  ];

  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
      
      const scrollPosition = scrollLeft;
      const cardWidth = scrollContainerRef.current.querySelector('.publication-card')?.offsetWidth || 0;
      const gap = 32;
      const calculatedIndex = Math.round(scrollPosition / (cardWidth + gap));
      setCurrentIndex(calculatedIndex);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.publication-card')?.offsetWidth || 0;
      const gap = 32;
      const scrollAmount = (cardWidth + gap) * itemsPerView;
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.publication-card')?.offsetWidth || 0;
      const gap = 32;
      const scrollPosition = index * (cardWidth + gap) * itemsPerView;
      
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, transparent 95%, #D62B2B 100%),
                           linear-gradient(180deg, transparent 95%, #D62B2B 100%)`,
          backgroundSize: '80px 80px, 80px 80px',
          backgroundPosition: '0 0, 0 0'
        }}></div>
      </div>

      <div className="relative px-16 lg:px-20 py-12 max-w-full">
        {/* Title Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-gray-50 rounded-full border border-gray-200">
            <div className="w-2 h-2 bg-[#D62B2B] rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-[#0F152F] uppercase tracking-wider">
              Engineering Research Publications
            </span>
            <div className="w-2 h-2 bg-[#0F152F] rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-300 transition-all duration-300 hover:shadow-xl hover:scale-110 group ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#D62B2B]'}`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${canScrollLeft ? 'group-hover:bg-[#D62B2B]' : 'bg-gray-200'}`}>
              <svg className={`w-5 h-5 ${canScrollLeft ? 'text-gray-700 group-hover:text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>
          
          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-300 transition-all duration-300 hover:shadow-xl hover:scale-110 group ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#D62B2B]'}`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${canScrollRight ? 'group-hover:bg-[#D62B2B]' : 'bg-gray-200'}`}>
              <svg className={`w-5 h-5 ${canScrollRight ? 'text-gray-700 group-hover:text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-10 gap-8 scrollbar-hide scroll-smooth px-4"
          >
            {publications.map((pub) => (
              <div 
                key={pub.id} 
                className="publication-card flex-shrink-0 w-[calc(33.333%-1.5rem)] min-w-[350px]"
              >
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group h-full">
                  
                  {/* Image */}
                  <div className="relative h-64 bg-gray-50 flex items-center justify-center p-6">
                    <img
                      src={pub.image}
                      alt={pub.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gray-50 text-[#0F152F] text-xs font-bold rounded border border-gray-200">
                        {pub.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#0F152F] mb-4 leading-tight line-clamp-2">
                      {pub.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-700 font-medium flex-1">
                        {pub.authors}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D62B2B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(publications.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-[#D62B2B]' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default EngineeringPublications;