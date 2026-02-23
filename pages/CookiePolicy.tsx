import React, { useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-eh-blue py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-eh-black mb-4">Politica sui cookie</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg prose-headings:text-eh-petrol text-gray-700 max-w-none">
            
            <section className="mb-10">
                <p>
                    I cookie sono piccoli pezzi di testo inviati dai nostri server al tuo computer o dispositivo quando accedi ai nostri servizi.
                    Vengono memorizzati nel tuo browser e poi rimandati ai nostri server in modo da poter fornire contenuti contestuali.
                    Senza i cookie, usare il web sarebbe un'esperienza molto più frustrante.
                    Li usiamo per supportare le tue attività sul nostro sito web. Per esempio, la tua sessione (in modo da non dover effettuare nuovamente il login) o il tuo carrello della spesa.
                </p>
                <p>
                    I cookie vengono utilizzati anche per aiutarci a capire le tue preferenze in base all'attività precedente o corrente sul nostro sito web (le pagine che hai
                    visitato), la tua lingua e il tuo paese, il che ci permette di fornirti servizi migliori.
                    Utilizziamo i cookie anche per aiutarci a compilare dati aggregati sul traffico del sito e l'interazione del sito in modo da poter offrire
                    migliori esperienze e strumenti del sito in futuro.
                </p>
            </section>

            <section className="mb-12">
                <p>Ecco una panoramica dei cookie che possono essere memorizzati sul tuo dispositivo quando visiti il nostro sito web:</p>

                <div className="overflow-x-auto rounded-xl border border-gray-200 mt-6 shadow-sm">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 font-bold">
                            <tr>
                                <th className="p-4 border-b w-[20%]">Categoria del cookie</th>
                                <th className="p-4 border-b w-[50%]">Scopo</th>
                                <th className="p-4 border-b w-[30%]">Esempi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="bg-white">
                                <td className="p-4 font-bold text-eh-petrol">
                                    Sessione e sicurezza<br/>(essenziale)
                                </td>
                                <td className="p-4">
                                    <p>Autentica gli utenti, proteggi i dati degli utenti e permetti al sito web di fornire i servizi che gli utenti si aspettano, come mantenere il contenuto del loro carrello o permettere l'upload di file.</p>
                                    <p className="text-xs text-red-500 mt-2">Il sito web non funzionerà correttamente se rifiuti o scarti questi cookie.</p>
                                </td>
                                <td className="p-4 font-mono text-xs text-gray-500">
                                    session_id (Odoo)
                                </td>
                            </tr>
                            <tr className="bg-gray-50/50">
                                <td className="p-4 font-bold text-eh-petrol">
                                    Preferenze<br/>(essenziale)
                                </td>
                                <td className="p-4">
                                    <p>Ricorda le informazioni sull'aspetto o il comportamento preferito del sito web, come la lingua o la regione preferita.</p>
                                    <p className="text-xs text-gray-500 mt-2">La tua esperienza potrebbe essere degradata se elimini questi cookie, ma il sito web continuerà a funzionare.</p>
                                </td>
                                <td className="p-4 font-mono text-xs text-gray-500">
                                    frontend_lang (Odoo)
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-4 font-bold text-eh-petrol">
                                    Cronologia interazioni<br/>(opzionale)
                                </td>
                                <td className="p-4">
                                    <p>Utilizzato per raccogliere informazioni sulle tue interazioni con il sito web, le pagine che hai visto e qualsiasi campagna di marketing specifica che ti ha portato al sito web.</p>
                                    <p className="text-xs text-gray-500 mt-2">Potremmo non essere in grado di fornirti il miglior servizio se rifiuti questi cookie, ma il sito web funzionerà.</p>
                                </td>
                                <td className="p-4 font-mono text-xs text-gray-500">
                                    im_livechat_previous_operator (Odoo)<br/>
                                    utm_campaign (Odoo)<br/>
                                    utm_source (Odoo)<br/>
                                    utm_medium (Odoo)
                                </td>
                            </tr>
                            <tr className="bg-gray-50/50">
                                <td className="p-4 font-bold text-eh-petrol">
                                    Pubblicità & marketing<br/>(facoltativo)
                                </td>
                                <td className="p-4">
                                    <p>Utilizzato per rendere la pubblicità più coinvolgente per gli utenti e più preziosa per gli editori e gli inserzionisti, come ad esempio fornire annunci più pertinenti quando si visitano altri siti web che visualizzano annunci o per migliorare il reporting sulle prestazioni delle campagne pubblicitarie.</p>
                                    <p className="text-xs text-gray-500 mt-2">Nota che alcuni servizi di terze parti possono installare ulteriori cookie sul tuo browser al fine di identificarti.</p>
                                    <p className="text-xs text-gray-500 mt-2">È possibile rifiutare l'utilizzo dei cookie da parte di terze parti visitando la pagina <a href="https://optout.networkadvertising.org/?c=1" rel="nofollow" className="text-eh-petrol underline">Network Advertising Initiative</a>. Il sito web continuerà a funzionare se non accetti i cookie.</p>
                                </td>
                                <td className="p-4 font-mono text-xs text-gray-500">
                                    __gads (Google)<br/>
                                    __gac (Google)
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-4 font-bold text-eh-petrol">
                                    Analytics<br/>(opzionali)
                                </td>
                                <td className="p-4">
                                    <p>Capisci in che modo i visitatori arrivano al nostro sito web grazie a Google Analytics.</p>
                                    <p className="text-xs text-gray-500 mt-2">Scopri di più su <a href="https://support.google.com/analytics/answer/11397207?hl=en" className="text-eh-petrol underline">cookie e informazioni sulla privacy di Analytics</a>.</p>
                                    <p className="text-xs text-gray-500 mt-2">Il sito web continuerà a funzionare anche se rifiuti o elimini questi cookie.</p>
                                </td>
                                <td className="p-4 font-mono text-xs text-gray-500">
                                    _ga (Google)<br/>
                                    _gat (Google)<br/>
                                    _gid (Google)<br/>
                                    _gac_* (Google)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mb-12">
                <p>
                    Puoi scegliere di farti avvertire dal tuo computer ogni volta che viene inviato un cookie, oppure puoi scegliere di disattivare tutti i cookie.
                    Ogni browser è un po' diverso, quindi guarda il menu di aiuto del tuo browser per imparare il modo corretto di modificare i cookie.
                </p>
                <p>Attualmente non supportiamo i segnali Do Not Track, poiché non esiste uno standard industriale per la conformità.</p>
            </section>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;