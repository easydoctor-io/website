import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Info, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TERMS = [
    {
        term: "Aderenza Terapeutica",
        def: "L’aderenza terapeutica indica la misura in cui il comportamento di una persona - nell’assunzione di farmaci, nel seguire una dieta o ancora, nel modificare lo stile di vita - corrisponde alle indicazioni e raccomandazioni del proprio medico.\n\nMaggiore è l’aderenza terapeutica e maggiori sono le chance di ottenere i risultati attesi dalla terapia e prevenire o ridurre possibili complicanze.\n\nIn ultimo, un’adeguata aderenza terapeutica può contribuire a ridurre i costi sanitari per chi li sostiene tipicamente il paziente, il sistema sanitario e/o una assicurazione."
    },
    {
        term: "API (Access Programming Interface)",
        def: "Una API (Application Programming Interface) è un insieme di regole e protocolli che consente a diverse applicazioni software di comunicare tra loro, facilitando lo scambio di dati e l’accesso a determinate funzionalità.\n\nLe API permettono di integrare diversi sistemi: in ambito sanitario, ad esempio, permettono a più applicativi di accedere alla medesima cartella clinica elettronica, migliorando l’efficienza e la continuità delle cure."
    },
    {
        term: "Patient Engagement",
        def: "Il Patient Engagement (in italiano “coinvolgimento del paziente”), è il coinvolgimento attivo del paziente nel proprio percorso di cura, attraverso la partecipazione informata e collaborativa con i professionisti sanitari.\n\nUn buon coinvolgimento del paziente favorisce una maggiore aderenza terapeutica, contribuisce a migliorare gli esiti clinici e in generale, migliora l’esperienza complessiva di cura.\n\nIl Digital Patient Engagement (DPE) è un sottoinsieme del Patient Engagement, che prende in considerazione l’utilizzo di risorse digitali nella relazione con il paziente."
    },
    {
        term: "Patient Experience",
        def: "L’esperienza del paziente (in inglese Patient Experience, PX) comprende tutte le interazioni che un paziente ha con chi ne ha la cura, dal singolo operatore sanitario all’intero sistema sanitario.\n\nAi fini della Patient Experience rilevano tutti gli aspetti della relazione: aspetti clinici, comunicazioni, organizzazione, etc.\n\nL’esperienza, nel suo insieme, determina la percezione complessiva della qualità di cura ricevuta."
    },
    {
        term: "PDTA (Percorsi Diagnostico Terapeutici Assistenziali)",
        def: "I Percorsi Diagnostici Terapeutici Assistenziali (PDTA) sono uno strumento di gestione clinica per la definizione del migliore processo assistenziale finalizzato a rispondere a specifici bisogni di salute, sulla base delle evidenze scientifiche disponibili sull’argomento, adattate al contesto locale, tenute presenti le risorse disponibili.\n\nI PDTA sono una risorsa che consente di uniformare l’approccio terapeutico, supportare un processo di miglioria delle cure e, infine, consentire l’ottimizzazione dell’impiego di risorse sanitarie."
    },
    {
        term: "PROM (Patient-Reported Outcome Measures)",
        def: "I Patient-Reported Outcome Measures (PROM), cioè la misura degli esiti riportati dai pazienti, sono strumenti - tipicamente questionari validati - con cui le persone descrivono direttamente il proprio stato di salute: sintomi, funzionalità, qualità di vita e altri aspetti.\n\nI PROM integrano gli esiti clinici “oggettivi” con quello che conta per il paziente, permettendo di misurare l’efficacia percepita di terapie, interventi e percorsi assistenziali.\n\nLa raccolta dei PROM in momenti prestabiliti - ad esempio prima di un intervento e/o a distanza di 30/60/90/180 giorni - o nel caso di malattie croniche con cadenza periodica, consente di confrontare nel tempo quanto riportato, per migliorare percorsi di cura e altre esperienze sanitarie."
    },
    {
        term: "PREM (Patient-Reported Experience Measures)",
        def: "I Patient-Reported Experience Measures (PREM), cioè la misura delle esperienze riportate dai pazienti, sono strumenti - tipicamente questionari validati - con cui i pazienti indicano l’esperienza di cura vissuta: accessibilità, comunicazione, empatia, tempi di attesa, coordinamento tra i professionisti della salute e altri aspetti entrano a far parte di un paniera che dà la misura di come il paziente ha percepito l’esperienza. Oggetto d’attenzione dei PREM non è tanto l’esito clinico, ma la qualità dell’interazione e dell’organizzazione lungo il percorso, dal punto di vista del paziente."
    },
    {
        term: "SaaS (Software as a Service)",
        def: "Per SaaS si intende un modello di servizio in cui un software, tipicamente accessibile da remoto, si paga in base all’utilizzo che ne viene fatto e agli accordi con il fornitore.\n\nGrazie al modello di servizio SaaS, si riducono in maniera considerevole i costi da sostenere inizialmente e i costi infrastrutturali.\n\nInoltre, tipicamente, i software resi disponibili in modalità SaaS sono basati su Cloud e accessibili in qualsiasi momento e da qualsiasi dispositivo."
    },
    {
        term: "Telemedicina",
        def: "La telemedicina è l’erogazione di servizi sanitari a distanza, tipicamente tramite tecnologie digitali.\n\nNel contesto della telemedicina si individuano molteplici attività, tra cui:\n\nTelevisita: si tratta di una visita medica a distanza, spesso tramite videoconferenza.\nTeleconsulto/teleconsulenza: consulto o consulenza medica a distanza, in modalità sincrona o asincrona, tra medici, altri professionisti sanitari e pazienti.\nTelemonitoraggio: monitoraggio a distanza di parametri vitali del paziente, tipicamente tramite dispositivi digitali.\nTeleassistenza: servizi di supporto e assistenza a distanza erogati da professionisti sanitari nei confronti di pazienti.\nTelechirurgia: interventi operatori in cui il chirurgo o i chirurghi che effettuano l’intervento si trovano distanti dal paziente e comandano a distanza dispositivi robotici.\nTeleriabilitazione: esperienze di riabilitazione in cui i professionisti sanitari possono trovarsi a distanza rispetto al paziente.\n\nLa telemedicina è una risorsa fondamentale per migliorare la qualità della cura e della sua esperienza, sia per i pazienti che per i professionisti sanitari."
    }
];

const Glossary: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const filteredTerms = useMemo(() => {
        return TERMS.filter(item => {
            const matchesSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                item.def.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesLetter = selectedLetter ? item.term.toUpperCase().startsWith(selectedLetter) : true;
            return matchesSearch && matchesLetter;
        }).sort((a, b) => a.term.localeCompare(b.term));
    }, [searchQuery, selectedLetter]);

    return (
        <div className="bg-eh-blue dark:bg-eh-dark min-h-screen py-12 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center justify-center p-3 bg-eh-petrol/10 dark:bg-eh-green/10 rounded-2xl text-eh-petrol dark:text-eh-green mb-6"
                    >
                        <BookOpen className="h-8 w-8" />
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-eh-black dark:text-white mb-4 tracking-tight"
                    >
                        Glossario Sanitario
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Esplora i termini chiave della sanità digitale, del risk management e dell'innovazione tecnologica in medicina.
                    </motion.p>
                </div>

                {/* Search & Filter Bar */}
                <div className="bg-white dark:bg-eh-darkSurface rounded-2xl shadow-xl p-6 mb-10 border border-gray-100 dark:border-gray-800 sticky top-24 z-30 backdrop-blur-md bg-white/90 dark:bg-eh-darkSurface/90">
                    <div className="relative mb-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input 
                            type="text"
                            placeholder="Cerca un termine o una definizione..."
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-eh-petrol dark:focus:ring-eh-green text-eh-black dark:text-white transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                        <button 
                            onClick={() => setSelectedLetter(null)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${!selectedLetter ? 'bg-eh-petrol text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                        >
                            TUTTI
                        </button>
                        {alphabet.map(letter => {
                            const hasTerms = TERMS.some(t => t.term.toUpperCase().startsWith(letter));
                            return (
                                <button 
                                    key={letter}
                                    disabled={!hasTerms}
                                    onClick={() => setSelectedLetter(letter)}
                                    className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-all ${
                                        selectedLetter === letter 
                                            ? 'bg-eh-petrol text-white' 
                                            : hasTerms 
                                                ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-eh-petrol hover:text-white' 
                                                : 'opacity-30 cursor-not-allowed text-gray-400'
                                    }`}
                                >
                                    {letter}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Terms Grid */}
                <div className="grid gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredTerms.length > 0 ? (
                            filteredTerms.map((item, idx) => (
                                <motion.div 
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    key={item.term} 
                                    className="group bg-white dark:bg-eh-darkSurface rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-eh-petrol/30 dark:hover:border-eh-green/30 shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 p-2 bg-eh-blue dark:bg-gray-800 rounded-lg text-eh-petrol dark:text-eh-green group-hover:bg-eh-petrol group-hover:text-white transition-colors">
                                            <Info className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-eh-black dark:text-white mb-4 flex items-center gap-2">
                                                {item.term}
                                                <ChevronRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-eh-petrol dark:text-eh-green" />
                                            </h3>
                                            <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                                                {item.def}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20 bg-white dark:bg-eh-darkSurface rounded-3xl border border-dashed border-gray-300 dark:border-gray-700"
                            >
                                <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-500">Nessun termine trovato</h3>
                                <p className="text-gray-400">Prova a cambiare i filtri o la ricerca.</p>
                                <button 
                                    onClick={() => {setSearchQuery(''); setSelectedLetter(null);}}
                                    className="mt-6 text-eh-petrol dark:text-eh-green font-bold hover:underline"
                                >
                                    Resetta filtri
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer Info */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 bg-eh-petrol text-white rounded-3xl overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-2">Hai dubbi su altri termini?</h3>
                            <p className="text-eh-blue/80">Il nostro team è a disposizione per approfondire ogni aspetto tecnologico e normativo.</p>
                        </div>
                        <a 
                            href="#contatti"
                            className="px-8 py-4 bg-white text-eh-petrol font-bold rounded-xl hover:bg-eh-green hover:text-eh-petrol transition-all shadow-lg"
                        >
                            Contattaci ora
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Glossary;
