import React, { useEffect } from 'react'

const EsempioUseEffect = () => {

    useEffect(()=>{
        console.log("Sono dentro lo useEffect")
        document.title="Cambio Titolo"
    })
        console.log("Sono fuori lo useEffect")
  return (
    <div>EsempioUseEffect</div>
  )
}

export default EsempioUseEffect