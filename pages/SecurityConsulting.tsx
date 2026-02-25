import React from 'react';
import { Lock, ShieldCheck, Server, FileCode, CheckCircle, ArrowRight, AlertOctagon, FileText, Globe } from 'lucide-react';

const SecurityConsulting: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-eh-dark text-white pt-32 pb-20 relative overflow-hidden">
         {/* Abstract Cyber bg */}
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
         
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Sicurezza dei Processi <br/>
                <span className="text-eh-green">& Trattamento Dati</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                Consulenza strategica e operativa per strutture sanitarie. Proteggiamo il tuo patrimonio informativo garantendo la conformità alle normative europee più stringenti.
            </p>
            <a href="#contatti" className="inline-flex items-center gap-2 bg-eh-green text-eh-petrol px-6 py-3 rounded-xl font-bold hover:bg-white transition-colors">
                Parla con un esperto <ArrowRight className="h-5 w-5" />
            </a>
         </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-eh-black mb-4">Lo Scenario Attuale: Rischi e Responsabilità</h2>
                  <p className="text-gray-600">
                      Le strutture sanitarie sono oggi il bersaglio primario di attacchi cyber, con conseguenze devastanti non solo sulla privacy, ma sulla continuità operativa e sulla salute dei pazienti.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-600">
                          <AlertOctagon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-eh-black mb-3">Attacchi Ransomware</h3>
                      <p className="text-sm text-gray-600 mb-4">
                          Il blocco dei sistemi informatici in ospedale non è solo un danno economico: significa stop alle sale operatorie, pronto soccorso in tilt e rischio per la vita dei pazienti.
                      </p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
                          <FileText className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-eh-black mb-3">Sanzioni GDPR</h3>
                      <p className="text-sm text-gray-600 mb-4">
                          Il trattamento illecito di dati sanitari comporta le sanzioni amministrative più elevate (fino a 20M€ o 4% del fatturato) e danni reputazionali irreparabili.
                      </p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                          <Globe className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-eh-black mb-3">Nuova Direttiva NIS2</h3>
                      <p className="text-sm text-gray-600 mb-4">
                          Le strutture sanitarie sono ora classificate come "Soggetti Essenziali". La normativa impone obblighi di sicurezza stringenti e responsabilità diretta (anche penale) per gli amministratori.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-eh-black">La Nostra Risposta: Sicurezza Integrata</h2>
               <p className="text-gray-500 mt-4">Un approccio olistico che unisce legale, tecnologico e organizzativo.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
              
              {/* GDPR */}
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:border-eh-petrol transition-colors group">
                  <div className="w-14 h-14 bg-eh-blue rounded-xl flex items-center justify-center text-eh-petrol mb-6 group-hover:bg-eh-petrol group-hover:text-white transition-colors">
                      <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-eh-black mb-4">GDPR & Privacy</h3>
                  <p className="text-gray-600 mb-6 min-h-[80px]">
                      Non solo burocrazia, ma governance del dato. Offriamo il servizio di <strong>DPO esterno</strong> specializzato in sanità digitale e gestione dei Data Breach h24.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-500">
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-eh-green" /> DPIA (Valutazione d'Impatto)</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-eh-green" /> Nomina Responsabili Esterni</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-eh-green" /> Formazione Privacy Staff</li>
                  </ul>
              </div>

              {/* ISO 27001 */}
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:border-eh-petrol transition-colors group">
                  <div className="w-14 h-14 bg-eh-blue rounded-xl flex items-center justify-center text-eh-petrol mb-6 group-hover:bg-eh-petrol group-hover:text-white transition-colors">
                      <Lock className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-eh-black mb-4">ISO 27001</h3>
                  <p className="text-gray-600 mb-6 min-h-[80px]">
                      Accompagniamo la tua struttura verso la certificazione ISO 27001/27017/27018. Creiamo un Sistema di Gestione della Sicurezza delle Informazioni (SGSI) su misura.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-500">
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-eh-green" /> Analisi del Rischio IT</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-eh-green" /> Policy di Sicurezza</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-eh-green" /> Audit di Terza Parte</li>
                  </ul>
              </div>

              {/* NIS2 */}
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:border-eh-petrol transition-colors group">
                  <div className="w-14 h-14 bg-eh-blue rounded-xl flex items-center justify-center text-eh-petrol mb-6 group-hover:bg-eh-petrol group-hover:text-white transition-colors">
                      <Server className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-eh-black mb-4">Compliance NIS2</h3>
                  <p className="text-gray-600 mb-6 min-h-[80px]">
                      Supporto operativo per l'adeguamento alla direttiva europea sulla cybersicurezza. Prepariamo la tua organizzazione a garantire la continuità dei servizi essenziali.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-500">
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-eh-green" /> Business Continuity Plan</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-eh-green" /> Incident Response Plan</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-eh-green" /> Sicurezza Supply Chain</li>
                  </ul>
              </div>
          </div>
      </section>

      {/* Methodology */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-eh-black mb-12">Il nostro approccio</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
                  {/* Connector Line (Desktop) */}
                  <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gray-300 -z-10 transform -translate-y-1/2"></div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 w-64 z-10">
                      <div className="text-4xl font-bold text-eh-petrol/20 mb-2">01</div>
                      <h4 className="font-bold text-eh-black mb-2">Gap Analysis</h4>
                      <p className="text-sm text-gray-500">Mappatura dei flussi e rilevazione delle vulnerabilità rispetto alle norme.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 w-64 z-10">
                      <div className="text-4xl font-bold text-eh-petrol/20 mb-2">02</div>
                      <h4 className="font-bold text-eh-black mb-2">Remediation</h4>
                      <p className="text-sm text-gray-500">Stesura procedure, installazione controlli e formazione del personale.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 w-64 z-10">
                      <div className="text-4xl font-bold text-eh-petrol/20 mb-2">03</div>
                      <h4 className="font-bold text-eh-black mb-2">Audit Continuo</h4>
                      <p className="text-sm text-gray-500">Monitoraggio nel tempo per garantire la conformità costante.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA Section removed - now in Layout */}
    </div>
  );
};

export default SecurityConsulting;