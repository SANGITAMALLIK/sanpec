'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Home, ChevronRight, Filter, TrendingUp, Zap, Mail, Tag, ChevronLeft } from 'lucide-react';

interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  categoryId: number;
  link: string;
  excerpt: string;
}

const decodeHTML = (html: string): string => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

const BlogData = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        
        const cachedData = localStorage.getItem('blogData');
        const cacheTimestamp = localStorage.getItem('blogDataTimestamp');
        const currentTime = new Date().getTime();
        const cacheExpiry = 5 * 60 * 1000;

        if (cachedData && cacheTimestamp && (currentTime - parseInt(cacheTimestamp)) < cacheExpiry) {
          setBlogs(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        const response = await fetch(
          'https://news.sanpec-excellence.com/wp-json/wp/v2/posts?categories=1,25,43,46&per_page=50&orderby=date&order=desc&_embed',
          {
            headers: {
              'Content-Type': 'application/json',
            },
            next: { revalidate: 300 }, // ✅ 5 minutes cache
            cache: 'force-cache' // ✅ Force cache for faster loading
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        console.log('API Response:', data);
        console.log('Total posts fetched:', data.length);
        
        if (!Array.isArray(data) || data.length === 0) {
          console.warn('No posts found in API response');
          setBlogs([]);
          setLoading(false);
          return;
        }

        const formattedBlogs: Blog[] = data.map((post: any) => {
          const decodedTitle = decodeHTML(post.title.rendered);
          
          const categoryInfo = post._embedded?.['wp:term']?.[0]?.[0];
          const categoryName = categoryInfo?.name || 'Uncategorized';
          const categoryId = post.categories?.[0] || 0;
          
          const excerpt = post.excerpt?.rendered 
            ? post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 120) + '...'
            : '';
          
          console.log(`Post: ${decodedTitle}, WordPress Slug: ${post.slug}`);
          
          return {
            id: post.id,
            title: decodedTitle,
            slug: post.slug,
            image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                   post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.full?.source_url ||
                   'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
            category: categoryName,
            categoryId: categoryId,
            link: post.link,
            excerpt: excerpt
          };
        });
        
        console.log('Formatted blogs:', formattedBlogs);
        
        localStorage.setItem('blogData', JSON.stringify(formattedBlogs));
        localStorage.setItem('blogDataTimestamp', currentTime.toString());
        
        setBlogs(formattedBlogs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  const categories = ['All', ...new Set(
    blogs
      .map(blog => blog.category)
      .filter(cat => cat !== 'Uncategorized')
  )];
  
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(1).slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.slice(1).length / blogsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const popularPosts = blogs.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute left-10 top-1/4 w-4 h-48 bg-gray-800 transform -skew-x-6">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-800"></div>
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gray-800"></div>
        </div>
        <div className="absolute right-20 top-1/3 w-4 h-56 bg-gray-800 transform skew-x-12">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-800"></div>
        </div>
        <div className="absolute top-40 left-0 right-0 h-0.5 bg-gray-800"></div>
        <div className="absolute top-60 left-0 right-0 h-0.5 bg-gray-800"></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden h-64 sm:h-72 md:h-80">
        <div className="absolute inset-0">
          <img src="/images/23.jpg" alt="Blog Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-end pb-6 sm:pb-8">
          <div className="mb-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">BLOG</h1>
            <div className="flex items-center gap-2">
              <div className="h-[3px] w-12 sm:w-16 bg-[#DC2626] rounded-full"></div>
              <div className="h-[2px] w-6 sm:w-8 bg-[#DC2626]/60 rounded-full"></div>
            </div>
          </div>
          
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <span className="text-[#DC2626] font-semibold">Blog</span>
          </nav>
        </div>
      </div>

      {/* Search & Filter */}
      {/* <div className="bg-white py-6 md:py-8 shadow-md border-b-2 border-gray-200 relative z-10">
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
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-3 overflow-x-auto">
              <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-3 rounded-lg font-bold text-sm whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#DC2626] text-white'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#DC2626]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 md:py-14 relative z-10">
        {loading ? (
          <div className="flex items-center justify-center py-32">
            <div className="text-center">
              <div className="w-20 h-20 border-4 border-gray-200 border-t-[#DC2626] rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 text-xl font-semibold">Loading content...</p>
            </div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-32 bg-white border rounded-lg">
            <p className="text-gray-500 text-xl mb-4">No blog posts found</p>
            <p className="text-gray-400 text-sm">Please check the API connection or try again later</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-12">
              {/* Featured Article */}
              {filteredBlogs[0] && (
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-1.5 bg-[#DC2626]"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1931]">Recent Post</h2>
                  </div>
                  <Link href={`/blog/${filteredBlogs[0].slug}`} className="block">
                    <article className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-[#DC2626] transition-all duration-500 hover:-translate-y-3">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DC2626] to-[#171530] group-hover:h-2 transition-all duration-300"></div>

                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-96 md:h-[400px] overflow-hidden bg-gray-50">
                          <img 
                            src={filteredBlogs[0].image} 
                            alt={filteredBlogs[0].title} 
                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500"></div>
                          
                          <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#DC2626] rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#171530] transition-all duration-300">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="p-8 md:p-12 flex flex-col justify-center bg-white space-y-4">
                          <h3 className="text-2xl md:text-3xl font-bold text-[#171530] leading-tight group-hover:text-[#DC2626] transition-colors duration-300 group-hover:translate-x-2">
                            {filteredBlogs[0].title}
                          </h3>

                          <div className="flex items-center gap-2">
                            <div className="h-1 w-12 bg-[#DC2626] rounded-full group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#171530] transition-all duration-500"></div>
                            <div className="flex-1 h-px bg-gray-200 group-hover:bg-gradient-to-r group-hover:from-gray-200 group-hover:to-transparent transition-all duration-500"></div>
                          </div>

                          {filteredBlogs[0].excerpt && (
                            <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300 group-hover:translate-x-1">
                              {filteredBlogs[0].excerpt}
                            </p>
                          )}

                          <div className="pt-4">
                            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DC2626] to-[#DC2626] hover:from-[#171530] hover:to-[#171530] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 group-hover:gap-3 group-hover:translate-y-[-2px] hover:shadow-lg">
                              Read Article
                              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              )}

              {/* Latest Articles Grid */}
              <div>
                 <div className="max-w-[1600px] mx-auto mb-8 md:mb-12">
        <div className="flex items-center justify-center gap-3">
          <div className="h-[2px] w-20 sm:w-32 md:w-48 bg-gradient-to-r from-transparent to-[#CD091B]"></div>
          <div className="relative">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#CD091B]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
            </svg>
          </div>
          <div className="h-[2px] w-20 sm:w-32 md:w-48 bg-gradient-to-l from-transparent to-[#CD091B]"></div>
        </div>
      </div>
                {currentBlogs.length === 0 ? (
                  <div className="text-center py-24 bg-white border rounded-lg">
                    <p className="text-gray-500 text-xl">No articles found matching your criteria</p>
                  </div>
                ) : (
                  <>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {currentBlogs.map((blog) => (
                        <Link 
                          key={blog.id} 
                          href={`/blog/${blog.slug}`}
                          className="block"
                        >
                          <article className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-[#DC2626] transition-all duration-500 hover:-translate-y-3 hover:rotate-[0.5deg] hover:shadow-[0_20px_40px_rgba(205,9,27,0.15)] h-full">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DC2626] to-[#171530] group-hover:h-2 transition-all duration-300"></div>

                            <div className="relative h-56 overflow-hidden bg-gray-50">
                              <img
                                src={blog.image}
                                alt={blog.title}
                                loading="lazy"
                                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent group-hover:from-black/10 transition-all duration-500"></div>
                              
                              <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#DC2626] rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#171530] transition-all duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                                </svg>
                              </div>
                            </div>

                            <div className="p-5 space-y-3">
                              <h3 className="text-lg md:text-xl font-bold text-[#171530] leading-tight line-clamp-2 group-hover:text-[#DC2626] transition-colors duration-300 group-hover:translate-x-2 min-h-[56px]">
                                {blog.title}
                              </h3>

                              <div className="flex items-center gap-2">
                                <div className="h-1 w-12 bg-[#DC2626] rounded-full group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#171530] transition-all duration-500"></div>
                                <div className="flex-1 h-px bg-gray-200 group-hover:bg-gradient-to-r group-hover:from-gray-200 group-hover:to-transparent transition-all duration-500"></div>
                              </div>

                              {blog.excerpt && (
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-800 transition-colors duration-300 group-hover:translate-x-1">
                                  {blog.excerpt}
                                </p>
                              )}

                              <div className="pt-2">
                                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DC2626] to-[#DC2626] hover:from-[#171530] hover:to-[#171530] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 group-hover:gap-3 group-hover:translate-y-[-2px] hover:shadow-lg">
                                  Read Article
                                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </article>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="mt-12 flex items-center justify-center gap-3">
                        <button 
                          onClick={() => paginate(currentPage - 1)} 
                          disabled={currentPage === 1} 
                          className={`px-5 py-3 rounded-lg font-medium text-sm flex items-center gap-2 border ${
                            currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white hover:border-[#DC2626]'
                          }`}
                        >
                          <ChevronLeft className="w-4 h-4" /> Previous
                        </button>
                        
                        <div className="flex items-center gap-1">
                          {[...Array(totalPages)].map((_, index) => (
                            <button 
                              key={index + 1} 
                              onClick={() => paginate(index + 1)} 
                              className={`w-10 h-10 rounded-lg font-medium text-sm border ${
                                currentPage === index + 1 ? 'bg-[#DC2626] text-white' : 'bg-white hover:border-[#DC2626]'
                              }`}
                            >
                              {index + 1}
                            </button>
                          ))}
                        </div>
                        
                        <button 
                          onClick={() => paginate(currentPage + 1)} 
                          disabled={currentPage === totalPages} 
                          className={`px-5 py-3 rounded-lg font-medium text-sm flex items-center gap-2 border ${
                            currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white hover:border-[#DC2626]'
                          }`}
                        >
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
              <div className="bg-white p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-[#DC2626]" />
                  <h3 className="text-xl font-semibold text-[#0B1931]">SANPEC</h3>
                </div>
                <p className="text-gray-600 text-sm">Bringing Engineering Excellence. Improving Power Grid Reliability</p>
              </div>

              <div className="bg-white p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-[#DC2626]" />
                  <h3 className="text-lg font-semibold text-[#0B1931]">Latest Updates</h3>
                </div>
                <div className="space-y-4">
                  {popularPosts.map((post, idx) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group flex items-start gap-3 pb-4 border-b last:border-0">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-100 flex items-center justify-center text-sm font-medium group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
                        {idx + 1}
                      </div>
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-[#DC2626] transition-colors">{post.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>

              {/* <div className="bg-white p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-6">
                  <Tag className="w-5 h-5 text-[#DC2626]" />
                  <h3 className="text-lg font-semibold text-[#0B1931]">Categories</h3>
                </div>
                <div className="space-y-2">
                  {categories.filter(cat => cat !== 'All').map((cat) => (
                    <button 
                      key={cat} 
                      onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }} 
                      className={`w-full text-left px-4 py-2.5 font-medium text-sm flex items-center justify-between border ${
                        selectedCategory === cat ? 'bg-[#DC2626] text-white' : 'bg-white hover:border-[#DC2626]'
                      }`}
                    >
                      <span>{cat}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div> */}

              {/* <div className="bg-white p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-[#DC2626]" />
                  <h3 className="text-lg font-semibold text-[#0B1931]">Newsletter</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">Get latest insights delivered to your inbox.</p>
                <input type="email" placeholder="Your email" className="w-full px-4 py-2.5 bg-gray-50 border mb-3 rounded focus:ring-2 focus:ring-[#DC2626]" />
                <button className="w-full bg-[#DC2626] hover:bg-red-700 text-white font-medium py-2.5 rounded">Subscribe</button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogData;