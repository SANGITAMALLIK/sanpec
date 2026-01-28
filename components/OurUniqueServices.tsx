"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const tabsData = [
  {
    id: 1,
    icon: "⚡",
    title: "ENGINEERING TYPE TESTING (HVAC/HVDC)",
    heading: "Engineering, Testing",
    // First tab has multiple images for slideshow
    images: [
      "images/sanpec_2026/15.jpeg",
      "images/sanpec_2026/1.jpeg",
      "images/sanpec_2026/7.jpeg",
      "images/sanpec_2026/8.jpeg",
      "images/sanpec_2026/11.jpeg",
      "images/sanpec_2026/13.jpeg",
      "images/sanpec_2026/14.jpeg"
    ],
    image: "images/home/services/15.jpeg", // fallback
    points: [
      "Transmission Line Engineering and Manufacturing of Steel Structures (Sustainability Approach)",
      "Structural Analysis, Design and Detailing of Steel Poles and Lattice Tower",
      "Full Scale Structural Testing (Witnessing and Validation)",
      "Electrical Testing: Corona/RIV and others",
      "Type Testing: Conductor/OPGW/Hardware",
      "Prototype and Proof of Fit Testing",
      "Technical Specifications Review"
    ],
    link: "/electric-power/transmisson/design-and-engineering"
  },
  {
    id: 2,
    icon: "🔍",
    title: "PLANT AUDIT VQA SOURCE INSPECTIONS (QA/QC)",
    heading: "Plant Audit, Inspections (QA/QC), ITP",
    image: "images/home/services/2.jpg",
    points: [
      "Transmission Materials: Steel Pole, Lattice Towers, and Substation Support Structures, Insulator, Conductor, OPGW , Guy Wires  Shield Wires and Hardware Assembly",
      "Weld Inspections – NDT Technique",
      "Fabrication Shop Audits and on-site Inspections",
      "Material Sampling (Metallurgical and Mechanical Testing)",
      "Failure/Root Cause Analysis",
      "Field Inspection for aging transmission structures"
    ],
    link: "/electric-power/manufacturing/failure-analysis"
  },
  {
    id: 3,
    icon: "📊",
    title: "MATERIAL MGT PROJECT MGT",
    heading: "Material and Project Management",
    image: "images/home/services/3.png",
    points: [
      "Develop detailed project schedule to meet the construction demands",
      "Assist in Vendor Selections/evaluations",
      "Assist in negotiating the best pricing and delivery schedule from vendors",
      "Risk Mitigation planning",
      "Keep track of all milestones and critical delivery items"
    ],
    link: "/electric-power/strategic/material-sourcing"
  },
  {
    id: 4,
    icon: "🚚",
    title: "LOGISTICS CONSTRUCTION SUPPORT",
    heading: "Logistics and Construction support",
    image: "images/home/services/36.jpeg",
    points: [
      "Follow up logistics planning from vendors",
      "Perform inspection of material upon arrival at port and Yards",
      "Provide support during construction process for missing pieces or mis-fab pieces or new helicopter splice, damage members and any technical issues"
    ],
    link: "/electric-power/constructability/logistic-construction"
  },
  {
    id: 5,
    icon: "📰",
    title: "TECHNICAL PAPERS",
    heading: "Recent Publication of Technical Papers",
    image: "images/home/services/5.webp",
    points: [
      "Innovative solutions for placement of strain gauges on lattice towers- TSDOS-2022",
      "Consideration of Socio-Economic Values in Transmission Line Engineering- TSDOS-2021",
      "Sustainability Approach in Transmission Line Engineering: ASCE-International Conference on Sustainable Infrastructure- ICSI-2021",
      "The Challenges for Successful EPC Transmission Projects- TSDOS-2020 Challenges in performing Structural Analysis of existing lattice towers- TSDOS-2019",
      "A Need for Improvement in Arm Design: Consideration for New Design Approach: TSDOS- 2013",
      "The Right Choice of Steel for Lattice Steel Towers: TSDOS-2010, EDM-2012",
      "Silicon Effect Color Transformation (SECT) on Lattice Steel Towers- IEEE-2012",
      "Why Source Inspection is Critical for Transmission Structures: TSDOS-2012, EDM-2014",
      "Challenges in Executing large and complex Transmission Projects, Platts transmission planning and development forum-2010",
      "H2S Entrapment and Corrosion on Direct Embedded Galvanized Steel Transmission Poles: ASCE/SEI-2009",
      "Research paper on “Design and Analysis of Transmission Line Tower"
    ],
    link: "/research-and-innovation"
  },
  {
    id: 6,
    icon: "🎯",
    title: "OUR COMMITMENTS",
    heading: "OUR COMMITMENTS",
    image: "images/home/services/30.jpeg",
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
    link: "/about"
  }
];

const ModernTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide images for first tab
  useEffect(() => {
    if (activeTab === 0 && tabsData[0].images) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          (prev + 1) % tabsData[0].images.length
        );
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [activeTab]);

  // Reset image index when changing tabs
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTab]);

  return (
    <div className="relative w-full bg-[#e8e9ea] py-20 px-4 overflow-hidden">
      {/* Decorative Tower Image - Left Side */}
      <div className="absolute left-0 top-0 h-full w-80 pointer-events-none overflow-hidden">
        <img 
          src="images/home/services/pole_background.png" 
          alt="Power Pole Background"
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e8e9ea]/50 to-[#e8e9ea]"></div>
      </div>

      {/* Decorative Tower Image - Right Side */}
      <div className="absolute right-0 top-0 h-full w-80 pointer-events-none overflow-hidden transform scale-x-[-1]">
        <img 
          src="images/home/services/pole_background.png" 
          alt="Power Pole Background"
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e8e9ea]/50 to-[#e8e9ea]"></div>
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
        <div className="text-center mb-16">
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
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ${
                activeTab === index
                  ? "bg-gradient-to-br from-[#0f1631] to-[#0f1631] shadow-2xl shadow-[#171530]/50"
                  : "bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 shadow-lg hover:shadow-xl"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-[#0f1631]/10 to-[#0f1631]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeTab === index ? 'opacity-100' : ''}`} />
              
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="text-4xl">
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
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {tabsData.map((tab, index) => (
            <div
              key={tab.id}
              className={activeTab === index ? "" : "hidden"}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section with Slideshow for First Tab */}
                <div className="relative h-[400px] lg:h-[600px] overflow-hidden group">
                  {index === 0 && tab.images ? (
                    // SLIDESHOW FOR FIRST TAB
                    <>
                      {tab.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`absolute inset-0 transition-opacity duration-1000 ${
                            imgIndex === currentImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${tab.heading} ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold z-20">
                        {currentImageIndex + 1} / {tab.images.length}
                      </div>

                      {/* Image Navigation Dots */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                        {tab.images.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            onClick={() => setCurrentImageIndex(dotIndex)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              dotIndex === currentImageIndex 
                                ? 'bg-[#CD091B] w-8' 
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    // SINGLE IMAGE FOR OTHER TABS
                    <img
                      src={tab.image}
                      alt={tab.heading}
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171530] via-[#171530]/60 to-transparent" />
                  
                  <div className="absolute top-6 left-6 z-10">
                    <div className="bg-gradient-to-r from-[#CD091B] to-[#a0070f] text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg">
                      {tab.title}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-4xl font-black uppercase text-[#171530] mb-8 tracking-tight">
                    {tab.heading}
                  </h2>

                  <ul className="space-y-4 mb-8">
                    {tab.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#CD091B] to-[#a0070f] flex items-center justify-center text-white text-xs font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tab.link}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#CD091B] to-[#a0070f] hover:from-[#171530] hover:to-[#0a0a1a] text-white px-8 py-4 rounded-full font-bold uppercase text-sm tracking-wider shadow-lg hover:shadow-2xl transition-all duration-300 group/btn w-fit"
                  >
                    <span>Read More</span>
                    <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
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