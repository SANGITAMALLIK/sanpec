export default function SystemsAndStructuresPage() {
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
                    src="/images/home/six-pillars/1.png" 
                    alt="Systems Perspective"
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Pillar Badge */}
                <div className="absolute -top-3 -right-3 bg-[#cd091b] text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm">
                  01
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
                  System Perspective
                </span>
                <span className="text-gray-900">
                  Systems Approach and Foresight
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
              
              {/* Card 1 - Visionary Leadership */}
              <div className="group relative">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                
                  <p className="leading-relaxed">
                    SANPEC adopts a holistic perspective to integrate components, ensuring efficiency, reliability, and synergy across operations.
                  </p>
                </div>
              </div>

              {/* Card 2 - Business View */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="leading-relaxed">
                  We view the business as a cohesive whole rather than a collection of independent parts. This approach ensures that decisions and strategies are made with consideration of their impact across all departments and functions.
                </p>
              </div>

              {/* Card 3 - Strategic Synergy */}
              <div className="group relative">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                 
                  <p className="leading-relaxed">
                    By integrating various business functions—from research and engineering to manufacturing—SANPEC ensures that all efforts align with the company's strategic goals, leading to more efficient and effective outcomes.
                  </p>
                </div>
              </div>

              {/* Card 4 - Feedback Loops */}
              <div className="group relative">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                 
                  <p className="leading-relaxed">
                    Regular feedback mechanisms are embedded within the system, allowing for continuous monitoring and adaptation of strategies based on real-time data and market trends.
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