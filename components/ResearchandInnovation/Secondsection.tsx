'use client';
import React, { useState, useEffect } from 'react';
import { FileText, ArrowRight, Sparkles, ExternalLink, ChevronRight } from 'lucide-react';

const TechnicalPapersGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const papers = [
    {
      id: 1,
      title: 'Research paper on "Design and Analysis of Transmission Line Towers"',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2024/08/Layer-6.png',
      category: 'transmission',
      year: '2018',
      link: 'https://sanpec-excellence.com/portfolio-item/research-paper-on-design-and-analysis-of-transmission-line-towers/'
    },
    {
      id: 2,
      title: 'H2S Entrapment and Corrosion on Direct Embedded Galvanized Steel Transmission Poles: ASCE/SEI-2009',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2024/08/home1-2.jpg',
      category: 'transmission',
      year: '2009',
      link: 'https://sanpec-excellence.com/portfolio-item/h2s-entrapment-and-corrosion-on-direct-embedded-galvanized-steel-transmission-poles-asce-sei-2009/'
    },
    {
      id: 3,
      title: 'Challenges in Executing large and complex Transmission Projects, Platts transmission planning and development forum-2010',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/download-3.jpg',
      category: 'transmission',
      year: '2010',
      link: 'https://sanpec-excellence.com/portfolio-item/challenges-in-executing-large-and-complex-transmission-projects-platts-transmission-planning-and-development-forum-2010/'
    },
    {
      id: 4,
      title: 'Why Source Inspection is Critical for Transmission Structures: TSDOS-2012, EDM-2014',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/inspection.png',
      category: 'recent',
      year: '2014',
      link: 'https://sanpec-excellence.com/portfolio-item/why-source-inspection-is-critical-for-transmission-structures-tsdos-2012-edm-2014/'
    },
    {
      id: 5,
      title: 'Silicon Effect Color Transformation (SECT) on Lattice Steel Towers- IEEE-2012',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2024/08/home1-3.jpg',
      category: 'transmission',
      year: '2012',
      link: 'https://sanpec-excellence.com/portfolio-item/silicon-effect-color-transformation-sect-on-lattice-steel-towers-ieee-2012/'
    },
    {
      id: 6,
      title: 'The Right Choice of Steel for Lattice Steel Towers: TSDOS-2010, EDM-2012',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/home2.png',
      category: 'recent',
      year: '2012',
      link: 'https://sanpec-excellence.com/portfolio-item/the-right-choice-of-steel-for-lattice-steel-towers-tsdos-2010-edm-2012/'
    },
    {
      id: 7,
      title: 'A Need for Improvement in Arm Design: Consideration for New Design Approach: TSDOS- 2013',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/inspection.png',
      category: 'recent',
      year: '2013',
      link: 'https://sanpec-excellence.com/portfolio-item/a-need-for-improvement-in-arm-design-consideration-for-new-design-approach-tsdos-2013/'
    },
    {
      id: 8,
      title: 'The Challenges for Successful EPC Transmission Projects- TSDOS-2020 Challenges in performing Structural Analysis of existing lattice towers- TSDOS-2019',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/Layer-2.png',
      category: 'recent',
      year: '2020',
      link: 'https://sanpec-excellence.com/portfolio-item/the-challenges-for-successful-epc-transmission-projects-tsdos-2020-challenges-in-performing-structural-analysis-of-existing-lattice-towers-tsdos-2019/'
    },
    {
      id: 9,
      title: 'Sustainability Approach in Transmission Line Engineering: ASCE-International Conference on Sustainable Infrastructure- ICSI-2021',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/7004881064_3cf4c1b1af_k.png',
      category: 'transmission',
      year: '2021',
      link: 'https://sanpec-excellence.com/portfolio-item/sustainability-approach-in-transmission-line-engineering-asce-international-conference-on-sustainable-infrastructure-icsi-2021/'
    }
  ];

  const filteredPapers = activeFilter === 'all' 
    ? papers 
    : papers.filter(paper => paper.category === activeFilter);

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    papers.forEach(paper => {
      const img = new Image();
      img.src = paper.image;
      img.onload = () => handleImageLoad(paper.id);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Title Section with Pattern Background */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Engineering Grid Pattern - Only in title section */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, #0b1931 1px, transparent 1px),
              linear-gradient(180deg, #0b1931 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
          {/* Diagonal Lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                #dc2626 10px,
                #dc2626 12px
              )
            `,
            backgroundSize: '40px 40px',
            opacity: 0.1
          }}></div>
          {/* Triangle Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
            `
          }}></div>
        </div>

        {/* Top Border Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Title Section - Exactly as you liked */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-12">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-12 h-1 bg-red-600"></div>
                    <Sparkles className="w-6 h-6 text-red-600" />
                    <div className="w-12 h-1 bg-red-600"></div>
                  </div>
                </div>
                
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-none">
                  <div className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                      TECHNICAL
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-4 bg-red-600 opacity-10"></div>
                  </div>
                  <br />
                  <span className="text-red-600 relative">
                    PAPERS
                    <div className="absolute -top-4 -right-4 w-8 h-8 border-4 border-red-600 rounded-full animate-ping-slow opacity-30"></div>
                  </span>
                </h3>

                <div className="flex items-center gap-4 justify-center lg:justify-start mt-6">
                  <div className="h-0.5 w-20 bg-gray-900"></div>
                  <h5 className="text-lg md:text-xl text-gray-600 font-semibold uppercase tracking-wider">
                    Recent Publications
                  </h5>
                  <div className="h-0.5 w-20 bg-gray-900"></div>
                </div>
              </div>

              {/* Filter Buttons - Modern Triangle Style */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setActiveFilter('all')}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gray-900 transform -skew-x-12"></div>
                  <div className="relative flex items-center justify-between gap-3 px-6 py-4 bg-white border-2 border-gray-900 transform group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    <span className="font-bold text-gray-900 uppercase tracking-wider text-sm">
                      All Papers
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-red-600 transform rotate-45"></div>
                      <div className="w-2 h-2 bg-red-600 transform rotate-45"></div>
                      <div className="w-2 h-2 bg-red-600 transform rotate-45"></div>
                    </div>
                  </div>
                  {/* Triangle Corner */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={() => setActiveFilter('transmission')}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-red-600 transform -skew-x-12"></div>
                  <div className="relative flex items-center justify-between gap-3 px-6 py-4 bg-white border-2 border-red-600 transform group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    <span className="font-bold text-red-600 uppercase tracking-wider text-sm">
                      Transmission
                    </span>
                    <ChevronRight className="w-4 h-4 text-red-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  {/* Triangle Corner */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border with Triangles */}
        <div className="absolute bottom-0 left-0 right-0 h-2 overflow-hidden">
          <div className="flex">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="h-2 w-8 bg-red-600 transform -skew-x-45 mx-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Section - White Background */}
      <div className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Status */}
          <div className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 transform rotate-45 ${activeFilter === 'all' ? 'bg-gray-900' : 'bg-red-600'}`}></div>
                <span className="text-sm font-medium text-gray-600">
                  Showing <span className="font-bold text-gray-900">{filteredPapers.length}</span> papers
                </span>
              </div>
              <div className="hidden sm:block w-8 h-[2px] bg-gray-300"></div> 
            </div>
            
            <div className="flex items-center gap-2">
              {['all', 'transmission', 'recent'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                    activeFilter === filter
                      ? filter === 'all'
                        ? 'bg-gray-900 text-white'
                        : 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter === 'all' ? 'All' : filter}
                </button>
              ))}
            </div>
          </div>

          {/* Improved Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPapers.map((paper, index) => (
              <div
                key={paper.id}
                className="relative group"
                style={{
                  animation: `revealCard 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Triangle Corner Accents */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600/10 transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gray-900/5 transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>

                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  onMouseEnter={() => setHoveredCard(paper.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Top Red Triangle Corner */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[80px] border-l-transparent border-t-[80px] border-t-red-600 z-10"></div>

                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    {/* Loading Skeleton */}
                    {!loadedImages[paper.id] && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-8 h-8 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Main Image */}
                    <img
                      src={paper.image}
                      alt={paper.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        loadedImages[paper.id] ? 'opacity-100' : 'opacity-0'
                      } ${hoveredCard === paper.id ? 'scale-110' : 'scale-100'}`}
                      onLoad={() => handleImageLoad(paper.id)}
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-600 transform rotate-45"></div>
                        <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/70 px-3 py-1.5 rounded">
                          {paper.category === 'transmission' ? 'Transmission' : 'Recent'}
                        </span>
                      </div>
                    </div>

                    {/* Hover Effect Lines */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600/20 transition-all duration-500">
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 relative">
                    {/* Title */}
                    <h4 className="text-lg font-bold text-gray-900 mb-4 leading-tight group-hover:text-red-700 transition-colors duration-300">
                      {paper.title}
                    </h4>

                    {/* Bottom Section with Triangle Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      {/* <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-500">PDF Available</span>
                      </div> */}
                      
                      {/* Triangle Button */}
                      {/* <div className="relative group/btn">
                        <div className="w-10 h-10 bg-gray-100 group-hover/btn:bg-red-600 transform rotate-45 transition-all duration-300 flex items-center justify-center">
                          <ExternalLink className="w-4 h-4 text-gray-600 group-hover/btn:text-white transform -rotate-45 transition-colors duration-300" />
                        </div>
                        {/* Tooltip */}
                        {/* <div className="absolute -top-10 right-0 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          Read Full Paper
                        </div> */}
                      {/* </div>  */}
                    </div>

                    {/* Progress Triangle Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                      <div className={`h-full bg-red-600 transform -skew-x-45 transition-all duration-1000 ${
                        hoveredCard === paper.id ? 'w-full' : 'w-0'
                      }`}></div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Bottom Info Section */}
        
        </div>
      </div>

      <style jsx>{`
        @keyframes revealCard {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default TechnicalPapersGallery;