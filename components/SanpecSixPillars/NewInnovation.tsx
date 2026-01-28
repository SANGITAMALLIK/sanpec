export default function NewInnovationPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          
          {/* Left Side - Pillar Image (Sticky) */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-6">
              <div className="relative group">
                {/* Main Image Card */}
                <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-5 transition-all duration-300 hover:shadow-xl hover:border-[#cd091b]">
                  <img 
                    src="/images/home/six-pillars/3.png" 
                    alt="New Innovation"
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Pillar Badge */}
                <div className="absolute -top-3 -right-3 bg-[#cd091b] text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm">
                  03
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content Area */}
          <div className="flex-1 min-w-0">
            
            {/* Title Section */}
            <div className="mb-8">
             
              
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
                <span className="text-gray-400 text-lg lg:text-xl block mb-1 uppercase tracking-wide font-semibold">
                  New Innovation
                </span>
                <span className="text-gray-900">
                  New Solutions and Innovation Management
                </span>
              </h1>
              
              {/* Decorative Line */}
              <div className="flex items-center gap-2 mt-4">
                <div className="h-1 w-20 bg-[#cd091b] rounded"></div>
                <div className="h-1 w-10 bg-gray-300 rounded"></div>
                <div className="h-1 w-5 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Content Cards */}
            <div className="space-y-5">
              
              {/* Card 1 - Cutting-Edge Research */}
              <div className="group relative">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
    
                  <p className=" leading-relaxed">
                    SANPEC is committed to staying at the forefront of technological advancements. The company invests significantly in R&D, developing new solutions that address current and future industry challenges.
                  </p>
                </div>
              </div>

              {/* Card 2 - Continuous Improvement */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className=" leading-relaxed">
                  We continuously improve develop innovative solutions to redefine the future of energy landscape.
                </p>
              </div>

              {/* Card 3 - Collaboration with Innovators */}
              <div className="group relative">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            
                  <p className=" leading-relaxed">
                    Partnerships with leading innovators and academic institutions are key to SANPEC's strategy, ensuring access to the latest technologies and thought leadership.
                  </p>
                </div>
              </div>

              {/* Card 4 - Innovation Management */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                 
                  <p className="leading-relaxed">
                    Emphasis is placed on developing solutions that are aligned with ISO-Innovation management practices.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}