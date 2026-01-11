'use client';
import React, { useState } from 'react';
import { Users, Target, Recycle, CloudRain, Leaf, Award, Shield, Lightbulb, CheckCircle } from 'lucide-react';

export default function PremiumTabsSection() {
  const [activeTab, setActiveTab] = useState('quality-of-life');

  const tabs = [
    { id: 'quality-of-life', label: 'Quality of Life', icon: Users, color: '#101631' },
    { id: 'leadership', label: 'Leadership', icon: Award, color: '#CD091B' },
    { id: 'resource-allocation', label: 'Resource Allocation', icon: Recycle, color: '#101631' },
    { id: 'climate-and-resilience', label: 'Climate and Resilience', icon: CloudRain, color: '#CD091B' },
    { id: 'natural-world', label: 'Natural World', icon: Leaf, color: '#101631' }
  ];

  const tabContent = {
    'quality-of-life': {
      title: 'QUALITY OF LIFE',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/image-19-1024x791.webp',
      items: [
        'Improve Community Quality of Life',
        'Enhance Public Health & Safety',
        'Improve Construction Safety',
        'Minimize Noise & Vibration',
        'Minimize Light Pollution',
        'Minimize Construction Impacts',
        'Improve Community Mobility Access',
        'Encourage Sustainable Transportation',
        'Improve Access & Wayfinding',
        'Advance Equity & Social Justice',
        'Preserve Historic & Cultural Resources',
        'Enhance Views & Local Character',
        'Enhance Public Space & Amenities'
      ]
    },
    'leadership': {
      title: 'LEADERSHIP',
      image: null,
      items: [
        'Provide Effective Leadership & Commitment',
        'Foster Collaboration & Teamwork',
        'Provide for Stakeholder Involvement',
        'Pursue Byproduct Synergies',
        'Establish a Sustainability Management Plan',
        'Plan for Sustainable Communities',
        'Plan for Long-Term Monitoring & Maintenance',
        'Plan for End-of-Life',
        'Stimulate Economic Prosperity & Development',
        'Develop Local Skills & Capabilities',
        'Conduct a Life-Cycle Economic Evaluation'
      ]
    },
    'resource-allocation': {
      title: 'RESOURCE ALLOCATION',
      image: null,
      items: [
        'Support Sustainable Procurement Practices',
        'Use Recycled Materials',
        'Reduce Operational Waste',
        'Reduce Construction Waste',
        'Balance Earthwork On Site',
        'Reduce Operational Energy Consumption',
        'Reduce Construction Energy Consumption',
        'Use Renewable Energy'
      ]
    },
    'climate-and-resilience': {
      title: 'CLIMATE AND RESILIENCE',
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/7004881064_3cf4c1b1af_k.png',
      items: [
        'Reduce Greenhouse Gas Emissions',
        'Reduce Air Pollutant Emissions',
        'Avoid Unsuitable Development',
        'Assess Climate Change Vulnerability',
        'Evaluate Risk and Resilience',
        'Establish Resilience Goals and Strategies'
      ]
    },
    'natural-world': {
      title: 'NATURAL WORLD',
      image: null,
      items: [
        'Preserve Prime Habitat',
        'Protect Wetlands and Surface Water',
        'Preserve Prime Farmland',
        'Avoid Adverse Geology',
        'Preserve Floodplain Functions',
        'Avoid Unsuitable Development on Steep Slopes',
        'Preserve Greenfields',
        'Manage Stormwater',
        'Reduce Pesticide and Fertilizer Impacts',
        'Prevent Surface and Groundwater Contamination',
        'Preserve Species Biodiversity',
        'Control Invasive Species',
        'Restore Disturbed Soils',
        'Maintain Wetland and Surface Water Functions'
      ]
    }
  };

  const currentContent = tabContent[activeTab];
  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <div className="py-12 md:py-20 px-4 relative overflow-hidden bg-gray-50">
      
      {/* Clean Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #101631 1px, transparent 1px), linear-gradient(to bottom, #101631 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Engineering Decorations */}
      <div className="absolute top-20 left-10 opacity-[0.04]">
        <svg width="80" height="160" viewBox="0 0 80 160">
          <line x1="40" y1="10" x2="40" y2="150" stroke="#101631" strokeWidth="3"/>
          <line x1="20" y1="40" x2="60" y2="40" stroke="#101631" strokeWidth="2"/>
          <line x1="15" y1="80" x2="65" y2="80" stroke="#101631" strokeWidth="2"/>
          <circle cx="40" cy="10" r="4" fill="#CD091B"/>
        </svg>
      </div>

      <div className="absolute bottom-20 right-10 opacity-[0.04]">
        <svg width="80" height="160" viewBox="0 0 80 160">
          <line x1="40" y1="10" x2="40" y2="150" stroke="#CD091B" strokeWidth="3"/>
          <line x1="20" y1="50" x2="60" y2="50" stroke="#CD091B" strokeWidth="2"/>
          <line x1="15" y1="100" x2="65" y2="100" stroke="#CD091B" strokeWidth="2"/>
          <circle cx="40" cy="10" r="4" fill="#101631"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Clean Tabs Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-6 py-4 border-2 font-semibold text-sm transition-all duration-300 ${
                    isActive
                      ? 'text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                  }`}
                  style={{
                    backgroundColor: isActive ? tab.color : 'white',
                    borderColor: isActive ? tab.color : undefined
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Progress Bar */}
          <div className="relative h-1 w-full mt-6 bg-gray-200">
            <div 
              className="absolute h-full transition-all duration-500"
              style={{
                backgroundColor: currentTab.color,
                width: `${100 / tabs.length}%`,
                left: `${(tabs.findIndex(t => t.id === activeTab) / tabs.length) * 100}%`
              }}
            ></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white border-2 border-gray-200 shadow-lg">
          
          {/* Title Bar */}
          <div className="p-6 md:p-8 border-b-4" style={{ borderColor: currentTab.color }}>
            <div className="flex items-center gap-4">
              {React.createElement(currentTab.icon, { 
                className: 'w-10 h-10',
                style: { color: currentTab.color }
              })}
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: currentTab.color }}>
                {currentContent.title}
              </h2>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Image Section */}
              {currentContent.image && (
                <div className="lg:col-span-5">
                  <div className="border-4 border-gray-200 overflow-hidden">
                    <img 
                      src={currentContent.image} 
                      alt={currentContent.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* List Section */}
              <div className={currentContent.image ? 'lg:col-span-7' : 'lg:col-span-12'}>
                <div className={`grid ${currentContent.image ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-4`}>
                  {currentContent.items.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 hover:bg-white transition-all duration-300"
                      style={{ borderColor: currentTab.color }}
                    >
                      <CheckCircle 
                        className="w-5 h-5 flex-shrink-0 mt-0.5" 
                        style={{ color: currentTab.color }}
                      />
                      <p className="text-gray-700 text-sm leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Clean Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="transition-all duration-300"
              style={{
                width: activeTab === tab.id ? '32px' : '8px',
                height: '8px',
                backgroundColor: activeTab === tab.id ? tab.color : '#d1d5db',
                opacity: activeTab === tab.id ? 1 : 0.5
              }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}