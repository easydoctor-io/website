import React from 'react';
import { 
  ShieldAlert, Activity, AlertTriangle, FileWarning, 
  Syringe, Microscope, Gavel, ClipboardCheck, Users, 
  Stethoscope, Database, BookOpen, Presentation, FileSearch
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const ClinicalRisk: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-eh-blue to-white pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-eh-petrol/20 text-eh-petrol text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                Easy Risk
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-eh-black mb-6 leading-tight">
                Risk Management Clinico <br/>
                <span className="text-eh-petrol">Integrato e Predittivo</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mb-8 leading-relaxed">
                La piattaforma <strong>Easy Risk</strong> centralizza la gestione del rischio clinico ospedaliero. Dall'Incident Reporting alla gestione dei sinistri, offriamo una visione completa per la sicurezza del paziente e la tutela della struttura.
            </p>
            <div className="flex gap-4">
                <a href="#contatti" className="bg-eh-petrol text-white px-8 py-3.5 rounded-xl font-bold hover:bg-eh-green hover:text-eh-petrol transition-all shadow-lg shadow-eh-petrol/20">
                    Richiedi Demo Easy Risk
                </a>
            </div>
        </div>
        {/* Decorative bg */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-eh-green/10 skew-x-12 transform origin-top-right"></div>
      </section>

      {/* Main Features Grid (Software) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-eh-black">Piattaforma Software Easy Risk</h2>
            <p className="text-gray-500 mt-4">Gestione completa degli indicatori di sicurezza secondo le Raccomandazioni Ministeriali.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Incident Reporting */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-eh-petrol group">
                <div className="w-12 h-12 bg-eh-blue rounded-xl flex items-center justify-center text-eh-petrol mb-6 group-hover:scale-110 transition-transform">
                    <ShieldAlert className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eh-petrol transition-colors">Incident Reporting</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Rilevazione di eventi avversi, near miss ed eventi sentinella. Analisi dettagliata per reparto, tipologia, gravità e trend temporali per prevenire il ripetersi degli errori.
                </p>
            </div>

            {/* 2. Cadute */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-eh-petrol group">
                <div className="w-12 h-12 bg-eh-blue rounded-xl flex items-center justify-center text-eh-petrol mb-6 group-hover:scale-110 transition-transform">
                    <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eh-petrol transition-colors">Prevenzione Cadute</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Monitoraggio indicatori specifici: numero eventi (con/senza danno), tassi per 1.000 giornate di degenza, analisi cause ricorrenti e tracciamento azioni correttive.
                </p>
            </div>

            {/* 3. Farmaci */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-eh-petrol group">
                <div className="w-12 h-12 bg-eh-blue rounded-xl flex items-center justify-center text-eh-petrol mb-6 group-hover:scale-110 transition-transform">
                    <Syringe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eh-petrol transition-colors">Rischio Farmacologico</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Gestione errori di prescrizione, trascrizione e somministrazione. Focus su farmaci LASA e terapie ad alto rischio, in linea con le Raccomandazioni ministeriali.
                </p>
            </div>

            {/* 4. Sala Operatoria */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-eh-petrol group">
                <div className="w-12 h-12 bg-eh-blue rounded-xl flex items-center justify-center text-eh-petrol mb-6 group-hover:scale-110 transition-transform">
                    <Stethoscope className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eh-petrol transition-colors">Sicurezza Chirurgica</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Prevenzione eventi wrong site/patient/procedure. Monitoraggio aderenza checklist di sala operatoria e gestione eventi peri-operatori.
                </p>
            </div>

            {/* 5. ICA */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-eh-petrol group">
                <div className="w-12 h-12 bg-eh-blue rounded-xl flex items-center justify-center text-eh-petrol mb-6 group-hover:scale-110 transition-transform">
                    <Microscope className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eh-petrol transition-colors">Infezioni (ICA)</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Tracciamento tassi di infezione correlate all'assistenza e germi sentinella. Audit su igiene mani, profilassi antibiotica e bundle di prevenzione.
                </p>
            </div>

            {/* 6. Dispositivi & Tecnologie */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-eh-petrol group">
                <div className="w-12 h-12 bg-eh-blue rounded-xl flex items-center justify-center text-eh-petrol mb-6 group-hover:scale-110 transition-transform">
                    <Database className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eh-petrol transition-colors">Tecnovigilanza</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Gestione incidenti da dispositivi medici. Monitoraggio cluster critici, ricezione FSCA/FSN e tracciamento azioni di ritiro o sostituzione.
                </p>
            </div>
             {/* 7. Emovigilanza */}
             <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-eh-petrol group">
                <div className="w-12 h-12 bg-eh-blue rounded-xl flex items-center justify-center text-eh-petrol mb-6 group-hover:scale-110 transition-transform">
                    <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eh-petrol transition-colors">Emovigilanza</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                   Analisi dei rischi legati al percorso trasfusionale: eventi avversi trasfusionali, quasi-eventi e non conformità nella catena del sangue.
                </p>
            </div>
             {/* 8. Diagnostica */}
             <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-eh-petrol group">
                <div className="w-12 h-12 bg-eh-blue rounded-xl flex items-center justify-center text-eh-petrol mb-6 group-hover:scale-110 transition-transform">
                    <FileWarning className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eh-petrol transition-colors">Rischi Diagnostici</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                   Tracciamento ritardi diagnostici, esami non eseguiti per errore organizzativo ed errori di refertazione rilevanti.
                </p>
            </div>
             {/* 9. Sinistri */}
             <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-eh-petrol group">
                <div className="w-12 h-12 bg-eh-blue rounded-xl flex items-center justify-center text-eh-petrol mb-6 group-hover:scale-110 transition-transform">
                    <Gavel className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eh-petrol transition-colors">Gestione Sinistri</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                   Dashboard contenzioso legale: analisi sinistri aperti/chiusi, tipologia evento, importi e lesson learned per la prevenzione futura.
                </p>
            </div>
        </div>
      </section>

      {/* Consulting Section (NEW) */}
      <section className="bg-eh-black text-white py-20">
         <div className="max-w-7xl mx-auto px-4">
             <div className="flex flex-col md:flex-row gap-12 items-center">
                 <div className="md:w-1/2">
                     <div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">Servizi Professionali</div>
                     <h2 className="text-3xl font-bold mb-6">Non solo software: Consulenza Specialistica</h2>
                     <p className="text-gray-300 mb-8 leading-relaxed">
                         Il Risk Management non si esaurisce con l'adozione di un tool. Easy Health affianca le Direzioni Sanitarie con un team di consulenti esperti per governare il cambiamento organizzativo.
                     </p>
                     
                     <div className="space-y-6">
                         <div className="flex gap-4">
                             <div className="w-10 h-10 bg-eh-petrol rounded-lg flex items-center justify-center flex-shrink-0 border border-eh-green/30">
                                 <FileSearch className="h-5 w-5 text-eh-green" />
                             </div>
                             <div>
                                 <h4 className="font-bold text-lg">Audit Clinici & Organizzativi</h4>
                                 <p className="text-sm text-gray-400">Verifiche ispettive interne per valutare l'aderenza ai protocolli, identificare non conformità e definire piani di miglioramento.</p>
                             </div>
                         </div>
                         <div className="flex gap-4">
                             <div className="w-10 h-10 bg-eh-petrol rounded-lg flex items-center justify-center flex-shrink-0 border border-eh-green/30">
                                 <Presentation className="h-5 w-5 text-eh-green" />
                             </div>
                             <div>
                                 <h4 className="font-bold text-lg">Formazione & Cultura della Sicurezza</h4>
                                 <p className="text-sm text-gray-400">Corsi per il personale sanitario sull'uso dei sistemi di reporting e sulle best practice internazionali (es. Raccomandazioni Ministeriali).</p>
                             </div>
                         </div>
                         <div className="flex gap-4">
                             <div className="w-10 h-10 bg-eh-petrol rounded-lg flex items-center justify-center flex-shrink-0 border border-eh-green/30">
                                 <BookOpen className="h-5 w-5 text-eh-green" />
                             </div>
                             <div>
                                 <h4 className="font-bold text-lg">Mappatura dei Processi (FMEA/FMECA)</h4>
                                 <p className="text-sm text-gray-400">Analisi proattiva dei rischi sui percorsi critici per anticipare l'errore prima che si verifichi.</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 
                 <div className="md:w-1/2">
                      <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
                          <div className="absolute -top-10 -right-10 w-40 h-40 bg-eh-petrol opacity-40 blur-3xl rounded-full"></div>
                          <h3 className="text-xl font-bold mb-4">Il valore della consulenza Easy Health</h3>
                          <ul className="space-y-3">
                              <li className="flex items-center gap-3 text-sm text-gray-300">
                                  <div className="w-1.5 h-1.5 bg-eh-green rounded-full"></div>
                                  Supporto nella redazione del Piano Annuale di Risk Management
                              </li>
                              <li className="flex items-center gap-3 text-sm text-gray-300">
                                  <div className="w-1.5 h-1.5 bg-eh-green rounded-full"></div>
                                  Affiancamento al Risk Manager nella gestione del Comitato Valutazione Sinistri
                              </li>
                              <li className="flex items-center gap-3 text-sm text-gray-300">
                                  <div className="w-1.5 h-1.5 bg-eh-green rounded-full"></div>
                                  Integrazione tra Risk Management e Qualità (ISO 9001)
                              </li>
                          </ul>
                      </div>
                 </div>
             </div>
         </div>
      </section>

      {/* CTA Section with Form */}
      <section id="contatti" className="bg-eh-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-3xl font-extrabold text-eh-black mb-6">Metti in sicurezza i tuoi processi</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Compila il modulo per richiedere una demo della piattaforma <strong>Easy Risk</strong> o per parlare con i nostri consulenti esperti in gestione del rischio clinico.
                    </p>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-eh-petrol/20">
                        <h4 className="font-bold text-eh-black mb-2">Perché sceglierci?</h4>
                        <ul className="space-y-2">
                             <li className="flex gap-2 text-sm text-gray-600"><div className="text-eh-petrol font-bold">✓</div> Soluzione completa Software + Consulenza</li>
                             <li className="flex gap-2 text-sm text-gray-600"><div className="text-eh-petrol font-bold">✓</div> Conforme alle normative italiane</li>
                             <li className="flex gap-2 text-sm text-gray-600"><div className="text-eh-petrol font-bold">✓</div> Integrazione nativa con i sistemi ospedalieri</li>
                        </ul>
                    </div>
                </div>
                
                {/* Contact Form */}
                <ContactForm />
            </div>
        </div>
      </section>
    </div>
  );
};

export default ClinicalRisk;