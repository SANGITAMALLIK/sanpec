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
    .find(item => item.hasDropdown && item.megaMenu)?.megaMenu.tabs
    .find(tab => tab.id === activeTab);

  // Function to close dropdown
  const closeDropdown = () => {
    setOpenDropdown(null);
  };

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
                          item.megaMenu ? (
                            // Electric Power - Mega Menu
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
                            // SunZia Project - Simple Dropdown
                            <div 
                              key={idx}
                              className="relative"
                              onMouseEnter={() => setOpenDropdown('sunzia')}
                              onMouseLeave={() => setOpenDropdown(null)}
                            >
                              <button 
                                onClick={() => router.push(item.path)} 
                                className="flex items-center gap-1 px-3 xl:px-4 py-4 text-white hover:bg-white/10 transition-all text-[13px] xl:text-[14px] font-medium whitespace-nowrap"
                              >
                                <span>{item.title}</span>
                                <ChevronDown size={16} className={`transition-transform duration-300 ${openDropdown === 'sunzia' ? 'rotate-180' : ''}`} />
                              </button>
                              
                              {/* SunZia Simple Dropdown */}
                              {/* {openDropdown === 'sunzia' && item.submenu && (
                                <div 
                                  className="absolute top-full left-0 bg-white shadow-xl z-50 min-w-[200px] rounded-b-lg overflow-hidden"
                                  onMouseEnter={() => setOpenDropdown('sunzia')}
                                  onMouseLeave={() => setOpenDropdown(null)}
                                >
                                  {item.submenu.map((subItem, subIdx) => (
                                    <Link
                                      key={subIdx}
                                      href={subItem.path}
                                      onClick={closeDropdown}
                                      className="block px-6 py-3 hover:bg-gray-100 transition-all text-[13px] font-medium border-b border-gray-200 last:border-0"
                                      style={{ color: '#0D132D' }}
                                    >
                                      {subItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )} */}
                            </div>
                          )
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
                  item.megaMenu ? (
                    // Electric Power Mobile Menu
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
                    // SunZia Project Mobile Menu - Simple Dropdown
                    <div key={idx} className="border-b border-white/10 last:border-0">
                      <button 
                        // onClick={() => setOpenDropdown(openDropdown === 'sunzia' ? null : 'sunzia')}
                        className="flex items-center justify-between w-full px-6 py-4 text-white hover:bg-white/10 transition-all"
                      >
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown size={20} className={`transition-transform duration-300 ${openDropdown === 'sunzia' ? 'rotate-180' : ''}`} />
                      </button>

                      {/* {openDropdown === 'sunzia' && item.submenu && (
                        <div className="bg-white/5">
                          {item.submenu.map((subItem, subIdx) => (
                            <Link
                              key={subIdx}
                              href={subItem.path}
                              className="block px-8 py-3 text-white/90 hover:bg-white/10 transition-all"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )} */}
                    </div>
                  )
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
       {/* Electric Power Mega Menu Dropdown - Desktop Only */}
{openDropdown === 'electric' && (
  <div 
    className="hidden lg:block absolute top-full left-0 w-full shadow-2xl z-50"
    onMouseEnter={() => setOpenDropdown('electric')}
    onMouseLeave={() => setOpenDropdown(null)}
  >
    <div className="max-w-[1400px] mx-auto">
      <div className="flex">
        {/* Left Section - Full Image Background */}
        <div className="w-[320px] flex-shrink-0 relative overflow-hidden group">
          {/* Background Image */}
          <img 
            src={currentTab?.image}
            alt={currentTab?.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-8">
            {/* Category Name with Underline */}
            <div>
              <h3 className="text-white text-2xl font-bold leading-tight drop-shadow-lg inline-block">
                {currentTab?.title}
              </h3>
              {/* Awesome Underline */}
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-white via-white/80 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Section - White Background with Tabs and Submenu */}
        <div className="flex-1 bg-white px-[50px] py-8">
          <div className="flex gap-6">
            <div className="w-[200px] flex-shrink-0 space-y-2">
              {menuData.navigationItems.find(item => item.hasDropdown && item.megaMenu)?.megaMenu.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onMouseEnter={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${
                    activeTab === tab.id 
                      ? 'text-white font-semibold shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                  }`}
                  style={activeTab === tab.id ? {
                    background: 'linear-gradient(135deg, #101631 0%, #1a2347 100%)'
                  } : {}}
                >
                  <span className="text-sm uppercase leading-tight">{tab.title}</span>
                  <ChevronRight size={16} className={`transition-transform ${activeTab === tab.id ? 'translate-x-1' : ''}`} />
                </button>
              ))}
            </div>

            {/* Submenu */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                {currentTab?.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link}
                    onClick={closeDropdown}
                    className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-200"
                    style={{
                      borderColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#CD091B';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Gradient overlay on hover with custom color */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: 'linear-gradient(to top, rgba(205, 9, 27, 0.3), transparent)'
                        }}
                      ></div>
                    </div>
                    <div className="p-4">
                      <h4 
                        className="font-bold text-gray-900 mb-2 transition-colors text-base leading-snug"
                        style={{
                          color: undefined
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#CD091B';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '';
                        }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
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
    </div>
  </div>
)}
{/* electric power Desktop end code */}
      </header>
    </>
  );
}