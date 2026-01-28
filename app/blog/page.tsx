'use client';
import React, { useState, useEffect } from 'react';
import { Search, Home, ChevronRight, Filter, ArrowRight, TrendingUp, Zap, Mail, Tag, ChevronLeft } from 'lucide-react';

const ProfessionalBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://sanpec-excellence.com/wp-json/wp/v2/posts?_embed&per_page=20');
        const data = await response.json();
        
        const formattedBlogs = data.map(post => ({
          id: post.id,
          title: post.title.rendered,
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
          category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
          link: post.link
        }));
        
        setBlogs(formattedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(1).slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.slice(1).length / blogsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const popularPosts = blogs.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Power Structure Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        {/* Transmission Towers */}
        <div className="absolute left-10 top-1/4 w-4 h-48 bg-gray-800 transform -skew-x-6">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-800"></div>
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gray-800"></div>
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-gray-800"></div>
        </div>
        <div className="absolute right-20 top-1/3 w-4 h-56 bg-gray-800 transform skew-x-12">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-800"></div>
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-14 h-2 bg-gray-800"></div>
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gray-800"></div>
        </div>
        
        {/* Power Lines */}
        <div className="absolute top-40 left-0 right-0 h-0.5 bg-gray-800"></div>
        <div className="absolute top-60 left-0 right-0 h-0.5 bg-gray-800"></div>
        <div className="absolute top-80 left-0 right-0 h-0.5 bg-gray-800"></div>
        
        {/* Electrical Poles */}
        <div className="absolute left-1/4 top-2/3 w-3 h-40 bg-gray-800">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full"></div>
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gray-800"></div>
        </div>
        <div className="absolute right-1/3 top-3/4 w-3 h-36 bg-gray-800">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full"></div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gray-800"></div>
        </div>
      </div>

      {/* Hero Section - Content starts 20px from bottom */}
      <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-[300px]">
           {/* Background Image */}
           <div className="absolute inset-0">
             <img 
               src="/images/23.jpg" 
               alt="About Background"
               className="w-full h-full object-cover"
             />
             {/* Enhanced Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
             
             {/* Subtle Pattern Overlay for depth */}
             <div 
               className="absolute inset-0 opacity-[0.03]"
               style={{
                 backgroundImage: `
                   repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)
                 `
               }}
             ></div>
           </div>
     
           {/* Content Area */}
           <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-6 sm:pb-8 pt-20 sm:pt-0">
             {/* Page Title */}
             <div className="mb-4 sm:mb-5">
               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-tight drop-shadow-lg">
                BLOG
               </h1>
               {/* Elegant Underline */}
               <div className="flex items-center gap-2">
                 <div className="h-[3px] w-12 sm:w-16 bg-[#DC2626] rounded-full"></div>
                 <div className="h-[2px] w-6 sm:w-8 bg-[#DC2626]/60 rounded-full"></div>
                 <div className="h-[2px] w-3 sm:w-4 bg-[#DC2626]/40 rounded-full"></div>
               </div>
             </div>
             
             {/* Simple Breadcrumb Navigation */}
             <nav className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm">
               {/* Home Link with Icon */}
               <a 
                 href="/" 
                 className="group flex items-center gap-1 sm:gap-1.5 text-white/70 hover:text-white transition-colors duration-300"
               >
                 <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                 <span className="font-medium">Home</span>
               </a>
     
               {/* Separator */}
               <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50" />
     
               {/* Current Page (Active) */}
               <span className="text-[#DC2626] font-semibold">
                Blog
               </span>
             </nav>
           </div>
     
           {/* Bottom Accent Line */}
           <div className="absolute bottom-0 left-0 w-full h-[2px]">
             <div className="h-full w-full bg-gradient-to-r from-transparent via-[#DC2626]/80 to-transparent"></div>
           </div>
         </div>

      {/* Search & Filter */}
      <div className="bg-white py-6 md:py-8 shadow-md border-b-2 border-gray-200 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all"
              />
            </div>
            <div className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0">
              <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
              {categories.slice(0, 6).map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-3 rounded-lg font-bold text-sm transition-all whitespace-nowrap shadow-md ${
                    selectedCategory === cat
                      ? 'bg-[#DC2626] text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#DC2626] hover:text-[#DC2626]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 md:py-14 relative z-10">
        {loading ? (
          <div className="flex items-center justify-center py-32">
            <div className="text-center">
              <div className="w-20 h-20 border-4 border-gray-200 border-t-[#DC2626] rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 text-xl font-semibold">Loading content...</p>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-12">
              {/* Featured Article - Fixed padding and added grid lines */}
              {filteredBlogs[0] && (
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-1.5 bg-[#DC2626]"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1931]">Recent Post</h2>
                  </div>
                  <a href={filteredBlogs[0].link} target="_blank" rel="noopener noreferrer" className="block group">
                    <article className="bg-white overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Section - Reduced padding */}
                        <div className="relative h-96 md:h-[300px] overflow-hidden bg-gray-50">
                          <img 
                            src={filteredBlogs[0].image} 
                            alt={filteredBlogs[0].title} 
                            className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-1000" 
                          />
                          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                        </div>
                        
                        {/* Content Section with Grid Lines Background */}
                        <div className="p-8 md:p-12 flex flex-col justify-center bg-white relative">
                          {/* Grid Lines Background */}
                          <div 
                            className="absolute inset-0 opacity-10"
                            style={{
                              backgroundImage: `
                                linear-gradient(to right, rgba(234, 179, 8, 0.3) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(234, 179, 8, 0.3) 1px, transparent 1px)
                              `,
                              backgroundSize: '20px 20px'
                            }}
                          ></div>
                          
                          <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1931] mb-8 group-hover:text-[#DC2626] transition-colors leading-tight">
                              {filteredBlogs[0].title}
                            </h3>
                            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                              <span className="text-sm text-gray-500 font-medium">Featured Article</span>
                              <div className="flex items-center gap-2 text-[#DC2626] font-semibold text-lg group-hover:gap-4 transition-all">
                                Read Full Story <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </a>
                </div>
              )}

              {/* Latest Articles Grid - Ultra Minimal Professional Cards */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-1.5 bg-[#DC2626]"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1931]">Latest Insights</h2>
                </div>
                {currentBlogs.length === 0 ? (
                  <div className="text-center py-24 bg-white border border-gray-300 rounded-lg">
                    <p className="text-gray-500 text-xl">No articles found</p>
                  </div>
                ) : (
                  <>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {currentBlogs.map((blog) => (
                        <a 
                          key={blog.id} 
                          href={blog.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          onMouseEnter={() => setHoveredCard(blog.id)} 
                          onMouseLeave={() => setHoveredCard(null)} 
                          className="group"
                        >
                          <article className={`h-full bg-white border border-gray-300 overflow-hidden transition-all duration-500 ${hoveredCard === blog.id ? 'shadow-2xl transform -translate-y-1 border-[#DC2626]' : 'hover:shadow-xl hover:border-gray-400'}`}>
                            {/* Image Container - Perfect Ratio */}
                            <div className="relative h-56 overflow-hidden bg-gray-50">
                              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                              <img 
                                src={blog.image} 
                                alt={blog.title} 
                                className="relative w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-700" 
                               onError={(e) => {
                            const img = e.currentTarget as HTMLImageElement;
                          img.src = 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800';
                          }}

                              />
                              {/* Minimal Overlay */}
                              <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            </div>
                            
                            {/* Content - Minimal & Clean */}
                            <div className="p-6">
                              <h3 className="text-lg font-semibold text-[#0B1931] mb-4 line-clamp-2 group-hover:text-[#DC2626] transition-colors leading-snug min-h-[56px]">
                                {blog.title}
                              </h3>
                              
                              {/* Subtle Divider */}
                              <div className="h-px bg-gray-200 mb-4 group-hover:bg-[#DC2626] transition-colors"></div>
                              
                              {/* Minimal Read More */}
                              <div className="flex items-center justify-end">
                                <span className="text-sm font-medium text-gray-600 group-hover:text-[#DC2626] transition-colors">
                                  Read More
                                </span>
                                <ArrowRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-[#DC2626] group-hover:translate-x-1 transition-all" />
                              </div>
                            </div>
                            
                            {/* Subtle Corner Accent */}
                            <div className={`absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-[#DC2626] border-r-transparent transition-opacity duration-300 ${hoveredCard === blog.id ? 'opacity-100' : 'opacity-0'}`}></div>
                          </article>
                        </a>
                      ))}
                    </div>
                    {totalPages > 1 && (
                      <div className="mt-12 flex items-center justify-center gap-3">
                        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className={`px-5 py-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-all border ${currentPage === 1 ? 'bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-300 hover:border-[#DC2626] hover:text-[#DC2626] hover:shadow-sm'}`}>
                          <ChevronLeft className="w-4 h-4" /> Previous
                        </button>
                        <div className="flex items-center gap-1">
                          {[...Array(totalPages)].map((_, index) => (
                            <button key={index + 1} onClick={() => paginate(index + 1)} className={`w-10 h-10 rounded-lg font-medium text-sm transition-all border ${currentPage === index + 1 ? 'bg-[#DC2626] text-white border-[#DC2626]' : 'bg-white text-gray-700 border-gray-300 hover:border-[#DC2626] hover:text-[#DC2626]'}`}>
                              {index + 1}
                            </button>
                          ))}
                        </div>
                        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className={`px-5 py-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-all border ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-300 hover:border-[#DC2626] hover:text-[#DC2626] hover:shadow-sm'}`}>
                          Next <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 shadow-sm border border-gray-300">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-[#DC2626]" />
                  <h3 className="text-xl font-semibold text-[#0B1931]">SANPEC</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                 Bringing Engineering Excellence. Improving Power Grid Reliability
                </p>
              </div>

              <div className="bg-white p-6 shadow-sm border border-gray-300">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-[#DC2626]" />
                  <h3 className="text-lg font-semibold text-[#0B1931]">Latest Updates</h3>
                </div>
                <div className="space-y-4">
                  {popularPosts.map((post, idx) => (
                    <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-100 flex items-center justify-center text-gray-600 font-medium text-sm group-hover:bg-[#DC2626] group-hover:text-white transition-colors">{idx + 1}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-[#DC2626] transition-colors line-clamp-2 leading-snug">{post.title}</h4>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 shadow-sm border border-gray-300">
                <div className="flex items-center gap-3 mb-6">
                  <Tag className="w-5 h-5 text-[#DC2626]" />
                  <h3 className="text-lg font-semibold text-[#0B1931]">Categories</h3>
                </div>
                <div className="space-y-2">
                  {categories.filter(cat => cat !== 'All').slice(0, 6).map((cat) => (
                    <button key={cat} onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }} className={`w-full text-left px-4 py-2.5 font-medium text-sm transition-all flex items-center justify-between border ${selectedCategory === cat ? 'bg-[#DC2626] text-white border-[#DC2626]' : 'bg-white text-gray-700 border-gray-200 hover:border-[#DC2626] hover:text-[#DC2626]'}`}>
                      <span>{cat}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${selectedCategory === cat ? 'translate-x-1' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 shadow-sm border border-gray-300">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-[#DC2626]" />
                  <h3 className="text-lg font-semibold text-[#0B1931]">Newsletter</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Get latest insights delivered to your inbox.</p>
                <input type="email" placeholder="Your email" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#DC2626] mb-3 rounded" />
                <button className="w-full bg-[#DC2626] hover:bg-red-700 text-white font-medium py-2.5 transition-colors rounded shadow-sm hover:shadow">Subscribe</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalBlogPage;