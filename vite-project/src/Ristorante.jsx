import piatti from "./piatti";
import React from 'react'

const Ristorante = () => {
  return (
    <ul className="list-group">
        {
            piatti.map((p)=>{
                return (<li key={p.id} className="list-group-item d-flex justify-content-between">
                    <span>{p.nome}</span> 
                    <span className="badge bg-primary">{p.prezzo}</span>
                    </li>)
            })
        }
    </ul>
  )
}

export default Ristorante;