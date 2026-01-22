'use client';
import React, { useState } from 'react';

export default function DesignEngineering() {
  const [activeSubTab, setActiveSubTab] = useState(0);

  const designSubTabs = [
    { id: 0, title: 'Transmission' },
    { id: 1, title: 'Engineering Excellence' },
    { id: 2, title: 'Structure Optimization' },
    { id: 3, title: 'Robust Transmission Line' }
  ];

  const designContent = [
    {
      title: 'Tower Testing And Inspections',
      description: [
        'From 69 kV up to 500 kV, we design, engineer, and inspect a full range of overhead transmission line support structures to precisely suit the growing needs of our utility customers. In addition, we provide custom solutions for complex base plates, cross arms, and pole accessories.',
        'We utilize state-of-the-art design and detailing software to optimize transmission line structures (single circuit, double circuit, H-frames, substation, custom structures) and identify stress concentrations in critical areas through finite element analysis.'
      ],
      points: [
        'Transmission Line Engineering (Sustainability Approach)',
        'Full Scale Structural Testing (Witnessing and Validation)',
        'Minimize adverse environmental impacts',
        'Optimize the ROW',
        'Plan resiliency in transmission line system',
        'Deliver electricity in safe, reliable and an efficient manner',
        'Provide economic benefits to shareholders and communities',
        'Use environmentally preferable structures: Steel Poles/Towers',
        'Utilize lifecycle economics and use best practice specs',
        'Optimize operational and maintenance practices'
      ],
      image: 'https://sanpec-excellence.com/wp-content/uploads/2024/10/image-15.webp'
    },
    {
      title: 'Sustainability through Engineering Excellence',
      description: ['Determine compatibility of existing and proposed transmission line'],
      points: [
        'Voltage (kV) of Line',
        'Total Length of Line',
        'Climatic Conditions',
        'Type of conductor',
        'Type of Structures',
        'Type of foundations',
        'Design Capacity (MVA)',
        'Power Delivered (MVA)',
        'Cost of Conductor ($/ft)',
        'Cost of Structures ($/lbs)',
        'Cost of Construction ($/miles)',
        'Other Misc. Cost ($$ Lump Sum)'
      ],
      images: [
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture7.jpg',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture24.jpg'
      ]
    },
    {
      title: 'T&D Structures',
      description: ['Structure Optimization:'],
      points: [
        'Type of Material',
        'Structure configuration',
        'Optimum and efficient design',
        'Less waste of material',
        'Installation cost',
        'Aesthetic consideration',
        'Optimum foundation design',
        'Total life cycle cost'
      ],
      images: [
        'https://sanpec-excellence.com/wp-content/uploads/2025/02/23.jpg',
        'https://sanpec-excellence.com/wp-content/uploads/2025/02/24.jpg'
      ]
    },
    {
      title: 'Robust Transmission Line',
      description: ['Design & Engineering for a robust transmission infrastructure'],
      points: [
        'Minimize adverse environmental impacts',
        'Optimize the ROW',
        'Plan resiliency in transmission line system',
        'Deliver electricity in safe, reliable and an efficient manner',
        'Provide economic benefits to shareholders and communities',
        'Optimize operational and maintenance practices',
        'Use environmentally preferable structures: Steel Poles/Towers',
        'Utilize lifecycle economics',
        'Use best practice specs'
      ],
      images: [
        'https://sanpec-excellence.com/wp-content/uploads/2025/02/21.jpg',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture15.jpg'
      ]
    }
  ];

  const content = designContent[activeSubTab];

  return (
    <div className="flex flex-col gap-6">
      {/* Horizontal Tabs */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-300 shadow-sm">
        <div className="mb-4 pb-3 border-b border-gray-300">
          <div className="flex items-center gap-2 text-[#CD091B]">
            <div className="w-1.5 h-1.5 bg-[#CD091B] rounded-full"></div>
            <span className="text-xs font-semibold uppercase tracking-wider">Design & Engineering</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {designSubTabs.map((tab) => {
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
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
            <div className="space-y-2">
              {content.description.map((desc, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed text-sm md:text-base">{desc}</p>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#CD091B] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                <svg className="w-4 h-4 text-[#CD091B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-base font-bold text-gray-900">Key Features</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                {content.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1 h-1 bg-[#CD091B] rounded-full group-hover:scale-150 transition-transform"></div>
                    </div>
                    <span className="text-gray-700 text-xs leading-snug group-hover:text-gray-900 transition-colors">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {content.image && (
                <div className="overflow-hidden rounded-xl border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-md hover:shadow-xl">
                  <img src={content.image} alt={content.title} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              {content.images && (
                <div className="grid grid-cols-2 gap-3">
                  {content.images.map((img, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-sm hover:shadow-md group">
                      <img src={img} alt={`${content.title} ${idx + 1}`} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
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