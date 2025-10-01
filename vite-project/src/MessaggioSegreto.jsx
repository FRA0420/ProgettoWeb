import { useState } from "react"

const MessaggioSegreto = () => {
    const [mostra,setMostra] = useState(false);
    
    const cambiaVisual = () => {
        // !prev inverte da quello che era prima a quello dopo (da false a true e viceversa)
        setMostra((prev) => !prev);
    };

    return (
        <div>
            <button onClick={cambiaVisual}>
                {/* ? : operatore ternario che se
                è vero sul bottone scrive 'Nascondi messaggio' 
                se è falso scrive 'Mostra messaggio' */}
                {mostra ? "Nascondi Messaggio" : "Mostra Messaggio"}
            </button>
            {/* qui appunto se mostra è vero fa vedere il messaggio segreto */}
            {mostra && <p>messaggio segreto</p>}
        </div>
    )
};

export default MessaggioSegreto;