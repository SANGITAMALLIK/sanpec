'use client';
import React, { useState } from 'react';
import { Plus, Minus, Zap, Radio, Cpu, Hexagon } from 'lucide-react';

const PowerStructureResearch = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Founding Member, Master of Engineering in Transmission & Distribution",
      icon: <Radio className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>Gonzagaa University's Transmission and Distribution Engineering Department trains power utility engineers for the future of the electrical grid.</p>
          <p>You will tackle real-world challenges and gain knowledge about emerging trends, as you learn from our expert faculty, who are working engineers and industry leaders at top utilities and engineering firms around the United States.</p>
          <p>We offer two online choices: a <strong>Master of Engineering in Transmission and Distribution Engineering</strong> and a <strong>Certificate in Transmission and Distribution Engineering</strong>.</p>
          <p>Both are designed for electric utility engineers and can help electrical, mechanical and civil engineers reach their goals in the power industry.</p>
        </div>
      )
    },
    {
      title: "Key Research Contributions",
      icon: <Hexagon className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>SANPEC has made significant strides in advancing transmission line engineering through its extensive research and development initiatives. The company's research has led to innovations in structural design, material optimization, sustainability integration, and smart grid technologies.</p>
          <p>Notable contributions include advancements in transmission tower design, with studies focusing on optimizing arm structures, steel selection, and corrosion resistance, as presented at the ASCE/SEI Conference on Structural Engineering (2009) and the Platts Transmission Planning & Development Forum (2010). Research on source inspection and predictive maintenance has been critical in ensuring the quality and reliability of transmission structures, with findings shared at TSDOS (2012, 2013, 2019, 2020) and EDM (2014, 2012). Additionally, SANPEC has explored the impact of material transformations, such as the Silicon Effect Color Transformation on Lattice Steel Towers, presented at IEEE (2012).</p>
          <p>The company has also prioritized sustainability, as demonstrated in its research presented at the ASCE International Conference on Sustainable Infrastructure (ICSI, 2021), emphasizing eco-friendly transmission line solutions. Furthermore, SANPEC has contributed to the socio-economic dimensions of transmission line engineering (TSDOS-2021) and developed innovative solutions for strain gauge placement on lattice towers (TSDOS-2022), improving structural monitoring and performance assessment. By continuously investing in cutting-edge research, SANPEC remains at the forefront of enhancing the efficiency, resilience, and sustainability of modern transmission and distribution infrastructure.</p>
        </div>
      )
    },
    {
      title: "Advanced Materials Development",
      icon: <Cpu className="w-5 h-5" />,
      content: (
        <p>Researching high-capacity, durable conductors and corrosion-resistant materials for transmission infrastructure.</p>
      )
    },
    {
      title: "Advanced Technologies",
      icon: <Zap className="w-5 h-5" />,
      content: (
        <p>Integrating IoT, artificial intelligence, and big data analytics for real-time monitoring, predictive maintenance, and operational optimization.</p>
      )
    },
    {
      title: "Structural Innovations",
      icon: <Hexagon className="w-5 h-5" />,
      content: (
        <p>Enhancing the design and engineering of transmission towers, poles, and components for improved load capacity and longevity.</p>
      )
    },
    {
      title: "Sustainability and Circular Economy",
      icon: <Radio className="w-5 h-5" />,
      content: (
        <p>Developing eco-friendly materials, optimizing resource use, and implementing lifecycle assessments to reduce environmental impact.</p>
      )
    },
    {
      title: "Simulation and Prototyping",
      icon: <Cpu className="w-5 h-5" />,
      content: (
        <p>Utilizing advanced software and physical testing to validate new designs and manufacturing processes before large-scale implementation.</p>
      )
    },
    {
      title: "Innovation in Research and Education",
      icon: <Zap className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>1. We are committed to advancing the quality of life through outstanding research and innovation in T&D engineering and technology education. Our data-driven, integrated engineering excellence process improves grid reliability and resilience goals.</p>
          <p>2. We have built an innovative industry-academic-government partnership that promotes world-class research and education while focusing on new skill development challenges faced by the energy and infrastructure industry.</p>
          <p>3. We have improved the public understanding of the importance of energy and engineering education.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#0B1931 1px, transparent 1px), linear-gradient(90deg, #0B1931 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          opacity: 0.03
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-20 relative z-10">
        {/* Main Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-red-600 to-red-600 rounded-full"></div>
              <Zap className="w-8 h-8 text-red-600 animate-pulse" />
              <div className="w-12 h-1 bg-gradient-to-l from-transparent via-red-600 to-red-600 rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-2 tracking-tight">
              RESEARCH & <span className="text-red-600">INNOVATION</span>
            </h1>
            <div className="h-1.5 bg-gradient-to-r from-red-600 via-gray-900 to-red-600 rounded-full mt-4"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Sidebar - Image & Title */}
          <div className="lg:col-span-1 space-y-6">
            {/* Image Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl">
                <a href="https://www.gonzaga.edu/school-of-engineering-applied-science/graduate/transmission-distribution/faculty/mallik" target="_blank" rel="noopener noreferrer">
                  <div className="overflow-hidden">
                    <img 
                      src="https://sanpec-excellence.com/wp-content/uploads/2025/02/36-rotated.jpg" 
                      alt="Research and Innovation"
                      className="w-full h-auto object-cover transform group-hover:scale-110 transition duration-700"
                    />
                  </div>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            
            {/* Education Title Card */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 rounded-xl p-6 md:p-8 shadow-2xl border border-gray-300 group-hover:border-red-600 transition-all duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse delay-75"></div>
                  <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse delay-150"></div>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-wider group-hover:tracking-widest transition-all duration-500 transform group-hover:translate-x-1">
                  education and training
                </h2>
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-transparent transition-all duration-700 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Modern Accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-2">
              {accordionData.map((item, index) => (
                <div 
                  key={index}
                  className="group"
                >
                  <div className={`relative transition-all duration-500`}>
                    {/* Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-red-600 to-gray-900 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500 ${openAccordion === index ? 'opacity-20' : ''}`}></div>
                    
                    {/* Main Card */}
                    <div className={`relative bg-gradient-to-r from-white via-gray-50 to-white rounded-xl shadow-lg overflow-hidden border-2 transition-all duration-500 ${
                      openAccordion === index 
                        ? 'border-red-600 shadow-2xl' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}>
                      {/* Header */}
                      <button
                        onClick={() => toggleAccordion(index)}
                        className={`w-full flex items-center justify-between text-left group/btn transition-all duration-300 hover:bg-gray-50 ${
                          openAccordion === index ? 'p-4 md:p-5' : 'p-3 md:p-3.5'
                        }`}
                      >
                        <div className="flex items-center gap-4 flex-1">
                          {/* Title with smaller font when closed */}
                          <span className={`font-bold transition-all duration-300 ${
                            openAccordion === index 
                              ? 'text-base md:text-lg text-red-600' 
                              : 'text-sm md:text-base text-gray-900 group-hover/btn:text-red-600'
                          }`}>
                            {item.title}
                          </span>
                        </div>
                        
                        {/* Plus/Minus Icon */}
                        <div className="flex-shrink-0 ml-4">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white group-hover/btn:from-red-600 group-hover/btn:to-red-700 transition-all duration-300">
                            {openAccordion === index ? (
                              <Minus className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
                          </div>
                        </div>
                      </button>
                      
                      {/* Content */}
                      <div className={`transition-all duration-500 ease-in-out ${
                        openAccordion === index 
                          ? 'max-h-[2000px] opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-4 md:px-5 pb-5 pt-2">
                          <div className="border-t-2 border-gray-200 pt-4">
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 md:p-5 text-gray-700 leading-relaxed text-sm md:text-base">
                              {item.content}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-75 {
          animation-delay: 75ms;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </div>
  );
};

export default PowerStructureResearch;