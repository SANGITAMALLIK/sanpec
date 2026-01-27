'use client';
import React, { useState } from 'react';

export default function DistributionLineHardening() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    '/images/electric_power/22.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-300 shadow-sm">
        <div className="flex items-center gap-2 text-[#CD091B]">
          <div className="w-1.5 h-1.5 bg-[#CD091B] rounded-full"></div>
          <span className="text-xs font-semibold uppercase tracking-wider">Distribution Line Hardening</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-300 shadow-sm">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#CD091B]">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Flooding can create tremendous issues for transmission substations</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {/* Features List */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#CD091B] hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                {[
                  'Identify the substations which are vulnerable to flooding.',
                  'Plan for temporary and permanent hardening measures.',
                  'For permanent solutions, install sheet piles flood walls that are constructed of composite materials to resist decay and rust.',
                  'Raise substation equipment above flood level.',
                  'Install flood monitor sensor to alert rising water level.',
                  'Substation control houses can be designed for withstand a direct hit from EF3 tornado with back-up control houses available on short'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 mt-1.5">
                      <svg className="w-4 h-4 text-[#CD091B] group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Slider */}
            <div className="relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-md hover:shadow-xl">
              <div className="relative h-full">
                <img 
                  src={images[currentSlide]}
                  alt={`Distribution Line Hardening ${currentSlide + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500" 
                />
                
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 group"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5 text-gray-700 group-hover:text-[#CD091B] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 34.2 32.3" strokeWidth="2">
                    <line x1="0.5" y1="16" x2="33.5" y2="16"></line>
                    <line x1="0.3" y1="16.5" x2="16.2" y2="0.7"></line>
                    <line x1="0" y1="15.4" x2="16.2" y2="31.6"></line>
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 group"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5 text-gray-700 group-hover:text-[#CD091B] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 34.2 32.3" strokeWidth="2">
                    <line x1="0" y1="16" x2="33" y2="16"></line>
                    <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                    <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                  </svg>
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx 
                          ? 'bg-[#CD091B] w-8' 
                          : 'bg-white/70 hover:bg-white'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}