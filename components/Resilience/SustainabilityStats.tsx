'use client';
import React, { useState } from 'react';

export default function HolisticImpactSection() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: 1,
      title: "Envision",
      color: "from-blue-500 to-blue-600",
      image: "https://sanpec-excellence.com/wp-content/uploads/2024/08/Envision-241x300-2.png"
    },
    {
      id: 2,
      title: "Water Use & Management",
      color: "from-red-500 to-red-600",
      image: "https://sanpec-excellence.com/wp-content/uploads/2024/08/editable-water-management-icon-concept-isolated-sustainable-office-thin-line-illustration-vector.jpg"
    },
    {
      id: 3,
      title: "Natural World",
      color: "from-pink-400 to-pink-500",
      image: "https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture11-2.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE - Title & Description */}
          <div className="space-y-8">
            
            {/* Title - Similar to your image style */}
            <div className="space-y-2">
              <h1 className="text-7xl font-black leading-tight">
                <span className="text-gray-900">HOLISTIC</span>
              </h1>
              <h2 className="text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Impact &
                </span>
              </h2>
              <h2 className="text-6xl font-bold italic leading-tight">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  Sustainability
                </span>
              </h2>
            </div>

            {/* Description Box with border */}
            <div className="border-l-4 border-blue-600 bg-white rounded-r-2xl p-8 shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                Responsible management of natural resources and ecosystems to ensure they endure for future generations. 
                Our approach integrates <span className="text-blue-600 font-semibold">environmental stewardship</span> with 
                <span className="text-red-500 font-semibold"> sustainable practices</span> for lasting impact.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE - Circular Network Design */}
          <div className="relative w-full h-[600px]">
            
            {/* Center Text - "HOLISTIC IMPACT" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-2xl border-4 border-gray-200">
                <h3 className="text-4xl font-black text-gray-800 mb-1">HOLISTIC</h3>
                <h3 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">IMPACT</h3>
              </div>
            </div>

            {/* SVG Lines connecting circles to center */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 600 600">
              <defs>
                <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 0.5}} />
                  <stop offset="100%" style={{stopColor: '#6366f1', stopOpacity: 0.5}} />
                </linearGradient>
                <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#ef4444', stopOpacity: 0.5}} />
                  <stop offset="100%" style={{stopColor: '#f59e0b', stopOpacity: 0.5}} />
                </linearGradient>
                <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#f472b6', stopOpacity: 0.5}} />
                  <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 0.5}} />
                </linearGradient>
              </defs>
              {/* Top circle to center */}
              <line x1="300" y1="80" x2="300" y2="250" stroke="url(#lineGrad1)" strokeWidth="3" strokeDasharray="6,6" className="animate-pulse" />
              {/* Bottom left circle to center */}
              <line x1="120" y1="480" x2="270" y2="330" stroke="url(#lineGrad2)" strokeWidth="3" strokeDasharray="6,6" className="animate-pulse" />
              {/* Bottom right circle to center */}
              <line x1="480" y1="480" x2="330" y2="330" stroke="url(#lineGrad3)" strokeWidth="3" strokeDasharray="6,6" className="animate-pulse" />
            </svg>

            {/* Top Circle - Envision */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveNode(1)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${nodes[0].color} p-1.5 shadow-xl transform transition-all duration-500 ${activeNode === 1 ? 'scale-110 shadow-blue-500/60' : 'scale-100'}`}>
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-3">
                    <img src={nodes[0].image} alt="Envision" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className={`absolute -bottom-14 left-1/2 -translate-x-1/2 w-36 text-center transition-all duration-300 ${activeNode === 1 ? 'opacity-100 scale-105' : 'opacity-80'}`}>
                  <div className={`bg-gradient-to-r ${nodes[0].color} text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold`}>
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
                <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${nodes[1].color} p-1.5 shadow-xl transform transition-all duration-500 ${activeNode === 2 ? 'scale-110 shadow-red-500/60' : 'scale-100'}`}>
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-3">
                    <img src={nodes[1].image} alt="Water Management" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className={`absolute -top-16 left-1/2 -translate-x-1/2 w-48 text-center transition-all duration-300 ${activeNode === 2 ? 'opacity-100 scale-105' : 'opacity-80'}`}>
                  <div className={`bg-gradient-to-r ${nodes[1].color} text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold`}>
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
                <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${nodes[2].color} p-1.5 shadow-xl transform transition-all duration-500 ${activeNode === 3 ? 'scale-110 shadow-pink-400/60' : 'scale-100'}`}>
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-3">
                    <img src={nodes[2].image} alt="Natural World" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className={`absolute -top-16 left-1/2 -translate-x-1/2 w-40 text-center transition-all duration-300 ${activeNode === 3 ? 'opacity-100 scale-105' : 'opacity-80'}`}>
                  <div className={`bg-gradient-to-r ${nodes[2].color} text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold`}>
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