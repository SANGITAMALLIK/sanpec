'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "Testing" },
    { id: 1, title: "Source Inspections At Manufacturing facilities" },
    { id: 2, title: "Field Inspections Using Drones" }
  ];

  const tabsContent = [
    {
      title: 'Testing',
      description: [],
      points: [
        "Transmission Line Engineering and Manufacturing of Steel Structures (Sustainability Approach)",
        "Structural Analysis, Design and Detailing of Steel Poles and Lattice Tower",
        "Full Scale Structural Testing (Witnessing and Validation)",
        "Electrical Testing: Corona/RIV and others",
        "Type Testing: Conductor/OPGW/Hardware",
        "Prototype and Proof of Fit Testing",
        "Technical Specifications Review"
      ],
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture1.png'
    },
    {
      title: 'Source Inspections at manufacturing facilities',
      description: ['Determine compatibility of existing and proposed transmission line'],
      points: [
        "Ensure that the customer receives quality product",
        "Minimize liability for product failures and construction delays",
        "Minimize liability for product failures and construction delays"
      ],
      images: [
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture18-2.png',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture20-2.png'
      ]
    },
    {
      title: 'Field Inspections Using Drones',
      description: ['Structure Optimization:'],
      points: [
        "LiDAR Technology",
        "High quality information",
        "Diagnose problem quickly",
        "No outage required and cost savings",
        "Safe and healthy work environment"
      ],
      images: [
        'https://sanpec-excellence.com/wp-content/uploads/2025/02/16.jpg',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture24.jpg'
      ]
    }
  ];

  const content = tabsContent[activeTab];

  return (
    <div className="flex flex-col gap-6">
      {/* Horizontal Tabs */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-300 shadow-sm">
        {/* <div className="mb-4 pb-3 border-b border-gray-300">
          <div className="flex items-center gap-2 text-[#CD091B]">
            <div className="w-1.5 h-1.5 bg-[#CD091B] rounded-full"></div>
            <span className="text-xs font-semibold uppercase tracking-wider">Manufacturing and Operations</span>
          </div>
        </div> */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-center px-4 py-3 rounded-lg transition-all duration-300 border relative ${
                  isActive ? 'bg-[#CD091B] text-white border-[#CD091B] shadow-md transform scale-[1.02]' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <span className="font-medium text-sm">{tab.title}</span>
                {isActive && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#CD091B]"></div>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl p-4 lg:p-6 min-h-[500px] border border-gray-300 shadow-sm">
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#CD091B]">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{content.title}</h3>
            {content.description.length > 0 && (
              <div className="space-y-2">
                {content.description.map((desc, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed text-sm md:text-base">{desc}</p>
                ))}
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#CD091B] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                <svg className="w-4 h-4 text-[#CD091B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-base font-bold text-gray-900">Key Features</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                {content.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-[#CD091B] rounded-full group-hover:scale-150 transition-transform"></div>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {content.image && (
                <div className="overflow-hidden rounded-xl border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-md hover:shadow-xl">
                  <Image 
                    src={content.image} 
                    alt={content.title} 
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              )}
              {content.images && (
                <div className="grid grid-cols-2 gap-3">
                  {content.images.map((img, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-sm hover:shadow-md group">
                      <Image 
                        src={img} 
                        alt={`${content.title} ${idx + 1}`} 
                        width={300}
                        height={250}
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TabsComponent;