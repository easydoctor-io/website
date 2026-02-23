import React from 'react';
import { 
  Cloud, Lock, CheckCircle, ArrowRight, Layout, Database, Activity, 
  Smartphone, BarChart3, Users, Calendar, Bell, ChevronRight, Settings 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Easydoctor: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Product */}
      <section className="bg-gradient-to-br from-eh-petrol to-[#0b4f4a] text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-eh-green opacity-10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-eh-green/10 text-eh-green border border-eh-green/30 text-sm font-bold mb-8 backdrop-blur-sm">
                Piattaforma SaaS Certificata ISO 9001
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
                easydoctor
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                Il sistema operativo per il <span className="text-eh-green font-bold">Digital Patient Engagement</span>.
                <br/>
                Semplifica la raccolta dati, ingaggia i pazienti e migliora gli esiti clinici.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contatti" className="bg-eh-green text-eh-petrol px-8 py-4 rounded-xl font-bold hover:bg-white transition-all shadow-lg shadow-eh-green/20">
                    Richiedi Demo Live
                </a>
            </div>
        </div>
      </section>

      {/* Feature Block 1: The Patient App (Mobile Simulation) */}
      <section className="py-24 bg-eh-blue/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 text-eh-petrol font-bold mb-4 uppercase tracking-wider text-xs">
                        <Smartphone className="h-4 w-4" /> Lato Paziente
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-eh-black mb-6">
                        Un'esperienza semplice,<br/> ovunque si trovino.
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Nessuna installazione complessa. I pazienti accedono via web-app o app nativa a un'interfaccia intuitiva progettata per favorire l'aderenza.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <div className="bg-eh-green/20 p-2 rounded-lg text-eh-petrol"><CheckCircle className="h-5 w-5" /></div>
                            <span className="font-medium text-gray-700">Diari clinici giornalieri</span>
                        </li>
                        <li className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <div className="bg-eh-green/20 p-2 rounded-lg text-eh-petrol"><CheckCircle className="h-5 w-5" /></div>
                            <span className="font-medium text-gray-700">Questionari PROM adattivi</span>
                        </li>
                        <li className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <div className="bg-eh-green/20 p-2 rounded-lg text-eh-petrol"><CheckCircle className="h-5 w-5" /></div>
                            <span className="font-medium text-gray-700">Televisita integrata</span>
                        </li>
                    </ul>
                </div>
                
                {/* Mobile Mockup */}
                <div className="lg:w-1/2 flex justify-center relative">
                     <div className="absolute inset-0 bg-eh-petrol/5 blur-3xl rounded-full transform scale-90"></div>
                     <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
                        
                        {/* Screen Content */}
                        <div className="w-full h-full bg-gray-50 rounded-[2.5rem] overflow-hidden flex flex-col relative z-10">
                            {/* App Header */}
                            <div className="bg-eh-petrol pt-12 pb-6 px-6 text-white rounded-b-3xl shadow-md">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">MR</div>
                                    <Bell className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-light opacity-90">Buongiorno,</h3>
                                <p className="text-2xl font-bold">Mario Rossi</p>
                            </div>

                            {/* App Body */}
                            <div className="p-6 flex-1 overflow-hidden space-y-4">
                                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded-full">DA FARE</span>
                                        <span className="text-xs text-gray-400">Oggi</span>
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-1">Check-up Settimanale</h4>
                                    <p className="text-xs text-gray-500 mb-3">Compila il questionario SF-36 per monitorare i tuoi progressi.</p>
                                    <button className="w-full py-2 bg-eh-petrol text-white rounded-lg text-sm font-bold">Inizia</button>
                                </div>

                                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 opacity-70">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="bg-eh-green/20 text-eh-petrol text-[10px] font-bold px-2 py-1 rounded-full">COMPLETATO</span>
                                        <span className="text-xs text-gray-400">Ieri</span>
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-1">Diario Sintomi</h4>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <CheckCircle className="h-3 w-3 text-eh-green" /> Inviato al medico
                                    </div>
                                </div>
                            </div>

                            {/* App Nav */}
                            <div className="bg-white border-t border-gray-200 p-4 flex justify-around text-gray-300">
                                <div className="text-eh-petrol flex flex-col items-center gap-1"><Layout className="h-5 w-5" /><div className="w-1 h-1 bg-eh-petrol rounded-full"></div></div>
                                <div className="flex flex-col items-center gap-1"><Calendar className="h-5 w-5" /></div>
                                <div className="flex flex-col items-center gap-1"><Settings className="h-5 w-5" /></div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* Feature Block 2: The Clinician Dashboard (Desktop Simulation) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 text-eh-petrol font-bold mb-4 uppercase tracking-wider text-xs">
                        <Activity className="h-4 w-4" /> Lato Clinico
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-eh-black mb-6">
                        Monitoraggio attivo <br/> e decisioni basate sui dati.
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Una dashboard centralizzata per visualizzare l'intera coorte pazienti. Gli alert automatici basati sugli score dei questionari permettono di intervenire tempestivamente sui casi a rischio.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                         <div className="p-4 bg-gray-50 rounded-xl">
                            <h4 className="font-bold text-eh-petrol mb-1">Triage Automatico</h4>
                            <p className="text-sm text-gray-600">Prioritizzazione basata su soglie cliniche configurabili.</p>
                         </div>
                         <div className="p-4 bg-gray-50 rounded-xl">
                            <h4 className="font-bold text-eh-petrol mb-1">Integrazione HL7</h4>
                            <p className="text-sm text-gray-600">Dialoga con la Cartella Clinica Elettronica ospedaliera.</p>
                         </div>
                    </div>
                </div>
                
                {/* Desktop Mockup */}
                <div className="lg:w-1/2 w-full">
                     <div className="rounded-xl shadow-2xl border border-gray-200 bg-white overflow-hidden transform md:-rotate-1 hover:rotate-0 transition-transform duration-500">
                        {/* Browser Toolbar */}
                        <div className="bg-gray-100 p-3 border-b border-gray-200 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="bg-white rounded px-3 py-1 text-xs text-gray-400 flex-1 mx-4 text-center font-mono">easydoctor.cloud/dashboard</div>
                        </div>

                        {/* Dashboard UI */}
                        <div className="flex h-[350px]">
                            {/* Sidebar */}
                            <div className="w-16 md:w-48 bg-eh-black/95 text-gray-400 p-4 hidden md:flex flex-col gap-6">
                                <div className="text-white font-bold mb-2">EasyDoctor</div>
                                <div className="flex items-center gap-3 text-white bg-eh-petrol/20 p-2 rounded-lg"><Users className="h-4 w-4" /> <span className="text-sm">Pazienti</span></div>
                                <div className="flex items-center gap-3 hover:text-white"><Activity className="h-4 w-4" /> <span className="text-sm">Alerts</span></div>
                                <div className="flex items-center gap-3 hover:text-white"><BarChart3 className="h-4 w-4" /> <span className="text-sm">Report</span></div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 bg-gray-50 p-6 overflow-hidden">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-bold text-gray-800">Lista Pazienti - Cardiologia</h3>
                                    <button className="bg-eh-petrol text-white text-xs px-3 py-1.5 rounded-lg">+ Nuovo</button>
                                </div>

                                {/* Table Mockup */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <div className="grid grid-cols-4 bg-gray-50 p-3 text-xs font-bold text-gray-500 border-b">
                                        <div className="col-span-1">PAZIENTE</div>
                                        <div className="col-span-1">PROTOCOLLO</div>
                                        <div className="col-span-1">STATO</div>
                                        <div className="col-span-1 text-right">AZIONE</div>
                                    </div>
                                    {/* Row 1 - Alert */}
                                    <div className="grid grid-cols-4 p-3 items-center border-b hover:bg-gray-50 text-sm">
                                        <div className="font-bold text-gray-800">Bianchi L.</div>
                                        <div className="text-gray-500 text-xs">Scompenso C.</div>
                                        <div><span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center w-fit gap-1"><Activity className="h-3 w-3" /> ALERT NYHA</span></div>
                                        <div className="text-right text-eh-petrol font-bold text-xs cursor-pointer">Apri ></div>
                                    </div>
                                    {/* Row 2 - Ok */}
                                    <div className="grid grid-cols-4 p-3 items-center border-b hover:bg-gray-50 text-sm">
                                        <div className="font-bold text-gray-800">Verdi G.</div>
                                        <div className="text-gray-500 text-xs">Post-Ictus</div>
                                        <div><span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full w-fit">STABILE</span></div>
                                        <div className="text-right text-eh-petrol font-bold text-xs cursor-pointer">Apri ></div>
                                    </div>
                                     {/* Row 3 - Pending */}
                                     <div className="grid grid-cols-4 p-3 items-center hover:bg-gray-50 text-sm">
                                        <div className="font-bold text-gray-800">Neri A.</div>
                                        <div className="text-gray-500 text-xs">Ipertensione</div>
                                        <div><span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-0.5 rounded-full w-fit">IN ATTESA</span></div>
                                        <div className="text-right text-eh-petrol font-bold text-xs cursor-pointer">Apri ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-eh-black text-white py-20">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">I vantaggi di easydoctor</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Patients */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-eh-green transition-colors">
                    <h3 className="text-xl font-bold text-eh-green mb-4">Per i Pazienti</h3>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-gray-300"><CheckCircle className="h-5 w-5 text-eh-green shrink-0"/> Facilità di utilizzo</li>
                        <li className="flex gap-3 text-gray-300"><CheckCircle className="h-5 w-5 text-eh-green shrink-0"/> Migliori esiti di cura</li>
                        <li className="flex gap-3 text-gray-300"><CheckCircle className="h-5 w-5 text-eh-green shrink-0"/> Esperienza personalizzata</li>
                        <li className="flex gap-3 text-gray-300"><CheckCircle className="h-5 w-5 text-eh-green shrink-0"/> Maggiore consapevolezza</li>
                    </ul>
                </div>

                {/* Professionals */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-eh-green transition-colors">
                    <h3 className="text-xl font-bold text-eh-green mb-4">Per i Professionisti</h3>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-gray-300"><CheckCircle className="h-5 w-5 text-eh-green shrink-0"/> UX semplice e flessibile</li>
                        <li className="flex gap-3 text-gray-300"><CheckCircle className="h-5 w-5 text-eh-green shrink-0"/> Questionari custom</li>
                        <li className="flex gap-3 text-gray-300"><CheckCircle className="h-5 w-5 text-eh-green shrink-0"/> Percorsi pre-impostati</li>
                        <li className="flex gap-3 text-gray-300"><CheckCircle className="h-5 w-5 text-eh-green shrink-0"/> Report ed export pratici</li>
                    </ul>
                </div>

                {/* Facilities */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-eh-green transition-colors">
                    <h3 className="text-xl font-bold text-eh-green mb-