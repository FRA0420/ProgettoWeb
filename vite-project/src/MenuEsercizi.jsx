import { useState } from "react";
import Saluto from "./Saluto";
import CardUtente from "./CardUtente";
import GalleriaFoto from "./GalleriaFoto";
import CampoRicerca from "./CampoRicerca";
import AggiornaTitolo from "./AggiornaTitolo";
import MenuRistorante from "./MenuRistorante";
import Termostato from "./Termostato";
import MessaggioSegreto from "./MessaggioSegreto";
import ModuloContatti from "./ModuloContatti";
import BlogApp from "./Mini-Blog/BlogApp";
import PostForm from "./Mini-Blog/PostForm";
import PostList from "./Mini-Blog/PostList";
import ToDoApp from "./ToDoList/ToDoApp";
import ToDoForm from "./ToDoList/ToDoForm";
import ToDoItem from "./ToDoList/ToDoItem";
import ToDoList from "./ToDoList/ToDoList";

const MenuEsercizi = () => {
    const [cambia,setCambia] = useState("MenuEsercizi");
    const componentePagina = () => {
        switch (cambia){
            case "Saluto":
                return <Saluto></Saluto>;
            case "Card Utente":
                return <CardUtente></CardUtente>;
            case "Galleria Foto":
                return <GalleriaFoto></GalleriaFoto>;
            case "Campo Ricerca":
                return <CampoRicerca></CampoRicerca>;
            case "Aggiorna Titolo":
                return <AggiornaTitolo></AggiornaTitolo>;
            case "Menu Ristorante":
                return <MenuRistorante></MenuRistorante>;
            case "Termostato":
                return <Termostato></Termostato>;
            case "Messaggio Segreto":
                return <MessaggioSegreto></MessaggioSegreto>;
            case "Modulo Contatti":
                return <ModuloContatti></ModuloContatti>;
            case "Blog App":
                return <BlogApp></BlogApp>;
            case "To Do App":
                return <ToDoApp></ToDoApp>;
        }
    };

    return (
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
          <button class="nav-link" onClick={() => setCambia("Saluto")}>Saluto</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" onClick={() => setCambia("Card Utente")}>Card Utente</button>
        </li>
        <li class="nav-item">
          <button class="nav-link"  onClick={() => setCambia("Galleria Foto")}>GalleriaFoto</button>
        </li>
        <li class="nav-item">
          <button class="nav-link"  onClick={() => setCambia("Modulo Contatti")}>ModuloContatti</button>
        </li>
        <li class="nav-item">
          <button class="nav-link"  onClick={() => setCambia("Aggiorna Titolo")}>Aggiorna Titolo</button>
        </li>
        <li class="nav-item">
          <button class="nav-link"  onClick={() => setCambia("Menu Ristorante")}>Menu Ristorante</button>
        </li>
        <li class="nav-item">
          <button class="nav-link"  onClick={() => setCambia("Campo Ricerca")}>Campo Ricerca</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" onClick={() => setCambia("Messaggio Segreto")}>Messaggio Segreto</button>
        </li>
        <li class="nav-item">
          <button class="nav-link"  onClick={() => setCambia("Termostato")}>Termostato</button>
        </li>  
        <li class="nav-item">
          <button class="nav-link"  onClick={() => setCambia("Blog App")}>Blog App</button>
        </li> 
        <li class="nav-item">
          <button class="nav-link"  onClick={() => setCambia("To Do App")}>To Do App</button>
        </li> 
      </ul>
    </div>
  </div>
</nav>
{componentePagina()}
</div>

    )
};

export default MenuEsercizi;