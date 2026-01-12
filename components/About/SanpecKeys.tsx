'use client';
import React, { useState, useEffect } from 'react';
import { Zap, Sparkles, Award, Target, Users, Shield, Globe, TrendingUp, CheckCircle, ArrowRight, Cpu, Building, Cloud, Database, Settings, BarChart, Users as UsersIcon, Shield as ShieldIcon, Heart } from 'lucide-react';

export default function SanpecEdgeProducts() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const edgeItems = [
    'Unrivaled Engineering and Process Excellence',
    'Resiliency Planning in Transmission Line Design',
    'Reliable and Resilient Power Grid',
    'Testing, Inspection and Quality Assurance',
    'Total Quality and Innovation Management',
    'Resilience in Value-Chain Systems',
    'Full Lifecycle Asset Management',
    'Operational and Organizational Resilience',
    'Business Continuity and Risk Management',
    'Unique Six-Pillars, Impact-focused Business Model',
    'Nationally-recognized Engineers and Researchers',
    'Licensed Professional Engineers, All States',
    'Leadership Excellence and Data-Driven Strategies',
    'Impact on Veterans, Youth, Education, Sports, Nature',
    'Workforce Development and R&D',
    'Digital Transformation and Industry4',
    'Risk Management Consulting Services',
    'Sustainable Value Creation and Foresight',
    'Triple Bottom Line and Circular Economy'
  ];

  const productItems = [
    'Transmission Lattice Towers for 345kV, 400kV, 500kV, 765kV, 800kV Transmission Line, Self-Supported Lattice Structures, Guyed Lattice Structures',
    'Road Crossing Lattice Towers, River Crossing Lattice Towers',
    'Custom Engineered Lattice Structures',
    'Transmission Pole Structures for up to 500kV Transmission Line',
    'Single Pole Structure, 2 Poles Structure, 3 Poles Structure, Guyed Pole Structure, H-Frame Structure Riser & Switch Structure, Custom Engineered Steel Poles',
    'Distribution Pole Structures, H Series Pole, C Series Pole, Poles for lower voltage lines such as 32.5kV, 69kV',
    'Substation Structures',
    'A-Frames Structure',
    'H-Frame Structure',
    'Equipment Support Structure',
    'Custom Engineered Structures and Foundations',
    'Hybrid Structures (Steel, Concrete, Composite)',
    'Caisson Design (Embedded Pole)'
  ];

  const edgeCategories = [
    {
      title: 'Engineering Excellence',
      icon: <Award />,
      color: 'bg-[#CD091B]',
      items: edgeItems.slice(0, 4)
    },
    {
      title: 'Innovation & Quality',
      icon: <Sparkles />,
      color: 'bg-[#101631]',
      items: edgeItems.slice(4, 8)
    },
    {
      title: 'Resilience & Risk',
      icon: <Shield />,
      color: 'bg-[#CD091B]',
      items: edgeItems.slice(8, 12)
    },
    {
      title: 'Leadership & Impact',
      icon: <TrendingUp />,
      color: 'bg-[#101631]',
      items: edgeItems.slice(12, 16)
    },
    {
      title: 'Sustainability',
      icon: <Globe />,
      color: 'bg-[#CD091B]',
      items: edgeItems.slice(16, 19)
    }
  ];

  const productCategories = [
    {
      title: 'Transmission Towers',
      icon: <Building />,
      color: 'bg-[#101631]',
      items: productItems.slice(0, 3)
    },
    {
      title: 'Pole Structures',
      icon: <Zap />,
      color: 'bg-[#CD091B]',
      items: productItems.slice(3, 7)
    },
    {
      title: 'Substation Structures',
      icon: <Cpu />,
      color: 'bg-[#101631]',
      items: productItems.slice(7, 10)
    },
    {
      title: 'Custom Engineering',
      icon: <Settings />,
      color: 'bg-[#CD091B]',
      items: productItems.slice(10, 13)
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative py-16 md:py-14 overflow-hidden">
      {/* Engineering Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern 
                id="engineeringGrid" 
                x="0" 
                y="0" 
                width="80" 
                height="80" 
                patternUnits="userSpaceOnUse"
              >
                <rect width="80" height="80" fill="none" stroke="#101631" strokeWidth="0.5" />
                <rect x="20" y="20" width="40" height="40" fill="none" stroke="#CD091B" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="3" fill="#101631" opacity="0.2" />
                <line x1="0" y1="0" x2="80" y2="80" stroke="#101631" strokeWidth="0.3" opacity="0.1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="#101631" strokeWidth="0.3" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#engineeringGrid)" />
          </svg>
        </div>

        {/* Floating Transmission Elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 10L20 20M30 10L40 20M30 10V30M20 20V40L10 50M40 20V40L50 50" stroke="#101631" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="absolute bottom-10 right-10 opacity-10">
          <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10V70M15 20L20 15L25 20M15 40L20 35L25 40M15 60L20 55L25 60" stroke="#CD091B" strokeWidth="1.5"/>
          </svg>
        </div>

        {/* Circuit Dots */}
        <div className="absolute top-1/4 right-1/4">
          <div className="flex flex-col gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-4">
                {[...Array(3)].map((_, j) => (
                  <div 
                    key={j} 
                    className={`w-2 h-2 rounded-full ${j % 2 === 0 ? 'bg-[#101631]' : 'bg-[#CD091B]'} opacity-10`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-8xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <Zap className="w-4 h-4 text-[#CD091B]" />
            <span className="text-sm font-semibold uppercase tracking-wider text-[#101631]">
              Engineering Excellence
            </span>
            <Zap className="w-4 h-4 text-[#CD091B]" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-[#101631]">SANPEC</span>
            <span className="text-[#CD091B] ml-4">EDGE & PRODUCTS</span>
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Combining unrivaled engineering excellence with innovative product solutions for 
              resilient power infrastructure
            </p>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-[#101631]">19+</div>
                <div className="text-sm text-gray-600">Edge Factors</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-[#CD091B]">13+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-[#101631]">50+</div>
                <div className="text-sm text-gray-600">Engineers</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-[#CD091B]">100%</div>
                <div className="text-sm text-gray-600">Quality</div>
              </div>
            </div>
          </div>
        </div>

        {/* SANPEC Edge Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#101631] to-transparent opacity-20"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#101631] flex items-center gap-3">
              <ShieldIcon className="w-8 h-8 text-[#CD091B]" />
              SANPEC EDGE
              <Sparkles className="w-6 h-6 text-[#CD091B]" />
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#101631] to-transparent opacity-20"></div>
          </div>

          {/* Edge Grid - Category Based */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {edgeCategories.map((category, catIndex) => (
              <div 
                key={catIndex}
                className="group"
                onMouseEnter={() => setHoveredItem(`edge-${catIndex}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                  {/* Category Header */}
                  <div className={`p-4 ${category.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    </div>
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <div className="text-white">
                          {category.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                    </div>
                  </div>

                  {/* Category Items */}
                  <div className="p-4">
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="flex items-start gap-2 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300"
                        >
                          <div className="flex-shrink-0 mt-1.5">
                            <div className={`w-2 h-2 rounded-full ${catIndex % 2 === 0 ? 'bg-[#CD091B]' : 'bg-[#101631]'}`}></div>
                          </div>
                          <span className="text-sm text-gray-700 group-hover/item:text-[#101631] transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#CD091B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Edge Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#101631] to-[#1a2459] text-white p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8" />
                <h4 className="text-lg font-bold">Award-Winning</h4>
              </div>
              <p className="text-sm opacity-90">Nationally recognized engineering excellence</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#CD091B] to-[#e11d3d] text-white p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <UsersIcon className="w-8 h-8" />
                <h4 className="text-lg font-bold">Licensed Nationwide</h4>
              </div>
              <p className="text-sm opacity-90">Professional engineers licensed in all 50 states</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#101631] to-[#1a2459] text-white p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8" />
                <h4 className="text-lg font-bold">Sustainable Impact</h4>
              </div>
              <p className="text-sm opacity-90">Triple bottom line approach to engineering</p>
            </div>
          </div>
        </div>

        {/* SANPEC Products Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#CD091B] to-transparent opacity-20"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#101631] flex items-center gap-3">
              <Building className="w-8 h-8 text-[#CD091B]" />
              SANPEC PRODUCTS
              <Zap className="w-6 h-6 text-[#CD091B]" />
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#CD091B] to-transparent opacity-20"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {productCategories.map((category, catIndex) => (
              <div 
                key={catIndex}
                className="group"
                onMouseEnter={() => setHoveredItem(`product-${catIndex}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                  {/* Category Header */}
                  <div className="relative">
                    <div className={`p-4 ${category.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                      </div>
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <div className="text-white">
                              {category.icon}
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-white">{category.title}</h3>
                        </div>
                        <ArrowRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Voltage Badge */}
                    <div className="absolute -top-3 -right-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                        <div className="text-xs font-bold text-[#101631]">{catIndex % 2 === 0 ? '500kV+' : '765kV+'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Products List */}
                  <div className="p-4">
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="group/item"
                        >
                          <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                            <div className="flex-shrink-0 mt-1">
                              <CheckCircle className={`w-4 h-4 ${catIndex % 2 === 0 ? 'text-[#101631]' : 'text-[#CD091B]'}`} />
                            </div>
                            <span className="text-sm text-gray-700 group-hover/item:text-[#101631] transition-colors duration-300">
                              {item}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category Tag */}
                  <div className="px-4 pb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                      catIndex % 2 === 0 
                        ? 'bg-[#101631]/10 text-[#101631]' 
                        : 'bg-[#CD091B]/10 text-[#CD091B]'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${catIndex % 2 === 0 ? 'bg-[#101631]' : 'bg-[#CD091B]'}`}></div>
                      {category.items.length} Products
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Products Feature Highlights */}
        
        </div>

        {/* Combined Excellence Footer */}
     
      </div>
    </div>
  );
}