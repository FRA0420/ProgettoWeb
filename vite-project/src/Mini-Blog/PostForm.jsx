import { useState } from "react"

const PostForm = ({aggiungiPost}) => {
    const [formData,setData] = useState({
        titolo:"",
        contenuto:""
    });

    const cambiaStato = () => {
        const {name,value} = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const [sottoscritto, setSottoscritto] = useState(false);

    const cambiaSottoscrizione = () => {
        e.preventDefault();
        if (
            formData.titolo !== "" &&
            formData.contenuto !== ""
        ) {
            setSottoscritto(true);
        } else {
            alert("compila tutti i campi!")
        }

    // infine passo i dati al genitore e resetto il form
    aggiungiPost(formData);
    setData({titolo:"",contenuto:""});
    
    };

    


    return (
        <div className="container">
        <form className="row g-3" onSubmit={cambiaSottoscrizione}>
        <div className="col-md-6">
        <label htmlFor="inputTitolo" className="form-label">Titolo</label>
        <input type="text" className="form-control" id="inputTitolo" name="titolo" value={formData.titolo} onChange={cambiaStato}/>
        </div>
        <div className="col-md-6">
        <label htmlFor="inputContenuto" className="form-
        label">Contenuto</label>
        <input type="text" className="form-control" id="inputContenuto" name="contenuto" value={formData.contenuto} onChange={cambiaStato} />
        </div>
        <div className="col-12">
        <button type="submit" className="btn btn-primary">Invia</button>
        </div>
        </form>
        {sottoscritto && <p>Form inviato con successo"!</p>}
        </div>
    )
};

export default PostForm;