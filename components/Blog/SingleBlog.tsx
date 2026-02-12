'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, ChevronRight, Calendar, User, Tag, ArrowLeft, TrendingUp, Zap, Mail } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  slug: string;
}

interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
}

const decodeHTML = (text: string) => {
  if (typeof window === 'undefined') {
    return text.replace(/&#8217;/g, "'").replace(/&#8216;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')
      .replace(/&#8211;/g, '–').replace(/&#8212;/g, '—').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  }
  const el = document.createElement('textarea');
  el.innerHTML = text;
  return el.value;
};

const SingleBlog = ({ slug }: { slug: string }) => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [popularPosts, setPopularPosts] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        console.log('Searching for slug:', slug);
        
        const cachedData = localStorage.getItem('blogData');
        
        if (cachedData) {
          const allBlogs = JSON.parse(cachedData);
          console.log('Cached blogs:', allBlogs);
          
          const found = allBlogs.find((b: any) => b.slug === slug);
          console.log('Found blog in cache:', found);
          
          if (found) {
            const res = await fetch(
              `https://news.sanpec-excellence.com/wp-json/wp/v2/posts/${found.id}?_embed`,
              {
                next: { revalidate: 60 }, // ✅ 5 minutes cache
                cache: 'force-cache' // ✅ Force cache
              }
            );
            const data = await res.json();
            
            setBlog({
              id: data.id,
              title: decodeHTML(data.title.rendered),
              content: data.content.rendered,
              image: data._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
              category: data._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
              date: new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
              author: data._embedded?.author?.[0]?.name || 'Admin',
              slug: data.slug
            });
            
            setPopularPosts(allBlogs.slice(0, 5).map((b: Blog) => ({ 
              ...b, 
              title: decodeHTML(b.title),
              slug: b.slug
            })));
            
            const allCategories = allBlogs.map((b: Blog) => b.category);
            const filteredCategories = allCategories.filter((cat: string) => cat !== 'Uncategorized');
            const uniqueCategories: string[] = Array.from(new Set(filteredCategories));
            setCategories(['All', ...uniqueCategories]);
            
            setLoading(false);
            return;
          }
        }
        
        console.log('Not found in cache, fetching from API...');
        const res = await fetch(
          'https://news.sanpec-excellence.com/wp-json/wp/v2/posts?categories=1,25,43,46&per_page=100&_embed',
          {
            next: { revalidate: 300 }, // ✅ 5 minutes cache
            cache: 'force-cache' // ✅ Force cache
          }
        );
        const allPosts = await res.json();
        console.log('API posts:', allPosts);
        
        const matched = allPosts.find((post: any) => post.slug === slug);
        console.log('Matched post:', matched);
        
        if (matched) {
          setBlog({
            id: matched.id,
            title: decodeHTML(matched.title.rendered),
            content: matched.content.rendered,
            image: matched._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
            category: matched._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
            date: new Date(matched.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            author: matched._embedded?.author?.[0]?.name || 'Admin',
            slug: matched.slug
          });
          
          setPopularPosts(allPosts.slice(0, 5).map((p: any) => ({
            id: p.id,
            title: decodeHTML(p.title.rendered),
            slug: p.slug,
            image: p._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
            category: p._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized'
          })));
          
          const allCategories = allPosts.map((p: any) => p._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized');
          const filteredCategories = allCategories.filter((cat: string) => cat !== 'Uncategorized');
          const uniqueCategories: string[] = Array.from(new Set(filteredCategories));
          setCategories(['All', ...uniqueCategories]);
        } else {
          console.error('Blog not found with slug:', slug);
          setError(true);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(true);
        setLoading(false);
      }
    };

    if (slug) fetchBlog();
  }, [slug]);

  useEffect(() => {
    if (blog && !loading) {
      document.querySelectorAll('.article-content img, .article-content iframe').forEach(el => el.setAttribute('loading', 'lazy'));
      document.querySelectorAll('.article-content video').forEach(el => {
        el.setAttribute('controls', 'true');
        el.setAttribute('preload', 'metadata');
      });
    }
  }, [blog, loading]);

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-[#DC2626] rounded-full animate-spin mx-auto mb-3"></div>
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );

  if (error || !blog) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Article Not Found</h2>
        <p className="text-gray-600 mb-4">The article you're looking for doesn't exist.</p>
        <Link href="/blog" className="inline-flex items-center gap-2 bg-[#DC2626] text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-64 overflow-hidden">
        <img src="/images/23.jpg" alt={blog.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-6 lg:px-12 pb-6">
          <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 line-clamp-2">{blog.title}</h4>
          <nav className="flex items-center gap-2 text-xs sm:text-sm">
            <Link href="/" className="flex items-center gap-1 text-white/70 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <span className="text-[#DC2626] font-semibold line-clamp-1">{blog.title}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Article */}
          <div className="lg:col-span-3">
            <article className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                {blog.image && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-auto" loading="lazy" />
                  </div>
                )}

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
                  .article-content a { color: #000; text-decoration: underline; font-weight: 500; }
                  .article-content a:hover { color: #DC2626; }
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

                <div className="flex items-center gap-1.5 mb-4">
                  <Calendar className="w-4 h-4 text-[#DC2626]" />
                  <span className="text-sm text-gray-600">{blog.date}</span>
                </div>
                
                <h1 className="text-2xl md:text-3xl font-bold text-[#0B1931] mb-5 leading-snug">{blog.title}</h1>

                <div className="article-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>

              <div className="p-6 md:p-10 pt-0">
                <Link href="/blog" className="inline-flex items-center gap-2 bg-[#DC2626] text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition-colors font-medium">
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-5">
              <div className="bg-white p-5 shadow-sm border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2.5 mb-3">
                  <Zap className="w-5 h-5 text-[#DC2626]" />
                  <h3 className="text-lg font-semibold text-[#0B1931]">SANPEC</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">Bringing Engineering Excellence. Improving Power Grid Reliability</p>
              </div>

              <div className="bg-white p-5 shadow-sm border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2.5 mb-4">
                  <TrendingUp className="w-5 h-5 text-[#DC2626]" />
                  <h3 className="text-base font-semibold text-[#0B1931]">Latest Updates</h3>
                </div>
                <div className="space-y-3">
                  {popularPosts.map((post, idx) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} 
                      className="group flex items-start gap-2.5 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="flex-shrink-0 w-7 h-7 bg-gray-100 flex items-center justify-center text-gray-600 font-medium text-xs rounded group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
                        {idx + 1}
                      </div>
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-[#DC2626] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;