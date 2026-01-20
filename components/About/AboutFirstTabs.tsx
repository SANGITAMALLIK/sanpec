'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap } from 'lucide-react';

export default function SanpecTabs() {
  const [activeTab, setActiveTab] = useState('who-we-are');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tabsData = {
    'who-we-are': {
      title: 'WHO WE ARE',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/New-model-5.png',
      content: (
        <div>
          <div className="mb-10">
            <h2 className="text-5xl md:text-6xl font-black mb-3" style={{ color: '#101631', letterSpacing: '-0.02em' }}>
              WHO WE ARE
            </h2>
            <div className="w-24 h-1.5 bg-[#CD091B] rounded-full"></div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p className="relative pl-8 py-4 border-l-4 border-[#CD091B] bg-gray-50 rounded-r-lg">
              SANPEC is an innovation-driven, purpose-led company specializing in design, engineering, testing, inspection, quality, and complete lifecycle asset management services for the electric power and infrastructure industries.
            </p>
            <p>We discover, innovate, and disseminate best practices and new ideas that support evolution and create value for our stakeholders.</p>
            <p>Drawing strength from our distinctive roots in STEM research, we believe in learning by doing, learning from others, leading with integrity, and challenging our assumptions to seek new knowledge and create practical impact in service of our stakeholders and humanity.</p>
          </div>
        </div>
      )
    },
    'vision': {
      title: 'VISION',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture7.jpg',
      content: (
        <div>
          <div className="mb-10">
            <h2 className="text-5xl md:text-6xl font-black mb-3" style={{ color: '#101631', letterSpacing: '-0.02em' }}>
              VISION
            </h2>
            <div className="w-24 h-1.5 bg-[#CD091B] rounded-full"></div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p className="relative pl-8 py-4 border-l-4 border-[#CD091B] bg-gray-50 rounded-r-lg">
              To be the trusted and innovative leader in designing and building electric transmission and distribution (T&D) lines. We aim to revolutionize the U.S. energy sector by achieving excellence, driving innovation, enhancing resilience, and improving the quality of life for the American people.
            </p>
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#101631] shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="flex items-start gap-4">
                <Zap className="mt-1 flex-shrink-0" style={{ color: '#CD091B' }} size={24} />
                <span>Build a robust and reliable grid to power the American people.</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#CD091B] shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="flex items-start gap-4">
                <Zap className="mt-1 flex-shrink-0" style={{ color: '#101631' }} size={24} />
                <span>Enhance resilience to withstand disruptions and adapt to evolving demands.</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#101631] shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="flex items-start gap-4">
                <Zap className="mt-1 flex-shrink-0" style={{ color: '#CD091B' }} size={24} />
                <span>Drive innovation and champion responsible business practices for a cleaner future.</span>
              </p>
            </div>
          </div>
        </div>
      )
    },
    'mission': {
      title: 'MISSION',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-28-at-21.49.26-1024x512.jpg',
      content: (
        <div>
          <div className="mb-10">
            <h2 className="text-5xl md:text-6xl font-black mb-3" style={{ color: '#101631', letterSpacing: '-0.02em' }}>
              MISSION
            </h2>
            <div className="w-24 h-1.5 bg-[#CD091B] rounded-full"></div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p className="relative pl-8 py-4 border-l-4 border-[#CD091B] bg-gray-50 rounded-r-lg">
              We design, modernize, and manage electric power transmission and distribution grids with a strong commitment to innovation, excellence, and sustainability. At SANPEC, we aim to provide quality transmission and distribution (T&D) materials, innovative solutions, and exceptional services for a safe, robust, reliable, and resilient power grid.
            </p>
            <p>Our multidisciplinary, award-winning team utilizes expertise, wisdom, and entrepreneurial spirit to manage risks and create value that empowers individuals, enhances grid reliability, and strengthens the American economy.</p>
            <p>We have uniquely designed and implemented the process of the Future Today. As the inventors of the world's first ecosystem-focused business model, our founders have laid the foundation for a 21st-century value-creating business. Our award-winning engineers know the importance of process excellence and deliver solutions that create long-term, mid-term, and short-term value.</p>
          </div>
        </div>
      )
    },
    'values': {
      title: 'VALUES',
      image: null,
      content: (
        <div>
          <div className="mb-10">
            <h2 className="text-5xl md:text-6xl font-black mb-3" style={{ color: '#101631', letterSpacing: '-0.02em' }}>
              VALUES
            </h2>
            <div className="w-24 h-1.5 bg-[#CD091B] rounded-full"></div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#CD091B] shadow-md">
              <p><strong className="text-2xl block mb-3" style={{ color: '#CD091B' }}>Innovation and Resilience:</strong> We focus on enhancing innovation performance and building foresight capacity to manage uncertainty. This approach aims to increase the value realized in our products, services, and processes. We design and advocate for resilient power grids that withstand and adapt to changing conditions and unforeseen disruptions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#101631] shadow-md">
              <p><strong className="text-2xl block mb-3" style={{ color: '#101631' }}>Quality and Excellence:</strong> We are committed to upholding the highest quality standards in all our projects and services, ensuring structural integrity and customer-focused excellence.</p>
            </div>
            
            <div className="ml-8 space-y-4">
              <p className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <ChevronRight className="mt-1 flex-shrink-0" style={{ color: '#CD091B' }} size={22} strokeWidth={3} />
                <span>Continuous Improvement: We foster a culture of continuous improvement and sustained innovation to solve complex challenges in the energy sector.</span>
              </p>
              <p className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <ChevronRight className="mt-1 flex-shrink-0" style={{ color: '#101631' }} size={22} strokeWidth={3} />
                <span>High-performing teams: We focus on building high-performing teams and creating resilient energy systems.</span>
              </p>
              <p className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <ChevronRight className="mt-1 flex-shrink-0" style={{ color: '#CD091B' }} size={22} strokeWidth={3} />
                <span>Proven management framework: Our proven management systems, award-winning engineers, and leading foresight experts guide our strategic planning processes that drive impactful results.</span>
              </p>
              <p className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <ChevronRight className="mt-1 flex-shrink-0" style={{ color: '#101631' }} size={22} strokeWidth={3} />
                <span>Real-time, integrated quality management system: Our real-time quality management solutions enhance organizational visibility, optimize cross-functional workflows, and enable real-time data sharing. This unique system supports informed and faster decision-making, significantly contributing to positive business value and enhanced customer loyalty.</span>
              </p>
              <p className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <ChevronRight className="mt-1 flex-shrink-0" style={{ color: '#CD091B' }} size={22} strokeWidth={3} />
                <span>Customer-focused excellence: Our unique process excellence system has helped us achieve customer-focused excellence and faster responses to market and business changes.</span>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#CD091B] shadow-md">
              <p><strong className="text-2xl block mb-3" style={{ color: '#CD091B' }}>Visionary Leadership:</strong> We focus on creating long-term value for all stakeholders.</p>
            </div>
            
            <div className="ml-8 space-y-4">
              <p className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <ChevronRight className="mt-1 flex-shrink-0" style={{ color: '#101631' }} size={22} strokeWidth={3} />
                <span>Responsible behavior: We advocate for and implement sustainable practices to minimize environmental impact in our operations and projects.</span>
              </p>
              <p className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <ChevronRight className="mt-1 flex-shrink-0" style={{ color: '#CD091B' }} size={22} strokeWidth={3} />
                <span>Health and Safety: We ensure the health and safety of our workforce, clients, and the communities we serve is paramount in all our endeavors.</span>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#101631] shadow-md">
              <p><strong className="text-2xl block mb-3" style={{ color: '#101631' }}>Integrity:</strong> Committed to being whole, we model integrity by wholeheartedly living our mission. We conduct our business with the utmost integrity, fostering trust with clients, partners, and communities. We lead with clarity, kindness and authenticity.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#CD091B] shadow-md">
              <p><strong className="text-2xl block mb-3" style={{ color: '#CD091B' }}>Trust:</strong> We strengthen trust through teamwork, open communication, and transparency.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#101631] shadow-md">
              <p><strong className="text-2xl block mb-3" style={{ color: '#101631' }}>Co-Creation:</strong> We believe in enhancing capabilities by collaborating with broader stakeholders to co-create solutions that advance the energy sector and create value for our stakeholders. We believe that our success is closely tied to the success of our value-chain partners.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#CD091B] shadow-md">
              <p><strong className="text-2xl block mb-3" style={{ color: '#CD091B' }}>Curiosity:</strong> We practice curiosity through active listening and being fully present with every person we encounter.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#101631] shadow-md">
              <p><strong className="text-2xl block mb-3" style={{ color: '#101631' }}>Humility:</strong> We embody humility while balancing it with a strong sense of self and purpose.</p>
            </div>
          </div>
        </div>
      )
    }
  };

  const activeContent = tabsData[activeTab];
  const tabKeys = Object.keys(tabsData);

  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24 relative overflow-hidden">
      {/* Power Tower SVG - Left Side */}
      <div className="absolute left-0 top-32 opacity-[0.03] pointer-events-none">
        <svg width="200" height="500" viewBox="0 0 200 500" fill="none">
          <path d="M100 20 L85 100 L115 100 Z" fill="#101631"/>
          <rect x="90" y="100" width="20" height="80" fill="#CD091B"/>
          <line x1="60" y1="120" x2="140" y2="120" stroke="#101631" strokeWidth="4"/>
          <line x1="50" y1="150" x2="150" y2="150" stroke="#CD091B" strokeWidth="4"/>
          <rect x="85" y="180" width="30" height="120" fill="#101631"/>
          <line x1="40" y1="220" x2="160" y2="220" stroke="#CD091B" strokeWidth="5"/>
          <line x1="30" y1="260" x2="170" y2="260" stroke="#101631" strokeWidth="5"/>
          <path d="M70 300 L70 450 M130 300 L130 450" stroke="#CD091B" strokeWidth="6"/>
          <rect x="20" y="450" width="160" height="20" fill="#101631"/>
        </svg>
      </div>

      {/* Electrical Tower SVG - Right Side */}
      <div className="absolute right-0 top-64 opacity-[0.03] pointer-events-none">
        <svg width="220" height="480" viewBox="0 0 220 480" fill="none">
          <circle cx="110" cy="40" r="25" fill="#CD091B"/>
          <path d="M110 65 L95 140 L125 140 Z" fill="#101631"/>
          <rect x="100" y="140" width="20" height="60" fill="#CD091B"/>
          <line x1="70" y1="160" x2="150" y2="160" stroke="#101631" strokeWidth="5"/>
          <line x1="60" y1="200" x2="160" y2="200" stroke="#CD091B" strokeWidth="5"/>
          <rect x="95" y="200" width="30" height="100" fill="#101631"/>
          <line x1="50" y1="240" x2="170" y2="240" stroke="#CD091B" strokeWidth="6"/>
          <line x1="40" y1="280" x2="180" y2="280" stroke="#101631" strokeWidth="6"/>
          <path d="M75 300 L75 420 M145 300 L145 420" stroke="#CD091B" strokeWidth="7"/>
          <line x1="60" y1="350" x2="75" y2="350" stroke="#101631" strokeWidth="3"/>
          <line x1="145" y1="350" x2="160" y2="350" stroke="#101631" strokeWidth="3"/>
          <line x1="60" y1="380" x2="75" y2="380" stroke="#CD091B" strokeWidth="3"/>
          <line x1="145" y1="380" x2="160" y2="380" stroke="#CD091B" strokeWidth="3"/>
          <rect x="30" y="420" width="160" height="25" fill="#101631"/>
        </svg>
      </div>

      {/* Transmission Lines - Top */}
      <div className="absolute top-0 left-0 right-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0 50 Q300 20 600 50 T1200 50" stroke="#CD091B" strokeWidth="2" fill="none"/>
          <path d="M0 60 Q300 30 600 60 T1200 60" stroke="#101631" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7_5xl relative z-10">
        {/* Modern Tabs Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {tabKeys.map((tabKey) => {
              const isActive = activeTab === tabKey;
              const tab = tabsData[tabKey];
              
              return (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`
                    relative px-8 py-5 text-sm md:text-base font-black
                    transition-all duration-300 rounded-2xl
                    ${isActive 
                      ? 'shadow-2xl transform scale-110' 
                      : 'shadow-lg hover:shadow-xl hover:scale-105'
                    }
                  `}
                  style={{
                    backgroundColor: isActive ? '#CD091B' : 'white',
                    color: isActive ? 'white' : '#101631',
                    borderBottom: isActive ? 'none' : '4px solid #101631'
                  }}
                >
                  <span className="relative z-10 tracking-wide">{tab.title}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                      <div className="w-4 h-4 bg-[#CD091B] rotate-45"></div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border-t-8 border-[#CD091B]">
          <div className="p-10 md:p-16">
            <div className={`grid ${activeContent.image ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-12 md:gap-16 items-start`}>
              {/* Text Content */}
              <div className="space-y-4">
                {activeContent.content}
              </div>

              {/* Image */}
              {activeContent.image && (
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#101631] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#CD091B] transform group-hover:-translate-y-2 transition-all duration-500">
                    <img
                      src={activeContent.image}
                      alt={activeContent.title}
                      className="w-full h-auto object-contain bg-white"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}