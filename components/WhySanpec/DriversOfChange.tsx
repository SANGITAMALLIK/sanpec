'use client';
import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Zap, Sparkles, TrendingUp, Globe, Shield, Cpu, Settings, Lightbulb, Monitor, Users, Building2 } from 'lucide-react';

const TabGallery = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  const tabs = [
    {
      id: 1,
      title: "Engineering Excellence",
      icon: Settings,
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
      icon: Lightbulb,
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
      icon: Monitor,
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
      icon: Users,
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
      icon: Building2,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#101631] to-slate-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(205, 9, 27, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(205, 9, 27, 0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#101631]/20 rounded-full blur-3xl" style={{animation: 'pulse-glow 4s ease-in-out infinite'}}></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#CD091B]/20 rounded-full blur-3xl" style={{animation: 'pulse-glow 4s ease-in-out infinite', animationDelay: '2s'}}></div>

      {/* Hero Section */}
      <div className="relative z-10 text-center py-12 md:py-16 px-4">
        <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#101631]/20 to-[#CD091B]/20 backdrop-blur-xl border border-[#CD091B]/40 px-4 md:px-8 py-2 md:py-3 rounded-full mb-4 md:mb-6 shadow-2xl">
          <Zap className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse" />
          <span className="text-white font-bold text-xs md:text-sm tracking-wide">TRANSFORMING ENERGY INFRASTRUCTURE</span>
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#101631] via-gray-200 to-[#CD091B] mb-3 md:mb-4 tracking-tighter drop-shadow-2xl">
          Drivers Of Change
        </h1>
        <p className="text-blue-100 text-base md:text-xl max-w-4xl mx-auto font-light leading-relaxed px-4">
          Leading the transformation in transmission & distribution through innovation, excellence, and strategic vision
        </p>
        
        {/* Decorative Elements */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 md:mt-8 px-4">
          <div className="flex items-center gap-2 text-blue-300">
            <Globe className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">Global Standards</span>
          </div>
          <div className="flex items-center gap-2 text-cyan-300">
            <Shield className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">ISO Certified</span>
          </div>
          <div className="flex items-center gap-2 text-[#CD091B]">
            <Cpu className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">Smart Technology</span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="relative z-20 backdrop-blur-2xl bg-gradient-to-r from-slate-900/60 via-[#101631]/60 to-slate-900/60 border-y border-white/20 sticky top-0 shadow-2xl">
        <div className="max-w-full px-3 md:px-6">
          <div className="flex justify-start md:justify-center gap-2 py-4 md:py-5 overflow-x-auto scrollbar-hide">
            {tabs.map((tab, index) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(index);
                    setOpenAccordion(null);
                  }}
                  className={`group relative flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-3.5 rounded-xl font-bold whitespace-nowrap transition-all duration-500 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-[#CD091B] via-[#CD091B]/90 to-[#CD091B] text-white shadow-2xl scale-105'
                      : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-105'
                  }`}
                >
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-xs md:text-sm">{tab.title}</span>
                  {activeTab === index && (
                    <TrendingUp className="w-3 h-3 md:w-4 md:h-4 animate-bounce" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 px-4 md:px-6 py-8 md:py-10 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900/95 to-[#101631]/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#CD091B] via-[#CD091B]/90 to-[#CD091B] p-6 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute -right-20 -top-20 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 flex items-center gap-3 md:gap-5">
              {React.createElement(tabs[activeTab].icon, {
                className: "w-12 h-12 md:w-16 md:h-16 text-white bg-white/30 p-2.5 md:p-4 rounded-xl md:rounded-2xl backdrop-blur-md shadow-xl"
              })}
              <div>
                <h2 className="text-2xl md:text-5xl font-black text-white drop-shadow-2xl tracking-tight">{tabs[activeTab].content.heading}</h2>
                <div className="h-1 md:h-1.5 w-20 md:w-32 bg-white/90 mt-2 md:mt-3 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="p-6 md:p-10">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column */}
              <div className="space-y-5 md:space-y-6">
                <div className="relative group">
                  <div className="absolute -left-2 md:-left-3 top-0 bottom-0 w-1 md:w-1.5 bg-gradient-to-b from-[#CD091B] via-[#CD091B]/90 to-[#CD091B] rounded-full"></div>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed pl-6 md:pl-8 text-justify bg-gradient-to-br from-slate-800/60 to-[#101631]/30 p-5 md:p-7 rounded-xl md:rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-shadow">
                    {tabs[activeTab].content.description}
                  </p>
                </div>
                {tabs[activeTab].content.bullets && (
                  <div className="bg-gradient-to-br from-slate-800/60 to-[#101631]/40 p-5 md:p-7 rounded-xl md:rounded-2xl border border-white/10 space-y-3 md:space-y-4 shadow-xl">
                    {tabs[activeTab].content.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex gap-3 md:gap-4 items-start group">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-gradient-to-r from-[#CD091B] via-[#CD091B]/90 to-[#CD091B] mt-1.5 md:mt-2 group-hover:scale-150 transition-transform shadow-lg flex-shrink-0"></div>
                        <span className="text-gray-200 text-sm md:text-base leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}

                {tabs[activeTab].content.subtitle && (
                  <div className="space-y-4 md:space-y-5">
                    <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#CD091B] via-[#CD091B]/90 to-[#CD091B] bg-clip-text text-transparent drop-shadow-lg">
                      {tabs[activeTab].content.subtitle}
                    </h3>
                    {tabs[activeTab].content.skills && (
                      <div className="grid grid-cols-1 gap-2.5 md:gap-3">
                        {tabs[activeTab].content.skills.map((skill, idx) => (
                          <div key={idx} className="flex gap-3 md:gap-4 items-center bg-gradient-to-r from-slate-800/60 to-transparent p-3 md:p-4 rounded-lg md:rounded-xl border border-white/10 hover:border-white/30 transition-all group shadow-lg hover:shadow-xl">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-r from-[#CD091B] via-[#CD091B]/90 to-[#CD091B] flex items-center justify-center text-white text-sm md:text-base font-bold group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                              {idx + 1}
                            </div>
                            <span className="text-gray-200 text-sm md:text-base font-medium">{skill}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-5 md:space-y-6">
                {tabs[activeTab].content.accordions && (
                  <div className="space-y-3 md:space-y-4">
                    {tabs[activeTab].content.accordions.map((accordion, idx) => {
                      const isOpen = openAccordion === idx;
                      return (
                        <div
                          key={idx}
                          className={`bg-gradient-to-br from-slate-800/60 to-[#101631]/40 rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all duration-500 shadow-xl ${
                            isOpen ? 'border-white/40 shadow-2xl' : 'border-white/10 hover:border-white/25'
                          }`}
                        >
                          <button
                            onClick={() => setOpenAccordion(isOpen ? null : idx)}
                            className="w-full p-4 md:p-5 font-bold text-white text-left flex items-center justify-between hover:bg-white/5 transition-colors group"
                          >
                            <span className="flex items-center gap-2.5 md:gap-3">
                              <span className="w-7 h-7 md:w-9 md:h-9 rounded-lg bg-gradient-to-r from-[#CD091B] via-[#CD091B]/90 to-[#CD091B] flex items-center justify-center text-xs md:text-sm font-black shadow-lg flex-shrink-0">
                                {idx + 1}
                              </span>
                              <span className="text-sm md:text-base">{accordion.title}</span>
                            </span>
                            <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 flex-shrink-0 ${isOpen ? 'rotate-180 text-cyan-400' : 'text-white/70'}`} />
                          </button>
                          <div className={`transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                            <div className="p-4 md:p-6 bg-slate-900/70 border-t border-white/10">
                              <p className="text-gray-200 text-sm md:text-base leading-relaxed">{accordion.content}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            {tabs[activeTab].content.readMoreLink && (
              <div className="mt-8 md:mt-12 text-center">
                <a
                  href={tabs[activeTab].content.readMoreLink}
                  className="group inline-flex items-center gap-3 md:gap-4 bg-gradient-to-r from-[#CD091B] via-[#CD091B]/90 to-[#CD091B] text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  <span className="relative z-10">Explore More</span>
                  <ExternalLink className="relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:rotate-45 transition-transform duration-300" />
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