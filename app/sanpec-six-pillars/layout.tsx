'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const menuData = [
  {
    id: 'systems-and-structures',
    title: 'Systems and Structures',
    shortTitle: 'S',
    url: '/sanpec-six-pillars/systems-and-structures'
  },
  {
    id: 'agility',
    title: 'Agility',
    shortTitle: 'A',
    url: '/sanpec-six-pillars/agility'
  },
  {
    id: 'new-innovation',
    title: 'New Innovation',
    shortTitle: 'N',
    url: '/sanpec-six-pillars/new-innovation'
  },
  {
    id: 'process-excellence',
    title: 'Process Excellence',
    shortTitle: 'P',
    url: '/sanpec-six-pillars/process-excellence'
  },
  {
    id: 'ecosystem-innovation',
    title: 'Ecosystem Innovation',
    shortTitle: 'E',
    url: '/sanpec-six-pillars/ecosystem-innovation'
  },
  {
    id: 'cocreation',
    title: 'Collaboration & Co-Creation',
    shortTitle: 'C',
    url: '/sanpec-six-pillars/collaboration-&-co-creation'
  }
];

export default function SanpecSixPillarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  
  const [activeItem, setActiveItem] = useState('systems-and-structures');

  useEffect(() => {
    menuData.forEach(item => {
      if (pathname === item.url) {
        setActiveItem(item.id);
      }
    });
  }, [pathname]);

  const currentItem = menuData.find(item => item.id === activeItem);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - RESPONSIVE */}
      <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-[300px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/home/banner1.jpeg" 
            alt="SANPEC Six Pillars Background"
            className="w-full h-full object-cover"
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
          
          {/* Subtle Pattern Overlay */}
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-6 sm:pb-8 pt-20 sm:pt-0">
          {/* Page Title */}
          <div className="mb-3 sm:mb-5">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-tight drop-shadow-lg">
              {currentItem?.title.toUpperCase() || 'SANPEC SIX PILLARS'}
            </h1>
            {/* Elegant Underline */}
            <div className="flex items-center gap-2">
              <div className="h-[3px] w-12 sm:w-16 bg-[#cd091b] rounded-full"></div>
              <div className="h-[2px] w-6 sm:w-8 bg-[#cd091b]/60 rounded-full"></div>
              <div className="h-[2px] w-3 sm:w-4 bg-[#cd091b]/40 rounded-full"></div>
            </div>
          </div>
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <a 
              href="/" 
              className="group flex items-center gap-1 sm:gap-1.5 text-white/70 hover:text-white transition-colors duration-300"
            >
              <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-medium">Home</span>
            </a>

            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50" />

            <a 
              href="/sanpec-six-pillars" 
              className="text-white/70 hover:text-white transition-colors duration-300 font-medium"
            >
              SANPEC Six Pillars
            </a>

            {currentItem && (
              <>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50" />
                <span className="text-[#cd091b] font-semibold">
                  {currentItem.title}
                </span>
              </>
            )}
          </nav>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px]">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#cd091b]/80 to-transparent"></div>
        </div>
      </div>

      {/* MOBILE TAB MENU - Horizontal Pills Design */}
      <div className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Horizontal scrollable tabs */}
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {menuData.map((item) => {
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => router.push(item.url)}
                  className={`
                    flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold
                    transition-all duration-300 whitespace-nowrap
                    ${isActive
                      ? 'bg-gray-200 text-[#cd091b] shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Sidebar + Content */}
      <div className="max-w-7_5xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* DESKTOP SIDEBAR - Pillar Design (Hidden on Mobile) */}
          <aside className="hidden lg:block w-80 bg-white lg:sticky lg:top-0 h-full lg:min-h-screen border-r border-gray-200">
            <nav className="py-8 px-6">
              {/* SANPEC Header */}
              {/* <div className="mb-8 text-center pb-6 border-b-2 border-gray-200">
                <div className="mb-3">
                  <h2 className="text-3xl font-extrabold text-[#cd091b] tracking-wider mb-1">SANPEC</h2>
                  <div className="flex justify-center gap-1">
                    <div className="h-1 w-8 bg-[#cd091b] rounded-full"></div>
                    <div className="h-1 w-4 bg-[#cd091b]/60 rounded-full"></div>
                    <div className="h-1 w-2 bg-[#cd091b]/30 rounded-full"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">Six Pillars of Excellence</p>
              </div> */}

              {/* Pillar Menu Items */}
              <div className="space-y-3">
                {menuData.map((item, idx) => {
                  const isActive = activeItem === item.id;
                  
                  return (
                    <div
                      key={item.id}
                      onClick={() => router.push(item.url)}
                      className="relative group cursor-pointer"
                    >
                      {/* Pillar Card */}
                      <div
                        className={`
                          relative overflow-hidden rounded-xl transition-all duration-300
                          ${isActive
                            ? 'bg-gray-100 shadow-xl scale-105 border-2 border-gray-300' 
                            : 'bg-white border-2 border-gray-200 hover:border-[#cd091b] hover:shadow-lg'
                          }
                        `}
                      >
                        {/* Pillar Icon Background */}
                        <div className="absolute top-0 right-0 opacity-10">
                          <svg 
                            width="80" 
                            height="80" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className={isActive ? 'text-gray-400' : 'text-[#cd091b]'}
                          >
                            <path d="M6 20h12v-2H6v2zm0-4h12v-2H6v2zm0-4h12v-2H6v2zm0-4h12V6H6v2zm-2 2h16V4H4v6zm0 10h16v-6H4v6z"/>
                          </svg>
                        </div>

                        {/* Content */}
                        <div className="relative p-5">
                          {/* Letter Badge */}
                          <div className={`
                            inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3
                            font-bold text-2xl
                            ${isActive 
                              ? 'bg-gray-200 text-gray-700' 
                              : 'bg-gray-100 text-[#cd091b] group-hover:bg-[#cd091b] group-hover:text-white'
                            }
                            transition-all duration-300
                          `}>
                            {item.shortTitle}
                          </div>

                          {/* Title */}
                          <h3 className={`
                            text-base font-semibold leading-tight
                            ${isActive ? 'text-[#cd091b]' : 'text-gray-800 group-hover:text-[#cd091b]'}
                            transition-colors duration-300
                          `}>
                            {item.title}
                          </h3>

                          {/* Active Indicator */}
                          {isActive && (
                            <div className="absolute top-5 right-5">
                              <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"></div>
                            </div>
                          )}
                        </div>

                        {/* Bottom Accent Line */}
                        <div className={`
                          h-1 w-full transition-all duration-300
                          ${isActive ? 'bg-gray-300' : 'bg-[#cd091b]/0 group-hover:bg-[#cd091b]/20'}
                        `}></div>
                      </div>

                      {/* Connection Line to Content (for active item) */}
                      {isActive && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                          <div className="w-6 h-px bg-gray-400"></div>
                          <div className="w-2 h-2 rotate-45 bg-gray-400 -ml-1"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Decoration */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-center gap-1">
                  {menuData.map((item) => (
                    <div
                      key={item.id}
                      className={`
                        h-1.5 rounded-full transition-all duration-300
                        ${activeItem === item.id 
                          ? 'w-8 bg-[#cd091b]' 
                          : 'w-1.5 bg-gray-300'
                        }
                      `}
                    ></div>
                  ))}
                </div>
              </div>
            </nav>
          </aside>

          {/* Content Area */}
          <main className="flex-1 p-4 bg-white min-h-screen">
            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
              <div className="h-0.5 bg-gray-300" />
              <div className="p-4 sm:p-6 lg:p-8">
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