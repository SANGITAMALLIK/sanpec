'use client';
import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  categories: number[];
}

const PowerStructureResearch = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [educationPosts, setEducationPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducationPosts = async () => {
      try {
        const response = await fetch(
          'https://news.sanpec-excellence.com/wp-json/wp/v2/posts?categories=51&per_page=100&_embed',
            {
            next: { revalidate: 300 }, // ✅ 5 minutes cache
            cache: 'force-cache' // ✅ Force cache
          }
        );
        const data = await response.json();
        // Reverse karo - latest posts top pe aayenge
        setEducationPosts(data.reverse());
      } catch (error) {
        console.error('Error fetching education posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEducationPosts();
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const stripHtml = (html: string) => {
    if (typeof document !== 'undefined') {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
    }
    return html.replace(/<[^>]*>/g, '');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#0B1931 1px, transparent 1px), linear-gradient(90deg, #0B1931 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          opacity: 0.02
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-1 space-y-6">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl">
                <a href="https://www.gonzaga.edu/school-of-engineering-applied-science/graduate/transmission-distribution/faculty/mallik" target="_blank" rel="noopener noreferrer">
                  <div className="overflow-hidden">
                    <img 
                      src="https://sanpec-excellence.com/wp-content/uploads/2025/02/36-rotated.jpg" 
                      alt="Research and Innovation"
                      className="w-full h-auto object-cover transform group-hover:scale-110 transition duration-700"
                    />
                  </div>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 rounded-xl p-6 md:p-8 shadow-2xl border border-gray-300 group-hover:border-red-600 transition-all duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse" style={{animationDelay: '75ms'}}></div>
                  <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse" style={{animationDelay: '150ms'}}></div>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-wider group-hover:tracking-widest transition-all duration-500 transform group-hover:translate-x-1">
                  education and training
                </h2>
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-transparent transition-all duration-700 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-gray-500">Loading content...</div>
              </div>
            ) : (
              <div className="space-y-2">
                <style jsx global>{`
                  .article-content { color: #000; }
                  .article-content p { margin-bottom: 1.25rem; line-height: 1.75; color: #000; }
                  .article-content p + h1, .article-content p + h2, .article-content p + h3, 
                  .article-content p + h4, .article-content p + h5, .article-content p + h6 { margin-top: 2rem; }
                  .article-content h1, .article-content h2, .article-content h3, 
                  .article-content h4, .article-content h5, .article-content h6 { 
                    margin-bottom: 1rem; font-weight: 700; color: #0B1931; 
                  }
                  .article-content h1 + p, .article-content h2 + p, .article-content h3 + p, 
                  .article-content h4 + p, .article-content h5 + p, .article-content h6 + p { margin-top: 0; }
                  .article-content h1 { font-size: 1.875rem; }
                  .article-content h2 { font-size: 1.625rem; }
                  .article-content h3 { font-size: 1.375rem; }
                  .article-content h4 { font-size: 1.125rem; }
                  .article-content iframe, .article-content video, .article-content embed { 
                    width: 100%; aspect-ratio: 16/9; border-radius: 0.5rem; margin: 1.5rem 0; 
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1); 
                  }
                  .article-content video { background: #000; }
                  .article-content img { border-radius: 0.5rem; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
                  .article-content ul, .article-content ol { margin: 1.25rem 0; padding-left: 1.75rem; }
                  .article-content li { margin-bottom: 0.5rem; line-height: 1.75; color: #000; }
                  .article-content blockquote { border-left: 3px solid #DC2626; padding-left: 1.25rem; 
                    margin: 1.5rem 0; font-style: italic; color: #000; }
                  .article-content a { color: #000; text-decoration: none; font-weight: 500; }
                  .article-content a:hover { color: #DC2626; text-decoration: underline; }
                  .article-content strong, .article-content b { font-weight: 600; color: #000; }
                  .article-content code { background: #F3F4F6; padding: 0.25rem 0.5rem; 
                    border-radius: 0.25rem; font-size: 0.875rem; }
                  .article-content pre { background: #1F2937; color: #F3F4F6; padding: 1.25rem; 
                    border-radius: 0.5rem; margin: 1.5rem 0; overflow-x: auto; }
                  .article-content pre code { background: transparent; color: inherit; padding: 0; }
                  .article-content table { width: 100%; margin: 1.5rem 0; border-collapse: collapse; }
                  .article-content th, .article-content td { border: 1px solid #E5E7EB; padding: 0.625rem; }
                  .article-content th { background: #F9FAFB; font-weight: 600; }
                `}</style>

                {educationPosts.map((post, index) => (
                  <div key={post.id} className="group">
                    <div className="relative transition-all duration-500">
                      <div className={`absolute -inset-0.5 bg-gradient-to-r from-red-600 to-gray-900 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500 ${openAccordion === index ? 'opacity-20' : ''}`}></div>
                      
                      <div className={`relative bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all duration-500 ${
                        openAccordion === index 
                          ? 'border-red-600 shadow-2xl' 
                          : 'border-gray-200 hover:border-gray-400'
                      }`}>
                        <button
                          onClick={() => toggleAccordion(index)}
                          className={`w-full flex items-center justify-between text-left group/btn transition-all duration-300 hover:bg-gray-50 ${
                            openAccordion === index ? 'p-4 md:p-5' : 'p-3 md:p-3.5'
                          }`}
                        >
                          <div className="flex items-center gap-4 flex-1">
                            <span className={`font-bold transition-all duration-300 ${
                              openAccordion === index 
                                ? 'text-base md:text-lg text-red-600' 
                                : 'text-sm md:text-base text-gray-900 group-hover/btn:text-red-600'
                            }`}>
                              {stripHtml(post.title.rendered)}
                            </span>
                          </div>
                          
                          <div className="flex-shrink-0 ml-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white group-hover/btn:from-red-600 group-hover/btn:to-red-700 transition-all duration-300">
                              {openAccordion === index ? (
                                <Minus className="w-4 h-4" />
                              ) : (
                                <Plus className="w-4 h-4" />
                              )}
                            </div>
                          </div>
                        </button>
                        
                        <div className={`transition-all duration-500 ease-in-out ${
                          openAccordion === index 
                            ? 'max-h-[2000px] opacity-100' 
                            : 'max-h-0 opacity-0'
                        }`}>
                          <div className="px-4 md:px-5 pb-5 pt-2">
                            <div className="border-t-2 border-gray-200 pt-4">
                              <div className="bg-gray-50 rounded-lg p-4 md:p-5">
                                <div 
                                  className="article-content"
                                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerStructureResearch;