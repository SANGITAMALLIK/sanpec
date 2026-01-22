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
        url: '/electric-power/transmisson/design-engineering'
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
        title: 'INVENTORY REPORTING',
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

  // URL se active item detect karo
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
        className="lg:hidden fixed top-24 left-4 z-30 p-3 bg-[#101631] rounded-lg shadow-md"
      >
        {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
      </button>

      {/* Hero Section */}
      <div className="relative bg-[#101631] overflow-hidden" style={{ height: '370px' }}>
        {/* Power tower decorations */}
        <div className="absolute inset-0 opacity-10">
          {/* Transmission Tower 1 - Left */}
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

          {/* Transmission Tower 2 - Right */}
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

          {/* Electric Pole 1 - Center Left */}
          <div className="absolute left-1/3 top-32">
            <div className="relative w-6 h-40">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-[#CD091B]"></div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#CD091B]"></div>
              <div className="absolute top-8 -left-4 w-2 h-2 rounded-full bg-[#CD091B]"></div>
              <div className="absolute top-8 -right-4 w-2 h-2 rounded-full bg-[#CD091B]"></div>
            </div>
          </div>

          {/* Electric Pole 2 - Center Right */}
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {currentParent?.title.toUpperCase() || 'ELECTRIC POWER SOLUTIONS'}
          </h1>
          
          <nav className="flex items-center gap-2 text-gray-400 text-sm">
            <Home className="w-4 h-4 text-[#CD091B]" />
            <ChevronRight className="w-4 h-4" />
            <span>Electric Power</span>
            <ChevronRight className="w-4 h-4" />
            {currentParent && <span>{currentParent.title}</span>}
            <ChevronRight className="w-4 h-4" />
            {currentChild && <span className="text-white">{currentChild.title}</span>}
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#CD091B]"></div>
      </div>

      {/* Sidebar + Content */}
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
          w-full lg:w-80 bg-white lg:sticky lg:top-0 h-full lg:min-h-screen border-r
          ${isMobileMenuOpen ? 'fixed left-0 top-0 z-40 w-4/5 max-w-sm' : 'hidden lg:block'}
        `}>
          <nav className="py-4">
            {menuData.map((parent) => (
              <div key={parent.id} className="mb-2">
                <div 
                  onClick={() => setExpandedParent(expandedParent === parent.id ? '' : parent.id)}
                  className={`flex items-center px-6 py-4 cursor-pointer border-l-4 ${
                    expandedParent === parent.id
                      ? 'bg-gray-50 border-[#101631] font-semibold'
                      : 'border-transparent hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-3">
                    {expandedParent === parent.id ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </span>
                  <span className="text-sm">{parent.title}</span>
                </div>

                {expandedParent === parent.id && (
                  <div className="bg-gray-50 ml-6 border-l-2">
                    {parent.children.map((child) => (
                      <div
                        key={child.id}
                        onClick={() => {
                          router.push(child.url);
                          if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center px-6 py-3 pl-10 cursor-pointer border-l-4 ${
                          activeItem === child.id
                            ? 'bg-white border-[#101631] font-semibold'
                            : 'border-transparent hover:bg-white'
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full mr-3 ${
                          activeItem === child.id ? 'bg-[#101631]' : 'bg-gray-400'
                        }`} />
                        <span className="text-sm">{child.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-4 bg-white min-h-screen">
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="h-0.5 bg-[#CD091B]" />
            <div className="p-8">
              {children}
            </div>
            <div className="h-2 bg-gray-100" />
          </div>
        </main>
      </div>
    </div>
  );
}