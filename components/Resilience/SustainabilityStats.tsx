'use client';
import React, { useState } from 'react';

export default function HolisticImpactSection() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: 1,
      title: "Envision",
      color: "#101631",
      image: "https://sanpec-excellence.com/wp-content/uploads/2024/08/Envision-241x300-2.png"
    },
    {
      id: 2,
      title: "Water Use & Management",
      color: "#CD091B",
      image: "https://sanpec-excellence.com/wp-content/uploads/2024/08/editable-water-management-icon-concept-isolated-sustainable-office-thin-line-illustration-vector.jpg"
    },
    {
      id: 3,
      title: "Natural World",
      color: "#101631",
      image: "https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture11-2.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE - Title & Description */}
          <div className="space-y-8">
            
            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-7xl font-bold leading-tight text-gray-900">
                HOLISTIC
              </h1>
              <h2 className="text-6xl font-bold leading-tight text-[#101631]">
                Impact &
              </h2>
              <h2 className="text-6xl font-bold italic leading-tight text-[#CD091B]">
                Sustainability
              </h2>
            </div>

            {/* Description Box */}
            <div className="border-l-4 border-[#101631] bg-gray-50 p-8 shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                Responsible management of natural resources and ecosystems to ensure they endure for future generations. 
                Our approach integrates <span className="text-[#101631] font-semibold">environmental stewardship</span> with
                <span className="text-[#CD091B] font-semibold"> sustainable practices</span> for lasting impact.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE - Circular Network Design */}
          <div className="relative w-full h-[600px]">
            
            {/* Center Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
              <div className="bg-white border-4 border-gray-200 px-8 py-6 shadow-2xl">
                <h3 className="text-4xl font-bold text-gray-800 mb-1">HOLISTIC</h3>
                <h3 className="text-4xl font-bold text-[#CD091B]">IMPACT</h3>
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
                  className={`w-40 h-40 rounded-full p-1.5 shadow-xl transform transition-all duration-500 ${activeNode === 1 ? 'scale-110' : 'scale-100'}`}
                  style={{ backgroundColor: nodes[0].color }}
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-3">
                    <img src={nodes[0].image} alt="Envision" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className={`absolute -bottom-14 left-1/2 -translate-x-1/2 w-36 text-center transition-all duration-300 ${activeNode === 1 ? 'opacity-100 scale-105' : 'opacity-80'}`}>
                  <div 
                    className="text-white px-4 py-2 shadow-lg text-sm font-semibold"
                    style={{ backgroundColor: nodes[0].color }}
                  >
                    {nodes[0].title}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left Circle - Water Management */}
            <div className="absolute bottom-0 left-16 z-10">
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveNode(2)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div 
                  className={`w-40 h-40 rounded-full p-1.5 shadow-xl transform transition-all duration-500 ${activeNode === 2 ? 'scale-110' : 'scale-100'}`}
                  style={{ backgroundColor: nodes[1].color }}
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-3">
                    <img src={nodes[1].image} alt="Water Management" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className={`absolute -top-16 left-1/2 -translate-x-1/2 w-48 text-center transition-all duration-300 ${activeNode === 2 ? 'opacity-100 scale-105' : 'opacity-80'}`}>
                  <div 
                    className="text-white px-4 py-2 shadow-lg text-sm font-semibold"
                    style={{ backgroundColor: nodes[1].color }}
                  >
                    {nodes[1].title}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right Circle - Natural World */}
            <div className="absolute bottom-0 right-16 z-10">
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveNode(3)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div 
                  className={`w-40 h-40 rounded-full p-1.5 shadow-xl transform transition-all duration-500 ${activeNode === 3 ? 'scale-110' : 'scale-100'}`}
                  style={{ backgroundColor: nodes[2].color }}
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-3">
                    <img src={nodes[2].image} alt="Natural World" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className={`absolute -top-16 left-1/2 -translate-x-1/2 w-40 text-center transition-all duration-300 ${activeNode === 3 ? 'opacity-100 scale-105' : 'opacity-80'}`}>
                  <div 
                    className="text-white px-4 py-2 shadow-lg text-sm font-semibold"
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
  );
}