'use client';
import React, { useState } from 'react';
import { Users, Target, Recycle, CloudRain, Leaf, Award, Shield, Lightbulb } from 'lucide-react';

export default function PremiumTabsSection() {
  const [activeTab, setActiveTab] = useState('quality-of-life');
  const [hoveredCard, setHoveredCard] = useState(null);

  const tabs = [
    { id: 'quality-of-life', label: 'Quality of Life', icon: Users, color: 'from-[#101631] to-[#101631]/90' },
    { id: 'leadership', label: 'Leadership', icon: Award, color: 'from-[#CD091B] to-[#CD091B]/90' },
    { id: 'resource-allocation', label: 'Resource Allocation', icon: Recycle, color: 'from-[#101631] to-[#CD091B]' },
    { id: 'climate-and-resilience', label: 'Climate and Resilience', icon: CloudRain, color: 'from-[#CD091B] to-[#101631]' },
    { id: 'natural-world', label: 'Natural World', icon: Leaf, color: 'from-[#101631]/80 to-[#CD091B]/80' }
  ];

  const tabContent = {
    'quality-of-life': {
      title: 'QUALITY OF LIFE',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/image-19-1024x791.webp',
      items: [
        { text: 'Improve Community Quality of Life', icon: Users },
        { text: 'Enhance Public Health & Safety', icon: Shield },
        { text: 'Improve Construction Safety', icon: Shield },
        { text: 'Minimize Noise & Vibration', icon: Target },
        { text: 'Minimize Light Pollution', icon: Lightbulb },
        { text: 'Minimize Construction Impacts', icon: Target },
        { text: 'Improve Community Mobility Access', icon: Users },
        { text: 'Encourage Sustainable Transportation', icon: Target },
        { text: 'Improve Access & Wayfinding', icon: Target },
        { text: 'Advance Equity & Social Justice', icon: Users },
        { text: 'Preserve Historic & Cultural Resources', icon: Award },
        { text: 'Enhance Views & Local Character', icon: Target },
        { text: 'Enhance Public Space & Amenities', icon: Users }
      ]
    },
    'leadership': {
      title: 'LEADERSHIP',
      image: null,
      items: [
        { text: 'Provide Effective Leadership & Commitment', icon: Award },
        { text: 'Foster Collaboration & Teamwork', icon: Users },
        { text: 'Provide for Stakeholder Involvement', icon: Users },
        { text: 'Pursue Byproduct Synergies', icon: Target },
        { text: 'Establish a Sustainability Management Plan', icon: Award },
        { text: 'Plan for Sustainable Communities', icon: Target },
        { text: 'Plan for Long-Term Monitoring & Maintenance', icon: Shield },
        { text: 'Plan for End-of-Life', icon: Target },
        { text: 'Stimulate Economic Prosperity & Development', icon: Award },
        { text: 'Develop Local Skills & Capabilities', icon: Users },
        { text: 'Conduct a Life-Cycle Economic Evaluation', icon: Target }
      ]
    },
    'resource-allocation': {
      title: 'RESOURCE ALLOCATION',
      image: null,
      items: [
        { text: 'Support Sustainable Procurement Practices', icon: Recycle },
        { text: 'Use Recycled Materials', icon: Recycle },
        { text: 'Reduce Operational Waste', icon: Target },
        { text: 'Reduce Construction Waste', icon: Target },
        { text: 'Balance Earthwork On Site', icon: Target },
        { text: 'Reduce Operational Energy Consumption', icon: Lightbulb },
        { text: 'Reduce Construction Energy Consumption', icon: Lightbulb },
        { text: 'Use Renewable Energy', icon: Lightbulb }
      ]
    },
    'climate-and-resilience': {
      title: 'CLIMATE AND RESILIENCE',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/7004881064_3cf4c1b1af_k.png',
      items: [
        { text: 'Reduce Greenhouse Gas Emissions', icon: CloudRain },
        { text: 'Reduce Air Pollutant Emissions', icon: CloudRain },
        { text: 'Avoid Unsuitable Development', icon: Shield },
        { text: 'Assess Climate Change Vulnerability', icon: Target },
        { text: 'Evaluate Risk and Resilience', icon: Shield },
        { text: 'Establish Resilience Goals and Strategies', icon: Award }
      ]
    },
    'natural-world': {
      title: 'NATURAL WORLD',
      image: null,
      items: [
        { text: 'Preserve Prime Habitat', icon: Leaf },
        { text: 'Protect Wetlands and Surface Water', icon: Leaf },
        { text: 'Preserve Prime Farmland', icon: Leaf },
        { text: 'Avoid Adverse Geology', icon: Shield },
        { text: 'Preserve Floodplain Functions', icon: Leaf },
        { text: 'Avoid Unsuitable Development on Steep Slopes', icon: Shield },
        { text: 'Preserve Greenfields', icon: Leaf },
        { text: 'Manage Stormwater', icon: CloudRain },
        { text: 'Reduce Pesticide and Fertilizer Impacts', icon: Target },
        { text: 'Prevent Surface and Groundwater Contamination', icon: Shield },
        { text: 'Preserve Species Biodiversity', icon: Leaf },
        { text: 'Control Invasive Species', icon: Shield },
        { text: 'Restore Disturbed Soils', icon: Leaf },
        { text: 'Maintain Wetland and Surface Water Functions', icon: Leaf }
      ]
    }
  };

  const currentContent = tabContent[activeTab];
  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <div className="py-16 px-4 relative overflow-hidden bg-white">
      
      <div 
        className="absolute top-0 left-0 right-0 h-[400px] z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(16, 22, 49, 0.05) 0%, rgba(205, 9, 27, 0.05) 50%, rgba(16, 22, 49, 0.05) 100%)'
        }}
      ></div>

      <div className="absolute top-20 left-10 opacity-[0.06] pointer-events-none z-0">
        <svg width="100" height="200" viewBox="0 0 100 200">
          <line x1="50" y1="10" x2="50" y2="190" stroke="#101631" strokeWidth="3"/>
          <line x1="30" y1="50" x2="70" y2="50" stroke="#101631" strokeWidth="2"/>
          <line x1="20" y1="100" x2="80" y2="100" stroke="#101631" strokeWidth="2"/>
          <line x1="10" y1="150" x2="90" y2="150" stroke="#101631" strokeWidth="2"/>
          <line x1="30" y1="10" x2="50" y2="40" stroke="#101631" strokeWidth="2"/>
          <line x1="70" y1="10" x2="50" y2="40" stroke="#101631" strokeWidth="2"/>
        </svg>
      </div>

      <div className="absolute top-32 right-16 opacity-[0.06] pointer-events-none z-0">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="none" stroke="#CD091B" strokeWidth="2"/>
          <circle cx="60" cy="60" r="35" fill="none" stroke="#CD091B" strokeWidth="2"/>
          <line x1="60" y1="10" x2="60" y2="110" stroke="#CD091B" strokeWidth="2"/>
          <line x1="10" y1="60" x2="110" y2="60" stroke="#CD091B" strokeWidth="2"/>
          <line x1="20" y1="20" x2="100" y2="100" stroke="#CD091B" strokeWidth="2"/>
          <line x1="100" y1="20" x2="20" y2="100" stroke="#CD091B" strokeWidth="2"/>
        </svg>
      </div>

      <div className="absolute bottom-20 left-20 opacity-[0.06] pointer-events-none z-0">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <polygon points="70,10 10,130 130,130" fill="none" stroke="#101631" strokeWidth="3"/>
          <polygon points="70,35 35,105 105,105" fill="none" stroke="#101631" strokeWidth="2"/>
          <line x1="70" y1="10" x2="70" y2="130" stroke="#101631" strokeWidth="2"/>
        </svg>
      </div>

      <div className="absolute bottom-32 right-12 opacity-[0.06] pointer-events-none z-0">
        <svg width="100" height="180" viewBox="0 0 100 180">
          <line x1="50" y1="0" x2="50" y2="180" stroke="#CD091B" strokeWidth="3"/>
          <line x1="35" y1="40" x2="65" y2="40" stroke="#CD091B" strokeWidth="2"/>
          <line x1="25" y1="90" x2="75" y2="90" stroke="#CD091B" strokeWidth="2"/>
          <line x1="15" y1="140" x2="85" y2="140" stroke="#CD091B" strokeWidth="2"/>
          <path d="M 75 90 Q 90 85 105 80" stroke="#CD091B" strokeWidth="1.5" fill="none"/>
          <path d="M 75 95 Q 90 90 105 85" stroke="#CD091B" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      <div className="absolute top-1/2 right-8 opacity-[0.05] pointer-events-none z-0">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="#101631" strokeWidth="2"/>
          <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" fill="none" stroke="#101631" strokeWidth="2"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-12">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-3 border border-gray-200/50">
            <div className="flex flex-wrap gap-3 justify-center">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-500 overflow-hidden ${
                      isActive
                        ? 'text-white shadow-xl scale-105'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} transition-all duration-500`}></div>
                    )}
                    
                    <div className="relative z-10 flex items-center gap-3">
                      <Icon className={`w-5 h-5 transition-all duration-500 ${
                        isActive 
                          ? 'scale-110 rotate-0' 
                          : 'scale-100 rotate-12 group-hover:rotate-0 group-hover:scale-110'
                      }`} />
                      <span className="whitespace-nowrap font-black tracking-tight">{tab.label}</span>
                    </div>
                    
                    {!isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="relative h-2 w-full mt-6 bg-gray-100 rounded-full overflow-hidden shadow-inner">
            <div 
              className={`absolute h-full bg-gradient-to-r ${currentTab.color} transition-all duration-700 ease-out shadow-lg`}
              style={{
                width: `${100 / tabs.length}%`,
                left: `${(tabs.findIndex(t => t.id === activeTab) / tabs.length) * 100}%`
              }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-6 lg:p-8">
            
            <div className="mb-8">
              <div className={`inline-flex items-center gap-4 bg-gradient-to-r ${currentTab.color} px-8 py-4 rounded-2xl shadow-2xl`}>
                {React.createElement(currentTab.icon, { className: 'w-7 h-7 text-white' })}
                <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight" style={{fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em'}}>
                  {currentContent.title}
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {currentContent.image && (
                <div className="lg:col-span-5">
                  <div className="relative group">
                    <div className={`absolute -inset-2 bg-gradient-to-r ${currentTab.color} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700`}></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                      <img 
                        src={currentContent.image} 
                        alt={currentContent.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className={currentContent.image ? 'lg:col-span-7' : 'lg:col-span-12'}>
                <div className={`grid ${currentContent.image ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-3`}>
                  {currentContent.items.map((item, index) => {
                    const ItemIcon = item.icon;
                    const isHovered = hoveredCard === index;
                    return (
                      <div 
                        key={index}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className="group relative bg-gradient-to-br from-slate-50 to-white border-2 border-gray-100 rounded-2xl p-3 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:-translate-y-2"
                      >
                        <div className={`absolute -inset-1 bg-gradient-to-r ${currentTab.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10`}></div>
                        
                        <div className="flex items-start gap-3 relative z-10">
                          <div className={`flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${currentTab.color} flex items-center justify-center shadow-lg transition-all duration-500 ${
                            isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                          }`}>
                            <ItemIcon className="w-4 h-4 text-white" />
                          </div>
                          
                          <p className={`text-gray-700 text-xs font-bold leading-relaxed transition-colors duration-300 ${
                            isHovered ? 'text-gray-900' : ''
                          }`}>
                            {item.text}
                          </p>
                        </div>

                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${currentTab.color} rounded-b-2xl transform origin-left transition-transform duration-500 ${
                          isHovered ? 'scale-x-100' : 'scale-x-0'
                        }`}></div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="flex justify-center mt-10 gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="group relative"
            >
              <div className={`transition-all duration-500 rounded-full ${
                activeTab === tab.id 
                  ? 'w-16 h-3' 
                  : 'w-3 h-3 group-hover:w-8'
              }`}>
                <div className={`w-full h-full rounded-full bg-gradient-to-r ${tab.color} shadow-lg ${
                  activeTab === tab.id ? 'opacity-100' : 'opacity-30 group-hover:opacity-70'
                } transition-all duration-500`}></div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}