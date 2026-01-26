import React from 'react';

export default function GridHardening() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-300 shadow-sm">
        <div className="flex items-center gap-2 text-[#CD091B]">
          <div className="w-1.5 h-1.5 bg-[#CD091B] rounded-full"></div>
          <span className="text-xs font-semibold uppercase tracking-wider">Grid Hardening</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-300 shadow-sm">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#CD091B]">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Reinforcing the T&D infrastructure to prevent or reduce the damage from extreme weather events.</h3>
            <p className="text-gray-700 text-base font-medium">Right selection of poles, towers, and wires:</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {/* Features List */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#CD091B] hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                {[
                  'Dual OHGW to reduce the potage caused by lightning.',
                  'OPGW to provide the communication path across the grid, enhancing the cybersecurity and improving reliability.',
                  'New Insulator design and materials provide greater reliability.',
                  'Higher Capacity, steel reinforced conductor allows for more efficient power flow and reduce electrical losses.',
                  'Greater clearances between electrical lines reduces outages caused by animal and provides safer working conditions for line crews.',
                  'Sturdier steel poles/concrete poles improve resiliency during storms, provide longer lifeexpectancy and lower maintenance costs.',
                  'Improved grounding provides better lightning performance and safer operation of T&D system.'
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

            {/* Image */}
            <div className="overflow-hidden rounded-xl border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-md hover:shadow-xl">
              <img 
                src="https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture14-2.png"
                alt="Grid Hardening Infrastructure"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}