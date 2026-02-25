import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Loader2, Headphones } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  content: string;
  coverImage: string | null;
  authorEmail: string;
  authorName?: string;
  createdAt: string;
  tags: string[];
  audioUrl: string | null;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${id}`);
        if (res.ok) {
          const data = await res.json();
          setPost(data);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <Loader2 className="h-12 w-12 animate-spin text-eh-petrol" />
      </div>
    );
  }

  if (error || !post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero / Header */}
      <div className="bg-eh-blue/30 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-eh-green/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-eh-petrol font-medium mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Torna alle Notizie
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-eh-black mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8">
            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm"><Calendar className="h-4 w-4 text-eh-petrol" /> {new Date(post.createdAt).toLocaleDateString('it-IT')}</span>
            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm"><User className="h-4 w-4 text-eh-petrol" /> {post.authorName || post.authorEmail.split('@')[0]}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-gray-100 aspect-video relative">
           <img 
             src={post.coverImage || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'} 
             alt={post.title} 
             className="w-full h-full object-cover"
             onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80';
             }}
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* AI Audio Player */}
        {post.audioUrl && (
          <div className="bg-eh-blue/20 p-6 rounded-2xl mb-12 border border-eh-petrol/10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-eh-petrol text-white rounded-full flex items-center justify-center shrink-0 shadow-lg">
              <Headphones className="h-8 w-8" />
            </div>
            <div className="flex-1 w-full">
              <h3 className="text-lg font-bold text-eh-black mb-2">Ascolta l'articolo (Podcast AI)</h3>
              <audio controls className="w-full" src={post.audioUrl}>
                Il tuo browser non supporta l'elemento audio.
              </audio>
            </div>
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-lg prose-headings:text-eh-petrol prose-a:text-eh-green hover:prose-a:text-eh-petrol text-gray-700 max-w-none">
           {/* Injected HTML Content */}
           <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Footer / Share */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
           <div className="text-sm text-gray-500">
             Scritto con cura da <span className="font-bold text-eh-black">{post.authorName || post.authorEmail.split('@')[0]}</span>
           </div>
           <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-eh-blue text-gray-600 hover:text-eh-petrol transition-all font-medium text-sm">
             <Share2 className="h-4 w-4" />
             Condividi Articolo
           </button>
        </div>
      </article>

      {/* Related / CTA */}
      <section className="bg-eh-black py-20 mt-12 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h3 className="text-3xl font-bold mb-4">Ti è piaciuto questo articolo?</h3>
           <p className="text-gray-400 mb-8 max-w-lg mx-auto">Rimani aggiornato sulle ultime novità di Easy Health e sull'evoluzione della sanità digitale.</p>
           <Link to="/#contatti" className="inline-block bg-eh-green text-eh-petrol px-8 py-4 rounded-xl font-bold hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg">
             Contattaci per saperne di più
           </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;