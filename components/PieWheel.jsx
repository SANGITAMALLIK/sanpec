'use client';

import { useState, useEffect, useRef } from 'react';

const sections = [
  {
    tabTitle: "Systems and Approach",
    contentTitle: "Systems Approach and Foresight",
    image: "https://sanpec-excellence.com/wp-content/uploads/2025/02/Rectangle-3-copy-8-3.png",
    content: [
      {
        subtitle: "Visionary Leadership:",
        text: "SANPEC adopts a holistic perspective to integrate components, ensuring efficiency, reliability, and synergy across operations."
      },
      {
        text: "We view the business as a cohesive whole rather than a collection of independent parts. This approach ensures that decisions and strategies are made with consideration of their impact across all departments and functions."
      },
      {
        subtitle: "Strategic Synergy:",
        text: "By integrating various business functions—from research and engineering to manufacturing—SANPEC ensures that all efforts align with the company's strategic goals, leading to more efficient and effective outcomes."
      },
      {
        subtitle: "Feedback Loops and Adaptation:",
        text: "Regular feedback mechanisms are embedded within the system, allowing for continuous monitoring and adaptation of strategies based on real-time data and market trends."
      }
    ],
    link: "/sanpec-six-pillars/"
  },
  {
    tabTitle: "Agility",
    contentTitle: "Agility and Strategic Planning",
    image: "https://sanpec-excellence.com/wp-content/uploads/2025/01/Rectangle-3-copy-9.png",
    content: [
      {
        subtitle: "Adaptation and Flexibility in Operations:",
        text: "We demonstrate flexibility and responsiveness to navigate evolving industry demands, challenges, and opportunities."
      },
      {
        subtitle: "Rapid Response to Crisis and Change:",
        text: "At SANPEC, agility means the ability to quickly adapt to changing market conditions and customer needs. This agility is achieved through flexible operational processes and an adaptable organizational structure."
      },
      {
        subtitle: "Innovative Problem-Solving:",
        text: "Employees are encouraged to think creatively and act quickly, fostering a culture where innovative problem-solving is the norm."
      },
      {
        subtitle: "Scalable Solutions:",
        text: "Our operational processes are designed to be scalable, enabling SANPEC to efficiently manage fluctuations in demand or shifts in market dynamics."
      }
    ],
    link: "/sanpec-six-pillars/#agility"
  },
  {
    tabTitle: "New Innovation",
    contentTitle: "New Solutions and Innovation Management",
    image: "https://sanpec-excellence.com/wp-content/uploads/2025/01/Rectangle-3-copy-10.png",
    content: [
      {
        subtitle: "Cutting-Edge Research and Development:",
        text: "SANPEC is committed to staying at the forefront of technological advancements. The company invests significantly in R&D, developing new solutions that address current and future industry challenges."
      },
      {
        text: "We continuously improve develop innovative solutions to redefine the future of energy landscape."
      },
      {
        subtitle: "Collaboration with Innovators:",
        text: "Partnerships with leading innovators and academic institutions are key to SANPEC's strategy, ensuring access to the latest technologies and thought leadership."
      },
      {
        subtitle: "Innovation Management:",
        text: "Emphasis is placed on developing solutions that are aligned with ISO-Innovation management practices."
      }
    ],
    link: "/sanpec-six-pillars/#e-n-tab-title-843412763"
  },
  {
    tabTitle: "Process Excellence",
    contentTitle: "Process Excellence",
    image: "https://sanpec-excellence.com/wp-content/uploads/2025/01/Rectangle-3-copy-11.png",
    content: [
      {
        subtitle: "Continuous Improvement in Business Processes:",
        text: "We streamline and optimize workflows to achieve precision, operational efficiency, and superior outcomes."
      },
      {
        subtitle: "Lean and Efficient Operations:",
        text: "SANPEC employs lean management principles to streamline operations, eliminate waste, and increase efficiency."
      },
      {
        subtitle: "Sustainability Strategy:",
        text: "Optimizing operations with sustainability in mind reduces waste, lower costs, enhances efficiency, and making environmental responsibility a driver of long-term profitability."
      },
      {
        subtitle: "Quality Management Systems:",
        text: "The company adheres to rigorous quality management systems, ensuring that every process, from production to delivery, meets the highest standards."
      },
      {
        subtitle: "Employee Empowerment:",
        text: "Employees are empowered to suggest improvements and innovations in processes, creating a culture of continuous improvement and excellence."
      }
    ],
    link: "/sanpec-six-pillars/#e-n-tab-title-843412764"
  },
  {
    tabTitle: "Ecosystem Innovation",
    contentTitle: "Innovation within the Business Ecosystem",
    image: "https://sanpec-excellence.com/wp-content/uploads/2025/01/Rectangle-3-copy-2-2-2.png",
    content: [
      {
        subtitle: "Innovation within the Business Ecosystem:",
        text: "We Build strong partnerships across sectors and stakeholders to foster impactful, collective solutions."
      },
      {
        subtitle: "Collaborative Ecosystem:",
        text: "SANPEC fosters a collaborative ecosystem comprising suppliers, partners, and customers. This ecosystem approach leads to shared Innovation and value creation."
      },
      {
        subtitle: "Open Innovation Model:",
        text: "The company embraces an open innovation model, where external ideas and technologies are integrated with entire value-chain to drive Innovation."
      },
      {
        subtitle: "Sustainable Supply Chain:",
        text: "SANPEC strives to ensure that its supply chain is efficient and sustainable, aligning with its commitment to ethical standards."
      }
    ],
    link: "/sanpec-six-pillars/#e-n-tab-title-843412765"
  },
  {
    tabTitle: "Collaboration & Co-Creation",
    contentTitle: "Collaborative Efforts for Shared Value",
    image: "https://sanpec-excellence.com/wp-content/uploads/2025/01/Rectangle-3-copy-3-4.png",
    content: [
      {
        subtitle: "Collaborative Efforts for Shared Value:",
        text: "SANPEC's commitment to co-creation goes beyond business interests, reflecting a deep sense of responsibility and a desire to contribute positively to society."
      },
      {
        subtitle: "Community Engagement:",
        text: "SANPEC actively engages with the communities in which it operates, understanding their needs and working collaboratively to address them."
      },
      {
        subtitle: "Co-Creation with Stakeholders:",
        text: "The company believes in co-creating value with stakeholders, including customers, local education institutions, sports organizations, and industry partners. This approach leads to solutions that are more aligned with stakeholders' needs and expectations."
      }
    ],
    link: "/sanpec-six-pillars/#e-n-tab-title-843412766"
  }
];

export default function InteractivePieWheel() {
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Colors - Only 2 colors as requested
  const primaryColor = "#101631";
  const secondaryColor = "#CD091B";

  const totalSlices = sections.length;
  const anglePerSlice = 360 / totalSlices;

  const polarToCartesian = (cx, cy, r, angle) => {
    const rad = (angle - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const createSlicePath = (i) => {
    const start = i * anglePerSlice;
    const end = start + anglePerSlice;
    const s = polarToCartesian(250, 250, 250, end);
    const e = polarToCartesian(250, 250, 250, start);
    return `M250 250 L${s.x} ${s.y} A250 250 0 0 0 ${e.x} ${e.y} Z`;
  };

  const selectSlice = (i) => {
    if (isAnimating || i === currentActiveIndex) return;
    
    setIsAnimating(true);
    setCurrentActiveIndex(i);
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  const nextSlice = () => {
    selectSlice((currentActiveIndex + 1) % totalSlices);
  };

  const previousSlice = () => {
    selectSlice((currentActiveIndex - 1 + totalSlices) % totalSlices);
  };

  const rotation = 90 - (currentActiveIndex * anglePerSlice + anglePerSlice / 2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background SVG Elements - Power Structure Related */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Transmission Tower 1 */}
        <svg className="absolute top-10 left-20 w-40 h-40" viewBox="0 0 100 100">
          <path d="M50 10 L55 40 L45 40 Z" fill={primaryColor} />
          <rect x="48" y="40" width="4" height="50" fill={primaryColor} />
          <path d="M30 90 L70 90 L65 80 L35 80 Z" fill={primaryColor} />
          <line x1="40" y1="60" x2="60" y2="60" stroke={primaryColor} strokeWidth="1" />
          <line x1="45" y1="70" x2="55" y2="70" stroke={primaryColor} strokeWidth="1" />
        </svg>
        
        {/* Transmission Tower 2 */}
        <svg className="absolute bottom-32 right-32 w-32 h-32" viewBox="0 0 100 100">
          <path d="M50 15 L60 45 L40 45 Z" fill={secondaryColor} />
          <rect x="48" y="45" width="4" height="45" fill={secondaryColor} />
          <path d="M35 90 L65 90 L60 80 L40 80 Z" fill={secondaryColor} />
          <line x1="42" y1="60" x2="58" y2="60" stroke={secondaryColor} strokeWidth="1" />
          <line x1="45" y1="70" x2="55" y2="70" stroke={secondaryColor} strokeWidth="1" />
        </svg>
        
        {/* Electrical Circuit */}
        <svg className="absolute top-1/3 left-1/4 w-48 h-48" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" rx="10" fill="none" stroke={primaryColor} strokeWidth="2" strokeDasharray="5,5" />
          <circle cx="35" cy="35" r="8" fill="none" stroke={primaryColor} strokeWidth="2" />
          <circle cx="65" cy="65" r="8" fill="none" stroke={primaryColor} strokeWidth="2" />
          <path d="M35 35 L45 45 L55 35 L65 45" stroke={secondaryColor} strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="3" fill={secondaryColor} />
        </svg>
        
        {/* Power Lines */}
        <svg className="absolute bottom-20 left-1/3 w-64 h-24" viewBox="0 0 200 40">
          <line x1="10" y1="20" x2="190" y2="20" stroke={primaryColor} strokeWidth="2" strokeDasharray="10,5" />
          <circle cx="40" cy="20" r="4" fill={secondaryColor} />
          <circle cx="80" cy="20" r="4" fill={secondaryColor} />
          <circle cx="120" cy="20" r="4" fill={secondaryColor} />
          <circle cx="160" cy="20" r="4" fill={secondaryColor} />
        </svg>
        
        {/* Bolt Icons */}
        <svg className="absolute top-44 right-44 w-20 h-20" viewBox="0 0 100 100">
          <path d="M60 10 L40 50 L55 50 L35 90 L65 50 L50 50 Z" fill={secondaryColor} opacity="0.6" />
        </svg>
        
        <svg className="absolute bottom-44 left-44 w-16 h-16" viewBox="0 0 100 100">
          <path d="M55 15 L40 40 L50 40 L35 75 L60 40 L50 40 Z" fill={primaryColor} opacity="0.6" />
        </svg>
        
        {/* Gear Icon */}
        <svg className="absolute top-1/4 right-1/4 w-28 h-28" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="none" stroke={primaryColor} strokeWidth="3" />
          <circle cx="50" cy="50" r="10" fill="none" stroke={primaryColor} strokeWidth="3" />
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * Math.PI / 180;
            const x1 = 50 + 30 * Math.cos(angle);
            const y1 = 50 + 30 * Math.sin(angle);
            const x2 = 50 + 20 * Math.cos(angle);
            const y2 = 50 + 20 * Math.sin(angle);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={primaryColor} strokeWidth="3" />
            );
          })}
        </svg>
      </div>

      {/* Main Container with 70px padding on left and right */}
      <div className="px-[70px] py-12 max-w-[1800px] mx-auto relative z-10">
        
        {/* Attractive Section Title */}
        <div className="text-center mb-16 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full flex justify-center">
            <div className="flex items-center gap-3">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: secondaryColor }}></div>
              <div className="w-20 h-1 bg-gradient-to-l from-transparent via-gray-300 to-transparent rounded-full"></div>
            </div>
          </div>
          
          {/* Main Title */}
          <div className="relative inline-block mt-10 mb-6">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-secondaryColor/10 to-primaryColor/10 blur-xl rounded-2xl"></div>
            
            <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight">
              <span style={{ color: primaryColor }}>SANPEC'S</span>{' '}
              <span style={{ color: secondaryColor }}>SIX PILLARS</span>
            </h1>
            
            <h2 className="relative text-3xl md:text-4xl font-bold mb-6" style={{ color: primaryColor }}>
              OF EXCELLENCE
            </h2>
            
            {/* Title Decorative Line */}
            <div className="relative h-1.5 w-48 mx-auto rounded-full overflow-hidden">
              <div className="absolute inset-0" style={{ 
                background: `linear-gradient(90deg, ${primaryColor}30, ${secondaryColor}, ${primaryColor}30)` 
              }}></div>
            </div>
          </div>
          
          {/* Description */}
          <div className="max-w-4xl mx-auto mt-10">
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-6 rotate-45 bg-white border-t border-l border-gray-200"></div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" 
                       style={{ backgroundColor: secondaryColor }}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2" style={{ color: secondaryColor }}>
                    Powering the Future
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Unwavering commitment to excellence, resilience, and sustainability. SANPEC has set new benchmarks and led the power transmission industry forward in these critical areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left - Pie Wheel with Outer Layer */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-[600px] h-[600px]">
              {/* Outer Static Layer with Text - DOES NOT ROTATE */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[580px] h-[580px] rounded-full border-2 flex items-center justify-center"
                     style={{ borderColor: `${primaryColor}30` }}>
                  {/* Top Text */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
                    <div className="px-6 py-3 rounded-full bg-white shadow-lg border border-gray-200">
                      <span className="font-bold text-lg tracking-wide whitespace-nowrap" style={{ color: primaryColor }}>
                        Bringing Engineering Excellence
                      </span>
                    </div>
                  </div>
                  
                  {/* Bottom Text */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6">
                    <div className="px-6 py-3 rounded-full bg-white shadow-lg border border-gray-200">
                      <span className="font-bold text-lg tracking-wide whitespace-nowrap" style={{ color: primaryColor }}>
                        Improving Power Grid Reliability
                      </span>
                    </div>
                  </div>
                  
                  {/* Middle Ring */}
                  <div className="w-[520px] h-[520px] rounded-full border" style={{ 
                    borderColor: `${primaryColor}20`,
                  }}></div>
                </div>
              </div>
              
              {/* Original Pie Wheel - Rotating Part - EXACTLY AS BEFORE */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-[500px] h-[500px]">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-8" style={{ 
                    borderColor: `${primaryColor}20`,
                    boxShadow: `0 0 40px ${secondaryColor}10`
                  }}></div>
                  
                  {/* Pie Wheel */}
                  <div 
                    className="w-full h-full rounded-full overflow-hidden transition-transform duration-700 ease-out"
                    style={{ 
                      transform: `rotate(${rotation}deg)`,
                      boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                    }}
                  >
                    <svg viewBox="0 0 500 500" className="w-full h-full">
                      {sections.map((_, i) => (
                        <path
                          key={i}
                          d={createSlicePath(i)}
                          fill={i === currentActiveIndex ? secondaryColor : '#ffffff'}
                          stroke={i === currentActiveIndex ? secondaryColor : '#e5e7eb'}
                          strokeWidth="2"
                          className="cursor-pointer transition-all duration-300 hover:opacity-90"
                          onClick={() => selectSlice(i)}
                        />
                      ))}
                    </svg>
                    
                    {/* Labels - Fixed Position (not rotating) */}
                   <div className="absolute inset-0 pointer-events-none">
  {sections.map((sec, i) => {
    const angle = i * anglePerSlice + anglePerSlice / 2;
    const r = 180;

    const x = 250 + r * Math.cos((angle - 90) * Math.PI / 180);
    const y = 250 + r * Math.sin((angle - 90) * Math.PI / 180);

    return (
      <div
        key={i}
        className="absolute text-center"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: `
            translate(-50%, -50%)
            rotate(${-rotation}deg)
          `,
          transformOrigin: 'center',
        }}
      >
        <div
          className={`
            px-4 py-2 rounded-lg transition-all duration-300
            ${i === currentActiveIndex
              ? 'bg-secondaryColor text-white'
              : 'text-gray-800'
            }
          `}
        >
          <span className="font-bold text-sm tracking-wide leading-snug line-clamp-2" style={{ maxWidth: '130px' }}>
            {sec.tabTitle}
          </span>
        </div>
      </div>
    );
  })}
</div>

                  </div>
                  
                  {/* Center Controls - EXACTLY AS BEFORE */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
                    <div className="w-full h-full rounded-full bg-white border-4 shadow-2xl flex flex-col items-center justify-center"
                         style={{ borderColor: primaryColor }}>
                      <div className="text-center mb-3">
                        <div className="text-sm font-bold uppercase tracking-widest" style={{ color: primaryColor }}>
                          SANPEC EXCELLENCE
                        </div>
                        
                      </div>
                      
                      <div className="flex gap-3">
                        <button
                          onClick={previousSlice}
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                          style={{ backgroundColor: primaryColor }}
                          aria-label="Previous"
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={nextSlice}
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                          style={{ backgroundColor: secondaryColor }}
                          aria-label="Next"
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content Panel - EXACTLY AS BEFORE */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden h-[600px]">
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section - Full Height */}
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                  <img
                    src={sections[currentActiveIndex].image}
                    alt={sections[currentActiveIndex].contentTitle}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                  
                  </div>
                </div>
                
                {/* Content Section - Scrollable */}
                <div className="md:w-3/5 p-8 overflow-y-auto">
                  {/* Title */}
                  <div className="mb-6 pb-4 border-b" style={{ borderColor: `${primaryColor}20` }}>
                    <div className="flex items-center gap-3 mb-2">
                    
                      <h2 className="text-2xl md:text-3xl font-bold" style={{ color: primaryColor }}>
                        {sections[currentActiveIndex].contentTitle}
                      </h2>
                    </div>
                    <div className="w-24 h-1.5 rounded-full" style={{ backgroundColor: secondaryColor }}></div>
                  </div>
                  
                  {/* Content - All text properly displayed */}
                  <div className="space-y-5 mb-8 pr-2">
                    {sections[currentActiveIndex].content.map((item, idx) => (
                      <div key={idx} className="group hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                        {item.subtitle && (
                          <h3 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: primaryColor }}>
                            <div className="w-2 h-2 rounded-full bg-secondaryColor opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            {item.subtitle}
                          </h3>
                        )}
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <a 
                    href={sections[currentActiveIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:gap-4 hover:shadow-lg group"
                    style={{ 
                      backgroundColor: secondaryColor,
                      color: 'white'
                    }}
                  >
                    <span>Read More</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Navigation Tabs - EXACTLY AS BEFORE */}
        <div className="mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => selectSlice(index)}
                className={`
                  relative p-5 rounded-xl transition-all duration-300 overflow-hidden group
                  ${index === currentActiveIndex ? 'scale-105 shadow-xl' : 'shadow-lg hover:scale-105'}
                `}
                style={{
                  backgroundColor: index === currentActiveIndex ? secondaryColor : 'white',
                  color: index === currentActiveIndex ? 'white' : primaryColor,
                  border: `2px solid ${index === currentActiveIndex ? secondaryColor : '#e5e7eb'}`,
                }}
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primaryColor/5 to-secondaryColor/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-3">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                      ${index === currentActiveIndex 
                        ? 'bg-white/20' 
                        : 'bg-gray-100 group-hover:bg-secondaryColor/10'
                      }
                    `}>
                      <svg className={`
                        w-5 h-5 transition-colors duration-300
                        ${index === currentActiveIndex ? 'text-white' : 'text-gray-500 group-hover:text-secondaryColor'}
                      `} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="font-bold text-sm md:text-base leading-tight">
                    {section.tabTitle}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        /* Smooth scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #CD091B;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #101631;
        }
        
        /* Ensure content doesn't overflow */
        .content-scroll {
          max-height: 400px;
        }
      `}</style>
    </div>
  );
}