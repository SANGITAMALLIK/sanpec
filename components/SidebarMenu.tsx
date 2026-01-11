'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Home, Sparkles, Menu, X } from 'lucide-react';
import dynamic from "next/dynamic";
import { useRouter, usePathname } from 'next/navigation'; // YE IMPORT JARURI HAI

export default function SidebarMenu() {
  const router = useRouter(); // Router initialize
  const pathname = usePathname(); // Current URL path
  
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
          url: '/electric-tower/transmission/design-engineering'
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

  // URL se state sync karo jab page load ho
  useEffect(() => {
    if (pathname) {
      menuData.forEach(parent => {
        const matchedChild = parent.children.find(child => child.url === pathname);
        if (matchedChild) {
          setActiveItem(matchedChild.id);
          setExpandedParent(parent.id);
          setCurrentPage(matchedChild.id);
        }
      });
    }
  }, [pathname]);

  const toggleExpand = (itemId) => {
    if (expandedParent === itemId) {
      setExpandedParent(null);
    } else {
      setExpandedParent(itemId);
    }
  };

  // YE FUNCTION IMPORTANT - router.push use karo
  const handleItemClick = (itemId, parentId, url) => {
    setActiveItem(itemId);
    setExpandedParent(parentId);
    setCurrentPage(itemId);
    
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
    
    // Next.js router se navigate karo
    router.push(url);
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
    <div className="min-h-screen bg-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-24 left-4 z-30 p-3 bg-[#101631] rounded-lg shadow-md border border-gray-300 hover:bg-[#CD091B] transition-colors"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
      </button>

      {/* Hero/Title Section */}
      <div className="relative bg-[#101631] overflow-hidden" style={{ height: '370px' }}>
        <div className="absolute inset-0 opacity-10">
          {/* Tower 1 - Left */}
          <div className="absolute left-16 top-20">
            <div className="relative w-8 h-48">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-[#CD091B]"></div>
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#CD091B]"></div>
              <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#CD091B]"></div>
              <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#CD091B]"></div>
              <div className="absolute top-16 left-1/2 w-10 h-32 border-l-2 border-[#CD091B] transform -translate-x-8 rotate-12"></div>
              <div className="absolute top-16 right-1/2 w-10 h-32 border-r-2 border-[#CD091B] transform translate-x-8 -rotate-12"></div>
            </div>
          </div>

          {/* Tower 2 - Right */}
          <div className="absolute right-20 top-24">
            <div className="relative w-8 h-52">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-[#CD091B]"></div>
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#CD091B]"></div>
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-18 h-1 bg-[#CD091B]"></div>
              <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-[#CD091B]"></div>
              <div className="absolute top-20 left-1/2 w-12 h-32 border-l-2 border-[#CD091B] transform -translate-x-10 rotate-12"></div>
              <div className="absolute top-20 right-1/2 w-12 h-32 border-r-2 border-[#CD091B] transform translate-x-10 -rotate-12"></div>
            </div>
          </div>

          {/* Pole 1 - Center Left */}
          <div className="absolute left-1/3 top-32">
            <div className="relative w-6 h-40">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-[#CD091B]"></div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#CD091B]"></div>
              <div className="absolute top-8 -left-4 w-2 h-2 rounded-full bg-[#CD091B]"></div>
              <div className="absolute top-8 -right-4 w-2 h-2 rounded-full bg-[#CD091B]"></div>
            </div>
          </div>

          {/* Pole 2 - Center Right */}
          <div className="absolute right-1/3 top-28">
            <div className="relative w-6 h-36">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-[#CD091B]"></div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#CD091B]"></div>
              <div className="absolute top-6 -left-3 w-2 h-2 rounded-full bg-[#CD091B]"></div>
              <div className="absolute top-6 -right-3 w-2 h-2 rounded-full bg-[#CD091B]"></div>
            </div>
          </div>

          {/* Power Lines */}
          <div className="absolute top-36 left-20 right-24 h-0.5 bg-[#CD091B]"></div>
          <div className="absolute top-48 left-20 right-24 h-0.5 bg-[#CD091B]"></div>
          <div className="absolute top-60 left-20 right-24 h-0.5 bg-[#CD091B]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-5">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {currentParent?.title.toUpperCase() || 'ELECTRIC POWER SOLUTIONS'}
            </h1>
            
            <nav className="flex items-center gap-2 text-gray-400 text-sm font-medium flex-wrap">
              <Home className="w-4 h-4 text-[#CD091B]" />
              <ChevronRight className="w-4 h-4" />
              <a className="hover:text-white transition-colors cursor-pointer">Electric Power</a>
              <ChevronRight className="w-4 h-4" />
              {currentParent && (
                <span className="hover:text-white transition-colors">{currentParent.title}</span>
              )}
              <ChevronRight className="w-4 h-4" />
              {currentChild && (
                <span className="text-white font-semibold">{currentChild.title}</span>
              )}
            </nav>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#CD091B]"></div>
      </div>

      {/* Main Layout - Sidebar + Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          w-full lg:w-80 bg-white h-full lg:min-h-screen lg:sticky lg:top-0 shadow-lg lg:shadow-none border-r border-gray-200
          ${isMobileMenuOpen 
            ? 'fixed left-0 top-0 h-full z-40 overflow-y-auto w-4/5 max-w-sm' 
            : 'hidden lg:block'
          }
        `}>
          {isMobileMenuOpen && (
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden absolute top-4 right-4 z-50 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="Close menu"
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
                      ? 'bg-gray-50 border-[#101631] font-semibold'
                      : 'border-transparent hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <span className={`mr-2 sm:mr-3 transition-all duration-200 ${
                    expandedParent === parent.id ? 'text-[#101631]' : 'text-gray-400'
                  }`}>
                    {expandedParent === parent.id ? (
                      <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px]" />
                    ) : (
                      <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                    )}
                  </span>
                  <span className={`text-sm sm:text-[15px] transition-colors duration-200 ${
                    expandedParent === parent.id ? 'text-gray-900' : 'text-gray-700'
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
                        className={`flex items-center px-4 sm:px-6 py-2.5 sm:py-3.5 pl-8 sm:pl-10 cursor-pointer transition-all duration-200 border-l-4 ${
                          activeItem === child.id
                            ? 'bg-white border-[#101631] font-semibold'
                            : 'border-transparent hover:bg-white hover:border-gray-300'
                        }`}
                      >
                        <span 
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3 transition-all duration-200 ${
                            activeItem === child.id ? 'bg-[#101631]' : 'bg-gray-400'
                          }`}
                        />
                        <span 
                          className={`text-xs sm:text-sm transition-colors duration-200 ${
                            activeItem === child.id ? 'text-gray-900' : 'text-gray-700'
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
              className="w-full py-2.5 sm:py-3 bg-white border-2 border-[#101631] rounded-lg text-[#101631] text-xs sm:text-sm font-semibold hover:bg-[#101631] hover:text-white transition-all duration-300 hover:shadow-md"
            >
              Collapse All
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-white min-h-screen">
          <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6 sm:mb-8 hover:shadow-md transition-shadow duration-300">
            <div className="h-0.5 bg-[#CD091B]" />
            
            <div className="relative p-4 sm:p-6 md:p-8">
              <div className="relative">
                <div className="relative">
                  {pageContent?.layout || (
                    <div className="text-center py-8 sm:py-12 md:py-16">
                      <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-100 rounded-full mb-4 sm:mb-6 shadow-lg">
                        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#CD091B]" />
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

            <div className="h-2 bg-gray-100" />
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[
              { title: 'Quick Access', desc: 'Navigate through sections', color: '#101631' },
              { title: 'Detailed Info', desc: 'Comprehensive solutions', color: '#CD091B' },
              { title: 'Expert Support', desc: '24/7 assistance available', color: '#101631' }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${card.color}15` }}
                >
                  <div 
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full"
                    style={{ backgroundColor: card.color }}
                  />
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