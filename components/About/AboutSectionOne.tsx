"use client";
import React, { useState, useEffect, useRef } from "react";

const tabsData = [
  {
    id: 1,
    icon: "⚡",
    title: "ENGINEERING TYPE TESTING (HVAC/HVDC)",
    heading: "Engineering, Testing",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
    points: [
      "Transmission Line Engineering and Manufacturing of Steel Structures (Sustainability Approach)",
      "Structural Analysis, Design and Detailing of Steel Poles and Lattice Tower",
      "Full Scale Structural Testing (Witnessing and Validation)",
      "Electrical Testing: Corona/RIV and others",
      "Type Testing: Conductor/OPGW/Hardware",
      "Prototype and Proof of Fit Testing",
      "Technical Specifications Review"
    ],
    link: "/electric-tower/transmission-and-distribution/"
  },
  {
    id: 2,
    icon: "🔍",
    title: "PLANT AUDIT VQA SOURCE INSPECTIONS (QA/QC)",
    heading: "Plant Audit, Inspections (QA/QC), ITP",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
    points: [
      "Transmission Materials: Steel Pole, Lattice Towers, and Substation Support Structures",
      "Weld Inspections – NDT Technique",
      "Fabrication Shop Audits and on-site Inspections",
      "Material Sampling (Metallurgical and Mechanical Testing)",
      "Failure/Root Cause Analysis",
      "Field Inspection for aging transmission structures"
    ],
    link: "/manufacturing-and-operations/"
  },
  {
    id: 3,
    icon: "📊",
    title: "MATERIAL MGT PROJECT MGT",
    heading: "Material and Project Management",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    points: [
      "Develop detailed project schedule to meet the construction demands",
      "Assist in Vendor Selections/evaluations",
      "Assist in negotiating the best pricing and delivery schedule from vendors",
      "Risk Mitigation planning",
      "Keep track of all milestones and critical delivery items"
    ],
    link: "/strategic-project-management/"
  },
  {
    id: 4,
    icon: "🚚",
    title: "LOGISTICS CONSTRUCTION SUPPORT",
    heading: "Logistics and Construction support",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    points: [
      "Follow up logistics planning from vendors",
      "Perform inspection of material upon arrival at port and Yards",
      "Provide support during construction process for missing pieces or mis-fab pieces",
      "Support for new helicopter splice, damage members and any technical issues"
    ],
    link: "/constructability-review/"
  },
  {
    id: 5,
    icon: "📰",
    title: "TECHNICAL PAPERS",
    heading: "Recent Publication of Technical Papers",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    points: [
      "Innovative solutions for placement of strain gauges on lattice towers- TSDOS-2022",
      "Consideration of Socio-Economic Values in Transmission Line Engineering- TSDOS-2021",
      "Sustainability Approach in Transmission Line Engineering: ASCE-ICSI-2021",
      "The Challenges for Successful EPC Transmission Projects- TSDOS-2020",
      "A Need for Improvement in Arm Design- TSDOS-2013",
      "The Right Choice of Steel for Lattice Steel Towers: TSDOS-2010"
    ],
    link: "/research/"
  },
  {
    id: 6,
    icon: "🎯",
    title: "OUR COMMITMENTS",
    heading: "OUR COMMITMENTS",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    points: [
      "Reliability and Resiliency based Design for Transmission Structures with Engineering Excellence",
      "Innovative and Cost-Effective solutions",
      "Quality and Professional Services",
      "Unbeatable Project Management and Technical Services",
      "R&D work in Transmission Line Engineering",
      "ON-Time Delivery and Seamless Project Execution",
      "Advanced Engineering Tools and Technologies",
      "Value Added Services and Customer Focused Approach"
    ],
    link: "/about/"
  }
];

const ModernTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-4 overflow-hidden">
      {/* Decorative Tower SVG - Left Side */}
      <div className="absolute left-0 top-0 h-full w-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 800" className="h-full w-full" fill="none">
          <path d="M100 50 L80 150 L60 250 L40 350 L30 450 L25 550 L20 650 L15 750" stroke="#171530" strokeWidth="8" strokeLinecap="round"/>
          <path d="M100 50 L120 150 L140 250 L160 350 L170 450 L175 550 L180 650 L185 750" stroke="#171530" strokeWidth="8" strokeLinecap="round"/>
          
          <line x1="40" y1="150" x2="160" y2="150" stroke="#171530" strokeWidth="6"/>
          <line x1="50" y1="250" x2="150" y2="250" stroke="#171530" strokeWidth="6"/>
          <line x1="60" y1="350" x2="140" y2="350" stroke="#171530" strokeWidth="6"/>
          <line x1="70" y1="450" x2="130" y2="450" stroke="#171530" strokeWidth="5"/>
          <line x1="75" y1="550" x2="125" y2="550" stroke="#171530" strokeWidth="5"/>
          
          <path d="M60 250 L100 200 L140 250" stroke="#CD091B" strokeWidth="4" fill="none"/>
          <path d="M60 350 L100 300 L140 350" stroke="#CD091B" strokeWidth="4" fill="none"/>
          <path d="M70 450 L100 400 L130 450" stroke="#CD091B" strokeWidth="3" fill="none"/>
          
          <path d="M40 150 Q20 180 10 220" stroke="#CD091B" strokeWidth="3" opacity="0.6"/>
          <path d="M160 150 Q180 180 190 220" stroke="#CD091B" strokeWidth="3" opacity="0.6"/>
        </svg>
      </div>

      {/* Decorative Tower SVG - Right Side */}
      <div className="absolute right-0 bottom-0 h-full w-64 opacity-5 pointer-events-none transform scale-x-[-1]">
        <svg viewBox="0 0 200 800" className="h-full w-full" fill="none">
          <path d="M100 50 L80 150 L60 250 L40 350 L30 450 L25 550 L20 650 L15 750" stroke="#171530" strokeWidth="8" strokeLinecap="round"/>
          <path d="M100 50 L120 150 L140 250 L160 350 L170 450 L175 550 L180 650 L185 750" stroke="#171530" strokeWidth="8" strokeLinecap="round"/>
          
          <line x1="40" y1="150" x2="160" y2="150" stroke="#171530" strokeWidth="6"/>
          <line x1="50" y1="250" x2="150" y2="250" stroke="#171530" strokeWidth="6"/>
          <line x1="60" y1="350" x2="140" y2="350" stroke="#171530" strokeWidth="6"/>
          <line x1="70" y1="450" x2="130" y2="450" stroke="#171530" strokeWidth="5"/>
          
          <path d="M60 250 L100 200 L140 250" stroke="#CD091B" strokeWidth="4" fill="none"/>
          <path d="M60 350 L100 300 L140 350" stroke="#CD091B" strokeWidth="4" fill="none"/>
          
          <path d="M40 150 Q20 180 10 220" stroke="#CD091B" strokeWidth="3" opacity="0.6"/>
          <path d="M160 150 Q180 180 190 220" stroke="#CD091B" strokeWidth="3" opacity="0.6"/>
        </svg>
      </div>

      {/* Floating Power Pole Icons */}
      <div className="absolute top-20 left-20 opacity-10 pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="28" stroke="#171530" strokeWidth="3" strokeDasharray="5 5"/>
          <rect x="26" y="10" width="8" height="40" fill="#171530" rx="2"/>
          <line x1="15" y1="20" x2="45" y2="20" stroke="#CD091B" strokeWidth="4"/>
        </svg>
      </div>

      <div className="absolute bottom-32 right-32 opacity-10 pointer-events-none">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <polygon points="40,10 30,30 20,50 15,70 40,65 65,70 60,50 50,30" fill="#171530" opacity="0.3"/>
          <line x1="20" y1="30" x2="60" y2="30" stroke="#CD091B" strokeWidth="3"/>
          <line x1="25" y1="50" x2="55" y2="50" stroke="#CD091B" strokeWidth="3"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="inline-block">
            <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4">
              <span className="bg-gradient-to-r from-[#CD091B] via-[#CD091B] to-[#CD091B] bg-clip-text text-transparent">
                Our Unique Services
              </span>
            </h2>
            <div className="h-2 bg-gradient-to-r from-transparent via-[#CD091B] to-transparent rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            TRANSMISSION LINE ENGINEERING &  MATERIALS  MANAGEMENT
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {tabsData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-700 ease-out transform hover:scale-105 ${
                activeTab === index
                  ? "bg-gradient-to-br from-[#0f1631] to-[#0f1631] shadow-2xl shadow-[#171530]/50"
                  : "bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 shadow-lg hover:shadow-xl"
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-[#0f1631]/10 to-[#0f1631]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${activeTab === index ? 'opacity-100' : ''}`} />
              
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className={`text-4xl transform transition-transform duration-300 ${activeTab === index ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {tab.icon}
                </div>
                <h3 className={`text-xs font-bold text-center uppercase tracking-wider transition-colors duration-300 ${
                  activeTab === index ? "text-white" : "text-gray-700 group-hover:text-[#CD091B]"
                }`}>
                  {tab.title}
                </h3>
              </div>

              {activeTab === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#CD091B] via-white to-[#CD091B]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div 
          className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          {tabsData.map((tab, index) => (
            <div
              key={tab.id}
              className={`transition-all duration-700 ${
                activeTab === index
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 absolute translate-x-full pointer-events-none"
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-[400px] lg:h-[600px] overflow-hidden group">
                  <img
                    src={tab.image}
                    alt={tab.heading}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171530] via-[#171530]/60 to-transparent" />
                  
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-[#CD091B] to-[#a0070f] text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg">
                      {tab.title}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-4xl font-black uppercase text-[#171530] mb-8 tracking-tight">
                    {tab.heading}
                  </h2>

                  <ul className="space-y-4 mb-8">
                    {tab.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#CD091B] to-[#a0070f] flex items-center justify-center text-white text-xs font-bold mt-0.5 group-hover/item:scale-110 transition-transform">
                          ✓
                        </span>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tab.link}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#CD091B] to-[#a0070f] hover:from-[#171530] hover:to-[#0a0a1a] text-white px-8 py-4 rounded-full font-bold uppercase text-sm tracking-wider shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group/btn w-fit"
                  >
                    <span>Read More</span>
                    <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernTabs;