'use client';
import React, { useState } from 'react';

export default function SocialImpactSection() {
  const [activeTab, setActiveTab] = useState('social-impact');

  const tabsData = {
    'social-impact': {
      title: 'SOCIAL IMPACT',
      image: '/images/sustainability/4.png',
      content: (
        <div>
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-black mb-2" style={{ color: '#101631', letterSpacing: '-0.02em' }}>
              SOCIAL IMPACT
            </h2>
            <div className="w-20 h-1.5 bg-[#CD091B] rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {/* Strong K-12 Support */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Strong K-12 Support</h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px' }}>
                We have devoted our time, money, and resources to support the K-12 communities. The workforce members contribute to the well-being and improvement of the local communities.
              </p>
            </div>

            {/* Youth Sports */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Youth Sports</h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px' }}>
                SANPEC is highly involved with local and statewide communities to support quality education, and youth sports programs through volunteer contributions.
              </p>
            </div>

            {/* Fostering Well-Being */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fostering Well-Being</h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px' }}>
                Creating a culture of well-being is essential for a thriving workplace. When employees feel supported, valued, and cared for, they are more engaged, productive, and innovative.
              </p>
            </div>
          </div>
        </div>
      )
    }
  };

  const activeContent = tabsData[activeTab];
  const tabKeys = Object.keys(tabsData);

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      
      {/* Top Design Element */}
      <div className="relative z-10 pt-6 md:pt-8">
        <div className="max-w-[1600px] mx-auto mb-6 md:mb-8">
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
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1800px] px-3 md:px-6 lg:px-8 pb-6 md:pb-10 relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          
          {/* Sidebar - Sticky on desktop */}
          <aside className="w-full lg:w-80 lg:sticky lg:top-6 lg:self-start bg-gradient-to-b from-gray-50 to-white border border-gray-200">
            <nav className="py-8 px-6 relative max-h-[calc(100vh-3rem)] overflow-y-auto">
              {/* Central Tower Pole */}
              <div className="absolute left-8 top-0 bottom-12 w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>
              
              {tabKeys.map((tabKey, idx) => {
                const isActive = activeTab === tabKey;
                const tab = tabsData[tabKey];
                
                return (
                  <div key={tabKey} className="mb-6 relative">
                    {/* Connection Point on Tower (Insulator) */}
                    <div className="absolute left-2 top-5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full shadow-md z-20"></div>
                    
                    {/* Horizontal Beam from Tower */}
                    <div className={`absolute left-5 top-6 w-6 h-0.5 bg-gray-400 transition-all duration-300 ${isActive ? 'bg-gray-600' : ''}`}></div>

                    {/* Tab Item (Transformer Box) */}
                    <div 
                      onClick={() => setActiveTab(tabKey)}
                      aria-label={`View ${tab.title} content`}
                      aria-pressed={isActive}
                      className={`
                        relative ml-11 group flex items-center justify-between px-4 py-3.5 cursor-pointer
                        transition-all duration-300 ease-out rounded-lg border-2
                        ${isActive
                          ? 'border-gray-300 text-gray-900 shadow-xl' 
                          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'
                        }
                      `}
                      style={isActive ? {backgroundColor: '#F3F3F3'} : {}}
                    >
                      <span className="text-sm font-semibold flex-1">{tab.title}</span>
                      
                      {/* Active Power Indicator */}
                      {isActive && (
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                          <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-2 h-2 bg-gray-600 rounded-full animate-ping"></div>
                        </div>
                      )}

                      {/* Power Line to Content */}
                      {isActive && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                          <div className="w-8 h-px bg-gradient-to-r from-gray-400 to-gray-300"></div>
                          <div className="w-1.5 h-1.5 rotate-45 bg-gray-400 -ml-0.5"></div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Tower Base Foundation (Lamp) */}
              <div className="absolute left-4 bottom-0 w-9 h-12 bg-gradient-to-b from-gray-400 to-gray-500 opacity-30" 
                   style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)'}}></div>
            </nav>
          </aside>

          {/* Content Area - Scrollable */}
          <main className="flex-1">
            <div className="bg-white shadow-lg border border-gray-200">
              
              <div className="p-4 md:p-6 lg:p-8">
                <div className={`grid ${activeContent.image ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-6 md:gap-8 items-start`}>
                  
                  {/* Text Content */}
                  <div className="space-y-4">
                    {activeContent.content}
                  </div>

                  {/* Image */}
                  {activeContent.image && (
                    <div className="relative">
                      <div className="rounded-lg overflow-hidden">
                        <img
                          src={activeContent.image}
                          alt={activeContent.title}
                          className="w-full h-auto object-contain bg-white"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}