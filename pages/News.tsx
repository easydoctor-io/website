import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Search, Tag, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { newsData } from '../data/news';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  tags: string[];
  coverImage: string | null;
  authorName: string;
  createdAt: string;
}

const News: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialTag = searchParams.get('tag');
  
  const [news, setNews] = useState<NewsItem[]>(newsData);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(initialTag);

  useEffect(() => {
    if (initialTag) {
      setSelectedTag(initialTag);
    }
  }, [initialTag]);

  const allTags = Array.from(new Set(news.flatMap(item => item.tags)));

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || item.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-eh-darkSurface pt-24 pb-16 transition-colors duration-300">
      <Helmet>
        <title>Notizie | Easy Health</title>
        <meta name="description" content="Resta aggiornato sulle ultime novità di Easy Health, innovazioni nella sanità digitale e risk management." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-eh-black dark:text-white mb-4">Notizie & Insight</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Esplora le ultime novità dal mondo della sanità digitale, approfondimenti tecnici e aggiornamenti sui nostri progetti.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cerca tra le notizie..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-eh-black dark:text-white focus:ring-2 focus:ring-eh-petrol outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !selectedTag 
                  ? 'bg-eh-petrol text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-eh-petrol'
              }`}
            >
              Tutte
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTag === tag 
                    ? 'bg-eh-petrol text-white' 
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-eh-petrol'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-10 w-10 text-eh-petrol animate-spin mb-4" />
            <p className="text-gray-500">Caricamento notizie...</p>
          </div>
        ) : filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group flex flex-col"
              >
                {item.coverImage && (
                  <Link to={`/notizie/${item.coverImage ? item.id : '#'}`} className="block relative aspect-video overflow-hidden">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {item.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="bg-eh-petrol/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                )}

                <div className="p-6 flex-grow flex flex-col">
                  {!item.coverImage && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="bg-eh-petrol/10 text-eh-petrol text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(item.createdAt).toLocaleDateString('it-IT')}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {item.authorName}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-eh-black dark:text-white mb-3 group-hover:text-eh-petrol transition-colors line-clamp-2">
                    <Link to={`/notizie/${item.id}`}>{item.title}</Link>
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                    {item.content.replace(/<[^>]*>?/gm, '').substring(0, 150)}...
                  </p>

                  <Link
                    to={`/notizie/${item.id}`}
                    className="inline-flex items-center gap-2 text-eh-petrol font-bold text-sm hover:gap-3 transition-all"
                  >
                    Leggi di più <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
            <p className="text-gray-500">Nessuna notizia trovata con i filtri selezionati.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedTag(null);}}
              className="mt-4 text-eh-petrol font-bold hover:underline"
            >
              Resetta filtri
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
