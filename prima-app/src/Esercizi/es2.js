import React from 'react'

const Tabellina = ({num}) => {
    const calcolo = [0,1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
    <h1>Tabellina del {num}:</h1>
    {calcolo.map( i =>(
        <div key={i}>
        {num * i}
        </div>
    ))}
    </div>
  )
}

export default Tabellina