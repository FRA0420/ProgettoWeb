import React, { useContext, useRef } from "react";
import { AppContext } from "./ToDoApp";
import App from "../App";
const TodoForm = ({onAddTask}) => {
  const [addTask,onAddTask]=useContext(AppContext);
  
  const textRef = useRef(null);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(textRef.current.value.trim()){
      onAddTask(textRef.current.value)
    }else{
      alert("inserisci un task valido")
    }

  }
  return (
    <form className="d-flex mb-3" onSubmit={handleSubmit}>
      <input type="text" className="form-control me-2" ref={textRef}></input>
      <button className="btn btn-primary">Inserisci</button>
    </form>
  );
};

export default TodoForm;