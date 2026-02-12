'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface WPPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export default function SanpecTabs() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://news.sanpec-excellence.com/wp-json/wp/v2/posts?categories=53&_embed&per_page=100',
         {
            next: { revalidate: 60 }, // 5 minutes cache
            cache: 'force-cache'
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data: WPPost[] = await response.json();
        
        // REVERSE THE ORDER - Oldest first, latest last
        const reversedData = [...data].reverse();
        setPosts(reversedData);
        
        // Set first post as active by default
        if (reversedData.length > 0 && activeTab === null) {
          setActiveTab(reversedData[0].id);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const activePost = posts.find(post => post.id === activeTab);

  if (loading) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-white"></div>
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, #d1d5db 0px, #d1d5db 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #d1d5db 0px, #d1d5db 1px, transparent 1px, transparent 40px)',
              backgroundSize: '40px 40px',
              maskImage: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
            }}
          ></div>
        </div>
        <div className="w-full max-w-[1800px] px-3 md:px-6 lg:px-8 py-6 md:py-10 relative z-10 mx-auto">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-[#CD091B] mb-4"></div>
              <p className="text-gray-600 text-lg">Loading content...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-white"></div>
        <div className="w-full max-w-[1800px] px-3 md:px-6 lg:px-8 py-6 md:py-10 relative z-10 mx-auto">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <p className="text-gray-600 text-lg">No content available</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Extract CEO info from excerpt for "The Company" post
  const extractCEOInfo = (excerptHtml: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = excerptHtml;
    const text = tempDiv.textContent || '';
    
    // Try to extract name and title
    const lines = text.split('\n').filter(line => line.trim());
    return {
      name: lines[0]?.trim() || 'Ajay Mallik, P.E.',
      title: lines[1]?.trim() || 'PRESIDENT & CEO',
      company: lines[2]?.trim() || 'SANPEC, Inc.'
    };
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Gradient Background - Gray to White */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-white"></div>
      
      {/* Grid Pattern - Fades from bottom to top */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #d1d5db 0px, #d1d5db 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #d1d5db 0px, #d1d5db 1px, transparent 1px, transparent 40px)',
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1800px] px-3 md:px-6 lg:px-8 py-6 md:py-10 relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          
          {/* Sidebar - Sticky on desktop */}
          <aside className="w-full lg:w-80 lg:sticky lg:top-6 lg:self-start bg-gradient-to-b from-gray-50 to-white border border-gray-200">
            <nav className="py-8 px-6 relative max-h-[calc(100vh-3rem)] overflow-y-auto">
              {/* Central Tower Pole */}
              <div className="absolute left-8 top-0 bottom-12 w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>
              
              {posts.map((post, idx) => {
                const isActive = activeTab === post.id;
                
                return (
                  <div key={post.id} className="mb-6 relative">
                    {/* Connection Point on Tower (Insulator) */}
                    <div className="absolute left-2 top-5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full shadow-md z-20"></div>
                    
                    {/* Horizontal Beam from Tower */}
                    <div className={`absolute left-5 top-6 w-6 h-0.5 bg-gray-400 transition-all duration-300 ${isActive ? 'bg-gray-600' : ''}`}></div>

                    {/* Tab Item (Transformer Box) */}
                    <div 
                      onClick={() => setActiveTab(post.id)}
                      aria-label={`View ${post.title.rendered} content`}
                      aria-pressed={isActive}
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
                      <span 
                        className="text-sm font-semibold flex-1 capitalize"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      
                      {/* Active Power Indicator */}
                      {isActive && (
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                          <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-2 h-2 bg-gray-600 rounded-full animate-ping"></div>
                        </div>
                      )}

                      {/* Power Line to Content */}
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

              {/* Tower Base Foundation (Lamp) */}
              <div className="absolute left-4 bottom-0 w-9 h-12 bg-gradient-to-b from-gray-400 to-gray-500 opacity-30" 
                   style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)'}}></div>
            </nav>
          </aside>

          {/* Content Area - Scrollable */}
          <main className="flex-1">
            <div className="bg-white shadow-lg border-2 border-gray-200 rounded-lg overflow-hidden">
              
              <div className="p-4 md:p-6 lg:p-8">
                {activePost && (
                  <div>
                    {/* Title Section - Always Full Width */}
                    <div className="mb-8">
                      <h2 
                        className="text-4xl md:text-5xl font-black mb-3" 
                        style={{ color: '#101631', letterSpacing: '-0.02em' }}
                        dangerouslySetInnerHTML={{ __html: activePost.title.rendered }}
                      />
                      <div className="w-24 h-1.5 bg-[#CD091B] rounded-full"></div>
                    </div>

                    {/* ---------- THE COMPANY – REDESIGNED CEO CARD ---------- */}
                    {activePost.slug === 'the-company' ? (
                      <>
                        {activePost._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                          /* Two-column layout: CEO card left, content right */
                          <div className="grid md:grid-cols-3 gap-8">
                            {/* LEFT COLUMN – CEO CARD (Redesigned like the image) */}
                            <div className="md:col-span-1">
                              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg">
                                {/* CEO Image - Circular with border */}
                                <div className="relative bg-white pt-8 pb-6">
                                  <div className="w-48 h-48 mx-auto rounded-full border-4 border-white shadow-xl overflow-hidden ring-4 ring-gray-100">
                                    <Image
                                      src={activePost._embedded['wp:featuredmedia'][0].source_url}
                                      alt={activePost._embedded['wp:featuredmedia'][0].alt_text || 'CEO'}
                                      width={200}
                                      height={200}
                                      className="w-full h-full object-cover"
                                      quality={90}
                                    />
                                  </div>
                                </div>

                                {/* CEO Info Card - White background with clean typography */}
                                <div className="bg-white mx-4 mb-4 rounded-xl border border-gray-200 p-6 text-center shadow-sm">
                                  {(() => {
                                    const ceoInfo = extractCEOInfo(activePost.excerpt.rendered);
                                    return (
                                      <>
                                        <div className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-2">
                                          {ceoInfo.title}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                          {ceoInfo.name}
                                        </h3>
                                        <div className="text-sm text-gray-600 font-medium">
                                          {ceoInfo.company}
                                        </div>
                                      </>
                                    );
                                  })()}
                                </div>
                              </div>
                            </div>

                            {/* RIGHT COLUMN – Company details */}
                            <div className="md:col-span-2">
                              <div
                                className="the-company-content"
                                dangerouslySetInnerHTML={{ __html: activePost.content.rendered }}
                              />
                            </div>
                          </div>
                        ) : (
                          /* Fallback – no featured image */
                          <div
                            className="the-company-content"
                            dangerouslySetInnerHTML={{ __html: activePost.content.rendered }}
                          />
                        )}
                      </>
                    ) : (
                      /* ---------- NORMAL POST LAYOUT (unchanged) ---------- */
                      <>
                        {/* Content Grid - Image and Text Side by Side */}
                        <div className={`grid ${activePost._embedded?.['wp:featuredmedia']?.[0]?.source_url ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-8 items-start`}>
                          
                          {/* Text Content */}
                          <div className="space-y-4 order-2 lg:order-1">
                            <div 
                              className="wordpress-content"
                              dangerouslySetInnerHTML={{ __html: activePost.content.rendered }}
                            />
                          </div>

                          {/* Featured Image */}
                          {activePost._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                            <div className="relative group order-1 lg:order-2 lg:sticky lg:top-6">
                              {/* Connection nodes at corners */}
                              <div className="absolute -top-2 -left-2 w-2 h-2 bg-gray-400 ring-2 ring-gray-200 rounded-full z-10"></div>
                              <div className="absolute -top-2 -right-2 w-2 h-2 bg-gray-400 ring-2 ring-gray-200 rounded-full z-10"></div>
                              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gray-400 ring-2 ring-gray-200 rounded-full z-10"></div>
                              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-gray-400 ring-2 ring-gray-200 rounded-full z-10"></div>
                              
                              {/* Frame border */}
                              <div className="absolute -inset-2 border-2 border-gray-300 rounded-xl"></div>
                              
                              <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-gray-200 transform group-hover:-translate-y-2 transition-all duration-500">
                                <Image
                                  src={activePost._embedded['wp:featuredmedia'][0].source_url}
                                  alt={activePost._embedded['wp:featuredmedia'][0].alt_text || activePost.title.rendered}
                                  width={800}
                                  height={600}
                                  className="w-full h-auto object-contain bg-white"
                                  quality={90}
                                  priority={activeTab === posts[0]?.id}
                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </main>

        </div>
      </div>

      {/* ---------- GLOBAL STYLES + THE-COMPANY SPECIFIC OVERRIDES ---------- */}
      <style jsx global>{`
        .wordpress-content {
          font-size: 16px;
          line-height: 1.75;
          color: #374151;
        }

        .wordpress-content p {
          margin-bottom: 1.25rem;
          line-height: 1.75;
        }

        .wordpress-content p:last-child {
          margin-bottom: 0;
        }

        /* Headings with proper styling */
        .wordpress-content h1,
        .wordpress-content h2,
        .wordpress-content h3,
        .wordpress-content h4 {
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #101631;
          line-height: 1.3;
          clear: both;
        }

        .wordpress-content h1:first-child,
        .wordpress-content h2:first-child,
        .wordpress-content h3:first-child,
        .wordpress-content h4:first-child {
          margin-top: 0;
        }

        .wordpress-content h1 { 
          font-size: 2rem;
          border-bottom: 3px solid #CD091B;
          padding-bottom: 0.5rem;
        }
        
        .wordpress-content h2 { 
          font-size: 1.75rem;
          border-left: 4px solid #CD091B;
          padding-left: 1rem;
        }
        
        .wordpress-content h3 { 
          font-size: 1.5rem;
        }
        
        .wordpress-content h4 { 
          font-size: 1.25rem;
        }

        /* Lists - SANPEC Product Style with Red Checkmarks */
        .wordpress-content ul {
          list-style: none;
          margin: 1.5rem 0;
          padding: 0.5rem;
          background-color: white;
          border-radius: 0.75rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
        }

        .wordpress-content ul li {
          position: relative;
          padding: 0.75rem 0.75rem 0.75rem 2.5rem;
          margin-bottom: 0;
          line-height: 1.7;
          border-bottom: 1px solid #f3f4f6;
          transition: background-color 0.2s;
        }

        .wordpress-content ul li:last-child {
          border-bottom: none;
        }

        .wordpress-content ul li:hover {
          background-color: #f9fafb;
          border-radius: 0.5rem;
        }

        .wordpress-content ul li::before {
          content: "✓";
          position: absolute;
          left: 0.75rem;
          top: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background-color: #CD091B;
          color: white;
          border-radius: 50%;
          font-weight: bold;
          font-size: 12px;
        }

        /* Ordered lists */
        .wordpress-content ol {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }

        .wordpress-content ol li {
          margin-bottom: 0.75rem;
          line-height: 1.75;
          padding-left: 0.5rem;
        }

        /* Links */
        .wordpress-content a {
          color: #CD091B;
          text-decoration: underline;
          transition: color 0.2s;
        }

        .wordpress-content a:hover {
          color: #101631;
        }

        /* Strong/Bold */
        .wordpress-content strong,
        .wordpress-content b {
          font-weight: 700;
          color: #101631;
        }

        /* Emphasis */
        .wordpress-content em,
        .wordpress-content i {
          font-style: italic;
        }

        /* Blockquotes */
        .wordpress-content blockquote {
          border-left: 4px solid #CD091B;
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          background-color: #f9fafb;
          border-radius: 0.5rem;
          font-style: italic;
        }

        /* Images within content */
        .wordpress-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1.5rem 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        /* Tables */
        .wordpress-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 15px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .wordpress-content table th,
        .wordpress-content table td {
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
          text-align: left;
        }

        .wordpress-content table th {
          background-color: #f3f4f6;
          font-weight: 600;
          color: #101631;
        }

        .wordpress-content table tr:nth-child(even) {
          background-color: #f9fafb;
        }

        /* ---------- THE COMPANY – CLEAN, PROFESSIONAL STYLING ---------- */
        .the-company-content {
          font-size: 16px;
          line-height: 1.7;
          color: #1e293b;
        }

        /* Headings – clean, no red borders */
        .the-company-content h2,
        .the-company-content h3,
        .the-company-content h4 {
          font-weight: 700;
          color: #0f172a;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
          border: none;
          padding-left: 0;
        }
        .the-company-content h2 {
          font-size: 1.75rem;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 0.4rem;
        }
        .the-company-content h3 {
          font-size: 1.5rem;
        }
        .the-company-content h4 {
          font-size: 1.25rem;
        }
        .the-company-content h2:first-child,
        .the-company-content h3:first-child {
          margin-top: 0;
        }

        /* Bullet lists – simple disc, no red checkmarks */
        .the-company-content ul {
          list-style-type: disc;
          list-style-position: outside;
          padding-left: 1.75rem;
          margin: 1.25rem 0;
          background: transparent;
          border: none;
          box-shadow: none;
        }
        .the-company-content ul li {
          padding: 0.3rem 0;
          margin-bottom: 0.25rem;
          border: none;
          background: transparent;
        }
        .the-company-content ul li::before {
          display: none; /* remove custom checkmark */
        }
        .the-company-content ul li:hover {
          background: transparent;
        }

        /* Nested lists */
        .the-company-content ul ul {
          list-style-type: circle;
          margin-top: 0.5rem;
        }

        /* Paragraph spacing */
        .the-company-content p {
          margin-bottom: 1.25rem;
          line-height: 1.7;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .wordpress-content {
            font-size: 15px;
          }
          .wordpress-content h1 { font-size: 1.75rem; }
          .wordpress-content h2 { font-size: 1.5rem; }
          .wordpress-content h3 { font-size: 1.25rem; }
          .wordpress-content h4 { font-size: 1.125rem; }

          .the-company-content {
            font-size: 15px;
          }
          .the-company-content h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}