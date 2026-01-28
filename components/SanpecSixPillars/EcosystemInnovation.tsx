export default function EcosystemInnovationPage() {
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
                    src="/images/home/six-pillars/5.png" 
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
                  Ecosystem Innovation
                </span>
                <span className="text-gray-900">
                  Innovation Within The Business Ecosystem
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
              
              {/* Card 1 - Innovation within the Business Ecosystem */}
              <div className="group relative">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    Innovation within the Business Ecosystem
                  </h2>
                  <p className="leading-relaxed">
                    We build strong partnerships across sectors and stakeholders to foster impactful, collective solutions.
                  </p>
                </div>
              </div>

              {/* Card 2 - Collaborative Ecosystem */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    Collaborative Ecosystem
                  </h2>
                  <p className=" leading-relaxed">
                    SANPEC fosters a collaborative ecosystem comprising suppliers, partners, and customers. This ecosystem approach leads to shared innovation and value creation.
                  </p>
                </div>
              </div>

              {/* Card 3 - Open Innovation Model */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    Open Innovation Model
                  </h2>
                  <p className="leading-relaxed">
                    The company embraces an open innovation model, where external ideas and technologies are integrated with entire value-chain to drive innovation.
                  </p>
                </div>
              </div>

              {/* Card 4 - Supply Chain Resilience */}
              <div className="group relative">
                <div className=" bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-xl font-bold  mb-3 flex items-center gap-2">
                    Supply Chain Resilience
                  </h2>
                  <p className="leading-relaxed">
                    SANPEC strives to ensure that its supply chain is efficient and resilient, aligning with its commitment to ethical standards.
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