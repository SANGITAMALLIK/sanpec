"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { Search, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

export default function SanpecHeader() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState('transmission');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const electricPowerMegaMenu = {
    tabs: [
      {
        id: 'transmission',
        title: 'Transmission and Distribution',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop',
        items: [
          {
            title: 'Design and engineering',
            desc: 'Transmission, Engineering Excellence, Structure Optimization, Robust Transmission Line',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=192&fit=crop',
            link: '/transmission/design-engineering'
          },  
          {
            title: 'Tower Testing',
            desc: 'T Line Structures Testing, Source Inspections At Manufacturing facilities, Field Inspections Using Drones',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=185&fit=crop',
            link: '/electric-tower/transmission-and-distribution/#e-n-tab-title-2072638982'
          },
          {
            title: 'Electrical Testing',
            desc: 'Corona/RIV and others',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=223&fit=crop',
            link: '/electric-tower/transmission-and-distribution/#e-n-tab-title-2072638983'
          },
          {
            title: 'Type Testing',
            desc: 'Conductor/OPGW/Hardware',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=192&fit=crop',
            link: '/electric-tower/transmission-and-distribution/#e-n-tab-title-2072638984'
          }
        ]
      },
      {
        id: 'manufacturing',
        title: 'Manufacturing and Operations',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop',
        items: [
          {
            title: 'Failure/root cause analysis',
            desc: 'Plant Audit, Inspections (QA/QC), ITP',
            image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=276&h=207&fit=crop',
            link: '/electric-tower/manufacturing-and-operations/'
          },
          {
            title: 'Quality Controls',
            desc: 'Testing, Source Inspections At Manufacturing facilities, Field Inspections Using Drones',
            image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=300&h=188&fit=crop',
            link: '/electric-tower/manufacturing-and-operations/#e-n-tab-title-1362584222'
          },
          {
            title: 'Operational Resilience',
            desc: 'Quality Management System, Innovation Management, Change Management',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=199&fit=crop',
            link: '/electric-tower/manufacturing-and-operations/#e-n-tab-title-1362584223'
          }
        ]
      },
      {
        id: 'strategic',
        title: 'Strategic Project Management',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
        items: [
          {
            title: 'Material Sourcing',
            desc: 'Material and Project Management',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=150&fit=crop',
            link: '/electric-tower/strategic-project-management/#e-n-tab-title-1345677481'
          },
          {
            title: 'Yard Management',
            desc: 'Material & Yard Management',
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=300&h=174&fit=crop',
            link: '/electric-tower/strategic-project-management/#e-n-tab-title-1345677482'
          },
          {
            title: 'INVENTORY REPORTING',
            desc: 'INVENTORY REPORTING AND MATERIAL DOCUMENTATION',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=188&fit=crop',
            link: '/electric-tower/strategic-project-management/#e-n-tab-title-1345677483'
          }
        ]
      },
      {
        id: 'constructability',
        title: 'Constructability Review',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop',
        items: [
          {
            title: 'Logistic and Construction Support',
            desc: 'Follow up logistics planning from vendors',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=245&h=300&fit=crop',
            link: '/electric-tower/constructability-review/'
          }
        ]
      },
      {
        id: 'resiliency',
        title: 'Resiliency Planning',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop',
        items: [
          {
            title: 'Grid Hardening',
            desc: 'Reinforcing the T&D infrastructure to prevent or reduce the damage from extreme weather events',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=200&fit=crop',
            link: '/electric-tower/resiliency-planning/#e-n-tab-title-1363998291'
          },
          {
            title: 'Substation Hardening',
            desc: 'Flooding can create tremendous issues for transmission substations',
            image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=188&fit=crop',
            link: '/electric-tower/resiliency-planning/#e-n-tab-title-1363998292'
          },
          {
            title: 'Distribution Line Hardening',
            desc: 'Fire Prevention and Detection',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=241&fit=crop',
            link: '/electric-tower/resiliency-planning/#e-n-tab-title-1363998293'
          }
        ]
      }
    ]
  };

  const currentTab = electricPowerMegaMenu.tabs.find(tab => tab.id === activeTab);

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
            <div className="flex">
              {/* Logo - Full Height */}
              <div className={`flex items-stretch py-2 pr-4 md:pr-6`}>
                <img 
                  src="/images/logo/sanpec-logo.webp" 
                  alt="Sanpec Logo" 
                  className={`w-auto transition-all duration-300 ${
                    isScrolled ? 'h-12 md:h-16' : 'h-16 md:h-20'
                  }`}
                />
              </div>

              {/* Right Side Content */}
              <div className="flex-1 flex flex-col">
                {/* Top Bar with Tagline and Menu Items */}
                <div className={`flex items-center justify-between transition-all duration-300 px-2 md:px-6 ${
                  isScrolled ? 'py-1.5 md:py-2' : 'py-2 md:py-3'
                }`}>
                  {/* Left - Tagline */}
                  <div className="hidden lg:block text-[12px] font-medium opacity-90 uppercase">
                    Bringing Engineering Excellence. Improving Power Grid Reliability
                  </div>

                  {/* Right - Menu Items and Logo */}
                  <div className="flex items-center gap-2 md:gap-4 ml-auto">
                    <div className="hidden md:flex items-center gap-3 lg:gap-4 uppercase">
                     
                      <Link href="/about" className="text-[11px] lg:text-[12px] hover:opacity-80 transition-all font-medium whitespace-nowrap">About</Link>
                      <a href="/careers" className="text-[11px] lg:text-[12px] hover:opacity-80 transition-all font-medium whitespace-nowrap">
                        Engineering Excellence
                      </a>
                      <a href="/contact" className="text-[11px] lg:text-[12px] hover:opacity-80 transition-all font-medium whitespace-nowrap">
                        Resources
                      </a>
                      <a href="/news" className="text-[11px] lg:text-[12px] hover:opacity-80 transition-all font-medium whitespace-nowrap">
                        Contact
                      </a>
                    </div>
                   
                  </div>
                </div>

                {/* Main Navigation Menu */}
                <div className={`border-t transition-all duration-300 ${
                  isScrolled ? 'border-white/20' : 'border-white/10'
                } relative flex-1 flex items-center`}>
                  <div className="flex items-center justify-between w-full">
                    {/* Mobile Menu Button */}
                    <button 
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="lg:hidden text-white p-3 md:p-4 hover:bg-white/10 transition-all"
                    >
                      {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center flex-1 uppercase">
                  
                   
                 <Link href="/" className="px-3 xl:px-4 py-4 text-white hover:bg-white/10 transition-all text-[13px] xl:text-[14px] font-medium whitespace-nowrap">
                        Home</Link>
                      <div 
                        className="relative group"
                        onMouseEnter={() => setOpenDropdown('electric')}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <button onClick={() => router.push("/electric-power")} className="flex items-center gap-1 px-3 xl:px-4 py-4 text-white hover:bg-white/10 transition-all text-[13px] xl:text-[14px] font-medium whitespace-nowrap">
                          <span>Electric Power</span>

                          <ChevronDown size={16} className={`transition-transform duration-300 ${openDropdown === 'electric' ? 'rotate-180' : ''}`} />
                        </button>
                        

                      </div>
                      <Link href="/research-and-innovation" className="px-3 xl:px-4 py-4 text-white hover:bg-white/10 transition-all text-[13px] xl:text-[14px] font-medium whitespace-nowrap">Research and Innovation</Link>
                     

                      <a href="https://news.sanpec-excellence.com/td-projects/" className="px-3 xl:px-4 py-4 text-white hover:bg-white/10 transition-all text-[13px] xl:text-[14px] font-medium whitespace-nowrap">
                        Projects
                      </a>

                    <Link href="/why-sanpec" className="px-3 xl:px-4 py-4 text-white hover:bg-white/10 transition-all text-[13px] xl:text-[14px] font-medium whitespace-nowrap">Why SANPEC</Link>
                   
                   <Link href="/resilience-and-sustainabilty" className="px-3 xl:px-4 py-4 text-white hover:bg-white/10 transition-all text-[13px] xl:text-[14px] font-medium whitespace-nowrap">Resilience </Link>
                    
                    <Link href="/blog" className="px-3 xl:px-4 py-4 text-white hover:bg-white/10 transition-all text-[13px] xl:text-[14px] font-medium whitespace-nowrap">Blog </Link>
                    </nav>

                    {/* Search Icon */}
                    <button className="text-white hover:bg-white/10 hover:scale-110 transition-all p-3 md:p-4">
                      <Search size={18} className="md:hidden" />
                      <Search size={20} className="hidden md:block" />
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
            {/* Grid Pattern */}
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
              <a href="/" className="px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
              
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'electric' ? null : 'electric')}
                className="flex items-center justify-between px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10"
              >
                <span>Electric Power</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${openDropdown === 'electric' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'electric' && (
                <div className="bg-white/5 border-b border-white/10">
                  {electricPowerMegaMenu.tabs.map((tab) => (
                    <div key={tab.id} className="border-b border-white/5 last:border-0">
                      <button
                        onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
                        className="w-full flex items-center justify-between px-8 py-3 text-white hover:bg-white/5 transition-all text-sm"
                      >
                        <span>{tab.title}</span>
                        <ChevronRight size={16} className={`transition-transform ${activeTab === tab.id ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {activeTab === tab.id && (
                        <div className="bg-white/5">
                          {tab.items.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.link}
                              className="block px-12 py-3 text-white/90 hover:bg-white/5 transition-all text-sm"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <a href="/research" className="px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10" onClick={() => setMobileMenuOpen(false)}>
                Research and Innovation
              </a>

              <a href="https://news.sanpec-excellence.com/td-projects/" className="px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </a>

              <a href="/why-sanpec" className="px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10" onClick={() => setMobileMenuOpen(false)}>
                Why SANPEC
              </a>

              <a href="/sustainability" className="px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10" onClick={() => setMobileMenuOpen(false)}>
                Resilience and Sustainability
              </a>

              <a href="/blog" className="px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10" onClick={() => setMobileMenuOpen(false)}>
                Blogs
              </a>

              {/* Mobile Top Menu Items */}
              <div className="border-t border-white/20 mt-2">
                <a href="/about" className="px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10" onClick={() => setMobileMenuOpen(false)}>
                  About
                </a>
                <a href="/careers" className="px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10" onClick={() => setMobileMenuOpen(false)}>
                  Engineering Excellence
                </a>
                <a href="/contact" className="px-6 py-4 text-white hover:bg-white/10 transition-all border-b border-white/10" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </a>
                <a href="/news" className="px-6 py-4 text-white hover:bg-white/10 transition-all" onClick={() => setMobileMenuOpen(false)}>
                  News
                </a>
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
            {/* Grid Pattern */}
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
              top: '0',
              left: '-10%',
              width: '40%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(205, 9, 27, 0.25) 0%, transparent 70%)',
              filter: 'blur(80px)',
              pointerEvents: 'none',
              zIndex: 0
            }} />
            
            {/* Dark Blue Glow */}
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
                {/* Left Side - Featured Image & Quote */}
                <div className="w-[280px] flex-shrink-0">
                  <img 
                    src={currentTab.image}
                    alt="Engineering" 
                    className="w-full h-[200px] object-cover rounded-lg mb-4 border border-white/10"
                  />
                  <div className="text-gray-300 italic text-sm leading-relaxed">
                    <p className="font-semibold text-white mb-2">Engineering is the difference between Chaos and Excellence.</p>
                    <p className="text-gray-400">If you are going to do it, do it right.</p>
                  </div>
                </div>

                {/* Middle - Tab Navigation */}
                <div className="w-[200px] flex-shrink-0 space-y-2">
                  {electricPowerMegaMenu.tabs.map((tab) => (
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

                {/* Right Side - Tab Content in Grid */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    {currentTab.items.map((item, idx) => (
                      <a
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
                         <h4
  onClick={() => router.push(item.link)}
  className="font-bold text-white group-hover:text-[#CD091B] mb-2 transition-colors cursor-pointer"
>
  {item.title}
</h4>
                          <p className="text-sm text-gray-300 line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </a>
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