import { useState } from "react";

function TodoForm ({array,funzione}){
const [elemento , setElemento] = useState("")

let gestisciClick = () => {
    funzione([...array, elemento])
    setElemento("")
}

let clickChang = (e) =>{
    setElemento(e.target.value)
}

    return (
        <>
        <h1> Todo List</h1>
        <input type="text" onChange={(e) => clickChang(e)} value = { elemento || ""} />
        <button onClick={() => gestisciClick()}>Add Task</button>
        </>
    );
}

export default TodoForm;