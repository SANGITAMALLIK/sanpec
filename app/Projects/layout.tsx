'use client';
import React, { useState, useEffect } from 'react';
import { Home, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
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
    id: 'recent',
    title: 'Recent',
    url: '/electric-power/recent'
  }
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

  useEffect(() => {
    const fetchTransmissionPosts = async () => {
      try {
        const response = await fetch(
          'https://news.sanpec-excellence.com/wp-json/wp/v2/posts?categories=42&_embed&per_page=100'
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

  // Check if current page is a transmission post
  const isTransmissionActive = pathname.includes('/electric-power/transmission');
  const isRecentActive = pathname.includes('/electric-power/recent');
  
  // Find active post if on single page
  const activePostSlug = pathname.split('/').pop();
  const activePost = transmissionPosts.find(post => post.slug === activePostSlug);

  // Get breadcrumb title
  const getBreadcrumbTitle = () => {
    if (isRecentActive) {
      return 'Recent';
    }
    if (activePost) {
      return stripHtml(activePost.title.rendered);
    }
    return 'Project';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-[300px]">
        <div className="absolute inset-0">
          <img 
            src="/images/1.png" 
            alt="Electric Power Background"
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

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-6 sm:pb-8 pt-20 sm:pt-0">
          <div className="mb-3 sm:mb-5">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-tight drop-shadow-lg">
              T&D PROJECTS
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-[3px] w-12 sm:w-16 bg-[#cd091b] rounded-full"></div>
              <div className="h-[2px] w-6 sm:w-8 bg-[#cd091b]/60 rounded-full"></div>
              <div className="h-[2px] w-3 sm:w-4 bg-[#cd091b]/40 rounded-full"></div>
            </div>
          </div>
          
          <nav className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <a 
              href="/" 
              className="group flex items-center gap-1 sm:gap-1.5 text-white/70 hover:text-white transition-colors duration-300"
            >
              <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-medium">Home</span>
            </a>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50" />
            <span className="text-white/70 font-medium">Project</span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50" />
            <span className="text-[#cd091b] font-semibold">{getBreadcrumbTitle()}</span>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px]">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#cd091b]/80 to-transparent"></div>
        </div>
      </div>

      {/* MOBILE TAB MENU */}
      <div className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="py-3 space-y-2">
            {/* Transmission Dropdown */}
            <div>
              <button
                onClick={() => setIsTransmissionOpen(!isTransmissionOpen)}
                className={`
                  w-full flex items-center justify-between px-4 py-2 rounded-lg text-xs font-semibold
                  transition-all duration-300
                  ${isTransmissionActive
                    ? 'bg-[#cd091b] text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                <span>Transmission</span>
                {isTransmissionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {isTransmissionOpen && (
                <div className="mt-2 pl-4 space-y-1 max-h-64 overflow-y-auto">
                  {loading ? (
                    <div className="px-4 py-2 text-xs text-gray-500">Loading...</div>
                  ) : (
                    transmissionPosts.map((post) => (
                      <button
                        key={post.id}
                        onClick={() => router.push(`/Projects/transmission/${post.slug}`)}
                        className={`
                          w-full text-left px-4 py-2 rounded-md text-xs
                          transition-all duration-200
                          ${pathname.includes(post.slug)
                            ? 'bg-[#cd091b]/10 text-[#cd091b] font-semibold'
                            : 'text-gray-600 hover:bg-gray-100'
                          }
                        `}
                      >
                        {stripHtml(post.title.rendered)}
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Recent Button */}
            <button
              onClick={() => router.push('/electric-power/recent')}
              className={`
                w-full px-4 py-2 rounded-lg text-xs font-semibold
                transition-all duration-300
                ${isRecentActive
                  ? 'bg-[#cd091b] text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              Recent
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar + Content */}
      <div className="max-w-7_5xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* DESKTOP SIDEBAR - Tower Design WITH DROPDOWN */}
          <aside className="hidden lg:block w-80 bg-gradient-to-b from-gray-50 to-white lg:sticky lg:top-0 h-full lg:min-h-screen border-r border-gray-200">
            <nav className="py-8 px-6 relative">
              {/* Central Tower Pole */}
              <div className="absolute left-8 top-0 bottom-12 w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>
              
              {/* Transmission Section with Dropdown */}
              <div className="mb-6 relative">
                {/* Connection Point on Tower */}
                <div className="absolute left-2 top-5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full shadow-md z-20"></div>
                
                {/* Horizontal Beam */}
                <div className={`absolute left-5 top-6 w-6 h-0.5 transition-all duration-300 ${isTransmissionActive ? 'bg-gray-600' : 'bg-gray-400'}`}></div>

                {/* Transmission Menu Item */}
                <div 
                  onClick={() => setIsTransmissionOpen(!isTransmissionOpen)}
                  className={`
                    relative ml-11 group flex items-center justify-between px-4 py-3.5 cursor-pointer
                    transition-all duration-300 ease-out rounded-lg border-2
                    ${isTransmissionActive
                      ? 'border-gray-300 text-gray-900 shadow-xl' 
                      : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'
                    }
                  `}
                  style={isTransmissionActive ? {backgroundColor: '#F3F3F3'} : {}}
                >
                  <span className="text-sm font-semibold flex-1">Transmission</span>
                  
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

                {/* Dropdown List */}
                {isTransmissionOpen && (
                  <div className="ml-11 mt-2 space-y-1 max-h-96 overflow-y-auto">
                    {loading ? (
                      <div className="px-4 py-2 text-xs text-gray-500">Loading Project...</div>
                    ) : (
                      transmissionPosts.map((post) => {
                        const isActivePost = pathname.includes(post.slug);
                        return (
                          <div
                            key={post.id}
                            onClick={() => router.push(`/Projects/transmission/${post.slug}`)}
                            className={`
                              px-4 py-2.5 rounded-md cursor-pointer text-sm
                              transition-all duration-200
                              ${isActivePost
                                ? 'bg-[#cd091b]/10 text-[#cd091b] font-semibold border-l-2 border-[#cd091b]'
                                : 'text-gray-600 hover:bg-gray-100 border-l-2 border-transparent'
                              }
                            `}
                          >
                            {stripHtml(post.title.rendered)}
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>

              {/* Recent Menu Item */}
              {staticMenuData.map((item) => {
                const isActive = isRecentActive;
                
                return (
                  <div key={item.id} className="mb-6 relative">
                    {/* Connection Point on Tower */}
                    <div className="absolute left-2 top-5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full shadow-md z-20"></div>
                    
                    {/* Horizontal Beam */}
                    <div className={`absolute left-5 top-6 w-6 h-0.5 transition-all duration-300 ${isActive ? 'bg-gray-600' : 'bg-gray-400'}`}></div>

                    {/* Menu Item */}
                    <div 
                      onClick={() => router.push(item.url)}
                      className={`
                        relative ml-11 group flex items-center justify-between px-4 py-3.5 cursor-pointer
                        transition-all duration-300 ease-out rounded-lg border-2
                        ${isActive
                          ? 'border-gray-300 text-gray-900 shadow-xl' 
                          : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'
                        }
                      `}
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

              {/* Tower Base Foundation */}
              <div className="absolute left-4 bottom-0 w-9 h-12 bg-gradient-to-b from-gray-400 to-gray-500 opacity-30" 
                   style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)'}}></div>
            </nav>
          </aside>

          {/* Content Area - ONLY RIGHT PADDING REMOVED */}
          <main className="flex-1 pl-4 pt-4 pb-4 sm:pl-6 sm:pt-6 sm:pb-6 lg:pl-8 lg:pt-8 lg:pb-8 bg-white min-h-screen">
            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
              <div className="h-0.5 bg-gray-300" />
              <div className="pl-4 pt-4 pb-4 sm:pl-6 sm:pt-6 sm:pb-6 lg:pl-8 lg:pt-8 lg:pb-8">
                {children}
              </div>
              <div className="h-2 bg-gray-100" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}