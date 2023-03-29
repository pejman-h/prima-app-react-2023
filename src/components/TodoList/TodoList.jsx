import { useState } from "react";


function TodoList() {

    const [lista, setLista] = useState([]);
    const [elemento, setElemento] = useState("")

    let gestisciClick = () => {
       /*  console.log("ho cliccato");
        let input = document.getElementsByTagName("input")[0];
 */
        
        setLista([...lista, elemento])
        setElemento("")
    };

    let clickChange = (e) => {
        setElemento(e.target.value)
    }


    return (
        <>
      <div className="div1">
        <h1>Todo List</h1>
        <input type="text" onChange={(e) => clickChange(e) } value={ elemento || ""} />
        <button onClick={() => gestisciClick()}>Add</button>
        <p>Numero task: {lista.length}</p>
        <ul>
            {lista.map((elemento , index) => (
                <li key={index}> 
                {elemento}
                </li>
            ))}
        </ul>
      </div>
        </>
    );
}

export default TodoList;