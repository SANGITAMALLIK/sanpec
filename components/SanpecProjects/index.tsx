'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
  link: string;
  slug:string;
  date: string;
}

export default function WordPressPosts() {
  const router = useRouter();
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://news.sanpec-excellence.com/wp-json/wp/v2/posts?categories=42&_embed&per_page=100'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const handlePostClick = (slug: string) => {
    router.push(`/Projects/transmission/${slug}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#CD091B] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading Projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="bg-red-50 border-l-4 border-[#CD091B] p-6 rounded-lg shadow-lg max-w-md">
          <div className="flex items-center mb-2">
            <svg className="w-6 h-6 text-[#CD091B] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
            </svg>
            <h3 className="text-[#101631] font-semibold">Error</h3>
          </div>
          <p className="text-gray-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
   
        {/* <div className="text-center mb-16 overflow-hidden">
        

        
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 tracking-tight leading-tight px-2 sm:px-4 whitespace-nowrap">
            <span className="text-[#CD091B]">Powering the Future</span>{' '}
            <span className="text-[#101631]">Through</span>{' '}
            <span className="text-[#CD091B]">Innovation</span>{' '}
            <span className="text-[#101631]">and</span>{' '}
            <span className="text-[#CD091B]">Excellence</span>
          </h1>

         
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-[#CD091B]"></div>
            <div className="w-2 h-2 bg-[#CD091B] rounded-full"></div>
            <div className="w-2 h-2 bg-[#101631] rounded-full"></div>
            <div className="h-px w-12 bg-[#101631]"></div>
          </div>


          <p className="text-gray-700 text-[15px] leading-relaxed max-w-4xl mx-auto font-medium px-4">
            Transmission and distribution structures require comprehensive maintenance and quality assurance services to prevent catastrophic failures. SANPEC provides data-driven, customized, and total lifecycle asset management solutions to enhance grid resilience.
          </p>

       
          
        </div> */}

        {/* Posts Grid - ORIGINAL DESIGN */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder-image.jpg';
            const altText = post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || stripHtml(post.title.rendered);

            // Get category name from post
            const categories = post._embedded?.['wp:term']?.[0] || [];
            let categoryName = categories.length > 0 ? categories[0].name : 'News';
            
            // Decode HTML entities in category name
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = categoryName;
            categoryName = tempDiv.textContent || tempDiv.innerText || categoryName;

            return (
              <article
                key={post.id}
                className="group relative flex-shrink-0 w-full h-[380px] cursor-pointer"
                onClick={() => handlePostClick(post.slug)}
              >
                <div className="block h-full">
                  <div className="relative h-full overflow-hidden border border-gray-300 rounded-xl transition-all duration-700 transform group-hover:scale-105 bg-white">
                    
                    {/* Full Background Image */}
                    <img
                      src={imageUrl}
                      alt={altText}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                      style={{ objectPosition: 'center center' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f5f5f5" width="400" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    
                    {/* Light Overlay for Better Text Readability */}
                    <div className="absolute inset-0 bg-white/20"></div>
                    
                    {/* Bottom Gradient - Light */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent"></div>
                    
                    {/* Category Badge - Top Left */}
                    <div className="absolute top-5 left-5 z-10">
                      <div className="px-4 py-1.5 bg-[#CD091B] rounded-md shadow-md">
                        <span className="text-white text-xs font-semibold uppercase tracking-wide">
                          {categoryName}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content - Centered */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <div className="text-center max-w-md space-y-3">
                        {/* Decorative Top Element */}
                       
                        
                        {/* Title - Original Font Size */}
                        <h2 
                          className="text-[#101631] font-extrabold text-lg md:text-xl leading-tight tracking-tight"
                          style={{ 
                            textShadow: '0 2px 10px rgba(255,255,255,0.8), 0 1px 3px rgba(255,255,255,0.6)'
                          }}
                        >
                          {stripHtml(post.title.rendered)}
                        </h2>
                        
                        {/* Divider */}
                        {post.excerpt.rendered && (
                          <>
                            <div className="flex items-center justify-center gap-2">
                              <div className="h-px w-10 bg-gray-400"></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                              <div className="h-px w-10 bg-gray-400"></div>
                            </div>
                            
                            {/* Description - Original Font Size */}
                            <p 
                              className="text-[#101631] font-medium text-sm leading-relaxed line-clamp-3"
                              style={{ textShadow: '0 1px 5px rgba(255,255,255,0.7)' }}
                            >
                              {stripHtml(post.excerpt.rendered)}
                            </p>
                          </>
                        )}
                        
                        {/* Bottom Decorative Element */}
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <div className="h-px w-12 bg-[#CD091B]"></div>
                          <div className="w-2 h-2 bg-[#CD091B] rounded-full"></div>
                          <div className="h-px w-12 bg-[#CD091B]"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Indicator - Bottom Right Arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white p-3 rounded-full shadow-2xl group-hover:scale-125 transition-transform border-2 border-gray-200">
                        <svg className="w-5 h-5 text-[#CD091B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State */}
        {posts.length === 0 && !loading && (
          <div className="text-center py-16">
            <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <h3 className="text-2xl font-semibold text-[#101631] mb-2">No Posts Found</h3>
            <p className="text-gray-500">There are no posts available in this category.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}