"use client";
import { useState } from "react";
import { Sparkles, TrendingUp, Target, Award, ArrowRight, Zap, Users, Leaf, Shield, Lightbulb } from "lucide-react";

const EngineeringExcellence = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: "Innovation",
      icon: Sparkles,
      content: "Aligned with the ISO 56000 series—specifically ISO 56001:2024—SANPEC systematically manages innovation through a structured approach that drives sustainable growth and secures a competitive edge by continuously exploring and implementing cutting-edge solutions in transmission and distribution."
    },
    {
      id: 1,
      title: "Change",
      icon: TrendingUp,
      content: "Leveraging industry-leading practices, SANPEC adeptly manages organizational change to ensure smooth transitions and enhanced adaptability during strategic shifts across all its functions—from R&D and design to manufacturing, operations, supply chain management, and material sourcing."
    },
    {
      id: 2,
      title: "Excellence",
      icon: Target,
      content: "At SANPEC, engineering excellence transcends technical proficiency—it embodies a commitment to creating socio-economic and environmental value that benefits local communities, economies, education, youth, and the planet while addressing America's energy challenges.",
      features: [
        { icon: Zap, title: "Innovative Design", desc: "State-of-the-art technologies maximizing efficiency" },
        { icon: Users, title: "Community Engagement", desc: "Collaborating with local communities" },
        { icon: Lightbulb, title: "Economic Empowerment", desc: "Driving local economic growth" },
        { icon: Leaf, title: "Environmental Stewardship", desc: "Sustainable construction practices" },
        { icon: Shield, title: "Grid Resilience", desc: "Infrastructure withstanding disasters" }
      ]
    },
    {
      id: 3,
      title: "System-Wide",
      icon: Award,
      content: "SANPEC's model represents a groundbreaking shift in how businesses approach innovation. By embracing a decentralized, automated, and connected enterprise structure, SANPEC offers real-time insights into project performance, resource allocation, and integrated project management."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Split Background with Triangle */}
      <div className="absolute inset-0">
        {/* Left Gray Side */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50"></div>
        
        {/* Right White Side with Triangle Cut */}
        <div 
          className="absolute inset-0 bg-white"
          style={{
            clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 50% 100%)'
          }}
        ></div>
      </div>

      {/* Power Structure Background Elements */}
      <div className="absolute inset-0 opacity-[0.04]">
        {/* Transmission Tower Icons */}
        <svg className="absolute top-10 left-10 w-20 h-20 text-[#101631]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 7v14l8-5 8 5V7l-8-5zm0 2.2l6 3.75V19.8l-6-3.75-6 3.75V7.95l6-3.75z"/>
          <path d="M8 10h8M8 14h8M12 6v12" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        </svg>
        
        <svg className="absolute top-32 right-16 w-16 h-16 text-[#CD091B]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2"/>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>

        <svg className="absolute bottom-16 left-24 w-24 h-24 text-[#101631]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 7v14l8-5 8 5V7l-8-5zm0 2.2l6 3.75V19.8l-6-3.75-6 3.75V7.95l6-3.75z"/>
        </svg>

        <svg className="absolute bottom-32 right-32 w-14 h-14 text-[#CD091B] rotate-45" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 7v14l8-5 8 5V7l-8-5z" opacity="0.3"/>
          <circle cx="12" cy="12" r="1.5"/>
        </svg>

        {/* Grid Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-300"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Power Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="20%" x2="90%" y2="25%" stroke="#CD091B" strokeWidth="1" opacity="0.1"/>
          <line x1="15%" y1="40%" x2="85%" y2="45%" stroke="#101631" strokeWidth="1" opacity="0.1"/>
          <line x1="10%" y1="60%" x2="90%" y2="65%" stroke="#CD091B" strokeWidth="1" opacity="0.1"/>
          <line x1="20%" y1="80%" x2="80%" y2="85%" stroke="#101631" strokeWidth="1" opacity="0.1"/>
        </svg>
      </div>

      {/* Glowing Dots - Power Nodes */}
      <div className="absolute top-20 left-1/4 w-3 h-3 rounded-full bg-[#CD091B] animate-pulse shadow-lg shadow-[#CD091B]/50"></div>
      <div className="absolute top-40 right-1/3 w-2 h-2 rounded-full bg-[#101631] animate-pulse shadow-lg shadow-[#101631]/50" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-32 left-1/3 w-3 h-3 rounded-full bg-[#CD091B] animate-pulse shadow-lg shadow-[#CD091B]/50" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 right-1/4 w-2 h-2 rounded-full bg-[#101631] animate-pulse shadow-lg shadow-[#101631]/50" style={{animationDelay: '1.5s'}}></div>

      {/* Floating Circuit Elements */}
      <div className="absolute top-16 right-20 w-32 h-32 border-2 border-[#CD091B]/10 rounded-lg rotate-12"></div>
      <div className="absolute bottom-24 left-16 w-24 h-24 border-2 border-[#101631]/10 rounded-full"></div>

      <div className="relative max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
          
          {/* Left Side - Content & Images */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#CD091B]/20 shadow-md backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#CD091B] animate-pulse"></div>
              <span className="text-[#CD091B] text-sm font-bold">Engineering Excellence</span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#101631] leading-[1.1] mb-4">
                Building Tomorrow's
                <span className="block text-[#CD091B] mt-1">Infrastructure Today</span>
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-1 w-20 bg-[#CD091B] rounded-full"></div>
                <div className="h-1 w-10 bg-[#101631] rounded-full"></div>
                <div className="h-1 w-4 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              At SANPEC, engineering excellence is achieved through a comprehensive approach that integrates advanced technology, continuous improvement, and an unwavering commitment to quality.
            </p>

            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src="https://sanpec-excellence.com/wp-content/uploads/2024/08/home1-2.jpg" 
                  alt="SANPEC Project"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101631]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-3 left-3 right-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-white font-bold text-sm drop-shadow-lg">Innovation Hub</div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src="https://sanpec-excellence.com/wp-content/uploads/2025/02/Untitled-design-3-1024x576.png" 
                  alt="SANPEC Excellence"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#CD091B]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-3 left-3 right-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-white font-bold text-sm drop-shadow-lg">Engineering Power</div>
                </div>
              </div>
            </div>

            {/* Stats */}
        
            {/* CTA */}
            <button className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#CD091B] text-white rounded-lg font-bold hover:bg-[#b00817] transition-all hover:shadow-xl hover:shadow-[#CD091B]/40 hover:-translate-y-1">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Side - Tabs */}
          <div className="space-y-4">
            {/* Tabs Header */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-gray-200">
              <div className="grid grid-cols-4 gap-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`group relative flex flex-col items-center gap-2 px-3 py-4 rounded-lg font-bold text-xs transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-[#CD091B] text-white shadow-lg shadow-[#CD091B]/30 scale-105'
                          : 'text-gray-600 hover:bg-gray-50 hover:scale-105'
                      }`}
                    >
                      <IconComponent className={`w-5 h-5 transition-transform duration-300 ${
                        activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'
                      }`} />
                      <span className="leading-tight text-center">{tab.title}</span>
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#CD091B] rounded-full"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-xl overflow-hidden">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  {(() => {
                    const IconComponent = tabs[activeTab].icon;
                    return (
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#CD091B]/10 to-[#101631]/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                        <IconComponent className="w-7 h-7 text-[#CD091B]" />
                      </div>
                    );
                  })()}
                  <div>
                    <h3 className="text-xl font-black text-[#101631] mb-2">
                      {tabs[activeTab].title} Management
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {tabs[activeTab].content}
                    </p>
                  </div>
                </div>

                {/* Features for Excellence Tab */}
                {tabs[activeTab].features && (
                  <div className="mt-5 pt-5 border-t border-gray-100 grid grid-cols-2 gap-3">
                    {tabs[activeTab].features.map((feature, idx) => (
                      <div key={idx} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-[#CD091B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#CD091B]/20 transition-colors">
                          <feature.icon className="w-4 h-4 text-[#CD091B]" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#101631]">{feature.title}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{feature.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 bg-gray-100 flex">
                {tabs.map((_, index) => (
                  <div
                    key={index}
                    className={`flex-1 transition-all duration-500 ${
                      index === activeTab ? 'bg-[#CD091B]' : index < activeTab ? 'bg-[#CD091B]/30' : ''
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="group bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 hover:border-[#CD091B]/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#CD091B]/10 to-[#CD091B]/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <div className="w-4 h-4 rounded-full bg-[#CD091B]"></div>
                </div>
                <div className="text-sm font-bold text-[#101631]">Advanced Technology</div>
                <div className="text-xs text-gray-500 mt-1">Innovation driven solutions</div>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 hover:border-[#101631]/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#101631]/10 to-[#101631]/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <div className="w-4 h-4 rounded-full bg-[#101631]"></div>
                </div>
                <div className="text-sm font-bold text-[#101631]">Quality Assurance</div>
                <div className="text-xs text-gray-500 mt-1">ISO certified standards</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EngineeringExcellence;