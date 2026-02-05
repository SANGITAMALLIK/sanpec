import { useState, useEffect } from 'react';
import Link from 'next/link';

const sections = [
  {
    tabTitle: "Systems & Approach",
    contentTitle: "Systems Approach and Foresight",
    image: "images/home/six-pillars/1.png",
    position: { top: '10%', left: '50%', transform: 'translateX(-50%)' },
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
    link: "/sanpec-six-pillars/systems-and-structures"
  },
  {
    tabTitle: "Agility",
    contentTitle: "Agility and Strategic Planning",
    image: "images/home/six-pillars/2.png",
    position: { top: '25%', left: '30%', transform: 'translateX(-50%)' },
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
    link: "/sanpec-six-pillars/agility"
  },
  {
    tabTitle: "New Innovation",
    contentTitle: "New Solutions and Innovation Management",
    image: "images/home/six-pillars/3.png",
    position: { top: '40%', right: '15%' },
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
    link: "/sanpec-six-pillars/new-innovation"
  },
  {
    tabTitle: "Process Excellence",
    contentTitle: "Process Excellence",
    image: "images/home/six-pillars/4.png",
    position: { top: '55%', right: '35%' },
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
    link: "/sanpec-six-pillars/process-excellence"
  },
  {
    tabTitle: "Ecosystem Innovation",
    contentTitle: "Innovation within the Business Ecosystem",
    image: "images/home/six-pillars/5.png",
    position: { top: '70%', left: '8%' },
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
    link: "/sanpec-six-pillars/ecosystem-innovation"
  },
  {
    tabTitle: "Collaboration & Co-Creation",
    contentTitle: "Collaborative Efforts for Shared Value",
    image: "images/home/six-pillars/6.png",
    position: { top: '85%', left: '50%', transform: 'translateX(-50%)' },
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
    link: "/sanpec-six-pillars/collaboration-&-co-creation"
  }
];

export default function InteractivePieWheel() {
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const primaryColor = "#101631";
  const secondaryColor = "#CD091B";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const selectSlice = (i) => {
    if (isAnimating || i === currentActiveIndex) return;
    setIsAnimating(true);
    setCurrentActiveIndex(i);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const currentSection = sections[currentActiveIndex] || sections[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 12px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #CD091B;
          border-radius: 10px;
          min-height: 50px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a00716;
        }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #CD091B #f1f1f1;
        }

        .pillar-button {
          transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .content-card {
          animation: slideIn 0.6s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .content-item {
          transition: all 0.3s ease;
        }

        .content-item:hover {
          transform: translateX(10px);
          background: linear-gradient(90deg, #f9fafb 0%, #f3f4f6 100%);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .scrollable-content {
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          position: relative;
          z-index: 1;
        }
        
        .scrollable-content:hover {
          overflow-y: scroll;
        }
      `}</style>

      {!isMobile && (
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        </div>
      )}

      <div className="text-center py-8 lg:py-12 relative px-4 fade-in-up">
        {!isMobile && (
           <div className="max-w-[1600px] mx-auto mb-8 md:mb-12">
        <div className="flex items-center justify-center gap-3">
          <div className="h-[2px] w-20 sm:w-32 md:w-48 bg-gradient-to-r from-transparent to-[#CD091B]"></div>
          <div className="relative">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#CD091B]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
            </svg>
          </div>
          <div className="h-[2px] w-20 sm:w-32 md:w-48 bg-gradient-to-l from-transparent to-[#CD091B]"></div>
        </div>
      </div>
        )}
        
        <div className="relative inline-block mt-0 lg:mt-0 mb-4 lg:mb-6">
          <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-2 lg:mb-4 tracking-tight">
            <span style={{ color: primaryColor }} className="inline-block hover:scale-105 transition-transform duration-300">SANPEC'S</span>{' '}
            <span style={{ color: secondaryColor }} className="inline-block hover:scale-105 transition-transform duration-300">SIX PILLARS</span>
          </h1>
          
          <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6" style={{ color: primaryColor }}>
            OF EXCELLENCE
          </h2>
          
          <div className="relative h-1 w-32 lg:w-48 mx-auto rounded-full overflow-hidden">
            <div className="absolute inset-0" style={{ 
              background: `linear-gradient(90deg, ${primaryColor}30, ${secondaryColor}, ${primaryColor}30)` 
            }}></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:gap-0 relative" style={{ zIndex: 1 }}>
        <div className="w-full lg:w-1/2 relative lg:pr-0">
          <img 
            src="images/home/six-pillars/left_tower.png"
            alt="Six Pillars Tower"
            className="w-full h-auto block"
          />
          
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => selectSlice(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="pillar-button absolute px-3 py-2 rounded-lg font-bold text-xs lg:text-sm whitespace-nowrap"
              style={{
                ...section.position,
                backgroundColor: currentActiveIndex === index ? secondaryColor : hoveredIndex === index ? '#f8f9fa' : 'white',
                color: currentActiveIndex === index ? 'white' : primaryColor,
                border: `2px solid ${currentActiveIndex === index ? secondaryColor : hoveredIndex === index ? secondaryColor : primaryColor}`,
                boxShadow: hoveredIndex === index && currentActiveIndex !== index 
                  ? '0 10px 30px rgba(205, 9, 27, 0.3)' 
                  : currentActiveIndex === index 
                  ? '0 15px 40px rgba(205, 9, 27, 0.4)' 
                  : '0 4px 6px rgba(0,0,0,0.1)',
                zIndex: 1
              }}
            >
              <span className="relative flex items-center gap-2">
                {currentActiveIndex === index && (
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'white' }}></span>
                )}
                {section.tabTitle}
                {hoveredIndex === index && currentActiveIndex !== index && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </span>
            </button>
          ))}
        </div>

        <div className="w-full lg:w-1/2 px-4 lg:px-0 lg:pr-[70px] lg:-ml-1 mt-0 lg:mt-0">
          <div className="content-card bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl border border-gray-200 h-auto lg:h-[600px] hover:shadow-2xl transition-shadow duration-500 overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Mobile: Image left, Title right, Content below */}
              <div className="md:hidden w-full">
                {/* Top section: Image and Title side by side */}
                <div className="flex gap-3 p-4 border-b" style={{ borderColor: `${primaryColor}20` }}>
                  {/* Image on left */}
                  <div className="w-32 h-32 flex-shrink-0 bg-white rounded-lg overflow-hidden">
                    <img
                      src={currentSection.image}
                      alt={currentSection.contentTitle}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9";
                      }}
                    />
                  </div>
                  
                  {/* Title on right */}
                  <div className="flex-1 flex items-center">
                    <h2 className="text-lg font-bold leading-tight" style={{ color: primaryColor }}>
                      {currentSection.contentTitle}
                    </h2>
                  </div>
                </div>
                
                {/* Content below */}
                <div className="p-4">
                  <div className="space-y-3 mb-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                    {currentSection.content.map((item, idx) => (
                      <div key={idx} className="p-2">
                        {item.subtitle && (
                          <h3 className="font-bold text-base mb-1" style={{ color: primaryColor }}>
                            {item.subtitle}
                          </h3>
                        )}
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={currentSection.link}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold transition-all duration-300 text-sm w-full justify-center"
                    style={{ 
                      backgroundColor: secondaryColor,
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(205, 9, 27, 0.3)'
                    }}
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Desktop: Side by side layout */}
              <div className="hidden md:flex flex-row h-full">
                <div className="md:w-2/5 h-auto relative overflow-hidden">
                  <img
                    src={currentSection.image}
                    alt={currentSection.contentTitle}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="md:w-3/5 h-full relative">
                  <div className="scrollable-content custom-scrollbar h-full p-4 lg:p-8">
                    <div className="mb-4 lg:mb-6 pb-3 lg:pb-4 border-b relative" style={{ borderColor: `${primaryColor}20` }}>
                      <h2 className="text-2xl md:text-3xl font-bold relative" style={{ color: primaryColor }}>
                        {currentSection.contentTitle}
                      </h2>
                    </div>
                    
                    <div className="space-y-4 mb-6 pr-2">
                      {currentSection.content.map((item, idx) => (
                        <div key={idx} className="content-item group p-3 rounded-lg border border-transparent hover:border-gray-200 relative">
                          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: secondaryColor }}></div>
                          {item.subtitle && (
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: primaryColor }}>
                              <div className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse" style={{ backgroundColor: secondaryColor }}></div>
                              <span className="group-hover:translate-x-1 transition-transform duration-300">{item.subtitle}</span>
                            </h3>
                          )}
                          <p className="text-gray-700 leading-relaxed text-sm md:text-base pl-4">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      href={currentSection.link}
                      className="inline-flex items-center gap-3 px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl font-bold transition-all duration-300 hover:gap-5 hover:shadow-2xl group text-sm lg:text-base mb-4"
                      style={{ 
                        backgroundColor: secondaryColor,
                        color: 'white',
                        boxShadow: '0 4px 15px rgba(205, 9, 27, 0.3)'
                      }}
                    >
                      <span>Read More</span>
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-all duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
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