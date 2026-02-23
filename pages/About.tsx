import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-eh-blue py-20 relative overflow-hidden">
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-eh-green opacity-10 blur-3xl"></div>
         <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-eh-black mb-6">
                In Easy Health sviluppiamo <span className="text-eh-petrol">soluzioni digitali di qualità</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Siamo una <strong>startup innovativa certificata ISO 9001</strong> nata per migliorare l'esperienza e gli esiti delle cure sanitarie nel rispetto dei principi della <strong>Value-Based Health Care</strong>.
            </p>
         </div>
      </section>

      {/* Mission */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold text-eh-petrol mb-6">La nostra missione</h2>
                <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">
                        Vogliamo contribuire ad accelerare il percorso di digitalizzazione della sanità per renderla sempre più equa, sostenibile ed efficiente.
                    </p>
                    <p className="mb-4">
                        I sistemi sanitari affrontano sfide epocali: invecchiamento, cronicità, risorse limitate. Il digitale è la risorsa strategica per mantenere la salute un diritto accessibile a tutti.
                    </p>
                </div>
            </div>
            <div className="bg-eh-blue p-8 rounded-2xl border border-eh-petrol/10">
                <h3 className="text-xl font-bold text-eh-black mb-4">Perché Easy Health?</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-eh-green flex items-center justify-center text-eh-petrol font-bold text-sm">✓</div>
                        <span className="text-gray-700">Approccio scientifico e rigoroso (ISO 9001)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-eh-green flex items-center justify-center text-eh-petrol font-bold text-sm">✓</div>
                        <span className="text-gray-700">Focus sugli esiti reali (PROMs/PREMs)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-eh-green flex items-center justify-center text-eh-petrol font-bold text-sm">✓</div>
                        <span className="text-gray-700">Tecnologia Made in Italy sicura e scalabile</span>
                    </li>
                </ul>
            </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-eh-blue/30">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-eh-black mb-16">La nostra storia</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-eh-petrol/30 before:to-transparent">
                {[
                    { date: "2018-2020", title: "Prime esperienze", desc: "Avvio progetti in ambito farmaceutico e AI." },
                    { date: "21/02/2021", title: "Fondazione", desc: "Nascita dell'azienda e prime collaborazioni ospedaliere." },
                    { date: "2022", title: "Centro Cardiologico Monzino", desc: "Avvio collaborazione sulla prevenzione cardiovascolare." },
                    { date: "12/2022", title: "Fin+Tech Accelerator", desc: "Ingresso di CDP Venture Capital per accelerare lo sviluppo." },
                    { date: "07/2023", title: "Consip Sanità Digitale", desc: "Collaborazione nell'accordo quadro Consip 3." },
                    { date: "07/2024", title: "Aumento di Capitale", desc: "Ingresso di nuovi investitori e Business Angel." },
                    { date: "04/2025", title: "ASST di Crema", desc: "Primo progetto pubblico per la gestione del diabete." }
                ].map((item, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-eh-petrol shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white font-bold text-xs">
                           
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <span className="font-bold text-eh-petrol">{item.title}</span>
                                <time className="font-caveat font-medium text-eh-green text-sm">{item.date}</time>
                            </div>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-eh-black mb-4">Incontra il nostro team</h2>
        <p className="text-center text-gray-500 mb-16">Professionisti esperti al servizio di una missione comune</p>
        
        <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-eh-green transition-colors">
                 <div className="w-24 h-24 rounded-full bg-eh-blue flex-shrink-0 flex items-center justify-center text-eh-petrol font-bold text-2xl">FV</div>
                 <div>
                    <h3 className="text-xl font-bold text-eh-black">Fabio Vantaggiato</h3>
                    <p className="text-eh-petrol font-medium mb-3">CEO & Co-Founder</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Guida la crescita strategica dell’azienda con una visione orientata al paziente. Si occupa della definizione del prodotto e dello sviluppo commerciale, focalizzandosi su soluzioni digitali accessibili e ad alto impatto.
                    </p>
                 </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-eh-green transition-colors">
                 <div className="w-24 h-24 rounded-full bg-eh-blue flex-shrink-0 flex items-center justify-center text-eh-petrol font-bold text-2xl">LB</div>
                 <div>
                    <h3 className="text-xl font-bold text-eh-black">Luca Baroldi Torelli</h3>
                    <p className="text-eh-petrol font-medium mb-3">Direttore Scientifico</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Medico e ricercatore, coordina la direzione scientifica garantendo la validazione dei contenuti e l'aderenza alle evidenze scientifiche e alle linee guida internazionali.
                    </p>
                 </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;