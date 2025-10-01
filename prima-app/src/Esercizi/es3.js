import React from 'react'

const Stampanumeri = () => {
    const lista = [];
for (let i = 0; i <= 10; i++) {
    lista.push(i)}
    
  return (
    <div> Stampanumeri 
        {lista.map(i => (
            <div key={i}>
                {i} </div>
        ))}
    </div>
  )
}

export default Stampanumeri