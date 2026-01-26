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
    <div className="min-h-screen bg-white">
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
     <div className="relative overflow-hidden h-[300px]">
  {/* Background Image - Page Related */}
  <div className="absolute inset-0">
    <img 
      src="/images/home/services/15.jpeg" 
      alt="Electric Power Background"
      className="w-full h-full object-cover"
    />
    {/* Enhanced Gradient Overlay - Better readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
    
    {/* Subtle Pattern Overlay for depth */}
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)
        `
      }}
    ></div>
  </div>

  {/* Content Area */}
  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-8">
    {/* Page Title */}
    <div className="mb-5">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight drop-shadow-lg">
        {currentParent?.title.toUpperCase() || 'ELECTRIC POWER SOLUTIONS'}
      </h1>
      {/* Elegant Underline */}
      <div className="flex items-center gap-2">
        <div className="h-[3px] w-16 bg-[#cd091b] rounded-full"></div>
        <div className="h-[2px] w-8 bg-[#cd091b]/60 rounded-full"></div>
        <div className="h-[2px] w-4 bg-[#cd091b]/40 rounded-full"></div>
      </div>
    </div>
    
    {/* Simple Breadcrumb Navigation - No Boxes */}
    <nav className="flex items-center flex-wrap gap-2 text-sm">
      {/* Home Link with Icon */}
      <a 
        href="/" 
        className="group flex items-center gap-1.5 text-white/70 hover:text-white transition-colors duration-300"
      >
        <Home className="w-4 h-4" />
        <span className="font-medium">Home</span>
      </a>

      {/* Separator */}
      <ChevronRight className="w-4 h-4 text-white/50" />

      {/* Electric Power Link */}
      <a 
        href="/electric-power" 
        className="text-white/70 hover:text-white transition-colors duration-300 font-medium"
      >
        Electric Power
      </a>

      {/* Current Parent */}
      {currentParent && (
        <>
          <ChevronRight className="w-4 h-4 text-white/50" />
          <a 
            href="#" 
            className="text-white/70 hover:text-white transition-colors duration-300 font-medium"
          >
            {currentParent.title}
          </a>
        </>
      )}

      {/* Current Child (Active Page) */}
      {currentChild && (
        <>
          <ChevronRight className="w-4 h-4 text-white/50" />
          <span className="text-[#cd091b] font-semibold">
            {currentChild.title}
          </span>
        </>
      )}
    </nav>
  </div>

  {/* Bottom Accent Line - Subtle */}
  <div className="absolute bottom-0 left-0 w-full h-[2px]">
    <div className="h-full w-full bg-gradient-to-r from-transparent via-[#cd091b]/80 to-transparent"></div>
  </div>
</div>

      {/* Sidebar + Content */}
      <div className="max-w-7_5xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Mobile Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          {/* Sidebar - Transmission Tower Design */}
          <aside className={`
            w-full lg:w-80 bg-gradient-to-b from-gray-50 to-white lg:sticky lg:top-0 h-full lg:min-h-screen
            ${isMobileMenuOpen ? 'fixed left-0 top-0 z-40 w-4/5 max-w-sm shadow-2xl' : 'hidden lg:block'}
            border-r border-gray-200
          `}>
            <nav className="py-8 px-6 relative">
              {/* Central Tower Pole */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>
              
              {menuData.map((parent, idx) => {
                const isExpanded = expandedParent === parent.id;
                const hasActiveChild = parent.children.some(c => c.id === activeItem);
                const totalParents = menuData.length;
                const verticalPosition = (idx / (totalParents - 1)) * 100;
                
                return (
                  <div key={parent.id} className="mb-6 relative">
                    {/* Connection Point on Tower (Insulator) */}
                    <div className="absolute left-2 top-5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full shadow-md z-20"></div>
                    
                    {/* Horizontal Beam from Tower */}
                    <div className={`absolute left-5 top-6 w-6 h-0.5 bg-gray-400 transition-all duration-300 ${isExpanded ? 'bg-gray-600' : ''}`}></div>

                    {/* Parent Menu Item (Transformer Box) */}
                    <div 
                      onClick={() => setExpandedParent(isExpanded ? '' : parent.id)}
                      className={`
                        relative ml-11 group flex items-center justify-between px-4 py-3.5 cursor-pointer
                        transition-all duration-300 ease-out rounded-lg border-2
                        ${isExpanded || hasActiveChild
                          ? 'border-gray-300 text-gray-900 shadow-xl' 
                          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'
                        }
                      `}
                      style={isExpanded || hasActiveChild ? {backgroundColor: '#F3F3F3'} : {}}
                    >
                      <span className="text-sm font-semibold flex-1">{parent.title}</span>
                      
                      <span className={`
                        transition-all duration-300
                        ${isExpanded || hasActiveChild ? 'text-gray-900' : 'text-gray-400'}
                      `}>
                        <ChevronDown size={18} className={`transition-transform duration-300 ${isExpanded ? '' : '-rotate-90'}`} />
                      </span>
                    </div>

                    {/* Child Menu Items (Power Lines Distribution) */}
                    {isExpanded && (
                      <div className="mt-3 relative">
                        {/* Vertical distribution line from transformer */}
                        <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-gray-400 via-gray-300 to-transparent"></div>
                        
                        {parent.children.map((child, childIdx) => {
                          const isActive = activeItem === child.id;
                          const isLast = childIdx === parent.children.length - 1;
                          
                          return (
                            <div
                              key={child.id}
                              className="relative ml-11 mb-2"
                            >
                              {/* Power Line from Distribution Pole */}
                              <div className={`
                                absolute left-5 top-1/2 w-4 h-px transition-all duration-300
                                ${isActive ? 'bg-gray-600 w-5' : 'bg-gray-300'}
                              `}></div>
                              
                              {/* Connection Node (Small Insulator) */}
                              <div className={`
                                absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300
                                ${isActive 
                                  ? 'bg-gray-800 ring-4 ring-gray-300 scale-125' 
                                  : 'bg-gray-400 ring-2 ring-gray-200'
                                }
                              `}></div>

                              {/* Menu Item (End Point Device) */}
                              <div
                                onClick={() => {
                                  router.push(child.url);
                                  if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                                }}
                                className={`
                                  relative flex items-center px-4 py-3 ml-9 cursor-pointer
                                  transition-all duration-300 ease-out rounded-lg border
                                  ${isActive
                                    ? 'bg-gradient-to-r from-gray-100 to-white border-gray-400 text-gray-900 font-semibold shadow-lg'
                                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md'
                                  }
                                `}
                              >
                                <span className="text-sm">{child.title}</span>
                                
                                {/* Active Power Indicator */}
                                {isActive && (
                                  <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
                                    <div className="absolute inset-0 w-2 h-2 bg-gray-600 rounded-full animate-ping"></div>
                                  </div>
                                )}

                                {/* Power Line to Content */}
                                {isActive && (
                                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                                    <div className="w-8 h-px bg-gradient-to-r from-gray-400 to-gray-300"></div>
                                    <div className="w-1.5 h-1.5 rotate-45 bg-gray-400 -ml-0.5"></div>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Tower Base Foundation */}
              <div className="absolute left-4 bottom-8 w-9 h-12 bg-gradient-to-b from-gray-400 to-gray-500 opacity-30" 
                   style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)'}}></div>
            </nav>
          </aside>

          {/* Content Area */}
          <main className="flex-1 p-4 bg-white min-h-screen">
            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
              <div className="h-0.5 bg-brand-gray" />
              <div className="p-8">
                {children}
              </div>
              <div className="h-2 bg-gray-100" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}