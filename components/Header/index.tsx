"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { Search, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { menuData } from './menuData';

export default function SanpecHeader() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState('transmission');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopMenu, setShowTopMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTab = menuData.navigationItems
    .find(item => item.hasDropdown)?.megaMenu.tabs
    .find(tab => tab.id === activeTab);

  return (
    <>
      <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'shadow-2xl' : ''
      }`} style={{
        background: isScrolled 
          ? 'linear-gradient(135deg, #0D132D 0%, #1a1f3d 25%, #0D132D 50%, #1a1f3d 75%, #0D132D 100%)'
          : 'transparent'
      }}>
        {/* Grid Pattern Overlay - Only when scrolled */}
        {isScrolled && (
          <>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              pointerEvents: 'none',
              zIndex: 1
            }} />
            
            {/* Red Glow */}
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '-5%',
              width: '30%',
              height: '80%',
              background: 'radial-gradient(circle, rgba(205, 9, 27, 0.2) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
              zIndex: 0
            }} />
            
            {/* Dark Blue Glow */}
            <div style={{
              position: 'absolute',
              top: '20%',
              right: '-5%',
              width: '30%',
              height: '80%',
              background: 'radial-gradient(circle, rgba(13, 19, 45, 0.4) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
              zIndex: 0
            }} />
          </>
        )}

        <div className="text-white" style={{ position: 'relative', zIndex: 2 }}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-[50px]">
            {/* Mobile Top Bar - Always Visible on Mobile */}
            <div className="lg:hidden flex items-center justify-between py-2 border-b border-white/10">
              {/* Mobile Tagline */}
              <div className="text-[10px] font-medium opacity-90 uppercase truncate pr-2">
                Bringing Engineering Excellence
              </div>
              
              {/* Mobile Top Menu Toggle */}
              <button 
                onClick={() => setShowTopMenu(!showTopMenu)}
                className="flex items-center gap-1 text-[10px] font-medium px-2 py-1 bg-white/10 rounded hover:bg-white/20 transition-all"
              >
                <span>Menu</span>
                <ChevronDown size={12} className={`transition-transform ${showTopMenu ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Mobile Top Menu Items */}
            {showTopMenu && (
              <div className="lg:hidden bg-white/10 backdrop-blur-sm border-b border-white/10">
                <div className="grid grid-cols-2 gap-2 p-3">
                  {menuData.topMenuItems.map((item, idx) => (
                    <Link 
                      key={idx} 
                      href={item.path} 
                      className="text-[10px] font-medium hover:bg-white/20 transition-all px-3 py-2 rounded text-center"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="flex">
              {/* Logo - Left Side */}
              <div className="flex items-stretch py-2 pr-4 md:pr-6">
                <Link href="/">
                  <img 
                    src="/images/logo/sanpec-logo.webp" 
                    alt="Sanpec Logo" 
                    className={`w-auto transition-all duration-300 ${
                      isScrolled ? 'h-12 md:h-16' : 'h-14 md:h-20'
                    }`}
                  />
                </Link>
              </div>

              {/* Right Side Content */}
              <div className="flex-1 flex flex-col">
                {/* Desktop Top Bar - Hidden on Mobile */}
                <div className={`hidden lg:flex items-center justify-between transition-all duration-300 px-2 md:px-6 ${
                  isScrolled ? 'py-1.5 md:py-2' : 'py-2 md:py-3'
                }`}>
                  {/* Left - Tagline */}
                  <div className="text-[12px] font-medium opacity-90 uppercase">
                    Bringing Engineering Excellence. Improving Power Grid Reliability
                  </div>

                  {/* Right - Top Menu Items */}
                  <div className="flex items-center gap-2 md:gap-4 ml-auto">
                    <div className="flex items-center gap-3 lg:gap-4 uppercase">
                      {menuData.topMenuItems.map((item, idx) => (
                        <Link key={idx} href={item.path} className="text-[11px] lg:text-[12px] hover:opacity-80 transition-all font-medium whitespace-nowrap">
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Navigation Menu */}
                <div className={`border-t transition-all duration-300 ${
                  isScrolled ? 'border-white/20' : 'border-white/10'
                } relative flex-1 flex items-center`}>
                  <div className="flex items-center justify-between w-full">
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center flex-1 uppercase">
                      {menuData.navigationItems.map((item, idx) => (
                        item.hasDropdown ? (
                          <div 
                            key={idx}
                            className="relative group"
                            onMouseEnter={() => setOpenDropdown('electric')}
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            <button 
                              onClick={() => router.push(item.path)} 
                              className="flex items-center gap-1 px-3 xl:px-4 py-4 text-white hover:bg-white/10 transition-all text-[13px] xl:text-[14px] font-medium whitespace-nowrap"
                            >
                              <span>{item.title}</span>
                              <ChevronDown size={16} className={`transition-transform duration-300 ${openDropdown === 'electric' ? 'rotate-180' : ''}`} />
                            </button>
                          </div>
                        ) : (
                          item.newTab ? (
                            <a key={idx} href={item.path} className="px-3 xl:px-4 py-4 text-white hover:bg-white/10 transition-all text-[13px] xl:text-[14px] font-medium whitespace-nowrap">
                              {item.title}
                            </a>
                          ) : (
                            <Link key={idx} href={item.path} className="px-3 xl:px-4 py-4 text-white hover:bg-white/10 transition-all text-[13px] xl:text-[14px] font-medium whitespace-nowrap">
                              {item.title}
                            </Link>
                          )
                        )
                      ))}
                    </nav>

                    {/* Mobile Navigation */}
                    <div className="lg:hidden flex items-center justify-between w-full">
                      {/* Mobile Menu Title */}
                      <div className="text-sm font-medium uppercase opacity-0">
                        Main Menu
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button className="text-white hover:bg-white/10 hover:scale-110 transition-all p-3">
                          <Search size={18} />
                        </button>
                        <button 
                          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          className="text-white p-3 hover:bg-white/10 transition-all"
                        >
                          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                      </div>
                    </div>

                    {/* Desktop Search Icon */}
                    <button className="hidden lg:block text-white hover:bg-white/10 hover:scale-110 transition-all p-3 md:p-4">
                      <Search size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full shadow-2xl z-50 max-h-[80vh] overflow-y-auto" style={{
            background: 'linear-gradient(135deg, #0D132D 0%, #1a1f3d 25%, #0D132D 50%, #1a1f3d 75%, #0D132D 100%)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
              pointerEvents: 'none'
            }} />
            
            <nav className="flex flex-col" style={{ position: 'relative', zIndex: 1 }}>
              {/* Mobile Menu Header */}
              <div className="p-4 border-b border-white/10">
                <div className="text-sm font-medium text-white/80 mb-2">Main Navigation</div>
              </div>

              {menuData.navigationItems.map((item, idx) => (
                item.hasDropdown ? (
                  <div key={idx} className="border-b border-white/10 last:border-0">
                    <button 
                      onClick={() => setOpenDropdown(openDropdown === 'electric' ? null : 'electric')}
                      className="flex items-center justify-between w-full px-6 py-4 text-white hover:bg-white/10 transition-all"
                    >
                      <span className="font-medium">{item.title}</span>
                      <ChevronDown size={20} className={`transition-transform duration-300 ${openDropdown === 'electric' ? 'rotate-180' : ''}`} />
                    </button>

                    {openDropdown === 'electric' && (
                      <div className="bg-white/5">
                        {/* Tab Buttons for Mobile */}
                        <div className="flex overflow-x-auto border-b border-white/10">
                          {item.megaMenu.tabs.map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
                              className={`flex-shrink-0 px-4 py-3 text-sm font-medium whitespace-nowrap ${
                                activeTab === tab.id 
                                  ? 'bg-[#CD091B] text-white' 
                                  : 'text-white/80 hover:bg-white/10'
                              }`}
                            >
                              {tab.title}
                            </button>
                          ))}
                        </div>

                        {/* Tab Content */}
                        {item.megaMenu.tabs.map((tab) => (
                          activeTab === tab.id && (
                            <div key={tab.id} className="p-4">
                              <div className="mb-4">
                                <img 
                                  src={tab.image}
                                  alt={tab.title}
                                  className="w-full h-40 object-cover rounded-lg mb-3"
                                />
                              </div>
                              
                              <div className="space-y-3">
                                {tab.items.map((subItem, subIdx) => (
                                  <Link
                                    key={subIdx}
                                    href={subItem.link}
                                    className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <div className="font-medium text-white mb-1">{subItem.title}</div>
                                    <div className="text-sm text-white/70 line-clamp-2">{subItem.desc}</div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  item.newTab ? (
                    <a 
                      key={idx} 
                      href={item.path} 
                      className="px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link 
                      key={idx} 
                      href={item.path} 
                      className="px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )
                )
              ))}

              {/* Mobile Top Menu Items Section */}
              <div className="mt-4 p-4 border-t border-white/20">
                <div className="text-sm font-medium text-white/80 mb-3">Quick Links</div>
                <div className="grid grid-cols-2 gap-2">
                  {menuData.topMenuItems.map((item, idx) => (
                    <Link 
                      key={idx} 
                      href={item.path} 
                      className="text-center px-3 py-2 text-sm bg-white/10 rounded hover:bg-white/20 transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}

        {/* Electric Power Mega Menu Dropdown - Desktop Only */}
        {openDropdown === 'electric' && (
          <div 
            className="hidden lg:block absolute top-full left-0 w-full shadow-2xl z-50"
            style={{
              background: 'linear-gradient(135deg, #0D132D 0%, #1a1f3d 25%, #0D132D 50%, #1a1f3d 75%, #0D132D 100%)',
              position: 'relative'
            }}
            onMouseEnter={() => setOpenDropdown('electric')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              pointerEvents: 'none',
              zIndex: 1
            }} />
            
            <div style={{
              position: 'absolute',
              top: '0',
              left: '-10%',
              width: '40%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(205, 9, 27, 0.25) 0%, transparent 70%)',
              filter: 'blur(80px)',
              pointerEvents: 'none',
              zIndex: 0
            }} />
            
            <div style={{
              position: 'absolute',
              top: '0',
              right: '-10%',
              width: '40%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(13, 19, 45, 0.5) 0%, transparent 70%)',
              filter: 'blur(80px)',
              pointerEvents: 'none',
              zIndex: 0
            }} />
            
            <div className="max-w-[1400px] mx-auto px-[50px] py-8" style={{ position: 'relative', zIndex: 2 }}>
              <div className="flex gap-6">
                <div className="w-[280px] flex-shrink-0">
                  <img 
                    src={currentTab?.image}
                    alt="Engineering" 
                    className="w-full h-[200px] object-cover rounded-lg mb-4 border border-white/10"
                  />
                  <div className="text-gray-300 italic text-sm leading-relaxed">
                    <p className="font-semibold text-white mb-2">Engineering is the difference between Chaos and Excellence.</p>
                    <p className="text-gray-400">If you are going to do it, do it right.</p>
                  </div>
                </div>

                <div className="w-[200px] flex-shrink-0 space-y-2">
                  {menuData.navigationItems.find(item => item.hasDropdown)?.megaMenu.tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onMouseEnter={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-4 py-3 rounded transition-all flex items-center justify-between group ${
                        activeTab === tab.id 
                          ? 'bg-[#CD091B] text-white font-semibold' 
                          : 'bg-white/5 text-gray-200 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      <span className="text-sm uppercase leading-tight">{tab.title}</span>
                      <ChevronRight size={16} className={`transition-transform ${activeTab === tab.id ? 'translate-x-1' : ''}`} />
                    </button>
                  ))}
                </div>

                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    {currentTab?.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.link}
                        className="group bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#CD091B] hover:shadow-lg hover:shadow-[#CD091B]/20 transition-all overflow-hidden"
                      >
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-bold text-white group-hover:text-[#CD091B] mb-2 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-300 line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}