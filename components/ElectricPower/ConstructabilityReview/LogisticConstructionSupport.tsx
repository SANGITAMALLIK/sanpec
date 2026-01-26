
'use client';
import React from 'react';

export default function LogisticConstructionSupport() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-300 shadow-sm">
        <div className="flex items-center gap-2 text-[#CD091B]">
          <div className="w-1.5 h-1.5 bg-[#CD091B] rounded-full"></div>
          <span className="text-xs font-semibold uppercase tracking-wider">Constructability Review</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-300 shadow-sm">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#CD091B]">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Logistic and Construction Support</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {/* Features List */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#CD091B] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                <svg className="w-4 h-4 text-[#CD091B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-base font-bold text-gray-900">Key Features</h4>
              </div>
              <div className="space-y-3">
                {[
                  'Follow up logistics planning from vendors',
                  'Perform inspection of material upon arrival at port and Yards',
                  'Help in tracking bundling/packaging list and BOL for tower components for each structure and payment process',
                  'Provide support during construction process for missing pieces or mis-fab pieces or new helicopter splice, damage members and any technical issues',
                  'Keep Track of all milestones and critical delivery items'
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
                src="/images/home/header_submenu_images/12.jpg"
                alt="Logistic and Construction Support"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}