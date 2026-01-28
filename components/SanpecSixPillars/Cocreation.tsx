export default function CollaborationCoCreationPage() {
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
                    src="/images/home/six-pillars/6.png" 
                    alt="Agility"
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Pillar Badge */}
                <div className="absolute -top-3 -right-3 bg-[#cd091b] text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm">
                  02
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
                  Collaboration & Co-Creation
                </span>
                <span className="text-gray-900">
                  Collaborative Efforts For Shared Value
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
              
              {/* Card 1 - Collaborative Efforts for Shared Value */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    Collaborative Efforts for Shared Value
                  </h2>
                  <p className="leading-relaxed">
                    SANPEC's commitment to co-creation goes beyond business interests, reflecting a deep sense of responsibility and a desire to contribute positively to society.
                  </p>
                </div>
              </div>

              {/* Card 2 - Community Engagement */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    Community Engagement
                  </h2>
                  <p className="leading-relaxed">
                    SANPEC actively engages with the communities in which it operates, understanding their needs and working collaboratively to address them.
                  </p>
                </div>
              </div>

              {/* Card 3 - Co-Creation with Stakeholders */}
              <div className="group relative">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    Co-Creation with Stakeholders
                  </h2>
                  <p className=" leading-relaxed">
                    The company believes in co-creating value with stakeholders, including customers, local education institutions, sports organizations, and industry partners. This approach leads to solutions that are more aligned with stakeholders' needs and expectations.
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