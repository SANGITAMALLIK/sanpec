import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  CheckCircle, 
  LineChart,
  Shield,
  Cpu,
  Menu,
  X
} from 'lucide-react';

export default function DesignEngineeringTabs() {
  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hash-based navigation handler
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const tabIndex = parseInt(hash);
        if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex <= 3) {
          setActiveMainTab(tabIndex);
          setActiveSubTab(0);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const mainTabs = [
    { id: 0, title: 'Design & Engineering', description: 'Innovative structural solutions' },
    { id: 1, title: 'Tower Testing', description: 'Quality assurance & validation' },
    { id: 2, title: 'Electrical Testing', description: 'Performance & safety checks' },
    { id: 3, title: 'Type Testing', description: 'Comprehensive material testing' }
  ];

  const designSubTabs = [
    { id: 0, title: 'Transmission' },
    { id: 1, title: 'Engineering Excellence' },
    { id: 2, title: 'Structure Optimization' },
    { id: 3, title: 'Robust Transmission Line' }
  ];

  const towerTestingSubTabs = [
    { id: 0, title: 'T Line Structures Testing' },
    { id: 1, title: 'Source Inspections' },
    { id: 2, title: 'Drone Field Inspections' }
  ];

  const designContent = [
    {
      title: 'Tower Testing And Inspections',
      description: [
        'From 69 kV up to 500 kV, we design, engineer, and inspect a full range of overhead transmission line support structures to precisely suit the growing needs of our utility customers. In addition, we provide custom solutions for complex base plates, cross arms, and pole accessories.',
        'We utilize state-of-the-art design and detailing software to optimize transmission line structures (single circuit, double circuit, H-frames, substation, custom structures) and identify stress concentrations in critical areas through finite element analysis.'
      ],
      points: [
        'Transmission Line Engineering (Sustainability Approach)',
        'Full Scale Structural Testing (Witnessing and Validation)',
        'Minimize adverse environmental impacts',
        'Optimize the ROW',
        'Plan resiliency in transmission line system',
        'Deliver electricity in safe, reliable and an efficient manner',
        'Provide economic benefits to shareholders and communities',
        'Use environmentally preferable structures: Steel Poles/Towers',
        'Utilize lifecycle economics and use best practice specs',
        'Optimize operational and maintenance practices'
      ],
      image: 'https://sanpec-excellence.com/wp-content/uploads/2024/10/image-15.webp'
    },
    {
      title: 'Sustainability through Engineering Excellence',
      description: ['Determine compatibility of existing and proposed transmission line'],
      points: [
        'Voltage (kV) of Line',
        'Total Length of Line',
        'Climatic Conditions',
        'Type of conductor',
        'Type of Structures',
        'Type of foundations',
        'Design Capacity (MVA)',
        'Power Delivered (MVA)',
        'Cost of Conductor ($/ft)',
        'Cost of Structures ($/lbs)',
        'Cost of Construction ($/miles)',
        'Other Misc. Cost ($$ Lump Sum)'
      ],
      images: [
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture7.jpg',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture24.jpg'
      ]
    },
    {
      title: 'T&D Structures',
      description: ['Structure Optimization:'],
      points: [
        'Type of Material',
        'Structure configuration',
        'Optimum and efficient design',
        'Less waste of material',
        'Installation cost',
        'Aesthetic consideration',
        'Optimum foundation design',
        'Total life cycle cost'
      ],
      images: [
        'https://sanpec-excellence.com/wp-content/uploads/2025/02/23.jpg',
        'https://sanpec-excellence.com/wp-content/uploads/2025/02/24.jpg'
      ]
    },
    {
      title: 'Robust Transmission Line',
      description: ['Design & Engineering for a robust transmission infrastructure'],
      points: [
        'Minimize adverse environmental impacts',
        'Optimize the ROW',
        'Plan resiliency in transmission line system',
        'Deliver electricity in safe, reliable and an efficient manner',
        'Provide economic benefits to shareholders and communities',
        'Optimize operational and maintenance practices',
        'Use environmentally preferable structures: Steel Poles/Towers',
        'Utilize lifecycle economics',
        'Use best practice specs'
      ],
      images: [
        'https://sanpec-excellence.com/wp-content/uploads/2025/02/21.jpg',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture15.jpg'
      ]
    }
  ];

  const towerTestingContent = [
    {
      title: 'T Line Structures Testing',
      points: [
        'Transmission Line Engineering and Manufacturing of Steel Structures (Sustainability Approach)',
        'Structural Analysis, Design and Detailing of Steel Poles and Lattice Tower',
        'Full Scale Structural Testing (Witnessing and Validation)',
        'Prototype and Proof of Fit Testing',
        'Technical Specifications Review'
      ],
      images: [
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture21.jpg',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture20-2.png',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture27-2.png'
      ]
    },
    {
      title: 'Source Inspections at manufacturing facilities',
      description: ['Determine compatibility of existing and proposed transmission line'],
      points: [
        'Ensure that the customer receives quality product',
        'Minimize liability for product failures and construction delays',
        'Reduce overall project risks and costs'
      ],
      images: [
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/home2.png',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture31.jpg'
      ]
    },
    {
      title: 'Field Inspections Using Drones',
      description: ['Advanced aerial inspection technology'],
      points: [
        'LiDAR Technology Integration',
        'High quality imaging and data collection',
        'Diagnose problems quickly and accurately',
        'No outage required - significant cost savings',
        'Safe and healthy work environment'
      ],
      images: [
        'https://sanpec-excellence.com/wp-content/uploads/2025/02/16.jpg',
        'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture14-2.png'
      ]
    }
  ];

  const handleMainTabClick = (tabId) => {
    setActiveMainTab(tabId);
    setActiveSubTab(0);
    setMobileMenuOpen(false);
    window.history.pushState(null, '', `#${tabId}`);
  };

  const renderContent = () => {
    if (activeMainTab === 0) {
      const content = designContent[activeSubTab];
      return (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#CD091B]">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {content.title}
            </h3>
            <div className="space-y-2">
              {content.description.map((desc, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {desc}
                </p>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#CD091B] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                <CheckCircle className="w-4 h-4 text-[#CD091B]" />
                <h4 className="text-base font-bold text-gray-900">Key Features</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                {content.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1 h-1 bg-[#CD091B] rounded-full group-hover:scale-150 transition-transform"></div>
                    </div>
                    <span className="text-gray-700 text-xs leading-snug group-hover:text-gray-900 transition-colors">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {content.image && (
                <div className="overflow-hidden rounded-xl border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-md hover:shadow-xl">
                  <img 
                    src={content.image} 
                    alt={content.title}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              {content.images && (
                <div className="grid grid-cols-2 gap-3">
                  {content.images.map((img, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-sm hover:shadow-md group">
                      <img 
                        src={img} 
                        alt={`${content.title} ${idx + 1}`}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    } else if (activeMainTab === 1) {
      const content = towerTestingContent[activeSubTab];
      return (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#101631]">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {content.title}
            </h3>
            {content.description && (
              <div className="space-y-2">
                {content.description.map((desc, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {desc}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#101631] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                <Shield className="w-4 h-4 text-[#101631]" />
                <h4 className="text-base font-bold text-gray-900">Testing Protocols</h4>
              </div>
              <div className="space-y-2">
                {content.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1 h-1 bg-[#101631] rounded-full group-hover:scale-150 transition-transform"></div>
                    </div>
                    <span className="text-gray-700 text-xs leading-snug group-hover:text-gray-900 transition-colors">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {content.images.map((img, idx) => (
                  <div key={idx} className={`overflow-hidden rounded-lg border-2 border-gray-200 hover:border-[#101631] transition-all duration-300 shadow-sm hover:shadow-md group ${idx === 0 ? 'col-span-2' : ''}`}>
                    <img 
                      src={img} 
                      alt={`${content.title} ${idx + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeMainTab === 2) {
      return (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#CD091B]">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Corona/RIV and Electrical Testing
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Advanced electrical testing solutions for transmission systems including corona discharge, radio interference voltage, and comprehensive electrical performance validation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#CD091B] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                <Cpu className="w-4 h-4 text-[#CD091B]" />
                <h4 className="text-base font-bold text-gray-900">Testing Capabilities</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                {[
                  'Corona Discharge Testing',
                  'Radio Interference Voltage (RIV) Measurement',
                  'Partial Discharge Detection',
                  'High Voltage Testing',
                  'Insulation Resistance Testing',
                  'Dielectric Strength Tests'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-[#CD091B] rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-700 text-xs group-hover:text-gray-900 transition-colors">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home6.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/inspection.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/services.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home2.png'
              ].map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-sm hover:shadow-md group">
                  <img 
                    src={img} 
                    alt={`Electrical Testing ${idx + 1}`}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (activeMainTab === 3) {
      return (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#101631]">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Conductor/OPGW/Hardware Testing
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Comprehensive material and component testing for transmission line reliability and longevity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#101631] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                <LineChart className="w-4 h-4 text-[#101631]" />
                <h4 className="text-base font-bold text-gray-900">Testing Services</h4>
              </div>
              <div className="space-y-2">
                {[
                  'Inspection of T Line Materials (Steel Poles, Towers, Substation Structures, Insulators, etc.)',
                  'Weld Inspections (NDT Techniques)',
                  'Fabrication Shop Audits and On-Site Inspections',
                  'Material Sampling for Metallurgical/Mechanical Testing',
                  'Failure/Root Cause Analysis',
                  'Field Inspections for Aging Transmission Infrastructure'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1 h-1 bg-[#101631] rounded-full group-hover:scale-150 transition-transform"></div>
                    </div>
                    <span className="text-gray-700 text-xs leading-snug group-hover:text-gray-900 transition-colors">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home2.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home3.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/services.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home6.png'
              ].map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg border-2 border-gray-200 hover:border-[#101631] transition-all duration-300 shadow-sm hover:shadow-md group">
                  <img 
                    src={img} 
                    alt={`Type Testing ${idx + 1}`}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 md:px-4 py-4">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Mobile Menu Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-[#101631] text-white rounded-lg w-full justify-between"
        >
          <span>{mainTabs[activeMainTab].title}</span>
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Tabs - Horizontal with subtle indicator */}
      <div className="mb-6">
        <div className={`grid grid-cols-1 lg:grid-cols-4 gap-3 ${mobileMenuOpen ? 'block' : 'hidden lg:grid'}`}>
          {mainTabs.map((tab) => {
            const isActive = activeMainTab === tab.id;
            const hasSubTabs = tab.id === 0 || tab.id === 1;
            
            return (
              <button
                key={tab.id}
                onClick={() => handleMainTabClick(tab.id)}
                className={`p-4 rounded-xl transition-all duration-300 w-full text-left border relative ${
                  isActive 
                    ? 'bg-[#101631] text-white border-[#101631]' 
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#101631]'
                }`}
              >
                <div className="flex flex-col">
                  <h3 className="font-semibold text-base">{tab.title}</h3>
                  <p className={`text-xs mt-2 ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                    {tab.description}
                  </p>
                </div>
                {/* Subtle indicator for active tab with sub-tabs */}
                {isActive && hasSubTabs && (
                  <div className="hidden lg:block absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#CD091B]"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Layout with Vertical Sub Tabs and Content */}
      {(activeMainTab === 0 || activeMainTab === 1) && (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Content Area - Left Side */}
          <div className="flex-1 lg:order-1">
            <div className="bg-white rounded-xl p-4 lg:p-6 min-h-[500px] border border-gray-300 shadow-sm relative">
              {/* Connection line to sidebar */}
              <div className="hidden lg:block absolute -right-6 top-8 w-6 h-0.5 bg-gray-400"></div>
              {renderContent()}
            </div>
          </div>

          {/* Vertical Sub Tabs - Right Side */}
          <div className="lg:w-72 flex-shrink-0 lg:order-2">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-300 shadow-sm relative">
              {/* Header with parent tab info */}
              <div className="mb-4 pb-3 border-b border-gray-300">
                <div className="flex items-center gap-2 text-[#CD091B] mb-1">
                  <div className="w-1.5 h-1.5 bg-[#CD091B] rounded-full"></div>
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {activeMainTab === 0 ? 'Design & Engineering' : 'Tower Testing'}
                  </span>
                </div>
                {/* <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  {activeMainTab === 0 ? 'Categories' : 'Testing Types'}
                </h4> */}
              </div>
              
              <div className="space-y-2">
                {(activeMainTab === 0 ? designSubTabs : towerTestingSubTabs).map((tab) => {
                  const isActive = activeSubTab === tab.id;
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSubTab(tab.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 border relative ${
                        isActive
                          ? 'bg-[#CD091B] text-white border-[#CD091B] shadow-md transform scale-[1.02]'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${isActive ? 'rotate-180' : ''}`} />
                        <span className="font-medium text-sm">{tab.title}</span>
                      </div>
                      {/* Active indicator line pointing to content */}
                      {isActive && (
                        <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-gray-400"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Only (for tabs without sub tabs) */}
      {activeMainTab !== 0 && activeMainTab !== 1 && (
        <div className="bg-white rounded-xl p-6 lg:p-8 min-h-[500px] border border-gray-200 shadow-sm">
          {renderContent()}
        </div>
      )}
    </div>
  );
}