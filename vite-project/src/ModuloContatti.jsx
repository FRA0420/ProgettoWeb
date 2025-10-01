import { useState } from "react";

const ModuloContatti = () => {
    const [formData,setFormData] = useState({
        nome:"",
        email:"",
        messaggio:""
    });
    const cambiaStato = (e) => {
        const {name,value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:value,
        }));
    };

    const setSubmit = (e) => {
    e.preventDefault(); // evita il refresh della pagina
    console.log("Dati inviati:", formData);
    };

    return (
        <div className="container">
        <form className="row g-3" onSubmit={setSubmit}>
        <div className="col-md-6">
        <label htmlFor="inputNome" className="form-label">Nome</label>
        <input type="text" className="form-control" id="inputNome" name="nome" value={formData.nome} onChange={cambiaStato}/>
        </div>
        <div className="col-md-6">
        <label htmlFor="inputNome" className="form-label">Email</label>
        <input type="text" className="form-control" id="inputNome" name="email" value={formData.email} onChange={cambiaStato}/>
        </div>
        <textarea type="text" name="messaggio" placeholder="Scrivi qui" value={formData.messaggio} onChange={cambiaStato}></textarea>
        <div className="col-12">
        <button type="submit" className="btn btn-primary">Invia</button>
        </div> 
        </form>
        </div>
    )
};

export default ModuloContatti;