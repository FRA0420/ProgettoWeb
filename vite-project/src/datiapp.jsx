function App() {
  const persone = [{
    nome:"Roberto",
    mail:"rob.rob.it",
    imgUrl:"https://placehold.co/100x100"
  },
  {
    nome:"Robe",
    mail:"rob.rob.it",
    imgUrl:"https://placehold.co/100x100"
  },
  {
    nome:"Teo",
    mail:"rob.rob.it",
    imgUrl:"https://placehold.co/100x100"
  }
]
  return (
    <>
    <div>
      <div>
      <Saluto/>
      <Termostato/>
      <CampoRicerca/>
      </div>
      <div>
        <CardUtente
        nome="Chiara"
        email="trallallero"
        img="https://placehold.co/100x100"/>
        <CardUtente
        nome="Leonardo"
        email="blablablabla"
        img="https://placehold.co/100x100"/>
      </div>
      <div>
        <MenuRistorante/>
      </div>
      <div><MessaggioSegreto/>
      <AggiornaTitolo/>
      <GalleriaFoto/></div>
      <div className='d-flex justify-content-center mt-4'><CartaUtente 
      nome="Chiara"
      mail="ch.@.com"
      imgUrl="https://placehold.co/100x100"/>
      {/* usiamo lo spread operator */}
      <CartaUtente {...persone[0]}/>
      </div>
      <div className='row'>
        {
          persone.map((p) =>{
            return (<div className='col'>
              <CartaUtente {...p}></CartaUtente>
            </div>)
          })
        }
      </div>
      <ToDoApp></ToDoApp>
      <Ristorante/>
      <Termo/>
      <ModuloContatti></ModuloContatti>
      <MenuEsercizi></MenuEsercizi>
    </div>
    </>
  )}