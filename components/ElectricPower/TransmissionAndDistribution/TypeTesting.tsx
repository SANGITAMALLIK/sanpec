export default function TypeTesting() {
  return (
    <div className="bg-white rounded-xl p-6 lg:p-8 min-h-[500px] border border-gray-200 shadow-sm">
      <div className="space-y-6 animate-fadeIn">
        <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#101631]">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Conductor/OPGW/Hardware Testing</h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Comprehensive material and component testing for transmission line reliability and longevity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#101631] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
              <svg className="w-4 h-4 text-[#101631]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h4 className="text-base font-bold text-gray-900">Testing Services</h4>
            </div>
            <div className="space-y-2">
              {[
                'Inspection of T Line Materials (Steel Poles, Towers, Substation Structures, Insulators, etc.)',
                'Weld Inspections (NDT Techniques)',
                'Fabrication Shop Audits and On-Site Inspections',
                'Material Sampling for Metallurgical/Mechanical Testing',
                'Failure/Root Cause Analysis',
                'Field Inspections for Aging Transmission Infrastructure'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-1 h-1 bg-[#101631] rounded-full group-hover:scale-150 transition-transform"></div>
                  </div>
                  <span className="text-gray-700 text-xs leading-snug group-hover:text-gray-900 transition-colors">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              'https://sanpec-excellence.com/wp-content/uploads/2025/01/home2.png',
              'https://sanpec-excellence.com/wp-content/uploads/2025/01/home3.png',
              'https://sanpec-excellence.com/wp-content/uploads/2025/01/services.png',
              'https://sanpec-excellence.com/wp-content/uploads/2025/01/home6.png'
            ].map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg border-2 border-gray-200 hover:border-[#101631] transition-all duration-300 shadow-sm hover:shadow-md group">
                <img src={img} alt={`Type Testing ${idx + 1}`} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}