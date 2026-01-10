'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Home, Sparkles, Menu, X } from 'lucide-react';
import dynamic from "next/dynamic";

export default function SidebarMenu() {
  const [expandedParent, setExpandedParent] = useState('transmission');
  const [activeItem, setActiveItem] = useState('design-engineering');
  const [currentPage, setCurrentPage] = useState('design-engineering');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const TowerTestingLayout = dynamic(
    () => import("@/components/ElectricPower/Transmission/TowerTestingLayout"),
    { ssr: false }
  );
  const ElectricalTestingLayout = dynamic(
    () => import("@/components/ElectricPower/Transmission/ElectricalTestingLayout"),
    { ssr: false }
  );
  const DesignLayout = dynamic(
    () => import("@/components/ElectricPower/Transmission/DesignLayout"),
    { ssr: false }
  );

  const menuData = [
    {
      id: 'transmission',
      title: 'Transmission and Distribution',
      heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=400&fit=crop',
      children: [
        { 
          id: 'design-engineering', 
          title: 'Design and engineering',
          url: '/transmission/design-engineering'
        },
        { 
          id: 'tower-testing', 
          title: 'Tower Testing',
          url: '/transmission/tower-testing'
        },
        { 
          id: 'electrical-testing', 
          title: 'Electrical Testing',
          url: '/transmission/electrical-testing'
        },
        { 
          id: 'type-testing', 
          title: 'Type Testing',
          url: '/transmission/type-testing'
        }
      ]
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing and Operations',
      heroImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=400&fit=crop',
      children: [
        { 
          id: 'failure-analysis', 
          title: 'Failure/root cause analysis',
          url: '/manufacturing/failure-analysis'
        },
        { 
          id: 'quality-controls', 
          title: 'Quality Controls',
          url: '/manufacturing/quality-controls'
        },
        { 
          id: 'operational-resilience', 
          title: 'Operational Resilience',
          url: '/manufacturing/operational-resilience'
        }
      ]
    },
    {
      id: 'strategic',
      title: 'Strategic Project Management',
      heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=400&fit=crop',
      children: [
        { 
          id: 'material-sourcing', 
          title: 'Material Sourcing',
          url: '/strategic/material-sourcing'
        },
        { 
          id: 'yard-management', 
          title: 'Yard Management',
          url: '/strategic/yard-management'
        },
        { 
          id: 'inventory-reporting', 
          title: 'INVENTORY REPORTING',
          url: '/strategic/inventory-reporting'
        }
      ]
    },
    {
      id: 'constructability',
      title: 'Constructability Review',
      heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=400&fit=crop',
      children: [
        { 
          id: 'logistic-construction', 
          title: 'Logistic and Construction Support',
          url: '/constructability/logistic-construction'
        }
      ]
    },
    {
      id: 'resiliency',
      title: 'Resiliency Planning',
      heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=400&fit=crop',
      children: [
        { 
          id: 'grid-hardening', 
          title: 'Grid Hardening',
          url: '/resiliency/grid-hardening'
        },
        { 
          id: 'substation-hardening', 
          title: 'Substation Hardening',
          url: '/resiliency/substation-hardening'
        },
        { 
          id: 'distribution-hardening', 
          title: 'Distribution Line Hardening',
          url: '/resiliency/distribution-hardening'
        }
      ]
    }
  ];

  const toggleExpand = (itemId) => {
    if (expandedParent === itemId) {
      setExpandedParent(null);
    } else {
      setExpandedParent(itemId);
    }
  };

  const handleItemClick = (itemId, parentId, url) => {
    setActiveItem(itemId);
    setExpandedParent(parentId);
    setCurrentPage(itemId);
    
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
    
    window.history.pushState({}, '', url);
  };

  const currentParent = menuData.find(p => p.children.some(c => c.id === activeItem));
  const currentChild = currentParent?.children.find(c => c.id === activeItem);

  const getPageContent = () => {
    const contentData = {
      'design-engineering': {
        layout: <DesignLayout />
      },
      'tower-testing': {
        layout: <TowerTestingLayout />
      },
      'electrical-testing': {
        layout: <ElectricalTestingLayout />
      },
    };

    return contentData[currentPage] || contentData['design-engineering'];
  };

  const pageContent = getPageContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-white rounded-lg shadow-lg border border-gray-200"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Hero/Title Section - Full Width */}
     <div className="relative bg-[#0B1931] overflow-hidden" style={{ height: '370px' }}>
        {/* Power Poles and Towers Elements */}
        <div className="absolute inset-0 opacity-15">
          {/* Transmission Tower 1 - Left */}
          <div className="absolute left-16 top-20">
            <div className="relative w-8 h-48">
              {/* Tower Main Pole */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-red-600"></div>
              {/* Cross Arms */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-600"></div>
              <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-600"></div>
              <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-600"></div>
              {/* Support Lines */}
              <div className="absolute top-16 left-1/2 w-10 h-32 border-l-2 border-red-600 transform -translate-x-8 rotate-12"></div>
              <div className="absolute top-16 right-1/2 w-10 h-32 border-r-2 border-red-600 transform translate-x-8 -rotate-12"></div>
            </div>
          </div>

          {/* Transmission Tower 2 - Right */}
          <div className="absolute right-20 top-24">
            <div className="relative w-8 h-52">
              {/* Tower Main Pole */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-red-600"></div>
              {/* Cross Arms */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600"></div>
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-18 h-1 bg-red-600"></div>
              <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-red-600"></div>
              {/* Support Lines */}
              <div className="absolute top-20 left-1/2 w-12 h-32 border-l-2 border-red-600 transform -translate-x-10 rotate-12"></div>
              <div className="absolute top-20 right-1/2 w-12 h-32 border-r-2 border-red-600 transform translate-x-10 -rotate-12"></div>
            </div>
          </div>

          {/* Electric Pole 1 - Center Left */}
          <div className="absolute left-1/3 top-32">
            <div className="relative w-6 h-40">
              {/* Pole */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-red-600"></div>
              {/* Top Insulators */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-600"></div>
              <div className="absolute top-8 -left-4 w-2 h-2 rounded-full bg-red-600"></div>
              <div className="absolute top-8 -right-4 w-2 h-2 rounded-full bg-red-600"></div>
            </div>
          </div>

          {/* Electric Pole 2 - Center Right */}
          <div className="absolute right-1/3 top-28">
            <div className="relative w-6 h-36">
              {/* Pole */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-red-600"></div>
              {/* Top Insulators */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-red-600"></div>
              <div className="absolute top-6 -left-3 w-2 h-2 rounded-full bg-red-600"></div>
              <div className="absolute top-6 -right-3 w-2 h-2 rounded-full bg-red-600"></div>
            </div>
          </div>

          {/* Power Lines connecting structures */}
          <div className="absolute top-36 left-20 right-24 h-0.5 bg-red-500"></div>
          <div className="absolute top-48 left-20 right-24 h-0.5 bg-red-500"></div>
          <div className="absolute top-60 left-20 right-24 h-0.5 bg-red-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-5">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {currentParent?.title.toUpperCase() || 'ELECTRIC POWER SOLUTIONS'}
            </h1>
            
            <nav className="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <Home className="w-4 h-4 text-[#DC2626]" />
              <ChevronRight className="w-4 h-4" />
              <a className="hover:text-white transition-colors">Electric Power</a>
              <ChevronRight className="w-4 h-4" />
              {currentParent && (
              <span className="hover:text-white transition-colors">{currentParent.title}</span>
                )}
              <ChevronRight className="w-4 h-4" />
                 {currentParent && (
              <span className="text-white font-semibold"> {currentChild.title}</span>
                )}
            </nav>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#DC2626]"></div>
      </div>

      {/* Main Layout - Sidebar + Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - Mobile Overlay, Desktop Normal */}
        <div className={`${isMobileMenuOpen ? 'fixed inset-0 z-40 bg-black/50' : 'hidden'} lg:block`}>
          <aside className={`w-full lg:w-80 bg-white h-full lg:h-auto lg:min-h-screen lg:sticky lg:top-0 ${isMobileMenuOpen ? 'fixed left-0 top-0 h-full z-50 overflow-y-auto w-4/5 max-w-sm' : ''}`}>
            {/* Mobile Close Button */}
            {isMobileMenuOpen && (
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="lg:hidden absolute top-4 right-4 z-50 p-2 bg-white rounded-lg shadow"
              >
                <X size={20} />
              </button>
            )}
            
            <nav className="py-2 sm:py-4">
              {menuData.map((parent) => (
                <div key={parent.id} className="mb-2">
                  <div 
                    onClick={() => toggleExpand(parent.id)}
                    className={`flex items-center px-4 sm:px-6 py-3 sm:py-4 cursor-pointer transition-all duration-200 border-l-4 ${
                      expandedParent === parent.id
                        ? 'bg-indigo-50 border-indigo-600 font-semibold shadow-sm'
                        : 'border-transparent hover:bg-gray-100 hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <span className={`mr-2 sm:mr-3 transition-all duration-200 ${
                      expandedParent === parent.id ? 'text-indigo-600' : 'text-gray-400 hover:text-indigo-500'
                    }`}>
                      {expandedParent === parent.id ? (
                        <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px]" />
                      ) : (
                        <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                      )}
                    </span>
                    <span className={`text-sm sm:text-[15px] transition-colors duration-200 ${
                      expandedParent === parent.id ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
                    }`}>
                      {parent.title}
                    </span>
                  </div>

                  {expandedParent === parent.id && (
                    <div className="bg-gray-50 border-l-2 border-gray-200 ml-4 sm:ml-6">
                      {parent.children.map((child) => (
                        <div
                          key={child.id}
                          onClick={() => handleItemClick(child.id, parent.id, child.url)}
                          className={`flex items-center px-4 sm:px-6 py-2.5 sm:py-3.5 pl-8 sm:pl-10 cursor-pointer transition-all duration-200 border-l-4 relative ${
                            activeItem === child.id
                              ? 'bg-blue-50 border-blue-600 font-semibold shadow-sm'
                              : 'border-transparent hover:bg-blue-50/70 hover:border-blue-300 hover:pl-9 sm:hover:pl-11'
                          }`}
                        >
                          <span 
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3 transition-all duration-200 ${
                              activeItem === child.id ? 'bg-blue-600 scale-125' : 'bg-gray-400 hover:bg-blue-500'
                            }`}
                          />
                          <span 
                            className={`text-xs sm:text-sm transition-colors duration-200 ${
                              activeItem === child.id ? 'text-blue-900' : 'text-gray-700 hover:text-blue-800'
                            }`}
                          >
                            {child.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50 mt-4 sm:mt-8">
              <button 
                onClick={() => {
                  setExpandedParent(null);
                  if (isMobile) setIsMobileMenuOpen(false);
                }}
                className="w-full py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-700 text-xs sm:text-sm font-medium hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                Collapse All
              </button>
            </div>
          </aside>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Animated Background Pattern */}
          <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(79, 70, 229) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Main Content Card */}
          <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100 overflow-hidden mb-6 sm:mb-8 hover:shadow-xl sm:hover:shadow-2xl transition-shadow duration-300">
            <div className="h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
            
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-50" />
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-indigo-50 to-transparent rounded-tr-full opacity-50" />

            <div className="relative p-4 sm:p-6 md:p-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30 rounded-lg sm:rounded-xl opacity-40" />
                
                <div className="relative">
                  {pageContent?.layout || (
                    <div className="text-center py-8 sm:py-12 md:py-16">
                      <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-4 sm:mb-6 shadow-lg">
                        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-indigo-600" />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                        Content Loading
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-md mx-auto">
                        Please select a section from the sidebar to view detailed information and services.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="h-2 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20" />
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8">
            {[
              { title: 'Quick Access', desc: 'Navigate through sections', color: 'blue' },
              { title: 'Detailed Info', desc: 'Comprehensive solutions', color: 'indigo' },
              { title: 'Expert Support', desc: '24/7 assistance available', color: 'purple' }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-sm sm:shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-${card.color}-100 to-${card.color}-200 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-${card.color}-600 rounded-full`} />
                </div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1 sm:mb-2">{card.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}