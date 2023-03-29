import { useState } from "react";
import TodoForm from "../TodoForm";
import TodoPrintList from "../TodoPrintList";

function Todo (){

    const [lista, setLista] = useState([])
    return (

        <>
        <p>sono nel Todo</p>
        <TodoForm array = {lista} funzione = {setLista}/>
        <TodoPrintList array={lista}/>

        </>
    );
}

export default Todo;