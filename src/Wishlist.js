import { useState } from "react";
import {v4 as uuid} from 'uuid';

function Wishlist(){
    const [todo, setToDo] = useState();
    const [todolist, setToDoList] = useState([]);

    const ontodochange = (event)=>{
        setToDo(event.target.value)
    }

    const addToDo = () => {
        setToDoList([...todolist, {id : uuid(), todo : todo, isCompleted : false}]);
        setToDo('')
    } 

    const checkComplete = (id) => {
        const updatedList = todolist.map(task => task.id === id ? {...task, isCompleted : !task.isCompleted}: task);
        console.log(updatedList)
        setToDoList(updatedList)
    }

    const deleteClick = (id) => {
        const resultantlist = todolist.filter(task => task.id !== id);
        setToDoList(resultantlist);
    }
    return(
        <>
        <h2>My Wishlist</h2>
        <div>
            <input value = {todo} type = "text" placeholder="what do you want to do.." onChange={ontodochange}></input>
            <button onClick={addToDo}>Add</button>
        </div>
        <div>
            {
                todolist.map(task => <>
                    <div>
                        <input type="checkbox" onChange={() => checkComplete(task.id)}></input>
                        <span>{task.todo}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteClick(task.id)}>Delete</button>
                    </div>
                </>)
            }
            
        </div>
        </>
    )
}

export default Wishlist;