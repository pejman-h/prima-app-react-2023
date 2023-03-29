
function TodoPrintList ({array}) {

    return(
        <>
         {/* <p>Numero task: {lista.length}</p> */}
         <ul>
            {array.map((elemento , index) => (
                <li key={index}> 
                {elemento}
                </li>
            ))}
        </ul>
        </>
    );
}

export default TodoPrintList;