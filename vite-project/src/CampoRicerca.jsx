import { useState } from "react"

const CampoRicerca = () => {
    const [testoRicerca,setTestoRicerca] = useState("")
    const cambiaRicerca = (e) => {
        // basta questo per aggiornare lo stato del testo ricerca in quel che si inserisce dentro l'input
        setTestoRicerca(e.target.value)  
    }
    return (
        <div>
            <input type="text" value={testoRicerca} onChange={cambiaRicerca} placeholder="Scrivi qui"/>
            <p>Stai cercando: {testoRicerca}</p>
        </div>
    )
};

export default CampoRicerca;