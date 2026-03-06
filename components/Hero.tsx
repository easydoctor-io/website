import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, ShieldAlert, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-eh-blue dark:bg-eh-dark pt-28 pb-20 lg:pt-36 lg:pb-32 relative overflow-hidden transition-colors duration-300">
       {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-eh-green opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-eh-petrol opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-eh-black dark:text-white leading-tight mb-6">
            Trasformiamo i dati in <span className="text-eh-petrol dark:text-eh-green">Valore Clinico</span> per la tua struttura
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Easy Health è il partner strategico per le organizzazioni sanitarie che scelgono il modello <strong className="text-eh-petrol dark:text-eh-green">Value-Based Healthcare</strong>: miglioriamo gli esiti clinici ottimizzando i costi operativi attraverso tecnologie intelligenti.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium flex items-center">
              <ShieldCheck className="h-4 w-4 mr-2 text-eh-green" /> Startup innovativa certificata ISO 9001
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium flex items-center">
              <ShieldCheck className="h-4 w-4 mr-2 text-eh-green" /> Disponibile su Consip e MePa
            </p>
          </div>
        </div>

        {/* The 3 Pillars Cards */}
        <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: DPE */}
            <Link to="/easydoctor" className="group bg-white dark:bg-eh-darkSurface rounded-3xl p-8 shadow-xl shadow-eh-petrol/5 dark:shadow-none border border-transparent hover:border-eh-green transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-eh-blue dark:bg-eh-dark rounded-2xl flex items-center justify-center text-eh-petrol dark:text-eh-green mb-6 group-hover:bg-eh-petrol group-hover:text-white transition-colors">
                    <Smartphone className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-eh-black dark:text-white mb-3 group-hover:text-eh-petrol dark:group-hover:text-eh-green transition-colors">Patient Engagement</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    Massimizza il valore per il paziente con la raccolta sistematica di <strong>PROMs e PREMs</strong>. Monitoraggio remoto e percorsi di cura personalizzati basati sull'evidenza.
                </p>
                <div className="flex items-center text-eh-petrol dark:text-eh-green font-bold text-sm">
                    Ottimizza gli Esiti <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </Link>

            {/* Card 2: Risk */}
            <Link to="/clinical-risk" className="group bg-white dark:bg-eh-darkSurface rounded-3xl p-8 shadow-xl shadow-eh-petrol/5 dark:shadow-none border border-transparent hover:border-red-400 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <ShieldAlert className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-eh-black dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Clinical Risk Governance</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    Riduci gli eventi avversi e i costi del contenzioso con <strong>Easy Risk</strong>. Incident Reporting predittivo e gestione proattiva della sicurezza del paziente.
                </p>
                <div className="flex items-center text-red-600 dark:text-red-400 font-bold text-sm">
                    Garantisci la Sicurezza <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </Link>

            {/* Card 3: Security */}
            <Link to="/security-consulting" className="group bg-white dark:bg-eh-darkSurface rounded-3xl p-8 shadow-xl shadow-eh-petrol/5 dark:shadow-none border border-transparent hover:border-eh-black dark:hover:border-white transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-700 dark:text-gray-300 mb-6 group-hover:bg-eh-black dark:group-hover:bg-white dark:group-hover:text-eh-black group-hover:text-white transition-colors">
                    <Lock className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-eh-black dark:text-white mb-3 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Cybersecurity & Compliance</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    Proteggi il patrimonio informativo sanitario. Adeguamento <strong>NIS2 e GDPR</strong> con un approccio metodologico orientato alla continuità operativa.
                </p>
                <div className="flex items-center text-gray-700 dark:text-gray-300 font-bold text-sm">
                    Proteggi i Processi <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;