
export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  image: string;
  content: string; // HTML content
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'digital-patient-engagement-1',
    title: "Digital Patient Engagement: una risorsa per migliorare gli outcome clinici",
    subtitle: "Scopri le strategie, gli strumenti digitali e i benefici del coinvolgimento attivo dei pazienti nella propria cura.",
    author: "Fabio Vantaggiato",
    date: "19 Maggio 2025",
    // Abstract 3D cubes/network in Teal/Green - Represents structure and digital connection
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600&auto=format&fit=crop",
    content: `
      <div class="lead text-lg text-gray-600 mb-8 leading-relaxed">
        <p>Il rapporto tra medico e paziente è da sempre al centro della pratica medica, ma negli ultimi anni sta vivendo un’evoluzione significativa grazie al <strong class="text-eh-petrol">Digital Patient Engagement (DPE)</strong>. Questo concetto rappresenta un nuovo approccio nella gestione della salute che coinvolge attivamente i pazienti, rendendoli protagonisti della propria cura.</p>
      </div>

      <div class="bg-eh-blue/30 p-6 rounded-xl border-l-4 border-eh-petrol my-8">
        <h3 class="text-eh-petrol font-bold text-lg mb-2">Il contesto attuale</h3>
        <p class="text-gray-700 italic">"I pazienti stanno acquisendo sempre più consapevolezza sulla propria salute e desiderano essere coinvolti attivamente nelle decisioni che riguardano il proprio benessere."</p>
      </div>
      
      <h2 class="text-2xl font-bold text-eh-black mt-10 mb-6">L’importanza delle informazioni</h2>
      <p class="mb-4 text-gray-700 leading-relaxed">La gestione delle informazioni dei pazienti gioca un ruolo fondamentale nel contesto del Digital Patient Engagement, agevolando un approccio completo e personalizzato alla cura da parte delle strutture sanitarie.</p>
      
      <h3 class="text-xl font-bold text-eh-petrol mt-8 mb-4">Dalla carta al digitale</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">La gestione delle informazioni attraverso strumenti digitali rappresenta un passo avanti rispetto alla modalità tradizionale basata su documenti cartacei che comporta sfide significative:</p>
      
      <ul class="space-y-3 my-6">
        <li class="flex items-start gap-3">
            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">✕</span>
            <span class="text-gray-700">L’accesso alle informazioni è più lento e frammentato.</span>
        </li>
        <li class="flex items-start gap-3">
            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">✕</span>
            <span class="text-gray-700">L’archiviazione è differente per ogni struttura, limitando la condivisione.</span>
        </li>
        <li class="flex items-start gap-3">
            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">✕</span>
            <span class="text-gray-700">È più facile che si verifichino errori di trascrizione o lettura.</span>
        </li>
      </ul>
      
      <h3 class="text-xl font-bold text-eh-petrol mt-8 mb-4">Un nuovo modo per dialogare</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">Il passaggio alla gestione digitale delle informazioni dei pazienti supporta anche nel trovare un dialogo più adatto per ogni tipo di paziente. Grazie alla tecnologia, è possibile raccogliere, archiviare e accedere in modo sicuro alle informazioni sanitarie dei pazienti.</p>

      <div class="my-10 p-1 bg-gradient-to-r from-eh-petrol to-eh-green rounded-2xl">
        <div class="bg-white p-6 rounded-xl">
            <h2 class="text-2xl font-bold text-eh-black mb-4">Elementi chiave del DPE</h2>
            <p class="mb-4 text-gray-600">Il DPE rappresenta l’uso strategico delle tecnologie digitali per coinvolgere attivamente i pazienti nella gestione della propria salute.</p>
            <div class="grid md:grid-cols-3 gap-4 mt-6">
                <div class="bg-gray-50 p-4 rounded-lg text-center">
                    <div class="font-bold text-eh-petrol mb-1">Personalizzazione</div>
                    <div class="text-xs text-gray-500">Contenuti su misura per il paziente.</div>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg text-center">
                    <div class="font-bold text-eh-petrol mb-1">Comunicazione</div>
                    <div class="text-xs text-gray-500">Canali diretti tra medico e paziente.</div>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg text-center">
                    <div class="font-bold text-eh-petrol mb-1">Empowerment</div>
                    <div class="text-xs text-gray-500">Ruolo attivo nella gestione della salute.</div>
                </div>
            </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-eh-black mt-10 mb-6">Quando attivare il DPE</h2>
      <p class="mb-6 text-gray-700">Il Digital Patient Engagement svolge un ruolo cruciale in molteplici aspetti dei percorsi sanitari:</p>
      
      <div class="space-y-4">
        <div class="flex gap-4 p-4 border border-gray-200 rounded-xl hover:border-eh-green transition-colors bg-white shadow-sm">
            <div class="flex-shrink-0 w-10 h-10 bg-eh-blue rounded-full flex items-center justify-center text-eh-petrol font-bold">1</div>
            <div>
                <h4 class="font-bold text-gray-900">Onboarding & Anamnesi</h4>
                <p class="text-sm text-gray-600">Esperienze di accettazione digitali e raccolta dati guidata fin dal primo contatto.</p>
            </div>
        </div>
        <div class="flex gap-4 p-4 border border-gray-200 rounded-xl hover:border-eh-green transition-colors bg-white shadow-sm">
            <div class="flex-shrink-0 w-10 h-10 bg-eh-blue rounded-full flex items-center justify-center text-eh-petrol font-bold">2</div>
            <div>
                <h4 class="font-bold text-gray-900">Prevenzione & Cronicità</h4>
                <p class="text-sm text-gray-600">Percorsi personalizzati, monitoraggio continuo e supporto all'aderenza terapeutica.</p>
            </div>
        </div>
        <div class="flex gap-4 p-4 border border-gray-200 rounded-xl hover:border-eh-green transition-colors bg-white shadow-sm">
            <div class="flex-shrink-0 w-10 h-10 bg-eh-blue rounded-full flex items-center justify-center text-eh-petrol font-bold">3</div>
            <div>
                <h4 class="font-bold text-gray-900">Riabilitazione</h4>
                <p class="text-sm text-gray-600">Ingaggio costante per favorire il recupero funzionale.</p>
            </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-eh-black mt-12 mb-6">Conclusioni</h2>
      <p class="text-gray-700 leading-relaxed">Al termine del nostro percorso, possiamo dire che il <b>Digital Patient Engagement rappresenta un’evoluzione significativa nel rapporto tra medico e paziente</b>. Attraverso l’implementazione di strumenti tecnologici e l’integrazione di approcci attenti all’esperienza utente, il DPE offre l’opportunità di migliorare concretamente la qualità dell’esperienza di cura.</p>
    `
  },
  {
    id: '5-modi-tecnologia',
    title: "5 modi per utilizzare la tecnologia per migliorare i servizi terapeutici",
    subtitle: "Dai sistemi di telemedicina e cartella clinica elettronica all'analisi dei dati e ai programmi di benessere.",
    author: "Fabio Vantaggiato",
    date: "20 Maggio 2025",
    // Clean, high-tech interface abstract - Petrol/Blue/Teal tones
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    content: `
      <p class="lead text-lg text-gray-600 mb-8 leading-relaxed">La tecnologia ha rivoluzionato la terapia, migliorando sia l'esperienza del paziente che i risultati clinici. Integrando strumenti digitali nella loro pratica, i terapisti possono offrire un'assistenza più personalizzata, efficiente e accessibile.</p>
      
      <div class="grid gap-6 my-10">
        <!-- Point 1 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold text-eh-petrol mb-3 flex items-center gap-2">
                <span class="bg-eh-petrol text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                Telemedicina
            </h3>
            <p class="text-gray-600">L'adozione della telemedicina è cresciuta significativamente. Le sedute a distanza offrono flessibilità, riducono gli appuntamenti persi e aumentano l'aderenza terapeutica, superando barriere geografiche e di mobilità.</p>
        </div>

        <!-- Point 2 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold text-eh-petrol mb-3 flex items-center gap-2">
                <span class="bg-eh-petrol text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                Portali Paziente
            </h3>
            <p class="text-gray-600">Il coinvolgimento è cruciale. I portali dedicati permettono ai pazienti di accedere a note, prenotare e comunicare in sicurezza (GDPR), trasformandoli in partecipanti attivi del proprio percorso di cura.</p>
        </div>

        <!-- Point 3 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold text-eh-petrol mb-3 flex items-center gap-2">
                <span class="bg-eh-petrol text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">3</span>
                Onboarding Semplificato
            </h3>
            <p class="text-gray-600">La prima impressione conta. Sistemi digitali automatizzano la compilazione moduli e l'accettazione, riducendo il carico amministrativo e migliorando l'esperienza iniziale del paziente.</p>
        </div>

        <!-- Point 4 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold text-eh-petrol mb-3 flex items-center gap-2">
                <span class="bg-eh-petrol text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">4</span>
                Sondaggi & Prevenzione
            </h3>
            <p class="text-gray-600">Programmi strutturati di benessere e sondaggi (come quelli di Easy Health) permettono ai di monitorare progressi e stratificare il rischio, offrendo supporto continuo anche fuori dalle sedute.</p>
        </div>

        <!-- Point 5 -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold text-eh-petrol mb-3 flex items-center gap-2">
                <span class="bg-eh-petrol text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">5</span>
                Analisi dei Dati
            </h3>
            <p class="text-gray-600">L'analisi dei dati trasforma le informazioni in decisioni. Monitorando tendenze e risultati, i terapeuti possono personalizzare i piani di trattamento in modo preciso ed efficace.</p>
        </div>
      </div>

      <div class="bg-eh-blue/20 p-8 rounded-2xl text-center mt-12">
        <h4 class="text-xl font-bold text-eh-black mb-2">Pronto a innovare?</h4>
        <p class="text-gray-600 mb-6">Scopri come la tecnologia può trasformare il tuo studio oggi stesso.</p>
        <button class="bg-eh-petrol text-white px-6 py-2 rounded-lg font-bold hover:bg-eh-green hover:text-eh-petrol transition-colors">Contattaci</button>
      </div>
    `
  },
  {
    id: 'easyhealth-viaggio',
    title: "Il nostro viaggio da easydoctor a Easy Health",
    subtitle: "Un percorso di innovazione, cambiamento e nuove visioni per la sanità digitale.",
    author: "Fabio Vantaggiato",
    date: "20 Maggio 2025",
    // Global connection/Network abstract - Petrol/Teal
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    content: `
      <p class="lead text-lg text-gray-600 mb-8 leading-relaxed font-medium">Mi chiamo Fabio Vantaggiato, co-fondatore e amministratore di easydoctor – oggi Easy Health. Raccontare questa storia significa rivivere i momenti più intensi, complessi e allo stesso tempo formativi del mio percorso imprenditoriale.</p>
      
      <div class="border-l-4 border-eh-green pl-6 py-2 my-8 italic text-gray-600 text-lg">
        "Un viaggio iniziato nel 2021 con un’idea semplice ma ambiziosa: migliorare l’esperienza delle cure sanitarie attraverso soluzioni digitali intuitive, sicure centrate sul paziente."
      </div>
      
      <div class="relative pl-8 border-l border-gray-200 space-y-10 my-12">
        <!-- Timeline Item 1 -->
        <div class="relative">
            <span class="absolute -left-[39px] bg-eh-petrol text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">1</span>
            <h4 class="text-xl font-bold text-eh-black mb-2">2021–2022: Le Origini</h4>
            <p class="text-gray-600">Quando abbiamo fondato easydoctor, eravamo mossi dalla convinzione che l’interazione tra medico e paziente potesse essere radicalmente migliorata. Abbiamo lavorato senza sosta per validare il posizionamento, stringendo le prime partnership cruciali con strutture come il Centro Cardiologico Monzino.</p>
        </div>

        <!-- Timeline Item 2 -->
        <div class="relative">
            <span class="absolute -left-[39px] bg-eh-petrol text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">2</span>
            <h4 class="text-xl font-bold text-eh-black mb-2">2023–2024: La Crisi e la Verità</h4>
            <p class="text-gray-600">Il 2024 è stato un anno complesso. Abbiamo dovuto rimettere tutto in discussione: modello, strategia, roadmap. È in questi momenti che ho compreso che l’idea è solo l’1%, il resto è la resilienza di portarla avanti.</p>
        </div>

        <!-- Timeline Item 3 -->
        <div class="relative">
            <span class="absolute -left-[39px] bg-eh-green text-eh-petrol w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">3</span>
            <h4 class="text-xl font-bold text-eh-black mb-2">2024–2025: Rinascita come Easy Health</h4>
            <p class="text-gray-600">Da questa crisi è nata una nuova consapevolezza. easydoctor non era più solo una piattaforma, ma il punto di partenza. Abbiamo evoluto il progetto in <b>Easy Health</b>, abbracciando una visione più ampia e sistemica.</p>
        </div>
      </div>
      
      <div class="bg-gray-900 text-white p-8 rounded-2xl text-center my-8">
        <h4 class="text-2xl font-bold mb-4">Guardando Avanti</h4>
        <p class="text-gray-300 mb-0">Oggi, Easy Health è una realtà più matura, con obiettivi chiari e una visione fatta di piccoli passi. Grazie a chi ci ha accompagnato fin qui. E benvenuti a chi vorrà unirsi ora.</p>
      </div>
    `
  },
  {
    id: 'value-based-healthcare',
    title: "Sostenibilità della sanità: il modello Value-Based Healthcare ed il Digital Patient Engagement",
    subtitle: "Alla scoperta del modello Value-Based Healthcare e del suo impatto sulla sostenibilità della sanità: in occasione del 45° anniversario del Servizio Sanitario Nazionale, raccontiamo come il VBHC e il Digital Patient Engagement stiano ridefinendo l’approccio alla cura e al benessere dei pazienti.",
    author: "Alberto Giacobone",
    date: "30 Luglio 2025",
    // Data visualization abstract - Clean, Green/Teal
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1600&auto=format&fit=crop",
    content: `
      <p><em>Fonte immagine: Pexels</em></p>

<h2>45 anni di Servizio Sanitario Nazionale</h2>

<p>Nel 2023 si è celebrato il traguardo dei <strong>45 anni</strong> trascorsi da quel 1978 in cui, con la <a href="https://presidenza.governo.it/USRI/ufficio_studi/normativa/Legge%2023%20dicembre%201978,%20n.%20833.pdf" target="_blank" class="text-eh-petrol underline">Legge 833 del 23 dicembre 1978</a> firmata da Tina Anselmi, la prima ministra di sesso femminile della nostra Repubblica, <strong>è stato istituito il Servizio Sanitario Nazionale</strong>, una vera e propria avanguardia nel panorama internazionale.</p>

<p>I suoi principi cardine di <strong>universalità, equità e solidarietà di accesso alla cura e alla riabilitazione</strong> hanno fatto da traccia per lo sviluppo del nostro sistema sanitario portandolo ad essere a lungo <strong>un’eccellenza mondiale</strong> in più di una classifica, anche se negli ultimi anni è sceso di qualche posizione.</p>

<p>In questi 45 anni sono però cambiate molte cose, come ad esempio <a href="https://statisticsanddata.org/it/data/aspettativa-vita-italia/" target="_blank" class="text-eh-petrol underline">la nostra aspettativa di vita</a>: se nel 1978 era di circa 73 anni, negli ultimi anni <strong>è arrivata ad essere attorno agli 83 anni</strong>, ben 10 in più.</p>

<p>Ancora, se la <strong>popolazione</strong> totale è cambiata di poco dai 56 milioni circa che eravamo nel 1978 ai circa 58 milioni che siamo oggi, quella che è cambiata radicalmente è la sua <strong>composizione per età</strong>: <a href="https://www.populationpyramid.net/it/italia/1978/" target="_blank" class="text-eh-petrol underline">se 45 anni fa gli ultrasessantenni erano il 17% circa</a> della popolazione, <a href="https://www.populationpyramid.net/it/italia/2022/" target="_blank" class="text-eh-petrol underline">nel 2022 erano già oltre il 31%</a>.</p>

<p><img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop" loading="lazy" class="w-full rounded-xl my-6"><em>Immagine: Ambiente Ospedaliero Astratto</em></p>

<p>La disparità del paragone diventa ancora più evidente se paragoniamo le <strong>persone ultracentenarie</strong>: meno di 1000 nel 1978 e quasi 20.000 nel 2023.</p>

<p>Questi cambiamenti hanno segnato una <strong>crescente messa alla prova del nostro sistema sanitario</strong> e dei professionisti che ne fanno parte, acuita dalla recente pandemia che ha visto l’Italia tra i primissimi Paesi coinvolti.</p>

<p>Il crescere delle sfide è stato, fortunatamente, accompagnato dalla crescita di <strong>numerose risorse a nostra disposizione</strong>, tra cui spiccano le<strong> tecnologie digitali</strong>.</p>

<p>Il loro impatto può essere trasformativo, ma per potersi esprimere al meglio a servizio delle persone <strong>richiedono anche dei profondi cambiamenti legislativi, organizzativi e culturali</strong>.</p>

<p>Pensiamo alla <strong>telemedicina</strong>, nelle sue molteplici forme (teleconsulto, telerefertazione, telemonitoraggio, etc.): un medico può tecnicamente interagire con un paziente anche a grande distanza, superando il limite della vicinanza geografica, ma se il sistema di regole non gli permette, ad esempio, di prescrivere ricette a distanza, <strong>questo limite permane</strong>.</p>

<p><img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop" loading="lazy" class="w-full rounded-xl my-6"><em>Immagine: Digital Health in Action</em></p>

<p>Dal punto di vista <strong>organizzativo</strong> diventa possibile far incontrare agli specialisti di una determinata disciplina un maggior numero di pazienti che necessitano di quelle specifiche competenze, <strong>massimizzando il valore</strong> per tutti i soggetti coinvolti.</p>

<p>Infine, per consentire alla tecnologia digitale di esprimersi al meglio, è necessario un <strong>cambiamento culturale</strong> che passa prima dalla <strong>comprensione del suo potenziale</strong> a vantaggio dei pazienti e della loro salute e poi dall’<strong>impegno ad agevolarne l’adozione</strong> per avvicinarne i benefici: dei vari cambiamenti necessari è forse il più complesso, perché richiede alle persone di <strong>mettere in discussione</strong>, a volte anche in maniera radicale, <strong>dinamiche ed abitudini</strong> più che consolidate.</p>

<h2>La promessa della Value-Based Healthcare</h2>

<p>Nel 2006, edito dalla<strong> Harvard Business School Press</strong>, esce un libro con delle teorie destinate ad un impatto davvero dirompente in sanità: “<a href="https://hbsp.harvard.edu/product/7782-HBK-ENG" target="_blank" class="text-eh-petrol underline"><em>Redefining Health Care: Creating Value-Based Competition on Results</em></a>”.</p>

<p><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" loading="lazy" class="w-full rounded-xl my-6"></p>

<p>Il libro è stato scritto da Michael E. Porter, economista di fama mondiale e Elizabeth Olmsted Teisberg, docente esperta di innovazione: insieme propongono un <strong>modello di erogazione dei servizi sanitari</strong> che mira a migliorare i risultati per i pazienti in termini di salute, <strong>definendo il “valore” come risultati di salute per unità di costo</strong>, prendendo in esame l’intero ciclo di cura.</p>

<p>Per comprendere al meglio questo modello, è importante <strong>inquadrare il concetto di valore</strong> ed è proprio Porter ad aiutarci in “<a href="https://vbhcprize.com/wp-content/uploads/2014/03/Porter-What-is-value-in-healthcare.pdf" target="_blank" class="text-eh-petrol underline"><em>What is Value in Health Care</em></a>”, una pubblicazione del 2010.</p>

<p>In questo testo introduce una <strong>classificazione</strong> a tre livelli:</p>

<ol class="list-decimal pl-6 space-y-2 mb-6"><li>al vertice troviamo lo <strong>stato di salute raggiunto o mantenuto</strong> (sopravvivenza o grado di funzionalità / recupero della salute originale).</li><li>Subito a seguire ci sono degli <strong>indicatori di processo</strong>, come ad esempio il <strong>tempo</strong> che è servito per recuperare lo stato di salute e/o eventuali eventi avversi che sono intercorsi, tenendo anche conto della loro <strong>gravità</strong>.</li><li>In terzo e ultimo luogo si prende in esame la <strong>sostenibilità dello stato di salute</strong>, con uno sguardo il più possibile sul lungo termine della stessa, anche considerando le <strong>conseguenze</strong> della terapia.</li></ol>

<p>Tenendo ben chiara questa gerarchia di valore, <strong>il modello della Value-Based Healthcare suggerisce 5 grandi aree di intervento</strong>, che si reggono su delle fondamenta imprescindibili, cioè la realizzazione di un’<strong>infrastruttura tecnologica abilitante</strong> con delle caratteristiche ben precise:</p>

<ul class="list-disc pl-6 space-y-2 mb-6"><li>il <strong>paziente è al centro</strong> e tutti i suoi <strong>dati</strong> devono essere <strong>accessibili</strong> con facilità, indipendentemente dai reparti o dalle strutture con cui è entrato in contatto. <strong>È il principio del Fascicolo Sanitario Elettronico</strong>, un importante obiettivo che, non senza difficoltà, stiamo progressivamente cercando di raggiungere.</li><li>È basato su <strong>definizioni e convenzioni standard, condivise e comprensibili</strong> da tutti i soggetti coinvolti. Oggi purtroppo capita ancora troppo spesso che il medesimo esame, ripetuto in reparti diversi di uno stesso ospedale, restituisca valori diversi a fronte di macchinari con calibrazioni differenti: nel sistema proposto da Porter e Teisberg questo non deve accadere.</li><li>Tutti <strong>i dati del paziente devono essere in un unico punto</strong>, inclusi gli appunti di medici e infermieri: <strong>un’unica fonte di sapere</strong>, il più certa e chiara possibile, riduce le chance di errori e ritardi.</li><li>Chiunque abbia un ruolo nel percorso di cura del paziente <strong>deve poter accedere ai suoi dati, il più liberamente possibile</strong>. I vantaggi sono molteplici: si aumentano ad esempio le chance di esiti diagnostici più accurati e si evitano procedure ridondanti.</li><li>Il sistema deve includere <strong>schemi e sistemi esperti per ogni singola condizione medica</strong>: questa previsione agevola la condivisione ed il rispetto di buone pratiche il più possibile universali.</li><li>Le <strong>informazioni</strong> devono essere <strong>facilmente recuperabili ed interscambiabili</strong>: per poter funzionare al meglio, il modello ha bisogno della raccolta, elaborazione e condivisione di dati, dai costi sostenuti per il singolo paziente al valore generato.</li></ul>

<p>Gli sforzi in corso in Europa per la creazione dello <a href="https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_it" target="_blank" class="text-eh-petrol underline">Spazio europeo dei dati sanitari</a> vanno in questa direzione, rafforzando anche la creazione di <strong>valore condiviso</strong> – altro concetto importante per Porter – attraverso delle <strong>previsioni normative sull’uso secondario dei dati</strong> capaci di superare i limiti della legislazione vigente.</p>

<p>Anche le 5 grandi aree di intervento iniziano a trovare riscontro negli sviluppi della <strong>sanità italiana ed europea</strong>:</p>

<p>si parte dalla proposta di sviluppare <strong>unità di assistenza integrate</strong> (IPU, Integrated Practice Units) <strong>specializzate</strong> su determinate condizioni cliniche.</p>

<p>Un esempio recente in Italia sono le <a href="https://codiceviola.org/pancreas-unit-e-squadre-multidisciplinari/" target="_blank" class="text-eh-petrol underline">Pancreas Unit</a>, che vedono la Lombardia come apripista nell’adozione di un <strong>modello multidisciplinare di particolare efficienza</strong>, che si innesta su di un’esperienza che ha già dimostrato il suo valore, quello delle <a href="https://www.europadonna.it/tumore-al-seno/monitoraggio/" target="_blank" class="text-eh-petrol underline">Breast Unit</a> dedicate alla prevenzione e cura delle diverse forme di tumore al seno.</p>

<p>Nel modello di Porter e Teisberg personale, <strong>macchinari e spazi appositamente integrati e ottimizzati per affrontare l’intero ciclo di cura di una determinata condizione clinica</strong>, inclusa la formazione di pazienti e familiari – migliora il coordinamento, riduce gli sprechi ed il tempo perso per i pazienti, migliora l’aderenza ai protocolli di cura e gli esiti per i pazienti.</p>

<p>La seconda area di intervento è la <strong>raccolta puntuale dei costi dei singoli passaggi del percorso di cura</strong> insieme agli esiti per i pazienti, in <strong>modalità</strong> il più possibile <strong>standard</strong> per permettere comparazioni ed evidenziare buone pratiche da condividere.</p>

<p>In Italia su questo fronte ha un ruolo sempre più importante il <a href="https://pne.agenas.it/" target="_blank" class="text-eh-petrol underline">Programma Nazionale Esiti</a>, guidato da AGENAS: si tratta di uno <strong>strumento di valutazione a supporto di programmi di audit clinico e organizzativo</strong> che aiuta a valutare i livelli di assistenza ospedaliera, assistenza territoriale ed equità dell’offerta sanitaria.</p>

<p>Terzo punto chiave per sviluppare il modello VBHC è l’<strong>adozione di prezzi a pacchetto per cicli di cura completi</strong> (bundled payments):</p>

<p>Indipendentemente da chi sostiene il costo dell’esperienza di cura, un modello di pagamento centrato sul ciclo di cura <strong>incentiva le realtà in grado di offrire, nell’insieme, più valore ai pazienti</strong>, nelle accezioni alla base del modello VBHC.</p>

<p>In virtù di questo modello le singole prestazioni, per quanto rilevanti, perdono la loro centralità per divenire parte di un insieme che permette di ricercare <strong>ottimizzazioni capaci di mantenere o migliorare il valore generato</strong>.</p>

<p>Infine, concludendo il nostro excursus sulle grandi aree di intervento della VBHC, le ultime due in elenco si integrano a vicenda: la quarta infatti propone una <strong>specializzazione delle strutture</strong>, con una riduzione dell’ampiezza dell’offerta sanitaria unita ad una maggiore capacità di servire al meglio determinate esigenze.</p>

<p>In questo modo <strong>gli specialisti di quelle strutture potranno esprimere al meglio la loro professionalità</strong>, demandando a strutture integrate la gestione di altri aspetti e casistiche di minor complessità.</p>

<p>Il quinto punto, in sinergia con il quarto, è <strong>l’espansione della portata geografica dell’intervento delle strutture specializzate e della loro rete di strutture integrate</strong>, in un modello c.d. a raggiera (hub & spoke).</p>

<p>Un esempio di questo approccio lo vediamo nella riduzione dei punti nascita: la <strong>razionalizzazione delle strutture specializzate</strong> in questa attività assicura che i professionisti della salute impegnati su questo fronte, oltre ad avere accesso a strumenti adeguati, abbiano un’esperienza significativa e siano quindi in grado di <strong>gestire con esiti migliori anche le situazioni più problematiche</strong>.</p>

<p>Questo <strong>cambiamento</strong>, oltre che strutturale, è anche <strong>culturale</strong>: per molte esigenze gli italiani sono abituati a rivolgersi alle strutture più vicine, con il fattore distanza che gioca un ruolo più rilevante del dovuto nella scelta della struttura a cui rivolgersi.</p>

<p>In un modello VBHC è importante che anche i pazienti imparino a<strong> premiare le strutture più virtuose</strong>, rivolgendosi – a proprio vantaggio – alle stesse anche quando meno comode geograficamente.</p>

<p>Queste nuove abitudini possono venire incentivate anche prestando attenzione all’<strong>esperienza d’insieme non solo dei pazienti ma anche dei loro familiari</strong>, agevolandone la permanenza presso la struttura o nei suoi pressi.</p>

<h2>La Value-Based Health Care nel mondo ed in Italia</h2>

<p>Nel giro di pochi anni dalla sua pubblicazione<strong> la popolarità del modello VBHC è cresciuta significativamente</strong>, anche se a macchia di leopardo: in retrospettiva, la presenza o meno di dati strutturati e facilmente accessibili è stato evidenziato come un fattore importante per poter implementare con successo questo modello.</p>

<p>Proprio su questo fronte, ad accompagnare il percorso di crescita della Value-Based Healthcare nel mondo dal 2012 c’è anche una realtà non profit, <a href="https://www.ichom.org/" target="_blank" class="text-eh-petrol underline">ICHOM, International Consortium for Health Outcomes Measurement</a>: obiettivo di questa realtà è proprio mettere a terra il potenziale della VBHC tramite la <strong>definizione di standard globali condivisi sulla misura degli esiti di maggior rilievo</strong> per i pazienti e l’incentivazione della misura di questi esiti al fine di creare più valore per tutti i soggetti coinvolti.</p>

<p><img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" loading="lazy" class="w-full rounded-xl my-6"></p>

<p>Tra i Paesi che per primi hanno colto le opportunità della VBHC troviamo la <strong>Svezia</strong>: tra gli esempi di maggior rilievo, a partire dal 2015 la <a href="https://www.karolinskahospital.com/" target="_blank" class="text-eh-petrol underline">struttura ospedaliera universitaria Karolinska</a>, tra le più importanti del Paese, è stata completamente rivista, <strong>abbandonando la tradizionale divisione per reparti e realizzando un modello organizzativo basato su 170 percorsi di cura</strong>, di cui 100 per la popolazione adulta e 70 per la popolazione in età pediatrica.</p>

<p>L’implementazione di un cambiamento così radicale su così vasta scala non è stata indolore: nel tempo, insieme alla bontà d’insieme del modello, sono emerse numerosi aspetti migliorabili, che hanno dato il là ad ulteriori sviluppi.</p>

<p>In <strong>Italia</strong> possiamo dire che il momento di svolta per la VBHC ha una data, l’<strong>8 novembre 2017</strong>: è proprio in questa giornata che, nel corso del World Business Forum di Milano, Michael Porter in persona ha presentato l’evento “<a href="https://www.sanita24.ilsole24ore.com/pdf/AEUUlGiE/f426d37cfa4999195721d4b9e45f9627.pdf" target="_blank" class="text-eh-petrol underline"><em>The Value Agenda for Italy – Le soluzioni operative della Value Based Health Care in Italia per rilancio e crescita del Servizio Sanitario Nazionale</em></a>” promosso da Medtronic Italia.</p>

<p><img src="https://easydoctor.io/wp-content/uploads/2023/12/THE-VALUE-AGENDA-FOR-ITALY.jpg" loading="lazy" class="w-full rounded-xl my-6"></p>

<p>A seguire anche <strong>nel nostro Paese la popolarità di questo modello è cresciuta nel tempo</strong>, in un susseguirsi di esperienze e retrospettive, come il webinar del 24 novembre 2021 di Harvard Business Review, sponsorizzato da Roche Diagnostic, intitolato “<a href="https://www.youtube.com/watch?v=HpjL3djpdWY" target="_blank" class="text-eh-petrol underline"><em>Implementare il Value Based Healthcare in Italia: il caso Humanitas</em></a>”, dove è stato illustrato e commentato un caso concreto di revisione value-based di un percorso clinico (tumore al seno) da parte dell’Istituto Clinico Humanitas.</p>

<p>Sempre Roche, a fine 2021, sostiene lo sviluppo di un White Paper da parte di Harvard Business Review Italia Analytic Services intitolato “<a href="https://www.hbritalia.it/userUpload/Implementare_il_Value_Based_Healthcare_in_Italia.pdf" target="_blank" class="text-eh-petrol underline"><em>Le sei priorità per implementare il Value Based Healthcare in Italia</em></a>”: in questo documento vengono esposti circa 20 casi che, perlomeno in parte, presentano aspetti in sintonia con il modello.</p>

<p>Questo numero evidenzia come l’<strong>adozione della Value-Based Healthcare in Italia sia ancora agli inizi</strong> e quindi come il potenziale che può esprimere è ancora elevatissimo.</p>

<p>Sempre Harvard Business Review a novembre 2023 propone <a href="https://www.hbritalia.it/novembre-2023/2023/11/06/news/lefficace-connubio-tra-value-based-healthcare-e-human-centred-design-15692/" target="_blank" class="text-eh-petrol underline">un interessante caso studio</a> di un’esperienza condotta dagli Istituti Clinici Scientifici Maugeri con il supporto di Takeda e di Your Business Partner, in cui il <strong>modello VBHC incontra la metodologia HCD</strong> (Human-Centered Design, in italiano Design Antropocentrico), una metodologia ormai consolidata che permette di progettare e realizzare, attraverso un processo iterativo, <strong>sistemi interattivi il più possibile adatti a migliorare l’esperienza delle persone</strong> in uno specifico contesto.</p>

<h2>Value-Based Healthcare e Digital Patient Engagement</h2>

<p>Proprio quest’ultima esperienza, in cui la Value-Based Healthcare ha trovato un naturale connubio con la metodologia HCD, mette in luce l’<strong>importanza del coinvolgimento dei pazienti per massimizzare l’impatto</strong> di iniziative basate sulla VBHC.</p>

<p>La capacità di e<strong>sperienze di Digital Patient Engagement ben impostate</strong> di supportare una migliore esperienza utente e, obiettivo ultimo, migliori esiti di salute, rende questa risorsa uno degli elementi fondamentali di qualsiasi progetto che segue il modello di Porter e Teisberg.</p>

<p>Il <strong>valore per i pazienti</strong>, nelle sue molteplici forme, viene misurato – anche grazie agli standard sviluppati da ICHOM – non solo tramite l’evidenza clinica delle analisi di laboratorio o dell’osservazione del paziente, ma anche tramite i <strong>PROM (Patient Reported Outcome Measures</strong>, misure di esito riportate dai pazienti), un tipo di misurazione in cui gli strumenti digitali di ingaggio dei pazienti possono fare al meglio da prima linea, per poi integrarsi in esperienze ancora più evolute.</p>

<p>Su questo fronte, come evidenziato in una <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10213745/" target="_blank" class="text-eh-petrol underline">ricerca sistemica pubblicata a maggio 2023 su Frontiers in Public Health</a>, siamo ancora agli inizi e <strong>abbiamo ampio margine per migliorare</strong>, anche grazie al Digital Patient Engagement, a vantaggio dei pazienti, dei professionisti della salute, delle singole strutture e dei sistemi sanitari.</p>

<p>VBHC (Value-Based Healthcare), HCD (Human-Centered Design), DPE (Digital Patient Engagement): dietro queste e molte altre sigle ci sono esperienze che hanno dimostrato di poter <strong>migliorare la qualità e la sostenibilità della cura</strong>, anche in sistemi universalistici come il nostro ed anzi, è proprio in Europa che, grazie all’attenzione per il “<a href="https://health.ec.europa.eu/system/files/2019-11/024_defining-value-vbhc_en_0.pdf" target="_blank" class="text-eh-petrol underline">valore per la società</a>”, che si aggiunge a quello personale, allocativo e tecnico, possiamo <strong>ambire ad una sanità in grado di rendere realmente tangibili i principi di universalità, equità e solidarietà</strong> così ben espressi dalla nostra Legge 833 del 23 dicembre 1978.</p>
    `
  }
];
