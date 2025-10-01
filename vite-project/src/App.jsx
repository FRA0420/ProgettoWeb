import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saluto from './Saluto'
import CardUtente from './CardUtente'
import MenuRistorante from './MenuRistorante'
import Termostato from './Termostato'
import CampoRicerca from './CampoRicerca'
import MessaggioSegreto from './MessaggioSegreto'
import AggiornaTitolo from './AggiornaTitolo'
import GalleriaFoto from './GalleriaFoto'
import CartaUtente from './CartaUtente'
import Ristorante from './Ristorante'
import Termo from './Termo'
import ModuloContatti from './ModuloContatti'
import MenuEsercizi from './MenuEsercizi'
import ToDoApp from './ToDoList/ToDoApp'
import ToDoForm from './ToDoList/ToDoForm'
import ToDoItem from './ToDoList/ToDoItem'
import ToDoList from './ToDoList/ToDoList'
import MainComponent from './useContent/MainComponent'


function App() {
  const persone = [{
    nome:"Roberto",
    mail:"rob.rob.it",
    imgUrl:"https://placehold.co/100x100"
  },
  {
    nome:"Robe",
    mail:"rob.rob.it",
    imgUrl:"https://placehold.co/100x100"
  },
  {
    nome:"Teo",
    mail:"rob.rob.it",
    imgUrl:"https://placehold.co/100x100"
  }
]
  return (
    
    <div>
      <MainComponent></MainComponent>
    </div>
    
  )}

export default App;
