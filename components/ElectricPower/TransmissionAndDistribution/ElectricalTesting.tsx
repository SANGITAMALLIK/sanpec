export default function ElectricalTesting() {
  return (
    <div className="bg-white rounded-xl p-6 lg:p-8 min-h-[500px] border border-gray-200 shadow-sm">
      <div className="space-y-6 animate-fadeIn">
        <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border-l-4 border-[#CD091B]">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Corona/RIV and Electrical Testing</h3>
        </div>

        <div className="overflow-hidden rounded-lg border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 shadow-sm hover:shadow-md">
          <img 
            src="/images/electric_power/3.png" 
            alt="Electrical Testing" 
            className="w-full object-cover hover:scale-110 transition-transform duration-500" 
          />
        </div>
      </div>
    </div>
  );
}