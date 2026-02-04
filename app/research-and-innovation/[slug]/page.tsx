'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
    }>>;
    author?: Array<{
      name: string;
    }>;
  };
}

export default function TransmissionPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  
  const [post, setPost] = useState<Post | null>(null);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [processedContent, setProcessedContent] = useState<string>('');

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setError('No slug provided');
      return;
    }

    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://news.sanpec-excellence.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        
        const data = await response.json();
        
        if (!data || data.length === 0) {
          throw new Error('Post not found');
        }
        
        setPost(data[0]);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // PDF ko detect aur embed karne ke liye
  useEffect(() => {
    if (post?.content?.rendered) {
      const content = post.content.rendered;
      
      // PDF links ko detect karo
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');
      
      // Sare PDF links dhundo
      const pdfLinks = doc.querySelectorAll('a[href*=".pdf"]');
      
      pdfLinks.forEach((link) => {
        const pdfUrl = link.getAttribute('href');
        if (pdfUrl) {
          // PDF viewer container banao
          const pdfContainer = doc.createElement('div');
          pdfContainer.className = 'pdf-viewer-container my-8';
          pdfContainer.innerHTML = `
            <div class="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
             
              <iframe 
                src="${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1" 
                width="100%" 
                height="600px"
                style="border: none; display: block;"
                title="PDF Viewer"
              ></iframe>
            </div>
          `;
          
          // Original link ko replace karo
          link.parentNode?.replaceChild(pdfContainer, link);
        }
      });
      
      setProcessedContent(doc.body.innerHTML);
    }
  }, [post]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetch(
          'https://news.sanpec-excellence.com/wp-json/wp/v2/posts?categories=36&_embed&per_page=100'
        );
        
        if (response.ok) {
          const data = await response.json();
          setAllPosts(data || []);
        }
      } catch (err) {
        console.error('Error fetching all posts:', err);
      }
    };

    fetchAllPosts();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const stripHtml = (html: string) => {
    if (!html) return '';
    if (typeof window !== 'undefined') {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
    }
    return html.replace(/<[^>]*>/g, '');
  };

  const getColoredTitle = (title: string) => {
    const words = title.split(' ');
    return words.map((word, index) => (
      <span key={index} className={index % 2 === 0 ? 'text-[#CD091B]' : 'text-[#101631]'}>
        {word}{' '}
      </span>
    ));
  };

  const handleNavigation = (path: string) => {
    try {
      router.push(path);
    } catch (err) {
      console.error('Navigation error:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#CD091B] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading Project...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="bg-red-50 border-l-4 border-[#CD091B] p-6 rounded-lg shadow-lg max-w-md">
          <div className="flex items-center mb-2">
            <svg className="w-6 h-6 text-[#CD091B] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
            </svg>
            <h3 className="text-[#101631] font-semibold">Error</h3>
          </div>
          <p className="text-gray-700">{error || 'Post not found'}</p>
         
        </div>
      </div>
    );
  }

  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .pdf-viewer-container {
            margin: 2rem 0;
          }
          
          .pdf-viewer-container iframe {
            background: #f5f5f5;
          }
        `
      }} />
      
      <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8 -mt-4 sm:-mt-6 lg:-mt-8">
        {/* Hero Section */}
        <div className="relative w-full h-[350px] overflow-hidden bg-[#0f1729]">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            
            {/* LEFT SIDE */}
            <div className="relative z-10 flex flex-col justify-between p-6 lg:p-10 bg-[#0f1729] text-white">
             

              <div className="mb-4">
                <p className="text-white/70 text-sm">
                  {formatDate(post.date)}
                </p>
              </div>
{/* amit devrani */}
              <div className="flex-1 flex items-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {stripHtml(post.title.rendered)}
                </h1>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative h-full">
              <img
                src={imageUrl || '/images/home/services/15.jpeg'}
                alt={stripHtml(post.title.rendered)}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/home/services/15.jpeg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#4a90e2]/10 to-[#0f1729]/60"></div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white px-4 sm:px-6 lg:px-12 py-12">
          <div className="max-w-6xl mx-auto">
            
            {post.excerpt?.rendered && (
              <div 
                className="text-lg text-gray-700 mb-10 leading-relaxed font-medium border-l-4 border-[#CD091B] pl-6 py-3 bg-red-50/30"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            )}

            <div 
              className="prose prose-lg max-w-none 
                prose-headings:text-[#101631] prose-headings:font-bold
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-[#CD091B] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#101631]
                prose-ul:list-disc prose-ol:list-decimal
                prose-img:rounded-xl prose-img:shadow-lg
                prose-blockquote:border-l-4 prose-blockquote:border-[#CD091B] prose-blockquote:pl-6
              "
              dangerouslySetInnerHTML={{ __html: processedContent || post.content.rendered }}
            />

            {/* RELATED PROJECTS */}
            {allPosts.length > 0 && (
              <div className="mt-20">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#CD091B]"></div>
                    <div className="w-3 h-3 bg-[#CD091B] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#101631] rounded-full"></div>
                    <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#101631]"></div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
                    {getColoredTitle('RELATED PROJECTS')}
                  </h2>
                  
                  <p className="text-gray-600 text-base max-w-2xl mx-auto">
                    Explore more of our comprehensive transmission and distribution infrastructure solutions
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allPosts.map((relatedPost) => {
                    if (!relatedPost) return null;
                    
                    const relatedImageUrl = relatedPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg';
                    const categories = relatedPost._embedded?.['wp:term']?.[0] || [];
                    const categoryName = categories.length > 0 ? stripHtml(categories[0].name) : 'Project';
                    const isActive = relatedPost.slug === slug;

                    return (
                      <article
                        key={relatedPost.id}
                        className="group relative w-full h-[380px] cursor-pointer"
                        onClick={() => handleNavigation(`/Projects/transmission/${relatedPost.slug}`)}
                      >
                        <div className={`relative h-full overflow-hidden rounded-xl transition-all duration-700 transform group-hover:scale-105 bg-white ${
                          isActive ? 'border-4 border-[#CD091B] shadow-2xl ring-4 ring-[#CD091B]/20' : 'border border-gray-300'
                        }`}>
                          
                          <img
                            src={relatedImageUrl}
                            alt={stripHtml(relatedPost.title.rendered)}
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f5f5f5" width="400" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
                            }}
                          />
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent"></div>
                          
                          <div className="absolute top-5 left-5 z-10">
                            <div className="px-4 py-1.5 bg-[#CD091B] rounded-md shadow-md">
                              <span className="text-white text-xs font-semibold uppercase tracking-wide">
                                {categoryName}
                              </span>
                            </div>
                          </div>
                          
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                            <div className="text-center max-w-md space-y-3">
                              <h2 
                                className="text-[#101631] font-extrabold text-lg md:text-xl leading-tight tracking-tight px-2"
                                style={{ 
                                  textShadow: '0 2px 10px rgba(255,255,255,0.8), 0 1px 3px rgba(255,255,255,0.6)'
                                }}
                              >
                                {stripHtml(relatedPost.title.rendered)}
                              </h2>
                              
                              {relatedPost.excerpt?.rendered && (
                                <p 
                                  className="text-[#101631] font-medium text-sm leading-relaxed line-clamp-3 px-2"
                                  style={{ textShadow: '0 1px 5px rgba(255,255,255,0.7)' }}
                                >
                                  {stripHtml(relatedPost.excerpt.rendered)}
                                </p>
                              )}
                            </div>
                          </div>
                          
                          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-white p-3 rounded-full shadow-2xl group-hover:scale-125 transition-transform border-2 border-gray-200">
                              <svg className="w-5 h-5 text-[#CD091B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            )} 
          </div>
        </div>
      </div>
    </>
  );
}