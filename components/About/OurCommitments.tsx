'use client';
import React, { useState, useEffect } from 'react';
import { Zap, Sparkles, Award, Target, ChevronRight, ArrowRight } from 'lucide-react';

export default function SanpecCommitments() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const commitmentCards = [
    {
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture5.jpg',
      title: 'Reliability and Resiliency based Design for Transmission Structures with Engineering Excellence',
      icon: <Award />
    },
    {
      image: 'https://sanpec-excellence.com/wp-content/uploads/2020/04/Picture2.png',
      title: 'Innovative and Cost-Effective solutions',
      icon: <Sparkles />
    },
    {
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture1.jpg',
      title: 'Quality and Professional Services',
      icon: <Target />
    },
    {
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/home6.png',
      title: 'Unbeatable Project Management and Technical Services',
      icon: <Zap />
    },
    {
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture4.png',
      title: 'R&D work in Transmission Line Engineering',
      icon: <Award />
    },
    {
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture8.png',
      title: 'ON-Time Delivery and Seamless Project Execution',
      icon: <Target />
    },
    {
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture3.png',
      title: 'Advanced Engineering Tools and Technologies',
      icon: <Sparkles />
    },
    {
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/inspection.png',
      title: 'Value Added Services and Customer Focused Approach',
      icon: <Zap />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden py-16 md:py-10">
      {/* Transmission Poles Background Pattern - Enhanced */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        {/* Large Transmission Tower - Left */}
        <div className="absolute top-1/4 left-8 w-16 h-64">
          <svg viewBox="0 0 100 400" className="w-full h-full text-[#101631]">
            <line x1="50" y1="20" x2="50" y2="380" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="50" y1="60" x2="30" y2="80" stroke="currentColor" strokeWidth="1"/>
            <line x1="50" y1="60" x2="70" y2="80" stroke="currentColor" strokeWidth="1"/>
            <line x1="50" y1="120" x2="25" y2="140" stroke="currentColor" strokeWidth="1"/>
            <line x1="50" y1="120" x2="75" y2="140" stroke="currentColor" strokeWidth="1"/>
            <line x1="50" y1="180" x2="20" y2="200" stroke="currentColor" strokeWidth="1"/>
            <line x1="50" y1="180" x2="80" y2="200" stroke="currentColor" strokeWidth="1"/>
            <polygon points="45,380 55,380 52,400 48,400" fill="currentColor"/>
          </svg>
        </div>

        {/* Medium Transmission Pole - Right */}
        <div className="absolute top-40 right-12 w-12 h-48">
          <svg viewBox="0 0 80 300" className="w-full h-full text-[#CD091B]">
            <line x1="40" y1="30" x2="40" y2="270" stroke="currentColor" strokeWidth="1.2"/>
            <line x1="40" y1="90" x2="30" y2="105" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="40" y1="90" x2="50" y2="105" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="40" y1="150" x2="25" y2="165" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="40" y1="150" x2="55" y2="165" stroke="currentColor" strokeWidth="0.8"/>
            <polygon points="37,270 43,270 41,290 39,290" fill="currentColor"/>
          </svg>
        </div>

        {/* Small Utility Pole - Top Center */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-32">
          <svg viewBox="0 0 60 200" className="w-full h-full text-[#101631]">
            <line x1="30" y1="10" x2="30" y2="180" stroke="currentColor" strokeWidth="1"/>
            <line x1="30" y1="40" x2="20" y2="50" stroke="currentColor" strokeWidth="0.6"/>
            <line x1="30" y1="40" x2="40" y2="50" stroke="currentColor" strokeWidth="0.6"/>
            <circle cx="30" cy="10" r="3" fill="currentColor"/>
            <rect x="28" y="180" width="4" height="20" fill="currentColor"/>
          </svg>
        </div>

        {/* Electrical Insulators Pattern */}
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#CD091B] opacity-40">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <circle 
                key={i}
                cx={50 + 20 * Math.cos(angle * Math.PI / 180)}
                cy={50 + 20 * Math.sin(angle * Math.PI / 180)}
                r="3"
                fill="currentColor"
              />
            ))}
            <circle cx="50" cy="50" r="8" fill="currentColor"/>
          </svg>
        </div>

        {/* Wire Lines Pattern */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#101631] to-transparent opacity-10"></div>
        <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#CD091B] to-transparent opacity-10"></div>
        <div className="absolute bottom-16 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#101631] to-transparent opacity-10"></div>
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #101631 1px, transparent 1px),
            linear-gradient(to bottom, #101631 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-8xl">
        {/* Enhanced Header Section - Title Left, Description Right */}
        <div className="mb-16 md:mb-20">
          {/* Two Column Layout for Title and Description */}
          <div className="flex flex-col lg:flex-row gap-12 mb-12">
            {/* Left Column - Title */}
            <div className="lg:w-1/2">
              {/* Title Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
                <Sparkles className="w-4 h-4 text-[#CD091B]" />
                <span className="text-sm font-semibold uppercase tracking-wider text-[#101631]">
                  Engineering Excellence
                </span>
              </div>

              {/* Main Title */}
              <div className="relative">
                <h1 className="text-5xl md:text-7xl lg:text-7xl font-black leading-tight mb-6">
                  <span className="text-[#101631] block">OUR</span>
                  <span className="text-[#CD091B] block mt-2">COMMITMENTS</span>
                </h1>

                {/* Title Underline Decoration */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-1 bg-[#CD091B]"></div>
                  <Zap className="w-6 h-6 text-[#CD091B]" />
                  <div className="w-12 h-1 bg-[#CD091B]"></div>
                </div>

                {/* Transmission Line Illustration */}
                <div className="relative h-20 mb-8">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#101631] opacity-20"></div>
                  <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 border-2 border-[#CD091B] rounded-full"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 border border-[#101631] rounded-full"></div>
                  </div>
                  <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 border-2 border-[#CD091B] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="lg:w-1/2 flex items-center">
              <div className="relative group">
                {/* Decorative Corner Elements */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[#CD091B] opacity-60"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-[#101631] opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-[#101631] opacity-60"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[#CD091B] opacity-60"></div>

                {/* Description Box */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="mr-3 mt-1">
                      <div className="w-3 h-3 bg-[#CD091B] transform rotate-45"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-[#101631]">
                      Our Vision & Mission
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our strategic and operational goals are integrated to achieve excellence at all levels. We strive for excellence in intellectual work, leadership, innovation, and creativity by harnessing the full spectrum of human wisdom. We conduct our operations with the highest standards of integrity and actively seek new knowledge to create value for our stakeholders, community, and the natural world.
                  </p>
                  
                  {/* Progress Indicator */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="text-sm font-semibold text-[#101631]">100% Commitment</div>
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#CD091B] w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto lg:mx-0">
            {[
              { icon: <Award className="w-5 h-5" />, label: 'Engineering Excellence', color: 'bg-[#CD091B]' },
              { icon: <Sparkles className="w-5 h-5" />, label: 'Innovation', color: 'bg-[#101631]' },
              { icon: <Target className="w-5 h-5" />, label: 'Quality', color: 'bg-[#CD091B]' },
              { icon: <Zap className="w-5 h-5" />, label: 'Delivery', color: 'bg-[#101631]' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#101631]">{item.label}</div>
                  <div className="text-xs text-gray-500">Guaranteed</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {commitmentCards.map((card, index) => (
            <div
              key={index}
              className="group relative h-[400px]"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="absolute inset-0 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                
                {/* Image Container with Hover Effect */}
                <div className="relative h-2/3 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-12 h-12 ${
                      index % 4 < 2 ? 'bg-[#CD091B]' : 'bg-[#101631]'
                    } flex items-center justify-center rounded-xl shadow-lg`}>
                      <div className="text-white transform group-hover:rotate-12 transition-transform duration-500">
                        {card.icon}
                      </div>
                    </div>
                  </div>

                  {/* Top Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${
                    index % 4 < 2 ? 'bg-[#CD091B]' : 'bg-[#101631]'
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>

                {/* Content Area */}
                <div className="p-6 h-1/3 flex flex-col justify-center">
                  <div className="flex items-start gap-3">
                    <ChevronRight className={`w-5 h-5 mt-1 flex-shrink-0 ${
                      index % 4 < 2 ? 'text-[#CD091B]' : 'text-[#101631]'
                    } transform group-hover:translate-x-2 transition-transform duration-300`} />
                    <h3 className="text-sm font-bold text-[#101631] leading-tight line-clamp-3 group-hover:text-[#CD091B] transition-colors duration-300">
                      {card.title}
                    </h3>
                  </div>
                  
                  {/* Progress Line */}
                  <div className="mt-4">
                    <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full ${
                        index % 4 < 2 ? 'bg-[#CD091B]' : 'bg-[#101631]'
                      } transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000`} 
                      style={{transitionDelay: '100ms'}}></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Hover Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                    <span className="text-xs font-semibold text-[#101631]">Explore</span>
                    <ArrowRight className="w-3 h-3 text-[#CD091B]" />
                  </div>
                </div>
              </div>

              {/* Shadow Element on Hover */}
              <div className={`absolute -bottom-2 -right-2 w-full h-full rounded-xl ${
                index % 4 < 2 ? 'bg-[#CD091B]' : 'bg-[#101631]'
              } opacity-0 group-hover:opacity-20 -z-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        
      </div>
    </div>
  );
}