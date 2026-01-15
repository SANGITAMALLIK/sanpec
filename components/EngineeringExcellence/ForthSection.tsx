import React from 'react';

export default function InnovationSection() {
  const features = [
    {
      title: "A Culture of Entrepreneurship and Innovation",
      description: "SANPEC embraces a culture of innovation and entrepreneurship to continuously deliver value in a changing world."
    },
    {
      title: "Data-driven Decision",
      description: "Our engineers are trained to think beyond conventional solutions, incorporating AI-driven grid design and predictive analytics."
    },
    {
      title: "Collaboration Across Disciplines",
      description: "We bring together structural engineers, material scientists, sustainability experts, and digital innovators."
    },
    {
      title: "Purpose-Led Engineering",
      description: "Every project is an opportunity to make a difference, deploying resilient transmission structures responsibly."
    }
  ];

  return (
    <section className="relative bg-[#101631] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 max-h-[500px]">
          
          {/* Left Content - Compact Design */}
          <div className="lg:w-3/5 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-[#CD091B] rounded-full"></div>
                <span className="text-sm font-semibold text-[#CD091B] uppercase tracking-wider">
                  Innovation Excellence
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Transforming the Way Engineers Think
              </h2>
              
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Innovation at SANPEC is a deliberate and structured approach embedded in every aspect of our business culture, strategically aligned with mission-critical outcomes.
              </p>
            </div>

            {/* Compact Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#CD091B]/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-md bg-[#CD091B]/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#CD091B] group-hover:scale-125 transition-transform"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-white group-hover:text-[#CD091B] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image - Proportional and Balanced */}
          <div className="lg:w-2/5">
            <div className="relative h-full rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <img 
                src="https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture23-2-768x587.png"
                alt="Engineering Innovation"
                className="w-full h-full object-cover min-h-[300px]"
              />
              
              {/* Clean Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101631]/60 via-transparent to-transparent"></div>
              
              {/* Compact Image Badge */}
              <div className="absolute bottom-4 right-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#CD091B] animate-pulse"></div>
                    <span className="text-xs font-semibold text-white">Future-Ready</span>
                  </div>
                  <p className="text-white text-xs font-medium">
                    Cutting-edge power infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Compact Footer Note */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            Engineering excellence is a continuous journey of innovation and purpose-driven design.
          </p>
        </div>
      </div>
    </section>
  );
}