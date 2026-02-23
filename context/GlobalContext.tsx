import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface GlobalContextType {
  // Theme
  isDarkMode: boolean;
  toggleTheme: () => void;
  
  // Favorites
  favoriteInstruments: string[];
  toggleInstrumentFavorite: (id: string) => void;
  favoriteVerticals: string[];
  toggleVerticalFavorite: (id: string) => void;
  
  // Compare Mode
  compareList: string[];
  addToCompare: (id: string) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // --- Theme State ---
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('eh_theme') === 'dark' || 
               (!('eh_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('eh_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('eh_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  // --- Favorites State ---
  const [favoriteInstruments, setFavoriteInstruments] = useState<string[]>(() => {
    const saved = localStorage.getItem('eh_interest_instruments');
    return saved ? JSON.parse(saved) : [];
  });

  const [favoriteVerticals, setFavoriteVerticals] = useState<string[]>(() => {
    const saved = localStorage.getItem('eh_interest_verticals');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('eh_interest_instruments', JSON.stringify(favoriteInstruments));
  }, [favoriteInstruments]);

  useEffect(() => {
    localStorage.setItem('eh_interest_verticals', JSON.stringify(favoriteVerticals));
  }, [favoriteVerticals]);

  const toggleInstrumentFavorite = (id: string) => {
    setFavoriteInstruments(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleVerticalFavorite = (id: string) => {
    setFavoriteVerticals(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // --- Compare State ---
  const [compareList, setCompareList] = useState<string[]>([]);

  const addToCompare = (id: string) => {
    if (compareList.length < 3 && !compareList.includes(id)) {
        setCompareList(prev => [...prev, id]);
    }
  };

  const removeFromCompare = (id: string) => {
    setCompareList(prev => prev.filter(i => i !== id));
  };

  const clearCompare = () => setCompareList([]);

  return (
    <GlobalContext.Provider value={{
      isDarkMode,
      toggleTheme,
      favoriteInstruments,
      toggleInstrumentFavorite,
      favoriteVerticals,
      toggleVerticalFavorite,
      compareList,
      addToCompare,
      removeFromCompare,
      clearCompare
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
};