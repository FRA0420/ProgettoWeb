import React from 'react'
import { useState } from 'react';

const Termo = () => {
    const [temp,setTemp] = useState(20);

    const aumenta = () => {
        setTimeout(() => {
            setTemp((t)=>t+1)
        },2000);};

    const diminuisci = () => {
        setTimeout(() => {
            setTemp((t) => t-1)
        },2000);
    };
    
  return (
    <>
    <div>La temperatura è di {temp} gradi </div>
    <button onClick={aumenta}>Aumenta</button>
    <button onClick={diminuisci}>Diminuisci</button>
    </>
  )
}

export default Termo;