import { useEffect, useState } from "react";



const GalleriaFoto = () => {
    let url = "https://jsonplaceholder.typicode.com/photos?_limit=10"
    const [foto,setFoto] = useState([]);
    const [staCaricando,setStaCaricando] = useState(true);
    const [errore,setErrore] = useState(null);
    useEffect (() =>{
        // creo una funzione async/await dentro lo useeffect
        const caricaFoto = async () => {
            try {
                const risposta = await fetch(url);
            const dati = await risposta.json();
            setFoto(dati);
            } catch (err) {
                setErrore("Si è verificato un errore durante il caricamento dei dati")
            } finally {
                setStaCaricando(false);
            }
        };
        // chiamo la funzione async, se non lo facessi non partirebbe
        caricaFoto()
    },[]);

    if (staCaricando) {
        return <p>Caricamento in corso...</p>;
    }

    if (errore) {
        return <p>{errore}</p>
    }

    return (
        <div>
            <h2>Galleria Foto</h2>
            {foto.map((f)=>(
                <div key={f.id}>
                <img 
                src={f.thumbnailUrl}
                alt={f.title}/>
                <p>{f.title}</p>
                </div>
            ))}
        </div>
    )
};

export default GalleriaFoto;