'use client';
import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const TabGallery = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  const tabs = [
    {
      id: 1,
      title: "Engineering Excellence",
      content: {
        heading: "Engineering Excellence",
        description: "At SANPEC, engineering excellence is achieved through a comprehensive, multi-dimensional approach that integrates advanced technology, continuous improvement, and an unwavering commitment to quality. By embedding these principles into every facet of its operations, SANPEC consistently delivers projects that surpass industry benchmarks.",
        subtitle: "Management Standards:",
        accordions: [
          {
            title: "Total Quality Management System",
            content: "SANPEC employs a robust quality management system guided by TQM principles—customer focus, employee involvement, a process-oriented approach, integrated systems, strategic planning, continual improvement, fact-based decision-making, and effective communication."
          },
          {
            title: "Innovation Management",
            content: "Aligned with the ISO 56000 series—specifically ISO 56001:2024—SANPEC systematically manages innovation through a structured approach that drives sustainable growth and secures a competitive edge by continuously exploring and implementing cutting-edge solutions."
          },
          {
            title: "Change Management",
            content: "SANPEC adeptly manages organizational change to ensure smooth transitions and enhanced adaptability during strategic shifts across all its functions—from R&D and design to manufacturing, operations, supply chain management, and material sourcing."
          }
        ],
        readMoreLink: "/engineering-excellence/"
      }
    },
    {
      id: 2,
      title: "Research & Development",
      content: {
        heading: "Research and Development",
        description: "At SANPEC, research and development (R&D) form the backbone of innovation, driving the modernization of transmission and distribution infrastructure. SANPEC's dedicated R&D teams go beyond conventional innovation labs, relentlessly exploring breakthrough technologies.",
        accordions: [
          {
            title: "Advanced Materials Development",
            content: "Researching high-capacity, durable conductors and corrosion-resistant materials for transmission infrastructure."
          },
          {
            title: "Smart Grid Technologies",
            content: "Integrating IoT, artificial intelligence, and big data analytics for real-time monitoring, predictive maintenance, and operational optimization."
          },
          {
            title: "Structural Innovations",
            content: "Enhancing the design and engineering of transmission towers, poles, and components for improved load capacity and longevity."
          },
          {
            title: "Sustainability and Circular Economy",
            content: "Developing eco-friendly materials, optimizing resource use, and implementing lifecycle assessments to reduce environmental impact."
          },
          {
            title: "Simulation and Prototyping",
            content: "Utilizing advanced software and physical testing to validate new designs and manufacturing processes before large-scale implementation."
          }
        ]
      }
    },
    {
      id: 3,
      title: "Digital Transformation",
      content: {
        heading: "Digital Transformation",
        description: "Digital transformation is a cornerstone of SANPEC's strategy for modernizing its transmission and distribution grid infrastructure. By integrating advanced digital technologies, SANPEC enhances efficiency, reliability, and operational intelligence.",
        accordions: [
          {
            title: "Communication, Monitoring and Control",
            content: "SANPEC employs state-of-the-art digital communication systems integrated with IoT devices across its transmission and distribution networks providing real-time data on grid conditions."
          },
          {
            title: "Data Analytics and AI",
            content: "Leveraging big data analytics and AI, SANPEC processes vast amounts of operational data to optimize grid performance with advanced algorithms for predictive maintenance."
          },
          {
            title: "Enhanced Cybersecurity",
            content: "Robust cybersecurity measures specifically designed for transmission and distribution systems including real-time threat monitoring and advanced encryption protocols."
          },
          {
            title: "Customer Engagement Platforms",
            content: "Digital platforms that empower customers by providing real-time insights into their energy consumption with personalized energy-saving recommendations."
          }
        ]
      }
    },
    {
      id: 4,
      title: "Workforce Development",
      content: {
        heading: "Workforce Development",
        description: "At SANPEC, workforce development is a strategic priority, ensuring a pipeline of skilled, motivated workforce prepared for the evolving energy landscape. SANPEC invests in comprehensive training, leadership development, and knowledge-sharing initiatives.",
        bullets: [
          "Promoting interdisciplinary learning integrating policy, technology, and systems thinking",
          "Advancing global best practices through knowledge-sharing platforms",
          "Ecosystem-based workforce planning for sustainability challenges"
        ],
        subtitle: "Skill Building and Knowledge Transfer",
        skills: [
          "Advanced Skill Development Programs",
          "Leadership Development",
          "Internal Training Programs",
          "Community Education & Outreach",
          "Industry Knowledge Exchange"
        ]
      }
    },
    {
      id: 5,
      title: "Leadership & Governance",
      content: {
        heading: "Leadership and Governance",
        description: "SANPEC views leadership and governance as fundamental enablers of its long-term impact on society and the economy. By operating with a systems perspective, the organization ensures every decision is aligned across all functions.",
        accordions: [
          {
            title: "Three-Tier Governance Structure",
            content: "To drive strategic execution, oversight, and innovation, SANPEC operates through a structured three-tier governance framework with Executive Leadership Team, Board of Directors, and Advisory Committees."
          },
          {
            title: "Governance Mechanisms",
            content: "Robust governance framework that fosters accountability, adaptability, and agility through strategic reviews, board oversight, ethics compliance, stakeholder engagement, and risk management."
          },
          {
            title: "Innovation & Impact",
            content: "SANPEC's leadership model balances strategic vision and operational efficiency, positioning the company as a leader in grid infrastructure solutions through proactive leadership and structured change management."
          }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#0F152F 1px, transparent 1px), linear-gradient(90deg, #0F152F 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative z-10 text-center py-12 md:py-16 px-4">
        <div className="inline-flex items-center gap-2 md:gap-3 bg-white border-2 border-gray-200 px-4 md:px-8 py-2 md:py-3 rounded-full mb-4 md:mb-6 shadow-lg">
          <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D62B2B] rounded-full animate-pulse flex-shrink-0"></span>
          <span className="text-[#0F152F] font-bold text-xs md:text-sm tracking-wide uppercase">Transforming Energy Infrastructure</span>
          <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D62B2B] rounded-full flex-shrink-0"></span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0F152F] mb-3 md:mb-4 tracking-tight">
          Drivers Of <span className="text-[#D62B2B]">Change</span>
        </h1>
        <div className="w-24 md:w-32 h-1 bg-[#D62B2B] mx-auto mb-4 md:mb-6 rounded-full"></div>
        <p className="text-gray-700 text-base md:text-xl max-w-4xl mx-auto font-medium leading-relaxed px-4">
          Leading the transformation in transmission & distribution through innovation, excellence, and strategic vision
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="relative z-20 bg-white border-y-2 border-gray-200 sticky top-0 shadow-lg">
        <div className="max-w-full px-3 md:px-6">
          <div className="flex justify-start md:justify-center gap-2 md:gap-3 py-4 md:py-5 overflow-x-auto scrollbar-hide">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(index);
                  setOpenAccordion(null);
                }}
                className={`group relative flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-3.5 rounded-xl font-bold whitespace-nowrap transition-all duration-300 border-2 ${
                  activeTab === index
                    ? 'bg-[#D62B2B] text-white border-[#D62B2B] shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#D62B2B] hover:text-[#D62B2B] hover:scale-105'
                }`}
              >
                <div className={`w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                  activeTab === index ? 'bg-white text-[#D62B2B]' : 'bg-gray-100 text-gray-600 group-hover:bg-[#D62B2B] group-hover:text-white'
                }`}>
                  {index + 1}
                </div>
                <span className="text-xs md:text-sm">{tab.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 px-4 md:px-6 py-8 md:py-12 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0F152F] to-[#0F152F]/90 p-6 md:p-10">
            <div className="flex items-center gap-3 md:gap-5">
              <div className="w-12 h-12 md:w-16 md:h-16 text-white bg-[#D62B2B] rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl md:text-3xl font-black">{activeTab + 1}</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">{tabs[activeTab].content.heading}</h2>
                <div className="h-1 md:h-1.5 w-20 md:w-32 bg-[#D62B2B] mt-2 md:mt-3 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="p-6 md:p-10">
            {/* Fourth Tab Special Layout */}
            {activeTab === 3 ? (
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                {/* Left Column */}
                <div className="space-y-5 md:space-y-6">
                  <div className="bg-gray-50 p-5 md:p-7 rounded-xl md:rounded-2xl border-2 border-gray-200 shadow-sm">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                      {tabs[activeTab].content.description}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 md:p-7 rounded-xl md:rounded-2xl border-2 border-gray-200 space-y-3 md:space-y-4 shadow-sm">
                    {tabs[activeTab].content.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex gap-3 md:gap-4 items-start">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#D62B2B] mt-1.5 md:mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm md:text-base leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-5 md:space-y-6">
                  <h3 className="text-2xl md:text-3xl font-black text-[#0F152F]">
                    {tabs[activeTab].content.subtitle}
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5 md:gap-3">
                    {tabs[activeTab].content.skills.map((skill, idx) => (
                      <div key={idx} className="flex gap-3 md:gap-4 items-center bg-white p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-gray-200 hover:border-[#D62B2B] transition-all group shadow-sm">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#D62B2B] flex items-center justify-center text-white text-sm md:text-base font-bold flex-shrink-0">
                          {idx + 1}
                        </div>
                        <span className="text-gray-700 text-sm md:text-base font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                {/* Left Column */}
                <div className="space-y-5 md:space-y-6">
                  <div className="bg-gray-50 p-5 md:p-7 rounded-xl md:rounded-2xl border-2 border-gray-200 shadow-sm">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                      {tabs[activeTab].content.description}
                    </p>
                  </div>
                  
                  {tabs[activeTab].content.subtitle && (
                    <div className="space-y-4 md:space-y-5">
                      <h3 className="text-2xl md:text-3xl font-black text-[#0F152F]">
                        {tabs[activeTab].content.subtitle}
                      </h3>
                      {tabs[activeTab].content.skills && (
                        <div className="grid grid-cols-1 gap-2.5 md:gap-3">
                          {tabs[activeTab].content.skills.map((skill, idx) => (
                            <div key={idx} className="flex gap-3 md:gap-4 items-center bg-white p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-gray-200 hover:border-[#D62B2B] transition-all group shadow-sm">
                              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#D62B2B] flex items-center justify-center text-white text-sm md:text-base font-bold flex-shrink-0">
                                {idx + 1}
                              </div>
                              <span className="text-gray-700 text-sm md:text-base font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Right Column - Accordions */}
                <div className="space-y-3 md:space-y-4">
                  {tabs[activeTab].content.accordions && tabs[activeTab].content.accordions.map((accordion, idx) => {
                    const isOpen = openAccordion === idx;
                    return (
                      <div
                        key={idx}
                        className={`bg-white rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all duration-300 shadow-sm ${
                          isOpen ? 'border-[#D62B2B] shadow-lg' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <button
                          onClick={() => setOpenAccordion(isOpen ? null : idx)}
                          className="w-full p-4 md:p-5 font-bold text-[#0F152F] text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="flex items-center gap-2.5 md:gap-3 flex-1 pr-3">
                            <span className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-[#D62B2B] flex items-center justify-center text-white text-xs md:text-sm font-black flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-sm md:text-base">{accordion.title}</span>
                          </span>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <Minus className="w-5 h-5 text-[#D62B2B]" />
                            ) : (
                              <Plus className="w-5 h-5 text-gray-600" />
                            )}
                          </div>
                        </button>
                        <div className={`transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                          <div className="p-4 md:p-6 bg-gray-50 border-t-2 border-gray-200">
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">{accordion.content}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* CTA Button */}
            {tabs[activeTab].content.readMoreLink && (
              <div className="mt-8 md:mt-12 text-center">
                <a
                  href={tabs[activeTab].content.readMoreLink}
                  className="inline-flex items-center gap-3 md:gap-4 bg-[#D62B2B] text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-[#0F152F] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Explore More</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabGallery;