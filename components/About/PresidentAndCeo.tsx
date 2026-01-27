import React from 'react';

export default function SanpecProfile() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Simplified Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(gray 1px, transparent 1px), linear-gradient(90deg, gray 1px, transparent 1px)`,
          backgroundSize: '90px 90px'
        }}></div>
      </div>

      {/* Simple Top Bar */}

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section with CEO Image */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8 border border-gray-200">
          <div className="grid md:grid-cols-5 gap-0">
            {/* CEO Image Section - Light Gray Background */}
            <div className="md:col-span-2 bg-gray-100 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full bg-white p-1 shadow-sm border border-gray-200">
                  <img 
                    src="https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture41.png" 
                    alt="CEO Ajay Mallik" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-gray-600 font-semibold text-sm uppercase tracking-wide mb-1">President & CEO</p>
                  <h2 className="text-gray-900 text-2xl md:text-3xl font-bold">Ajay Mallik, P.E.</h2>
                  <p className="text-gray-600 text-sm mt-2">SANPEC, Inc.</p>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-1">The Company</h3>
                  <div className="h-1 w-24 bg-gray-300 rounded-full"></div>
                </div>
                <span className="text-base font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">Since 2009</span>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 mb-1">Baldrige Leadership Excellence Award 2023</p>
                    <p className="text-gray-600 text-sm">(Quality/Resiliency/Sustainability)</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 mb-1">Registered Engineering Firm in Texas</p>
                    <p className="text-gray-600 text-sm">(F# 11048)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gray-300 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-900">Experience in T&D Line Engineering, Testing and Inspections (QA/QC)</h3>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
            <p className="text-gray-700 leading-relaxed">
              Over 160 years of combined worldwide experiences in Design, Engineering analysis and Audit/Source Inspection services for Steel Poles, Lattice Towers, Insulators & Hardware, Conductor, OPGW, Guys Wires and Shield Wire (HVAC and HVDC)
            </p>
          </div>
        </div>

        {/* Project Management Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gray-300 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-900">Project Management Team</h3>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
            <p className="text-gray-700 leading-relaxed">
              Experienced and award-winning professionals with extensive and innovative engineering experience in managing large transmission projects successfully
            </p>
          </div>
        </div>

        {/* Professional Membership Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gray-300 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-900">Professional Membership</h3>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 leading-relaxed">
                Active Committee member (ASCE/SEI): ASCE-10, ASCE-48, MOP-74, ASCE-Concrete Poles, ASCE-AFL Poles, Aesthetic Report, IEEE, NSPE
              </p>
            </div>
          </div>
        </div>

        {/* Academic Affiliation Section */}
        <div className="bg-gray-800 rounded-lg shadow-sm p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gray-400 rounded-full"></div>
            <h3 className="text-2xl font-bold">Academic Affiliation</h3>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
              <p className="leading-relaxed">Gonzaga University</p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
              <p className="leading-relaxed">
                Founding Member - Advanced Course in Transmission Line Structures for Master Degree Program
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-12 h-1 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
}