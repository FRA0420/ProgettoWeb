import React, {useState,useEffect} from 'react';
import Notizie from './Notizie';
import news from './datiNotizie';

const ListaNotizie = () => {
    const [TemaScuro, setTemaScuro] = useState(false);
    const [mostraNotizie,setMostraNotizie] = useState(true);

    useEffect(()=>{
        if (TemaScuro) {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    }, [TemaScuro]);

  return (
    <div>
        <h1>Elenco delle News</h1>
        <button onClick = {() => setTemaScuro(!TemaScuro)}>
            Cambia Tema
        </button>

        <button onClick={() => setMostraNotizie(!mostraNotizie)}>
            {mostraNotizie ? 'Nascondi News' : 'Visualizza News'}
        </button>

        {mostraNotizie && (
            <div> 
                {news.map((news) => (
                    <Notizie
                    key={news.id}
                    id={news.id}
                    titolo={news.titolo}
                    descrizione={news.descrizione}
                    />
                ))}
            </div>
        )}

    </div>
  );
}

export default ListaNotizie;