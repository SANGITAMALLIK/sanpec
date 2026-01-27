'use client';
import React, { useState } from 'react';

export default function FirePreventionDetection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
   '/images/electric_power/1.jpg',
  ];

  

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
            <h4 className="text-2xl md:text-1xl text-gray-900 mb-3">
              <span className="font-bold">Fire Prevention and Detection:</span> Severe drought conditions coupled with high winds and other factors, have resulted in an increased number and severity of wildfires that can devastate natural habitats and communities.
            </h4>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {/* Features List */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#CD091B] hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                {[
                  'Implement wildfire mitigation plan to monitor weather and equipment.',
                  'Enhance inspections process of all overhead power lines in high fire risk areas and apply preventive maintenance to reduce risks of ignition.',
                  'Use fire-resistant poles, composite cross-arms, and covered conductors in high fire risk areas.',
                  'Install current limiting fuses that interrupt current more quickly to boost reliability by segmenting circuits to isolate problems.',
                  'Install HD camera that enable fire agencies to observe potential fire activity.',
                  'Install weather stations with multiple sensors to provide real time weather data.',
                  'Evaluate the ability to install new access roads and increase line ROW.',
                  'As a last resort, cut power to high fire areas when winds reach above a certain predetermined threshold'
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
            <div className="relative overflow-hidden">
              <div className="relative h-full">
                <img 
                  src={images[currentSlide]}
                  alt={`Fire Prevention and Detection ${currentSlide + 1}`}
                  className="w-full object-cover transition-transform duration-500" 
                />  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}