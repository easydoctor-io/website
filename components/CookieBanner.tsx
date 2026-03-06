import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('eh_cookie_consent');
    if (!consent) {
      // Small delay for animation
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('eh_cookie_consent', 'all');
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('eh_cookie_consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="max-w-7xl mx-auto bg-white dark:bg-eh-darkSurface rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6 transition-colors duration-300">
        
        <div className="bg-eh-blue/50 dark:bg-eh-dark/50 p-3 rounded-full shrink-0 hidden md:block">
            <Cookie className="h-6 w-6 text-eh-petrol dark:text-eh-green" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-eh-black dark:text-white mb-2">Informativa sui Cookie</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Utilizziamo cookie per fornire una migliore esperienza utente su questo sito. Alcuni sono essenziali per il funzionamento, altri ci aiutano a migliorare i nostri servizi.
            Per maggiori informazioni, consulta la nostra <Link to="/cookie-policy" className="text-eh-petrol dark:text-eh-green underline hover:text-eh-green dark:hover:text-white font-medium">Politica sui cookie</Link> e la <Link to="/privacy" className="text-eh-petrol dark:text-eh-green underline hover:text-eh-green dark:hover:text-white font-medium">Privacy Policy</Link>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button 
            onClick={handleAcceptEssential}
            className="px-6 py-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-bold hover:border-eh-petrol dark:hover:border-eh-green hover:text-eh-petrol dark:hover:text-eh-green transition-colors text-sm whitespace-nowrap"
          >
            Solo essenziali
          </button>
          <button 
            onClick={handleAcceptAll}
            className="px-6 py-2.5 rounded-xl bg-eh-petrol dark:bg-eh-green text-white dark:text-eh-petrol font-bold hover:bg-eh-green dark:hover:bg-white hover:text-eh-petrol transition-colors text-sm whitespace-nowrap shadow-lg shadow-eh-petrol/20"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;