'use client';
import React, { useState } from 'react';
import { GraduationCap, Trophy, Heart, Zap, TrendingUp, Activity } from 'lucide-react';

export default function SocialImpactSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const impactAreas = [
    {
      id: 1,
      icon: GraduationCap,
      title: 'Strong K-12 Support',
      subtitle: 'Local Commitment',
      description: 'We have devoted our time, money, and resources to support the K-12 communities. The workforce members contribute to the well-being and improvement of the local communities.',
      color: '#101631',
      stats: '500+ Students'
    },
    {
      id: 2,
      icon: Trophy,
      title: 'Youth Sports',
      subtitle: 'Community Engagement',
      description: 'SANPEC is highly involved with local and statewide communities to support quality education, and youth sports programs through volunteer contributions.',
      color: '#CD091B',
      stats: '15+ Programs'
    },
    {
      id: 3,
      icon: Heart,
      title: 'Fostering Well-Being',
      subtitle: 'Workplace Culture',
      description: 'Creating a culture of well-being is essential for a thriving workplace. When employees feel supported, valued, and cared for, they are more engaged, productive, and innovative.',
      color: '#101631',
      stats: '100% Coverage'
    }
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20 px-4 relative overflow-hidden">
      
      {/* Diagonal Split Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-100"></div>
        <div 
          className="absolute top-0 right-0 w-1/3 h-full bg-[#101631] opacity-[0.02]"
          style={{ clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        ></div>
        <div 
          className="absolute top-0 left-0 w-1/3 h-full bg-[#CD091B] opacity-[0.02]"
          style={{ clipPath: 'polygon(0% 0%, 70% 0%, 100% 100%, 0% 100%)' }}
        ></div>
      </div>

      {/* Technical Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #101631 1px, transparent 1px),
            linear-gradient(to bottom, #101631 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Floating Technical Elements */}
      <div className="absolute top-20 left-10 opacity-[0.08]">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="35" fill="none" stroke="#101631" strokeWidth="2" strokeDasharray="5,5"/>
          <circle cx="40" cy="40" r="20" fill="none" stroke="#CD091B" strokeWidth="2"/>
          <line x1="40" y1="5" x2="40" y2="75" stroke="#101631" strokeWidth="1"/>
          <line x1="5" y1="40" x2="75" y2="40" stroke="#CD091B" strokeWidth="1"/>
        </svg>
      </div>

      <div className="absolute bottom-20 right-10 opacity-[0.08]">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="#CD091B" strokeWidth="2" transform="rotate(45 50 50)"/>
          <rect x="25" y="25" width="50" height="50" fill="none" stroke="#101631" strokeWidth="2" transform="rotate(45 50 50)"/>
        </svg>
      </div>

      {/* Power Tower Left */}
      <div className="absolute left-0 top-1/4 opacity-[0.05]">
        <svg width="120" height="300" viewBox="0 0 120 300">
          <line x1="60" y1="10" x2="60" y2="280" stroke="#101631" strokeWidth="4"/>
          <line x1="30" y1="60" x2="90" y2="60" stroke="#101631" strokeWidth="3"/>
          <line x1="20" y1="120" x2="100" y2="120" stroke="#101631" strokeWidth="3"/>
          <line x1="15" y1="180" x2="105" y2="180" stroke="#101631" strokeWidth="3"/>
          <circle cx="60" cy="10" r="6" fill="#CD091B"/>
          <path d="M 100 120 L 150 110" stroke="#101631" strokeWidth="2" strokeDasharray="4,4"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header with Technical Style */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#CD091B] flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 h-0.5 bg-[#101631]"></div>
            <Zap className="w-8 h-8 text-[#CD091B]" />
            <div className="flex-1 h-0.5 bg-[#CD091B]"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div>
              <div className="text-sm font-semibold text-[#CD091B] tracking-widest mb-3">COMMUNITY EXCELLENCE</div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#101631] leading-tight">
                SOCIAL<br/>IMPACT
              </h1>
            </div>
            <div className="border-l-4 border-[#CD091B] pl-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Building stronger communities through education, sports, and workplace excellence
              </p>
            </div>
          </div>
        </div>

        {/* Unique Asymmetric Layout */}
        <div className="space-y-6 md:space-y-8">
          
          {/* First Row - Large Card + Small Card */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Large Featured Card */}
            <div
              className="lg:col-span-2 relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-white border-2 border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#101631]"></div>
                <div className="absolute top-0 right-0 w-full h-2 bg-[#101631]"></div>
                
                <div className="p-8 md:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-[#101631] flex items-center justify-center">
                        <GraduationCap className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#CD091B] tracking-wider mb-1">LOCAL COMMITMENT</div>
                        <div className="text-2xl font-bold text-[#101631]">500+ Students</div>
                      </div>
                    </div>
                    <div className={`w-12 h-12 border-2 border-[#101631] flex items-center justify-center transition-transform duration-500 ${hoveredCard === 1 ? 'rotate-45' : 'rotate-0'}`}>
                      <TrendingUp className="w-6 h-6 text-[#101631]" />
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Strong K-12 Support
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    We have devoted our time, money, and resources to support the K-12 communities. The workforce members contribute to the well-being and improvement of the local communities.
                  </p>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-[#101631] transform origin-left transition-transform duration-500 ${
                  hoveredCard === 1 ? 'scale-x-100' : 'scale-x-0'
                }`}></div>
              </div>
            </div>

            {/* Small Card with Image */}
            <div className="relative group">
              <div className="relative bg-white border-2 border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#CD091B]"></div>
                <div className="absolute top-0 right-0 w-2 h-full bg-[#CD091B]"></div>
                
                <img 
                  src="https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture7.png" 
                  alt="Social Impact"
                  className="w-full h-64 object-cover"
                />
                
                <div className="p-6 bg-[#101631]">
                  <div className="text-white text-sm font-semibold mb-2">COMMUNITY IMPACT</div>
                  <div className="text-white text-2xl font-bold">Together We Build</div>
                </div>
              </div>
            </div>

          </div>

          {/* Second Row - Two Medium Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            
            {impactAreas.slice(1).map((area) => {
              const Icon = area.icon;
              const isHovered = hoveredCard === area.id;
              
              return (
                <div
                  key={area.id}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(area.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative bg-white border-2 border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: area.color }}></div>
                    <div className="absolute bottom-0 left-0 w-2 h-full" style={{ backgroundColor: area.color }}></div>
                    
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 flex items-center justify-center" style={{ backgroundColor: area.color }}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-semibold text-[#CD091B] tracking-wider mb-1">{area.subtitle}</div>
                          <div className="text-xl font-bold" style={{ color: area.color }}>{area.stats}</div>
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {area.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {area.description}
                      </p>

                      <div className="mt-6 flex items-center gap-2">
                        <div className="flex-1 h-1" style={{ backgroundColor: area.color }}></div>
                        <div className={`w-8 h-8 border-2 flex items-center justify-center transition-transform duration-500 ${isHovered ? 'rotate-90' : 'rotate-0'}`} style={{ borderColor: area.color }}>
                          <Zap className="w-4 h-4" style={{ color: area.color }} />
                        </div>
                      </div>
                    </div>

                    <div 
                      className={`absolute bottom-0 left-0 right-0 h-2 transform origin-left transition-transform duration-500 ${
                        isHovered ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      style={{ backgroundColor: area.color }}
                    ></div>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* Bottom Technical Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#101631]"></div>
      <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-[#CD091B]"></div>
    </div>
  );
}