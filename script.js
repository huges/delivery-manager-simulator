const quotes = [
    "Non si può fare.",
    "Non si può fare e se lo dobbiamo fare costa tantissimo.",
    "Si può fare, ma costa tantissimo.",

    "No.",
    "Mmm...",
    "Mmm... No.",
    "Non credo.",
    "È impossibile.",

    "È colpa del CMS service.",
    "Deve essere colpa di Bagnasco.",
    "Avete sentito CampDev.",

    "Senti Alberto.",
    "Chiedi a Paolo.",
    "Il menù lo fa Giulia.",
    "Dite a Isabella di fare deploy.",

    "Col tempo e la pazienza si può fare tutto.",
    "Sono 50 euro.",
    "Il legacy non perdona.",
    "Ogni bug ha una sua dignità.",

    "Questo in produzione non mi piace.",
    "Qui sento odore di workaround.",
    "Apriamo un ticket.",
    "Mi sembra ottimismo prematuro.",

    "Se lo facciamo bene costa il doppio.",
    "Non è un problema tecnico, è organizzativo.",
    "State sottovalutando il rischio.",
    "Prima sentiamo Paolo.",

    "Non è un bug. È comportamento emergente.",
    "Questa la paghiamo tra sei mesi.",
    "Facciamo un preventivo e ne riparliamo.",
    "Per me manca un piano B.",
    "Vi state dimenticando del SEO",
    "Questo non funzionerà mai su mobile.",
    "Bella la grafica, ma non capisco cosa dovremmo fare.",
    "Questo requisito viene davvero dal business?",
    "Il problema non è adesso. Sarà la manutenzione.",
    "Mi sembra una soluzione coraggiosa. Ma non vedo eroi qui.",
    "Stiamo costruendo debito tecnico a tasso variabile.",
    "E tutto questo dovrebbe gestirlo Mara? Da sola? E lei lo sa?",
    "Oggi la solution gira sul Mac di Domenico? Deve essere un giorno fortunato.",
    "Se oggi Fabio è di buon umore, fatelo fare a lui.",
    "Se si parla di SEO chiedi a Marco.",
    "Damiano, manda online i Meta di Vito.",
    "Qualcuno tranquillizzi Mery, hanno solo respinto l'app IOS.",
    "Oggi facciamo deploy, ma non ditelo a Laura.",
    "Bello, a che serve?",
    "Gli utenti cliccano solo i primi due link, perché non ne aggiungiamo altri cento che nessuno vedrà?",
    "Non è un bug, è una feature.",
    "Noemi, metti 3 punti e chiudi la schedina.",
    "Fai testare alla Cevolani, che è sul pezzo",
    "Giulia, falliscono i test su Octopus, prova a rilanciarli.",
    "Se il deploy fallisce, chiedi a Julio!",
    "La sitemap non si aggiorna da 3 mesi? Scrivi a Crabu, si sarà bloccata la replica.",
    "Se si tratta di Algolia, ora devi parlare con Alberto.",
    "30 problems su Dynatrace? Direi che è tutto normale.",
    "Almeno il piano C deve essere fattibile.",
];

const easterEggQuotes = [
    "Per una volta non è colpa di Bagnasco. Strano.",
    "Deployatelo pure. Mi fido.",
    "Questa quasi quasi mi piace.",
    "Per me possiamo andare in produzione.",
    "Isabella ha ragione, ma non diteglielo.",
    "Questo progetto mi piace. Peccato che sia impossibile da realizzare.",
];

const miracleQuotes = [
    "Per me possiamo andare in produzione rispettando i tempi.",
    "Non serve nemmeno un workaround. Impossibile.",
    "Nessun bug? Non ci credo.",
    "Dallo showcase non sono arrivate richieste di modifica? Ce le chiederanno appena andiamo in produzione.",
    "Andiamo online prima che se ne accorgano.",
    "Carrelli a zero, forse è il caso di scrivere al NOC.",
];
/*
function getRandomQuote(){

 let roll=Math.random();

 if(roll < 0.003){
   return miracleQuotes[
      Math.floor(Math.random()*miracleQuotes.length)
   ];
 }

 if(roll < 0.02){
   return easterEggQuotes[
      Math.floor(Math.random()*easterEggQuotes.length)
   ];
 }

 return quotes[
    Math.floor(Math.random()*quotes.length)
 ];
}

function generateQuote() {
    document.getElementById("quote").innerText = getRandomQuote();
}
    */

let lastQuote = "";

function getRandomQuote(){
 let quote;
 let type="normal";

 do {
   let roll=Math.random();

   if(roll < 0.01){
      type="miracle";
      quote = miracleQuotes[
       Math.floor(Math.random()*miracleQuotes.length)
      ];
   }
   else if(roll < 0.03){
      type="easter";
      quote = easterEggQuotes[
       Math.floor(Math.random()*easterEggQuotes.length)
      ];
   }
   else{
      type="normal";
      quote = quotes[
       Math.floor(Math.random()*quotes.length)
      ];
   }
 } while(quote===lastQuote);

 lastQuote=quote;
 return {quote,type};
}

function generateQuote(){
 const result=getRandomQuote();
 const box=document.getElementById('quote');
 const anomaly=document.getElementById('anomaly');

 box.innerText=result.quote;
 anomaly.innerText='';
 box.className='';

 if(result.type==='miracle'){
   box.classList.add('miracle');
   anomaly.innerText='⚠ Reality anomaly detected';
 }
 else if(result.type==='easter'){
   box.classList.add('easter');
 }
 else{
   box.classList.add('normal');
 }
}