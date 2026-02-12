'use client';
import React, { useState, useEffect } from 'react';
import { Home, ChevronRight, ChevronDown, ChevronUp, Menu, X, Download } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  link: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  parent: number;
}

const staticMenuData = [{ id: 'education', title: 'EDUCATION AND TRAINING', url: '/research', categoryId: 51 }];

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryPosts, setCategoryPosts] = useState<{[key: number]: Post[]}>({});
  const [loading, setLoading] = useState(true);
  const [openCategories, setOpenCategories] = useState<{[key: number]: boolean}>({});
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  // Fetch PDF from category 50
  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await fetch('https://news.sanpec-excellence.com/wp-json/wp/v2/categories/50');
        const data = await response.json();
        if (data.category_pdf) setPdfUrl(data.category_pdf);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };
    fetchPDF();
  }, []);

  // Fetch subcategories and posts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://news.sanpec-excellence.com/wp-json/wp/v2/categories?parent=50&per_page=100');
        const data = await response.json();
        const filteredCategories = data.filter((cat: Category) => cat.id !== 51);
        
        setCategories(filteredCategories);
        
        const initialOpenState: {[key: number]: boolean} = {};
        filteredCategories.forEach((cat: Category) => {
          initialOpenState[cat.id] = true;
          fetchCategoryPosts(cat.id);
        });
        setOpenCategories(initialOpenState);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const fetchCategoryPosts = async (categoryId: number) => {
    try {
      const response = await fetch(`https://news.sanpec-excellence.com/wp-json/wp/v2/posts?categories=${categoryId}&per_page=100&_embed`);
      const data = await response.json();
      setCategoryPosts(prev => ({ ...prev, [categoryId]: data }));
    } catch (error) {
      console.error(`Error fetching posts for category ${categoryId}:`, error);
    }
  };

  const toggleCategory = (categoryId: number) => {
    setOpenCategories(prev => ({ ...prev, [categoryId]: !prev[categoryId] }));
  };

  const stripHtml = (html: string) => {
    if (typeof document !== 'undefined') {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
    }
    return html.replace(/<[^>]*>/g, '');
  };

  const decodeHTML = (html: string): string => {
    if (typeof document !== 'undefined') {
      const txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
    }
    return html.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'").replace(/&nbsp;/g, ' ').replace(/&apos;/g, "'").replace(/&cent;/g, '¢')
      .replace(/&pound;/g, '£').replace(/&yen;/g, '¥').replace(/&euro;/g, '€').replace(/&copy;/g, '©').replace(/&reg;/g, '®');
  };

  const activePostSlug = pathname.split('/').pop();
  let activePost: Post | undefined;
  let activeCategoryId: number | undefined;

  Object.entries(categoryPosts).forEach(([catId, posts]) => {
    const foundPost = posts.find(post => post.slug === activePostSlug);
    if (foundPost) {
      activePost = foundPost;
      activeCategoryId = parseInt(catId);
    }
  });

  const isEducationActive = pathname === '/research' || (!activePost && pathname.startsWith('/research'));
  const getBreadcrumbTitle = () => activePost ? decodeHTML(stripHtml(activePost.title.rendered)) : 'Education and Training';
  const handleNavigation = (url: string) => { router.push(url); setIsMobileMenuOpen(false); };

  const MobileMenuContent = () => (
    <div className="p-4 space-y-2">
      <div>
        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider px-2 mb-2">Main</h4>
        {staticMenuData.map((item) => (
          <button key={item.id} onClick={() => handleNavigation(item.url)}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isEducationActive ? 'bg-[#cd091b] text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}>
            {item.title}
          </button>
        ))}
      </div>

      {categories.map((category) => (
        <div key={category.id} className="pt-4 border-t border-gray-200">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider px-2 mb-2">{decodeHTML(category.name)}</h4>
          <div className="space-y-1">
            {categoryPosts[category.id]?.map((post) => {
              const isActive = pathname.includes(post.slug);
              const cleanTitle = decodeHTML(stripHtml(post.title.rendered));
              return (
                <button key={post.id} onClick={() => handleNavigation(`/research/${post.slug}`)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-[#cd091b] text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}>
                  {cleanTitle}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-[300px]">
        <div className="absolute inset-0">
          <img src="/images/research_bg.png" alt="Research Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)` }}></div>
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
          
          <nav className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <a href="/" className="group flex items-center gap-1 sm:gap-1.5 text-white/70 hover:text-white transition-colors duration-300">
                <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="font-medium">Home</span>
              </a>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50" />
            </div>
            <span className="text-[#DC2626] font-semibold break-words leading-relaxed max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]" title={getBreadcrumbTitle()}>
              {getBreadcrumbTitle()}
            </span>
          </nav>
        </div>

        {/* PDF Download Button */}
        {pdfUrl && (
          <button onClick={() => setIsPdfModalOpen(true)}
            className="absolute bottom-6 right-6 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 z-20">
            <Download className="w-4 h-4" />
            <span className="font-semibold text-sm">Download Brochure</span>
          </button>
        )}
  
        <div className="absolute bottom-0 left-0 w-full h-[2px]">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#DC2626]/80 to-transparent"></div>
        </div>
      </div>

      {/* PDF Modal */}
      {isPdfModalOpen && pdfUrl && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setIsPdfModalOpen(false)}>
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">Research Section PDF</h3>
              <button onClick={() => setIsPdfModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe src={pdfUrl} className="w-full h-full" title="Research PDF" />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Button */}
      <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900">Research Menu</h3>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)} />}

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full overflow-y-auto">
          <div className="sticky top-0 bg-[#cd091b] text-white p-4 flex items-center justify-between">
            <h3 className="text-lg font-bold">Research & Innovation</h3>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <MobileMenuContent />
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7_5xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-80 bg-gradient-to-b from-gray-50 to-white lg:sticky lg:top-0 h-full lg:min-h-screen border-r border-gray-200">
            <nav className="py-8 px-6 relative">
              <div className="absolute left-8 top-0 bottom-12 w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>
              
              {/* Static Menu - Education and Training */}
              {staticMenuData.map((item) => (
                <div key={item.id} className="mb-6 relative">
                  <div className="absolute left-2 top-5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full shadow-md z-20"></div>
                  <div className={`absolute left-5 top-6 w-6 h-0.5 transition-all duration-300 ${isEducationActive ? 'bg-gray-600' : 'bg-gray-400'}`}></div>

                  <div onClick={() => router.push(item.url)}
                    className={`relative ml-11 group flex items-center justify-between px-4 py-3.5 cursor-pointer transition-all duration-300 ease-out rounded-lg border-2 ${isEducationActive ? 'border-gray-300 text-gray-900 shadow-xl' : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'}`}
                    style={isEducationActive ? {backgroundColor: '#F3F3F3'} : {}}>
                    <span className="text-sm font-semibold flex-1">{item.title}</span>
                    
                    {isEducationActive && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full animate-ping absolute"></div>
                      </div>
                    )}

                    {isEducationActive && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                        <div className="w-8 h-px bg-gradient-to-r from-gray-400 to-gray-300"></div>
                        <div className="w-1.5 h-1.5 rotate-45 bg-gray-400 -ml-0.5"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Dynamic Categories with Dropdown */}
              {categories.map((category) => {
                const isCategoryActive = activeCategoryId === category.id;
                const posts = categoryPosts[category.id] || [];
                const cleanCategoryName = decodeHTML(category.name);
                
                return (
                  <div key={category.id} className="mb-6 relative">
                    <div className="absolute left-2 top-5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full shadow-md z-20"></div>
                    <div className={`absolute left-5 top-6 w-6 h-0.5 transition-all duration-300 ${isCategoryActive ? 'bg-gray-600' : 'bg-gray-400'}`}></div>

                    <div onClick={() => toggleCategory(category.id)}
                      className={`relative ml-11 group flex items-center justify-between px-4 py-3.5 cursor-pointer transition-all duration-300 ease-out rounded-lg border-2 ${isCategoryActive ? 'border-gray-300 text-gray-900 shadow-xl' : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'}`}
                      style={isCategoryActive ? {backgroundColor: '#F3F3F3'} : {}}>
                      <span className="text-sm font-semibold flex-1">{cleanCategoryName}</span>
                      
                      <div className="flex items-center gap-2">
                        {isCategoryActive && (
                          <>
                            <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded-full animate-ping absolute"></div>
                          </>
                        )}
                        {openCategories[category.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>

                    {openCategories[category.id] && (
                      <div className="ml-11 mt-2 space-y-1 max-h-96 overflow-y-auto custom-scrollbar">
                        {posts.length === 0 ? (
                          <div className="px-4 py-2 text-xs text-gray-500">Loading...</div>
                        ) : (
                          posts.map((post) => {
                            const isActivePost = pathname.includes(post.slug);
                            const cleanTitle = decodeHTML(stripHtml(post.title.rendered));
                            return (
                              <div key={post.id} onClick={() => router.push(`/research/${post.slug}`)}
                                className={`px-4 py-2.5 rounded-md cursor-pointer text-sm transition-all duration-200 ${isActivePost ? 'bg-[#cd091b]/10 text-[#cd091b] font-semibold border-l-2 border-[#cd091b]' : 'text-gray-600 hover:bg-gray-100 border-l-2 border-transparent'}`}>
                                {cleanTitle}
                              </div>
                            );
                          })
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

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

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #888 #f1f1f1; }
      `}</style>
    </div>
  );
}