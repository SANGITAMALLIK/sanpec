'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const BlogCarousel = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // HTML entities decode karne ka function
  const decodeHTML = (html: string): string => {
    if (typeof document !== 'undefined') {
      const txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
    }
    return html;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Cache check karo
        const cachedData = localStorage.getItem('blogCarouselData');
        const cacheTimestamp = localStorage.getItem('blogCarouselDataTimestamp');
        const currentTime = new Date().getTime();
        const cacheExpiry = 5 * 60 * 1000; // 5 minutes

        if (cachedData && cacheTimestamp && (currentTime - parseInt(cacheTimestamp)) < cacheExpiry) {
          console.log('✅ BlogCarousel: Using cached data');
          setBlogs(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        console.log('🔄 BlogCarousel: Fetching fresh data from API...');

        // Step 1: Parent category 25 ke saare child categories fetch karo (exactly like BlogData)
        const categoriesResponse = await fetch(
          'https://news.sanpec-excellence.com/wp-json/wp/v2/categories?parent=25&per_page=100',
          {
            next: { revalidate: 300 },
            cache: 'force-cache'
          }
        );
        const childCategories = await categoriesResponse.json();
        
        console.log('📂 BlogCarousel: Child Categories found:', childCategories);
        
        // Create comma-separated string of all category IDs (parent 25 + children) - exactly like BlogData
        const categoryIds = [25, ...childCategories.map((cat: any) => cat.id)].join(',');
        
        console.log('🎯 BlogCarousel: Fetching posts from categories:', categoryIds);

        // Step 2: Parent category 25 aur uske saare child categories ki posts fetch karo (exactly like BlogData)
        const response = await fetch(
          `https://news.sanpec-excellence.com/wp-json/wp/v2/posts?categories=${categoryIds}&per_page=100&orderby=date&order=desc&_embed`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
            next: { revalidate: 300 },
            cache: 'force-cache'
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        console.log('📝 BlogCarousel: Total posts fetched:', data.length);

        if (!Array.isArray(data) || data.length === 0) {
          console.warn('⚠️ BlogCarousel: No posts found in API response');
          setBlogs([]);
          setLoading(false);
          return;
        }
        
        const formattedBlogs = data.map((post: any) => {
          // Title ko decode karo
          const decodedTitle = decodeHTML(post.title.rendered);
          
          // Category name extract karo from _embedded (exactly like BlogData)
          const categoryInfo = post._embedded?.['wp:term']?.[0]?.[0];
          const categoryName = categoryInfo?.name || 'Uncategorized';
          
          // Excerpt (exactly like BlogData)
          const excerpt = post.excerpt?.rendered 
            ? post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 120) + '...'
            : '';
          
          console.log(`✅ BlogCarousel Post: ${decodedTitle} | Category: ${categoryName} | Slug: ${post.slug}`);
          
          return {
            id: post.id,
            title: decodedTitle,
            slug: post.slug,
            category: categoryName,
            excerpt: excerpt,
            image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                   post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.full?.source_url ||
                   'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
            link: post.link
          };
        });
        
        console.log('💾 BlogCarousel: Saving to cache...');
        console.log('✅ BlogCarousel: Formatted blogs count:', formattedBlogs.length);
        
        // Cache mein save karo
        localStorage.setItem('blogCarouselData', JSON.stringify(formattedBlogs));
        localStorage.setItem('blogCarouselDataTimestamp', currentTime.toString());
        
        setBlogs(formattedBlogs);
        setLoading(false);
        
        console.log('✅ BlogCarousel: Data loaded successfully!');
        
      } catch (error) {
        console.error('❌ BlogCarousel Error fetching blogs:', error);
        setLoading(false);
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2 >= blogs.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? Math.max(0, blogs.length - 2) : prev - 2));
  };

  const visibleBlogs = blogs.slice(currentIndex, currentIndex + 2);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(#171530 0.5px, transparent 0.5px), linear-gradient(90deg, #171530 0.5px, transparent 0.5px)',
        backgroundSize: '80px 80px'
      }}></div>

      <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE - Title Section */}
          <div className="w-full lg:w-5/12 relative group">
            <div className="relative min-h-[500px] rounded-3xl overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="images/sanpec_2026/1.jpeg"
                  alt="Power Tower Background"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#171530]/85 via-[#CD091B]/70 to-[#171530]/90"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-start p-8 md:p-10">
                <div className="space-y-6 mt-20">
                  <div className="flex gap-2">
                    <div className="h-1 w-20 bg-[#CD091B] rounded-full"></div>
                    <div className="h-1 w-20 bg-white rounded-full"></div>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-[#CD091B] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-widest">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                    </svg>
                    OUR BLOGS
                  </div>

                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                    News and Insights
                  </h2>

                  <div className="flex items-center gap-2">
                    <div className="h-1 w-24 bg-white rounded-full"></div>
                    <div className="h-2 w-2 bg-[#CD091B] rounded-full"></div>
                  </div>

                  <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-md">
                    As America takes meaningful action to rebuild critical infrastructure, SANPEC stands resolute in its unwavering commitment to designing and delivering innovative, resilient, high-quality transmission and distribution (T&D) solutions during crises and change.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Blogs */}
          <div className="w-full lg:w-7/12 relative">
            {/* Navigation Arrows */}
            <div className="absolute -top-6 right-0 flex gap-3 z-20">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0 || loading}
                className={`${currentIndex === 0 || loading ? 'opacity-40 cursor-not-allowed' : 'hover:scale-110 hover:bg-[#171530] hover:text-white'} bg-white shadow-xl text-[#171530] p-3 md:p-4 rounded-full border-2 border-[#171530] transition-all duration-300 group`}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-[-2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex + 2 >= blogs.length || loading}
                className={`${currentIndex + 2 >= blogs.length || loading ? 'opacity-40 cursor-not-allowed' : 'hover:scale-110 hover:bg-[#171530] hover:text-white'} bg-white shadow-xl text-[#171530] p-3 md:p-4 rounded-full border-2 border-[#171530] transition-all duration-300 group`}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-[2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Loading State */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse">
                    <div className="h-56 bg-gray-300"></div>
                    <div className="p-5 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : blogs.length === 0 ? (
              <div className="flex items-center justify-center h-96 text-gray-500 text-lg">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="font-semibold">No posts found</p>
                  <p className="text-sm text-gray-400 mt-2">Check console for details</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {visibleBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-[#CD091B] transition-all duration-500 hover:-translate-y-3 hover:rotate-[0.5deg] hover:shadow-[0_20px_40px_rgba(205,9,27,0.15)]"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CD091B] to-[#171530] group-hover:h-2 transition-all duration-300"></div>

                    {/* Image with improved hover */}
                    <div className="relative h-56 overflow-hidden bg-gray-900">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-500"></div>
                      
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#CD091B] rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#171530] transition-all duration-300">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3">
                      {/* ✅ Category Badge - Title ke upar */}
                      <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#CD091B] to-[#171530] text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-md">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                          <path d="M7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z"/>
                        </svg>
                        {blog.category}
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-[#171530] leading-tight line-clamp-2 group-hover:text-[#CD091B] transition-colors duration-300 group-hover:translate-x-2">
                        {blog.title}
                      </h3>

                      <div className="flex items-center gap-2">
                        <div className="h-1 w-12 bg-[#CD091B] rounded-full group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-[#CD091B] group-hover:to-[#171530] transition-all duration-500"></div>
                        <div className="flex-1 h-px bg-gray-200 group-hover:bg-gradient-to-r group-hover:from-gray-200 group-hover:to-transparent transition-all duration-500"></div>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-800 transition-colors duration-300 group-hover:translate-x-1">
                        {blog.excerpt}
                      </p>

                      {/* WordPress slug use ho raha hai ✅ */}
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#CD091B] to-[#CD091B] hover:from-[#171530] hover:to-[#171530] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 group-hover:gap-3 group-hover:translate-y-[-2px] hover:shadow-lg"
                      >
                        Read Article
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination Dots */}
            {!loading && blogs.length > 0 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: Math.ceil(blogs.length / 2) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx * 2)}
                    className={`h-2.5 rounded-full transition-all duration-300 hover:scale-125 hover:bg-gradient-to-r hover:from-[#CD091B] hover:to-[#171530] ${
                      Math.floor(currentIndex / 2) === idx
                        ? 'w-12 bg-gradient-to-r from-[#CD091B] to-[#171530]' 
                        : 'w-2.5 bg-gray-300 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;