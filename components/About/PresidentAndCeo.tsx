import React from 'react';

export default function SanpecProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#101631 1px, transparent 1px), linear-gradient(90deg, #101631 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Background Power Structure SVG Elements */}
      <div className="absolute inset-0 opacity-[0.04]">
        {/* Transmission Tower 1 */}
        <svg className="absolute top-10 left-10 w-64 h-64 text-[#CD091B]" viewBox="0 0 200 200">
          <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="3"/>
          <line x1="100" y1="40" x2="60" y2="20" stroke="currentColor" strokeWidth="2"/>
          <line x1="100" y1="40" x2="140" y2="20" stroke="currentColor" strokeWidth="2"/>
          <line x1="80" y1="60" x2="120" y2="60" stroke="currentColor" strokeWidth="2"/>
          <line x1="70" y1="90" x2="130" y2="90" stroke="currentColor" strokeWidth="2"/>
          <line x1="60" y1="120" x2="140" y2="120" stroke="currentColor" strokeWidth="2"/>
          <line x1="50" y1="150" x2="150" y2="150" stroke="currentColor" strokeWidth="2"/>
          <line x1="50" y1="150" x2="70" y2="180" stroke="currentColor" strokeWidth="2"/>
          <line x1="150" y1="150" x2="130" y2="180" stroke="currentColor" strokeWidth="2"/>
          <circle cx="60" cy="20" r="3" fill="currentColor"/>
          <circle cx="140" cy="20" r="3" fill="currentColor"/>
        </svg>

        {/* Lattice Tower Structure */}
        <svg className="absolute top-1/3 right-20 w-48 h-48 text-[#101631]" viewBox="0 0 200 200">
          <path d="M100,20 L140,180 L60,180 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line x1="80" y1="80" x2="120" y2="80" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="75" y1="110" x2="125" y2="110" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="70" y1="140" x2="130" y2="140" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="100" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="1"/>
          <line x1="100" y1="20" x2="120" y2="80" stroke="currentColor" strokeWidth="1"/>
          <circle cx="100" cy="20" r="4" fill="currentColor"/>
        </svg>

        {/* Steel Pole */}
        <svg className="absolute bottom-40 left-1/4 w-56 h-56 text-[#CD091B]" viewBox="0 0 200 200">
          <rect x="85" y="40" width="30" height="140" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line x1="100" y1="40" x2="70" y2="20" stroke="currentColor" strokeWidth="2"/>
          <line x1="100" y1="40" x2="130" y2="20" stroke="currentColor" strokeWidth="2"/>
          <line x1="70" y1="20" x2="130" y2="20" stroke="currentColor" strokeWidth="2"/>
          <circle cx="70" cy="20" r="3" fill="currentColor"/>
          <circle cx="100" cy="20" r="3" fill="currentColor"/>
          <circle cx="130" cy="20" r="3" fill="currentColor"/>
          <line x1="85" y1="80" x2="75" y2="80" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="115" y1="80" x2="125" y2="80" stroke="currentColor" strokeWidth="1.5"/>
        </svg>

        {/* Power Lines and Insulators */}
        <svg className="absolute top-2/3 right-1/3 w-40 h-40 text-[#101631]" viewBox="0 0 200 200">
          <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="2"/>
          <line x1="100" y1="60" x2="100" y2="100" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="100" cy="60" r="4" fill="currentColor"/>
          <ellipse cx="100" cy="75" rx="6" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <ellipse cx="100" cy="90" rx="6" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </svg>

        {/* Another Tower Structure */}
        <svg className="absolute bottom-20 right-40 w-52 h-52 text-[#CD091B]" viewBox="0 0 200 200">
          <line x1="100" y1="30" x2="100" y2="170" stroke="currentColor" strokeWidth="3"/>
          <line x1="70" y1="60" x2="130" y2="60" stroke="currentColor" strokeWidth="2"/>
          <line x1="65" y1="90" x2="135" y2="90" stroke="currentColor" strokeWidth="2"/>
          <line x1="60" y1="120" x2="140" y2="120" stroke="currentColor" strokeWidth="2"/>
          <line x1="100" y1="30" x2="80" y2="15" stroke="currentColor" strokeWidth="2"/>
          <line x1="100" y1="30" x2="120" y2="15" stroke="currentColor" strokeWidth="2"/>
          <path d="M60,120 L70,170 M140,120 L130,170" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>

        {/* Conductor Lines */}
        <svg className="absolute top-1/2 left-1/3 w-48 h-48 text-[#101631]" viewBox="0 0 200 200">
          <path d="M20,80 Q60,90 100,80 T180,80" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M20,100 Q60,110 100,100 T180,100" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M20,120 Q60,130 100,120 T180,120" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* Decorative Top Bar */}
      <div className="h-2 bg-gradient-to-r from-[#CD091B] via-[#101631] to-[#CD091B]"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section with CEO Image */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 border-t-4 border-[#CD091B]">
          <div className="grid md:grid-cols-5 gap-0">
            {/* CEO Image Section */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#101631] to-[#1a2847] p-8 flex items-center justify-center relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(45deg, white 1px, transparent 1px), linear-gradient(-45deg, white 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              <div className="text-center relative z-10">
                <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#CD091B] to-red-600 p-1 shadow-2xl">
                  <img 
                    src="https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture41.png" 
                    alt="CEO Ajay Mallik" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-[#CD091B] font-bold text-sm uppercase tracking-wider mb-1">President & CEO</p>
                  <h2 className="text-white text-2xl md:text-3xl font-bold">Ajay Mallik, P.E.</h2>
                  <p className="text-gray-300 text-sm mt-2">SANPEC, Inc.</p>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-[#101631] mb-1">The Company</h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-[#CD091B] to-transparent rounded-full"></div>
                </div>
                <span className="text-base font-semibold text-[#CD091B] bg-red-50 px-4 py-2 rounded-full">Since 2009</span>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 items-start group bg-gradient-to-r from-red-50 to-transparent p-4 rounded-xl hover:from-red-100 transition-all">
                  <div className="w-3 h-3 rounded-full bg-[#CD091B] mt-1.5 group-hover:scale-150 transition-transform flex-shrink-0"></div>
                  <div>
                    <p className="text-xl font-bold text-[#101631] mb-1">Baldrige Leadership Excellence Award 2023</p>
                    <p className="text-gray-600 text-sm">(Quality/Resiliency/Sustainability)</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-xl hover:from-blue-100 transition-all">
                  <div className="w-3 h-3 rounded-full bg-[#CD091B] mt-1.5 group-hover:scale-150 transition-transform flex-shrink-0"></div>
                  <div>
                    <p className="text-xl font-bold text-[#101631] mb-1">Registered Engineering Firm in Texas</p>
                    <p className="text-gray-600 text-sm">(F# 11048)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section - Full Width */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border-l-4 border-[#CD091B] hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#CD091B] rounded-full"></div>
            <h3 className="text-2xl font-bold text-[#101631]">Experience in T&D Line Engineering, Testing and Inspections (QA/QC)</h3>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-2 h-2 rounded-full bg-[#CD091B] mt-2 flex-shrink-0"></div>
            <p className="text-gray-700 leading-relaxed">
              Over 160 years of combined worldwide experiences in Design, Engineering analysis and Audit/Source Inspection services for Steel Poles, Lattice Towers, Insulators & Hardware, Conductor, OPGW, Guys Wires and Shield Wire (HVAC and HVDC)
            </p>
          </div>
        </div>

        {/* Project Management Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border-l-4 border-[#101631] hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#101631] rounded-full"></div>
            <h3 className="text-2xl font-bold text-[#101631]">Project Management Team</h3>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-2 h-2 rounded-full bg-[#CD091B] mt-2 flex-shrink-0"></div>
            <p className="text-gray-700 leading-relaxed">
              Experienced and award-winning professionals with extensive and innovative engineering experience in managing large transmission projects successfully
            </p>
          </div>
        </div>

        {/* Professional Membership Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border-l-4 border-[#CD091B] hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#CD091B] rounded-full"></div>
            <h3 className="text-2xl font-bold text-[#101631]">Professional Membership</h3>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-[#CD091B] mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 leading-relaxed">
                Active Committee member (ASCE/SEI): ASCE-10, ASCE-48, MOP-74, ASCE-Concrete Poles, ASCE-AFL Poles, Aesthetic Report, IEEE, NSPE
              </p>
            </div>
          
          </div>
        </div>

        {/* Academic Affiliation Section */}
        <div className="bg-gradient-to-r from-[#101631] to-[#1a2847] rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#CD091B]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#CD091B] rounded-full"></div>
              <h3 className="text-2xl font-bold">Academic Affiliation</h3>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-[#CD091B] mt-2 flex-shrink-0"></div>
                <p className="leading-relaxed">Gonzaga University</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-[#CD091B] mt-2 flex-shrink-0"></div>
                <p className="leading-relaxed">
                  Founding Member - Advanced Course in Transmission Line Structures for Master Degree Program
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-12 h-1.5 bg-gradient-to-r from-transparent via-[#CD091B] to-transparent rounded-full"></div>
      </div>
    </div>
  );
}