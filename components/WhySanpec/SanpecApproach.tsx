'use client';
import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const TabGallery = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 83,
      leftImage: "https://sanpec-excellence.com/wp-content/uploads/2025/06/1.png",
      rightImage: "https://sanpec-excellence.com/wp-content/uploads/2025/09/Copy-of-1of-SANPEC-Blueprint-v3-green-images-1.png"
    },
    {
      id: 87,
      leftImage: "https://sanpec-excellence.com/wp-content/uploads/2025/06/3.png",
      rightImage: "https://sanpec-excellence.com/wp-content/uploads/2025/06/4.png"
    },
    {
      id: 88,
      leftImage: "https://sanpec-excellence.com/wp-content/uploads/2025/06/6.png",
      rightImage: null
    },
    {
      id: 89,
      leftImage: "https://sanpec-excellence.com/wp-content/uploads/2025/06/7.png",
      rightImage: null
    },
    {
      id: 91,
      leftImage: "https://sanpec-excellence.com/wp-content/uploads/2025/09/THE-GRID-OF-THE-FUTURE.png",
      rightImage: null
    }
  ];

  const nextTab = () => setActiveTab((prev) => (prev + 1) % tabs.length);
  const prevTab = () => setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="flex gap-8 max-w-7xl mx-auto">
        {/* Left Vertical Tabs */}
        <div className="w-28 flex flex-col items-center py-8 space-y-6">
          <button
            onClick={prevTab}
            className="bg-[#CD091B] hover:opacity-90 text-white p-3 transition-all duration-300 hover:scale-110 shadow-xl"
          >
            <ChevronUp className="w-6 h-6" />
          </button>

          <div className="flex flex-col gap-4">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`relative overflow-hidden transition-all duration-500 border-4 ${
                  activeTab === index
                    ? 'border-[#CD091B] shadow-2xl scale-110'
                    : 'border-gray-300 hover:border-[#101631] hover:scale-105 opacity-60 hover:opacity-100'
                }`}
                style={{ width: '80px', height: '80px' }}
              >
                <img
                  src={tab.leftImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
                {activeTab === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#CD091B]"></div>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={nextTab}
            className="bg-[#101631] hover:opacity-90 text-white p-3 transition-all duration-300 hover:scale-110 shadow-xl"
          >
            <ChevronDown className="w-6 h-6" />
          </button>

          <div className="mt-4 bg-[#CD091B] text-white text-sm font-bold px-4 py-2 shadow-lg">
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
              <div className="flex" style={{ minHeight: '80vh' }}>
                {/* Left Page */}
                <div className="w-1/2 bg-white border-r-8 border-[#CD091B] overflow-auto">
                  <img
                    src={tabs[activeTab].leftImage}
                    alt=""
                    className="w-full h-auto"
                  />
                </div>

                {/* Center Binding */}
                <div className="absolute left-1/2 top-0 bottom-0 w-6 bg-[#101631] transform -translate-x-1/2 shadow-2xl z-10">
                  <div className="h-full flex flex-col items-center justify-center gap-4">
                    <div className="w-0.5 h-20 bg-white"></div>
                    <div className="w-0.5 h-20 bg-white"></div>
                  </div>
                </div>

                {/* Right Page */}
                <div className="w-1/2 bg-white border-l-8 border-[#101631] overflow-auto">
                  {tabs[activeTab].rightImage ? (
                    <img
                      src={tabs[activeTab].rightImage}
                      alt=""
                      className="w-full h-auto"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-50">
                      <div className="text-gray-300 text-2xl font-light">Empty Page</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Page Numbers */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-between px-12">
                <div className="text-[#CD091B] font-bold text-lg">{activeTab * 2 + 1}</div>
                <div className="text-[#101631] font-bold text-lg">{activeTab * 2 + 2}</div>
              </div>

              {/* Book Pages Stack Effect (Left Side) */}
              <div className="absolute left-0 top-8 bottom-8 w-3">
                <div className="h-full flex flex-col justify-center gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="h-1 bg-gray-200" style={{ width: `${10 - i * 0.4}px` }}></div>
                  ))}
                </div>
              </div>

              {/* Book Pages Stack Effect (Right Side) */}
              <div className="absolute right-0 top-8 bottom-8 w-3">
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