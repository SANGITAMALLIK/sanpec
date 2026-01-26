'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function SunZiaCaseStudy() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const contentHeight = contentRef.current.scrollHeight;
        
        const scrollableDistance = contentHeight - windowHeight;
        const scrolled = Math.max(0, -rect.top);
        const progress = Math.min((scrolled / scrollableDistance) * 100, 100);
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-2 py-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="relative min-h-[400px]">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: 'url("/images/sanpec_2026/7.jpeg?auto=format&fit=crop&w=1920&q=80")',
              }}
            ></div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
            
            {/* Content */}
            <div className="relative px-8 py-12 md:px-12 md:py-16">
              <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#CD091B' }}>
                <span className="text-white text-sm font-semibold tracking-wider uppercase">SANPEC</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                SunZia - A Crown Jewel of American Infrastructure
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#CD091B' }}></div>
                  <span className="font-semibold">3,500 MW Capacity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#CD091B' }}></div>
                  <span className="font-semibold">550-Mile HVDC Line</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#CD091B' }}></div>
                  <span className="font-semibold">Largest in U.S. History</span>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
      <div className="max-w-7_5xl mx-auto px-6">
        {/* Hero Section */}
      

        {/* Main Content */}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Vertical Image Slider - LEFT SIDE */}
          <div className="md:col-span-3">
            <div className="sticky top-6">
              {/* SPEED CONTROL: Is number ko badao/ghatao scrolling speed change karne ke liye
                  - Zyada value = slow scrolling (e.g., 0.8)
                  - Kam value = fast scrolling (e.g., 0.5)
                  Current value: 0.6 (medium-fast)
              */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white" style={{ height: '75vh', maxHeight: '650px' }}>
                <div 
                  className="relative w-full h-full transition-transform duration-300 ease-out"
                  style={{ 
                    transform: `translateY(-${scrollProgress * 0.7}%)`, // ⬅️ YAHAN SPEED CHANGE KARO (0.6 ko badao ya ghatao)
                  }}
                >
                  {images.map((num) => (
                    <div key={num} className="relative w-full">
                      <img
                        src={`/images/sanpec_2026/${num}.jpeg`}
                        alt={`SunZia Project ${num}`}
                        className="w-full object-cover brightness-105 contrast-105 saturate-110"
                        style={{ height: 'auto' }}
                      />
                      {/* Image Overlay Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 pointer-events-none"></div>
                    </div>
                  ))}
                </div>
                
                {/* Enhanced Gradient Overlays */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 via-black/20 to-transparent pointer-events-none"></div>
                
                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 rounded-tl-lg pointer-events-none" style={{ borderColor: '#CD091B' }}></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 rounded-br-lg pointer-events-none" style={{ borderColor: '#CD091B' }}></div>
              </div>
              
              {/* Scrolling Indicator */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="h-1 w-full bg-gray-300 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-300"
                    style={{ 
                      width: `${scrollProgress}%`,
                      backgroundColor: '#CD091B'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

        
        
          {/* Content */}
          <div className="md:col-span-9 space-y-8" ref={contentRef}>
            {/* Section 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-1 h-12 rounded-full" style={{ backgroundColor: '#CD091B' }}></div>
                <div className="flex-1">
                  <p className="leading-relaxed mb-4" style={{ color: '#000000' }}>
                    The SunZia Wind and Transmission Project stands as a remarkable achievement in American infrastructure, embodying the nation's commitment to advancing sustainable energy, fostering technological innovation, and supporting long-term community development. Spanning over 3,500 MW of renewable wind energy generation and featuring a 550-mile high-voltage direct current (HVDC) transmission line, SunZia is not only the largest renewable energy infrastructure project in U.S. history but also one of the most sophisticated and ambitious energy initiatives ever undertaken in the country. Located across New Mexico and Arizona, the project has significantly transformed the energy landscape of the American Southwest, positioning it as a vital component of the United States' renewable energy future.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-1 h-12 rounded-full" style={{ backgroundColor: '#CD091B' }}></div>
                <div className="flex-1">
                  <p className="leading-relaxed" style={{ color: '#000000' }}>
                    As a pioneering project in renewable energy, SunZia reflects a systems-based approach that integrates wind energy generation with a cutting-edge transmission network. The high-capacity HVDC transmission line is capable of efficiently delivering clean, renewable energy across vast distances, a critical factor in improving grid stability and reliability in regions that are increasingly reliant on renewable energy sources. This approach maximizes the potential of clean energy by addressing challenges related to transmission loss, reliability, and grid management, making SunZia a crucial asset in the push for a more sustainable and resilient energy system.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-1 h-12 rounded-full" style={{ backgroundColor: '#CD091B' }}></div>
                <div className="flex-1">
                  <p className="leading-relaxed" style={{ color: '#000000' }}>
                    Beyond its technological achievements, SunZia has had a profound economic and social impact on the region. The project has created more than 2,000 construction jobs at its peak and will support over 150 permanent operational positions once fully operational. These employment opportunities, along with the substantial economic contributions in the form of tax revenue, land payments, and local business engagement, have provided significant benefits to local communities, landowners, and governments across New Mexico and Arizona. The project has revitalized local economies, supported small businesses, and delivered long-term financial stability through job creation and tax revenue generation.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-1 h-12 rounded-full" style={{ backgroundColor: '#CD091B' }}></div>
                <div className="flex-1">
                  <p className="leading-relaxed" style={{ color: '#000000' }}>
                    SunZia also exemplifies how large-scale infrastructure projects can drive progress not only through innovation but also through sustainable development practices. The project's commitment to environmental stewardship, through the careful siting of wind farms and responsible management of natural resources, highlights the critical role of sustainable practices in modern energy development. The integration of advanced technologies such as smart grid solutions and real-time data analytics further enhances the project's ability to operate efficiently, ensuring its long-term success and minimal environmental impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-1 h-12 rounded-full" style={{ backgroundColor: '#CD091B' }}></div>
                <div className="flex-1">
                  <p className="leading-relaxed mb-4" style={{ color: '#000000' }}>
                    The SunZia project is more than just a technological and engineering achievement; it serves as a beacon of American ingenuity. It demonstrates how quality infrastructure, built with foresight and attention to detail, can transform both the energy sector and the communities it serves. The project stands as a testament to the nation's ability to combine engineering excellence with environmental sustainability, setting a new standard for future infrastructure projects.
                  </p>
                  <p className="leading-relaxed" style={{ color: '#000000' }}>
                    As one of the most ambitious and successful energy projects in U.S. history, SunZia is an enduring symbol of the country's leadership in the global energy transition. It highlights the importance of quality assurance, engineering innovation, and community engagement in the realization of large-scale infrastructure projects that not only address current energy needs but also anticipate future demands. SunZia is an example of how a forward-thinking approach can create lasting benefits for both the environment and the economy, positioning it as a proud achievement for the United States.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Section */}
            <div className="rounded-xl p-8" style={{ backgroundColor: '#c6c6c6' }}>
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 rounded-full" style={{ backgroundColor: '#CD091B' }}></div>
                <div className="flex-1">
                  <p className="leading-relaxed" style={{ color: '#000000' }}>
                    This case study will explore how SANPEC played a pivotal role in ensuring the highest standards of quality assurance throughout the SunZia project. By adhering to stringent quality management processes, integrating continuous improvement practices, and maintaining a steadfast commitment to sustainability, SANPEC ensured the successful delivery of the project. The case study will highlight how these practices contributed to the overall success of SunZia, offering a model for future energy infrastructure projects both in the U.S. and globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision of Quality Section */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="px-8 py-10 md:px-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#CD091B' }}>
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h1 className="text-3xl md:text-4xl" style={{ color: '#101631' }}>
                  The Vision of Quality in the SunZia Project
                </h1>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* SANPEC's Dedication */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-1 h-16 rounded-full" style={{ backgroundColor: '#CD091B' }}></div>
                <div className="flex-1">
                  <h2 className="text-2xl mb-4" style={{ color: '#101631' }}>SANPEC's Dedication to Quality</h2>
                  <div className="space-y-4 leading-relaxed" style={{ color: '#000000' }}>
                    <p>
                      The SunZia Wind and Transmission Project stands as a testament to SANPEC's exceptional dedication to quality assurance, where every phase of the project, from design and engineering to construction and long-term operation, was meticulously managed to uphold the highest standards of performance, safety, and sustainability. SANPEC's approach to quality was firmly rooted in international best practices, ensuring that the SunZia Project met stringent industry standards while adapting to the evolving needs of the energy sector.
                    </p>
                    <p>
                      A cornerstone of SANPEC's quality management framework was its alignment with ISO 9000, the globally recognized standard for quality management systems (QMS). This framework guided SANPEC in delivering quality-focused solutions at every stage of the project lifecycle, with an emphasis on continuous improvement, customer satisfaction, and the effective use of resources. The application of ISO 9000 standards ensured that all processes, from design conceptualization to final system integration, were carried out with a focus on quality control and adherence to performance benchmarks.
                    </p>
                    <p>
                      A particularly impactful aspect of SANPEC's approach was its emphasis on systems-thinking methodologies, which underscored the interdependencies of various components in the SunZia infrastructure. By viewing the project holistically, SANPEC ensured that each individual aspect of the project, whether it was the wind farm design, transmission line construction, or grid resilience strategies, was aligned to optimize the overall system's performance. This approach emphasized efficiency, safety, and environmental responsibility, which were essential in delivering a sustainable energy infrastructure project.
                    </p>
                    <p>
                      To further enhance the long-term sustainability of the project, SANPEC took proactive steps to ensure the environmental impact of the SunZia project was minimized. This was achieved by using environmentally friendly materials, employing smart grid solutions, and incorporating real-time data analytics for grid monitoring and optimization. As a result, the project has been designed to not only deliver clean, renewable energy but also to mitigate the environmental footprint of energy transmission infrastructure.
                    </p>
                    <p>
                      Through systems-thinking, SANPEC created an integrated solution where all aspects of the SunZia project functioned in unison, maximizing both performance and environmental stewardship. This approach ensured that quality assurance was embedded at every level of the project, ensuring both its technical success and its alignment with broader sustainability goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ISO Alignment Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-1 h-16 rounded-full" style={{ backgroundColor: '#CD091B' }}></div>
                <div className="flex-1">
                  <h2 className="text-2xl mb-4" style={{ color: '#101631' }}>ISO 9000 & ISO 56000 Alignment</h2>
                  <div className="space-y-4 leading-relaxed" style={{ color: '#000000' }}>
                    <p>
                      A crucial element in the SunZia project's success was its alignment with two pivotal ISO standards: ISO 9000, which focuses on quality management systems, and ISO 56000, which emphasizes innovation management. These international standards provided the framework for ensuring continuous improvement, driving the project toward excellence while fostering a culture of innovation and sustainability. The integration of these standards was key to delivering an energy infrastructure project capable of adapting to future challenges while maintaining the highest levels of quality and reliability.
                    </p>
                    <p>
                      The ISO 9000 framework provided SANPEC with a robust structure for managing and controlling quality across the project's entire lifecycle. This ensured that SunZia adhered to best practices in project management, supplier quality management, and performance monitoring. By integrating ISO 9000 standards, SANPEC was able to identify, monitor, and mitigate risks associated with quality throughout the project's duration, from initial planning and design to construction and operations. Furthermore, ISO 9000 helped SANPEC manage project timelines and budgets effectively, ensuring that the project was delivered on time and within budget, without compromising quality.
                    </p>
                    <p>
                      On the other hand, ISO 56000 provided SANPEC with the tools to integrate continuous innovation as a fundamental aspect of the project. ISO 56000 encourages organizations to leverage innovation as a key driver for achieving resilience and sustainability in their operations. Throughout the SunZia Project, SANPEC employed innovation-driven solutions that allowed for enhanced grid resilience, the incorporation of smart grid technologies, and the integration of renewable energy sources into the grid. This alignment with ISO 56000 ensured that innovation was not just an afterthought but a core component of the project's overall strategy, enabling SunZia to be adaptable to future energy demands and technological advancements.
                    </p>
                    <p>
                      The focus on innovation at SANPEC was clearly reflected in the advanced technologies deployed in the SunZia Project, such as real-time data analytics for grid management and energy storage systems that optimize renewable energy distribution. These innovations were not only critical to the project's operational efficiency but also aligned with ISO 56000's principles of fostering adaptive systems that can continuously evolve in response to future needs.
                    </p>
                    <p>
                      By aligning with both ISO 9000 and ISO 56000, SANPEC ensured that the SunZia Project was not only a feat of engineering excellence but also a model of sustainable innovation. The project demonstrated that quality infrastructure, when supported by systems thinking and innovation-driven solutions, can deliver long-term benefits, improving grid resilience, advancing the integration of renewable energy, and ensuring environmental responsibility.
                    </p>
                    <p>
                      In conclusion, SANPEC's commitment to quality assurance through ISO 9000 and ISO 56000 was instrumental in ensuring that the SunZia Project achieved world-class standards in both engineering performance and sustainability. The integration of innovation management practices alongside rigorous quality control processes not only enhanced the project's current success but also set the foundation for its future adaptability and resilience, ensuring its place as a global model for large-scale energy infrastructure projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}