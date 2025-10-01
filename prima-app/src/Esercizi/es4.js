import React from 'react'

const Contatore = () => {
    const lista2 = [];
    for (let i = 0; i <= 20; i += 2){
        lista2.push(i)
    }
  return (
    <div>Contatore
        {lista2.map(i =>(
            <div key={i}>
                {i} </div>
        ))}
    </div>
        
  )
}

export default Contatore