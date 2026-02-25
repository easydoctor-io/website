import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ_ITEMS = [
    {
        q: "Cos’è easydoctor e come può migliorare la comunicazione medico-paziente?",
        a: "easydoctor è una piattaforma SaaS di Digital Patient Engagement (DPE) sviluppata in Italia e pienamente rispondente alla normativa italiana. Consente alle strutture sanitarie di accompagnare i pazienti lungo l’intero percorso di cura, migliorando la comunicazione, la raccolta dati e l’aderenza terapeutica."
    },
    {
        q: "Quali tipi di strutture sanitarie possono beneficiare al meglio di easydoctor?",
        a: "È ideale per ospedali pubblici e privati, IRCSS, poliambulatori e centri specialistici che desiderano digitalizzare i percorsi di cura. Abbiamo progetti attivi in cardiologia, diabetologia e altri ambiti cronici."
    },
    {
        q: "Come Easy Health garantisce la protezione dei dati dei pazienti?",
        a: "La piattaforma è sviluppata da una società certificata ISO 9001 e progettata per il pieno rispetto del GDPR. La raccolta dati avviene con consenso informato, in modo sicuro e trasparente."
    },
    {
        q: "In che modo la piattaforma easydoctor supporta i percorsi di cura per i pazienti cronici?",
        a: "Permette la creazione di percorsi digitali personalizzati (es. diabete, malattie cardiovascolari) per migliorare la continuità assistenziale, l'educazione e il monitoraggio da remoto."
    },
    {
        q: "Come posso valutare la rispondenza di easydoctor per le esigenze della mia struttura?",
        a: "I nostri specialisti sono a disposizione per una sessione dimostrativa personalizzata, per confrontare gli standard codificati con le vostre esigenze specifiche."
    },
    {
        q: "In quanto tempo è possibile avviare un progetto?",
        a: "Grazie alla flessibilità SaaS, è possibile attivare esperienze di Digital Patient Engagement personalizzate in poche settimane dall'avvio del progetto."
    },
    {
        q: "Ci sono risorse per agevolare l’avvio di un progetto?",
        a: "Il team Easy Health supporta l'avvio mettendo a frutto incentivi e risorse per rendere più facile e veloce l'adozione del Digital Patient Engagement."
    }
];

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-center text-eh-black mb-12">Domande Frequenti</h1>
                
                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
                            <button 
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-eh-blue/30 transition-colors"
                            >
                                <span className="font-bold text-eh-petrol text-lg pr-4">{item.q}</span>
                                {openIndex === idx ? <ChevronUp className="h-5 w-5 text-eh-petrol shrink-0" /> : <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />}
                            </button>
                            {openIndex === idx && (
                                <div className="p-5 text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-eh-blue p-8 rounded-2xl text-center">
                    <h3 className="text-xl font-bold text-eh-black mb-2">Hai altre domande?</h3>
                    <p className="text-gray-600 mb-6">Il nostro team è pronto a rispondere alle tue esigenze specifiche.</p>
                    <a href="mailto:info@easydoctor.io" className="inline-block bg-eh-petrol text-white px-6 py-3 rounded-xl font-bold hover:bg-eh-green hover:text-eh-petrol transition-colors">
                        Scrivici una email
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Faq;