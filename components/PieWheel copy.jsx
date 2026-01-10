'use client';

import { useState } from 'react';

const sections = [
  {
    tabTitle: "Systems Approach",
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
    tabTitle: "Innovation",
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
    tabTitle: "Process",
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
    tabTitle: "Ecosystem",
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
    tabTitle: "Co-Creation",
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
    setCurrentActiveIndex(i);
  };

  const nextSlice = () => {
    setCurrentActiveIndex((prev) => (prev + 1) % totalSlices);
  };

  const previousSlice = () => {
    setCurrentActiveIndex((prev) => (prev - 1 + totalSlices) % totalSlices);
  };

  const rotation = 180 - (currentActiveIndex * anglePerSlice + anglePerSlice / 2);

  return (
    <div className="font-sans min-h-screen relative overflow-hidden">
      {/* Background with Power Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-100 to-gray-200 z-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200, 200, 200, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200, 200, 200, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Transmission Tower - Left */}
        <svg className="absolute top-[150px] left-[30px] w-[180px] h-[280px] opacity-[0.05]" viewBox="0 0 100 180">
          <path d="M50 5 L35 30 L25 30 L30 50 L20 50 L40 170 L43 170 L43 120 L57 120 L57 170 L60 170 L80 50 L70 50 L75 30 L65 30 Z" fill="#2c3e50" />
          <line x1="25" y1="30" x2="75" y2="30" stroke="#cd091b" strokeWidth="1.5" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="#cd091b" strokeWidth="1.5" />
          <line x1="30" y1="80" x2="70" y2="80" stroke="#cd091b" strokeWidth="1.5" />
          <line x1="35" y1="30" x2="65" y2="30" stroke="#1a476d" strokeWidth="2" />
          <line x1="30" y1="50" x2="70" y2="50" stroke="#1a476d" strokeWidth="2" />
        </svg>

        {/* Utility Pole - Top Right */}
        <svg className="absolute top-[100px] right-[50px] w-[120px] h-[220px] opacity-[0.06]" viewBox="0 0 80 140">
          <rect x="36" y="20" width="8" height="120" fill="#8B4513" rx="1" />
          <rect x="10" y="35" width="60" height="4" fill="#654321" rx="1" />
          <rect x="15" y="55" width="50" height="4" fill="#654321" rx="1" />
          <circle cx="15" cy="37" r="3" fill="#003f87" />
          <circle cx="40" cy="37" r="3" fill="#003f87" />
          <circle cx="65" cy="37" r="3" fill="#003f87" />
          <line x1="15" y1="40" x2="15" y2="140" stroke="#cd091b" strokeWidth="1" />
          <line x1="40" y1="40" x2="40" y2="140" stroke="#cd091b" strokeWidth="1" />
          <line x1="65" y1="40" x2="65" y2="140" stroke="#cd091b" strokeWidth="1" />
        </svg>

        {/* Transmission Tower - Bottom Left */}
        <svg className="absolute bottom-[80px] left-[80px] w-[140px] h-[200px] opacity-[0.05]" viewBox="0 0 100 150">
          <path d="M50 5 L40 25 L32 25 L45 140 L55 140 L68 25 L60 25 Z" fill="#2c3e50" />
          <line x1="32" y1="25" x2="68" y2="25" stroke="#cd091b" strokeWidth="1.5" />
          <line x1="35" y1="45" x2="65" y2="45" stroke="#cd091b" strokeWidth="1.5" />
          <line x1="38" y1="70" x2="62" y2="70" stroke="#cd091b" strokeWidth="1.5" />
        </svg>

        {/* Power Lines */}
        <svg className="absolute top-[200px] left-0 w-full h-[3px] opacity-[0.08]">
          <line x1="0" y1="1" x2="100%" y2="1.5" stroke="#cd091b" strokeWidth="2" strokeDasharray="15,8" />
        </svg>
        
        <svg className="absolute bottom-[250px] left-0 w-full h-[3px] opacity-[0.08]">
          <line x1="0" y1="1.5" x2="100%" y2="1" stroke="#cd091b" strokeWidth="2" strokeDasharray="15,8" />
        </svg>

        {/* Small Poles - Right */}
        <svg className="absolute bottom-[120px] right-[100px] w-[100px] h-[160px] opacity-[0.06]" viewBox="0 0 60 100">
          <rect x="27" y="10" width="6" height="90" fill="#8B4513" rx="1" />
          <rect x="8" y="25" width="44" height="3" fill="#654321" rx="1" />
          <line x1="10" y1="28" x2="10" y2="100" stroke="#cd091b" strokeWidth="0.8" />
          <line x1="30" y1="28" x2="30" y2="100" stroke="#cd091b" strokeWidth="0.8" />
          <line x1="50" y1="28" x2="50" y2="100" stroke="#cd091b" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 py-[60px] px-5">
        
        {/* Header Section */}
        <div className="text-center mb-20 relative p-[50px_20px] bg-gradient-to-b from-white/90 to-gray-100/80 border-t-[5px] border-t-[#003f87] border-b-[5px] border-b-[#cd091b] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          {/* Decorative Red Stripes - Top */}
          <div 
            className="absolute top-0 left-0 right-0 h-10 opacity-15"
            style={{
              background: 'repeating-linear-gradient(0deg, #cd091b 0px, #cd091b 5px, transparent 5px, transparent 10px)'
            }}
          />

          {/* Star Pattern */}
          <div className="absolute top-5 left-10 w-[120px] h-20 bg-[#003f87] opacity-[0.08]">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px'
              }}
            />
          </div>

          {/* Electric Border Top */}
          <div 
            className="w-4/5 max-w-[800px] h-1 mx-auto mb-[30px] rounded-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #cd091b 20%, #003f87 50%, #cd091b 80%, transparent)',
              boxShadow: '0 0 15px rgba(205, 9, 27, 0.3)'
            }}
          />

          {/* Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] font-black text-black/[0.02] tracking-[20px] pointer-events-none whitespace-nowrap">
            POWER
          </div>

          {/* Power Icon */}
          <div className="inline-flex items-center justify-center w-[90px] h-[90px] bg-gradient-to-br from-[#cd091b] to-[#003f87] rounded-full mb-[25px] shadow-[0_8px_30px_rgba(205,9,27,0.4),inset_0_2px_10px_rgba(255,255,255,0.2)] border-4 border-white relative">
            <div className="absolute inset-[8px] border-2 border-white/30 rounded-full" />
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
            </svg>
          </div>

          {/* Main Title */}
          <h1 className="text-[56px] font-black text-[#003f87] m-0 mb-[10px] tracking-[4px] uppercase leading-[1.2]"
              style={{ textShadow: '2px 2px 0px rgba(205, 9, 27, 0.1), -1px -1px 0px rgba(255, 255, 255, 0.5)' }}>
            SANPEC'S <span className="text-[#cd091b]">SIX PILLARS</span><br />
            <span 
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(90deg, #003f87 0%, #cd091b 50%, #003f87 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              OF EXCELLENCE
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-[15px] my-5 mx-auto">
            <div className="w-[60px] h-[3px] bg-[#cd091b] rounded-[2px]" />
            <div className="w-2 h-2 bg-[#003f87] rounded-full shadow-[0_0_10px_rgba(0,63,135,0.5)]" />
            <div className="w-[120px] h-[3px] bg-[#003f87] rounded-[2px]" />
            <div className="w-2 h-2 bg-[#cd091b] rounded-full shadow-[0_0_10px_rgba(205,9,27,0.5)]" />
            <div className="w-[60px] h-[3px] bg-[#cd091b] rounded-[2px]" />
          </div>

          {/* Subtitle Box */}
          <div className="max-w-[1000px] mx-auto p-[30px_45px] bg-white border-[3px] border-[#003f87] rounded-[15px] shadow-[0_8px_32px_rgba(0,63,135,0.15),inset_0_2px_0_rgba(255,255,255,0.8)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#cd091b] to-transparent opacity-15" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#cd091b] to-transparent opacity-15" />
            
            <p className="text-lg text-[#2c3e50] m-0 leading-[1.8] font-normal relative z-10">
              <span className="text-[#cd091b] font-bold text-xl inline-block mr-2">
                ⚡ Powering the Future
              </span>
              — Unwavering commitment to excellence, resilience, and sustainability. SANPEC has set new benchmarks and led the power transmission industry forward in these critical areas.
            </p>
          </div>

          {/* Electric Border Bottom */}
          <div 
            className="w-4/5 max-w-[800px] h-1 mx-auto mt-[30px] rounded-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #003f87 20%, #cd091b 50%, #003f87 80%, transparent)',
              boxShadow: '0 0 15px rgba(0, 63, 135, 0.3)'
            }}
          />

          {/* Decorative Red Stripes - Bottom */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-10 opacity-15"
            style={{
              background: 'repeating-linear-gradient(0deg, #cd091b 0px, #cd091b 5px, transparent 5px, transparent 10px)'
            }}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex gap-[60px] max-w-[1500px] mx-auto items-start flex-wrap justify-center">
          
          {/* Wheel Container */}
          <div className="relative w-[550px] h-[550px] min-w-[550px]" style={{ filter: 'drop-shadow(0 0 30px rgba(205, 9, 27, 0.3))' }}>
            <div 
              className="w-full h-full rounded-full bg-gradient-to-br from-white to-gray-100 border-[6px] border-[#cd091b] overflow-hidden transition-transform duration-[600ms] ease-in-out"
              style={{
                boxShadow: '0 0 0 4px #1a476d, 0 0 60px rgba(205, 9, 27, 0.4), inset 0 0 30px rgba(205, 9, 27, 0.05)',
                transform: `rotate(${rotation}deg)`
              }}
            >
              <svg viewBox="0 0 500 500" className="w-full h-full -rotate-90">
                {sections.map((sec, i) => (
                  <path
                    key={i}
                    d={createSlicePath(i)}
                    fill={i === currentActiveIndex ? '#cd091b' : '#f8f9fa'}
                    stroke="#1a476d"
                    strokeWidth="3"
                    className="cursor-pointer transition-all duration-300"
                    style={{ filter: i === currentActiveIndex ? 'drop-shadow(0 0 8px rgba(205, 9, 27, 0.6))' : 'none' }}
                    onClick={() => selectSlice(i)}
                  />
                ))}
              </svg>

              {/* Labels */}
              <div 
                className="absolute inset-0 pointer-events-none transition-transform duration-[600ms] ease-in-out"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                {sections.map((sec, i) => {
                  const angle = i * anglePerSlice + anglePerSlice / 2;
                  const r = 180;
                  const left = 250 + r * Math.cos((angle - 90) * Math.PI / 180);
                  const top = 250 + r * Math.sin((angle - 90) * Math.PI / 180);

                  return (
                    <div
                      key={i}
                      className="absolute w-[130px] text-center font-extrabold text-[15px]"
                      style={{
                        color: i === currentActiveIndex ? '#fff' : '#1a476d',
                        left: `${left}px`,
                        top: `${top}px`,
                        transform: `translate(-50%, -50%) rotate(${angle + 270}deg)`,
                        transformOrigin: 'center',
                        textShadow: i === currentActiveIndex ? '0 2px 8px rgba(0,0,0,0.3)' : 'none'
                      }}
                    >
                      {sec.tabTitle}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Center Circle */}
            <div className="absolute w-[200px] h-[200px] bg-gradient-to-br from-white to-gray-50 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-[5] border-4 border-[#1a476d] shadow-[0_0_40px_rgba(205,9,27,0.3),inset_0_0_20px_rgba(205,9,27,0.05)]">
              <div className="font-bold text-lg text-[#cd091b] text-center tracking-[1.5px]" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                DISCOVER<br />MORE
              </div>
              <div className="flex gap-[15px] mt-[15px]">
                <div
                  onClick={previousSlice}
                  className="w-10 h-10 border-[3px] border-[#cd091b] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 text-[22px] font-bold text-[#cd091b] shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-[#cd091b] hover:text-white hover:scale-110"
                >
                  ‹
                </div>
                <div
                  onClick={nextSlice}
                  className="w-10 h-10 border-[3px] border-[#cd091b] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 text-[22px] font-bold text-[#cd091b] shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-[#cd091b] hover:text-white hover:scale-110"
                >
                  ›
                </div>
              </div>
            </div>
          </div>

          {/* Content Panel - 2 Column Layout */}
          <div className="flex-1 min-w-[400px] max-w-[750px]">
            <div className="bg-white/98 rounded-[20px] p-0 shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_1px_1px_rgba(205,9,27,0.2)] border-2 border-[#cd091b]/20 overflow-hidden">
              <div className="grid grid-cols-[280px_1fr] gap-0 min-h-[500px]">
                {/* Left Column - Image */}
                <div className="bg-gradient-to-br from-[#1a476d] to-[#0a1128] p-[30px] flex items-center justify-center relative border-r-[3px] border-r-[#cd091b]">
                  <div className="absolute top-5 right-5 w-[50px] h-[50px] border-[3px] border-[#cd091b]/50 border-l-0 border-b-0 rounded-tr-lg" />
                  
                  <img
                    src={sections[currentActiveIndex].image}
                    alt={sections[currentActiveIndex].contentTitle}
                    className="rounded-xl w-full h-auto shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-2 border-white/10"
                  />
                </div>

                {/* Right Column - Content */}
                <div className="p-[35px_40px] overflow-y-auto max-h-[600px]">
                  {/* Title */}
                  <div className="mb-[25px] pb-5 border-b-2 border-[#cd091b]/20">
                    <h2 className="text-[28px] font-bold text-[#1a476d] mb-2 leading-[1.3]">
                      {sections[currentActiveIndex].contentTitle}
                    </h2>
                    <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#cd091b] to-transparent rounded-[2px]" />
                  </div>
                  
                  {/* Content Text */}
                  <div className="text-[14.5px] text-[#444] leading-[1.8] mb-[30px]">
                    {sections[currentActiveIndex].content.map((item, idx) => (
                      <p key={idx} className="mb-[14px]">
                        {item.subtitle && (
                          <strong className="text-[#1a476d] block mb-1">
                            {item.subtitle}
                          </strong>
                        )}
                        {item.text}
                      </p>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <a 
                    href={sections[currentActiveIndex].link}
                    className="inline-flex items-center gap-[10px] px-8 py-[14px] bg-gradient-to-br from-[#cd091b] to-[#a00716] text-white no-underline rounded-[10px] font-bold text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(205,9,27,0.4)] border-2 border-transparent hover:bg-gradient-to-br hover:from-[#a00716] hover:to-[#cd091b] hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(205,9,27,0.5)] hover:border-[#1a476d]"
                  >
                    READ MORE
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}