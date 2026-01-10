'use client';
import React, { useState } from 'react';
import { ChevronRight, Target, Award, Users, CheckCircle2, Zap, Activity, Radio } from 'lucide-react';

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 1,
      title: "Strategic Positioning",
      icon: Target,
      content: {
        description: "As a leading transmission and distribution & engineering company, SANPEC is committed to engineering excellence, innovation, and customer-centric solutions. To maintain its position as an industry leader, SANPEC integrates cutting-edge structural analysis, advanced materials, and digital tools while fostering strong industry partnerships and driven innovation practices.",
        secondParagraph: "The table below presents SANPEC's strategic approaches/examples, structured into three key functional areas: Leadership, Operations, and Delivery. These functional areas ensure SANPEC remains at the forefront of engineering excellence, client engagement, and innovative practices, delivering value-driven, high-performance solutions for grid infrastructure in the United States.",
        image: "https://sanpec-excellence.com/wp-content/uploads/2025/06/Untitled-design-12-1024x486.png"
      }
    },
    {
      id: 2,
      title: "Excellent Project Delivery",
      icon: Award,
      content: {
        projects: [
          {
            title: "West Fort McMurray (WFMAC) 500kV Project – Alberta, Canada",
            overview: "SANPEC demonstrated engineering excellence and strategic leadership in the West Fort McMurray 500kV project, serving as a key partner to the owners in the design and engineering of a cutting-edge eight-tower lattice family and steel poles. This transformative project was instrumental in strengthening Alberta's power infrastructure to meet growing energy demands with efficiency and reliability.",
            contributions: [
              "Comprehensive Design and Engineering Expertise: Conducted in-depth design reviews and engineering assessments, ensuring the project met and exceeded the industry's highest standards.",
              "Full-Scale Tower Testing Leadership: Witnessed and validated rigorous full-scale tower testing, guaranteeing compliance with stringent quality and safety requirements.",
              "Cost Optimization: Played a pivotal role in vendor selection and pricing negotiations, delivering substantial cost savings without compromising on quality or timelines.",
              "Quality Assurance and Control Excellence: Provided meticulous QA/QC oversight during the manufacturing and supply of lattice towers and steel poles, ensuring flawless execution and long-term reliability."
            ],
            recognition: "This project was celebrated as an award-winning success for its outstanding profitability and expedited construction completion, setting a benchmark for efficiency, innovation, and sustainability in large-scale grid infrastructure projects."
          },
          {
            title: "SunZia 500kV HVAC Project – New Mexico and Arizona, USA",
            overview: "SANPEC played a vital role in the transformative SunZia 500kV HVAC project, managing the design and engineering of an advanced seven-tower lattice family and steel poles spanning the states of New Mexico and Arizona. This project is a cornerstone in enhancing grid reliability and renewable energy integration across the region.",
            contributions: [
              "Design and Engineering Leadership: Conducted detailed design reviews and rigorous engineering validation to ensure project alignment with top-tier industry standards.",
              "Structural Integrity Assurance: Oversaw comprehensive full-scale tower testing, guaranteeing structural integrity and optimal performance under diverse operational conditions.",
              "Quality Assurance Expertise: Delivered expert QA/QC services during the manufacturing of prototype towers, maintaining excellence in production and adherence to specifications.",
              "Vendor Collaboration and Cost Optimization: Partnered closely with vendors to streamline manufacturing processes, reducing costs and ensuring timely delivery.",
              "Risk Mitigation Strategies: Implemented advanced risk assessment frameworks to address potential challenges during construction, minimizing delays and safeguarding project timelines."
            ],
            recognition: "The project was widely lauded for its exceptional profitability and expedited timeline, setting new benchmarks in the energy sector for innovation, efficiency, and execution excellence."
          },
          {
            title: "EV 2020 Transmission Line: 345kV Project – Wyoming, USA",
            overview: "SANPEC provided critical support to the EV 2020 Transmission Line project, representing the owners in the design and engineering of steel poles for a 345kV transmission line. This project highlights SANPEC's expertise in delivering cost-efficient and reliable infrastructure solutions in challenging environments.",
            contributions: [
              "Design and Engineering Expertise: Led the design and prototype assembly of H-Frame steel poles, ensuring optimal functionality and adherence to industry standards.",
              "Strategic Vendor Collaboration: Assisted in selecting vendors and negotiating pricing, achieving cost savings without compromising quality.",
              "Quality Assurance and Control: Provided rigorous QA/QC oversight throughout the manufacturing and supply processes, ensuring the durability and performance of critical components.",
              "Construction Support: Delivered on-site construction support to facilitate smooth project execution and address real-time challenges effectively.",
              "Risk Management and Performance Optimization: Implemented advanced risk mitigation strategies, minimizing delays and ensuring consistent progress throughout the project lifecycle."
            ],
            recognition: "The EV 2020 Transmission Line project was celebrated for its efficient execution and cost optimization, setting a high standard for similar projects in the region."
          }
        ]
      }
    },
    {
      id: 3,
      title: "Building Talent as the Foundation of Progress",
      icon: Users,
      content: {
        description: "SANPEC recognizes that a skilled and empowered workforce is the cornerstone of driving innovation, ensuring operational excellence, and achieving sustainable growth in the energy sector. By prioritizing workforce development, SANPEC fosters a culture of continuous learning and professional advancement, equipping individuals with the expertise needed to navigate the complexities of modern energy systems.",
        strategies: [
          {
            title: "Comprehensive Training Programs",
            content: "Offering specialized training in grid management, renewable energy integration, and advanced technologies such as IoT and AI. These programs enhance technical skills, ensuring employees are well-prepared to address emerging challenges and opportunities in the energy sector."
          },
          {
            title: "Leadership Development Initiatives",
            content: "Identifying and nurturing future leaders through tailored leadership programs that focus on strategic decision-making, resilience, and innovation. SANPEC empowers its workforce to drive transformative change at all organizational levels."
          },
          {
            title: "Impact-focused Approach",
            content: "Committing to building a 21st century workforce that reflects the communities SANPEC serves. By fostering an environment where diverse perspectives thrive, the company enhances creativity, innovation, and collaboration."
          },
          {
            title: "Collaborations with Educational Institutions",
            content: "Partnering with universities, technical schools, and training centers to develop programs that align with industry needs. These collaborations bridge the gap between academic research and practical application, ensuring a steady pipeline of skilled professionals."
          },
          {
            title: "On-the-Job Learning Opportunities",
            content: "Providing hands-on learning experiences through real-world projects, mentorship, and cross-functional teams. These opportunities help employees build practical expertise and foster a deeper understanding of the energy sector's evolving landscape."
          }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50 relative overflow-hidden ">
      
      {/* Engineering Background Pattern */}
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-blue-50 to-blue-100 transform -skew-x-12 origin-bottom-left"></div>
      <div className="absolute inset-0 opacity-[0.03] ">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 20px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#1e40af"/>
              <circle cx="80" cy="20" r="2" fill="#1e40af"/>
              <circle cx="20" cy="80" r="2" fill="#1e40af"/>
              <circle cx="80" cy="80" r="2" fill="#1e40af"/>
              <line x1="20" y1="20" x2="80" y2="20" stroke="#1e40af" strokeWidth="0.5"/>
              <line x1="20" y1="80" x2="80" y2="80" stroke="#1e40af" strokeWidth="0.5"/>
              <line x1="20" y1="20" x2="20" y2="80" stroke="#1e40af" strokeWidth="0.5"/>
              <line x1="80" y1="20" x2="80" y2="80" stroke="#1e40af" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Floating Technical Elements */}
      <div className="absolute top-20 right-20 opacity-5 hidden lg:block">
        <Zap className="w-32 h-32 text-blue-600" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-5 hidden lg:block">
        <Activity className="w-40 h-40 text-blue-600" />
      </div>

      {/* Main Content */}
      <div className="w-full px-3 md:px-6 lg:px-8 py-6 md:py-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          
          {/* Vertical Tabs - Left Side */}
          <div className="w-full lg:w-80 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
            {tabs.map((tab, index) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex-shrink-0 lg:flex-shrink w-full text-left p-4 md:p-5 rounded-xl transition-all duration-300 border ${
                    isActive
                      ? 'bg-blue-50 border-blue-300 shadow-md'
                      : 'bg-white/80 backdrop-blur-sm border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-lg flex-shrink-0 ${
                      isActive 
                        ? 'bg-blue-100' 
                        : 'bg-gray-100'
                    }`}>
                      <IconComponent className={`w-5 h-5 ${
                        isActive ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold text-sm md:text-base transition-colors ${
                        isActive ? 'text-blue-700' : 'text-gray-700'
                      }`}>
                        {tab.title}
                      </h3>
                      <ChevronRight className={`w-4 h-4 mt-1 transition-all duration-300 ${
                        isActive 
                          ? 'text-blue-600 translate-x-1' 
                          : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Area - Center */}
          <div className="flex-1 min-w-0">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200">
              
              {/* Content Body */}
              <div className="p-5 md:p-8 lg:p-10">
                
                {/* Strategic Positioning Content */}
                {activeTab === 0 && (
                  <div className="space-y-6">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                      {tabs[activeTab].content.description}
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                      {tabs[activeTab].content.secondParagraph}
                    </p>
                    <div className="mt-6 rounded-lg overflow-hidden border border-gray-200 shadow-md">
                      <img 
                        src={tabs[activeTab].content.image} 
                        alt="Strategic Positioning" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                )}

                {/* Excellent Project Delivery Content */}
                {activeTab === 1 && (
                  <div className="space-y-8">
                    {tabs[activeTab].content.projects.map((project, idx) => (
                      <div key={idx}>
                        <h3 className="text-lg md:text-xl font-bold mb-3 text-blue-700">
                          {project.title}
                        </h3>
                        
                        <div className="mb-4">
                          <h4 className="text-base font-semibold text-gray-800 mb-2">Project Overview</h4>
                          <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">{project.overview}</p>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-base font-semibold text-gray-800 mb-3">Key Contributions:</h4>
                          <div className="space-y-2.5">
                            {project.contributions.map((contribution, cIdx) => (
                              <div key={cIdx} className="flex gap-2.5 items-start">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                                  {contribution}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                          <h4 className="text-base font-semibold text-blue-800 mb-2">Recognition:</h4>
                          <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                            {project.recognition}
                          </p>
                        </div>

                        {idx < tabs[activeTab].content.projects.length - 1 && (
                          <div className="mt-8 border-t border-gray-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Building Talent Content */}
                {activeTab === 2 && (
                  <div className="space-y-6">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                      {tabs[activeTab].content.description}
                    </p>
                    
                    <h3 className="text-lg md:text-xl font-bold mt-6 mb-4 text-blue-700">
                      Key Strategies
                    </h3>

                    <div className="space-y-4">
                      {tabs[activeTab].content.strategies.map((strategy, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg p-4 md:p-5 bg-gray-50 hover:bg-white hover:border-blue-200 transition-all">
                          <div className="flex gap-3 items-start">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                              {idx + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-2">
                                {strategy.title}
                              </h4>
                              <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                                {strategy.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Power Structure Elements - Right Side */}
          <div className="hidden xl:block w-64 space-y-4">
            
            {/* Transmission Tower */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="flex flex-col items-center">
                <svg className="w-32 h-40 mb-3" viewBox="0 0 100 160">
                  <line x1="50" y1="10" x2="30" y2="40" stroke="#1e40af" strokeWidth="3"/>
                  <line x1="50" y1="10" x2="70" y2="40" stroke="#1e40af" strokeWidth="3"/>
                  <line x1="30" y1="40" x2="20" y2="80" stroke="#1e40af" strokeWidth="3"/>
                  <line x1="70" y1="40" x2="80" y2="80" stroke="#1e40af" strokeWidth="3"/>
                  <line x1="20" y1="80" x2="10" y2="140" stroke="#1e40af" strokeWidth="4"/>
                  <line x1="80" y1="80" x2="90" y2="140" stroke="#1e40af" strokeWidth="4"/>
                  <line x1="10" y1="140" x2="90" y2="140" stroke="#1e40af" strokeWidth="5"/>
                  <circle cx="50" cy="10" r="4" fill="#dc2626"/>
                  <circle cx="30" cy="40" r="3" fill="#dc2626"/>
                  <circle cx="70" cy="40" r="3" fill="#dc2626"/>
                  <line x1="15" y1="50" x2="85" y2="50" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2,2"/>
                  <line x1="15" y1="60" x2="85" y2="60" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2,2"/>
                  <line x1="15" y1="70" x2="85" y2="70" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2,2"/>
                </svg>
                <h4 className="text-sm font-bold text-gray-800 text-center">Transmission Tower</h4>
                <p className="text-xs text-gray-600 text-center mt-1">500kV Structure</p>
              </div>
            </div>

            {/* Power Flow Indicator */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Radio className="w-6 h-6 text-blue-600 animate-pulse" />
                <h4 className="text-sm font-bold text-gray-800">Power Flow</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span className="text-xs text-gray-700">Active Line</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <span className="text-xs text-gray-700">High Voltage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-xs text-gray-700">Monitoring</span>
                </div>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <h4 className="text-sm font-bold text-gray-800 mb-3">Technical Specs</h4>
              <div className="space-y-2.5">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-xs text-gray-600">Voltage</span>
                  <span className="text-xs font-semibold text-blue-700">500kV</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-xs text-gray-600">Capacity</span>
                  <span className="text-xs font-semibold text-blue-700">2000MW</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-xs text-gray-600">Distance</span>
                  <span className="text-xs font-semibold text-blue-700">150km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Efficiency</span>
                  <span className="text-xs font-semibold text-green-600">98.5%</span>
                </div>
              </div>
            </div>

            {/* Grid Status */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <h4 className="text-sm font-bold text-gray-800">Grid Status</h4>
              </div>
              <p className="text-xs text-gray-700 font-semibold">OPERATIONAL</p>
              <p className="text-xs text-gray-600 mt-1">All systems nominal</p>
            </div>

          </div>

        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
};

export default VerticalTabs;