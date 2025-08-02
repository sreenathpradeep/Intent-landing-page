import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts, BlogPost } from '../services/contentful';
import Header from './Header';
import Footer from './Footer';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const blogPosts = await getBlogPosts();
      setPosts(blogPosts);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 container mx-auto px-4 pt-24 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neutral-800">Intent Blog</h1>
            <div className="text-gray-600">Loading...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neutral-800">Intent Blog</h1>
          
          {posts.length === 0 ? (
            <div className="text-center text-gray-600">
              No blog posts found. Create your first post in Contentful!
            </div>
          ) : (
            <div className="grid gap-12 md:gap-16">
              {posts.map((post) => (
                <article key={post.sys.id} className="border-b border-gray-100 pb-12 last:border-b-0">
                  {post.fields.featuredImage && (
                    <div className="block mb-4">
                      <img
                        src={`https:${post.fields.featuredImage.fields.file.url}`}
                        alt={post.fields.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    {post.fields.author && <span>By {post.fields.author}</span>}
                    {post.fields.publishedDate && (
                      <span>
                        {new Date(post.fields.publishedDate).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  
                  <Link to={`/blog/${post.fields.slug}`}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                      {post.fields.title}
                    </h2>
                  </Link>
                  
                  {post.fields.excerpt && (
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">{post.fields.excerpt}</p>
                  )}
                  
                  <Link 
                    to={`/blog/${post.fields.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer transition-colors"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}