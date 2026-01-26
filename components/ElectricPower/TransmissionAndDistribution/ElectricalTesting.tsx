export default function ElectricalTesting() {
  return (
    <div className="bg-white rounded-xl p-6 lg:p-8 min-h-[500px] border border-gray-200 shadow-sm">
      <div className="space-y-6 animate-fadeIn">
        <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#CD091B]">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Corona/RIV and Electrical Testing</h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Advanced electrical testing solutions for transmission systems including corona discharge, radio interference voltage, and comprehensive electrical performance validation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#CD091B] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
              <svg className="w-4 h-4 text-[#CD091B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <h4 className="text-base font-bold text-gray-900">Testing Capabilities</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              {[
                'Corona Discharge Testing',
                'Radio Interference Voltage (RIV) Measurement',
                'Partial Discharge Detection',
                'High Voltage Testing',
                'Insulation Resistance Testing',
                'Dielectric Strength Tests'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-[#CD091B] rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-700 key-feature-list group-hover:text-gray-900 transition-colors">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              'https://sanpec-excellence.com/wp-content/uploads/2025/01/home6.png',
              'https://sanpec-excellence.com/wp-content/uploads/2025/01/inspection.png',
              'https://sanpec-excellence.com/wp-content/uploads/2025/01/services.png',
              'https://sanpec-excellence.com/wp-content/uploads/2025/01/home2.png'
            ].map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-sm hover:shadow-md group">
                <img src={img} alt={`Electrical Testing ${idx + 1}`} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
