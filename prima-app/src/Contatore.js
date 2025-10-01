import React,{useState} from 'react'

const Contatore = () => {
    const [cont,setCont]=useState(0);
    const aumenta=()=>{
        setCont(valoreAttuale=>valoreAttuale+1);
    };
    const diminusci=()=>{
        setCont(valoreAttuale=>{
            if(valoreAttuale>=1){
                return valoreAttuale-1
            }else{
                return valoreAttuale
            }
        });
    };

  return (
    <div>{cont}
    <button onClick={aumenta} className="btn btn-danger">Clicca per aumentare</button>
    <div><button onClick={diminusci} className="btn btn-success">Clicca per diminuire</button>
    </div>
    </div>
  )
}

export default Contatore