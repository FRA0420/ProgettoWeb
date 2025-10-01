import { useState } from "react";

const Termostato = () => {
    const [temperatura,setTemperatura] = useState(0);
    const aumentaTemperatura = () => {
        setTemperatura((t) => t+1);
    };
    const diminuisciTemperatura = () => {
        setTemperatura((t) => t-1)
        
    };
    return (
        <div>
            <h1>{temperatura}</h1>
            <button onClick={aumentaTemperatura}>Aumenta</button>
            <button onClick={diminuisciTemperatura}>Diminuisci</button>
        </div>
    )
};

export default Termostato;