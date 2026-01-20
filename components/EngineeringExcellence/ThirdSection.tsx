import React from 'react';

export default function SanpecBeaconSection() {
  return (
    <div className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(16, 22, 49, 0.02) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(16, 22, 49, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Background Power Grid SVG */}
      <div className="absolute inset-0 opacity-4">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          {/* Power Tower Silhouettes */}
          <g transform="translate(150, 500)">
            <polygon points="0,-50 -15,0 15,0" fill="#101631" opacity="0.3"/>
            <rect x="-2" y="0" width="4" height="40" fill="#101631" opacity="0.3"/>
          </g>
          <g transform="translate(1050, 600)">
            <polygon points="0,-50 -15,0 15,0" fill="#CD091B" opacity="0.3"/>
            <rect x="-2" y="0" width="4" height="40" fill="#CD091B" opacity="0.3"/>
          </g>
          
          {/* Energy Lines */}
          <line x1="0" y1="400" x2="1200" y2="400" stroke="#CD091B" strokeWidth="2" strokeDasharray="20 10" opacity="0.3"/>
          <line x1="0" y1="600" x2="1200" y2="600" stroke="#101631" strokeWidth="2" strokeDasharray="20 10" opacity="0.3"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="relative">
            {/* Red Accent Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#CD091B' }}></div>
            
            <div className="pl-8">
              <div className="inline-block mb-3 px-4 py-1 rounded-full" style={{ backgroundColor: 'rgba(205, 9, 27, 0.1)', border: '2px solid #CD091B' }}>
                <span className="text-xs font-bold tracking-widest" style={{ color: '#CD091B' }}>GOLDEN ERA</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight" style={{ color: '#101631' }}>
                SANPEC: A BEACON OF<br/>
                <span style={{ color: '#CD091B' }}>NEW HOPE</span> IN THE<br/>
                GOLDEN ERA.
              </h1>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="relative p-6 rounded-xl border-l-4" style={{ backgroundColor: '#f8f9fa', borderColor: '#CD091B' }}>
              <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>
                At SANPEC, we recognize that engineers build more than structures; they create new possibilities and shape the future of our communities. 21st century businesses are seeking new paths to organize dynamic knowledge and information. In this volatile, uncertain, complex, and ambiguously defined world, making effective decisions demands a deep alignment with our soul, a creative vision for the future, a willingness to innovate, and the resilience to learn from the challenges we face.
              </p>
            </div>
            
            <div className="relative p-6 rounded-xl border-l-4" style={{ backgroundColor: '#f8f9fa', borderColor: '#101631' }}>
              <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>
                The company's six pillars of excellence business model promises to succeed where the outdated, centralized, command-based structures of the 20th century have faltered in meeting the evolving demands of the energy and infrastructure markets.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-0 left-0 right-0 h-1 mt-8" style={{ backgroundColor: '#e5e7eb' }}>
            <div className="absolute top-0 left-0 h-full w-1/3" style={{ backgroundColor: '#CD091B' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Card 1 */}
            <div className="relative flex flex-col h-full">
              {/* Power Icon */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg z-10" style={{ backgroundColor: '#CD091B' }}>
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              
              <div className="bg-white rounded-2xl p-6 pt-16 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex-1 flex flex-col border-t-4" style={{ borderColor: '#CD091B' }}>
                <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#101631' }}>
                  Bridging the Gap Between Technology and Humanity
                </h3>
                
                <p className="text-sm leading-relaxed text-center flex-1" style={{ color: '#4a5568' }}>
                  Engineering isn't just about technical advancements; it's about improving lives. Every innovation we develop is focused on making the grid more resilient, accessible, and equitable, ensuring that urban and rural communities have reliable power for future generations.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative flex flex-col h-full">
              {/* Power Icon */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg z-10" style={{ backgroundColor: '#101631' }}>
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              
              <div className="bg-white rounded-2xl p-6 pt-16 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex-1 flex flex-col border-t-4" style={{ borderColor: '#101631' }}>
                <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#101631' }}>
                  Delivering Excellence Through Continuous Improvement
                </h3>
                
                <p className="text-sm leading-relaxed text-center flex-1" style={{ color: '#4a5568' }}>
                  At SANPEC, we set the bar high for engineering quality, safety, and performance. Through cutting-edge technology, rigorous testing, and data-driven decision-making, we continuously refine our designs and processes to ensure best-in-class reliability and efficiency in power transmission. We believe innovation isn't a one-time breakthrough but a relentless pursuit of better solutions.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative flex flex-col h-full">
              {/* Power Icon */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg z-10" style={{ backgroundColor: '#CD091B' }}>
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              
              <div className="bg-white rounded-2xl p-6 pt-16 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex-1 flex flex-col border-t-4" style={{ borderColor: '#CD091B' }}>
                <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#101631' }}>
                  Empowering the Next Generation of Engineers
                </h3>
                
                <p className="text-sm leading-relaxed text-center flex-1" style={{ color: '#4a5568' }}>
                  America's energy future depends on the innovators of tomorrow. At SANPEC, we cultivate a learning-driven culture within our organization while actively collaborating with universities and research institutions to bridge the gap between academia and industry. Through hands-on experience, expert mentorship, and real-world exposure to cutting-edge grid modernization projects, we equip young engineers with the skills and knowledge they need to lead the next era of power transmission innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}