export default function ProcessExcellencePage() {
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
                    src="/images/home/six-pillars/4.png" 
                    alt="Process Excellence"
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Pillar Badge */}
                <div className="absolute -top-3 -right-3 bg-[#cd091b] text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm">
                  04
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
                  Process Excellence
                </span>
                <span className="text-gray-900">
                  Process Excellence
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
              
              {/* Card 1 - Process Excellence */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    Process Excellence
                  </h2>
                  <p className="leading-relaxed">
                    We have uniquely designed and implemented the processes of the Future, Today.
                  </p>
                </div>
              </div>

              {/* Card 2 - Continuous Improvement */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    Continuous Improvement in Business Processes
                  </h2>
                  <p className=" leading-relaxed">
                    We streamline process and optimize workflows to achieve precision, operational efficiency, and superior outcomes.
                  </p>
                </div>
              </div>

              {/* Card 3 - Risk Management */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    Risk Management
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our in-house risk management tools and platforms provide visibility into our end-to-end process while eliminating process gaps, mitigating risks, and identifying opportunities for improvement.
                  </p>
                </div>
              </div>

              {/* Card 4 - Improved Performance */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Improved Performance:
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We have streamlined processes, optimized systems, and enhanced dynamic workflows to deliver higher-quality products with the same resources. Additionally, we have integrated effective risk mitigation strategies throughout the value chain to ensure maximum operational performance that is aligned with our business strategy.
                </p>
              </div>

              {/* Card 5 - High-performing team */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    High-performing team
                  </h2>
                  <p className="leading-relaxed">
                    We are the only business with process management tools and technologies for building high-performing teams and creating resilient energy systems.
                  </p>
                </div>
              </div>

              {/* Card 6 - Cost Optimization */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    Cost Optimization
                  </h2>
                  <p className="leading-relaxed">
                    We have achieved excellence in execution and management while maintaining quality and managing financial investments through effective process optimization and improved resource allocation. We have enhanced operational resilience and reduced financial risks by streamlining processes and adhering to external regulations and business policies.
                  </p>
                </div>
              </div>

              {/* Card 7 - Lean and Efficient Operations */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h2 className="text-xl font-bold mb-3">
                  Lean and Efficient Operations:
                </h2>
                <p className="leading-relaxed">
                  SANPEC employs lean management principles to streamline operational activities, eliminate waste, and increase efficiency.
                </p>
              </div>

              {/* Card 8 - Sustainability Strategy */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    Sustainability Strategy
                  </h2>
                  <p className="leading-relaxed">
                    Optimizing operations with sustainability in mind reduces waste, lowers costs, enhances efficiency, and makes environmental responsibility a driver of long-term profitability.
                  </p>
                </div>
              </div>

              {/* Card 9 - Quality Management Systems */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    Quality Management Systems
                  </h2>
                  <p className="leading-relaxed">
                    The company adheres to rigorous quality management systems, ensuring that every process, from production to delivery, meets the highest standards.
                  </p>
                </div>
              </div>

              {/* Card 10 - Employee Empowerment */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h2 className="text-xl font-bold mb-3">
                  Employee Empowerment:
                </h2>
                <p className="leading-relaxed">
                  Employees are empowered to suggest improvements and innovations in processes, creating a culture of continuous improvement and excellence.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}