import "./App.css";
import FetchComponent from "./FetchComponent";
// import Clock from "./Clock";
import ListaNotizie from "./ListaNotizie";
import FetchComponent from "./FetchComponent";
// import Componente1 from "./Componente1";
// import { anagrafica } from "./dati/dati";
// import ComponentePersona from "./Esercizi/es1";
// import Tabellina from "./Esercizi/es2";
// import Stampanumeri from "./Esercizi/es3";
// import Contatore from "./Esercizi/es4";
// import ProfiloUtente from "./Esercizi/es";
// import Contatore from "./Contatore";
// import EsempioUseEffect from "./EsempioUseEffect";
// function getDate(parametroData) {
//   return (
//     parametroData.toLocaleDateString() +
//     " " +
//     parametroData.toLocaleTimeString()
//   );
// }
// const clicca = (e) => {
//   console.log(e)
//   alert("cliccato");
// }
const App = () => {
  // const [persone,setpersone]=useState(anagrafica);
  // const utenti = [
  //   { id: 1, nome: "Luca", cognome: "Bianchi", eta: 28, professione: "Web Developer", email: "luca.bianchi@example.com" },
  //   { id: 2, nome: "Sara", cognome: "Verdi", eta: 32, professione: "Graphic Designer", email: "sara.verdi@example.com" },
  //   { id: 3, nome: "Marco", cognome: "Rossi", eta: 24, professione: "Data Analyst", email: "marco.rossi@example.com" },
  //   { id: 4, nome: "Elena", cognome: "Neri", eta: 35, professione: "Project Manager", email: "elena.neri@example.com" },
  //   { id: 5, nome: "Giulia", cognome: "Russo", eta: 29, professione: "UX Designer", email: "giulia.russo@example.com" },
  // ];
  // const rows = [];
  // for (let i = 0; i < utenti.length; i += 3) {
  //   const gruppo = utenti.slice(i,i+3); //in questo modo prendiamo 3 utenti alla volta
  //   rows.push(
  //     <div className="row mb-4" key={i}>
  //     {gruppo.map((utente) => (
  //       <div className="col-md-4 mb-3" key={utente.id}>
  //         <ProfiloUtente utente={utente} />
  //       </div>
  //     ))}
  //   </div>
    // );
  
  
  return <>
  <FetchComponent></FetchComponent>
  </>
        
      }
    // <div className="App">
    //   <h1>Prima App React</h1>
    //   {/* <Contatore></Contatore>
    //   <EsempioUseEffect></EsempioUseEffect> */}

    
    // <div className="container mt-4">
    //   {rows} 
    // <div className="App">
    {/* <Tabellina num="2"></Tabellina>
    <Stampanumeri></Stampanumeri>
    <Contatore></Contatore> 
    <div class="container text-center">
    <div class="row">
    <div class="col">
      {persone[0].nome}
    </div>
    <div class="col">
      {persone[0].cognome}
    </div>
    <div class="col">
      {persone[0].eta}
    </div>
    </div>
    </div> 
      <h1>Prima App React {nome}</h1>
      <Anagrafica></Anagrafica>
      <Messaggio></Messaggio> 
      {persone.map((persona) => {
        return <Componente1 key={persona.id} {...persona}></Componente1>;
      })}
      <button onClick={clicca} className="btn btn primary">Cliccami</button>
      <Componente1 nome="Chiara" cognome="Mac" eta="26"></Componente1>
      <Componente1>Chiara</Componente1> modo senza attributi 
      <Componente1 {...persone[0]}/>
      <Componente1 {...persone[1]}/>
      <Componente1 nome={persone[1].nome} cognome={persone[1].cognome} eta={persone[1].eta}></Componente1> 
      <ComponentePersona>Chiara</ComponentePersona> modo senza attributi 
       {/* questo sotto se uso map  */}
      {/* <ComponentePersona {...persone[0]}/>
      <ComponentePersona nome={persone[1].nome} cognome={persone[1].cognome} eta={persone[1].eta}></ComponentePersona>
      <ComponentePersona nome="Chiara" cognome="Mac" eta="26"></ComponentePersona>
      <Clock timezone="-6" country="USA"></Clock>
      <Clock timezone="0" country="Italy"></Clock>
      <Clock timezone="7" country="Japan"></Clock>
      <h4>
        {new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString()}
      </h4>
      <h4>{getDate(new Date())}</h4>
      <h4>{getDate(new Date())}</h4>
      <h4>{getDate(new Date())}</h4>  */}

  //   </div>
  //   </div>
  //   </div>
  
  // );
// }; */}

export default App;
// abbiamo iniziato a strutturare un app con React
// componente carrello -> componente cliente ecc ecc */}
