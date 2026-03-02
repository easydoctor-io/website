import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowLeft, Tag, Share2, Loader2, MessageSquare, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  tags: string[];
  coverImage: string | null;
  authorName: string;
  createdAt: string;
}

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await fetch(`/api/news/${id}`);
        if (response.ok) {
          const data = await response.json();
          setNews(data);
        } else {
          setError('Notizia non trovata');
        }
      } catch (err) {
        console.error('Error fetching news detail:', err);
        setError('Errore durante il caricamento della notizia');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchNewsDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-eh-darkSurface">
        <Loader2 className="h-10 w-10 text-eh-petrol animate-spin mb-4" />
        <p className="text-gray-500">Caricamento notizia...</p>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-eh-darkSurface px-4 text-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 max-w-md">
          <h2 className="text-2xl font-bold text-eh-black dark:text-white mb-4">Ops!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{error || 'Qualcosa è andato storto.'}</p>
          <Link to="/notizie" className="inline-flex items-center gap-2 text-eh-petrol font-bold hover:gap-3 transition-all">
            <ArrowLeft className="h-4 w-4" /> Torna alle notizie
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-eh-darkSurface pt-24 pb-16 transition-colors duration-300">
      <Helmet>
        <title>{news.title} | Easy Health Notizie</title>
        <meta name="description" content={news.content.replace(/<[^>]*>?/gm, '').substring(0, 160)} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs / Back */}
        <div className="mb-8">
          <Link to="/notizie" className="inline-flex items-center gap-2 text-gray-500 hover:text-eh-petrol transition-colors text-sm font-medium">
            <ArrowLeft className="h-4 w-4" /> Torna alle notizie
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {news.tags.map(tag => (
              <span key={tag} className="bg-eh-petrol/10 text-eh-petrol text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-eh-black dark:text-white mb-6 leading-tight">
            {news.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-gray-100 dark:border-gray-700 pb-8">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-eh-petrol/10 flex items-center justify-center text-eh-petrol font-bold">
                {news.authorName.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-eh-black dark:text-white">{news.authorName}</p>
                <p className="text-xs">Autore</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(news.createdAt).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <button className="ml-auto inline-flex items-center gap-2 text-gray-400 hover:text-eh-petrol transition-colors">
              <Share2 className="h-4 w-4" /> Condividi
            </button>
          </div>
        </header>

        {/* Cover Image */}
        {news.coverImage && (
          <div className="mb-12 rounded-3xl overflow-hidden shadow-lg aspect-video">
            <img
              src={news.coverImage}
              alt={news.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Content */}
        <article className="prose prose-lg prose-eh max-w-none dark:prose-invert mb-16">
          <div dangerouslySetInnerHTML={{ __html: news.content }} />
        </article>

        {/* Footer / CTA */}
        <footer className="border-t border-gray-100 dark:border-gray-700 pt-12">
          <div className="bg-eh-blue dark:bg-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-xl font-bold text-eh-black dark:text-white mb-2">Ti interessa approfondire?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Contattaci per scoprire come le nostre soluzioni possono supportare la tua organizzazione sanitaria.
              </p>
            </div>
            <Link 
              to="/#contatti" 
              className="bg-eh-petrol text-white px-8 py-3 rounded-xl font-bold hover:bg-eh-petrol/90 transition-all shadow-lg shadow-eh-petrol/20 flex items-center gap-2 shrink-0"
            >
              Parla con un esperto <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NewsDetail;
