import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  CheckCircle, 
  Settings, 
  TestTube2, 
  Zap, 
  Battery,
  Building,
  LineChart,
  Shield,
  Droplets,
  Cpu,
  Menu,
  X
} from 'lucide-react';

const mainTabIcons = [Settings, TestTube2, Zap, Battery];

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

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
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

  const handleMainTabClick = (tabId) => {
    setActiveMainTab(tabId);
    setActiveSubTab(0);
    setMobileMenuOpen(false);
    
    // Update URL hash
    window.history.pushState(null, '', `#${tabId}`);
  };

  const renderContent = () => {
    if (activeMainTab === 0) {
      const content = designContent[activeSubTab];
      return (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {content.title}
            </h3>
            <div className="space-y-3 mb-6">
              {content.description.map((desc, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {desc}
                </p>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#101631] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#101631] rounded-lg">
                  <LineChart className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Key Features</h4>
              </div>
              <ul className="space-y-3">
                {content.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-[#CD091B]" />
                    </div>
                    <span className="text-gray-800 text-sm md:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              {content.image && (
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <img 
                    src={content.image} 
                    alt={content.title}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              {content.images && (
                <div className="grid grid-cols-2 gap-4">
                  {content.images.map((img, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg border border-gray-200">
                      <img 
                        src={img} 
                        alt={`${content.title} ${idx + 1}`}
                        className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
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
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {content.title}
            </h3>
            {content.description && (
              <div className="space-y-3 mb-6">
                {content.description.map((desc, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {desc}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#101631] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#CD091B] rounded-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Testing Protocols</h4>
              </div>
              <ul className="space-y-3">
                {content.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-[#101631] rounded-full"></div>
                    </div>
                    <span className="text-gray-800 text-sm md:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {content.images.map((img, idx) => (
                  <div key={idx} className={`overflow-hidden rounded-lg border border-gray-200 ${idx === 0 ? 'col-span-2' : ''}`}>
                    <img 
                      src={img} 
                      alt={`${content.title} ${idx + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
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
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Corona/RIV and Electrical Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
              Advanced electrical testing solutions for transmission systems including corona discharge, radio interference voltage, and comprehensive electrical performance validation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#101631] transition-colors">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Testing Capabilities</h4>
              <ul className="space-y-3">
                {[
                  'Corona Discharge Testing',
                  'Radio Interference Voltage (RIV) Measurement',
                  'Partial Discharge Detection',
                  'High Voltage Testing',
                  'Insulation Resistance Testing',
                  'Dielectric Strength Tests'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#CD091B] rounded-full"></div>
                    <span className="text-gray-800 text-sm md:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home6.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/inspection.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/services.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home2.png'
              ].map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg border border-gray-200">
                  <img 
                    src={img} 
                    alt={`Electrical Testing ${idx + 1}`}
                    className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
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
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Conductor/OPGW/Hardware Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
              Comprehensive material and component testing for transmission line reliability and longevity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#101631] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#101631] rounded-lg">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Testing Services</h4>
              </div>
              <ul className="space-y-3">
                {[
                  'Inspection of T Line Materials (Steel Poles, Towers, Substation Structures, Insulators, etc.)',
                  'Weld Inspections (NDT Techniques)',
                  'Fabrication Shop Audits and On-Site Inspections',
                  'Material Sampling for Metallurgical/Mechanical Testing',
                  'Failure/Root Cause Analysis',
                  'Field Inspections for Aging Transmission Infrastructure'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-[#CD091B] rounded-full"></div>
                    </div>
                    <span className="text-gray-800 text-sm md:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home2.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home3.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/services.png',
                'https://sanpec-excellence.com/wp-content/uploads/2025/01/home6.png'
              ].map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg border border-gray-200">
                  <img 
                    src={img} 
                    alt={`Type Testing ${idx + 1}`}
                    className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
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
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-6">
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

      {/* Main Tabs */}
      <div className="mb-6">
        <div className={`grid grid-cols-1 lg:grid-cols-4 gap-3 ${mobileMenuOpen ? 'block' : 'hidden lg:grid'}`}>
          {mainTabs.map((tab) => {
            const Icon = mainTabIcons[tab.id];
            const isActive = activeMainTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => handleMainTabClick(tab.id)}
                className={`p-4 rounded-xl transition-all duration-300 w-full text-left border ${
                  isActive 
                    ? 'bg-[#101631] text-white border-[#101631]' 
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#101631]'
                }`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      isActive ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#101631]'}`} />
                    </div>
                    <h3 className="font-semibold text-base">{tab.title}</h3>
                  </div>
                  <p className={`text-xs mt-2 ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                    {tab.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub Tabs */}
      {(activeMainTab === 0 || activeMainTab === 1) && (
        <div className="mb-6">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {(activeMainTab === 0 ? designSubTabs : towerTestingSubTabs).map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSubTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap border ${
                    isActive
                      ? 'bg-[#CD091B] text-white border-[#CD091B]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#CD091B]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{tab.title}</span>
                  {isActive && <ChevronRight className="w-3 h-3 ml-1" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="bg-white rounded-xl p-6 lg:p-8 min-h-[500px] border border-gray-200">
        {renderContent()}
      </div>

      {/* Stats Footer */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Projects', value: '500+' },
          { label: 'Experience', value: '15+ Years' },
          { label: 'Engineers', value: '50+' },
          { label: 'Testing Labs', value: '4' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-[#101631] transition-colors">
            <div className="text-2xl font-bold text-[#101631]">
              {stat.value}
            </div>
            <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}