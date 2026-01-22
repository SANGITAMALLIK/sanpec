'use client';
import React, { useState } from 'react';

export default function ManagementSystems() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: 'Quality Management System' },
    { id: 1, title: 'Innovation Management' },
    { id: 2, title: 'Change Management' }
  ];

  const tabsContent = [
    {
      title: 'Quality Management System',
      description: 'SANPEC employs a robust quality management system guided by our principles—customer focus, employee involvement, a process-oriented approach, integrated systems, strategic planning, continual improvement, fact-based decision-making, and effective communication. In building transmission and distribution infrastructure, SANPEC rigorously applies highest quality standards across every stage—from R&D and design to manufacturing, operations, supply chain management, and material sourcing—ensuring that each component and process meets the highest levels of reliability and performance. This steadfast commitment not only exceeds customer expectations but also cultivates an environment where every employee is empowered to drive ongoing quality enhancements.',
      images: [
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture21.jpg',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture20-2.png',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture27-2.png',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture26-2.jpg',
        'https://sanpec-excellence.com/wp-content/uploads/2025/02/24.jpg',
        'https://sanpec-excellence.com/wp-content/uploads/2025/02/21.jpg',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture14-2.png',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture18-2.png',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture19-2.png'
      ]
    },
    {
      title: 'Innovation Management',
      description: 'Aligned with the ISO 56000 series—specifically ISO 56001:2024—SANPEC systematically manages innovation through a structured approach that drives sustainable growth and secures a competitive edge by continuously exploring and implementing cutting-edge solutions in transmission and distribution. By fostering innovation in its R&D, design, and operational processes, SANPEC maximizes value creation by unlocking increased value from new products, services, processes, and methods, thereby delivering tangible benefits for both the organization and its stakeholders. This approach not only boosts immediate performance but also steadily builds long-term innovation capabilities, even amid uncertainty.',
      images: [
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture20-2.png'
      ]
    },
    {
      title: 'Change Management',
      description: 'Leveraging in house software and tools, SANPEC adeptly manages organizational change to ensure smooth transitions and enhanced adaptability during strategic shifts across all its functions—from R&D and design to manufacturing, operations, supply chain management, and material sourcing. By adopting changes faster, more completely, and proficiently, SANPEC remains fully engaged during disruptive periods, understanding the rationale behind each change. This comprehensive approach, which provides the necessary time, tools, and support for everyone involved, minimizes the risks and costs associated with mismanaged change while maximizing returns on project investments through the effective application of change management principles before, during, and after each project.',
      images: [
        'https://sanpec-excellence.com/wp-content/uploads/2025/02/16.jpg',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture24.jpg'
      ]
    }
  ];

  const content = tabsContent[activeTab];

  return (
    <div className="flex flex-col gap-6">
      {/* Header with Tabs */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-300 shadow-sm">
        <div className="mb-4 pb-3 border-b border-gray-300">
          <div className="flex items-center gap-2 text-[#CD091B]">
            <div className="w-1.5 h-1.5 bg-[#CD091B] rounded-full"></div>
            <span className="text-xs font-semibold uppercase tracking-wider">Manufacturing and Operations</span>
          </div>
        </div>
        
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
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#CD091B] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                <svg className="w-4 h-4 text-[#CD091B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-base font-bold text-gray-900">Overview</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 bg-[#CD091B] rounded-full group-hover:scale-150 transition-transform"></div>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                    {content.description}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {activeTab === 0 ? (
                // Quality Management System - Image Slider
                <div className="overflow-hidden rounded-xl border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-md hover:shadow-xl">
                  <img 
                    src={content.images[0]} 
                    alt={content.title}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              ) : (
                // Innovation and Change Management - Grid of images
                <div className={`grid ${content.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-3`}>
                  {content.images.map((img, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-sm hover:shadow-md group">
                      <img 
                        src={img} 
                        alt={`${content.title} ${idx + 1}`}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
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
}