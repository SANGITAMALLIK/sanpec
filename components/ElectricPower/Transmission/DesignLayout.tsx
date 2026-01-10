import React, { useState } from 'react';
import { 
  ChevronRight, 
  CheckCircle, 
  Circle, 
  Zap, 
  Settings, 
  TestTube2, 
  Battery,
  Building,
  LineChart,
  Shield,
  Droplets,
  Cpu,
  Grid3x3,
  Menu,
  X
} from 'lucide-react';

// Tab icons mapping
const mainTabIcons = [Settings, TestTube2, Zap, Battery];
const subTabIcons = [Building, LineChart, Shield, Droplets];

export default function DesignEngineeringTabs() {
  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainTabs = [
    { id: 0, title: 'Design & Engineering', description: 'Innovative structural solutions' },
    { id: 1, title: 'Tower Testing', description: 'Quality assurance & validation' },
    { id: 2, title: 'Electrical Testing', description: 'Performance & safety checks' },
    { id: 3, title: 'Type Testing', description: 'Comprehensive material testing' }
  ];

  const designSubTabs = [
    { id: 0, title: 'Transmission', icon: Building },
    { id: 1, title: 'Engineering Excellence', icon: LineChart },
    { id: 2, title: 'Structure Optimization', icon: Shield },
    { id: 3, title: 'Robust Transmission Line', icon: Droplets }
  ];

  const towerTestingSubTabs = [
    { id: 0, title: 'T Line Structures Testing', icon: Building },
    { id: 1, title: 'Source Inspections', icon: Shield },
    { id: 2, title: 'Drone Field Inspections', icon: Cpu }
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

  const renderContent = () => {
    if (activeMainTab === 0) {
      const content = designContent[activeSubTab];
      return (
        <div className="space-y-6 md:space-y-8 animate-fadeIn">
          <div className="relative">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              {content.title}
            </h3>
            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
              {content.description.map((desc, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {desc}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300 hidden md:block"></div>
              <div className="relative bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg">
                    <LineChart className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">Key Features</h4>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  {content.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 group-hover-item">
                      <div className="flex-shrink-0 mt-0.5 md:mt-1">
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <CheckCircle className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-600" />
                        </div>
                      </div>
                      <span className="text-gray-800 hover:text-blue-700 transition-colors cursor-default text-sm md:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              {content.image && (
                <div className="group relative overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={content.image} 
                    alt={content.title}
                    className="w-full h-48 md:h-56 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <div className="bg-black/70 text-white p-3 rounded-lg backdrop-blur-sm">
                      <span className="text-sm">Detailed view</span>
                    </div>
                  </div>
                </div>
              )}
              {content.images && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {content.images.map((img, idx) => (
                    <div key={idx} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                      <img 
                        src={img} 
                        alt={`${content.title} ${idx + 1}`}
                        className="w-full h-36 md:h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
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
        <div className="space-y-6 md:space-y-8 animate-fadeIn">
          <div className="relative">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              {content.title}
            </h3>
            {content.description && (
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                {content.description.map((desc, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {desc}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300 hidden md:block"></div>
              <div className="relative bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg">
                    <Shield className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">Testing Protocols</h4>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  {content.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 group-hover-item">
                      <div className="flex-shrink-0 mt-0.5 md:mt-1">
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
                        </div>
                      </div>
                      <span className="text-gray-800 hover:text-purple-700 transition-colors cursor-default text-sm md:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {content.images.map((img, idx) => (
                  <div key={idx} className={`group relative overflow-hidden rounded-lg shadow-lg ${idx === 0 ? 'sm:col-span-2' : ''}`}>
                    <img 
                      src={img} 
                      alt={`${content.title} ${idx + 1}`}
                      className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
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
        <div className="space-y-6 md:space-y-8 animate-fadeIn">
          <div className="relative">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Corona/RIV and Electrical Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              Advanced electrical testing solutions for transmission systems including corona discharge, radio interference voltage, and comprehensive electrical performance validation.
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300 hidden md:block"></div>
              <div className="relative bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">Testing Capabilities</h4>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    'Corona Discharge Testing',
                    'Radio Interference Voltage (RIV) Measurement',
                    'Partial Discharge Detection',
                    'High Voltage Testing',
                    'Insulation Resistance Testing',
                    'Dielectric Strength Tests'
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 group-hover-item">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
                      <span className="text-gray-800 hover:text-green-700 transition-colors cursor-default text-sm md:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home6.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/inspection.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/services.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home2.png'
              ].map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={img} 
                    alt={`Electrical Testing ${idx + 1}`}
                    className="w-full h-32 md:h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (activeMainTab === 3) {
      return (
        <div className="space-y-6 md:space-y-8 animate-fadeIn">
          <div className="relative">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Conductor/OPGW/Hardware Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              Comprehensive material and component testing for transmission line reliability and longevity.
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300 hidden md:block"></div>
              <div className="relative bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="p-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg">
                    <Cpu className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">Testing Services</h4>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    'Inspection of T Line Materials (Steel Poles, Towers, Substation Structures, Insulators, etc.)',
                    'Weld Inspections (NDT Techniques)',
                    'Fabrication Shop Audits and On-Site Inspections',
                    'Material Sampling for Metallurgical/Mechanical Testing',
                    'Failure/Root Cause Analysis',
                    'Field Inspections for Aging Transmission Infrastructure'
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 group-hover-item">
                      <div className="flex-shrink-0 mt-0.5 md:mt-1">
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
                        </div>
                      </div>
                      <span className="text-gray-800 hover:text-orange-700 transition-colors cursor-default text-sm md:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home2.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home3.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/services.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home6.png'
              ].map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={img} 
                    alt={`Type Testing ${idx + 1}`}
                    className="w-full h-32 md:h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
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
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        
        .grid-overlay {
          background-image: 
            linear-gradient(rgba(0, 0, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 255, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        .flag-blue {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
              // background: linear-gradient(135deg, #ea3943 0%, #ea3943 50%, #ea3943 100%);
        }
        
        .hover-glow {
          transition: all 0.3s ease;
        }
        
        .hover-glow:hover {
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3), 0 8px 10px -6px rgba(59, 130, 246, 0.2);
        }

        /* Hide scrollbar for better mobile experience */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 640px) {
          .mobile-tab-scroll {
            display: flex;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 8px;
            margin-right: -12px;
            margin-left: -12px;
            padding-left: 12px;
            padding-right: 12px;
          }
          
          .mobile-tab-scroll > * {
            flex: 0 0 auto;
          }
        }
      `}</style>

      {/* Mobile Menu Button (only for small screens) */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg mb-4"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          <span>{mainTabs[activeMainTab].title}</span>
        </button>
      </div>

      {/* Main Tabs */}
      <div className="mb-4 md:mb-6">
        <div className={`lg:grid lg:grid-cols-4 gap-2 sm:gap-3 ${mobileMenuOpen ? 'block' : 'hidden lg:grid'}`}>
          {mainTabs.map((tab) => {
            const Icon = mainTabIcons[tab.id];
            const isActive = activeMainTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveMainTab(tab.id);
                  setActiveSubTab(0);
                  setMobileMenuOpen(false);
                }}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`relative p-3 md:p-4 rounded-xl transition-all duration-300 hover-glow w-full text-left ${
                  isActive 
                    ? 'flag-blue text-white shadow-xl transform scale-[1.02]' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/20' 
                        : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    <h3 className="font-semibold text-sm md:text-base">{tab.title}</h3>
                  </div>
                  <p className={`text-xs mt-2 ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                    {tab.description}
                  </p>
                </div>
                
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/50 rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub Tabs */}
      {(activeMainTab === 0 || activeMainTab === 1) && (
        <div className="mb-4 md:mb-6">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide mobile-tab-scroll">
            {(activeMainTab === 0 ? designSubTabs : towerTestingSubTabs).map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSubTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg transition-all duration-300 hover-glow whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                  }`}
                >
                  <Icon className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="font-medium text-xs md:text-sm">{tab.title}</span>
                  {isActive && (
                    <ChevronRight className="w-2 h-2 md:w-3 md:h-3 ml-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Content Area with Grid Lines */}
      <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 lg:p-8 min-h-[400px] md:min-h-[500px] border border-gray-200 grid-overlay overflow-hidden">
        {/* Grid Lines Overlay Icon */}
        <div className="absolute top-2 right-2 md:top-4 md:right-4 opacity-10">
          <Grid3x3 className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
        </div>
        
        {/* Decorative Corner Lines */}
        <div className="absolute top-0 left-0 w-10 h-10 md:w-20 md:h-20 border-t-2 border-l-2 border-blue-100 rounded-tl-xl md:rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-10 h-10 md:w-20 md:h-20 border-t-2 border-r-2 border-blue-100 rounded-tr-xl md:rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-10 h-10 md:w-20 md:h-20 border-b-2 border-l-2 border-blue-100 rounded-bl-xl md:rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-10 h-10 md:w-20 md:h-20 border-b-2 border-r-2 border-blue-100 rounded-br-xl md:rounded-br-2xl"></div>
        
        {/* Main content */}
        <div className="relative z-10">
          {renderContent()}
        </div>
      </div>

      {/* Stats Footer */}
      <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {[
          { label: 'Projects', value: '500+', color: 'from-blue-600 to-blue-400' },
          { label: 'Experience', value: '15+ Years', color: 'from-purple-600 to-purple-400' },
          { label: 'Engineers', value: '50+', color: 'from-green-600 to-green-400' },
          { label: 'Testing Labs', value: '4', color: 'from-orange-600 to-orange-400' }
        ].map((stat, idx) => (
          <div key={idx} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-30 blur transition duration-300 rounded-lg md:rounded-xl hidden md:block"></div>
            <div className="relative bg-white rounded-lg md:rounded-xl p-3 md:p-4 text-center shadow-sm md:shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className={`text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-600 text-xs md:text-sm mt-1">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}