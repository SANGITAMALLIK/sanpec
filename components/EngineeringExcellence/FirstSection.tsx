// app/engineering-excellence/page.tsx
import React from 'react';

const EngineeringExcellencePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Power Grid Pattern - WAPIS AAGAYA */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Power Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[length:50px_50px] bg-[linear-gradient(to_right,#101631_1px,transparent_1px),linear-gradient(to_bottom,#101631_1px,transparent_1px)]"></div>
        
        {/* Diagonal Power Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-10 right-20 h-[1px] bg-gradient-to-r from-transparent via-[#101631]/10 to-transparent"></div>
          <div className="absolute top-1/2 left-20 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#CD091B]/10 to-transparent"></div>
          <div className="absolute bottom-1/3 left-10 right-20 h-[1px] bg-gradient-to-r from-transparent via-[#101631]/10 to-transparent"></div>
        </div>
        
        {/* Electrical Towers Pattern */}
        <div className="absolute left-[15%] top-1/4 transform -translate-y-1/2">
          <div className="relative">
            {/* Tower Pole */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-32 bg-gradient-to-b from-[#101631]/20 via-[#101631]/10 to-transparent"></div>
            {/* Cross Arms */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-[#CD091B]/10"></div>
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#101631]/10"></div>
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[#CD091B]/10"></div>
          </div>
        </div>
        
        <div className="absolute right-[20%] top-1/2 transform -translate-y-1/2">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-40 bg-gradient-to-b from-[#CD091B]/15 via-[#CD091B]/10 to-transparent"></div>
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-[#101631]/10"></div>
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-[#CD091B]/10"></div>
            <div className="absolute top-30 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#101631]/10"></div>
          </div>
        </div>
        
        {/* More Grid Elements */}
        <div className="absolute left-[5%] bottom-1/4">
          <div className="relative">
            <div className="w-24 h-24 border border-dashed border-[#101631]/5 rounded-lg"></div>
            <div className="absolute inset-2 border border-dashed border-[#CD091B]/5 rounded"></div>
          </div>
        </div>
        
        <div className="absolute right-[10%] top-1/3">
          <div className="relative">
            <div className="w-16 h-16 border border-dashed border-[#CD091B]/5 rotate-45"></div>
          </div>
        </div>
        
        {/* Circuit-like Dots */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#101631]/10 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#CD091B]/10 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#101631]/10 rounded-full"></div>
        <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-[#CD091B]/10 rounded-full"></div>
        
        {/* Background Circles */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#101631]/3 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#CD091B]/3 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7_5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-2.5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Heading - Improved Design */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-[#CD091B]"></div>
                <span className="text-sm font-semibold uppercase tracking-wider text-[#CD091B]">
                  SANPEC Expertise
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap">
  <span className="inline text-[#101631]">Engineering</span>{' '}
  <span className="inline text-[#CD091B]">Excellence</span>
</h2>

              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-0.5 bg-[#101631]"></div>
                <div className="w-4 h-0.5 bg-[#CD091B]"></div>
                <div className="w-2 h-0.5 bg-[#101631]"></div>
              </div>
            </div>

            {/* Subheading */}
            <h3 className="text-2xl lg:text-3xl font-semibold text-[#101631] leading-tight border-l-4 border-[#CD091B] pl-4">
              SANPEC is home to some of the world's brightest engineers
            </h3>

            {/* First Paragraph */}
            <div className="group bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#CD091B]/30 transition-all duration-300">
              <div className="flex gap-3 items-start">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#CD091B] flex-shrink-0"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Innovative, purpose-driven professionals dedicated to streamlining processes, optimizing resources, and shaping the future of energy infrastructure. Through diverse expertise and creativity, we don't just build reliable transmission lines; we build a more connected, healthier, resilient, and energy-dominant America.
                </p>
              </div>
            </div>

            {/* Second Paragraph */}
            <div className="group bg-[#101631] text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex gap-3 items-start">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#CD091B] flex-shrink-0"></div>
                <p className="text-lg leading-relaxed">
                  We salute engineers who continue to challenge norms, spark creativity, break barriers, and build a world powered by innovation and excellence.
                </p>
              </div>
            </div>

            {/* Read More Button */}
            <div className="pt-4">
              <a 
                href="/why-sanpec/" 
                className="group inline-flex items-center gap-3 bg-[#CD091B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#101631] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0"
              >
                <span className="relative overflow-hidden">
                  <span className="block group-hover:-translate-y-full transition-transform duration-300">
                    Read More
                  </span>
                  <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                    Discover More
                  </span>
                </span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 group-hover:rotate-90 transition-all duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 512 512" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="relative">
            {/* Tower Frame Container */}
            <div className="relative bg-white border-2 border-gray-300 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-shadow duration-500 group">
              {/* Corner Accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6">
                <div className="w-full h-full border-t-2 border-l-2 border-[#CD091B] rounded-tl-lg"></div>
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6">
                <div className="w-full h-full border-t-2 border-r-2 border-[#CD091B] rounded-tr-lg"></div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6">
                <div className="w-full h-full border-b-2 border-l-2 border-[#101631] rounded-bl-lg"></div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6">
                <div className="w-full h-full border-b-2 border-r-2 border-[#101631] rounded-br-lg"></div>
              </div>
              
              {/* Grid Background Inside Container */}
              <div className="absolute inset-4 rounded-lg opacity-5 bg-[length:20px_20px] bg-[linear-gradient(to_right,#101631_1px,transparent_1px),linear-gradient(to_bottom,#101631_1px,transparent_1px)]"></div>
              
              {/* Main Visual Area */}
              <div className="relative h-[500px] bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                {/* Abstract Tower Illustration */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="relative w-48 h-72 mb-8">
                    {/* Tower Structure */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-64 bg-[#101631] rounded-t"></div>
                    
                    {/* Cross Arms with Insulators */}
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="w-32 h-1.5 bg-[#CD091B] rounded-full"></div>
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-gray-300 rounded-full"></div>
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="w-24 h-1.5 bg-[#101631] rounded-full"></div>
                        <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2.5 h-6 bg-gray-300 rounded-full"></div>
                        <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2.5 h-6 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="absolute top-48 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-[#CD091B] rounded-full"></div>
                    
                    {/* Tower Base */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-8 bg-[#101631] rounded-t-lg"></div>
                      <div className="w-20 h-2 bg-gray-400 rounded-lg mt-1"></div>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-[#101631]">
                        Power Infrastructure
                      </h3>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-0.5 bg-[#CD091B]"></div>
                        <div className="w-6 h-0.5 bg-[#101631]"></div>
                        <div className="w-4 h-0.5 bg-[#CD091B]"></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 max-w-md">
                      Precision engineering meets innovative design in every transmission project
                    </p>
                    
                    {/* Engineering Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#101631]">500+</div>
                        <div className="text-sm text-gray-600">Engineers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#CD091B]">1000+</div>
                        <div className="text-sm text-gray-600">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#101631]">50+</div>
                        <div className="text-sm text-gray-600">Years</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
                
                {/* Animated Elements */}
                <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-[#CD091B] rounded-full animate-ping opacity-75"></div>
                <div className="absolute top-60 right-1/3 w-1 h-1 bg-[#101631] rounded-full animate-ping opacity-75 animation-delay-500"></div>
              </div>
            </div>
            
            {/* Design Elements */}
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-[#CD091B]/5 rounded-full"></div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-40 h-40 bg-[#101631]/5 rounded-full"></div>
          </div>
        </div>
        
        {/* Bottom Divider */}
       
      </div>
    </div>
  );
};

export default EngineeringExcellencePage;