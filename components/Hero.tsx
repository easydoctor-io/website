import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, ShieldAlert, Lock, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-eh-blue pt-28 pb-20 lg:pt-36 lg:pb-32 relative overflow-hidden">
       {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-eh-green opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-eh-petrol opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-eh-black leading-tight mb-6">
            Easy Health: partner per l'innovazione delle <span className="text-eh-petrol">strutture sanitarie</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Soluzioni integrate per il Digital Patient Engagement, il Risk Management Sanitario e la Sicurezza dei Dati per organizzazioni pubbliche e private.
          </p>
          <p className="text-sm text-gray-500 font-medium mt-6">
            Startup innovativa certificata ISO 9001 | Disponibile su Consip e MePa
          </p>
        </div>

        {/* The 3 Pillars Cards */}
        <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: DPE */}
            <Link to="/easydoctor" className="group bg-white rounded-3xl p-8 shadow-xl shadow-eh-petrol/5 border border-transparent hover:border-eh-green transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-eh-blue rounded-2xl flex items-center justify-center text-eh-petrol mb-6 group-hover:bg-eh-petrol group-hover:text-white transition-colors">
                    <Smartphone className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-eh-black mb-3 group-hover:text-eh-petrol transition-colors">Digital Patient Engagement</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Piattaforma <strong>easydoctor</strong> per la raccolta di PROMs/PREMs, telemedicina e percorsi di cura digitali.
                </p>
                <div className="flex items-center text-eh-petrol font-bold text-sm">
                    Scopri la Piattaforma <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </Link>

            {/* Card 2: Risk */}
            <Link to="/clinical-risk" className="group bg-white rounded-3xl p-8 shadow-xl shadow-eh-petrol/5 border border-transparent hover:border-red-400 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <ShieldAlert className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-eh-black mb-3 group-hover:text-red-600 transition-colors">Risk Management Sanitario</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Piattaforma <strong>Easy Risk</strong>. Incident Reporting, monitoraggio cadute, infezioni e gestione sinistri.
                </p>
                <div className="flex items-center text-red-600 font-bold text-sm">
                    Gestione Rischio <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </Link>

            {/* Card 3: Security */}
            <Link to="/security-consulting" className="group bg-white rounded-3xl p-8 shadow-xl shadow-eh-petrol/5 border border-transparent hover:border-eh-black transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-700 mb-6 group-hover:bg-eh-black group-hover:text-white transition-colors">
                    <Lock className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-eh-black mb-3 group-hover:text-gray-900 transition-colors">Sicurezza & Compliance</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Consulenza organizzativa sui processi. Adeguamento GDPR, certificazione ISO 27001 e direttiva NIS2.
                </p>
                <div className="flex items-center text-gray-700 font-bold text-sm">
                    Servizi Consulenza <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;