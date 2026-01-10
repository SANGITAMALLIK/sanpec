'use client';
import React, { useState } from 'react';
import { GraduationCap, Trophy, Heart, ArrowRight, Sparkles } from 'lucide-react';

export default function SocialImpactSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const impactAreas = [
    {
      id: 1,
      icon: GraduationCap,
      title: 'Strong K-12 Support',
      subtitle: 'Local Commitment',
      description: 'We have devoted our time, money, and resources to support the K-12 communities. The workforce members contribute to the well-being and improvement of the local communities.',
      color: 'from-blue-500 to-cyan-500',
      solidColor: 'bg-blue-500'
    },
    {
      id: 2,
      icon: Trophy,
      title: 'Youth Sports',
      subtitle: 'Community Engagement',
      description: 'SANPEC is highly involved with local and statewide communities to support quality education, and youth sports programs through volunteer contributions.',
      color: 'from-purple-500 to-fuchsia-500',
      solidColor: 'bg-purple-500'
    },
    {
      id: 3,
      icon: Heart,
      title: 'Fostering Well-Being',
      subtitle: 'Workplace Culture',
      description: 'Creating a culture of well-being is essential for a thriving workplace. When employees feel supported, valued, and cared for, they are more engaged, productive, and innovative.',
      color: 'from-pink-500 to-rose-500',
      solidColor: 'bg-pink-500'
    }
  ];

  return (
    <div className="bg-white py-20 px-4 relative overflow-hidden">
      
      {/* Subtle Top Border to Indicate Section Start */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Minimal Background Accents */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-30"></div>

      {/* Left Tower SVG with Hover Effect */}
      <div className="absolute left-0 top-1/3 opacity-[0.04] hover:opacity-[0.08] transition-opacity duration-700 pointer-events-auto group">
        <svg width="120" height="400" viewBox="0 0 120 400" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-105 transition-transform duration-700">
          <line x1="60" y1="10" x2="60" y2="380" stroke="currentColor" strokeWidth="4" className="text-gray-400"/>
          <line x1="35" y1="80" x2="85" y2="80" stroke="currentColor" strokeWidth="3" className="text-gray-400"/>
          <line x1="25" y1="160" x2="95" y2="160" stroke="currentColor" strokeWidth="3" className="text-gray-400"/>
          <line x1="15" y1="240" x2="105" y2="240" stroke="currentColor" strokeWidth="3" className="text-gray-400"/>
          <line x1="10" y1="320" x2="110" y2="320" stroke="currentColor" strokeWidth="3" className="text-gray-400"/>
          <line x1="35" y1="10" x2="60" y2="50" stroke="currentColor" strokeWidth="3" className="text-gray-400"/>
          <line x1="85" y1="10" x2="60" y2="50" stroke="currentColor" strokeWidth="3" className="text-gray-400"/>
          <path d="M 110 240 L 180 220" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-300"/>
          <path d="M 110 260 L 180 240" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-300"/>
        </svg>
      </div>

      {/* Right Tower SVG with Hover Effect */}
      <div className="absolute right-0 top-1/4 opacity-[0.04] hover:opacity-[0.08] transition-opacity duration-700 pointer-events-auto group">
        <svg width="120" height="450" viewBox="0 0 120 450" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-105 transition-transform duration-700">
          <line x1="60" y1="15" x2="60" y2="430" stroke="currentColor" strokeWidth="4" className="text-gray-400"/>
          <line x1="30" y1="90" x2="90" y2="90" stroke="currentColor" strokeWidth="3" className="text-gray-400"/>
          <line x1="20" y1="180" x2="100" y2="180" stroke="currentColor" strokeWidth="3" className="text-gray-400"/>
          <line x1="10" y1="270" x2="110" y2="270" stroke="currentColor" strokeWidth="3" className="text-gray-400"/>
          <line x1="5" y1="360" x2="115" y2="360" stroke="currentColor" strokeWidth="3" className="text-gray-400"/>
          <line x1="30" y1="15" x2="60" y2="60" stroke="currentColor" strokeWidth="3" className="text-gray-400"/>
          <line x1="90" y1="15" x2="60" y2="60" stroke="currentColor" strokeWidth="3" className="text-gray-400"/>
          <path d="M 10 270 L -60 250" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-300"/>
          <path d="M 10 290 L -60 270" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-300"/>
        </svg>
      </div>

      {/* Full Width Grid Background for Header */}
      <div 
        className="absolute top-0 left-0 right-0 h-[350px]"
        style={{
          backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.5
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Premium Header */}
        <div className="relative text-center mb-20 py-1">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <Sparkles className="w-6 h-6 text-purple-500" />
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black mb-4 tracking-tight" style={{fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em'}}>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                SOCIAL IMPACT
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Committed to building stronger communities through education, sports, and well-being
            </p>
          </div>
        </div>

        {/* Asymmetric Premium Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column - 2 Large Cards */}
          <div className="lg:col-span-7 space-y-8">
            {impactAreas.slice(0, 2).map((area, index) => {
              const Icon = area.icon;
              const isHovered = hoveredCard === area.id;
              
              return (
                <div
                  key={area.id}
                  onMouseEnter={() => setHoveredCard(area.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: 'slideInLeft 0.8s ease-out forwards'
                  }}
                >
                  {/* Gradient Accent on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  
                  {/* Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${area.color}`}></div>

                  {/* Content */}
                  <div className="relative p-10">
                    {/* Icon Badge */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${area.color} mb-6 shadow-xl transition-all duration-700 ${
                      isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                    }`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Subtitle Badge */}
                    <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${area.color} mb-5`}>
                      <span className="text-white text-xs font-bold tracking-wider uppercase">{area.subtitle}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-5 leading-tight" style={{fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em'}}>
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {area.description}
                    </p>

                    {/* CTA Button */}
                    <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${area.color} rounded-xl text-white font-bold shadow-lg transition-all duration-300 ${
                      isHovered ? 'translate-x-2 shadow-2xl' : 'translate-x-0'
                    }`}>
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Glow */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${area.color} transform origin-left transition-transform duration-700 ${
                    isHovered ? 'scale-x-100 h-2' : 'scale-x-0'
                  }`}></div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Image + Card */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Premium Image Card - Full Width, No Text */}
            <div 
              className="relative group rounded-3xl overflow-hidden border-2 border-gray-100 shadow-xl"
              style={{
                animation: 'slideInRight 0.8s ease-out forwards',
                animationDelay: '200ms'
              }}
            >
              {/* Gradient Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-10"></div>
              
              {/* Image - Full Width, No Crop */}
              <img 
                src="https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture7.png" 
                alt="Social Impact"
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Third Card - Compact */}
            {impactAreas.slice(2, 3).map((area) => {
              const Icon = area.icon;
              const isHovered = hoveredCard === area.id;
              
              return (
                <div
                  key={area.id}
                  onMouseEnter={() => setHoveredCard(area.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
                  style={{
                    animation: 'slideInRight 0.8s ease-out forwards',
                    animationDelay: '400ms'
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${area.color}`}></div>
                  
                  <div className="relative p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} mb-5 shadow-xl transition-all duration-700 ${
                      isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${area.color} mb-4`}>
                      <span className="text-white text-xs font-bold tracking-wider uppercase">{area.subtitle}</span>
                    </div>

                    <h3 className="text-3xl font-black text-gray-900 mb-4 leading-tight" style={{fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em'}}>
                      {area.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                      {area.description}
                    </p>

                    <div className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${area.color} rounded-xl text-white font-bold shadow-lg transition-all duration-300 ${
                      isHovered ? 'translate-x-2 shadow-2xl' : 'translate-x-0'
                    }`}>
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${area.color} transform origin-left transition-transform duration-700 ${
                    isHovered ? 'scale-x-100 h-2' : 'scale-x-0'
                  }`}></div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}