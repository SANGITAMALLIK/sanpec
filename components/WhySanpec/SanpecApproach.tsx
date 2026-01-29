'use client';
import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const TabGallery = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 83,
      leftImage: "/images/why_sanpec/1.png",
      rightImage: "/images/why_sanpec/2.png",
      thumbnail: "/images/why_sanpec/1.png"
    },
    {
      id: 87,
      leftImage: "/images/why_sanpec/3.png",
      rightImage: "/images/why_sanpec/4.png",
      thumbnail: "/images/why_sanpec/3.png"
    },
    {
      id: 88,
      leftImage: "/images/why_sanpec/5.png",
      rightImage: "/images/why_sanpec/7.png",
      thumbnail: "/images/why_sanpec/6.png"
    },
    {
      id: 89,
      leftImage: "/images/why_sanpec/7.png",
      rightImage: "/images/why_sanpec/11.png",
      thumbnail: "/images/why_sanpec/7.png"
    },
    {
      id: 91,
      leftImage: "/images/why_sanpec/THE-GRID-OF-THE-FUTURE.png",
      rightImage: null,
      thumbnail: "/images/why_sanpec/THE-GRID-OF-THE-FUTURE.png"
    }
  ];

  const nextTab = () => setActiveTab((prev) => (prev + 1) % tabs.length);
  const prevTab = () => setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);

  return (
    <div className="min-h-screen bg-white p-2 sm:p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 max-w-7xl mx-auto">
        {/* Desktop: Left Vertical Tabs | Mobile: Top Horizontal Tabs */}
        <div className="lg:w-28 w-full flex lg:flex-col flex-row items-center lg:py-8 py-4 lg:space-y-6 space-x-3 lg:space-x-0 overflow-x-auto lg:overflow-visible">
          <button
            onClick={prevTab}
            className="bg-[#CD091B] hover:opacity-90 text-white p-2 md:p-3 transition-all duration-300 hover:scale-110 shadow-xl flex-shrink-0"
          >
            <ChevronUp className="w-4 h-4 md:w-6 md:h-6 hidden lg:block" />
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 lg:hidden" />
          </button>

          <div className="flex lg:flex-col flex-row gap-3 lg:gap-4">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`relative overflow-hidden transition-all duration-500 border-2 flex-shrink-0 ${
                  activeTab === index
                    ? 'border-[#CD091B] shadow-lg scale-105 lg:scale-110'
                    : 'border-gray-300 hover:border-[#101631] hover:scale-105 opacity-60 hover:opacity-100'
                }`}
                style={{ width: '60px', height: '60px' }}
              >
                <img
                  src={tab.thumbnail}
                  alt=""
                  className="w-full h-full object-cover"
                />
                {activeTab === index && (
                  <div className="absolute lg:left-0 lg:top-0 lg:bottom-0 lg:w-1 lg:h-auto bottom-0 left-0 right-0 h-1 w-auto bg-[#CD091B]"></div>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={nextTab}
            className="bg-[#101631] hover:opacity-90 text-white p-2 md:p-3 transition-all duration-300 hover:scale-110 shadow-xl flex-shrink-0"
          >
            <ChevronDown className="w-4 h-4 md:w-6 md:h-6 hidden lg:block" />
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 lg:hidden" />
          </button>

          <div className="lg:mt-4 bg-[#CD091B] text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1 md:py-2 shadow-lg flex-shrink-0">
            {activeTab + 1}/{tabs.length}
          </div>
        </div>

        {/* Book Container */}
        <div className="flex-1">
          <div className="relative">
            {/* Book Shadow */}
            <div className="absolute inset-0 bg-black opacity-20 blur-2xl transform translate-y-4"></div>
            
            {/* Open Book */}
            <div className="relative bg-amber-100 shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row" style={{ minHeight: '60vh' }}>
                {/* Left Page */}
                <div className="w-full md:w-1/2 bg-white border-b-4 md:border-b-0 md:border-r-8 border-[#CD091B] overflow-auto">
                  <img
                    src={tabs[activeTab].leftImage}
                    alt=""
                    className="w-full h-auto"
                  />
                </div>

                {/* Center Binding - Hidden on Mobile */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-4 md:w-6 bg-[#101631] transform -translate-x-1/2 shadow-2xl z-10">
                  <div className="h-full flex flex-col items-center justify-center gap-4">
                    <div className="w-0.5 h-20 bg-white"></div>
                    <div className="w-0.5 h-20 bg-white"></div>
                  </div>
                </div>

                {/* Right Page */}
                <div className="w-full md:w-1/2 bg-white border-t-4 md:border-t-0 md:border-l-8 border-[#101631] overflow-auto">
                  {tabs[activeTab].rightImage ? (
                    <img
                      src={tabs[activeTab].rightImage}
                      alt=""
                      className="w-full h-auto"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-50 min-h-[300px] md:min-h-0">
                      <div className="text-gray-300 text-xl md:text-2xl font-light">Empty Page</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Page Numbers */}
              <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-between px-6 md:px-12">
                <div className="text-[#CD091B] font-bold text-sm md:text-lg">{activeTab * 2 + 1}</div>
                <div className="text-[#101631] font-bold text-sm md:text-lg">{activeTab * 2 + 2}</div>
              </div>

              {/* Book Pages Stack Effect (Left Side) - Hidden on Mobile */}
              <div className="hidden md:block absolute left-0 top-8 bottom-8 w-3">
                <div className="h-full flex flex-col justify-center gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="h-1 bg-gray-200" style={{ width: `${10 - i * 0.4}px` }}></div>
                  ))}
                </div>
              </div>

              {/* Book Pages Stack Effect (Right Side) - Hidden on Mobile */}
              <div className="hidden md:block absolute right-0 top-8 bottom-8 w-3">
                <div className="h-full flex flex-col justify-center gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="h-1 bg-gray-200" style={{ width: `${10 - i * 0.4}px` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabGallery;