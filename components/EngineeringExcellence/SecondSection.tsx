import React from 'react';
import { Zap, Award, Lightbulb, TrendingUp } from 'lucide-react';

export default function SanpecEngineeringSection() {
  return (
    <div className="relative bg-white py-6 px-4 sm:px-6 lg:px-8 lg:py-8 overflow-hidden">
      {/* Background Power Grid Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Power Lines */}
          <line x1="100" y1="200" x2="1100" y2="200" stroke="#101631" strokeWidth="2"/>
          <line x1="100" y1="400" x2="1100" y2="400" stroke="#101631" strokeWidth="2"/>
          <line x1="100" y1="600" x2="1100" y2="600" stroke="#101631" strokeWidth="2"/>
          
          {/* Transmission Towers */}
          <g transform="translate(300, 150)">
            <polygon points="0,50 -20,100 20,100" fill="#CD091B"/>
            <rect x="-2" y="100" width="4" height="60" fill="#101631"/>
          </g>
          <g transform="translate(600, 350)">
            <polygon points="0,50 -20,100 20,100" fill="#CD091B"/>
            <rect x="-2" y="100" width="4" height="60" fill="#101631"/>
          </g>
          <g transform="translate(900, 550)">
            <polygon points="0,50 -20,100 20,100" fill="#CD091B"/>
            <rect x="-2" y="100" width="4" height="60" fill="#101631"/>
          </g>
          
          {/* Circuit Nodes */}
          <circle cx="200" cy="200" r="8" fill="#CD091B"/>
          <circle cx="500" cy="400" r="8" fill="#CD091B"/>
          <circle cx="800" cy="600" r="8" fill="#CD091B"/>
          
          {/* Grid Pattern */}
          <path d="M0,0 L50,50 M50,0 L0,50" stroke="#101631" strokeWidth="1" opacity="0.3"/>
          <path d="M1150,750 L1200,800 M1200,750 L1150,800" stroke="#101631" strokeWidth="1" opacity="0.3"/>
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 opacity-10">
        <Zap className="w-20 h-20 sm:w-32 sm:h-32" style={{ color: '#CD091B' }} />
      </div>
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 opacity-10">
        <Zap className="w-16 h-16 sm:w-24 sm:h-24" style={{ color: '#101631' }} />
      </div>

      {/* Real Transmission Tower Image on Right Side */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <img 
          src="/images/p5q1_sovi_230227.jpg" 
          alt="Power Grid Tower" 
          className="h-[600px] w-auto object-contain opacity-10 grayscale"
          style={{ filter: 'grayscale(100%) brightness(1.2)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 min-h-[600px] lg:h-[700px] flex items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
          
          {/* Left Side - Main Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 sm:w-12 h-1" style={{ backgroundColor: '#CD091B' }}></div>
              <span className="text-xs font-bold tracking-wider" style={{ color: '#CD091B' }}>ENGINEERS WEEK</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight" style={{ color: '#101631' }}>
              Engineering with Purpose: How SANPEC is Transforming the Power Grid
            </h1>
            
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#4a5568' }}>
              At SANPEC, engineering is more than solving problems—it's about redefining possibilities, 
              discovering unique solutions, setting new standards, uplifting humanity, and inspiring 
              curiosity and learning. During Engineers Week, we celebrated our dedicated engineers who 
              tirelessly develop innovative solutions crucial for operational and organizational success.
            </p>
          </div>

          {/* Right Side - Content Cards with Icons */}
          <div className="flex flex-col justify-center gap-4 sm:gap-6">
            
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 hover:shadow-xl transition-shadow" style={{ borderColor: '#CD091B' }}>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#CD091B' }}>
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-2" style={{ color: '#101631' }}>
                    Engineering Excellence for a Better Tomorrow
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#4a5568' }}>
                    This Engineers Week, we celebrated not only the remarkable minds driving systematic 
                    innovation of products, processes, and services, but also the spirit of entrepreneurial 
                    engineering that positively impacts American families, education, health, quality of life, 
                    and industries.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 hover:shadow-xl transition-shadow" style={{ borderColor: '#CD091B' }}>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#CD091B' }}>
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-2" style={{ color: '#101631' }}>
                    Engineering for Resilient, 21st Century America
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#4a5568' }}>
                    SANPEC is a distinctive and transformative business that embodies our innovative vision 
                    of "Engineering 21st Century America." Our core principles are integrated into every 
                    aspect of our business.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Decorative Circuit Lines */}
        <div className="hidden sm:block absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent opacity-20"></div>
        <div className="hidden sm:block absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-20"></div>

      </div>
    </div>
  );
}