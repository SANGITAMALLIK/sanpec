'use client';
import React, { useState } from 'react';
import { ExternalLink, Zap, Award, TrendingUp, ChevronRight, Home } from 'lucide-react';

export default function StrategicInnovation() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gray-500">
      {/* Hero/Title Section */}
       <div className="relative bg-[#0B1931] overflow-hidden" style={{ height: '370px' }}>
        <div className="absolute inset-0 opacity-15">
          <div className="absolute left-16 top-20">
            <div className="relative w-8 h-48">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-red-600"></div>
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-600"></div>
              <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-600"></div>
              <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-600"></div>
              <div className="absolute top-16 left-1/2 w-10 h-32 border-l-2 border-red-600 transform -translate-x-8 rotate-12"></div>
              <div className="absolute top-16 right-1/2 w-10 h-32 border-r-2 border-red-600 transform translate-x-8 -rotate-12"></div>
            </div>
          </div>

          <div className="absolute right-20 top-24">
            <div className="relative w-8 h-52">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-red-600"></div>
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600"></div>
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-18 h-1 bg-red-600"></div>
              <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-red-600"></div>
              <div className="absolute top-20 left-1/2 w-12 h-32 border-l-2 border-red-600 transform -translate-x-10 rotate-12"></div>
              <div className="absolute top-20 right-1/2 w-12 h-32 border-r-2 border-red-600 transform translate-x-10 -rotate-12"></div>
            </div>
          </div>

          <div className="absolute left-1/3 top-32">
            <div className="relative w-6 h-40">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-red-600"></div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-600"></div>
              <div className="absolute top-8 -left-4 w-2 h-2 rounded-full bg-red-600"></div>
              <div className="absolute top-8 -right-4 w-2 h-2 rounded-full bg-red-600"></div>
            </div>
          </div>

          <div className="absolute right-1/3 top-28">
            <div className="relative w-6 h-36">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-red-600"></div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-red-600"></div>
              <div className="absolute top-6 -left-3 w-2 h-2 rounded-full bg-red-600"></div>
              <div className="absolute top-6 -right-3 w-2 h-2 rounded-full bg-red-600"></div>
            </div>
          </div>

          <div className="absolute top-36 left-20 right-24 h-0.5 bg-red-500"></div>
          <div className="absolute top-48 left-20 right-24 h-0.5 bg-red-500"></div>
          <div className="absolute top-60 left-20 right-24 h-0.5 bg-red-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-5">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              WHY SANPEC
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 mb-5 leading-relaxed">
              Transforming Global Energy Infrastructure Through Strategic Thinking
            </p>

            <nav className="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <Home className="w-4 h-4 text-[#DC2626]" />
              <ChevronRight className="w-4 h-4" />
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">WHY SANPEC</span>
            </nav>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#DC2626]"></div>
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
                <span>Next-Gen Engineering</span>
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
                  line engineering requires a <span className="font-bold text-[#101631]">system-wide transformation</span>. 
                  SANPEC's approach ensures every part of the transmission ecosystem is optimized for 
                  <span className="font-bold text-[#CD091B]"> reliability, quality, sustainability, and resilience</span>.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#101631] p-4 text-white text-center shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold">17+</div>
                  <div className="text-xs uppercase tracking-wide mt-1">Years</div>
                </div>
                <div className="bg-[#CD091B] p-4 text-white text-center shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-xs uppercase tracking-wide mt-1">Quality</div>
                </div>
                <div className="bg-gray-800 p-4 text-white text-center shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold">∞</div>
                  <div className="text-xs uppercase tracking-wide mt-1">Innovation</div>
                </div>
              </div>

              <button className="group flex items-center gap-3 bg-[#CD091B] hover:opacity-90 text-white px-8 py-4 font-bold text-lg shadow-2xl transition-all transform hover:scale-105">
                <span>Explore Our Approach</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
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
            <div className="inline-block bg-[#CD091B] text-white px-6 py-2 font-bold mb-4">
              FEATURED PROJECT
            </div>
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
                    "After 17 years of dedication, seeing the project come to life was an emotional 
                    and fulfilling moment – proof that teamwork can turn vision into reality."
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
                    <div className="w-12 h-12 bg-[#101631] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-[#101631]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Quality Leadership</h3>
                      <p className="text-gray-600 text-sm">
                        Ensuring SunZia's transmission materials met the highest quality standards 
                        through rigorous testing and validation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-lg border-l-4 border-[#CD091B] hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#CD091B] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-[#CD091B]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Complex Transition</h3>
                      <p className="text-gray-600 text-sm">
                        Successfully navigated the transition from HVAC to HVDC while managing 
                        global suppliers and logistics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-lg border-l-4 border-gray-800 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-gray-800" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Collaborative Excellence</h3>
                      <p className="text-gray-600 text-sm">
                        Close collaboration with Pattern and Quanta to secure committed vendors 
                        for timely delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Our Process</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  From material type testing to specialized dulling processes, SANPEC delivered 
                  unparalleled excellence and innovation throughout the project, managing engineering, 
                  quality, and supply chains with precision.
                </p>
              </div>

              <button className="w-full group flex items-center justify-center gap-3 bg-[#CD091B] hover:opacity-90 text-white px-6 py-4 font-bold shadow-lg transition-all">
                <span>Read Complete Case Study</span>
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