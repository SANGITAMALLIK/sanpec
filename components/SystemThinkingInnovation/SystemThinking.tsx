'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const tabsData = [
  {
    id: 'tab1',
    title: 'Rethinking Transmission Engineering',
    image: 'https://sanpec-excellence.com/wp-content/uploads/2025/06/Colorful-3-Bullet-Point-Step-Process-Infographic-Graph-8.png',
    paragraphs: [
      'Traditional transmission engineering has long been constrained by rigid design methodologies, extended project timelines, and reactive maintenance approaches. SANPEC is challenging these limitations by adopting a data-driven, modular, and predictive approach, transforming transmission systems into intelligent, self-monitoring infrastructures that evolve with grid dynamics.',
      'A key focus of this transformation is structural optimization, ensuring that materials, configurations, and designs are not only efficient but also cost-effective, environmentally responsible, and resilient. By integrating advanced material science, optimized structure configurations, and lifecycle-based design principles, SANPEC reduces material waste, enhances installation efficiency, and minimizes long-term operational costs. This includes right-of-way (ROW) optimization, ensuring efficient land use while minimizing environmental impacts',
      'Moving from a reactive to a proactive infrastructure model, SANPEC deploys smart sensors and real-time analytics to enable transmission assets to predict failures before they occur, significantly improving grid reliability. This predictive approach is further enhanced through AI-driven structural analysis, allowing for real-world load assessments instead of relying on purely theoretical models. This ensures that tower and conductor designs are optimized for performance, cost efficiency, and aesthetic considerations, while also using environmentally preferable structures such as steel poles and towers.',
      'Beyond technical excellence, SANPEC is committed to lifecycle economics and best-practice specifications, ensuring that transmission projects are built for long-term sustainability, economic value, and ease of maintenance.'
    ]
  },
  {
    id: 'tab2',
    title: 'Creating Climate-Resilient Infrastructure',
    images: [
      'https://sanpec-excellence.com/wp-content/uploads/2025/06/TSDOS-2020-Tech.-Paper-Risk-Mitigation-Planning-for-a-Successful-EPC-Project.pdf-image-061-1.jpg',
      'https://sanpec-excellence.com/wp-content/uploads/2025/06/TSDOS-2020-Tech.-Paper-Risk-Mitigation-Planning-for-a-Successful-EPC-Project.pdf-image-012-1.jpg'
    ],
    headerImage: 'https://sanpec-excellence.com/wp-content/uploads/2025/06/Screenshot-Capture-2025-06-10-19-21-20.png',
    introText: 'Modern transmission engineering must adapt to extreme weather conditions and evolving energy demands. SANPEC is at the forefront of grid hardening, integrating climate-resilient materials, adaptive grid expansion models, and dynamic load management solutions to enhance long-term system reliability and resilience.',
    listItems: [
      {
        title: 'Grid Hardening & Advanced Transmission Structures',
        description: 'SANPEC is deploying reinforced transmission towers, covered conductors, and fire-resistant insulators to minimize damage from high winds, wildfires, and extreme temperatures. These structures integrate high-strength composite materials and advanced coatings to enhance durability and longevity.'
      },
      {
        title: 'Hardened Distribution Networks',
        description: 'To mitigate wildfire risks and improve service continuity, SANPEC is implementing covered conductors, composite cross-arms, and fire-resistant poles in high-risk areas. Smart monitoring systems and automated fault isolation ensure rapid response to potential threats, reducing outage duration.'
      },
      {
        title: 'Substation Hardening & Flood Mitigation',
        description: 'Extreme weather events such as hurricanes and floods pose significant risks to substations. SANPEC is fortifying control houses to withstand EF3 tornadoes, elevating critical equipment to prevent flood damage, and installing real-time weather monitoring systems for proactive risk management.'
      },
      {
        title: 'Modular & Adaptive Tower Designs',
        description: 'Instead of fixed structures, SANPEC\'s modular tower systems allow rapid deployment in varied terrains and reduce installation time and costs. These designs incorporate seismic resilience and load-balancing capabilities to accommodate shifting energy flows.'
      },
      {
        title: 'Load-Adaptive Grid Infrastructure',
        description: 'With increasing renewable energy integration, SANPEC is pioneering dynamic load-balancing systems that adjust in real time to prevent grid congestion, optimize power flow, and ensure uninterrupted transmission.'
      }
    ]
  },
  {
    id: 'tab3',
    title: 'Integrated Project Execution Ecosystems',
    images: [
      'https://sanpec-excellence.com/wp-content/uploads/2025/06/Screenshot-2025-03-27-222839.png',
      'https://sanpec-excellence.com/wp-content/uploads/2025/06/21.jpg',
      'https://sanpec-excellence.com/wp-content/uploads/2025/06/inspection.png',
      'https://sanpec-excellence.com/wp-content/uploads/2025/06/22png.png',
      'https://sanpec-excellence.com/wp-content/uploads/2025/06/Screenshot-2025-03-27-222109.png'
    ],
    paragraphs: [
      'Transmission projects frequently encounter delays, budget overruns, and inefficiencies due to fragmented coordination between stakeholders. SANPEC is revolutionizing project execution by establishing integrated ecosystems that ensure seamless collaboration from design and procurement to construction, commissioning, and lifecycle management.',
      'To enhance efficiency and transparency, SANPEC digitizes the entire project lifecycle, creating a centralized platform that connects utilities, regulatory bodies, suppliers, and field teams. This minimizes construction delays caused by lagging information, supply chain disruptions, or environmental constraints. Additionally, blockchain-based supply chain tracking ensures real-time visibility into component sourcing, logistics, and deployment schedules, reducing procurement risks and improving cost predictability.',
      'SANPEC is also leveraging advanced terrain intelligence to optimize infrastructure placement in challenging environments. Using drone-based surveying, geospatial mapping, and AI-powered terrain modeling, the company enhances site selection, optimizes foundation design, and minimizes environmental impact. These capabilities, combined with automated progress tracking, risk identification, and contingency planning, ensure that projects are executed on time, within budget, and with the highest quality standards.'
    ]
  },
  {
    id: 'tab4',
    title: 'Empowering People & Transforming Culture',
    images: [
      'https://sanpec-excellence.com/wp-content/uploads/2025/06/Educator-focused-eCM-Presentation.pptx.pdf-image-143-1.jpg',
      'https://sanpec-excellence.com/wp-content/uploads/2025/06/Screenshot-2025-03-27-232556.png'
    ],
    introText: 'At SANPEC, innovation is not just about technology—it\'s about people. A forward-thinking workforce is the foundation of breakthrough engineering, operational excellence, and long-term industry leadership. SANPEC is investing in cutting-edge skill development, cross-disciplinary collaboration, and a culture of continuous learning to drive engineering excellence and adaptive innovation.',
    listItems: [
      {
        title: 'AI-Driven Engineering & Immersive Training',
        description: 'SANPEC integrates AI-powered simulation tools, digital twin technology, and virtual prototyping to train engineers in advanced transmission design, predictive maintenance, and structural optimization, ensuring real-world expertise before implementation.'
      },
      {
        title: 'Crowdsourced Innovation & Internal Incubation',
        description: 'Employees at all levels are empowered to propose, test, and refine new ideas through structured R&D programs, innovation hubs, and rapid prototyping environments. This fosters continuous problem-solving and accelerates technology adoption.'
      },
      {
        title: 'Building a Future-Ready, Diverse Workforce',
        description: 'SANPEC is actively expanding its STEM talent pipeline by recruiting skilled engineers, technicians, and future leaders. The company prioritizes diversity and inclusion, fostering targeted leadership programs that bring fresh perspectives to energy infrastructure projects. By empowering women and underrepresented groups, SANPEC is building a resilient, innovative, and future-ready workforce to shape the next generation of transmission and distribution solutions.'
      }
    ],
    footer: 'By embedding systemic innovation at every level—from infrastructure resilience to project execution and workforce transformation—SANPEC is redefining what\'s possible in transmission engineering. The energy landscape is evolving rapidly, and only those who innovate faster will lead the future. With its commitment to intelligent infrastructure, digital transformation, and a people-first culture, SANPEC isn\'t just keeping up with industry trends—it\'s shaping them.'
  }
];

export default function InnovationTabs() {
  const [expandedTab, setExpandedTab] = useState('tab1');

  const activeTabData = tabsData.find(tab => tab.id === expandedTab);

  return (
    <div className="min-h-screen bg-white">
      <div className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3">
            {tabsData.map((tab) => {
              const isActive = expandedTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setExpandedTab(tab.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap ${isActive ? 'bg-red-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <aside className="hidden lg:block w-80 bg-gray-50 lg:sticky lg:top-0 h-full lg:min-h-screen border-r border-gray-200">
            <nav className="py-8 px-6 relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-400"></div>
              {tabsData.map((tab) => {
                const isExpanded = expandedTab === tab.id;
                return (
                  <div key={tab.id} className="mb-6 relative">
                    <div className="absolute left-2 top-5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full shadow-md z-20"></div>
                    <div className={`absolute left-5 top-6 w-6 h-0.5 transition-all duration-300 ${isExpanded ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
                    <div 
                      onClick={() => setExpandedTab(tab.id)}
                      className={`relative ml-11 flex items-center justify-between px-4 py-3.5 cursor-pointer transition-all duration-300 rounded-lg border-2 ${isExpanded ? 'border-gray-300 text-gray-900 shadow-xl bg-gray-100' : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'}`}
                    >
                      <span className="text-sm font-semibold flex-1 leading-tight">{tab.title}</span>
                      <span className={`transition-all duration-300 flex-shrink-0 ml-2 ${isExpanded ? 'text-gray-900' : 'text-gray-400'}`}>
                        <ChevronDown size={18} className={`transition-transform duration-300 ${isExpanded ? '' : '-rotate-90'}`} />
                      </span>
                    </div>
                  </div>
                );
              })}
            </nav>
          </aside>

          <main className="flex-1 bg-white min-h-screen">
            <div className="p-6 sm:p-8 lg:p-12">
              {activeTabData && (
                <div className="opacity-0 animate-fadeIn">
                  {/* Tab 1: Single Image First, Then Content */}
                  {expandedTab === 'tab1' && (
                    <div className="space-y-8 md:space-y-12">
                      <div className="rounded-xl md:rounded-2xl overflow-hidden">
                        <img src={activeTabData.image} alt="Transmission Engineering" className="w-full h-auto" />
                      </div>
                      <div className="bg-gray-50 border-l-4 border-red-600 p-6 md:p-8 rounded-r-xl">
                        <p className="text-black text-base md:text-lg leading-relaxed">{activeTabData.paragraphs[0]}</p>
                      </div>
                      <div className="space-y-6">
                        {activeTabData.paragraphs.slice(1).map((para, idx) => (
                          <div key={idx} className="relative bg-white rounded-xl p-5 md:p-6 shadow-lg border border-gray-200">
                            <div className="absolute -left-3 md:-left-4 top-5 md:top-6 w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base md:text-lg">{idx + 1}</span>
                            </div>
                            <div className="ml-6 md:ml-8">
                              <p className="text-black leading-relaxed text-sm md:text-base">{para}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Keep Exactly As Is - Perfect! */}
                  {expandedTab === 'tab2' && (
                    <div className="space-y-8 md:space-y-12">
                      <div className="rounded-xl md:rounded-2xl overflow-hidden">
                        <img src={activeTabData.headerImage} alt="Header" className="w-full h-auto" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {activeTabData.images?.map((img, idx) => (
                          <div key={idx} className="rounded-lg md:rounded-xl overflow-hidden shadow-lg md:shadow-xl">
                            <img src={img} alt={`Climate ${idx + 1}`} className="w-full h-auto" />
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-50 border-l-4 border-red-600 p-6 md:p-8 rounded-r-xl shadow-lg">
                        <p className="text-black text-base md:text-lg leading-relaxed">{activeTabData.introText}</p>
                      </div>
                      <div className="space-y-5 md:space-y-6">
                        {activeTabData.listItems?.map((item, idx) => (
                          <div key={idx} className="relative bg-white rounded-xl p-5 md:p-6 shadow-lg border border-gray-200">
                            <div className="absolute -left-3 md:-left-4 top-5 md:top-6 w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base md:text-lg">{idx + 1}</span>
                            </div>
                            <div className="ml-6 md:ml-8">
                              <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">{item.title}</h3>
                              <p className="text-black leading-relaxed text-sm md:text-base">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 3: 5 Images Grid First, Then Full Width Content */}
                  {expandedTab === 'tab3' && (
                    <div className="space-y-8 md:space-y-12">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {activeTabData.images?.map((img, idx) => (
                          <div 
                            key={idx} 
                            className={`rounded-lg md:rounded-xl overflow-hidden ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
                          >
                            <img src={img} alt={`Project ${idx + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-50 border-l-4 border-red-600 p-6 md:p-8 rounded-r-xl shadow-lg">
                        <p className="text-black text-base md:text-lg leading-relaxed">{activeTabData.paragraphs[0]}</p>
                      </div>
                      <div className="space-y-6">
                        {activeTabData.paragraphs.slice(1).map((para, idx) => (
                          <div key={idx} className="relative bg-white rounded-xl p-5 md:p-6 shadow-lg border border-gray-200">
                            <div className="absolute -left-3 md:-left-4 top-5 md:top-6 w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base md:text-lg">{idx + 1}</span>
                            </div>
                            <div className="ml-6 md:ml-8">
                              <p className="text-black leading-relaxed text-sm md:text-base">{para}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 4: 2 Images Grid First, Then Full Width Content */}
                  {expandedTab === 'tab4' && (
                    <div className="space-y-8 md:space-y-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {activeTabData.images?.map((img, idx) => (
                          <div key={idx} className="rounded-xl md:rounded-2xl overflow-hidden">
                            <img src={img} alt={`People ${idx + 1}`} className="w-full h-auto" />
                          </div>
                        ))}
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-600 p-6 md:p-8 rounded-r-xl shadow-lg">
                        <p className="text-black text-base md:text-lg leading-relaxed">{activeTabData.introText}</p>
                      </div>
                      <div className="space-y-5 md:space-y-6">
                        {activeTabData.listItems?.map((item, idx) => (
                          <div key={idx} className="bg-white rounded-xl p-5 md:p-6 shadow-lg border border-gray-200">
                            <div className="flex items-start gap-3 md:gap-4">
                              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg md:text-xl">→</span>
                              </div>
                              <div className="flex-1">
                                <h3 className="text-base md:text-lg font-bold text-black mb-2">{item.title}</h3>
                                <p className="text-black leading-relaxed text-sm md:text-base">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {activeTabData.footer && (
                        <div className="p-6 md:p-8 bg-gray-900 rounded-xl md:rounded-2xl shadow-2xl">
                          <p className="text-white text-sm md:text-base leading-relaxed">{activeTabData.footer}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}