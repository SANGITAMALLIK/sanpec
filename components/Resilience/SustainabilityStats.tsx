'use client';
import React, { useState } from 'react';

export default function HolisticImpactSection() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: 1,
      title: "Envision",
      color: "#101631",
      image: "/images/sustainability/1.png"
    },
    {
      id: 2,
      title: "Water Use & Management",
      color: "#CD091B",
      image: "/images/sustainability/2.jpg"
    },
    {
      id: 3,
      title: "Natural World",
      color: "#101631",
      image: "/images/sustainability/3.png"
    }
  ];

  return (
    <>
      {/* Top Section - Sustainability Hero */}
      <div className="bg-gray-100 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            
            {/* LEFT SIDE - Text Content */}
           
            {/* RIGHT SIDE - Venn Diagram Image */}
            <div className="flex items-center justify-center mt-6 lg:mt-0">
              <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-2xl w-full max-w-sm md:max-w-md">
                <img 
                  src="/images/sustainability/Picture34.jpg" 
                  alt="Sustainability Venn Diagram" 
                  className="w-full h-auto"
                />
              </div>
            </div>
              <div className="space-y-4 md:space-y-6">        
              {/* Heading */}
              <div>
              
                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#101631]">
                    RESILIENCE AND
                </h2>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic leading-tight text-[#CD091B]">
                  Sustainability
                </h2>
              </div>

              {/* Description */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Sustainability is an approach to business that meets the needs of the present without compromising the ability of the future generations to meet their own needs.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section - Holistic Impact (Original Design) */}
      <div className="min-h-screen bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE - Title & Description */}
            <div className="space-y-6 md:space-y-8">
              
              {/* Title */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                  HOLISTIC
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#101631]">
                  Impact &
                </h2>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic leading-tight text-[#CD091B]">
                  Sustainability
                </h2>
              </div>

              {/* Description Box */}
              <div className="border-l-4 border-[#101631] bg-gray-50 p-4 md:p-6 lg:p-8 shadow-lg">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Responsible management of natural<span className="text-[#101631] font-semibold"> resources and ecosystems</span> to
                  <span className="text-[#CD091B] font-semibold"> ensure they endure</span> for future generations
                </p>
              </div>

            </div>

            {/* RIGHT SIDE - Circular Network Design */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] mt-8 lg:mt-0">
              
              {/* Center Text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                <div className="bg-white border-2 md:border-4 border-gray-200 px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 shadow-2xl">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-1">HOLISTIC</h3>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#CD091B]">IMPACT</h3>
                </div>
              </div>

              {/* SVG Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 600 600">
                <line x1="300" y1="80" x2="300" y2="250" stroke="#101631" strokeWidth="3" strokeDasharray="6,6" opacity="0.3" />
                <line x1="120" y1="480" x2="270" y2="330" stroke="#CD091B" strokeWidth="3" strokeDasharray="6,6" opacity="0.3" />
                <line x1="480" y1="480" x2="330" y2="330" stroke="#101631" strokeWidth="3" strokeDasharray="6,6" opacity="0.3" />
              </svg>

              {/* Top Circle - Envision */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <div 
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setActiveNode(1)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div 
                    className={`w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full p-1.5 shadow-xl transform transition-all duration-500 ${activeNode === 1 ? 'scale-110' : 'scale-100'}`}
                    style={{ backgroundColor: nodes[0].color }}
                  >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-2 md:p-3">
                      <img src={nodes[0].image} alt="Envision" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className={`absolute -bottom-10 md:-bottom-12 lg:-bottom-14 left-1/2 -translate-x-1/2 w-28 sm:w-32 md:w-36 text-center transition-all duration-300 ${activeNode === 1 ? 'opacity-100 scale-105' : 'opacity-80'}`}>
                    <div 
                      className="text-white px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 shadow-lg text-xs md:text-sm font-semibold"
                      style={{ backgroundColor: nodes[0].color }}
                    >
                      {nodes[0].title}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Left Circle - Water Management */}
              <div className="absolute bottom-0 left-4 sm:left-8 md:left-12 lg:left-16 z-10">
                <div 
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setActiveNode(2)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div 
                    className={`w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full p-1.5 shadow-xl transform transition-all duration-500 ${activeNode === 2 ? 'scale-110' : 'scale-100'}`}
                    style={{ backgroundColor: nodes[1].color }}
                  >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-2 md:p-3">
                      <img src={nodes[1].image} alt="Water Management" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className={`absolute -top-10 md:-top-12 lg:-top-16 left-1/2 -translate-x-1/2 w-32 sm:w-36 md:w-40 lg:w-48 text-center transition-all duration-300 ${activeNode === 2 ? 'opacity-100 scale-105' : 'opacity-80'}`}>
                    <div 
                      className="text-white px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 shadow-lg text-xs md:text-sm font-semibold"
                      style={{ backgroundColor: nodes[1].color }}
                    >
                      {nodes[1].title}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Right Circle - Natural World */}
              <div className="absolute bottom-0 right-4 sm:right-8 md:right-12 lg:right-16 z-10">
                <div 
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setActiveNode(3)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div 
                    className={`w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full p-1.5 shadow-xl transform transition-all duration-500 ${activeNode === 3 ? 'scale-110' : 'scale-100'}`}
                    style={{ backgroundColor: nodes[2].color }}
                  >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-2 md:p-3">
                      <img src={nodes[2].image} alt="Natural World" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className={`absolute -top-10 md:-top-12 lg:-top-16 left-1/2 -translate-x-1/2 w-28 sm:w-32 md:w-36 lg:w-40 text-center transition-all duration-300 ${activeNode === 3 ? 'opacity-100 scale-105' : 'opacity-80'}`}>
                    <div 
                      className="text-white px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 shadow-lg text-xs md:text-sm font-semibold"
                      style={{ backgroundColor: nodes[2].color }}
                    >
                      {nodes[2].title}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}