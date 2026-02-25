import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ShieldCheck, BarChart, FileText, MessageSquare, ChevronRight, Stethoscope, Loader2, Mail, ArrowRight
} from 'lucide-react';

// Layout & Critical Components
import Layout from './components/Layout';
import Hero from './components/Hero';
import CookieBanner from './components/CookieBanner';
import ContactForm from './components/ContactForm';

// Lazy Loaded Pages
const About = React.lazy(() => import('./pages/About'));
const Easydoctor = React.lazy(() => import('./pages/Easydoctor'));
const ClinicalRisk = React.lazy(() => import('./pages/ClinicalRisk'));
const SecurityConsulting = React.lazy(() => import('./pages/SecurityConsulting'));
const Faq = React.lazy(() => import('./pages/Faq'));
const Glossary = React.lazy(() => import('./pages/Glossary'));
const BlogList = React.lazy(() => import('./pages/BlogList'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const CookiePolicy = React.lazy(() => import('./pages/CookiePolicy'));

// CMS Routes
const CmsLogin = React.lazy(() => import('./pages/CmsLogin'));
const CmsDashboard = React.lazy(() => import('./pages/CmsDashboard'));
const CmsEditor = React.lazy(() => import('./pages/CmsEditor'));

const LoadingFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center text-eh-petrol">
    <Loader2 className="h-8 w-8 animate-spin" />
  </div>
);

// Home Page Component
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Easy Health | Soluzioni Digitali per la Sanità</title>
        <meta name="description" content="Easy Health offre soluzioni integrate per Digital Patient Engagement, Risk Management Clinico e Sicurezza dei Processi/Dati per strutture sanitarie pubbliche e private." />
      </Helmet>
      <Hero />

      {/* SECTION 2: Trusted By / Partners (Moved here as requested) */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400 font-bold mb-8 uppercase tracking-widest text-xs">
                Collaboriamo con eccellenze del settore
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                {[
                  { name: "ASST Crema", domain: "asst-crema.it" },
                  { name: "Centro Cardiologico Monzino", domain: "cardiologicomonzino.it" },
                  { name: "CDP Venture Capital", domain: "cdpventurecapital.it" },
                  { name: "Consip", domain: "consip.it" },
                  { name: "Almaviva", domain: "almaviva.it" },
                  { name: "Accenture", domain: "accenture.com" }
                ].map((partner, idx) => (
                  <div key={idx} className="h-12 w-auto flex items-center justify-center">
                      <img 
                        src={`https://logo.clearbit.com/${partner.domain}`}
                        alt={partner.name}
                        title={partner.name}
                        className="max-h-full max-w-[140px] object-contain"
                        onError={(e) => {
                           const target = e.target as HTMLImageElement;
                           target.style.display = 'none';
                        }}
                      />
                  </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* SECTION 3: Why easydoctor? (Evidence into Practice) */}
      <section className="py-24 bg-eh-blue dark:bg-eh-darkSurface relative overflow-hidden transition-colors duration-300">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-eh-green/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                 <h2 className="text-3xl font-bold text-eh-black dark:text-white mb-6">
                    Tecnologia e Metodo Clinico
                 </h2>
                 <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                    Easy Health supporta le organizzazioni sanitarie con strumenti che integrano la raccolta del dato (clinico o di rischio) nei flussi di lavoro quotidiani, garantendo sicurezza, conformità ed efficienza operativa.
                 </p>
                 
                 <ul className="space-y-6">
                    <li className="flex gap-4">
                       <div className="bg-eh-petrol text-white p-2 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                          <Stethoscope className="h-6 w-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-eh-black dark:text-white">Evidence Based</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Strumenti validati scientificamente (PROMs) e indicatori di rischio standardizzati.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <div className="bg-eh-petrol text-white p-2 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                          <BarChart className="h-6 w-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-eh-black dark:text-white">Data Driven Governance</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Dashboard direzionali per il monitoraggio degli esiti e la gestione del rischio in tempo reale.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <div className="bg-eh-petrol text-white p-2 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                          <ShieldCheck className="h-6 w-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-eh-black dark:text-white">Compliance Totale</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Consulenza su GDPR, ISO 27001 e NIS2 per la sicurezza dei processi sanitari.</p>
                       </div>
                    </li>
                 </ul>
              </div>
              <div className="md:w-1/2">
                 {/* Visual abstraction of data flow */}
                 <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 relative">
                    <div className="absolute -top-6 -right-6 bg-eh-green text-eh-petrol px-4 py-2 rounded-lg font-bold shadow-lg transform rotate-3">
                        Integrated Care
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4">
                            <span className="text-gray-500 font-medium">Strategia</span>
                            <span className="text-eh-petrol dark:text-eh-green font-bold">Value Based Healthcare</span>
                        </div>
                        <div className="flex justify-center py-2">
                             <ChevronRight className="h-8 w-8 text-gray-300 dark:text-gray-600 rotate-90" />
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-200 dark:border-gray-600 grid grid-cols-2 gap-4">
                             <div className="bg-white p-3 rounded shadow-sm text-center">
                                <div className="text-xs font-bold text-gray-400 uppercase mb-1">Paziente</div>
                                <div className="font-bold text-eh-black">PROMs / PREMs</div>
                             </div>
                             <div className="bg-white p-3 rounded shadow-sm text-center">
                                <div className="text-xs font-bold text-gray-400 uppercase mb-1">Struttura</div>
                                <div className="font-bold text-eh-black">Risk & Audit</div>
                             </div>
                        </div>
                        <div className="flex justify-center py-2">
                             <ChevronRight className="h-8 w-8 text-gray-300 dark:text-gray-600 rotate-90" />
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                            <span className="text-gray-500 font-medium">Obiettivo</span>
                            <span className="text-eh-black dark:text-white font-bold">Qualità & Sicurezza</span>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contatti" className="bg-white dark:bg-eh-darkSurface py-20 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-extrabold text-eh-black dark:text-white mb-6">Parla con noi</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                        Siamo pronti ad ascoltare le esigenze della tua struttura sanitaria. Compila il modulo per richiedere una demo o una consulenza specialistica.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-eh-blue dark:bg-gray-800 rounded-full flex items-center justify-center text-eh-petrol dark:text-eh-green shadow-sm">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-eh-black dark:text-white">Email</h4>
                                <a href="mailto:fabio@easydoctor.io" className="text-gray-600 dark:text-gray-400 hover:text-eh-petrol">fabio@easydoctor.io</a>
                            </div>
                        </div>
                        {/* Add Address or Phone if needed here */}
                    </div>
                </div>
                
                {/* Embed Form */}
                <ContactForm />
            </div>
        </div>
      </section>
    </>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<About />} />
            
            {/* Business Areas Routes */}
            <Route path="/easydoctor" element={<Easydoctor />} />
            <Route path="/clinical-risk" element={<ClinicalRisk />} />
            <Route path="/security-consulting" element={<SecurityConsulting />} />
            
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/glossario" element={<Glossary />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            
            {/* CMS Routes */}
            <Route path="/cms/login" element={<CmsLogin />} />
            <Route path="/cms/dashboard" element={<CmsDashboard />} />
            <Route path="/cms/editor" element={<CmsEditor />} />
            <Route path="/cms/editor/:id" element={<CmsEditor />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        {/* AiAssistant removed */}
        <CookieBanner />
      </Layout>
    </HashRouter>
  );
};

export default App;