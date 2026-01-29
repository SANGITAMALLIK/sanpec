import SingleBlog from '@/components/Blog/SingleBlog';

export default async function SingleBlogPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  return <SingleBlog slug={slug} />;
}