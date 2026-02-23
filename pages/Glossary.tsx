import React from 'react';

const TERMS = [
    {
        term: "Aderenza Terapeutica",
        def: "Indica la misura in cui il comportamento di una persona - nell’assunzione di farmaci, nel seguire una dieta o nel modificare lo stile di vita - corrisponde alle raccomandazioni del medico. Maggiore è l'aderenza, migliori sono gli esiti."
    },
    {
        term: "API (Access Programming Interface)",
        def: "Un insieme di regole che consente a diverse applicazioni software di comunicare. In sanità, permettono l'integrazione tra sistemi diversi (es. cartella clinica e app paziente)."
    },
    {
        term: "Patient Engagement",
        def: "Il coinvolgimento attivo del paziente nel proprio percorso di cura. Il Digital Patient Engagement (DPE) utilizza risorse digitali per facilitare questa relazione."
    },
    {
        term: "Patient Experience (PX)",
        def: "Comprende tutte le interazioni che un paziente ha con il sistema sanitario. Determina la percezione complessiva della qualità di cura ricevuta."
    },
    {
        term: "PDTA",
        def: "Percorsi Diagnostici Terapeutici Assistenziali. Strumenti di gestione clinica per definire il miglior processo assistenziale basato su evidenze scientifiche."
    },
    {
        term: "PROM (Patient-Reported Outcome Measures)",
        def: "Strumenti (questionari validati) con cui i pazienti descrivono direttamente il proprio stato di salute (sintomi, qualità di vita). Misurano l'efficacia percepita delle terapie."
    },
    {
        term: "PREM (Patient-Reported Experience Measures)",
        def: "Strumenti con cui i pazienti indicano l'esperienza di cura vissuta (accessibilità, comunicazione, empatia). Misurano la qualità dell'interazione."
    },
    {
        term: "SaaS (Software as a Service)",
        def: "Modello in cui il software è accessibile via cloud e pagato a consumo/canone. Riduce costi infrastrutturali e garantisce aggiornamenti costanti."
    },
    {
        term: "Telemedicina",
        def: "Erogazione di servizi sanitari a distanza. Include Televisita, Teleconsulto, Telemonitoraggio e Teleriabilitazione."
    }
];

const Glossary: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-eh-black mb-4">Glossario</h1>
                    <p className="text-lg text-gray-500">
                        Termini e sigle chiave per comprendere la Sanità Digitale e il mondo Easy Health.
                    </p>
                </div>

                <div className="grid gap-8">
                    {TERMS.map((item, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-6 border-l-4 border-eh-petrol hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-eh-petrol mb-2">{item.term}</h3>
                            <p className="text-gray-700 leading-relaxed">{item.def}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Glossary;