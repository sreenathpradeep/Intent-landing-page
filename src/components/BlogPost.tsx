import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPost, BlogPost as BlogPostType } from '../services/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Header from './Header';
import Footer from './Footer';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      
      const blogPost = await getBlogPost(slug);
      if (blogPost) {
        setPost(blogPost);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 container mx-auto px-4 pt-24 pb-16">
          <div className="text-center text-gray-600">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <article className="flex-1 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium mb-6 inline-block">
              ← Back to Blog
            </Link>
          </div>
          
          {post.fields.featuredImage && (
            <img
              src={post.fields.featuredImage.fields.file.url}
              alt={post.fields.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />
          )}
          
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.fields.title}</h1>
            
            <div className="flex items-center gap-4 text-gray-600">
              {post.fields.author && <span>By {post.fields.author}</span>}
              {post.fields.publishedDate && (
                <span>
                  {new Date(post.fields.publishedDate).toLocaleDateString()}
                </span>
              )}
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            {documentToReactComponents(post.fields.content)}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}