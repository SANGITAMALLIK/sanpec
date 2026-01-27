'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { ExternalLink, Zap, Award, TrendingUp, ChevronRight, Home } from 'lucide-react';

export default function StrategicInnovation() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gray-500">
      {/* Hero/Title Section */}
       <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-[300px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/images/about/1.png" 
                alt="About Background"
                className="w-full h-full object-cover"
              />
              {/* Enhanced Gradient Overlay */}
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
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-6 sm:pb-8 pt-20 sm:pt-0">
              {/* Page Title */}
              <div className="mb-4 sm:mb-5">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-tight drop-shadow-lg">
                  WHY SANPEC
                </h1>
                {/* Elegant Underline */}
                <div className="flex items-center gap-2">
                  <div className="h-[3px] w-12 sm:w-16 bg-[#DC2626] rounded-full"></div>
                  <div className="h-[2px] w-6 sm:w-8 bg-[#DC2626]/60 rounded-full"></div>
                  <div className="h-[2px] w-3 sm:w-4 bg-[#DC2626]/40 rounded-full"></div>
                </div>
              </div>
              
              {/* Simple Breadcrumb Navigation */}
              <nav className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm">
                {/* Home Link with Icon */}
                <a 
                  href="/" 
                  className="group flex items-center gap-1 sm:gap-1.5 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="font-medium">Home</span>
                </a>
      
                {/* Separator */}
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50" />
      
                {/* Current Page (Active) */}
                <span className="text-[#DC2626] font-semibold">
                  Why SANPEC
                </span>
              </nav>
            </div>
      
            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px]">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-[#DC2626]/80 to-transparent"></div>
            </div>
          </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#101631] opacity-[0.02] transform skew-x-12 origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-[#CD091B] opacity-[0.02] transform -skew-x-12 origin-bottom-left"></div>
        
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#101631] text-white text-sm font-semibold shadow-lg">
                <Zap className="w-4 h-4" />
                {/* <span>Next-Gen Engineering</span> */}
              </div>

              <div className="space-y-3">
                <h1 className="text-7xl font-bold text-gray-900 leading-none tracking-tight">
                  STRATEGIC
                </h1>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-20 bg-[#CD091B]"></div>
                  <h2 className="text-5xl font-bold text-[#101631]">
                    Thinking &
                  </h2>
                </div>
                <h2 className="text-6xl font-bold italic text-[#CD091B]">
                  Innovation
                </h2>
              </div>

              <div className="bg-white p-6 shadow-xl border-l-4 border-[#101631]">
                <p className="text-gray-700 text-lg leading-relaxed">
                  As global energy infrastructure faces increasing complexity, innovation in transmission 
                  line engineering is no longer about just improving individual components—it requires a
                   system-wide transformation. SANPEC’s approach to systemic innovation ensures that every
                    part of the transmission ecosystem, from design and materials to project execution 
                      <span className="font-bold text-[#101631]"> and 
                    workforce development, is optimized for</span>. 
                  <span className="font-bold text-[#CD091B]"> reliability, quality, sustainability, and resilience</span>.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
               <button className="group flex items-center gap-3 bg-[#CD091B] hover:opacity-90 text-white px-8 py-4 font-bold text-lg shadow-2xl transition-all transform hover:scale-105">
                <span><Link href="/system-thinking-innovation">Read More</Link></span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
               
                <div className="bg-gray-800 p-4 text-white text-center shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold">∞</div>
                  <div className="text-xs uppercase tracking-wide mt-1">Innovation</div>
                </div>
                 <div className="bg-[#CD091B] p-4 text-white text-center shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-xs uppercase tracking-wide mt-1">Quality</div>
                </div>
              </div>

              
            </div>

            <div className="relative">
              <div className="absolute -top-8 -right-8 grid grid-cols-8 gap-2 opacity-30">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-[#CD091B]' : 'bg-[#101631]'}`}></div>
                ))}
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-[#101631] transform rotate-3"></div>
                <div className="relative bg-white p-3 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://sanpec-excellence.com/wp-content/uploads/2025/10/Screenshot-Capture-2025-10-25-11-03-23-1-1024x590.png"
                    alt="Strategic Innovation"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-6 left-6 bg-white px-4 py-2 shadow-xl flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#101631]" />
                    <span className="font-bold text-gray-900">Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SunZia Project Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            {/* <div className="inline-block bg-[#CD091B] text-white px-6 py-2 font-bold mb-4">
              FEATURED PROJECT
            </div> */}
            <h2 className="text-6xl font-bold text-gray-900 mb-4">
              The <span className="text-[#101631]">SunZia</span> Story
            </h2>
            <div className="w-24 h-1 bg-[#CD091B] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#101631] transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                <div className="relative bg-white p-4 shadow-2xl">
                  <div className="aspect-video overflow-hidden bg-gray-900">
                    <iframe
                      title="SunZia Project Video"
                      src="https://player.vimeo.com/video/1054591267?h=13319e86ba"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="bg-[#101631] p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 text-9xl font-bold opacity-10">"</div>
                <div className="relative z-10">
                  <p className="text-xl font-semibold italic mb-4">
                    "I'm very thankful for the Pattern team and the quanta team they had trust in us, ensuring we had a way of making the thing successful."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#101631] font-bold text-xl">AM</span>
                    </div>
                    <div>
                      <div className="font-bold">Ajay Mallik, P.E.</div>
                      <div className="text-sm opacity-90">President & CEO, SANPEC EXCELLENCE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="bg-white p-6 shadow-lg border-l-4 border-[#101631] hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    {/* <div className="w-12 h-12 bg-[#101631] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-[#101631]" />
                    </div> */}
                    <div>
                      {/* <h3 className="font-bold text-gray-900 mb-2">Quality Leadership</h3> */}
                      <p className="text-gray-600 text-sm">
                       Ajay Mallik, P.E. President and CEO of SANPEC Engineering, shares his team’s critical role in ensuring SunZia’s transmission materials met the highest quality standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-lg border-l-4 border-[#CD091B] hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    {/* <div className="w-12 h-12 bg-[#CD091B] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-[#CD091B]" />
                    </div> */}
                    <div>
                      {/* <h3 className="font-bold text-gray-900 mb-2">Complex Transition</h3> */}
                      <p className="text-gray-600 text-sm">
                       SANPEC successfully navigated complex challenges and delivered exceptional results in the management of global suppliers, logistics, engineering, quality, and supply chains while transitioning the project plan from HVAC to HVDC.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-lg border-l-4 border-gray-800 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    {/* <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-gray-800" />
                    </div> */}
                    <div>
                      {/* <h3 className="font-bold text-gray-900 mb-2">Collaborative Excellence</h3> */}
                      <p className="text-gray-600 text-sm">
                      SANPEC collaborated closely with Pattern and Quanta to secure committed vendors for timely delivery, aligning with the construction schedule and project specifications. From material type testing to specialized dulling processes, SANPEC delivered unparalleled excellence and innovation throughout the project. After 12 years of dedication, seeing the project come to life was an emotional and fulfilling moment – proof that teamwork can turn vision into reality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-gray-100 p-6">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Our Process</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  From material type testing to specialized dulling processes, SANPEC delivered 
                  unparalleled excellence and innovation throughout the project, managing engineering, 
                  quality, and supply chains with precision.
                </p>
              </div> */}

              <button className="w-full group flex items-center justify-center gap-3 bg-[#CD091B] hover:opacity-90 text-white px-6 py-4 font-bold shadow-lg transition-all">
                <span>Read More</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1">
        <div className="h-0 bg-[#CD091B]"></div>    
      </div>
    </div>
  );
}