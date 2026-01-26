"use client";
import React from "react";

const PremiumFooter = () => {
  const links = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Electric Power", href: "/electric-power", icon: "⚡" },
    { name: "Projects", href: "/projects", icon: "📊" },
    { name: "Why SANPEC", href: "/why-sanpec", icon: "🎯" },
    { name: "Research", href: "/research", icon: "🔬" }
  ];

  return (
    <footer className="relative bg-[#0A0E1F] overflow-hidden">
      {/* Animated Power Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.015,
            backgroundImage: `
              linear-gradient(#CC2222 0.5px, transparent 0.5px),
              linear-gradient(90deg, #CC2222 0.5px, transparent 0.5px)
            `,
            backgroundSize: '200px 200px',
            backgroundPosition: '0 0'
          }}
        />

        {/* Glowing Orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#CC2222] rounded-full" style={{ filter: 'blur(150px)', opacity: 0.03 }} />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#00424D] rounded-full" style={{ filter: 'blur(150px)', opacity: 0.03 }} />
      </div>

      {/* Top Decorative Border */}
      <div className="relative h-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CC2222] to-transparent" style={{ animation: 'shimmer 3s linear infinite' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-10">
          
          {/* SANPEC INC */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#CC2222] via-[#e63939] to-[#CC2222] rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-700 animate-pulse" />
              
              <div className="relative bg-gradient-to-br from-[#1a2540] to-[#0D132D] p-6 rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#CC2222]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Logo */}
                  <div className="mb-4 flex justify-center">
                    <img 
                      src="https://sanpec-excellence.com/wp-content/uploads/2025/03/image-1-1536x1152-1.webp" 
                      alt="SANPEC Logo"
                      className="h-20 w-auto object-contain brightness-110 contrast-110 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-white uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-gradient-to-b from-[#CC2222] to-[#e63939] rounded-full" />
                      SANPEC INC
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-base">
                      SANPEC was founded to improve the resilience and reliability of power grid systems and has been privately owned and operated since 2009. We design, modernize, and manage electric power transmission and distribution grids.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative">
              <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Get In Touch
              </h3>
              <div className="h-0.5 w-16 bg-gradient-to-r from-[#CC2222] to-transparent rounded-full" />
            </div>

            <div className="space-y-3">
              {/* Address Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CC2222] to-[#e63939] rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-[#1a2540]/80 to-[#0D132D]/80 backdrop-blur-xl p-4 rounded-xl border border-white/10 group-hover:border-[#CC2222]/50 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#CC2222] to-[#e63939] flex items-center justify-center shadow-lg shadow-[#CC2222]/50 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#CC2222] text-xs font-bold uppercase tracking-wider mb-1">Address</p>
                      <p className="text-white font-semibold text-sm">SANPEC, Houston 11819</p>
                      <p className="text-gray-300 text-xs">Skydale Drive Tomball Texas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00424D] to-[#0D132D] rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-[#1a2540]/80 to-[#0D132D]/80 backdrop-blur-xl p-4 rounded-xl border border-white/10 group-hover:border-[#00424D]/50 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#00424D] to-[#0D132D] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#00424D] text-xs font-bold uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:ajmallik@sanpec.com" className="text-white font-semibold text-sm hover:text-[#CC2222] transition-colors">
                        ajmallik@sanpec.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CC2222] to-[#e63939] rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-[#1a2540]/80 to-[#0D132D]/80 backdrop-blur-xl p-4 rounded-xl border border-white/10 group-hover:border-[#CC2222]/50 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#CC2222] to-[#e63939] flex items-center justify-center shadow-lg shadow-[#CC2222]/50 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#CC2222] text-xs font-bold uppercase tracking-wider mb-1">Phone</p>
                      <a href="tel:+18323924230" className="text-white font-semibold text-sm hover:text-[#CC2222] transition-colors">
                        +1 (832) 392 4230
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative">
              <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="text-2xl">🔗</span>
                Links
              </h3>
              <div className="h-0.5 w-16 bg-gradient-to-r from-[#CC2222] to-transparent rounded-full" />
            </div>

            <div className="space-y-1.5">
              {links.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="group relative block overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#CC2222] to-[#e63939] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  <div className="relative bg-gradient-to-br from-[#1a2540]/50 to-[#0D132D]/50 backdrop-blur-sm border border-white/10 p-3 group-hover:border-transparent transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span className="text-white text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                      <svg 
                        className="w-4 h-4 text-white ml-auto opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative">
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#CC2222]" />
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#CC2222] animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#00424D] animate-pulse" style={{ animationDelay: '0.3s' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-[#CC2222] animate-pulse" style={{ animationDelay: '0.6s' }} />
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#CC2222]" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-gray-400 flex items-center gap-2">
              <span className="text-[#CC2222]">©</span>
              2026 SANPEC EXCELLENCE. All Rights Reserved
            </p>
            
            <div className="flex items-center gap-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="text-gray-400 hover:text-white relative group/link transition-colors"
                >
                  <span>{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#CC2222] group-hover/link:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* <div className="flex items-center gap-1.5 text-gray-500 italic">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CC2222] animate-pulse" />
              Powering the Future
            </div> */}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `
      }} />
    </footer>
  );
};

export default PremiumFooter;