import React from "react";

// const Componente1 = (props) => {

const Componente1 = ({nome,cognome,eta}) => {
  return (
    // <div>Componente1 {props.children}</div>  #quelli commentati sono la stessa cosa ma con scritto props.children e props dentro le parentesi (sintassi più lunga)
    <>
      <div
        style={{
          color: "red",
          fontWeight: "600",
          border: "1px #000 solid",
          margin: "15px",
          padding: "15px",
          backgroundColor:"orange"
        }}
      >
        {nome} {cognome} di anni {eta}
        <Anagrafica></Anagrafica>
        <Messaggio></Messaggio>
      </div>
      <footer></footer>
    </>
  );
};

const Anagrafica = () => {
  return <div>Anagrafica</div>;
};

const Messaggio = () => {
  return <div>Messaggio</div>;
};

export default Componente1;
