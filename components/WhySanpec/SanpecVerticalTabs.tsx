'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 1,
      title: "Strategic Positioning",
      content: {
        description: "As a leading transmission and distribution & engineering company, SANPEC is committed to engineering excellence, innovation, and customer-centric solutions. To maintain its position as an industry leader, SANPEC integrates cutting-edge structural analysis, advanced materials, and digital tools while fostering strong industry partnerships and driven innovation practices.",
        secondParagraph: "The table below presents SANPEC's strategic approaches/examples, structured into three key functional areas: Leadership, Operations, and Delivery. These functional areas ensure SANPEC remains at the forefront of engineering excellence, client engagement, and innovative practices, delivering value-driven, high-performance solutions for grid infrastructure in the United States.",
        tableData: [
          {
            pillar: "Leadership",
            effectiveApproaches: [
              "Pioneering advanced structural analysis for steel poles and lattice towers, ensuring robust and resilient designs.",
              "Setting industry benchmarks through the standard setting and publication of technical papers on advances in transmission engineering.",
              "Utilizing state-of-the-art tools for structural analysis, enhancing precision in design and detailing."
            ],
            clientEngagement: [
              "Cultivating partnerships with utilities, EPC contractors, and government agencies to deliver tailored transmission solutions.",
              "Offering comprehensive services from design and testing to construction support, ensuring seamless project execution.",
              "Providing client-centric solutions by customizing designs to meet specific project requirements and local social and environmental conditions."
            ],
            innovativePractices: [
              "Investing in R&D to develop sustainable engineering solutions, such as eco-friendly materials and designs.",
              "Implementing advanced technologies like full-scale structural testing and electrical testing to validate design integrity.",
              "Adopting lean manufacturing principles to optimize resource utilization and reduce project timelines."
            ]
          },
          {
            pillar: "Operations",
            effectiveApproaches: [
              "Ensuring quality through rigorous site audits and source inspections, adhering to international standards."
            ],
            clientEngagement: [
              "Maintaining open communication channels to address client feedback promptly and effectively."
            ],
            innovativePractices: [
              "Leveraging digital technologies for real-time monitoring and management of project milestones."
            ]
          },
          {
            pillar: "Delivery",
            effectiveApproaches: [
              "Ensuring on-time delivery through meticulous project scheduling and logistics planning.",
              "Providing end-to-end support, from material sourcing to construction oversight, guaranteeing project success."
            ],
            clientEngagement: [
              "Offering post-project support to assist clients with maintenance and operational challenges.",
              "Building long-term relationships by delivering consistent quality and reliability."
            ],
            innovativePractices: [
              "Continuously updating engineering practices to incorporate the latest industry advancements and regulatory requirements.",
              "Promoting a culture of interdisciplinary innovation to stay ahead in the dynamic field of transmission engineering."
            ]
          }
        ]
      }
    },
    {
      id: 2,
      title: "Excellent Project Delivery",
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
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 20px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7_5xl px-3 md:px-6 lg:px-8 py-6 md:py-10 relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          
          {/* Sidebar - Tower Design with Tabs */}
          <aside className="w-full lg:w-96 bg-gradient-to-b from-white to-gray-50 border-2 border-gray-200 shadow-lg">
            <nav className="py-8 px-6 relative">
              {/* Central Tower Pole */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#CD091B] via-gray-400 to-gray-300"></div>
              
              {tabs.map((tab, idx) => {
                const isActive = activeTab === idx;
                
                return (
                  <div key={tab.id} className="mb-6 relative">
                    {/* Connection Point on Tower (Insulator) */}
                    <div className={`absolute left-2 top-5 w-3 h-3 rounded-full shadow-md z-20 transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#CD091B] border-2 border-red-800 ring-4 ring-red-200' 
                        : 'bg-white border-2 border-gray-400'
                    }`}></div>
                    
                    {/* Horizontal Beam from Tower */}
                    <div className={`absolute left-5 top-6 w-6 h-0.5 transition-all duration-300 ${
                      isActive ? 'bg-[#CD091B]' : 'bg-gray-400'
                    }`}></div>

                    {/* Tab Item (Transformer Box) */}
                    <div 
                      onClick={() => setActiveTab(idx)}
                      className={`
                        relative ml-11 group flex items-center gap-3 px-5 py-4 cursor-pointer
                        transition-all duration-300 ease-out border-2
                        ${isActive
                          ? 'bg-white border-[#CD091B] text-gray-900 shadow-xl scale-105' 
                          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'
                        }
                      `}
                    >
                      {/* Number Badge */}
                      <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive ? 'bg-[#CD091B]' : 'bg-[#101631]'
                      }`}>
                        <span className="text-white font-bold text-lg">{idx + 1}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className={`font-bold text-sm transition-colors ${
                          isActive ? 'text-[#CD091B]' : 'text-gray-700'
                        }`}>
                          {tab.title}
                        </h3>
                      </div>
                      
                      {/* Active Power Indicator */}
                      {isActive && (
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                          <div className="w-2 h-2 bg-[#CD091B] rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
                        </div>
                      )}

                      {/* Power Line to Content */}
                      {isActive && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                          <div className="w-8 h-px bg-gradient-to-r from-[#CD091B] to-gray-300"></div>
                          <div className="w-1.5 h-1.5 rotate-45 bg-[#CD091B] -ml-0.5"></div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Tower Base Foundation */}
              <div className="absolute left-4 bottom-8 w-9 h-12 bg-gradient-to-b from-gray-400 to-gray-500 opacity-30" 
                   style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)'}}></div>
            </nav>
          </aside>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <div className="bg-white shadow-lg border-2 border-gray-200">
              
              <div className="p-5 md:p-8 lg:p-10">
                
                {/* Strategic Positioning */}
                {activeTab === 0 && (
                  <div className="space-y-6">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                      {tabs[activeTab].content.description}
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                      {tabs[activeTab].content.secondParagraph}
                    </p>
                    
                    {/* Strategic Table */}
                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full border-2 border-[#101631]">
                        <thead>
                          <tr>
                            <th className="bg-[#101631] text-white p-4 text-left font-bold border-2 border-white text-sm md:text-base w-[15%]">
                              Strategic Pillars
                            </th>
                            <th className="bg-gray-400 text-black p-4 text-center font-bold border-2 border-white text-sm md:text-base w-[28.33%]">
                              Effective Approaches
                            </th>
                            <th className="bg-gray-300 text-black p-4 text-center font-bold border-2 border-white text-sm md:text-base w-[28.33%]">
                              Client Engagement
                            </th>
                            <th className="bg-red-400 text-white p-4 text-center font-bold border-2 border-white text-sm md:text-base w-[28.33%]">
                              Innovative Practices
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {tabs[activeTab].content.tableData.map((row, idx) => (
                            <tr key={idx} className="border-2 border-gray-300">
                              <td className="bg-gray-100 p-4 font-bold text-[#101631] border-2 border-gray-300 align-top text-sm md:text-base">
                                {row.pillar}
                              </td>
                              <td className="bg-gray-200 p-4 border-2 border-gray-300 align-top">
                                <ul className="space-y-2">
                                  {row.effectiveApproaches.map((item, i) => (
                                    <li key={i} className="text-gray-800 text-xs md:text-sm leading-relaxed text-justify">
                                      - {item}
                                    </li>
                                  ))}
                                </ul>
                              </td>
                              <td className="bg-white p-4 border-2 border-gray-300 align-top">
                                <ul className="space-y-2">
                                  {row.clientEngagement.map((item, i) => (
                                    <li key={i} className="text-gray-800 text-xs md:text-sm leading-relaxed text-justify">
                                      - {item}
                                    </li>
                                  ))}
                                </ul>
                              </td>
                              <td className="bg-red-50 p-4 border-2 border-gray-300 align-top">
                                <ul className="space-y-2">
                                  {row.innovativePractices.map((item, i) => (
                                    <li key={i} className="text-gray-800 text-xs md:text-sm leading-relaxed text-justify">
                                      - {item}
                                    </li>
                                  ))}
                                </ul>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Project Delivery */}
                {activeTab === 1 && (
                  <div className="space-y-8">
                    {tabs[activeTab].content.projects.map((project, idx) => (
                      <div key={idx}>
                        <h3 className="text-lg md:text-xl font-bold mb-3 text-[#101631]">
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
                                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-1">
                                  <div className="w-3 h-3 bg-[#CD091B] transform rotate-45"></div>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                                  {contribution}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-[#CD091B]">
                          <h4 className="text-base font-semibold text-[#101631] mb-2">Recognition:</h4>
                          <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                            {project.recognition}
                          </p>
                        </div>

                        {idx < tabs[activeTab].content.projects.length - 1 && (
                          <div className="mt-8 border-t-2 border-gray-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Building Talent */}
                {activeTab === 2 && (
                  <div className="space-y-6">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                      {tabs[activeTab].content.description}
                    </p>
                    
                    <h3 className="text-lg md:text-xl font-bold mt-6 mb-4 text-[#101631]">
                      Key Strategies
                    </h3>

                    <div className="space-y-4">
                      {tabs[activeTab].content.strategies.map((strategy, idx) => (
                        <div key={idx} className="border-2 border-gray-200 p-4 md:p-5 bg-white hover:border-[#101631] transition-all">
                          <div className="flex gap-3 items-start">
                            <div className="w-8 h-8 bg-[#CD091B] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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