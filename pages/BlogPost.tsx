import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import AudioPlayer from '../components/AudioPlayer';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
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
            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm"><Calendar className="h-4 w-4 text-eh-petrol" /> {post.date}</span>
            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm"><User className="h-4 w-4 text-eh-petrol" /> {post.author}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-12 border border-gray-100 aspect-video relative">
           <img 
             src={post.image} 
             alt={post.title} 
             className="w-full h-full object-cover"
             onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80';
             }}
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* AI Audio Player */}
        <AudioPlayer text={`${post.title}. ${post.subtitle}. ${post.content}`} title={post.title} />

        {/* Article Body */}
        <div className="prose prose-lg prose-headings:text-eh-petrol prose-a:text-eh-green hover:prose-a:text-eh-petrol text-gray-700 max-w-none">
           {/* Subtitle / Lead */}
           <p className="text-xl text-gray-600 font-medium mb-10 border-l-4 border-eh-green pl-6 italic leading-relaxed">
             {post.subtitle}
           </p>
           
           {/* Injected HTML Content */}
           <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Footer / Share */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
           <div className="text-sm text-gray-500">
             Scritto con cura da <span className="font-bold text-eh-black">{post.author}</span>
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
           <Link to="/contactus" className="inline-block bg-eh-green text-eh-petrol px-8 py-4 rounded-xl font-bold hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg">
             Contattaci per saperne di più
           </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;