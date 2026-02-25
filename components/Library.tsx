import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, ChevronRight, AlertTriangle, BookOpen, Clock, FileCheck,
  Brain, HeartPulse, SmilePlus, Accessibility, Activity, Star, CheckCircle,
  Mail, Stethoscope, Wind, Bone, Utensils, Syringe, ArrowLeft, ArrowRightLeft, 
  Trash2, X, SlidersHorizontal
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { VERTICALS, INSTRUMENTS } from '../data/clinicalData';
import { Instrument, VerticalType } from '../types';
import { useGlobal } from '../context/GlobalContext';

// Helper Icon Mapper
const getIcon = (name: string) => {
  switch (name) {
    case 'Brain': return <Brain className="h-5 w-5" />;
    case 'HeartPulse': return <HeartPulse className="h-5 w-5" />;
    case 'SmilePlus': return <SmilePlus className="h-5 w-5" />;
    case 'Accessibility': return <Accessibility className="h-5 w-5" />;
    case 'Stethoscope': return <Stethoscope className="h-5 w-5" />;
    case 'Wind': return <Wind className="h-5 w-5" />;
    case 'Bone': return <Bone className="h-5 w-5" />;
    case 'Utensils': return <Utensils className="h-5 w-5" />;
    case 'Syringe': return <Syringe className="h-5 w-5" />;
    default: return <Activity className="h-5 w-5" />;
  }
};

const Library: React.FC = () => {
  const { 
    favoriteInstruments, 
    toggleInstrumentFavorite, 
    favoriteVerticals, 
    toggleVerticalFavorite,
    compareList,
    addToCompare,
    removeFromCompare,
    clearCompare
  } = useGlobal();

  const [selectedVertical, setSelectedVertical] = useState<VerticalType | 'ALL' | 'FAVORITES'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);
  
  // Advanced Filter States
  const [showFilters, setShowFilters] = useState(false);
  const [timeFilter, setTimeFilter] = useState<'ALL' | 'SHORT' | 'MEDIUM' | 'LONG'>('ALL'); // <5, 5-15, >15
  const [adminFilter, setAdminFilter] = useState<'ALL' | 'CLINICIAN' | 'PATIENT'>('ALL');
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Helper to parse time string to number
  const parseTime = (timeStr: string): number => {
    const match = timeStr.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const handleToggleFavorite = (e: React.MouseEvent, id: string, name: string) => {
    e.stopPropagation();
    toggleInstrumentFavorite(id);
    const isNowFav = !favoriteInstruments.includes(id);
    if (isNowFav) {
      toast.success(`${name} aggiunto ai preferiti`, {
        style: { background: '#096B72', color: '#fff' },
        iconTheme: { primary: '#fff', secondary: '#096B72' }
      });
    } else {
      toast(`${name} rimosso dai preferiti`);
    }
  };

  const handleAddToCompare = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (compareList.includes(id)) {
        removeFromCompare(id);
        toast("Rimosso dal confronto");
    } else {
        if (compareList.length >= 3) {
            toast.error("Puoi confrontare massimo 3 strumenti");
        } else {
            addToCompare(id);
            toast.success("Aggiunto al confronto");
        }
    }
  };

  // Logic to handle email sending (Simplified as per request)
  const handleContactClick = () => {
    const selectedNames = INSTRUMENTS
      .filter(i => favoriteInstruments.includes(i.id))
      .map(i => i.name)
      .join(', ');
    
    // Direct simple mailto
    const body = `Salve Team Easy Health,%0D%0A%0D%0ASono interessato ai vostri strumenti digitali (es. ${selectedNames || 'dal catalogo'}).%0D%0A%0D%0ACordiali Saluti.`;
    window.location.href = `mailto:fabio@easydoctor.io?subject=Richiesta Info da Catalogo Web&body=${body}`;
  };

  // Filter Logic
  const filteredInstruments = useMemo(() => {
    return INSTRUMENTS.filter(inst => {
      // Basic Filters
      const matchesVertical = 
        selectedVertical === 'ALL' ? true :
        selectedVertical === 'FAVORITES' ? favoriteInstruments.includes(inst.id) :
        inst.category === selectedVertical;
      
      const matchesSearch = inst.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            inst.acronym.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            inst.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Advanced Filters
      let matchesTime = true;
      const minutes = parseTime(inst.timeToComplete);
      if (timeFilter === 'SHORT') matchesTime = minutes < 5;
      else if (timeFilter === 'MEDIUM') matchesTime = minutes >= 5 && minutes <= 15;
      else if (timeFilter === 'LONG') matchesTime = minutes > 15;

      let matchesAdmin = true;
      // Heuristic based on description or tags since 'type' isn't explicitly in Instrument interface
      const isSelfReport = inst.description.toLowerCase().includes('autovalutazione') || inst.tags.some(t => t.toLowerCase().includes('paziente') || t.toLowerCase().includes('self'));
      if (adminFilter === 'PATIENT') matchesAdmin = isSelfReport;
      else if (adminFilter === 'CLINICIAN') matchesAdmin = !isSelfReport;

      return matchesVertical && matchesSearch && matchesTime && matchesAdmin;
    });
  }, [selectedVertical, searchQuery, favoriteInstruments, timeFilter, adminFilter]);

  const currentCategoryTitle = 
    selectedVertical === 'ALL' ? 'Catalogo Completo' : 
    selectedVertical === 'FAVORITES' ? 'La tua Selezione' :
    VERTICALS.find(v => v.id === selectedVertical)?.title;

  const compareItems = useMemo(() => INSTRUMENTS.filter(i => compareList.includes(i.id)), [compareList]);

  return (
    <>
      <Helmet>
        <title>Catalogo PROM & PREM | Easy Health</title>
        <meta name="description" content="Esplora la nostra libreria di strumenti clinici digitalizzati. Questionari validati per neurologia, cardiologia, oncologia e altro." />
      </Helmet>

      <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)] bg-eh-blue dark:bg-eh-dark transition-colors duration-300">
        
        {/* Sidebar: Verticals Navigation */}
        <aside className="w-full md:w-80 bg-white dark:bg-eh-darkSurface border-r border-gray-200 dark:border-gray-800 flex-shrink-0 z-10 md:h-[calc(100vh-80px)] md:sticky md:top-20 md:overflow-y-auto custom-scrollbar">
          <div className="p-6">
            <h2 className="text-xs font-bold text-eh-petrol dark:text-eh-green uppercase tracking-wider mb-6">Filtra per Specialità</h2>
            <nav className="space-y-2">
              <button
                onClick={() => setSelectedVertical('ALL')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all ${selectedVertical === 'ALL' ? 'bg-eh-petrol text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-eh-blue dark:hover:bg-gray-800 hover:text-eh-petrol dark:hover:text-white'}`}
              >
                <div className={`p-1.5 rounded-lg ${selectedVertical === 'ALL' ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'}`}><Filter className="h-4 w-4" /></div>
                Tutte le Aree
              </button>
              
              <button
                onClick={() => setSelectedVertical('FAVORITES')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all ${selectedVertical === 'FAVORITES' ? 'bg-eh-green text-eh-petrol shadow-md ring-2 ring-eh-petrol/10' : 'text-gray-600 dark:text-gray-300 hover:bg-eh-blue dark:hover:bg-gray-800 hover:text-eh-petrol dark:hover:text-white'}`}
              >
                <div className={`p-1.5 rounded-lg ${selectedVertical === 'FAVORITES' ? 'bg-eh-petrol/10 dark:bg-eh-petrol/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
                  <Star className={`h-4 w-4 ${selectedVertical === 'FAVORITES' ? 'fill-eh-petrol' : ''}`} />
                </div>
                Preferiti & Interessi
                {favoriteInstruments.length > 0 && (
                  <span className="ml-auto bg-eh-petrol text-white py-0.5 px-2 rounded-full text-xs font-bold">
                    {favoriteInstruments.length}
                  </span>
                )}
              </button>

              <div className="h-px bg-gray-100 dark:bg-gray-800 my-4"></div>

              {VERTICALS.map((v) => {
                const isFav = favoriteVerticals.includes(v.id);
                return (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVertical(v.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all group relative ${selectedVertical === v.id ? 'bg-eh-blue dark:bg-gray-800 text-eh-petrol dark:text-white border border-eh-petrol/20 dark:border-gray-700' : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm'}`}
                  >
                    <div className={`p-1.5 rounded-lg ${selectedVertical === v.id ? 'bg-white dark:bg-gray-700' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'}`}>
                      {getIcon(v.iconName)}
                    </div>
                    <span className="truncate flex-1 text-left">{v.title}</span>
                    
                    <div 
                      onClick={(e) => { e.stopPropagation(); toggleVerticalFavorite(v.id); }}
                      className={`p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors ${isFav ? 'text-eh-petrol dark:text-eh-green opacity-100' : 'text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-100'}`}
                      title="Aggiungi area ai preferiti"
                    >
                      <Star className={`h-4 w-4 ${isFav ? 'fill-current' : ''}`} />
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* Compare Sticky Action */}
            {compareList.length > 0 && (
                 <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-xl border border-eh-petrol shadow-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-eh-petrol dark:text-eh-green uppercase">Confronto ({compareList.length}/3)</span>
                        <button onClick={clearCompare} className="text-gray-400 hover:text-red-500"><Trash2 className="h-4 w-4"/></button>
                    </div>
                    <div className="flex -space-x-2 mb-3">
                        {compareList.map(id => (
                            <div key={id} className="w-8 h-8 rounded-full bg-eh-blue dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-[10px] font-bold text-eh-petrol dark:text-gray-300" title={INSTRUMENTS.find(i=>i.id===id)?.acronym}>
                                {INSTRUMENTS.find(i=>i.id===id)?.acronym.substring(0,2)}
                            </div>
                        ))}
                    </div>
                    <button onClick={() => setIsCompareModalOpen(true)} className="w-full py-2 bg-eh-petrol text-white text-xs font-bold rounded-lg hover:bg-eh-green hover:text-eh-petrol transition-colors flex items-center justify-center gap-2">
                        <ArrowRightLeft className="h-3 w-3" /> Confronta Ora
                    </button>
                 </div>
            )}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0 bg-gray-50 dark:bg-eh-dark">
          
          {/* Toolbar */}
          <header className="bg-white dark:bg-eh-darkSurface border-b border-gray-200 dark:border-gray-800 px-6 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 md:static z-10 shadow-sm md:shadow-none">
            <div>
              <h1 className="text-2xl font-extrabold text-eh-petrol dark:text-white">{currentCategoryTitle}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                  {filteredInstruments.length} {filteredInstruments.length === 1 ? 'strumento digitale disponibile' : 'strumenti digitali disponibili'}
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative max-w-md w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input 
                    type="text" 
                    placeholder="Cerca..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-eh-blue/50 dark:bg-gray-800 border border-transparent rounded-xl focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-eh-petrol focus:border-transparent outline-none text-sm transition font-medium placeholder-gray-500 text-gray-900 dark:text-white"
                    />
                </div>
                <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className={`p-2.5 rounded-xl border transition-colors ${showFilters ? 'bg-eh-petrol text-white border-eh-petrol' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-eh-petrol'}`}
                >
                    <SlidersHorizontal className="h-5 w-5" />
                </button>
            </div>
          </header>

          {/* Advanced Filters Panel */}
          {showFilters && (
              <div className="px-6 py-4 bg-white dark:bg-eh-darkSurface border-b border-gray-200 dark:border-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in slide-in-from-top-2 fade-in duration-200">
                  <div>
                      <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase">Tempo di compilazione</label>
                      <div className="flex gap-2">
                          {['ALL', 'SHORT', 'MEDIUM', 'LONG'].map((opt) => (
                              <button 
                                key={opt}
                                onClick={() => setTimeFilter(opt as any)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${timeFilter === opt ? 'bg-eh-petrol text-white border-eh-petrol' : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-eh-petrol'}`}
                              >
                                  {opt === 'ALL' ? 'Tutti' : opt === 'SHORT' ? '< 5 min' : opt === 'MEDIUM' ? '5-15 min' : '> 15 min'}
                              </button>
                          ))}
                      </div>
                  </div>
                  <div>
                      <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase">Tipo Somministrazione</label>
                      <div className="flex gap-2">
                          {['ALL', 'CLINICIAN', 'PATIENT'].map((opt) => (
                              <button 
                                key={opt}
                                onClick={() => setAdminFilter(opt as any)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${adminFilter === opt ? 'bg-eh-petrol text-white border-eh-petrol' : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-eh-petrol'}`}
                              >
                                  {opt === 'ALL' ? 'Tutti' : opt === 'CLINICIAN' ? 'Clinico' : 'Autovalutazione'}
                              </button>
                          ))}
                      </div>
                  </div>
              </div>
          )}

          {/* Content Split: List & Detail */}
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden h-full">
            
            {/* List View */}
            <div className={`flex-1 p-6 overflow-y-auto custom-scrollbar ${selectedInstrument ? 'hidden lg:block lg:w-1/2 lg:border-r border-gray-200 dark:border-gray-800' : 'w-full'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {filteredInstruments.map((inst) => {
                   const isFav = favoriteInstruments.includes(inst.id);
                   const isCompared = compareList.includes(inst.id);
                   return (
                    <div 
                      key={inst.id}
                      onClick={() => setSelectedInstrument(inst)}
                      className={`group relative bg-white dark:bg-eh-darkSurface border rounded-2xl p-6 cursor-pointer transition-all duration-200 hover:shadow-card hover:-translate-y-1 ${selectedInstrument?.id === inst.id ? 'border-eh-petrol ring-1 ring-eh-petrol bg-eh-blue/10 dark:bg-eh-petrol/10' : 'border-transparent shadow-sm hover:border-eh-green dark:border-gray-800 dark:hover:border-eh-green'}`}
                    >
                      {/* Action Buttons */}
                      <div className="absolute top-5 right-5 flex gap-2 z-10">
                        {/* Compare Toggle */}
                        <button
                           onClick={(e) => handleAddToCompare(e, inst.id)}
                           className={`p-2 rounded-full transition-colors ${isCompared ? 'bg-eh-petrol text-white' : 'text-gray-300 dark:text-gray-600 hover:bg-eh-blue dark:hover:bg-gray-700 hover:text-eh-petrol'}`}
                           title="Confronta"
                        >
                            <ArrowRightLeft className="h-4 w-4" />
                        </button>
                        {/* Favorite Toggle */}
                        <button 
                          onClick={(e) => handleToggleFavorite(e, inst.id, inst.acronym)}
                          className={`p-2 rounded-full transition-colors ${isFav ? 'bg-eh-petrol/10 dark:bg-eh-petrol/20 text-eh-petrol dark:text-eh-green' : 'text-gray-300 dark:text-gray-600 hover:bg-eh-blue dark:hover:bg-gray-700 hover:text-eh-petrol'}`}
                          title={isFav ? "Rimuovi interesse" : "Aggiungi a interessi"}
                        >
                          <Star className={`h-5 w-5 ${isFav ? 'fill-current' : ''}`} />
                        </button>
                      </div>

                      <div className="flex justify-between items-start mb-3 pr-20">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                          inst.category === VerticalType.NEUROLOGY ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                          inst.category === VerticalType.CARDIOVASCULAR ? 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200' :
                          inst.category === VerticalType.MENTAL_HEALTH ? 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200' :
                          inst.category === VerticalType.ONCOLOGY ? 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200' :
                          inst.category === VerticalType.RESPIRATORY ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' :
                          inst.category === VerticalType.MUSCULOSKELETAL ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' :
                          'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                        }`}>
                          {inst.subCategory}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-eh-black dark:text-white group-hover:text-eh-petrol dark:group-hover:text-eh-green transition-colors mb-2">
                        {inst.acronym}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 line-clamp-2 leading-relaxed">{inst.name}</p>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50 dark:border-gray-800">
                         <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 font-medium">
                          <Clock className="h-3.5 w-3.5" /> {inst.timeToComplete}
                        </span>
                        <span className="text-eh-petrol dark:text-eh-green text-xs font-bold group-hover:underline flex items-center">
                          Dettagli <ChevronRight className="h-3 w-3 ml-0.5" />
                        </span>
                      </div>
                    </div>
                  );
                })}
                
                {filteredInstruments.length === 0 && (
                  <div className="col-span-full text-center py-20 flex flex-col items-center">
                     <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                       <Search className="h-8 w-8 text-gray-400" />
                     </div>
                     <h3 className="text-lg font-bold text-gray-900 dark:text-white">Nessun risultato trovato</h3>
                     <p className="text-gray-500 dark:text-gray-400">Prova a modificare i filtri o i termini di ricerca.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Detail View */}
            {selectedInstrument && (
              <div className={`w-full lg:w-[600px] bg-white dark:bg-eh-darkSurface overflow-y-auto custom-scrollbar p-8 shadow-2xl lg:shadow-none fixed inset-0 z-50 lg:static lg:inset-auto lg:z-auto flex flex-col h-full animate-in slide-in-from-right-10 fade-in duration-300 border-l border-gray-200 dark:border-gray-800`}>
                {/* Mobile Back Button */}
                <div className="lg:hidden flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
                  <button 
                      onClick={() => setSelectedInstrument(null)}
                      className="flex items-center text-sm font-bold text-gray-500 hover:text-eh-black dark:text-gray-400 dark:hover:text-white"
                  >
                      <ArrowLeft className="h-5 w-5 mr-1" /> Torna al catalogo
                  </button>
                  <span className="text-xs font-bold text-eh-petrol dark:text-eh-green uppercase">Scheda Tecnica</span>
                </div>

                <div className="border-b border-gray-100 dark:border-gray-800 pb-8 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h2 className="text-4xl font-extrabold text-eh-petrol dark:text-white">{selectedInstrument.acronym}</h2>
                    </div>
                    {/* Favorite toggle in detail view */}
                    <button 
                        onClick={(e) => handleToggleFavorite(e, selectedInstrument.id, selectedInstrument.acronym)}
                        className={`p-3 rounded-full transition-colors ${favoriteInstruments.includes(selectedInstrument.id) ? 'bg-eh-green/20 text-eh-petrol dark:text-eh-green' : 'bg-gray-50 dark:bg-gray-800 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    >
                      <Star className={`h-6 w-6 ${favoriteInstruments.includes(selectedInstrument.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  <h3 className="text-xl text-eh-black dark:text-gray-200 font-medium leading-snug">{selectedInstrument.name}</h3>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                      {selectedInstrument.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 bg-eh-blue dark:bg-gray-800 text-eh-black dark:text-gray-300 text-xs font-semibold rounded-md border border-gray-200 dark:border-gray-700">
                              #{tag}
                          </span>
                      ))}
                  </div>
                </div>

                <div className="space-y-10 flex-1">
                  {/* Description */}
                  <section>
                    <h4 className="flex items-center gap-2 text-sm font-extrabold text-eh-black dark:text-gray-200 uppercase tracking-wide mb-4">
                      <BookOpen className="h-5 w-5 text-eh-green" /> Scopo Clinico
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed bg-eh-blue/30 dark:bg-gray-800/50 p-5 rounded-xl border border-eh-blue dark:border-gray-700">
                      {selectedInstrument.description}
                    </p>
                  </section>

                  {/* Scoring Logic */}
                  <section>
                    <h4 className="flex items-center gap-2 text-sm font-extrabold text-eh-black dark:text-gray-200 uppercase tracking-wide mb-4">
                      <FileCheck className="h-5 w-5 text-eh-green" /> Logica & Score
                    </h4>
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm">
                      <div className="mb-4">
                          <p className="text-xs font-bold text-gray-400 uppercase mb-1">Algoritmo di calcolo</p>
                          <p className="text-base text-eh-black dark:text-gray-200 font-medium">{selectedInstrument.scoringLogic}</p>
                      </div>
                      
                      <div className="h-px bg-gray-100 dark:bg-gray-700 my-4"></div>

                      <div>
                          <p className="text-xs font-bold text-gray-400 uppercase mb-1">Validazione Scientifica</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 italic font-medium bg-gray-50 dark:bg-gray-700/50 p-2 rounded border-l-4 border-eh-petrol">
                              {selectedInstrument.validationRef}
                          </p>
                      </div>
                    </div>
                  </section>

                  {/* Alert Trigger Visualization */}
                  <section>
                     <h4 className="flex items-center gap-2 text-sm font-extrabold text-eh-black dark:text-gray-200 uppercase tracking-wide mb-4">
                      <AlertTriangle className="h-5 w-5 text-amber-500" /> Alerting Digitale
                    </h4>
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-xl p-5 flex items-start gap-4">
                      <div className="p-2.5 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex-shrink-0">
                        <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                      </div>
                      <div>
                        <h5 className="text-amber-900 dark:text-amber-200 font-bold text-sm">Soglia Clinica Configurabile</h5>
                        <p className="text-amber-800 dark:text-amber-300 text-sm mt-2 leading-relaxed">
                          {selectedInstrument.alertTrigger}
                        </p>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="pt-8 mt-4 sticky bottom-0 bg-white dark:bg-eh-darkSurface border-t border-gray-100 dark:border-gray-800 pb-4 lg:pb-0">
                    <div className="flex gap-4">
                       <button 
                          onClick={(e) => handleToggleFavorite(e, selectedInstrument.id, selectedInstrument.acronym)}
                          className={`flex-1 py-4 rounded-xl font-bold border-2 transition-all ${favoriteInstruments.includes(selectedInstrument.id) ? 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800' : 'border-eh-petrol text-eh-petrol dark:text-eh-green dark:border-eh-green hover:bg-eh-blue dark:hover:bg-gray-800'}`}
                       >
                          {favoriteInstruments.includes(selectedInstrument.id) ? 'Rimuovi' : 'Aggiungi ai Preferiti'}
                       </button>
                       <button 
                          onClick={handleContactClick}
                          className="flex-[2] bg-eh-petrol hover:bg-eh-green hover:text-eh-petrol text-white font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
                       >
                          <Mail className="h-5 w-5" />
                          Richiedi Demo
                       </button>
                    </div>
                </div>

              </div>
            )}

            {/* Placeholder if no selection */}
            {!selectedInstrument && (
              <div className="hidden lg:flex flex-1 items-center justify-center bg-gray-50 dark:bg-eh-dark text-gray-400 flex-col gap-6 p-12 text-center">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-full shadow-sm">
                    <BookOpen className="h-12 w-12 text-eh-green/50" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-600 dark:text-gray-300 mb-2">Dettagli Strumento</h3>
                    <p className="max-w-xs mx-auto text-gray-500 dark:text-gray-400">Seleziona uno strumento dalla lista per visualizzare i dettagli di validazione, gli algoritmi di scoring e gli alert.</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Comparison Modal */}
      {isCompareModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
              <div className="bg-white dark:bg-eh-darkSurface rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                      <h2 className="text-2xl font-bold text-eh-petrol dark:text-white">Confronto Strumenti</h2>
                      <button onClick={() => setIsCompareModalOpen(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                          <X className="h-6 w-6 text-gray-500" />
                      </button>
                  </div>
                  
                  <div className="flex-1 overflow-auto p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {compareItems.map(item => (
                              <div key={item.id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-gray-50 dark:bg-gray-800/50">
                                  <div className="flex justify-between mb-4">
                                      <span className="font-bold text-eh-petrol dark:text-eh-green text-xl">{item.acronym}</span>
                                      <button onClick={() => removeFromCompare(item.id)} className="text-gray-400 hover:text-red-500"><Trash2 className="h-4 w-4"/></button>
                                  </div>
                                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-4 h-12 line-clamp-2">{item.name}</h4>
                                  
                                  <div className="space-y-4 text-sm">
                                      <div>
                                          <p className="text-xs font-bold text-gray-400 uppercase">Tempo</p>
                                          <p className="dark:text-gray-300">{item.timeToComplete}</p>
                                      </div>
                                      <div>
                                          <p className="text-xs font-bold text-gray-400 uppercase">Obiettivo</p>
                                          <p className="dark:text-gray-300 line-clamp-3" title={item.description}>{item.description}</p>
                                      </div>
                                      <div>
                                          <p className="text-xs font-bold text-gray-400 uppercase">Score</p>
                                          <p className="dark:text-gray-300">{item.scoringLogic}</p>
                                      </div>
                                      <div>
                                          <p className="text-xs font-bold text-gray-400 uppercase">Alert</p>
                                          <p className="text-amber-700 dark:text-amber-400 font-medium text-xs">{item.alertTrigger}</p>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      )}
    </>
  );
};

export default Library;