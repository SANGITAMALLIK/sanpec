'use client';

import { useState, useEffect } from 'react';

const BlogCarousel = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          'https://sanpec-excellence.com/wp-json/wp/v2/posts?per_page=10&_embed'
        );
        const data = await response.json();
        
        const formattedBlogs = data.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 120) + '...',
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
          link: post.link
        }));
        
        setBlogs(formattedBlogs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-3xl font-bold text-[#CD091B]">Loading...</div>
      </div>
    );
  }

  const visibleBlogs = blogs.slice(currentIndex, currentIndex + 2);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 overflow-hidden">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `
          linear-gradient(#171530 0.5px, transparent 0.5px),
          linear-gradient(90deg, #171530 0.5px, transparent 0.5px),
          linear-gradient(#CD091B 0.5px, transparent 0.5px),
          linear-gradient(90deg, #CD091B 0.5px, transparent 0.5px)
        `,
        backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
        backgroundPosition: '0 0, 0 0, 0 0, 0 0'
      }}></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#171530] rounded-full opacity-[0.03] blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-40 w-80 h-80 bg-[#CD091B] rounded-full opacity-[0.03] blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE - Title + Power Tower Image Fully Blended */}
          <div className="w-full lg:w-5/12 relative group">
            {/* Complete Background with Tower Image */}
            <div className="relative min-h-[500px] rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-[#CD091B]/30 hover:scale-[1.02]">
              {/* Main Power Tower Background Image - Full Blend */}
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=1600&fit=crop" 
                  alt="Power Tower Background"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Multi-layer Gradient Overlay for Beautiful Blend */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#171530]/85 via-[#CD091B]/70 to-[#171530]/90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#171530]/30 to-transparent"></div>
              </div>

              {/* SVG Tower Overlays for Extra Detail */}
              <svg viewBox="0 0 400 600" className="absolute top-10 right-10 w-32 h-auto opacity-10">
                <path d="M 200 20 L 170 80 L 160 80 L 180 400 L 220 400 L 240 80 L 230 80 Z" 
                      fill="white" stroke="white" strokeWidth="3"/>
                <rect x="150" y="75" width="100" height="10" fill="white" rx="2"/>
                <line x1="155" y1="85" x2="155" y2="400" stroke="white" strokeWidth="5"/>
                <line x1="200" y1="85" x2="200" y2="400" stroke="white" strokeWidth="5"/>
                <line x1="245" y1="85" x2="245" y2="400" stroke="white" strokeWidth="5"/>
              </svg>

              <svg viewBox="0 0 200 400" className="absolute bottom-20 left-10 w-20 h-auto opacity-10">
                <rect x="90" y="50" width="20" height="350" fill="white" rx="4"/>
                <rect x="60" y="100" width="80" height="12" fill="white" rx="3"/>
                <line x1="65" y1="112" x2="65" y2="400" stroke="white" strokeWidth="4"/>
                <line x1="100" y1="112" x2="100" y2="400" stroke="white" strokeWidth="4"/>
                <line x1="135" y1="112" x2="135" y2="400" stroke="white" strokeWidth="4"/>
              </svg>

              {/* Content Overlay */}
              <div className="relative h-full flex flex-col justify-start p-8 md:p-10">
                
                {/* Top Section - Badge and Title */}
                <div className="space-y-6 mt-20">
                  {/* Decorative Top Line */}
                  <div className="flex gap-2">
                    <div className="h-1 w-20 bg-[#CD091B] rounded-full"></div>
                    <div className="h-1 w-20 bg-white rounded-full"></div>
                    <div className="h-1 w-20 bg-[#171530] rounded-full"></div>
                  </div>

                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#CD091B] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-widest shadow-lg hover:bg-[#171530] hover:scale-110 transition-all duration-300 cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="animate-pulse">
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                    </svg>
                    OUR BLOGS
                  </div>

                  {/* Main Title */}
                  <div className="space-y-3">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl transition-all duration-500 hover:text-gray-100 hover:scale-105 cursor-default">
                      Insights
                    </h2>
                   
                  </div>

                  {/* Decorative Lines */}
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-24 bg-white rounded-full"></div>
                    <div className="h-2 w-2 bg-[#CD091B] rounded-full"></div>
                    <div className="h-1 flex-1 bg-white/30 rounded-full"></div>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-md drop-shadow-lg">
                    Discover insights on transmission & distribution excellence, infrastructure innovation, and industry developments.
                  </p>
                </div>

                {/* Middle Section - Icon */}
                <div className="flex justify-center my-8">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl transition-all duration-500 hover:scale-125 hover:rotate-12 hover:bg-white/20 hover:border-white/50 cursor-pointer group">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="white" className="group-hover:scale-110 transition-transform duration-300">
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Section - Stats & Info */}
             
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Blogs with Navigation */}
          <div className="w-full lg:w-7/12 relative">
            {/* Navigation Arrows - Top Right with Gap */}
            <div className="absolute -top-16 right-0 flex gap-3 z-20">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`${currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:scale-125 hover:bg-[#171530] hover:text-white hover:shadow-2xl hover:shadow-[#171530]/50 hover:-translate-x-1'} bg-white shadow-xl text-[#171530] p-3 md:p-4 rounded-full border-2 border-[#171530] transition-all duration-300 group`}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex + 2 >= blogs.length}
                className={`${currentIndex + 2 >= blogs.length ? 'opacity-40 cursor-not-allowed' : 'hover:scale-125 hover:bg-[#171530] hover:text-white hover:shadow-2xl hover:shadow-[#171530]/50 hover:translate-x-1'} bg-white shadow-xl text-[#171530] p-3 md:p-4 rounded-full border-2 border-[#171530] transition-all duration-300 group`}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {visibleBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#CD091B]/30 hover:border-[#CD091B] hover:scale-[1.02]"
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CD091B] via-[#171530] to-[#CD091B]"></div>

                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden bg-gray-900">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                    
                    {/* Lightning Icon Badge */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#CD091B] rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-700 group-hover:bg-[#171530]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="group-hover:animate-pulse">
                        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                      </svg>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 space-y-3">
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-[#171530] leading-tight line-clamp-2 group-hover:text-[#CD091B] transition-colors duration-300">
                      {blog.title}
                    </h3>

                    {/* Divider */}
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-12 bg-[#CD091B] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#171530] rounded-full"></div>
                      <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {blog.excerpt}
                    </p>

                    {/* Read More Button */}
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#CD091B] to-[#CD091B] hover:from-[#171530] hover:to-[#171530] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#171530]/50 hover:gap-4 hover:px-6 group"
                    >
                      Read Article
                      <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(blogs.length / 2) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx * 2)}
                  className={`h-2.5 rounded-full transition-all duration-300 hover:h-3 ${
                    Math.floor(currentIndex / 2) === idx
                      ? 'w-12 bg-gradient-to-r from-[#CD091B] to-[#171530] shadow-lg' 
                      : 'w-2.5 bg-gray-300 hover:bg-gray-500 hover:w-8'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;