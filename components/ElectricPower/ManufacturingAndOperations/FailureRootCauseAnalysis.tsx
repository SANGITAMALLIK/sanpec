'use client';
import React from 'react';

export default function QualityControls() {
  const highlights = [
    'Transmission Materials: Steel Pole, Lattice Towers, and Substation Support Structures, Insulator, Conductor, OPGW, Guy Wires Shield Wires and Hardware Assembly',
    'Weld Inspections – NDT Technique',
    'Fabrication Shop Audits and on-site Inspections',
    'Material Sampling (Metallurgical and Mechanical Testing)',
    'Failure/Root Cause Analysis',
    'Field Inspection for aging transmission structures'
  ];

  const images = [
    'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture2-2.png',
    'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture22.jpg'
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-300 shadow-sm">
        <div className="mb-4 pb-3 border-b border-gray-300">
          <div className="flex items-center gap-2 text-[#CD091B]">
            <div className="w-1.5 h-1.5 bg-[#CD091B] rounded-full"></div>
            <span className="text-xs font-semibold uppercase tracking-wider">Manufacturing and Operations</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl p-4 lg:p-6 min-h-[500px] border border-gray-300 shadow-sm">
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#CD091B]">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Plant Audit, Inspections (QA/QC), ITP
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#CD091B] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                <svg className="w-4 h-4 text-[#CD091B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-base font-bold text-gray-900">Key Services</h4>
              </div>
              <div className="space-y-3">
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-[#CD091B] rounded-full group-hover:scale-150 transition-transform"></div>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-md hover:shadow-xl group">
                <img 
                  src={images[0]} 
                  alt="Plant Audit and Inspections"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="overflow-hidden rounded-xl border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-md hover:shadow-xl group">
                <img 
                  src={images[1]} 
                  alt="Quality Control Inspection"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-8 pt-6 border-t-2 border-gray-100">
            <div className="bg-gradient-to-r from-[#101631] to-gray-800 rounded-xl p-6 text-white shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold mb-2">Need Quality Assurance Services?</h4>
                  <p className="text-gray-300 text-sm">Contact us for comprehensive inspection and audit solutions</p>
                </div>
                <button className="px-8 py-3 bg-[#CD091B] hover:bg-white hover:text-[#CD091B] text-white font-semibold rounded-lg transition-all duration-300 whitespace-nowrap border-2 border-[#CD091B] shadow-md hover:shadow-xl">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}