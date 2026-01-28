export default function AgilityPage() {
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
                    src="/images/home/six-pillars/2.png" 
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
                  Agility
                </span>
                <span className="text-gray-900">
                  Agility and Strategic Planning
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
              
              {/* Card 1 - Adaptation and Flexibility */}
              <div className="group relative">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#cd091b] rounded-full"></span>
                    Adaptation and Flexibility in Operations
                  </h2>
                  <p className="leading-relaxed">
                    We demonstrate flexibility and responsiveness to navigate evolving industry demands, challenges, and opportunities.
                  </p>
                </div>
              </div>

              {/* Card 2 - Rapid Response */}
              <div className="group relative">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full"></span>
                    Rapid Response to Crisis and Change
                  </h2>
                  <p className="leading-relaxed">
                    At SANPEC, agility means the ability to quickly adapt to changing market conditions and customer needs. This agility is achieved through flexible operational processes and an adaptable organizational structure.
                  </p>
                </div>
              </div>

              {/* Card 3 - Innovative Problem-Solving */}
              <div className="group relative">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    Innovative Problem-Solving
                  </h2>
                  <p className="leading-relaxed">
                    Employees are encouraged to think creatively and act quickly, fostering a culture where innovative problem-solving is the norm.
                  </p>
                </div>
              </div>

              {/* Card 4 - Scalable Solutions */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h2 className="text-xl font-bold mb-3">
                  Scalable Solutions:
                </h2>
                <p className="leading-relaxed">
                  Our operational processes are designed to be scalable, enabling SANPEC to efficiently manage fluctuations in demand or shifts in market dynamics.
                </p>
              </div>

              {/* Card 5 - Resilience */}
              <div className="group relative">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold text-[#1e3a8a] mb-3 flex items-center gap-2">
                    Resilience
                  </h2>
                  <p className="leading-relaxed">
                    We design and build resilient power grids that withstand and adapt to changing conditions.
                  </p>
                </div>
              </div>

              {/* Card 6 - Health and Safety */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    Health and Safety
                  </h2>
                  <p className="leading-relaxed">
                    Ensuring the health and safety of our workforce, clients, and the communities we serve is paramount in all our endeavors.
                  </p>
                </div>
              </div>

              {/* Card 7 - Quality and Customer-focused Excellence */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h2 className="text-xl font-bold mb-3">
                  Quality and Customer-focused Excellence:
                </h2>
                <p className="leading-relaxed">
                  We are committed to upholding the highest standards in all our projects and services, ensuring quality and customer-focused excellence.
                </p>
              </div>

              {/* Card 8 - Integrity */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    Integrity
                  </h2>
                  <p className="leading-relaxed">
                    We conduct our business with the utmost integrity.
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