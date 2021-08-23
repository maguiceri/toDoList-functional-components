import React, {useState} from 'react'
import Task from '../Task'

function Tasks(){
    const [inputValue, setInputValue] = useState("") //los inputs por defecto devuelven un string
    const [tasks, setTasks] = useState([])

    function handleChange(e){
        setInputValue(e.target.value)
    }
    function handleClick(){ 
        if(inputValue != ""){
            setTasks([...tasks, inputValue]) //cloname el array tasks y agregale lo que tiene inputValue//setTasks(tasks.push(inputValue)) TASK.PUSH DEVUELVE LA CANTIDAD DE ELEMENTOS QUE TIENE UN ARRAY DESPUES DE INSERTARR
            setInputValue("")
        }
    }
    return(
        <div>
            <input type="text" onChange={handleChange} value={inputValue}></input>
            <button onClick={handleClick}>Agregar</button>
            <ul>
                {tasks.map((name, key)=> {
                    return <Task name={name} key={key} />
                })}
            </ul>
        </div>
    )
}

export default Tasks