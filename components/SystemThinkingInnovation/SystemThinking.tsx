'use client';
import React, { useState } from 'react';

export default function TransmissionEngineering() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Rethinking Transmission<br />Engineering
            </h1>
          </div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <img 
                  src="https://sanpec-excellence.com/wp-content/uploads/2025/06/Colorful-3-Bullet-Point-Step-Process-Infographic-Graph-8.png"
                  alt="Transmission Engineering Process"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div 
              className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-orange-500 transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-4">
                <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
              </div>
              <p className="text-black text-lg leading-relaxed">
                Traditional transmission engineering has long been constrained by rigid design methodologies, extended project timelines, and reactive maintenance approaches. SANPEC is challenging these limitations by adopting a data-driven, modular, and predictive approach, transforming transmission systems into intelligent, self-monitoring infrastructures that evolve with grid dynamics.
              </p>
            </div>

            <div 
              className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-blue-600 transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-4">
                <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              </div>
              <p className="text-black text-lg leading-relaxed">
                A key focus of this transformation is structural optimization, ensuring that materials, configurations, and designs are not only efficient but also cost-effective, environmentally responsible, and resilient. By integrating advanced material science, optimized structure configurations, and lifecycle-based design principles, SANPEC reduces material waste, enhances installation efficiency, and minimizes long-term operational costs. This includes right-of-way (ROW) optimization, ensuring efficient land use while minimizing environmental impacts
              </p>
            </div>

            <div 
              className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-orange-400 transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-4">
                <div className="w-12 h-1 bg-orange-400 rounded-full"></div>
              </div>
              <p className="text-black text-lg leading-relaxed">
                Moving from a reactive to a proactive infrastructure model, SANPEC deploys smart sensors and real-time analytics to enable transmission assets to predict failures before they occur, significantly improving grid reliability. This predictive approach is further enhanced through AI-driven structural analysis, allowing for real-world load assessments instead of relying on purely theoretical models. This ensures that tower and conductor designs are optimized for performance, cost efficiency, and aesthetic considerations, while also using environmentally preferable structures such as steel poles and towers.
              </p>
            </div>

            <div 
              className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-green-500 transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-4">
                <div className="w-12 h-1 bg-green-500 rounded-full"></div>
              </div>
              <p className="text-black text-lg leading-relaxed">
                Beyond technical excellence, SANPEC is committed to lifecycle economics and best-practice specifications, ensuring that transmission projects are built for long-term sustainability, economic value, and ease of maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-20"></div>
    </div>
  );
}