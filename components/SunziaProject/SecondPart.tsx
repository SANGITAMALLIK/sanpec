import React from 'react';

export default function SunZiaQAFramework() {
  const frameworkAreas = [
    {
      number: "1",
      title: "Planning",
      content: "The planning phase was crucial for setting clear and measurable quality goals and aligning them with the project's objectives. SANPEC's QA framework established test plans, resource schedules, and performance benchmarks to guide the execution of the project. By focusing on detailed planning, SANPEC ensured that SunZia adhered to established quality standards from the outset. Every critical aspect of the project was planned with a focus on quality, and processes were designed to identify and address potential issues before they could disrupt the project's timelines or budget."
    },
    {
      number: "2",
      title: "Documentation",
      content: "A well-structured documentation process is vital to ensuring consistency and traceability in any large-scale project. SANPEC implemented a robust system for documenting all aspects of the SunZia Project, from work instructions to internal audits. This system ensured that the project adhered to standard operating procedures, which helped maintain alignment with ISO 9000 quality standards. Additionally, documentation ensured that any deviations from the set plan were well-documented and communicated to relevant stakeholders, which minimized errors and enhanced the transparency of project execution."
    },
    {
      number: "3",
      title: "Change Management",
      content: "In large-scale infrastructure projects like SunZia, changes to scope, schedule, or resources are inevitable. SANPEC's QA framework included a formalized change management process that ensured all project updates were handled in an organized and transparent manner. By establishing formal approval processes and clear communication channels, SANPEC minimized the potential impact of changes on the overall quality and timeline of the project. This structured approach to change management allowed for quick adjustments without compromising the project's core objectives, ensuring that quality standards were continuously met, even when the project faced unforeseen challenges."
    },
    {
      number: "4",
      title: "Supplier Quality Management",
      content: "The success of SunZia was also contingent on the quality of materials and services provided by external vendors. SANPEC applied a stringent supplier quality management process to evaluate vendors and ensure that all materials met the highest standards. By working closely with suppliers, SANPEC ensured that all components, ranging from wind turbine equipment to transmission line materials, were not only reliable but also aligned with sustainability goals. Through supplier evaluations and continuous monitoring, SANPEC maintained the integrity of the project, ensuring that all delivered materials and services met the predefined specifications."
    }
  ];

  const riskManagement = {
    number: "5",
    title: "Risk Management",
    content: "A key component of SANPEC's QA framework was its proactive risk management strategy. This approach included risk identification, assessment, mitigation, and contingency planning for each phase of the project. By conducting regular risk assessments and planning for potential disruptions, SANPEC minimized the impact of unforeseen challenges. This proactive approach was particularly important given the scale and complexity of the SunZia Project, where risks related to weather conditions, regulatory changes, and technical challenges could have caused significant delays or additional costs. By integrating risk management throughout the project lifecycle, SANPEC ensured that SunZia remained on schedule and within budget, while still adhering to the highest quality standards."
  };

  const processImprovements = [
    {
      title: "Root Cause Analysis and Corrective Actions",
      content: "SANPEC applied root cause analysis techniques to identify and address any issues early in the project. By systematically analyzing the underlying causes of potential defects or inefficiencies, SANPEC could implement corrective actions that eliminated the risk of recurrence. This proactive approach ensured that issues were resolved before they escalated into more significant challenges. In the case of the AC to DC transformation process, where high-quality performance was particularly crucial, this process was critical in ensuring that the transition from alternating current (AC) to direct current (DC) transmission was seamless and efficient, without compromising the project's quality or reliability."
    },
    {
      title: "Continuous Feedback Loops",
      content: "Another key aspect of SANPEC's quality management was its use of continuous feedback loops. These loops ensured that quality standards were maintained throughout the entire project, from design to construction to operation. By incorporating regular feedback from various stakeholders, including engineers, suppliers, and operational teams, SANPEC was able to identify and address any potential quality issues promptly. This feedback mechanism allowed the project to stay on track while continuously improving processes, which was especially crucial in the context of innovative technologies and the scale of the SunZia Project."
    },
    {
      title: "Lean Six Sigma in Eliminating Waste",
      content: "The use of Lean Six Sigma principles was central to SANPEC's strategy for eliminating waste and improving efficiency across all phases of the SunZia Project. Lean Six Sigma focuses on minimizing inefficiencies while maximizing value, ensuring that resources were used effectively and that the project met its goals in a timely and cost-efficient manner. Through the application of Six Sigma tools, SANPEC was able to identify areas where processes could be improved, reducing waste and improving the quality of the final output. This approach was particularly effective in optimizing construction timelines, minimizing resource wastage, and ensuring that SunZia was completed on time and within budget, without compromising on the project's sustainability or resilience."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7_5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* Hero Title Section */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: '#CD091B' }}></div>
          <div className="px-8 py-12 md:px-16 md:py-16">
            <div className="flex items-start gap-6">
              <div className="hidden md:block w-3 rounded-full" style={{ backgroundColor: '#101631', minHeight: '120px' }}></div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4" style={{ color: '#101631', fontWeight: 'normal' }}>
                  The Role of SANPEC's QA Framework in Achieving Excellence
                </h1>
                <div className="w-24 h-1.5 rounded-full mt-6" style={{ backgroundColor: '#CD091B' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive QA Framework Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-10 border-l-8" style={{ borderColor: '#CD091B' }}>
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: '#101631', fontWeight: 'normal' }}>
              Comprehensive QA Framework
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#000000' }}>
              SANPEC's Quality Assurance (QA) framework for the SunZia Wind and Transmission Project was designed to uphold the highest standards of performance, efficiency, and reliability. It laid a structured foundation for managing every phase of the project, ensuring not only its success but also its sustainability. The QA framework was integral in maintaining quality control and ensuring continuous improvement throughout the design, construction, and operation of the infrastructure. The framework covered several key areas, each contributing to the overall achievement of engineering excellence.
            </p>
          </div>

          {/* Framework Areas Grid - First 4 cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {frameworkAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <div className="p-6 border-b-4" style={{ 
                  backgroundColor: 'white',
                  borderColor: index % 2 === 0 ? '#cccccc' : '#cccccc'
                }}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg" 
                         style={{ backgroundColor: index % 2 === 0 ? '#CD091B' : '#101631', fontWeight: 'bold' }}>
                      {area.number}
                    </div>
                    <h3 className="text-2xl flex-1" style={{ color: '#101631', fontWeight: 'normal' }}>
                      {area.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8 bg-gray-50">
                  <p className="leading-relaxed text-base" style={{ color: '#000000' }}>
                    {area.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Risk Management - Full Width Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="p-6 border-b-4" style={{ 
              backgroundColor: 'white',
              borderColor: '#CD091B'
            }}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg" 
                     style={{ backgroundColor: '#CD091B', fontWeight: 'bold' }}>
                  {riskManagement.number}
                </div>
                <h3 className="text-2xl flex-1" style={{ color: '#101631', fontWeight: 'normal' }}>
                  {riskManagement.title}
                </h3>
              </div>
            </div>
            <div className="p-8 bg-gray-50">
              <p className="leading-relaxed text-base" style={{ color: '#000000' }}>
                {riskManagement.content}
              </p>
            </div>
          </div>
        </div>

        {/* Defect Prevention Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-10 border-l-8" style={{ borderColor: '#101631' }}>
          <h2 className="text-3xl md:text-4xl mb-6" style={{ color: '#101631', fontWeight: 'normal' }}>
            Defect Prevention and Process Improvement
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#000000' }}>
            One of the most critical elements of SANPEC's QA framework was its focus on defect prevention and continuous process improvement. The implementation of root cause analysis, corrective actions, and continuous feedback loops played a pivotal role in ensuring that defects were minimized, and performance remained at the highest level throughout the project.
          </p>
        </div>

        {/* Process Improvements */}
        <div className="space-y-8 mb-16">
          {processImprovements.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2 w-full h-2 md:h-auto" style={{ backgroundColor: index === 0 ? '#CD091B' : index === 1 ? '#101631' : '#CD091B' }}></div>
                <div className="flex-1 p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" 
                           style={{ backgroundColor: index === 0 ? '#CD091B' : index === 1 ? '#101631' : '#CD091B' }}>
                        <span className="text-white text-2xl" style={{ fontWeight: 'bold' }}>{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-4" style={{ color: '#101631', fontWeight: 'normal' }}>
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-base" style={{ color: '#000000' }}>
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: '#CD091B' }}></div>
            <div className="absolute bottom-0 left-0 w-full h-2" style={{ backgroundColor: '#101631' }}></div>
            <div className="p-10 md:p-16">
              <div className="flex items-start gap-6 mb-6">
                <div className="hidden md:block w-2 rounded-full" style={{ backgroundColor: '#CD091B', minHeight: '160px' }}></div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl mb-8" style={{ color: '#101631', fontWeight: 'normal' }}>
                    Conclusion
                  </h2>
                  <p className="leading-relaxed text-lg" style={{ color: '#000000' }}>
                    In conclusion, SANPEC's comprehensive QA framework played a pivotal role in ensuring the success of the SunZia Project by addressing every aspect of quality management. Through careful planning, thorough documentation, change management, and supplier quality control, SANPEC established a foundation of excellence. The emphasis on defect prevention, root cause analysis, and the use of Lean Six Sigma principles ensured that the project not only met but exceeded industry standards. The continuous improvement process integrated within the QA framework was key to adapting to the challenges of large-scale infrastructure development, ensuring the SunZia Project remains a leading example of engineering excellence and quality assurance in the renewable energy sector.
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