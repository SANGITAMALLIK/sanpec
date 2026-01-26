'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Home } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const menuData = [
  {
    id: 'transmission',
    title: 'Transmission and Distribution',
    children: [
      { 
        id: 'design-engineering', 
        title: 'Design and engineering',
        url: '/electric-power/transmisson/design-and-engineering'
      },
      { 
        id: 'tower-testing', 
        title: 'Tower Testing',
        url: '/electric-power/transmisson/tower-testing'
      },
      { 
        id: 'electrical-testing', 
        title: 'Electrical Testing',
        url: '/electric-power/transmisson/electrical-testing'
      },
      { 
        id: 'type-testing', 
        title: 'Type Testing',
        url: '/electric-power/transmisson/type-testing'
      }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing and Operations',
    children: [
      { 
        id: 'failure-analysis', 
        title: 'Failure/root cause analysis',
        url: '/electric-power/manufacturing/failure-analysis'
      },
      { 
        id: 'quality-controls', 
        title: 'Quality Controls',
        url: '/electric-power/manufacturing/quality-controls'
      },
      { 
        id: 'operational-resilience', 
        title: 'Operational Resilience',
        url: '/electric-power/manufacturing/operational-resilience'
      }
    ]
  },
  {
    id: 'strategic',
    title: 'Strategic Project Management',
    children: [
      { 
        id: 'material-sourcing', 
        title: 'Material Sourcing',
        url: '/electric-power/strategic/material-sourcing'
      },
      { 
        id: 'yard-management', 
        title: 'Yard Management',
        url: '/electric-power/strategic/yard-management'
      },
      { 
        id: 'inventory-reporting', 
        title: 'Inventory Reporting',
        url: '/electric-power/strategic/inventory-reporting'
      }
    ]
  },
  {
    id: 'constructability',
    title: 'Constructability Review',
    children: [
      { 
        id: 'logistic-construction', 
        title: 'Logistic and Construction Support',
        url: '/electric-power/constructability/logistic-construction'
      }
    ]
  },
  {
    id: 'resiliency',
    title: 'Resiliency Planning',
    children: [
      { 
        id: 'grid-hardening', 
        title: 'Grid Hardening',
        url: '/electric-power/resiliency/grid-hardening'
      },
      { 
        id: 'substation-hardening', 
        title: 'Substation Hardening',
        url: '/electric-power/resiliency/substation-hardening'
      },
      { 
        id: 'distribution-hardening', 
        title: 'Distribution Line Hardening',
        url: '/electric-power/resiliency/distribution-hardening'
      }
    ]
  }
];

export default function ElectricPowerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  
  const [expandedParent, setExpandedParent] = useState('transmission');
  const [activeItem, setActiveItem] = useState('design-engineering');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    menuData.forEach(parent => {
      parent.children.forEach(child => {
        if (pathname === child.url) {
          setActiveItem(child.id);
          setExpandedParent(parent.id);
        }
      });
    });
  }, [pathname]);

  const currentParent = menuData.find(p => p.children.some(c => c.id === activeItem));
  const currentChild = currentParent?.children.find(c => c.id === activeItem);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-24 left-4 z-30 p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Menu size={24} className="text-white" />
        )}
      </button>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden h-[370px] shadow-2xl">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>

        {/* Power tower decorations */}
        <div className="absolute inset-0 opacity-8">
          {/* Transmission Tower 1 - Left */}
          <div className="absolute left-16 top-20">
            <div className="relative w-8 h-48">
              <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full bg-white"></div>
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-20 h-1 bg-white"></div>
              <div className="absolute top-28 left-1/2 -translate-x-1/2 w-16 h-1 bg-white"></div>
              <div className="absolute top-40 left-1/2 -translate-x-1/2 w-12 h-1 bg-white"></div>
              <div className="absolute top-16 left-1/2 w-10 h-32 border-l-2 border-white -translate-x-8 rotate-12"></div>
              <div className="absolute top-16 right-1/2 w-10 h-32 border-r-2 border-white translate-x-8 -rotate-12"></div>
            </div>
          </div>

          {/* Transmission Tower 2 - Right */}
          <div className="absolute right-20 top-24">
            <div className="relative w-8 h-52">
              <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full bg-white"></div>
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-1 bg-white"></div>
              <div className="absolute top-32 left-1/2 -translate-x-1/2 w-18 h-1 bg-white"></div>
              <div className="absolute top-44 left-1/2 -translate-x-1/2 w-14 h-1 bg-white"></div>
              <div className="absolute top-20 left-1/2 w-12 h-32 border-l-2 border-white -translate-x-10 rotate-12"></div>
              <div className="absolute top-20 right-1/2 w-12 h-32 border-r-2 border-white translate-x-10 -rotate-12"></div>
            </div>
          </div>

          {/* Electric Pole 1 - Center Left */}
          <div className="absolute left-1/3 top-32">
            <div className="relative w-6 h-40">
              <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full bg-white"></div>
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-1 bg-white"></div>
              <div className="absolute top-8 -left-4 w-2 h-2 rounded-full bg-white"></div>
              <div className="absolute top-8 -right-4 w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>

          {/* Electric Pole 2 - Center Right */}
          <div className="absolute right-1/3 top-28">
            <div className="relative w-6 h-36">
              <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full bg-white"></div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-1 bg-white"></div>
              <div className="absolute top-6 -left-3 w-2 h-2 rounded-full bg-white"></div>
              <div className="absolute top-6 -right-3 w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>

          {/* Power Lines */}
          <div className="absolute top-36 left-20 right-24 h-0.5 bg-white"></div>
          <div className="absolute top-48 left-20 right-24 h-0.5 bg-white"></div>
          <div className="absolute top-60 left-20 right-24 h-0.5 bg-white"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            {currentParent?.title.toUpperCase() || 'ELECTRIC POWER SOLUTIONS'}
          </h1>
          
          <nav className="flex items-center gap-2 text-gray-400 text-sm">
            <Home className="w-4 h-4 text-gray-300" />
            <ChevronRight className="w-4 h-4" />
            <span>Electric Power</span>
            <ChevronRight className="w-4 h-4" />
            {currentParent && <span>{currentParent.title}</span>}
            <ChevronRight className="w-4 h-4" />
            {currentChild && <span className="text-white">{currentChild.title}</span>}
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>

      {/* Sidebar + Content with max-w-7xl */}
      <div className="max-w-7_5xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Mobile Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside className={`
            w-full lg:w-80 bg-white lg:sticky lg:top-0 h-full lg:min-h-screen
            ${isMobileMenuOpen ? 'fixed left-0 top-0 z-40 w-4/5 max-w-sm shadow-2xl' : 'hidden lg:block'}
            border-r border-gray-200 shadow-lg
          `}>
            <div className="h-full bg-gradient-to-b from-white to-gray-50">
              <nav className="py-8 px-3">
                {menuData.map((parent, idx) => {
                  const isExpanded = expandedParent === parent.id;
                  const hasActiveChild = parent.children.some(c => c.id === activeItem);
                  
                  return (
                    <div key={parent.id} className="mb-2">
                      {/* Parent Menu Item */}
                      <div 
                        onClick={() => setExpandedParent(isExpanded ? '' : parent.id)}
                        className={`
                          group relative flex items-center justify-between px-4 py-4 cursor-pointer
                          transition-all duration-300 ease-out rounded-xl
                          ${isExpanded || hasActiveChild
                            ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl scale-[1.02] -mx-1' 
                            : 'text-gray-700 hover:bg-gray-100 hover:shadow-md hover:scale-[1.01]'
                          }
                        `}
                      >
                        {/* Number indicator */}
                        <div className={`
                          flex items-center justify-center w-7 h-7 rounded-lg mr-3 flex-shrink-0
                          transition-all duration-300
                          ${isExpanded || hasActiveChild
                            ? 'bg-white text-gray-900 font-bold shadow-md' 
                            : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                          }
                        `}>
                          <span className="text-xs">{idx + 1}</span>
                        </div>
                        
                        <span className="text-sm font-semibold flex-1 tracking-wide">{parent.title}</span>
                        
                        <span className={`
                          transition-all duration-300
                          ${isExpanded || hasActiveChild ? 'text-white rotate-0' : 'text-gray-400 group-hover:text-gray-600 -rotate-90'}
                        `}>
                          <ChevronDown size={18} className={`transition-transform duration-300 ${isExpanded ? '' : '-rotate-90'}`} />
                        </span>

                        {/* Active indicator line */}
                        {(isExpanded || hasActiveChild) && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-300 via-white to-gray-300 rounded-r-full" />
                        )}
                      </div>

                      {/* Child Menu Items */}
                      {isExpanded && (
                        <div className="mt-2 ml-3 space-y-1 relative">
                          {/* Vertical connector line */}
                          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent" />
                          
                          {parent.children.map((child, childIdx) => {
                            const isActive = activeItem === child.id;
                            
                            return (
                              <div
                                key={child.id}
                                onClick={() => {
                                  router.push(child.url);
                                  if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                                }}
                                className={`
                                  relative flex items-center px-4 py-3.5 ml-6 cursor-pointer
                                  transition-all duration-300 ease-out rounded-r-xl group
                                  ${isActive
                                    ? 'bg-gradient-to-r from-gray-100 via-gray-50 to-transparent text-gray-900 font-semibold shadow-md mr-0'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 mr-3'
                                  }
                                `}
                              >
                                {/* Horizontal connector to vertical line */}
                                <div className={`
                                  absolute left-0 top-1/2 -translate-y-1/2 h-px transition-all duration-300
                                  ${isActive ? 'w-4 bg-gray-400' : 'w-3 bg-gray-300'}
                                `} />
                                
                                {/* Circle indicator */}
                                <div className={`
                                  w-2 h-2 rounded-full mr-3 flex-shrink-0 transition-all duration-300 relative z-10
                                  ${isActive 
                                    ? 'bg-gradient-to-br from-gray-700 to-gray-900 shadow-lg scale-150 ring-4 ring-gray-200' 
                                    : 'bg-gray-300 group-hover:bg-gray-400 group-hover:scale-125'
                                  }
                                `} />
                                
                                <span className="text-sm leading-tight">{child.title}</span>
                                
                                {/* Right arrow connector to content - only for active */}
                                {isActive && (
                                  <>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                                      <div className="w-6 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400" />
                                      <div className="w-2 h-2 rotate-45 bg-gray-300 -ml-1" />
                                    </div>
                                  </>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <main className="flex-1 p-6 min-h-screen">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden backdrop-blur-sm">
              <div className="h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300" />
              <div className="p-8 lg:p-10">
                {children}
              </div>
              <div className="h-2 bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}