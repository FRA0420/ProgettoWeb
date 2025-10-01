import { useState,useEffect} from "react"

const AggiornaTitolo = () => {
    const [nome,setNome] = useState("");

    const cambiaTitolo = (e) => {
        setNome(e.target.value);
    };

    useEffect(() => {
        // succede dopo ogni render 
        if (nome ==="") {
            document.title="Benvenuto!"
        } else {
        document.title=`Ciao, ${nome}`
        };
        // nell'array delle dipendenze ci metto nome 
        // perchè si esegue ogni volta che si aggiorna nome
    }, [nome]);
    return (
        <div>
            <input type="text" placeholder="Scrivi qui il tuo nome" 
            value={nome} onChange={cambiaTitolo}/>
            {/* questo p è per vedere cosa fa lo usestate nel frattempo */}
            <p>Stai scrivendo: {nome}</p>
        </div>
    )
};

export default AggiornaTitolo;