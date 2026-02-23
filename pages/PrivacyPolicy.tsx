import React, { useEffect } from 'react';
import { Shield, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-eh-blue py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-eh-black mb-4">Politica privacy</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg prose-headings:text-eh-petrol prose-a:text-eh-green hover:prose-a:text-eh-petrol text-gray-700 max-w-none">
            
            <section className="mb-12">
                <p className="lead">
                    Lo scopo del presente documento (di seguito “Informativa Privacy”) è di informare gli Utenti sui dati personali, intesi come qualsiasi informazione che permette l’identificazione di una persona fisica (di seguito i “Dati Personali”), raccolti dal sito web www.easyhealth.tech (di seguito “Applicazione”).
                </p>
                <p>
                    Il Titolare del Trattamento, come successivamente identificato, potrà modificare o semplicemente aggiornare, in tutto o in parte, la presente Informativa dandone informazione agli Utenti. Le modifiche e gli aggiornamenti saranno vincolanti non appena pubblicati sull’Applicazione. L’Utente è pertanto invitato a leggere l’Informativa Privacy ad ogni accesso all’Applicazione.
                </p>
                <p>
                    Nel caso di mancata accettazione delle modifiche apportate all’Informativa Privacy, l’Utente è tenuto a cessare l’utilizzo di questa Applicazione e può richiedere al Titolare del Trattamento di rimuovere i propri Dati Personali.
                </p>
            </section>

            <h2 id="dati-raccolti">Dati Personali raccolti dall’Applicazione</h2>
            
            <h3>Contenuti e informazioni forniti volontariamente dall’Utente</h3>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Dati di contatto e contenuti:</strong> dati anagrafici, recapiti, credenziali di accesso, preferenze personali, ecc.</li>
                <li><strong>Dati personali raccolti dai social media:</strong> i dati condivisi tramite account associati con l’Applicazione. L’Utente può gestire l’accesso tramite le impostazioni privacy dei social.</li>
            </ul>
            <p>Il mancato conferimento dei Dati Personali può impedire l’erogazione, totale o parziale, dei servizi.</p>
            <p>Chi fornisce Dati Personali di terzi è responsabile della loro liceità.</p>

            <h3>Dati e contenuti acquisiti automaticamente</h3>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Dati tecnici:</strong> indirizzi IP, URI, orari di accesso, metodi di richiesta, ecc.</li>
                <li><strong>Dati di utilizzo:</strong> pagine visitate, funzioni utilizzate, attività svolte.</li>
                <li><strong>Dati di geolocalizzazione:</strong> posizione GPS, hotspot Wi-Fi, ripetitori.</li>
            </ul>

            <h2 id="cookie">Cookie e tecnologie simili</h2>
            <p>L’Applicazione utilizza cookie e tecnologie simili per raccogliere informazioni sull’utilizzo del sito. Maggiori dettagli sono disponibili nella <a href="/cookie-policy">Cookie Policy</a>.</p>

            <h2 id="finalita">Finalità del trattamento</h2>
            <p>I Dati Personali sono utilizzati per adempiere a obblighi contrattuali, precontrattuali e normativi.</p>

            <h2 id="modalita">Modalità di trattamento</h2>
            <p>Il trattamento avviene con strumenti informatici e/o telematici, nel rispetto di adeguate misure di sicurezza. Potrebbero accedervi soggetti interni o esterni nominati Responsabili del Trattamento. L’elenco aggiornato è disponibile scrivendo a <a href="mailto:fabio@easydoctor.io">fabio@easydoctor.io</a>.</p>

            <h2 id="base-giuridica">Base giuridica</h2>
            <p>Il trattamento si basa su:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>consenso dell’Utente;</li>
                <li>necessità contrattuali e precontrattuali;</li>
                <li>obblighi legali;</li>
                <li>interesse pubblico;</li>
                <li>legittimo interesse del Titolare o terzi;</li>
                <li>interesse vitale.</li>
            </ul>
            <p>Per chiarimenti è possibile scrivere a <a href="mailto:fabio@easydoctor.io">fabio@easydoctor.io</a>.</p>

            <h2 id="luogo">Luogo</h2>
            <p>I Dati sono trattati presso la sede del Titolare e in altri luoghi in cui sono ubicati i soggetti coinvolti.</p>

            <h2 id="sicurezza">Sicurezza</h2>
            <p>Sono adottate misure tecniche e organizzative adeguate per garantire la sicurezza dei Dati Personali.</p>

            <h2 id="conservazione">Periodo di conservazione</h2>
            <p>I Dati Personali sono conservati per il tempo necessario agli scopi per cui sono raccolti, e in ogni caso:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>per tutta la durata del contratto e relativi adempimenti;</li>
                <li>per obblighi normativi;</li>
                <li>per finalità difensive;</li>
                <li>fino alla revoca del consenso (se applicabile);</li>
                <li>massimo 30 giorni oltre il termine sopra indicato per l’anonimizzazione.</li>
            </ul>

            <h2 id="processi-automatizzati">Processi decisionali automatizzati</h2>
            <p>I Dati Personali non sono soggetti a processi decisionali automatizzati, inclusa la profilazione.</p>

            <h2 id="diritti">Diritti dell’Utente</h2>
            <p>Gli utenti possono in qualsiasi momento esercitare i diritti previsti dagli articoli 15–22 del Regolamento UE 2016/679 (GDPR), tra cui:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>diritto di accesso ai dati personali;</li>
                <li>diritto di rettifica;</li>
                <li>diritto alla cancellazione (diritto all'oblio);</li>
                <li>diritto di limitazione del trattamento;</li>
                <li>diritto alla portabilità dei dati;</li>
                <li>diritto di opposizione al trattamento;</li>
                <li>diritto a non essere sottoposto a decisioni automatizzate.</li>
            </ul>
            <p>Per esercitare tali diritti è possibile inviare una richiesta:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>La richiesta deve contenere nome, cognome, indirizzo email utilizzato sulla piattaforma e, ove necessario, una copia di un documento di identità valido.</li>
                <li>La Società si impegna a fornire riscontro entro 30 giorni dalla ricezione della richiesta, salvo proroghe nei casi previsti dalla normativa.</li>
                <li>In caso di risposta incompleta o insoddisfacente, l’interessato può presentare reclamo al <strong>Garante per la Protezione dei Dati Personali</strong> (www.garanteprivacy.it).</li>
            </ul>

            <h2 id="sanitari">Trattamento di categorie particolari di dati personali (dati sanitari)</h2>
            <p>Easy Health S.r.l. Società Benefit, in qualità di Titolare del Trattamento, informa che nell'ambito dell'utilizzo dell'Applicazione possono essere trattati dati appartenenti a categorie particolari ai sensi dell'art. 9 del Regolamento (UE) 2016/679 (GDPR), in particolare i dati relativi alla salute dell'Utente. Tali dati sono trattati esclusivamente per finalità legate all'erogazione dei servizi sanitari digitali, tra cui: valutazioni anamnestiche, gestione del percorso di cura, promemoria terapeutici, monitoraggio clinico, reportistica e comunicazioni sanitarie.</p>
            <p>Il trattamento di tali dati avviene esclusivamente:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>previa acquisizione del consenso esplicito dell'interessato;</li>
                <li>nel rispetto dei principi di minimizzazione, integrità, riservatezza e sicurezza;</li>
                <li>tramite misure tecniche e organizzative idonee a garantirne la protezione da accessi non autorizzati o trattamenti illeciti;</li>
                <li>mediante personale istruito e soggetto a obbligo di riservatezza.</li>
            </ul>

            <h2 id="transfer">Trasferimento di dati personali verso Paesi terzi (extra-UE)</h2>
            <p>Alcuni fornitori di Easy Health (es. provider di servizi cloud, analisi dati, autenticazione, gestione email) possono avere sede in Paesi al di fuori dello Spazio Economico Europeo (SEE), inclusi gli Stati Uniti. In tali casi, il trasferimento dei dati avviene nel rispetto degli articoli 44 e ss. del GDPR, adottando una o più delle seguenti garanzie:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>Clausole Contrattuali Standard approvate dalla Commissione Europea;</li>
                <li>decisioni di adeguatezza da parte della Commissione UE;</li>
                <li>misure supplementari di sicurezza e minimizzazione.</li>
            </ul>
            <p>L'Utente può richiedere informazioni dettagliate sui trasferimenti internazionali dei dati scrivendo a: <a href="mailto:fabio@easydoctor.io">fabio@easydoctor.io</a>.</p>

            <h2 id="sub-responsabili">Sub-responsabili del trattamento (fornitori esterni)</h2>
            <p>Easy Health si avvale di fornitori terzi (sub-responsabili) che trattano i dati per conto del Titolare, per finalità connesse all'erogazione dei servizi digitali. Tra questi rientrano:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>fornitori di servizi di hosting e cloud come Hetzner;</li>
                <li>servizi di email marketing e CRM come Sendgrid;</li>
                <li>strumenti di analisi statistica e monitoraggio Google Analytics;</li>
            </ul>
            <p>Tutti i sub-responsabili sono vincolati da contratti che garantiscono il rispetto del GDPR. L'elenco aggiornato è disponibile su richiesta all'indirizzo email sopra indicato.</p>

            <div className="overflow-x-auto my-6">
                <table className="min-w-full text-sm text-left border rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 font-bold">
                        <tr>
                            <th className="p-3 border">Finalità del trattamento</th>
                            <th className="p-3 border">Base giuridica del trattamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 border">Erogazione dei servizi richiesti dall'Utente</td>
                            <td className="p-3 border">Esecuzione di contratto / Misure precontrattuali</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">Comunicazioni informative o promemoria terapeutici</td>
                            <td className="p-3 border">Consenso esplicito dell'interessato</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">Invio di newsletter o comunicazioni promozionali</td>
                            <td className="p-3 border">Consenso dell'interessato</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">Analisi interna e ottimizzazione dei servizi</td>
                            <td className="p-3 border">Legittimo interesse del Titolare</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">Conservazione a fini fiscali o legali</td>
                            <td className="p-3 border">Obbligo legale del Titolare</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="periodo-conservazione-dettaglio">Periodo di conservazione dei dati personali</h2>
            <p>I Dati Personali trattati da Easy Health sono conservati per un periodo non superiore a quello necessario al raggiungimento delle finalità per cui sono stati raccolti. In particolare:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Dati contrattuali:</strong> conservati per 10 anni (per obblighi fiscali e legali);</li>
                <li><strong>Dati sanitari:</strong> conservati per il tempo strettamente necessario all'erogazione dei servizi, o per la finalità utilizzata, salvo periodi più lunghi richiesti da normative sanitarie;</li>
                <li><strong>Dati marketing:</strong> fino a revoca del consenso o 24 mesi dall'ultima interazione utile;</li>
                <li><strong>Dati tecnici/statistici aggregati:</strong> fino a 12 mesi, se non anonimizzati.</li>
            </ul>
            <p>Al termine del periodo di conservazione, i dati sono cancellati o resi anonimi in modo irreversibile.</p>

            <h2 id="profilazione">Profilazione e tracciamento utente</h2>
            <p>Easy Health non effettua profilazione automatizzata con effetti giuridici sull'Utente. Tuttavia, utilizza strumenti analitici per migliorare l'esperienza utente e ottimizzare i servizi, attraverso il monitoraggio pseudonimizzato del comportamento di navigazione (es. heatmap, frequenza di accesso, percorsi utente). Tali dati non permettono l'identificazione diretta dell'Utente.</p>
            <p>L'Utente può sempre gestire o revocare il consenso all'uso di cookie e tracker tramite il banner di consenso o le impostazioni del browser.</p>

            <section className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h2 className="flex items-center gap-2 mt-0">
                    <Shield className="h-6 w-6" /> Titolare del Trattamento
                </h2>
                <p className="mb-1 font-bold text-eh-black">Easy Health S.r.l. Società Benefit</p>
                <p className="mb-1">Via Arcivescovo Calabiana 6, 20139 Milano (MI)</p>
                <p className="mb-1">P. IVA 11607630966</p>
                <p className="mb-0">
                    Email: <a href="mailto:fabio@easydoctor.io" className="font-bold">fabio@easydoctor.io</a><br/>
                    PEC: easyhealth@pec.it
                </p>
                
                <hr className="my-6 border-gray-200" />
                
                <h3 className="text-lg font-bold text-gray-900 mt-0">Responsabile della Protezione dei Dati (RPD/DPO)</h3>
                <p className="mb-0">Atenanet srls</p>
                <p className="mb-0"><a href="mailto:dpo@easydoctor.io">dpo@easydoctor.io</a></p>
            </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;