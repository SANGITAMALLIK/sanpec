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
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-24 left-4 z-30 p-3 bg-navy rounded-lg shadow-md"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Menu size={24} className="text-white" />
        )}
      </button>

      {/* Hero Section */}
      <div className="relative bg-navy overflow-hidden h-[370px]">
        {/* Power tower decorations */}
        <div className="absolute inset-0 opacity-10">
          {/* Transmission Tower 1 - Left */}
          <div className="absolute left-16 top-20">
            <div className="relative w-8 h-48">
              <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full bg-brand-red"></div>
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-20 h-1 bg-brand-red"></div>
              <div className="absolute top-28 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-red"></div>
              <div className="absolute top-40 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand-red"></div>
              <div className="absolute top-16 left-1/2 w-10 h-32 border-l-2 border-brand-red -translate-x-8 rotate-12"></div>
              <div className="absolute top-16 right-1/2 w-10 h-32 border-r-2 border-brand-red translate-x-8 -rotate-12"></div>
            </div>
          </div>

          {/* Transmission Tower 2 - Right */}
          <div className="absolute right-20 top-24">
            <div className="relative w-8 h-52">
              <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full bg-brand-red"></div>
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-red"></div>
              <div className="absolute top-32 left-1/2 -translate-x-1/2 w-18 h-1 bg-brand-red"></div>
              <div className="absolute top-44 left-1/2 -translate-x-1/2 w-14 h-1 bg-brand-red"></div>
              <div className="absolute top-20 left-1/2 w-12 h-32 border-l-2 border-brand-red -translate-x-10 rotate-12"></div>
              <div className="absolute top-20 right-1/2 w-12 h-32 border-r-2 border-brand-red translate-x-10 -rotate-12"></div>
            </div>
          </div>

          {/* Electric Pole 1 - Center Left */}
          <div className="absolute left-1/3 top-32">
            <div className="relative w-6 h-40">
              <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full bg-brand-red"></div>
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand-red"></div>
              <div className="absolute top-8 -left-4 w-2 h-2 rounded-full bg-brand-red"></div>
              <div className="absolute top-8 -right-4 w-2 h-2 rounded-full bg-brand-red"></div>
            </div>
          </div>

          {/* Electric Pole 2 - Center Right */}
          <div className="absolute right-1/3 top-28">
            <div className="relative w-6 h-36">
              <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full bg-brand-red"></div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-1 bg-brand-red"></div>
              <div className="absolute top-6 -left-3 w-2 h-2 rounded-full bg-brand-red"></div>
              <div className="absolute top-6 -right-3 w-2 h-2 rounded-full bg-brand-red"></div>
            </div>
          </div>

          {/* Power Lines */}
          <div className="absolute top-36 left-20 right-24 h-0.5 bg-brand-red"></div>
          <div className="absolute top-48 left-20 right-24 h-0.5 bg-brand-red"></div>
          <div className="absolute top-60 left-20 right-24 h-0.5 bg-brand-red"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {currentParent?.title.toUpperCase() || 'ELECTRIC POWER SOLUTIONS'}
          </h1>
          
          <nav className="flex items-center gap-2 text-gray-400 text-sm">
            <Home className="w-4 h-4 text-brand-red" />
            <ChevronRight className="w-4 h-4" />
            <span>Electric Power</span>
            <ChevronRight className="w-4 h-4" />
            {currentParent && <span>{currentParent.title}</span>}
            <ChevronRight className="w-4 h-4" />
            {currentChild && <span className="text-white">{currentChild.title}</span>}
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-red"></div>
      </div>

      {/* Sidebar + Content with max-w-7xl */}
      <div className="max-w-7_5xl mx-auto">
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
            w-full lg:w-80 bg-white lg:sticky lg:top-0 h-full lg:min-h-screen
            ${isMobileMenuOpen ? 'fixed left-0 top-0 z-40 w-4/5 max-w-sm shadow-2xl' : 'hidden lg:block'}
          `}>
            <nav className="py-6 px-2">
              {menuData.map((parent) => {
                const isExpanded = expandedParent === parent.id;
                const hasActiveChild = parent.children.some(c => c.id === activeItem);
                
                return (
                  <div key={parent.id} className="mb-1">
                    {/* Parent Menu Item */}
                    <div 
                      onClick={() => setExpandedParent(isExpanded ? '' : parent.id)}
                      className={`
                        group flex items-center justify-between px-5 py-3.5 cursor-pointer rounded-lg mx-2
                        transition-all duration-200 ease-in-out
                        ${isExpanded || hasActiveChild
                          ? 'bg-navy text-white shadow-md' 
                          : 'text-gray-700 hover:bg-gray-50 hover:shadow-sm'
                        }
                      `}
                    >
                      <span className="text-sm font-medium flex-1">{parent.title}</span>
                      <span className={`
                        transition-transform duration-200
                        ${isExpanded || hasActiveChild ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}
                      `}>
                        {isExpanded ? (
                          <ChevronDown size={18} />
                        ) : (
                          <ChevronRight size={18} />
                        )}
                      </span>
                    </div>

                    {/* Child Menu Items */}
                    {isExpanded && (
                      <div className="mt-1 space-y-0.5">
                        {parent.children.map((child) => {
                          const isActive = activeItem === child.id;
                          
                          return (
                            <div
                              key={child.id}
                              onClick={() => {
                                router.push(child.url);
                                if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                              }}
                              className={`
                                relative flex items-center px-5 py-3 ml-6 mr-0 cursor-pointer
                                transition-all duration-200 ease-in-out
                                ${isActive
                                  ? 'text-navy font-semibold bg-gradient-to-r from-gray-50 to-transparent'
                                  : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                                }
                                rounded-l-lg
                              `}
                            >
                              {/* Left indicator line */}
                              <div className={`
                                absolute left-0 top-0 bottom-0 w-1 rounded-r-full
                                transition-all duration-200
                                ${isActive ? 'bg-navy' : 'bg-transparent'}
                              `} />
                              
                              {/* Dot indicator */}
                              <span className={`
                                w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0
                                transition-all duration-200
                                ${isActive ? 'bg-navy scale-125' : 'bg-gray-300'}
                              `} />
                              
                              <span className="text-sm">{child.title}</span>
                              
                              {/* Right connector - only visible when active */}
                              {isActive && (
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-navy" />
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
          </aside>

          {/* Content Area */}
          <main className="flex-1 p-4 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-navy via-brand-red to-navy" />
              <div className="p-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}