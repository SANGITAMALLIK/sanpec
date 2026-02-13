'use client';

import { useState, useEffect } from 'react';
import { Printer, Sun, Moon, Award, GraduationCap, Briefcase, Sparkles, TrendingUp } from 'lucide-react';

// ALL COMPONENTS IN ONE FILE - READY FOR /sangita-mallik ROUTE

export default function SangitaMallikPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-96 h-96 ${darkMode ? 'bg-gray-700/5' : 'bg-gray-300/10'} rounded-full blur-3xl animate-pulse`} style={{animationDuration: '4s'}}></div>
        <div className={`absolute bottom-0 left-0 w-80 h-80 ${darkMode ? 'bg-gray-600/5' : 'bg-gray-400/10'} rounded-full blur-3xl animate-pulse`} style={{animationDuration: '6s', animationDelay: '1s'}}></div>
      </div>

      {/* HEADER */}
      <ProfileHeader darkMode={darkMode} onDarkModeToggle={setDarkMode} />

      {/* MAIN CONTENT */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* SIDEBAR */}
          <aside className="lg:col-span-3">
            <div className="sticky top-6">
              <Sidebar darkMode={darkMode} />
            </div>
          </aside>

          {/* CONTENT SECTIONS */}
          <div className="lg:col-span-9 space-y-6 lg:space-y-8">
            
            <Section id="summary" title="Early Life and Education" darkMode={darkMode}>
              <p>Sangita P. Mallik, co-founder and Executive Vice President of SANPEC Inc., has been a beacon of leadership and innovation in the energy sector, earning her widespread recognition and numerous awards. Her commitment to excellence, sustainability, and resilience has not only propelled SANPEC to new heights but has also garnered her prestigious accolades that highlight her contributions to the industry and beyond.</p>
              <br />
              <p>Among her most notable achievements is the 2023 Baldrige Award for Leadership Excellence in the "Business" category, a testament to her visionary leadership and the impactful work of SANPEC under her guidance. This award, given by the Baldrige Foundation, recognizes leaders who have demonstrated an unwavering commitment to quality, performance excellence, and organizational sustainability. Sangita's receipt of this award underscores her role as a transformative leader who has significantly advanced engineering practices within the energy sector.</p>
              <br />
              <p>Sangita's leadership and contributions have also been recognized by her induction into the Mac Baldrige Society, where she serves as a Trustee of the Baldrige Foundation's Institute for Performance Excellence. This role not only honors her achievements but also positions her as a key influencer in shaping the future of organizational excellence and resilience.</p>
              <br />
              <p>Her awards and recognitions extend beyond individual accolades, reflecting her ability to inspire her team and drive SANPEC towards achieving its mission of improving the resilience and reliability of power grid systems. Sangita's awards are a reflection of her dedication to fostering a culture of innovation, her strategic approach to managing change, and her commitment to building a sustainable future through education and outreach. Through these honors, Sangita P. Mallik's legacy as a leader and innovator continues to inspire and impact the energy sector and beyond.</p>
            </Section>

            <Section id="appointments" title="Career Beginnings and Vision" darkMode={darkMode}>
              <p>Sangita P. Mallik's career is a narrative of ambition, innovation, and a steadfast commitment to transforming the energy sector. Her journey from an eager graduate to a visionary leader in the field of electric power transmission and distribution encapsulates a blend of technical acumen, strategic foresight, and a deep-seated desire to contribute to a sustainable future.</p>
              <br />
              <p>Upon completing her education with a focus on electrical engineering, Sangita embarked on her professional path in an industry poised at the cusp of significant transformation. The early stages of her career were characterized by a keen interest in the technical challenges of power grid systems and a recognition of the critical need for sustainable energy solutions. Sangita's initial roles involved hands-on engineering tasks, where she applied her academic knowledge to practical challenges, quickly distinguishing herself through her problem-solving skills and innovative approach to complex issues.</p>
              <br />
              <p>Sangita's vision began to take shape as she observed the broader implications of energy systems on environmental sustainability and societal well-being. She understood early on that the future of energy lay in resilience and sustainability—principles that must underpin the development and modernization of global power infrastructures. This realization drove Sangita to explore and advocate for the integration of renewable energy sources, smart grid technologies, and energy efficiency measures as foundational elements of a resilient power grid.</p>
              <br />
              <p>Driven by this vision, Sangita transitioned from technical roles to leadership positions, where she could exert a greater influence on the strategic direction of energy projects. Her career trajectory saw her leading teams in designing, engineering, and implementing projects that not only enhanced the reliability and efficiency of power distribution systems but also prioritized environmental sustainability. Sangita's leadership was marked by a collaborative approach, fostering innovation and knowledge sharing among her teams and with external partners to drive forward the adoption of cutting-edge solutions in the energy sector.</p>
              <br />
              <p>A pivotal moment in Sangita's career was the co-founding of SANPEC, Inc., a venture that embodied her commitment to engineering excellence and sustainable business practices. Through SANPEC, Sangita has been able to realize her vision on a larger scale, influencing the energy sector's evolution towards greater resilience and sustainability. The company specializes in the design, engineering, testing, and quality management of electric power, lighting, and renewable energy infrastructures, reflecting Sangita's holistic approach to energy systems.</p>
              <br />
              <p>Under Sangita's leadership, SANPEC has become a beacon of innovation and sustainability in the energy sector. Her vision extends beyond the technical aspects of power systems to encompass the development of a future-ready workforce and the promotion of sustainable community practices. Sangita believes in the power of education and outreach to inspire the next generation of engineers and environmental stewards, dedicating time and resources to mentoring and teaching initiatives.</p>
              <br />
              <p>Sangita's career beginnings and her visionary leadership at SANPEC highlight her profound impact on the energy sector. Her journey from an engineer passionate about sustainable energy solutions to an executive leading a company at the forefront of the industry's transformation exemplifies the potential for individual vision and determination to drive meaningful change. Sangita P. Mallik's story is not just one of personal achievement but a testament to the role visionary leaders play in shaping a more sustainable and resilient future for all.</p>
            </Section>

            <Section id="education" title="Organizational Resilience and Sustainability" darkMode={darkMode}>
              <p>Sangita P. Mallik's contributions to organizational resilience and sustainability have positioned her as a distinguished leader in the realm of energy infrastructure and quality management. Her work, deeply rooted in the principles of the Baldrige Performance Excellence Program and her leadership role at SANPEC, Inc., showcases a profound commitment to advancing sustainable practices and resilience within organizations and the broader community.</p>
              <br />
              <p>At the core of Sangita's philosophy is the belief that organizational resilience is not merely about surviving in the face of disruptions but thriving through innovation, adaptability, and continuous improvement. This belief has driven her to implement strategies that enhance the robustness of energy systems against environmental, technological, and geopolitical challenges. Through SANPEC, Sangita has led initiatives focused on the design, engineering, and implementation of power grid systems that are not only efficient and reliable but also sustainable and adaptable to changing environmental conditions.</p>
              <br />
              <p>Sangita's approach to sustainability extends beyond environmental considerations to encompass economic and social dimensions, aligning with the triple bottom line framework. She advocates for energy solutions that minimize ecological impact while maximizing social and economic benefits. This holistic perspective on sustainability has led to projects that prioritize renewable energy integration, energy efficiency, and the reduction of carbon footprints, contributing to the global transition towards cleaner energy sources.</p>
              <br />
              <p>Under Sangita's guidance, SANPEC has become a model for how businesses can contribute to sustainable development goals. Her leadership has fostered a culture of innovation within the organization, encouraging the exploration of new technologies and methodologies that can further the cause of sustainability. Sangita's work in organizational resilience also involves a strong focus on education and capacity building. Recognizing the critical role of a skilled and informed workforce in achieving sustainability and resilience objectives, she has invested in training and development programs that equip employees with the knowledge and skills needed to navigate and lead in a rapidly evolving energy landscape.</p>
              <br />
              <p>Moreover, Sangita's efforts extend beyond the confines of her organization. She actively engages with the wider community, sharing insights and best practices through speaking engagements, workshops, and mentorship programs. Her work with the Baldrige Foundation and as a member of the Mac Baldrige Society underscores her commitment to promoting excellence across industries. Through these platforms, Sangita advocates for the adoption of quality management principles that support organizational resilience and sustainability.</p>
              <br />
              <p>Sangita's influence is also evident in her contributions to policy discussions and collaborations aimed at shaping a sustainable energy future. Her expertise has informed policy recommendations and strategic initiatives that seek to balance economic growth with environmental stewardship and social equity. By serving as a bridge between the private sector, government agencies, and non-profit organizations, Sangita plays a pivotal role in advancing a cohesive and comprehensive approach to sustainability and resilience.</p>
              <br />
              <p>In summary, Sangita P. Mallik's work on organizational resilience and sustainability is characterized by a forward-thinking approach that integrates technical innovation with a commitment to environmental and social responsibility. Her leadership at SANPEC, coupled with her active involvement in quality management and sustainability advocacy, exemplifies how visionary leaders can drive meaningful change. Sangita's contributions not only enhance the resilience and sustainability of organizations but also inspire a broader movement towards a more sustainable and resilient future.</p>
            </Section>

            <Section id="awards" title="Youth, Education, and Outreach" darkMode={darkMode}>
              <p>Sangita P. Mallik's work in the realms of youth, education, and outreach stands as a testament to her belief in the transformative power of knowledge and community engagement. As the co-founder and Executive Vice President of SANPEC, Inc., Sangita has not only led the company to the forefront of energy infrastructure innovation but has also dedicated herself to nurturing the next generation of leaders and thinkers. Her efforts in this area reflect a deep commitment to creating a more sustainable, resilient, and equitable world through education and empowerment.</p>
              <br />
              <p>Sangita's approach to youth and education is holistic, recognizing that the challenges of the 21st century—ranging from climate change to technological disruption—require a new kind of leadership. She has been instrumental in developing programs that bridge the gap between academic knowledge and real-world application, ensuring that young people are equipped with the skills and understanding necessary to navigate and shape the future. Through partnerships with educational institutions, Sangita has facilitated the integration of sustainability and resilience into curricula, fostering a culture of innovation and critical thinking among students.</p>
              <br />
              <p>Her outreach initiatives extend beyond the classroom, involving community-based projects that offer hands-on learning experiences. These projects not only serve as a platform for youth to apply their knowledge but also encourage them to engage with their communities, promoting values of service and collaboration. Sangita's work in this area demonstrates a recognition of the importance of community in personal and professional development, as well as the role of young people in driving social change.</p>
              <br />
              <p>Moreover, Sangita's commitment to education and outreach is evident in her advocacy for accessible and inclusive learning opportunities. She has been a vocal proponent of programs that aim to reduce barriers to education, particularly for underrepresented and disadvantaged groups. By supporting scholarships, mentorship programs, and internships, Sangita has helped open doors for countless individuals, providing them with the resources and support needed to pursue their aspirations.</p>
              <br />
              <p>Sangita's influence also extends to the broader educational landscape through her involvement with the Baldrige Foundation and other quality and performance excellence organizations. In these roles, she has championed the adoption of excellence models in educational settings, arguing for a systemic approach to improving quality and outcomes in schools and universities. Her efforts have contributed to a growing recognition of the importance of leadership, strategic planning, and stakeholder engagement in educational excellence.</p>
              <br />
              <p>In addition to her work with youth and educational institutions, Sangita's outreach initiatives have encompassed a wide range of community engagement activities. From environmental conservation projects to initiatives aimed at improving public health and welfare, her work has had a tangible impact on communities. Sangita believes in the power of collective action and has consistently sought to mobilize resources and expertise to address community needs.</p>
              <br />
              <p>Sangita P. Mallik's contributions to youth, education, and outreach reflect a profound understanding of the interconnectedness of these areas with the broader goals of sustainability and resilience. Through her visionary leadership and unwavering commitment to empowerment and community service, Sangita has made a lasting impact on the lives of young people and on the communities in which they live. Her work serves as an inspiring example of how dedication, innovation, and collaboration can create a brighter future for all.</p>
            </Section>

            <Section id="research" title="Awards and Recognition" darkMode={darkMode}>
              <p>Sangita P. Mallik, co-founder and Executive Vice President of SANPEC Inc., has been a beacon of leadership and innovation in the energy sector, earning her widespread recognition and numerous awards. Her commitment to excellence, sustainability, and resilience has not only propelled SANPEC to new heights but has also garnered her prestigious accolades that highlight her contributions to the industry and beyond.</p>
              <br />
              <p>Among her most notable achievements is the 2023 Baldrige Award for Leadership Excellence in the "Business" category, a testament to her visionary leadership and the impactful work of SANPEC under her guidance. This award, given by the Baldrige Foundation, recognizes leaders who have demonstrated an unwavering commitment to quality, performance excellence, and organizational sustainability. Sangita's receipt of this award underscores her role as a transformative leader who has significantly advanced engineering practices within the energy sector.</p>
              <br />
              <p>Sangita's leadership and contributions have also been recognized by her induction into the Mac Baldrige Society, where she serves as a Trustee of the Baldrige Foundation's Institute for Performance Excellence. This role not only honors her achievements but also positions her as a key influencer in shaping the future of organizational excellence and resilience.</p>
              <br />
              <p>Her awards and recognitions extend beyond individual accolades, reflecting her ability to inspire her team and drive SANPEC towards achieving its mission of improving the resilience and reliability of power grid systems. Sangita's awards are a reflection of her dedication to fostering a culture of innovation, her strategic approach to managing change, and her commitment to building a sustainable future through education and outreach. Through these honors, Sangita P. Mallik's legacy as a leader and innovator continues to inspire and impact the energy sector and beyond.</p>
            </Section>

            <Section id="grants" title="Partnerships and Collaborations" darkMode={darkMode}>
              <p>Understanding the power of collaboration, Sangita has spearheaded partnerships that amplify SANPEC's mission. Her work with the Baldrige Foundation and strategic alliances within the energy sector exemplify her belief in co-creation of value and shared success. These partnerships have been instrumental in advancing SANPEC's goals of grid modernization, resilience, and sustainability.</p>
            </Section>

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <SiteFooter darkMode={darkMode} />
    </div>
  );
}

// ==================== PROFILE HEADER COMPONENT ====================
function ProfileHeader({ darkMode, onDarkModeToggle }: { darkMode: boolean; onDarkModeToggle: (val: boolean) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-transparent transition-all duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative">
        <div className={`${
          darkMode 
            ? 'bg-gray-800/40 border-gray-700/50 shadow-2xl shadow-gray-900/20' 
            : 'bg-white/60 border-gray-200/80 shadow-2xl shadow-gray-300/50'
          } backdrop-blur-xl rounded-3xl border transition-all duration-500 overflow-hidden hover:shadow-3xl ${isScrolled ? 'scale-[0.98]' : 'scale-100'}`}>
          
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              
              {/* Profile Image */}
              <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-spin-slow"></div>
                  
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full border-4 border-white shadow-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                    <img src="/images/sangita-mallik.webp" alt="SANGITA P.MALLIK" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className={`absolute -bottom-2 -right-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-800'} text-white p-2 rounded-full shadow-lg animate-bounce-slow`}>
                    <Award size={20} />
                  </div>
                </div>
                
                <div className={`mt-6 flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-600/20 border border-gray-500/40' : 'bg-gray-100 border border-gray-200'}`}>
                  <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Available for Consulting</span>
                </div>
              </div>
              
              {/* Name & Info */}
              <div className="flex-1 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>
                      SANGITA P. MALLIK
                    </h1>
                    <Sparkles className={darkMode ? 'text-gray-400' : 'text-gray-600'} size={24} />
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                    <p className="text-xl sm:text-2xl font-bold">Co-Founder & EVP @ SANPEC, Inc</p>
                  </div>
                  
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-600/20 border border-gray-500/40' : 'bg-gray-100 border border-gray-200'}`}>
                    <TrendingUp className={darkMode ? 'text-gray-400' : 'text-gray-600'} size={16} />
                    <p className={`text-sm sm:text-base font-semibold italic ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                      "A Beacon of Resilience, Sustainability, and Leadership"
                    </p>
                  </div>
                </div>
                
                {/* Roles */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className={`group flex items-center gap-2 ${darkMode ? 'bg-gradient-to-r from-gray-700/20 to-gray-600/20 border-gray-500/40 hover:border-gray-400' : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300 hover:border-gray-500'} border-2 px-4 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                      <GraduationCap className={darkMode ? 'text-gray-400' : 'text-gray-600'} size={18} />
                      <span className={`text-sm font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Graduate Programs Coordinator</span>
                    </div>
                    <div className={`group flex items-center gap-2 ${darkMode ? 'bg-gradient-to-r from-gray-600/20 to-gray-700/20 border-gray-500/40 hover:border-gray-400' : 'bg-gradient-to-r from-gray-100 to-gray-50 border-gray-300 hover:border-gray-500'} border-2 px-4 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                      <Briefcase className={darkMode ? 'text-gray-400' : 'text-gray-600'} size={18} />
                      <span className={`text-sm font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Assistant Professor</span>
                    </div>
                  </div>
                  
                  <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3 leading-relaxed`}>
                    <p className="text-base sm:text-lg font-medium">
                      In the dynamic and ever-evolving landscape of energy, sustainability, and organizational resilience, Sangita P. Mallik stands out as a visionary leader whose life's work transcends conventional boundaries.
                    </p>
                    <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Co-founder and Executive Vice President of SANPEC Inc., Sangita has been instrumental in steering the company towards groundbreaking achievements in electric power transmission and distribution.
                    </p>
                  </div>
                </div>
                
                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    className={`group relative flex items-center gap-2 px-6 py-3 rounded-xl font-semibold overflow-hidden bg-gradient-to-r ${darkMode ? 'from-gray-700 to-gray-800' : 'from-gray-700 to-gray-900'} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    onClick={() => window.print()}
                  >
                    <Printer className="relative z-10" size={18} />
                    <span className="relative z-10">Print / Save PDF</span>
                  </button>
                  
                  <button 
                    className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white border-2 border-gray-600 hover:border-gray-500' 
                        : 'bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 hover:border-gray-400 shadow-lg'
                    }`}
                    onClick={() => onDarkModeToggle(!darkMode)}
                  >
                    {darkMode ? <Sun className="group-hover:rotate-180 transition-transform duration-500" size={18} /> : <Moon className="group-hover:rotate-180 transition-transform duration-500" size={18} />}
                    <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-8 flex justify-center gap-2 opacity-50`}>
          <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-400'} animate-pulse`}></div>
          <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gray-500' : 'bg-gray-500'} animate-pulse`} style={{animationDelay: '0.2s'}}></div>
          <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gray-400' : 'bg-gray-600'} animate-pulse`} style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

// ==================== SIDEBAR COMPONENT ====================
function Sidebar({ darkMode }: { darkMode: boolean }) {
  const [activeSection, setActiveSection] = useState('#summary');
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Early Life', href: '#summary' },
    { label: 'Career Beginnings', href: '#appointments' },
    { label: 'Organizational Resilience', href: '#education' },
    { label: 'Youth & Education', href: '#awards' },
    { label: 'Awards', href: '#research' },
    { label: 'Partnerships', href: '#grants' },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScrollState = () => setIsScrolled(window.scrollY > 500);
    window.addEventListener('scroll', handleScrollState);
    return () => window.removeEventListener('scroll', handleScrollState);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
          const sectionHeight = section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[i].href);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const getCurrentIndex = () => navItems.findIndex(item => item.href === activeSection);

  return (
    <div className={`${
      darkMode 
        ? 'bg-gray-800/40 border-gray-700/50 shadow-2xl shadow-gray-900/10' 
        : 'bg-white/60 border-gray-200/80 shadow-xl shadow-gray-200/30'
    } backdrop-blur-xl rounded-2xl border transition-all duration-500 overflow-hidden hover:shadow-2xl`}>
      
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"></div>
        <div className="relative p-5 text-white">
          <h2 className="font-bold text-lg">Navigation</h2>
          <p className="text-gray-300 text-sm font-medium">Quick Access</p>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Nav Items */}
        <ul className="space-y-1.5">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-300 transform hover:scale-[1.02] ${
                  activeSection === item.href
                    ? darkMode
                      ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg shadow-gray-900/30'
                      : 'bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg shadow-gray-400/50'
                    : darkMode
                      ? 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-900'
                }`}
              >
                <span className="flex-1 font-medium">{item.label}</span>
                {activeSection === item.href && (
                  <span className="text-white">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Progress */}
        <div className={`p-4 rounded-xl border ${darkMode ? 'bg-gray-900/50 border-gray-700' : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'}`}>
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Reading Progress</span>
            <span className={`text-sm font-bold ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              {mounted ? `${Math.round(((getCurrentIndex() + 1) / navItems.length) * 100)}%` : '0%'}
            </span>
          </div>
          <div className={`h-2 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-full overflow-hidden shadow-inner`}>
            <div 
              className="h-full bg-gradient-to-r from-gray-500 via-gray-600 to-gray-800 rounded-full transition-all duration-500"
              style={{ width: mounted ? `${((getCurrentIndex() + 1) / navItems.length) * 100}%` : '0%' }}
            ></div>
          </div>
          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2.5 text-center font-medium`}>
            Section {mounted ? getCurrentIndex() + 1 : 0} of {navItems.length}
          </p>
        </div>

        {/* Scroll to Top */}
        {mounted && isScrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
              darkMode
                ? 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white shadow-lg'
                : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white shadow-lg'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>Back to Top</span>
          </button>
        )}
      </div>
    </div>
  );
}

// ==================== SECTION COMPONENT ====================
function Section({ id, title, children, darkMode }: { id: string; title: string; children: React.ReactNode; darkMode: boolean }) {
  const getGradientClass = () => {
    const gradients = ['from-gray-500 to-gray-700', 'from-gray-600 to-gray-800', 'from-gray-700 to-gray-900', 'from-gray-400 to-gray-600', 'from-gray-500 to-gray-800', 'from-gray-600 to-gray-900'];
    const index = Math.abs(id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % gradients.length;
    return gradients[index];
  };

  return (
    <section 
      id={id} 
      className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden hover:shadow-2xl ${
        darkMode 
          ? 'bg-gray-800/40 border-gray-700/50 shadow-xl shadow-gray-900/10 hover:border-gray-600' 
          : 'bg-white/60 border-gray-200/80 shadow-xl shadow-gray-200/30 hover:border-gray-300'
      } backdrop-blur-xl p-6 sm:p-8`}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getGradientClass()} transition-all duration-500 group-hover:h-1.5`}></div>
      
      <div className="mb-6 pb-4 border-b border-gray-200/50">
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${getGradientClass()} flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <div className="flex-1">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-2 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {title}
            </h2>
            <div className="flex items-center gap-2">
              <div className={`h-0.5 w-16 bg-gradient-to-r ${getGradientClass()} rounded-full transition-all duration-500 group-hover:w-24`}></div>
              <div className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-gray-500' : 'bg-gray-600'} animate-pulse`}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={`leading-relaxed space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {children}
      </div>
    </section>
  );
}

// ==================== FOOTER COMPONENT ====================
function SiteFooter({ darkMode }: { darkMode: boolean }) {
  return (
    <footer className="relative mt-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/flag_bg.jpg)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-800/80 to-gray-700/85"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-12 sm:py-16">
        <div className="max-w-4xl space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
            Sangita P. Mallik –
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/95 font-medium leading-snug italic drop-shadow-xl">
            'A Beacon of Resilience, Sustainability, and Leadership'.
          </p>
          
          <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-3xl drop-shadow-lg">
            Looking ahead, Sangita envisions a world where energy systems are not only efficient and reliable but also inherently sustainable and resilient. Her ongoing efforts to develop a future-ready workforce, coupled with her advocacy for a balanced approach to energy production and consumption, reflect her commitment to a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  );
}