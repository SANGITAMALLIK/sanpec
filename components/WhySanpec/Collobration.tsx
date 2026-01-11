'use client';
import React, { useState } from 'react';
import { ChevronDown, Users, Shield, GraduationCap, Zap, Network, Target, TrendingUp, Activity } from 'lucide-react';

const CollaborationsSection = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const accordions = [
    {
      id: 1,
      title: "Engaging Communities For Co-Creation",
      icon: Users,
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
      icon: Shield,
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
      icon: GraduationCap,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 relative overflow-hidden">
      
      {/* Advanced Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(#CD091B 1px, transparent 1px),
            repeating-linear-gradient(#CD091B 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#101631" />
            <stop offset="50%" stopColor="#CD091B" />
            <stop offset="100%" stopColor="#101631" />
          </linearGradient>
        </defs>
        <path d="M 0,100 Q 250,50 500,100 T 1000,100" stroke="url(#line-gradient)" strokeWidth="2" fill="none" opacity="0.5">
          <animate attributeName="d" dur="10s" repeatCount="indefinite"
            values="M 0,100 Q 250,50 500,100 T 1000,100;
                    M 0,100 Q 250,150 500,100 T 1000,100;
                    M 0,100 Q 250,50 500,100 T 1000,100"/>
        </path>
      </svg>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#101631]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#CD091B]/10 rounded-full blur-3xl"></div>

      {/* Power Tower Decorations */}
      <div className="absolute top-32 left-16 opacity-[0.08] hidden lg:block">
        <svg className="w-28 h-36" viewBox="0 0 100 160">
          <line x1="50" y1="10" x2="30" y2="40" stroke="#101631" strokeWidth="4"/>
          <line x1="50" y1="10" x2="70" y2="40" stroke="#101631" strokeWidth="4"/>
          <line x1="30" y1="40" x2="20" y2="80" stroke="#101631" strokeWidth="4"/>
          <line x1="70" y1="40" x2="80" y2="80" stroke="#101631" strokeWidth="4"/>
          <line x1="20" y1="80" x2="10" y2="140" stroke="#101631" strokeWidth="5"/>
          <line x1="80" y1="80" x2="90" y2="140" stroke="#101631" strokeWidth="5"/>
          <line x1="10" y1="140" x2="90" y2="140" stroke="#101631" strokeWidth="5"/>
          <circle cx="50" cy="10" r="5" fill="#CD091B"/>
          <circle cx="30" cy="40" r="3" fill="#CD091B"/>
          <circle cx="70" cy="40" r="3" fill="#CD091B"/>
          <line x1="15" y1="50" x2="85" y2="50" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3,3"/>
          <line x1="15" y1="60" x2="85" y2="60" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3,3"/>
          <line x1="15" y1="70" x2="85" y2="70" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3,3"/>
        </svg>
      </div>

      <div className="absolute bottom-32 right-16 opacity-[0.08] hidden lg:block">
        <svg className="w-28 h-36" viewBox="0 0 100 160">
          <line x1="50" y1="10" x2="30" y2="40" stroke="#101631" strokeWidth="4"/>
          <line x1="50" y1="10" x2="70" y2="40" stroke="#101631" strokeWidth="4"/>
          <line x1="30" y1="40" x2="20" y2="80" stroke="#101631" strokeWidth="4"/>
          <line x1="70" y1="40" x2="80" y2="80" stroke="#101631" strokeWidth="4"/>
          <line x1="20" y1="80" x2="10" y2="140" stroke="#101631" strokeWidth="5"/>
          <line x1="80" y1="80" x2="90" y2="140" stroke="#101631" strokeWidth="5"/>
          <line x1="10" y1="140" x2="90" y2="140" stroke="#101631" strokeWidth="5"/>
          <circle cx="50" cy="10" r="5" fill="#CD091B"/>
          <circle cx="30" cy="40" r="3" fill="#CD091B"/>
          <circle cx="70" cy="40" r="3" fill="#CD091B"/>
          <line x1="15" y1="50" x2="85" y2="50" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3,3"/>
          <line x1="15" y1="60" x2="85" y2="60" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3,3"/>
          <line x1="15" y1="70" x2="85" y2="70" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3,3"/>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 md:px-6 lg:px-12 py-12 md:py-16">
        
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 max-w-[1800px] mx-auto">
          
          {/* Left Side - Introduction */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Main Card */}
            <div className="bg-gradient-to-br from-[#CD091B] via-[#101631] to-[#0a1a3a] rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-[#CD091B]/50 relative overflow-hidden">
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm shadow-lg">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white">
                    Collaborations
                  </h2>
                </div>

                <div className="h-1 w-24 bg-white/70 rounded-full mb-6"></div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  and Partnerships
                </h3>

                <p className="text-blue-50 text-base leading-relaxed mb-6">
                  Collaboration lies at the heart of SANPEC's mission to advance grid infrastructure and accelerate the energy transition. By fostering strategic partnerships with industry leaders, academic institutions, research organizations, and community stakeholders, SANPEC expands its capabilities, drives innovation, and creates impactful solutions that address global energy challenges.
                </p>

                <p className="text-blue-50 text-base leading-relaxed">
                  These alliances enable SANPEC to stay at the forefront of cutting-edge technologies, influence policy frameworks, and promote sustainable development.
                </p>

                {/* Icon Display */}
                <div className="mt-8 flex justify-center">
                  <img 
                    src="https://sanpec-excellence.com/wp-content/uploads/2025/02/collaboration-150x150.png" 
                    alt="Collaboration" 
                    className="w-32 h-32 opacity-90 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border-2 border-[#101631]/30 shadow-xl hover:shadow-2xl transition-all hover:border-[#101631]">
                <Target className="w-8 h-8 text-[#CD091B] mb-2" />
                <div className="text-2xl font-black text-gray-900 mb-1">50+</div>
                <div className="text-xs text-gray-600 font-semibold">Active Partners</div>
              </div>
              <div className="bg-white rounded-2xl p-5 border-2 border-[#101631]/30 shadow-xl hover:shadow-2xl transition-all hover:border-[#101631]">
                <TrendingUp className="w-8 h-8 text-[#CD091B] mb-2" />
                <div className="text-2xl font-black text-gray-900 mb-1">100+</div>
                <div className="text-xs text-gray-600 font-semibold">Joint Projects</div>
              </div>
            </div>

            {/* Technical Indicator */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-400 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg"></div>
                <span className="text-green-700 font-bold text-sm">COLLABORATION STATUS</span>
              </div>
              <div className="text-gray-900 font-black text-lg">ACTIVE & EXPANDING</div>
              <div className="text-green-700 text-xs mt-1 font-semibold">Global Partnership Network</div>
            </div>

          </div>

          {/* Right Side - Accordions */}
          <div className="lg:col-span-8 space-y-4">
            {accordions.map((accordion, idx) => {
              const isOpen = openAccordion === idx;
              const IconComponent = accordion.icon;
              
              return (
                <div
                  key={accordion.id}
                  className={`rounded-2xl overflow-hidden border-2 transition-all duration-500 shadow-xl ${
                    isOpen 
                      ? 'bg-gradient-to-br from-[#101631] via-[#101631]/95 to-[#101631]/90 border-[#CD091B] shadow-2xl' 
                      : 'bg-white border-[#101631]/20 hover:border-[#CD091B]/50 hover:shadow-2xl'
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : idx)}
                    className="w-full p-6 md:p-8 text-left flex items-center justify-between group hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className={`p-3 rounded-xl flex-shrink-0 transition-all duration-500 shadow-lg ${
                        isOpen 
                          ? 'bg-[#CD091B]/20 backdrop-blur-sm' 
                          : 'bg-[#101631]/10 group-hover:bg-[#101631]/20'
                      }`}>
                        <IconComponent className={`w-6 h-6 md:w-7 md:h-7 ${
                          isOpen ? 'text-white' : 'text-[#101631]'
                        }`} />
                      </div>
                      <h3 className={`font-bold text-base md:text-lg lg:text-xl transition-colors ${
                        isOpen ? 'text-white' : 'text-gray-800 group-hover:text-[#CD091B]'
                      }`}>
                        {accordion.title}
                      </h3>
                    </div>
                    <ChevronDown className={`w-6 h-6 md:w-7 md:h-7 flex-shrink-0 ml-4 transition-all duration-500 ${
                      isOpen 
                        ? 'rotate-180 text-white' 
                        : 'text-gray-500 group-hover:text-[#CD091B]'
                    }`} />
                  </button>

                  {/* Accordion Content */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-br from-[#101631] to-[#101631]/90 border-t-2 border-white/20">
                      
                      <h4 className="text-xl md:text-2xl font-black text-white mb-4">
                        {accordion.content.heading}
                      </h4>

                      <p className="text-blue-50 text-sm md:text-base leading-relaxed mb-6">
                        {accordion.content.description}
                      </p>

                      {/* Points Grid */}
                      <div className="space-y-5 mb-6">
                        {accordion.content.points.map((point, pIdx) => (
                          <div 
                            key={pIdx}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-[#CD091B]/50 transition-all hover:shadow-xl"
                          >
                            <div className="flex gap-4 items-start">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#CD091B] to-[#CD091B]/80 flex items-center justify-center flex-shrink-0 shadow-lg">
                                <Activity className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h5 className="font-bold text-white text-sm md:text-base mb-2">
                                  {point.title}
                                </h5>
                                <p className="text-blue-50 text-sm md:text-base leading-relaxed">
                                  {point.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Conclusion */}
                      <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border-l-4 border-[#CD091B] shadow-lg">
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

        {/* Bottom Stats Bar */}
        <div className="mt-12 max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white backdrop-blur-sm rounded-2xl p-6 border-2 border-[#101631]/30 shadow-xl text-center hover:shadow-2xl hover:border-[#CD091B] transition-all">
              <Zap className="w-10 h-10 text-[#CD091B] mx-auto mb-3" />
              <div className="text-3xl font-black text-gray-900 mb-2">Innovation</div>
              <div className="text-gray-700 text-sm font-semibold">Driving Technology Forward</div>
            </div>
            <div className="bg-white backdrop-blur-sm rounded-2xl p-6 border-2 border-[#101631]/30 shadow-xl text-center hover:shadow-2xl hover:border-[#CD091B] transition-all">
              <Network className="w-10 h-10 text-[#CD091B] mx-auto mb-3" />
              <div className="text-3xl font-black text-gray-900 mb-2">Partnership</div>
              <div className="text-gray-700 text-sm font-semibold">Global Network Expansion</div>
            </div>
            <div className="bg-white backdrop-blur-sm rounded-2xl p-6 border-2 border-[#101631]/30 shadow-xl text-center hover:shadow-2xl hover:border-[#CD091B] transition-all">
              <Shield className="w-10 h-10 text-[#CD091B] mx-auto mb-3" />
              <div className="text-3xl font-black text-gray-900 mb-2">Excellence</div>
              <div className="text-gray-700 text-sm font-semibold">Industry Leadership</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CollaborationsSection;