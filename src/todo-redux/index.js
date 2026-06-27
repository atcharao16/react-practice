import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react"
import { addTodo, removeTodo, markComplete } from './slices/todoslice';
import { v4 as uuid } from 'uuid'

export const Todos = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todos)
    console.log(todos)
    const handleAddTodo = () => {
        if (!search.trim())
            return
        dispatch(addTodo({
            id: uuid(),
            isCompleted: false,
            text: search
        }));
        setSearch('')
    }

    const handleDeleteButton = (id) => {
        dispatch(removeTodo(id))
    }
    const handleCheckbox = (id) => {
        dispatch(markComplete(id))
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>ToDo</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'10px' }}>

                <div>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="enter.."></input>
                    <button onClick={handleAddTodo}>Add</button>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column-reverse' ,justifyContent: 'center', alignItems: 'center' }}>
                {
                    todos && todos.length > 0 && todos.map(todo => {
                        return (
                            <div key={todo.id} style={{marginBottom : '5px'}}>
                                
                                    <input type='checkbox' onClick={() => handleCheckbox(todo.id)} ></input>
                                    <label style={{ marginRight: '100px' }}>{todo.text}</label>
                                    <button onClick={() => handleDeleteButton(todo.id)}>Delete</button>
                                
                            </div>
                        )
                    })
                }

            </div>

        </>
    )
}