import React, {useEffect,useState} from 'react'

const CleanUp = () => {
    const [size,setSize]=useState(window.innerWidth)
    const dimensione =()=>{
        setSize(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize",dimensione)
        return (()=>{
            
        })
    })
  return (
    <div>CleanUp</div>
  )
}

export default CleanUp