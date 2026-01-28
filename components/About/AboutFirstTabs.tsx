'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function SanpecTabs() {
  const [activeTab, setActiveTab] = useState('who-we-are');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
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
                <span className="text-2xl">⚡</span>
                <span>Build a robust and reliable grid to power the American people.</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#CD091B] shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="flex items-start gap-4">
                <span className="text-2xl">🛡️</span>
                <span>Enhance resilience to withstand disruptions and adapt to evolving demands.</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#101631] shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="flex items-start gap-4">
                <span className="text-2xl">✨</span>
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
            <p>We have uniquely designed and implemented the process of the Future Today. As the inventors of the world&apos;s first ecosystem-focused business model, our founders have laid the foundation for a 21st-century value-creating business. Our award-winning engineers know the importance of process excellence and deliver solutions that create long-term, mid-term, and short-term value.</p>
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
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 20px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1800px] px-3 md:px-6 lg:px-8 py-6 md:py-10 relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          
          {/* Sidebar - Tower Design with Tabs */}
          <aside className="w-full lg:w-96 bg-gradient-to-b from-white to-gray-50 border-2 border-gray-200 shadow-lg">
            <nav className="py-8 px-6 relative">
              {/* Central Tower Pole */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#CD091B] via-gray-400 to-gray-300"></div>
              
              {tabKeys.map((tabKey, idx) => {
                const isActive = activeTab === tabKey;
                const tab = tabsData[tabKey];
                
                return (
                  <div key={tabKey} className="mb-6 relative">
                    {/* Connection Point on Tower (Insulator) */}
                    <div className={`absolute left-2 top-5 w-3 h-3 rounded-full shadow-md z-20 transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#CD091B] border-2 border-red-800 ring-4 ring-red-200' 
                        : 'bg-white border-2 border-gray-400'
                    }`}></div>
                    
                    {/* Horizontal Beam from Tower */}
                    <div className={`absolute left-5 top-6 w-6 h-0.5 transition-all duration-300 ${
                      isActive ? 'bg-[#CD091B]' : 'bg-gray-400'
                    }`}></div>

                    {/* Tab Item (Transformer Box) */}
                    <div 
                      onClick={() => setActiveTab(tabKey)}
                      aria-label={`View ${tab.title} content`}
                      aria-pressed={isActive}
                      className={`
                        relative ml-11 group flex items-center gap-3 px-5 py-4 cursor-pointer
                        transition-all duration-300 ease-out border-2
                        ${isActive
                          ? 'bg-white border-[#CD091B] text-gray-900 shadow-xl scale-105' 
                          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'
                        }
                      `}
                    >
                      {/* Number Badge */}
                      <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive ? 'bg-[#CD091B]' : 'bg-[#101631]'
                      }`}>
                        <span className="text-white font-bold text-lg">{idx + 1}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className={`font-bold text-sm transition-colors ${
                          isActive ? 'text-[#CD091B]' : 'text-gray-700'
                        }`}>
                          {tab.title}
                        </h3>
                      </div>
                      
                      {/* Active Power Indicator */}
                      {isActive && (
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                          <div className="w-2 h-2 bg-[#CD091B] rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
                        </div>
                      )}

                      {/* Power Line to Content */}
                      {isActive && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                          <div className="w-8 h-px bg-gradient-to-r from-[#CD091B] to-gray-300"></div>
                          <div className="w-1.5 h-1.5 rotate-45 bg-[#CD091B] -ml-0.5"></div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Tower Base Foundation */}
              <div className="absolute left-4 bottom-8 w-9 h-12 bg-gradient-to-b from-gray-400 to-gray-500 opacity-30" 
                   style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)'}}></div>
            </nav>
          </aside>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <div className="bg-white shadow-lg border-2 border-gray-200">
              
              <div className="p-5 md:p-8 lg:p-10">
                <div className={`grid ${activeContent.image ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-8 md:gap-12 items-start`}>
                  
                  {/* Text Content */}
                  <div className="space-y-4">
                    {activeContent.content}
                  </div>

                  {/* Image */}
                  {activeContent.image && (
                    <div className="relative group">
                      {/* Connection nodes at corners */}
                      <div className="absolute -top-2 -left-2 w-2 h-2 bg-gray-400 ring-2 ring-gray-200 rounded-full"></div>
                      <div className="absolute -top-2 -right-2 w-2 h-2 bg-gray-400 ring-2 ring-gray-200 rounded-full"></div>
                      <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gray-400 ring-2 ring-gray-200 rounded-full"></div>
                      <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-gray-400 ring-2 ring-gray-200 rounded-full"></div>
                      
                      {/* Frame border */}
                      <div className="absolute -inset-2 border-2 border-gray-300 rounded-xl"></div>
                      
                      <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-gray-200 transform group-hover:-translate-y-2 transition-all duration-500">
                        <Image
                          src={activeContent.image}
                          alt={activeContent.title}
                          width={800}
                          height={600}
                          className="w-full h-auto object-contain bg-white"
                          quality={90}
                          priority={activeTab === 'who-we-are'}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}