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
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      
      {/* Grid Pattern Background - VISIBLE */}
      <div className="absolute inset-0" style={{ opacity: 0.1 }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #c8c7c7 0px, #c8c7c7 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #c8c7c7 0px, #c8c7c7 1px, transparent 1px, transparent 20px)',
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 py-12">
        
        <div className="grid lg:grid-cols-12 gap-0 max-w-7_5xl mx-auto">
          
          {/* Left Side */}
          <div className="lg:col-span-4">
            
            {/* Main Card */}
            <div className="bg-white p-6 shadow-lg h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#CD091B]">
                  <div className="w-6 h-6 bg-white"></div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Collaborations
                </h2>
              </div>

              <div className="h-1 w-20 bg-[#CD091B] mb-4"></div>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                and Partnerships
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Collaboration lies at the heart of SANPEC's mission to advance grid infrastructure and accelerate the energy transition. By fostering strategic partnerships with industry leaders, academic institutions, research organizations, and community stakeholders, SANPEC expands its capabilities, drives innovation, and creates impactful solutions that address global energy challenges.
              </p>

              <p className="text-gray-700 text-sm leading-relaxed">
                These alliances enable SANPEC to stay at the forefront of cutting-edge technologies, influence policy frameworks, and promote sustainable development.
              </p>

              <div className="mt-6 flex justify-center">
                <img 
                  src="https://sanpec-excellence.com/wp-content/uploads/2025/02/collaboration-150x150.png" 
                  alt="Collaboration" 
                  className="w-24 h-24 opacity-90"
                />
              </div>
            </div>

          </div>

          {/* Right Side - Accordions */}
          <div className="lg:col-span-8 space-y-0">
            {accordions.map((accordion, idx) => {
              const isOpen = openAccordion === idx;
              
              return (
                <div
                  key={accordion.id}
                  className={`transition-all duration-500 ${
                    isOpen 
                      ? 'bg-gray-100' 
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className={`p-2 flex-shrink-0 transition-all duration-500 ${
                        isOpen ? 'bg-[#CD091B]' : 'bg-gray-200'
                      }`}>
                        <div className="w-6 h-6 flex items-center justify-center">
                          <span className={`text-base font-bold ${isOpen ? 'text-white' : 'text-gray-800'}`}>{idx + 1}</span>
                        </div>
                      </div>
                      <h3 className={`font-bold text-sm md:text-base transition-colors ${
                        isOpen ? 'text-gray-900' : 'text-gray-800 group-hover:text-[#CD091B]'
                      }`}>
                        {accordion.title}
                      </h3>
                    </div>
                    <div className={`w-5 h-5 flex-shrink-0 ml-3 transition-all duration-500 ${
                      isOpen ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke={isOpen ? "#CD091B" : "#6B7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-5 pb-5 bg-white">
                      
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {accordion.content.heading}
                      </h4>

                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        {accordion.content.description}
                      </p>

                      {/* Points */}
                      <div className="border-l-4 border-[#CD091B] pl-4 space-y-3 mb-4">
                        {accordion.content.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex gap-3 items-start">
                            <div className="w-7 h-7 bg-[#CD091B] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white font-bold text-xs">{pIdx + 1}</span>
                            </div>
                            <div className="flex-1">
                              <h5 className="font-bold text-gray-900 text-sm mb-1">
                                {point.title}
                              </h5>
                              <p className="text-gray-700 text-sm leading-relaxed">
                                {point.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Conclusion */}
                      <div className="bg-red-50 p-3">
                        <p className="text-gray-800 text-sm leading-relaxed italic">
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