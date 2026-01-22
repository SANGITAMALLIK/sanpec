'use client';
import React, { useState } from 'react';

export default function MaterialProjectManagement() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sections = [
    {
      title: 'Material and Project Management',
      features: [
        'Develop detailed project schedule to meet the construction demands',
        'Develop detailed project schedule to meet the construction demands',
        'Assist in negotiating the best pricing and delivery schedule from vendors',
        'Risk Mitigation planning',
        'Keep Track of all milestones and critical delivery items'
      ],
      images: ['https://sanpec-excellence.com/wp-content/uploads/2025/02/14-1024x512.jpg']
    },
    {
      title: 'Material & Yard Management',
      features: [
        'Warehouse & Laydown Yard Sourcing & Management',
        'Real-Time Inventory Management & Reporting',
        'QA/QC & BOM Reconciliation',
        'Storing, Staging, Kitting & Delivery of Material to Construction Site',
        'As-Built Documentation'
      ],
      images: ['https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture27-2.png']
    },
    {
      title: 'Inventory Reporting and Material Documentation',
      features: [
        'Provides Documentation of Material Delivery or Pick-Up',
        'Dashboards Provide Real-Time Visibility of Material on Multiple Yards or in Delivery Phase',
        'Identify Gaps in Material Availability or Quality Before Project Impact',
        'Manage Care & Custody and Warranty Process',
        'Reconcile Material Used with As-Builts & Manage Scrap & Un-used Material'
      ],
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
    }
  ];

  const nextImage = () => {
    const lastSection = sections[2];
    if (lastSection.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % lastSection.images.length);
    }
  };

  const prevImage = () => {
    const lastSection = sections[2];
    if (lastSection.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + lastSection.images.length) % lastSection.images.length);
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-300 shadow-sm">
        <div className="flex items-center gap-2 text-[#CD091B]">
          <div className="w-1.5 h-1.5 bg-[#CD091B] rounded-full"></div>
          <span className="text-xs font-semibold uppercase tracking-wider">Strategic Project Management</span>
        </div>
      </div>

      {/* All Sections */}
      {sections.map((section, sectionIdx) => (
        <div key={sectionIdx} className="bg-white rounded-xl p-4 lg:p-6 border border-gray-300 shadow-sm">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#CD091B]">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h3>
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
                  {section.features.map((feature, idx) => (
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

              {/* Images */}
              <div className="space-y-4">
                {sectionIdx === 2 ? (
                  // Image Slider for Last Section
                  <div className="relative">
                    <div className="overflow-hidden rounded-xl border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-md hover:shadow-xl">
                      <img 
                        src={section.images[currentImageIndex]} 
                        alt={`${section.title} ${currentImageIndex + 1}`}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    
                    {/* Navigation Arrows */}
                    {section.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                          aria-label="Previous image"
                        >
                          <svg className="w-6 h-6 text-[#CD091B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                          aria-label="Next image"
                        >
                          <svg className="w-6 h-6 text-[#CD091B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                    
                    {/* Pagination Dots */}
                    {section.images.length > 1 && (
                      <div className="flex justify-center gap-2 mt-4">
                        {section.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => goToImage(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                              idx === currentImageIndex 
                                ? 'bg-[#CD091B] w-8' 
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Single Image for First Two Sections
                  <div className="overflow-hidden rounded-xl border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-md hover:shadow-xl">
                    <img 
                      src={section.images[0]} 
                      alt={section.title}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}