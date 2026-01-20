'use client';
import React, { useState } from 'react';

const CollaborationsSection = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const accordions = [
    {
      id: 1,
      title: "Engaging Communities For Co-Creation",
      content: {
        heading: "Engaging Communities for Co-Creation",
        description: "SANPEC actively engages local communities to ensure shared ownership in energy projects.",
        points: [
          {
            title: "Collaboration and Co-Creation",
            text: "Partnering with local communities to develop energy projects that address specific regional needs while promoting equitable benefits."
          },
          {
            title: "Stakeholder Engagement",
            text: "Working with environmental groups, civil society organizations, and local governments to foster trust, build consensus, and ensure sustainability."
          },
          {
            title: "Capacity Building",
            text: "Organizing workshops and training programs for community members, empowering them to contribute meaningfully to project development and oversight."
          }
        ],
        conclusion: "By integrating community voices into project planning and execution, SANPEC ensures that its solutions are not only technically robust but also socially responsible."
      }
    },
    {
      id: 2,
      title: "Building Alliances for Grid Reliability, Resilience and Sustainability",
      content: {
        heading: "Building Alliances for Grid Reliability, Resilience and Sustainability",
        description: "SANPEC understands the interconnected nature of today's global challenges and actively fosters cross-sector partnerships to drive grid reliability, resilience and sustainability.",
        points: [
          {
            title: "Collaborative Projects",
            text: "Engaging in joint initiatives with international organizations, non-profits, and industry leaders to address critical issues such as energy security, climate change, and disaster resilience."
          },
          {
            title: "Research Partnerships",
            text: "Partnering with research institutions to develop advanced testing methodologies, innovative grid designs, and cutting-edge technologies that future-proof energy systems."
          },
          {
            title: "Network Building",
            text: "Creating opportunities for professionals across sectors to collaborate, exchange ideas, and form joint ventures that advance grid innovation."
          }
        ],
        conclusion: "These alliances pool resources, expertise, and influence to develop resilient infrastructure and sustainable energy systems that meet the evolving demands of the global energy transition."
      }
    },
    {
      id: 3,
      title: "Strengthening Industry-Academia-Government Collaboration",
      content: {
        heading: "Strengthening Industry-Academia-Government Collaboration",
        description: "SANPEC recognizes the transformative power of collaboration across industry, academia, and government to address complex energy challenges.",
        points: [
          {
            title: "Industry Collaborations",
            text: "Partnering with leading energy companies, utilities, and technology providers to share knowledge, co-develop solutions, and pioneer advancements in grid reliability and sustainability."
          },
          {
            title: "Academic Alliances",
            text: "Forming strategic alliances with universities and research institutions to bridge the gap between theoretical research and practical application, driving innovative approaches to grid technology and energy systems."
          },
          {
            title: "Policy Advocacy",
            text: "Collaborating with policymakers to advocate for regulatory frameworks that support grid resilience, renewable energy integration, and sustainable energy practices."
          },
          {
            title: "Collaborations with Educational Institutions",
            text: "Partnering with universities, technical schools, and training centers to develop programs that align with industry needs. These collaborations bridge the gap between academic research and practical application, ensuring a steady pipeline of skilled professionals."
          },
          {
            title: "On-the-Job Learning Opportunities",
            text: "Providing hands-on learning experiences through real-world projects, mentorship, and cross-functional teams. These opportunities help employees build practical expertise and foster a deeper understanding of the energy sector's evolving landscape."
          }
        ],
        conclusion: "These collaborations not only foster technological innovation but also align industry goals with public policies and research agendas, ensuring impactful outcomes for the energy sector."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(#CD091B 1px, transparent 1px), repeating-linear-gradient(90deg, #CD091B 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Power Tower Decorations */}
      <div className="absolute top-32 left-16 opacity-[0.06] hidden lg:block">
        <svg className="w-28 h-36" viewBox="0 0 100 160">
          <line x1="50" y1="10" x2="30" y2="40" stroke="#101631" strokeWidth="4"/>
          <line x1="50" y1="10" x2="70" y2="40" stroke="#101631" strokeWidth="4"/>
          <line x1="30" y1="40" x2="20" y2="80" stroke="#101631" strokeWidth="4"/>
          <line x1="70" y1="40" x2="80" y2="80" stroke="#101631" strokeWidth="4"/>
          <line x1="20" y1="80" x2="10" y2="140" stroke="#101631" strokeWidth="5"/>
          <line x1="80" y1="80" x2="90" y2="140" stroke="#101631" strokeWidth="5"/>
          <line x1="10" y1="140" x2="90" y2="140" stroke="#101631" strokeWidth="5"/>
          <circle cx="50" cy="10" r="5" fill="#CD091B"/>
        </svg>
      </div>

      <div className="absolute bottom-32 right-16 opacity-[0.06] hidden lg:block">
        <svg className="w-28 h-36" viewBox="0 0 100 160">
          <line x1="50" y1="10" x2="30" y2="40" stroke="#CD091B" strokeWidth="4"/>
          <line x1="50" y1="10" x2="70" y2="40" stroke="#CD091B" strokeWidth="4"/>
          <line x1="30" y1="40" x2="20" y2="80" stroke="#CD091B" strokeWidth="4"/>
          <line x1="70" y1="40" x2="80" y2="80" stroke="#CD091B" strokeWidth="4"/>
          <line x1="20" y1="80" x2="10" y2="140" stroke="#CD091B" strokeWidth="5"/>
          <line x1="80" y1="80" x2="90" y2="140" stroke="#CD091B" strokeWidth="5"/>
          <line x1="10" y1="140" x2="90" y2="140" stroke="#CD091B" strokeWidth="5"/>
          <circle cx="50" cy="10" r="5" fill="#101631"/>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 md:px-6 lg:px-12 py-12 md:py-16">
        
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 max-w-[1800px] mx-auto">
          
          {/* Left Side */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Main Card */}
            <div className="bg-[#101631] p-8 md:p-10 shadow-2xl border-2 border-[#CD091B]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#CD091B]">
                  <div className="w-8 h-8 bg-white"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Collaborations
                </h2>
              </div>

              <div className="h-1 w-24 bg-[#CD091B] mb-6"></div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                and Partnerships
              </h3>

              <p className="text-gray-200 text-base leading-relaxed mb-6">
                Collaboration lies at the heart of SANPEC's mission to advance grid infrastructure and accelerate the energy transition. By fostering strategic partnerships with industry leaders, academic institutions, research organizations, and community stakeholders, SANPEC expands its capabilities, drives innovation, and creates impactful solutions that address global energy challenges.
              </p>

              <p className="text-gray-200 text-base leading-relaxed">
                These alliances enable SANPEC to stay at the forefront of cutting-edge technologies, influence policy frameworks, and promote sustainable development.
              </p>

              <div className="mt-8 flex justify-center">
                <img 
                  src="https://sanpec-excellence.com/wp-content/uploads/2025/02/collaboration-150x150.png" 
                  alt="Collaboration" 
                  className="w-32 h-32 opacity-90"
                />
              </div>
            </div>

          </div>

          {/* Right Side - Accordions */}
          <div className="lg:col-span-8 space-y-4">
            {accordions.map((accordion, idx) => {
              const isOpen = openAccordion === idx;
              
              return (
                <div
                  key={accordion.id}
                  className={`border-2 transition-all duration-500 shadow-xl ${
                    isOpen 
                      ? 'bg-[#101631] border-[#CD091B] shadow-2xl' 
                      : 'bg-white border-gray-200 hover:border-[#CD091B] hover:shadow-2xl'
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : idx)}
                    className="w-full p-6 md:p-8 text-left flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className={`p-3 flex-shrink-0 transition-all duration-500 ${
                        isOpen ? 'bg-[#CD091B]' : 'bg-[#101631] bg-opacity-10'
                      }`}>
                        <div className={`w-6 h-6 md:w-7 md:h-7 ${
                          isOpen ? 'text-white' : 'text-[#101631]'
                        }`}>
                          <span className="text-lg font-bold">{idx + 1}</span>
                        </div>
                      </div>
                      <h3 className={`font-bold text-base md:text-lg lg:text-xl transition-colors ${
                        isOpen ? 'text-white' : 'text-gray-800 group-hover:text-[#CD091B]'
                      }`}>
                        {accordion.title}
                      </h3>
                    </div>
                    <div className={`w-6 h-6 md:w-7 md:h-7 flex-shrink-0 ml-4 transition-all duration-500 ${
                      isOpen ? 'rotate-180' : ''
                    }`}>
                      <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-gray-500 group-hover:border-t-[#CD091B]"></div>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-6 md:p-8 lg:p-10 bg-[#101631] border-t-2 border-[#CD091B]">
                      
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                        {accordion.content.heading}
                      </h4>

                      <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6">
                        {accordion.content.description}
                      </p>

                      {/* Points */}
                      <div className="space-y-5 mb-6">
                        {accordion.content.points.map((point, pIdx) => (
                          <div 
                            key={pIdx}
                            className="bg-white bg-opacity-10 p-5 border border-white border-opacity-20 hover:border-[#CD091B] transition-all"
                          >
                            <div className="flex gap-4 items-start">
                              <div className="w-10 h-10 bg-[#CD091B] flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-bold">{pIdx + 1}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h5 className="font-bold text-white text-sm md:text-base mb-2">
                                  {point.title}
                                </h5>
                                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                                  {point.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Conclusion */}
                      <div className="bg-white bg-opacity-10 p-6 border-l-4 border-[#CD091B]">
                        <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                          {accordion.content.conclusion}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
};

export default CollaborationsSection;