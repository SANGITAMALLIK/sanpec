'use client';

import { useState, useEffect } from 'react';
import { 
  Printer, Sun, Moon, Award, GraduationCap, Briefcase, 
  Sparkles, TrendingUp, User, BookOpen, Target, Users, 
  Zap, ChevronRight, Quote 
} from 'lucide-react';

export default function SangitaMallikPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${
      darkMode 
        ? 'bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      {/* Subtle pattern overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${darkMode ? '#ffffff' : '#1e3a8a'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating blobs for dark mode */}
      {darkMode && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      )}

      <ProfileHeader darkMode={darkMode} onDarkModeToggle={setDarkMode} />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-6 space-y-6">
              <SidebarProfileCard darkMode={darkMode} />
              <SidebarNav darkMode={darkMode} />
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
            <Section id="summary" title="Early Life and Education" darkMode={darkMode} icon={<BookOpen className="w-6 h-6" />}>
              <p>Sangita P. Mallik, co-founder and Executive Vice President of SANPEC Inc., has been a beacon of leadership and innovation in the energy sector, earning her widespread recognition and numerous awards. Her commitment to excellence, sustainability, and resilience has not only propelled SANPEC to new heights but has also garnered her prestigious accolades that highlight her contributions to the industry and beyond.</p>
              <br />
              <p>Among her most notable achievements is the 2023 Baldrige Award for Leadership Excellence in the "Business" category, a testament to her visionary leadership and the impactful work of SANPEC under her guidance. This award, given by the Baldrige Foundation, recognizes leaders who have demonstrated an unwavering commitment to quality, performance excellence, and organizational sustainability. Sangita's receipt of this award underscores her role as a transformative leader who has significantly advanced engineering practices within the energy sector.</p>
              <br />
              <p>Sangita's leadership and contributions have also been recognized by her induction into the Mac Baldrige Society, where she serves as a Trustee of the Baldrige Foundation's Institute for Performance Excellence. This role not only honors her achievements but also positions her as a key influencer in shaping the future of organizational excellence and resilience.</p>
              <br />
              <p>Her awards and recognitions extend beyond individual accolades, reflecting her ability to inspire her team and drive SANPEC towards achieving its mission of improving the resilience and reliability of power grid systems. Sangita's awards are a reflection of her dedication to fostering a culture of innovation, her strategic approach to managing change, and her commitment to building a sustainable future through education and outreach. Through these honors, Sangita P. Mallik's legacy as a leader and innovator continues to inspire and impact the energy sector and beyond.</p>
            </Section>

            <Section id="appointments" title="Career Beginnings and Vision" darkMode={darkMode} icon={<Target className="w-6 h-6" />}>
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

            <Section id="education" title="Organizational Resilience and Sustainability" darkMode={darkMode} icon={<Zap className="w-6 h-6" />}>
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

            <Section id="awards" title="Youth, Education, and Outreach" darkMode={darkMode} icon={<Users className="w-6 h-6" />}>
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

            <Section id="research" title="Awards and Recognition" darkMode={darkMode} icon={<Award className="w-6 h-6" />}>
              <p>Sangita P. Mallik, co-founder and Executive Vice President of SANPEC Inc., has been a beacon of leadership and innovation in the energy sector, earning her widespread recognition and numerous awards. Her commitment to excellence, sustainability, and resilience has not only propelled SANPEC to new heights but has also garnered her prestigious accolades that highlight her contributions to the industry and beyond.</p>
              <br />
              <p>Among her most notable achievements is the 2023 Baldrige Award for Leadership Excellence in the "Business" category, a testament to her visionary leadership and the impactful work of SANPEC under her guidance. This award, given by the Baldrige Foundation, recognizes leaders who have demonstrated an unwavering commitment to quality, performance excellence, and organizational sustainability. Sangita's receipt of this award underscores her role as a transformative leader who has significantly advanced engineering practices within the energy sector.</p>
              <br />
              <p>Sangita's leadership and contributions have also been recognized by her induction into the Mac Baldrige Society, where she serves as a Trustee of the Baldrige Foundation's Institute for Performance Excellence. This role not only honors her achievements but also positions her as a key influencer in shaping the future of organizational excellence and resilience.</p>
              <br />
              <p>Her awards and recognitions extend beyond individual accolades, reflecting her ability to inspire her team and drive SANPEC towards achieving its mission of improving the resilience and reliability of power grid systems. Sangita's awards are a reflection of her dedication to fostering a culture of innovation, her strategic approach to managing change, and her commitment to building a sustainable future through education and outreach. Through these honors, Sangita P. Mallik's legacy as a leader and innovator continues to inspire and impact the energy sector and beyond.</p>
            </Section>

            <Section id="grants" title="Partnerships and Collaborations" darkMode={darkMode} icon={<Users className="w-6 h-6" />}>
              <p>Understanding the power of collaboration, Sangita has spearheaded partnerships that amplify SANPEC's mission. Her work with the Baldrige Foundation and strategic alliances within the energy sector exemplify her belief in co-creation of value and shared success. These partnerships have been instrumental in advancing SANPEC's goals of grid modernization, resilience, and sustainability.</p>
            </Section>

          </div>
        </div>
      </main>

      <SiteFooter darkMode={darkMode} />
    </div>
  );
}

// ==================== PROFILE HEADER ====================
function ProfileHeader({ darkMode, onDarkModeToggle }: { darkMode: boolean; onDarkModeToggle: (val: boolean) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative w-full overflow-hidden">
      {/* Dark blue background with grid lines (always visible) */}
      <div className="absolute inset-0 bg-[#101631]">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #4f5b8a 1px, transparent 1px),
              linear-gradient(to bottom, #4f5b8a 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-24 lg:pt-28 lg:pb-16">
        <div className={`transform transition-transform duration-500 ${isScrolled ? 'scale-95' : 'scale-100'}`}>
          {/* No card background anymore – content directly on blue */}
          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
              
              {/* Profile image with animated ring */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-xl opacity-60 animate-pulse" />
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white/80 shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img src="/images/sangita_mallik.webp" alt="Sangita P. Mallik" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 p-3 rounded-full bg-blue-500 text-white shadow-lg animate-bounce-slow">
                  <Award size={24} />
                </div>
              </div>

              {/* Header content – text light on dark background */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
                    SANGITA P. MALLIK
                  </h1>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-800/30 text-blue-100 border border-blue-500/50">
                      Co-Founder & EVP @ SANPEC, Inc
                    </span>
                    <span className="px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 bg-gray-800/40 text-gray-200 border border-gray-600">
                      <TrendingUp size={16} />
                      Available for Consulting
                    </span>
                  </div>
                </div>

                {/* Tagline with quote icon */}
                <div className="relative p-6 rounded-2xl bg-blue-950/40 border border-blue-700/50">
                  <Quote className="absolute top-3 left-3 w-8 h-8 text-white/20" />
                  <p className="text-lg md:text-xl font-medium italic relative z-10 pl-8 text-blue-100">
                    "A Beacon of Resilience, Sustainability, and Leadership"
                  </p>
                </div>

                {/* Roles and description */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-blue-700/50 bg-blue-800/20">
                      <GraduationCap className="text-blue-300" size={18} />
                      <span className="font-medium text-blue-100">Graduate Programs Coordinator</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-blue-700/50 bg-blue-800/20">
                      <Briefcase className="text-blue-300" size={18} />
                      <span className="font-medium text-blue-100">Assistant Professor</span>
                    </div>
                  </div>
                  
                  <p className="text-base leading-relaxed max-w-3xl text-blue-100/80">
                    In the dynamic and ever-evolving landscape of energy, sustainability, and organizational resilience, Sangita P. Mallik stands out as a visionary leader whose life's work transcends conventional boundaries. Co-founder and Executive Vice President of SANPEC Inc., Sangita has been instrumental in steering the company towards groundbreaking achievements in electric power transmission and distribution.
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                  <button 
                    className="group flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/50"
                    onClick={() => window.print()}
                  >
                    <Printer size={18} />
                    Print / Save PDF
                  </button>
                  
                  <button 
                    className="group flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border-2 bg-transparent border-blue-600 text-blue-200 hover:bg-blue-900/30"
                    onClick={() => onDarkModeToggle(!darkMode)}
                  >
                    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ==================== SIDEBAR PROFILE CARD ====================
function SidebarProfileCard({ darkMode }: { darkMode: boolean }) {
  return (
    <div className={`p-6 rounded-2xl backdrop-blur-xl border ${
      darkMode 
        ? 'bg-blue-900/40 border-blue-800/50 shadow-xl shadow-blue-900/20' 
        : 'bg-white/70 border-gray-200/80 shadow-lg shadow-gray-200/50'
    }`}>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-500/30">
          <img src="/images/sangita_mallik.webp" alt="Sangita P. Mallik" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>Sangita P. Mallik</h3>
          <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-gray-600'}`}>EVP @ SANPEC, Inc.</p>
        </div>
      </div>
    </div>
  );
}

// ==================== SIDEBAR NAVIGATION ====================
function SidebarNav({ darkMode }: { darkMode: boolean }) {
  const [activeSection, setActiveSection] = useState('#summary');
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Early Life', href: '#summary', icon: <BookOpen size={18} /> },
    { label: 'Career Beginnings', href: '#appointments', icon: <Target size={18} /> },
    { label: 'Organizational Resilience', href: '#education', icon: <Zap size={18} /> },
    { label: 'Youth & Education', href: '#awards', icon: <Users size={18} /> },
    { label: 'Awards', href: '#research', icon: <Award size={18} /> },
    { label: 'Partnerships', href: '#grants', icon: <Users size={18} /> },
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
    <div className={`rounded-2xl backdrop-blur-xl border overflow-hidden ${
      darkMode 
        ? 'bg-blue-900/40 border-blue-800/50 shadow-xl shadow-blue-900/20' 
        : 'bg-white/70 border-gray-200/80 shadow-lg shadow-gray-200/50'
    }`}>
      <div className="p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href
                    ? darkMode
                      ? 'bg-blue-700/70 text-white shadow-md'
                      : 'bg-blue-100 text-blue-800 shadow-md'
                    : darkMode
                      ? 'text-blue-100 hover:bg-blue-800/50'
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className={activeSection === item.href ? 'text-white' : darkMode ? 'text-blue-300' : 'text-gray-500'}>
                  {item.icon}
                </span>
                <span className="flex-1">{item.label}</span>
                {activeSection === item.href && (
                  <ChevronRight size={16} className="animate-pulse" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Progress indicator */}
        <div className={`mt-6 p-4 rounded-xl border ${
          darkMode ? 'bg-blue-950/50 border-blue-800' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold ${darkMode ? 'text-blue-200' : 'text-gray-600'}`}>Reading progress</span>
            <span className={`text-sm font-bold ${darkMode ? 'text-blue-300' : 'text-gray-700'}`}>
              {mounted ? `${Math.round(((getCurrentIndex() + 1) / navItems.length) * 100)}%` : '0%'}
            </span>
          </div>
          <div className={`h-2 rounded-full ${darkMode ? 'bg-blue-950' : 'bg-gray-200'}`}>
            <div 
              className={`h-full rounded-full transition-all duration-500 ${
                darkMode ? 'bg-gradient-to-r from-blue-500 to-blue-400' : 'bg-gradient-to-r from-blue-600 to-blue-400'
              }`}
              style={{ width: mounted ? `${((getCurrentIndex() + 1) / navItems.length) * 100}%` : '0%' }}
            />
          </div>
          <p className={`text-xs text-center mt-2 ${darkMode ? 'text-blue-300' : 'text-gray-500'}`}>
            Section {mounted ? getCurrentIndex() + 1 : 0} of {navItems.length}
          </p>
        </div>

        {/* Back to top */}
        {mounted && isScrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
              darkMode
                ? 'bg-blue-700 hover:bg-blue-600 text-white shadow-lg'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </button>
        )}
      </div>
    </div>
  );
}

// ==================== SECTION COMPONENT ====================
function Section({ id, title, children, darkMode, icon }: { id: string; title: string; children: React.ReactNode; darkMode: boolean; icon?: React.ReactNode }) {
  return (
    <section 
      id={id} 
      className={`group rounded-2xl backdrop-blur-xl border overflow-hidden transition-all duration-300 hover:shadow-2xl ${
        darkMode 
          ? 'bg-blue-900/30 border-blue-800/50 shadow-xl shadow-blue-900/20 hover:border-blue-600' 
          : 'bg-white/70 border-gray-200/80 shadow-lg shadow-gray-200/50 hover:border-blue-300'
      }`}
    >
      {/* Colored top bar */}
      <div className={`h-2 w-full bg-gradient-to-r ${
        darkMode ? 'from-blue-500 to-blue-400' : 'from-blue-600 to-blue-400'
      }`} />
      
      <div className="p-8">
        {/* Title with icon */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200/30">
          {icon && (
            <div className={`p-3 rounded-xl ${
              darkMode ? 'bg-blue-800/50 text-blue-200' : 'bg-blue-100 text-blue-700'
            }`}>
              {icon}
            </div>
          )}
          <div>
            <h2 className={`text-2xl md:text-3xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {title}
            </h2>
            <div className={`h-1 w-20 mt-2 rounded-full ${
              darkMode ? 'bg-blue-500' : 'bg-blue-400'
            }`} />
          </div>
        </div>

        {/* Content */}
        <div className={`prose prose-lg max-w-none ${
          darkMode ? 'prose-invert text-blue-50' : 'text-gray-700'
        }`}>
          {children}
        </div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================
function SiteFooter({ darkMode }: { darkMode: boolean }) {
  return (
    <footer className="relative mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800/50 dark:to-gray-900/50" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Sangita P. Mallik –
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 font-medium italic mb-6">
          'A Beacon of Resilience, Sustainability, and Leadership'.
        </p>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
          Looking ahead, Sangita envisions a world where energy systems are not only efficient and reliable but also inherently sustainable and resilient. Her ongoing efforts to develop a future-ready workforce, coupled with her advocacy for a balanced approach to energy production and consumption, reflect her commitment to a sustainable future.
        </p>
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Sangita P. Mallik. All rights reserved.
        </div>
      </div>
    </footer>
  );
}