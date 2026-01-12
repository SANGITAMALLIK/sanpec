'use client';
import React, { useState, useEffect } from 'react';
import { Eye, Target, Users, Heart, Zap, Award, Shield, TrendingUp, Globe, Sparkles, ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';

export default function SanpecTabs() {
  const [activeTab, setActiveTab] = useState('vision');
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tabsData = {
    'who-we-are': {
      title: 'WHO WE ARE',
      contentTitle: 'Who We Are',
      icon: <Users />,
      description: [
        'SANPEC is an innovation-driven, purpose-led company specializing in design, engineering, testing, inspection, quality, and complete lifecycle asset management services for the electric power and infrastructure industries.',
        'We discover, innovate, and disseminate best practices and new ideas that support evolution and create value for our stakeholders.',
        'Drawing strength from our distinctive roots in STEM research, we believe in learning by doing, learning from others, leading with integrity, and challenging our assumptions to seek new knowledge.'
      ],
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/New-model-5.png'
    },
    'vision': {
      title: 'VISION',
      contentTitle: 'Our Vision',
      icon: <Eye />,
      description: [
        'To be the trusted and innovative leader in designing and building electric transmission and distribution (T&D) lines. We aim to revolutionize the U.S. energy sector by achieving excellence, driving innovation, enhancing resilience, and improving the quality of life for the American people.',
        '1. Build a robust and reliable grid to power the American people.',
        '2. Enhance resilience to withstand disruptions and adapt to evolving demands.',
        '3. Drive innovation and champion responsible business practices for a cleaner future.'
      ],
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture7.jpg'
    },
    'mission': {
      title: 'MISSION',
      contentTitle: 'Our Mission',
      icon: <Target />,
      description: [
        'We design, modernize, and manage electric power transmission and distribution grids with a strong commitment to innovation, excellence, and sustainability. At SANPEC, we aim to provide quality transmission and distribution (T&D) materials, innovative solutions, and exceptional services for a safe, robust, reliable, and resilient power grid.',
        'Our multidisciplinary, award-winning team utilizes expertise, wisdom, and entrepreneurial spirit to manage risks and create value that empowers individuals, enhances grid reliability, and strengthens the American economy.'
      ],
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-28-at-21.49.26-1024x512.jpg'
    },
    'values': {
      title: 'VALUES',
      contentTitle: 'Our Values',
      icon: <Heart />,
      description: [
        'Innovation and Resilience: We focus on enhancing innovation performance and building foresight capacity to manage uncertainty.',
        'Quality and Excellence: We are committed to upholding the highest quality standards in all our projects and services.',
        'Integrity: Committed to being whole, we model integrity by wholeheartedly living our mission.',
        'Visionary Leadership: We focus on creating long-term value for all stakeholders.',
        'Trust: We strengthen trust through teamwork, open communication, and transparency.',
        'Co-Creation: We collaborate with broader stakeholders to co-create solutions.'
      ]
    }
  };

  const activeContent = tabsData[activeTab];
  const tabKeys = Object.keys(tabsData);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative py-16 md:py-24 overflow-hidden">
      {/* Unique Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#101631" />
                <circle cx="50" cy="10" r="1" fill="#CD091B" />
                <circle cx="90" cy="10" r="1" fill="#101631" />
                <circle cx="10" cy="50" r="1" fill="#CD091B" />
                <circle cx="50" cy="50" r="1" fill="#101631" />
                <circle cx="90" cy="50" r="1" fill="#CD091B" />
                <circle cx="10" cy="90" r="1" fill="#101631" />
                <circle cx="50" cy="90" r="1" fill="#CD091B" />
                <circle cx="90" cy="90" r="1" fill="#101631" />
                <path d="M10,10 L50,10 M90,10 L50,10 M50,10 L50,50 M10,50 L50,50 M90,50 L50,50 M50,50 L50,90 M10,90 L50,90 M90,90 L50,90" 
                      stroke="currentColor" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-[#CD091B] opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#101631] opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-12 h-12 border border-[#CD091B] opacity-10 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Unique Tab Navigation - Card Style */}
        <div className="mb-16 md:mb-20">
          <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} gap-3 md:gap-6`}>
            {tabKeys.map((tabKey, index) => {
              const isActive = activeTab === tabKey;
              const tab = tabsData[tabKey];
              
              return (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  onMouseEnter={() => setHoveredItem(tabKey)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`
                    relative group p-4 md:p-6 rounded-xl
                    transition-all duration-500 overflow-hidden
                    ${isActive 
                      ? 'bg-white shadow-2xl scale-105 border-2 border-[#CD091B]' 
                      : 'bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:scale-105 border-2 border-transparent hover:border-[#101631]/20'
                    }
                  `}
                >
                  {/* Background Glow Effect */}
                  <div className={`absolute inset-0 ${
                    isActive ? 'bg-gradient-to-br from-[#CD091B]/10 to-transparent' : ''
                  }`}></div>
                  
                  {/* Animated Border Effect */}
                  <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-500 ${
                    isActive ? 'border-[#CD091B] opacity-100' : 'border-transparent group-hover:border-[#101631]/30'
                  }`}></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon Container */}
                    <div className={`
                      w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4
                      transition-all duration-500 transform group-hover:scale-110
                      ${isActive 
                        ? 'bg-gradient-to-br from-[#CD091B] to-[#e11d3d] text-white shadow-lg' 
                        : 'bg-gradient-to-br from-[#101631]/10 to-[#101631]/5 text-[#CD091B] group-hover:bg-gradient-to-br group-hover:from-[#CD091B]/20 group-hover:to-[#e11d3d]/20'
                      }
                    `}>
                      <div className={`transition-transform duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                        {tab.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <span className={`text-sm md:text-base font-bold transition-colors duration-300 ${
                      isActive ? 'text-[#CD091B]' : 'text-[#101631] group-hover:text-[#CD091B]'
                    }`}>
                      {tab.title}
                    </span>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-6 h-6 bg-[#CD091B] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#CD091B] to-[#e11d3d] 
                    transition-all duration-500 group-hover:w-3/4 ${isActive ? 'w-3/4' : ''}`}>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area - Unique Split Design */}
        <div className="relative">
          {/* Decorative Corner Elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-[#CD091B] opacity-60 rounded-tl-lg"></div>
          <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-[#101631] opacity-60 rounded-tr-lg"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-[#101631] opacity-60 rounded-bl-lg"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-[#CD091B] opacity-60 rounded-br-lg"></div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            {/* Content Header */}
            <div className="relative p-8 md:p-12 bg-gradient-to-r from-[#101631] to-[#1a2459] overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, #CD091B 0px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#CD091B] to-[#e11d3d] rounded-2xl flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                        <div className="text-white text-3xl">
                          {activeContent.icon}
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Zap className="w-5 h-5 text-[#CD091B]" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
                      {activeContent.contentTitle}
                    </h2>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-1 bg-[#CD091B]"></div>
                      <Sparkles className="w-5 h-5 text-[#CD091B]" />
                      <div className="w-12 h-1 bg-[#CD091B]"></div>
                    </div>
                  </div>
                </div>

                {/* Tab Indicators */}
                <div className="hidden md:flex items-center gap-2">
                  {tabKeys.map((tabKey) => (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeTab === tabKey 
                          ? 'bg-[#CD091B] scale-125' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 md:p-12">
              <div className={`grid ${activeContent.image ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-8 md:gap-12 items-start`}>
                {/* Text Content - Unique Styled */}
                <div className="space-y-8">
                  {activeContent.description.map((paragraph, index) => (
                    <div 
                      key={index}
                      className="group"
                      onMouseEnter={() => setHoveredItem(`text-${index}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-500 hover:bg-gradient-to-r hover:from-white hover:to-gray-50 hover:shadow-lg border border-gray-100 hover:border-[#CD091B]/20">
                        {/* Number Badge */}
                        <div className="flex-shrink-0 relative">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#101631] to-[#1a2459] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                            <span className="text-white font-bold text-lg">{index + 1}</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#CD091B] rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        
                        {/* Text */}
                        <div className="flex-1">
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed font-normal group-hover:text-[#101631] transition-colors duration-300">
                            {paragraph}
                          </p>
                        </div>

                        {/* Hover Arrow */}
                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2">
                          <ArrowRight className="w-5 h-5 text-[#CD091B]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Image Container - Proper object-cover with hover effect */}
                {activeContent.image && (
                  <div 
                    className="relative group"
                    onMouseEnter={() => setHoveredItem('image')}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Main Image Container */}
                    <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
                        <img
                          src={activeContent.image}
                          alt={activeContent.contentTitle}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Decorative Frame */}
                      <div className="absolute inset-0 border-2 border-white/30 pointer-events-none"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#CD091B] to-[#e11d3d] rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 group-hover:rotate-0 transition-all duration-500">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#101631] to-[#1a2459] rounded-2xl flex items-center justify-center shadow-xl transform -rotate-12 group-hover:rotate-0 transition-all duration-500">
                      <Award className="w-8 h-8 text-white" />
                    </div>

                    {/* Hover Overlay Text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101631]/90 via-[#101631]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-2">Transmission Excellence</h3>
                        <p className="text-sm opacity-90">Engineering innovation for sustainable energy</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Values Grid for Values Tab - Unique Design */}
              {activeTab === 'values' && (
                <div className="mt-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { icon: <Zap />, title: 'Innovation & Resilience', color: 'from-[#CD091B] to-[#e11d3d]' },
                      { icon: <Award />, title: 'Quality & Excellence', color: 'from-[#101631] to-[#1a2459]' },
                      { icon: <Shield />, title: 'Integrity', color: 'from-[#CD091B] to-[#e11d3d]' },
                      { icon: <TrendingUp />, title: 'Visionary Leadership', color: 'from-[#101631] to-[#1a2459]' },
                      { icon: <Globe />, title: 'Co-Creation', color: 'from-[#CD091B] to-[#e11d3d]' },
                      { icon: <Users />, title: 'Trust & Transparency', color: 'from-[#101631] to-[#1a2459]' }
                    ].map((value, index) => (
                      <div 
                        key={index}
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                        onMouseEnter={() => setHoveredItem(`value-${index}`)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {/* Background Pattern */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        
                        {/* Content */}
                        <div className="relative z-10 p-8">
                          {/* Icon */}
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-500`}>
                            <div className="text-white text-2xl">
                              {value.icon}
                            </div>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-xl font-bold text-[#101631] mb-3 group-hover:text-[#CD091B] transition-colors duration-300">
                            {value.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {activeContent.description[index]?.split(':')[1]?.trim() || 'Core value driving our mission'}
                          </p>

                          {/* Hover Indicator */}
                          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#CD091B] to-[#e11d3d] rounded-full flex items-center justify-center">
                              <ChevronRight className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
       
      </div>
    </div>
  );
}