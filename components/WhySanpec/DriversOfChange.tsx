'use client';
import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, ExternalLink } from 'lucide-react';

const TabGallery = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);

  const tabs = [
    {
      id: 1,
      title: "Engineering Excellence",
      content: {
        heading: "Engineering Excellence",
        description: "At SANPEC, engineering excellence is achieved through a comprehensive, multi-dimensional approach that integrates advanced technology, continuous improvement, and an unwavering commitment to quality. By embedding these principles into every facet of its operations, SANPEC consistently delivers projects that surpass industry benchmarks. A culture of continuous improvement is central to SANPEC's operational philosophy—feedback is actively solicited at all levels, and lessons learned from both successes and setbacks are meticulously integrated into future projects.",
        image: "https://sanpec-excellence.com/wp-content/uploads/2025/06/Change-Management.png",
        subtitle: "SANPEC's dedication to engineering excellence is further reinforced through adherence to internationally recognized management standards:",
        accordions: [
          {
            title: "Total Quality Management System",
            content: "SANPEC employs a robust quality management system guided by TQM principles—customer focus, employee involvement, a process-oriented approach, integrated systems, strategic planning, continual improvement, fact-based decision-making, and effective communication. In building transmission and distribution infrastructure, SANPEC rigorously applies quality standards across every stage—from R&D and design to manufacturing, operations, supply chain management, and material sourcing—ensuring that each component and process meets the highest levels of reliability and performance. This steadfast commitment not only exceeds customer expectations but also cultivates an environment where every employee is empowered to drive ongoing quality enhancements."
          },
          {
            title: "Innovation Management",
            content: "Aligned with the ISO 56000 series—specifically ISO 56001:2024—SANPEC systematically manages innovation through a structured approach that drives sustainable growth and secures a competitive edge by continuously exploring and implementing cutting-edge solutions in transmission and distribution. By fostering innovation in its R&D, design, and operational processes, SANPEC maximizes value creation by unlocking increased value from new products, services, processes, and methods, thereby delivering tangible benefits for both the organization and its stakeholders. This approach not only boosts immediate performance but also steadily builds long-term innovation capabilities, even amid uncertainty."
          },
          {
            title: "Change Management",
            content: "SANPEC adeptly manages organizational change to ensure smooth transitions and enhanced adaptability during strategic shifts across all its functions—from R&D and design to manufacturing, operations, supply chain management, and material sourcing. By adopting changes faster, more completely, and proficiently, SANPEC remains fully engaged during disruptive periods, understanding the rationale behind each change. This comprehensive approach, which provides the necessary time, tools, and support for everyone involved, minimizes the risks and costs associated with mismanaged change while maximizing returns on project investments through the effective application of change management principles before, during, and after each project.\n\nApart from this recognized management standards, we keep risk management at the core of everything we do. From engineering and manufacturing to new technology adoption and organizational change, we proactively identify, assess, and mitigate risks to maintain reliability and efficiency."
          }
        ],
        readMoreLink: "/engineering-excellence/"
      }
    },
    {
      id: 2,
      title: "Research and Development",
      content: {
        heading: "Research and Development",
        description: "At SANPEC, research and development (R&D) form the backbone of innovation, driving the modernization of transmission and distribution infrastructure. SANPEC's dedicated R&D teams go beyond conventional innovation labs, relentlessly exploring breakthrough technologies and methodologies that enhance grid resilience, efficiency, and sustainability.\n\nThrough strategic collaborations with leading global research institutions, SANPEC ensures that every advancement is grounded in rigorous scientific research and industry's best practices. The company's R&D initiatives span multiple critical areas, including:",
        accordions: [
          {
            title: "Advanced Materials Development",
            content: "Researching high-capacity, durable conductors and corrosion-resistant materials for transmission infrastructure."
          },
          {
            title: "Smart Grid Technologies",
            content: "Integrating IoT, artificial intelligence, and big data analytics for real- time monitoring, predictive maintenance, and operational optimization."
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
        description: "Digital transformation is a cornerstone of SANPEC's strategy for modernizing its transmission and distribution grid infrastructure. By integrating advanced digital technologies, SANPEC enhances efficiency, reliability, and operational intelligence, ensuring a future-proof energy grid. Key initiatives include:",
        image: "https://sanpec-excellence.com/wp-content/uploads/2025/02/energy-system-150x150.png",
        accordions: [
          {
            title: "Communication, monitoring and Control",
            content: "SANPEC employs state-of-the-art digital communication systems integrated with IoT devices across its transmission and distribution networks. These sensors provide real-time data on grid conditions, enabling the company to monitor voltage levels, detect faults, and adjust power flows instantly, thereby enhancing overall grid reliability and operational efficiency."
          },
          {
            title: "Data Analytics and Artificial Intelligence",
            content: "Leveraging big data analytics and AI, SANPEC processes vast amounts of operational data to optimize grid performance. Advanced algorithms predict maintenance requirements, identify potential inefficiencies, and forecast energy demand patterns, which allows for proactive adjustments and minimizes downtime, ensuring that the grid remains robust and responsive to dynamic conditions."
          },
          {
            title: "Enhanced Cybersecurity",
            content: "Recognizing the critical importance of securing its grid infrastructure, SANPEC has implemented robust cybersecurity measures specifically designed for transmission and distribution systems. These measures include real-time threat monitoring, advanced encryption protocols, and regular vulnerability assessments. This comprehensive approach ensures the integrity and resilience of grid operations, safeguarding against cyber threats and maintaining secure, uninterrupted service."
          },
          {
            title: "Advanced Customer Engagement Platforms",
            content: "SANPEC has also developed digital platforms that empower customers by providing real-time insights into their energy consumption. These platforms enable users to monitor usage, manage their accounts, and receive personalized energy-saving recommendations. By fostering a transparent and interactive relationship, SANPEC not only enhances customer satisfaction but also promotes energy efficiency across its network."
          }
        ]
      }
    },
    {
      id: 4,
      title: "Workforce development",
      content: {
        heading: "Workforce development",
        description: "At SANPEC, workforce development is a strategic priority, ensuring that a pipeline of the workforce is created that are skilled, motivated, and prepared for the evolving energy landscape. Recognizing that the future of energy depends on a workforce that is both technically proficient and adaptable to innovation, SANPEC invests in comprehensive training, leadership development, and knowledge-sharing initiatives that drive excellence within the organization and across the broader industry as well as strong academic collaboration and with policymakers. The pace of change in the energy sector demands not just skilled workers, but a workforce that is agile and innovation-driven. SANPEC is committed to redefining workforce education by:",
        bullets: [
          "Promoting interdisciplinary learning that integrates policy, technology, and systems thinking.",
          "Advancing global best practices through active participation in knowledge-sharing platforms.",
          "Developing an ecosystem-based approach to workforce planning, ensuring energy professionals are prepared to address sustainability challenges at both local and global scales."
        ],
        image: "https://sanpec-excellence.com/wp-content/uploads/2025/02/team-1-150x150.png",
        rightImage: "https://sanpec-excellence.com/wp-content/uploads/elementor/thumbs/top-view-business-people-sitting-table-discussing-something-while-working-office-business-meeting-working-table-top-view-no-visible-faces-ai-generated-scaled-r1qg01hytj4pqttaef3iyd6mlpnvy0cetpoj1g0zvw.jpg",
        subtitle: "Skill Building and Knowledge Transfer",
        subDescription: "To remain at the forefront of innovation, SANPEC emphasizes continuous learning and knowledge dissemination, bridging gaps between academia, industry, government, and communities. The company fosters a culture of collaboration and adaptability by providing cutting-edge skill development and sharing industry insights across its ecosystem.",
        skills: [
          "Advanced Skill Development Programs: Training initiatives to stay ahead of industry advancements.",
          "Leadership Development: Cultivating emerging leaders for energy and infrastructure roles.",
          "Internal Training Programs: In-house workshops and technical modules to keep employees aligned with industry trends.",
          "Community Education & Outreach: Engaging schools, universities, and communities to promote energy awareness and sustainability.",
          "Industry Knowledge Exchange: Collaborating with academia, policymakers, and industry leaders through regular seminars, workshops, and partnerships."
        ]
      }
    },
    {
      id: 5,
      title: "Leadership and Governance Strategy",
      content: {
        heading: "Leadership and Governance Strategy",
        description: "SANPEC views leadership and governance as fundamental enablers of its long-term impact on society and the economy. By operating with a systems perspective, the organization ensures that every decision and strategy is aligned across all functions, reinforcing efficiency, accountability, and sustainability while adapting to an evolving industry landscape.",
        image: "https://sanpec-excellence.com/wp-content/uploads/2025/03/sanpec-governance.png",
        accordions: [
          {
            title: "Three-Tier Governance Structure",
            content: {
              intro: "To drive strategic execution, oversight, and innovation, SANPEC operates through a structured three-tier governance framework:",
              bullets: [
                {
                  title: "Executive Leadership Team:",
                  text: "Comprising leaders from Engineering, Operations, Finance, Human Resources, and Sustainability, this team drives company-wide strategy, orchestrates the organization's response to market dynamics, and ensures the seamless flow of critical business information to optimize decision-making at all levels."
                },
                {
                  title: "Board of Directors:",
                  text: "Made up of industry experts, community leaders, and academic professionals, the board provides strategic oversight while upholding SANPEC's mission, values, and corporate governance principles."
                },
                {
                  title: "Advisory Committees:",
                  text: "Specialized bodies such as the Sustainability Advisory Board and the Innovation Council offer expert insights to shape first-to-market innovation strategies, sustainability initiatives, and industry-leading solutions while ensuring SANPEC remains adaptive to emerging risks and opportunities."
                }
              ]
            }
          },
          {
            title: "Governance Mechanisms for Accountability and Growth",
            content: {
              intro: "To ensure leadership decisions remain aligned with SANPEC's mission and industry's best practices, the organization follows a robust governance framework that fosters accountability, adaptability, and agility:",
              bullets: [
                {
                  title: "Strategic Reviews:",
                  text: "Quarterly assessments ensure that SANPEC's initiatives remain aligned with both immediate market demands and long-term strategic goals."
                },
                {
                  title: "Board Oversight:",
                  text: "A dedicated Ethics Officer oversees legal and ethical compliance, ensuring transparent, responsible decision-making in a rapidly evolving regulatory landscape."
                },
                {
                  title: "Ethics and Compliance:",
                  text: "A dedicated Ethics Officer oversees legal and ethical compliance, ensuring integrity in all business operations."
                },
                {
                  title: "Stakeholder Engagement:",
                  text: "Continuous dialogue with customers, employees, policymakers, and community partners fosters inclusive decision-making, strengthens industry collaborations, and ensures that business intelligence is effectively integrated into governance processes."
                },
                {
                  title: "Risk Management Framework:",
                  text: "A Risk Management Committee proactively identifies, assesses, and mitigates strategic and operational risks, enabling SANPEC to anticipate industry shifts and maintain operational excellence amid uncertainty."
                }
              ]
            }
          },
          {
            title: "Driving Innovation, Sustainability, and Impact",
            content: {
              paragraphs: [
                "SANPEC's leadership and governance model strikes a balance between strategic vision and operational efficiency, positioning the company as a leader in grid infrastructure solutions. By fostering proactive leadership, decentralized decision-making, and a structured approach to managing change across short-, medium-, and long-term challenges, SANPEC ensures organizational resilience and market leadership.",
                "Through a combination of dynamic information systems, real-time business intelligence, and governance mechanisms that prioritize first-to-market innovation, SANPEC continues to drive industry-leading advancements, sustainability, and long-term impact across the energy sector."
              ]
            }
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
        <div className="max-w-[1600px] mx-auto mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-20 sm:w-32 md:w-48 bg-gradient-to-r from-transparent to-[#CD091B]"></div>
            <div className="relative">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-[#CD091B]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
              </svg>
            </div>
            <div className="h-[2px] w-20 sm:w-32 md:w-48 bg-gradient-to-l from-transparent to-[#CD091B]"></div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0F152F] mb-3 md:mb-4 tracking-tight">
          Drivers Of <span className="text-[#D62B2B]">Change</span>
        </h1>
        <div className="w-24 md:w-32 h-1 bg-[#D62B2B] mx-auto mb-4 md:mb-6 rounded-full"></div>
        <p className="text-gray-700 text-base md:text-xl max-w-4xl mx-auto font-medium leading-relaxed px-4">
          Bringing Engineering Excellence. Improving Power Grid Reliability
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
                  setOpenAccordion(0);
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
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left">
                      {tabs[activeTab].content.description}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 md:p-7 rounded-xl md:rounded-2xl border-2 border-gray-200 space-y-3 md:space-y-4 shadow-sm">
                    {tabs[activeTab].content.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex gap-3 md:gap-4 items-start">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#D62B2B] mt-1.5 md:mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm md:text-base leading-relaxed"><strong>{bullet.split(':')[0]}:</strong> {bullet.split(':').slice(1).join(':')}</span>
                      </div>
                    ))}
                  </div>

                  {tabs[activeTab].content.image && (
                    <div className="flex justify-center">
                      <img 
                        src={tabs[activeTab].content.image} 
                        alt="Workforce Development"
                        className="w-[150px] h-[150px] object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="space-y-5 md:space-y-6">
                  {tabs[activeTab].content.rightImage && (
                    <div className="rounded-xl md:rounded-2xl overflow-hidden">
                      <img 
                        src={tabs[activeTab].content.rightImage} 
                        alt="Workforce Development Team"
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                  
                  <h3 className="text-2xl md:text-3xl font-black text-[#0F152F]">
                    {tabs[activeTab].content.subtitle}
                  </h3>
                  
                  <div className="bg-gray-50 p-5 md:p-7 rounded-xl md:rounded-2xl border-2 border-gray-200 shadow-sm">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left">
                      {tabs[activeTab].content.subDescription}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2.5 md:gap-3">
                    {tabs[activeTab].content.skills.map((skill, idx) => (
                      <div key={idx} className="flex gap-3 md:gap-4 items-start bg-white p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-gray-200 hover:border-[#D62B2B] transition-all group shadow-sm">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#D62B2B] mt-1.5 md:mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm md:text-base text-left">{skill}</span>
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
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left whitespace-pre-line">
                      {tabs[activeTab].content.description}
                    </p>
                  </div>

                  {tabs[activeTab].content.image && (
                    <div className="flex justify-center">
                      <img 
                        src={tabs[activeTab].content.image} 
                        alt={tabs[activeTab].content.heading}
                        className="w-auto h-auto max-w-full"
                      />
                    </div>
                  )}
                </div>

                {/* Right Column - Accordions */}
                <div className="space-y-3 md:space-y-4">
                  {/* Subtitle above accordions */}
                  {tabs[activeTab].content.subtitle && (
                    <div className="bg-gray-50 p-5 md:p-7 rounded-xl md:rounded-2xl border-2 border-gray-200 shadow-sm mb-4">
                      <h3 className="text-base md:text-lg font-bold text-[#0F152F] text-left leading-tight">
                        {tabs[activeTab].content.subtitle}
                      </h3>
                    </div>
                  )}
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
                            <span className="text-sm md:text-base text-left">{accordion.title}</span>
                          </span>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <Minus className="w-5 h-5 text-[#D62B2B]" />
                            ) : (
                              <Plus className="w-5 h-5 text-gray-600" />
                            )}
                          </div>
                        </button>
                        <div className={`transition-all duration-300 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                          <div className="p-4 md:p-6 bg-gray-50 border-t-2 border-gray-200">
                            {/* Check if content has structured data (bullets/paragraphs) or simple string */}
                            {typeof accordion.content === 'string' ? (
                              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left whitespace-pre-line">{accordion.content}</p>
                            ) : (
                              <div className="space-y-4">
                                {/* Intro text if exists */}
                                {accordion.content.intro && (
                                  <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left mb-4">
                                    {accordion.content.intro}
                                  </p>
                                )}
                                
                                {/* Bullet points if exists */}
                                {accordion.content.bullets && (
                                  <div className="space-y-4">
                                    {accordion.content.bullets.map((bullet, bulletIdx) => (
                                      <div key={bulletIdx} className="flex gap-3 items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#D62B2B] mt-2 flex-shrink-0"></div>
                                        <div className="text-sm md:text-base text-left">
                                          <span className="font-bold text-gray-900">{bullet.title}</span>
                                          <span className="text-gray-700"> {bullet.text}</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                                
                                {/* Multiple paragraphs if exists */}
                                {accordion.content.paragraphs && (
                                  <div className="space-y-4">
                                    {accordion.content.paragraphs.map((para, paraIdx) => (
                                      <p key={paraIdx} className="text-gray-700 text-sm md:text-base leading-relaxed text-left">
                                        {para}
                                      </p>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
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
                  className="inline-flex items-center gap-3 bg-[#D62B2B] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base hover:bg-[#0F152F] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Read More</span>
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