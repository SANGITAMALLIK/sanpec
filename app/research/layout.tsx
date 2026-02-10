'use client';
import React, { useState, useEffect } from 'react';
import { Home, ChevronRight, ChevronDown, ChevronUp, Menu, X, Download } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  link: string;
}

const staticMenuData = [
  {
    id: 'education',
    title: 'Education and Training',
    url: '/research'
  },
];

export default function ElectricPowerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [transmissionPosts, setTransmissionPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [isTransmissionOpen, setIsTransmissionOpen] = useState(true);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchTransmissionPosts = async () => {
      try {
        const response = await fetch(
          'https://news.sanpec-excellence.com/wp-json/wp/v2/posts?categories=36&per_page=100&_embed'
        );
        const data = await response.json();
        setTransmissionPosts(data);
      } catch (error) {
        console.error('Error fetching transmission posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransmissionPosts();
  }, []);

  const stripHtml = (html: string) => {
    if (typeof document !== 'undefined') {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
    }
    return html.replace(/<[^>]*>/g, '');
  };

  // Find active post if on single page
  const activePostSlug = pathname.split('/').pop();
  const activePost = transmissionPosts.find(post => post.slug === activePostSlug);

  // Check active states - Only one can be active at a time
  const isTransmissionActive = activePost !== undefined;
  const isRecentActive = pathname.includes('/electric-power/recent');
  const isEducationActive = !isTransmissionActive && !isRecentActive;

  // Get breadcrumb title - NO TRUNCATION, FULL TEXT
  const getBreadcrumbTitle = () => {
    if (isRecentActive) {
      return 'Recent';
    }
    if (activePost) {
      return stripHtml(activePost.title.rendered);
    }
    return 'Education and Training';
  };

  // Get FULL breadcrumb title for hover
  const getFullBreadcrumbTitle = () => {
    if (isRecentActive) {
      return 'Recent';
    }
    if (activePost) {
      return stripHtml(activePost.title.rendered);
    }
    return 'Education and Training';
  };

  const handleNavigation = (url: string) => {
    router.push(url);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Download Button */}
      <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-[300px]">
        <div className="absolute inset-0">
          <img 
            src="/images/research_bg.png" 
            alt="About Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`
            }}
          ></div>
        </div>

        {/* Download Button - Bottom Right of Hero */}
        <div className="absolute bottom-6 right-3 sm:bottom-10 sm:right-6 lg:bottom-12 lg:right-12 z-20">
          <button
            onClick={() => setIsPdfModalOpen(true)}
            className="group flex items-center gap-1 px-2 py-1 sm:gap-2.5 sm:px-6 sm:py-3 bg-white/95 backdrop-blur-sm border border-white/20 sm:border-2 text-gray-900 font-normal sm:font-semibold sm:text-base rounded sm:rounded-lg hover:bg-[#cd091b] hover:text-white hover:border-[#cd091b] transition-all duration-300 shadow-sm sm:shadow-xl hover:shadow-md sm:hover:shadow-2xl"
            style={{ fontSize: '12px' }}
          >
            <Download className="w-3 h-3 sm:w-5 sm:h-5" />
            <span className="text-[12px] sm:text-base">Download Brochure</span>
          </button>
        </div>
  
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-6 sm:pb-8 pt-20 sm:pt-0">
          <div className="mb-4 sm:mb-5">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-tight drop-shadow-lg">
              RESEARCH AND INNOVATION
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-[3px] w-12 sm:w-16 bg-[#DC2626] rounded-full"></div>
              <div className="h-[2px] w-6 sm:w-8 bg-[#DC2626]/60 rounded-full"></div>
              <div className="h-[2px] w-3 sm:w-4 bg-[#DC2626]/40 rounded-full"></div>
            </div>
          </div>
          
          {/* BREADCRUMB - 8 WORDS PER LINE */}
          <nav className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <a 
                href="/" 
                className="group flex items-center gap-1 sm:gap-1.5 text-white/70 hover:text-white transition-colors duration-300"
              >
                <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="font-medium">Home</span>
              </a>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50" />
            </div>
            <span 
              className="text-[#DC2626] font-semibold break-words leading-relaxed max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
              title={getFullBreadcrumbTitle()}
            >
              {getBreadcrumbTitle()}
            </span>
          </nav>
        </div>
  
        <div className="absolute bottom-0 left-0 w-full h-[2px]">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#DC2626]/80 to-transparent"></div>
        </div>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900">Research Menu</h3>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE SIDEBAR OVERLAY */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-[#cd091b] text-white p-4 flex items-center justify-between">
            <h3 className="text-lg font-bold">Research & Innovation</h3>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="p-4 space-y-2">
            {/* Education and Training */}
            <div>
              <div className="mb-2">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider px-2">Main</h4>
              </div>
              {staticMenuData.map((item) => {
                const isActive = item.id === 'education' ? isEducationActive : isRecentActive;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.url)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-[#cd091b] text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>

            {/* Research & Development Section */}
            <div className="pt-4 border-t border-gray-200">
              <div className="mb-2">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider px-2">Research & Development</h4>
              </div>
              <div className="space-y-1">
                {loading ? (
                  <div className="px-4 py-3 text-sm text-gray-500">Loading...</div>
                ) : (
                  transmissionPosts.map((post) => {
                    const isActive = pathname.includes(post.slug);
                    return (
                      <button
                        key={post.id}
                        onClick={() => handleNavigation(`/research/${post.slug}`)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-[#cd091b] text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        {stripHtml(post.title.rendered)}
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar + Content */}
      <div className="max-w-7_5xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* DESKTOP SIDEBAR - Tower Design */}
          <aside className="hidden lg:block w-80 bg-gradient-to-b from-gray-50 to-white lg:sticky lg:top-0 h-full lg:min-h-screen border-r border-gray-200">
            <nav className="py-8 px-6 relative">
              <div className="absolute left-8 top-0 bottom-12 w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>
              
              {/* Static Menu Items */}
              {staticMenuData.map((item) => {
                const isActive = item.id === 'education' ? isEducationActive : isRecentActive;
                
                return (
                  <div key={item.id} className="mb-6 relative">
                    <div className="absolute left-2 top-5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full shadow-md z-20"></div>
                    <div className={`absolute left-5 top-6 w-6 h-0.5 transition-all duration-300 ${isActive ? 'bg-gray-600' : 'bg-gray-400'}`}></div>

                    <div 
                      onClick={() => router.push(item.url)}
                      className={`relative ml-11 group flex items-center justify-between px-4 py-3.5 cursor-pointer transition-all duration-300 ease-out rounded-lg border-2 ${isActive ? 'border-gray-300 text-gray-900 shadow-xl' : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'}`}
                      style={isActive ? {backgroundColor: '#F3F3F3'} : {}}
                    >
                      <span className="text-sm font-semibold flex-1">{item.title}</span>
                      
                      {isActive && (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-gray-600 rounded-full animate-ping absolute"></div>
                        </div>
                      )}

                      {isActive && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                          <div className="w-8 h-px bg-gradient-to-r from-gray-400 to-gray-300"></div>
                          <div className="w-1.5 h-1.5 rotate-45 bg-gray-400 -ml-0.5"></div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Transmission Section with Dropdown */}
              <div className="mb-6 relative">
                <div className="absolute left-2 top-5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full shadow-md z-20"></div>
                <div className={`absolute left-5 top-6 w-6 h-0.5 transition-all duration-300 ${isTransmissionActive ? 'bg-gray-600' : 'bg-gray-400'}`}></div>

                <div 
                  onClick={() => setIsTransmissionOpen(!isTransmissionOpen)}
                  className={`relative ml-11 group flex items-center justify-between px-4 py-3.5 cursor-pointer transition-all duration-300 ease-out rounded-lg border-2 ${isTransmissionActive ? 'border-gray-300 text-gray-900 shadow-xl' : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'}`}
                  style={isTransmissionActive ? {backgroundColor: '#F3F3F3'} : {}}
                >
                  <span className="text-sm font-semibold flex-1">Research & Development</span>
                  
                  <div className="flex items-center gap-2">
                    {isTransmissionActive && (
                      <>
                        <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full animate-ping absolute"></div>
                      </>
                    )}
                    {isTransmissionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

                {isTransmissionOpen && (
                  <div className="ml-11 mt-2 space-y-1 max-h-96 overflow-y-auto custom-scrollbar">
                    {loading ? (
                      <div className="px-4 py-2 text-xs text-gray-500">Loading Project...</div>
                    ) : (
                      transmissionPosts.map((post) => {
                        const isActivePost = pathname.includes(post.slug);
                        return (
                          <div
                            key={post.id}
                            onClick={() => router.push(`/research/${post.slug}`)}
                            className={`px-4 py-2.5 rounded-md cursor-pointer text-sm transition-all duration-200 ${isActivePost ? 'bg-[#cd091b]/10 text-[#cd091b] font-semibold border-l-2 border-[#cd091b]' : 'text-gray-600 hover:bg-gray-100 border-l-2 border-transparent'}`}
                          >
                            {stripHtml(post.title.rendered)}
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>

              <div className="absolute left-4 bottom-0 w-9 h-12 bg-gradient-to-b from-gray-400 to-gray-500 opacity-30" 
                   style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)'}}></div>
            </nav>
          </aside>

          {/* Content Area */}
          <main className="flex-1 pl-4 pt-4 pb-4 sm:pl-6 sm:pt-6 sm:pb-6 lg:pl-8 lg:pt-8 lg:pb-8 bg-white min-h-screen">
            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
              <div className="h-0.5 bg-gray-300" />
              <div className="pl-4 pt-4 pb-4 sm:pl-6 sm:pt-0 sm:pb-6 lg:pl-8 lg:pt-0 lg:pb-8">
                {children}
              </div>
              <div className="h-2 bg-gray-100" />
            </div>
          </main>
        </div>
      </div>

      {/* OPTIMIZED PDF Modal Viewer - Instant Load */}
      {isPdfModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-7xl h-[95vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#cd091b] to-red-700 text-white">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-bold">Research and Innovation</h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/images/pdf/Research and Innovation.pdf"
                  download
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Pdf
                </a>
                <button
                  onClick={() => setIsPdfModalOpen(false)}
                  className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* OPTIMIZED PDF Viewer */}
            <div className="flex-1 overflow-auto bg-gray-100">
              <iframe
                src="/images/pdf/Research and Innovation.pdf"
                className="w-full h-full"
                title="Research and Innovation PDF"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        /* Custom Scrollbar Styling */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #888 #f1f1f1;
        }
      `}</style>
    </div>
  );
}