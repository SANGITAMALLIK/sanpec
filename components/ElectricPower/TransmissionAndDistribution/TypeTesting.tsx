export default function TypeTesting() {
  return (
    <div className="bg-white rounded-xl p-6 lg:p-8 min-h-[500px] border border-gray-200 shadow-sm">
      <div className="space-y-6 animate-fadeIn">
        <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#101631]">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Conductor/OPGW/Hardware</h3>
        
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#101631] hover:shadow-lg transition-all duration-300">
            
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
                  <span className="text-gray-700 key-feature-list leading-snug group-hover:text-gray-900 transition-colors">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              '/images/electric_power/4.png',
              '/images/electric_power/home3.png',
              '/images/electric_power/services.png',
              '/images/electric_power/home6.png'
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