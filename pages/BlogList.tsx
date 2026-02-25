import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Loader2 } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  content: string;
  coverImage: string | null;
  authorEmail: string;
  authorName?: string;
  createdAt: string;
  tags: string[];
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-eh-blue py-20 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-eh-green opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
         <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-eh-black mb-6">
                Notizie & Approfondimenti
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Scopri le ultime novità su Sanità Digitale, Value-Based Healthcare e l'evoluzione di Easy Health.
            </p>
         </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-eh-petrol" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            Nessun articolo pubblicato al momento.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                to={`/blog/${post.id}`} 
                key={post.id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="h-56 overflow-hidden bg-gray-100 relative">
                  <img 
                    src={post.coverImage || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-eh-petrol/0 group-hover:bg-eh-petrol/10 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.createdAt).toLocaleDateString('it-IT')}</span>
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.authorName || post.authorEmail.split('@')[0]}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-eh-black mb-3 group-hover:text-eh-petrol transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1" dangerouslySetInnerHTML={{ __html: post.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...' }}>
                  </p>

                  <div className="flex items-center text-eh-petrol font-bold text-sm mt-auto group-hover:gap-2 transition-all">
                    Leggi l'articolo <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogList;