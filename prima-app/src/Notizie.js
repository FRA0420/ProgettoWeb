import React from 'react'

const Notizie = ({id, titolo, descrizione}) => {
  return (
    <div style={{
        // codice preso da bootstrap
        border: '1px solid gray',
        borderRadius: '8px',
        padding: '12px',
        marginBottom: '12px',
        boxShadow: '2px 2px 6px rgba(0,0,0,0.1)'
    }}> 
        <h3>ID: {id}</h3>
        <h3>{titolo}</h3>
        <h3>{descrizione}</h3>
    </div>
  );
};

export default Notizie