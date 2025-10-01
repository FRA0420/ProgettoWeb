import React from 'react'

const ProfiloUtente = ({utente}) => {
    const cliccaqui = () => {
        alert(
        `Dettagli Utente: \n` +
        `Nome: ${utente.nome} ${utente.cognome} \n` +
        `Età: ${utente.eta}\n` +
        `Professione: ${utente.professione}\n` +
        `Email: ${utente.email}`
        );
    };
  return ( 
    

    <div className="card h-100">
        <div className="card-header text-center">
    <h5>{utente.nome} {utente.cognome}</h5>
    </div>
    <div className="card-body text-center">
        <h6>Età: {utente.eta}</h6>
        <h6>Professione: {utente.professione}</h6>
        <h6>Email: {utente.email}</h6>
    </div>
    <div className="card-footer text-center">
    <button onclick={cliccaqui}>
        Mostra Dettagli
    </button>
  </div>
</div>
);
};

export default ProfiloUtente;