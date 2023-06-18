import React, {useEffect, useReducer, useState} from 'react'
import TodoList from './TodoList'
import {Context} from './assets/context'
import {Reducer} from "./reducer";

// todos: [
//     {id: 1, title: 'First todo', completed: false},
//     {id: 2, title: 'Second todo', completed: true},
// ]

export const App = () => {
    // const [todos, setTodos] = useState([])
    const [todoTitle, setTodoTitile] = useState('')

    const [state, dispatch] = useReducer(Reducer, JSON.parse(localStorage.getItem('todos')))

    const onChangeTodoTitle = (e) => {
        setTodoTitile(e.target.value)
    }


    const handleClick = () => {
        console.log('click')
    }

    useEffect(() => {
        // save on localHost dataBase
        localStorage.setItem('todos', JSON.stringify(state))

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [state])


    const addTodo = (event) => {
        if (event.key === 'Enter') {
            dispatch({
                type: 'add',
                title: todoTitle
            })

            setTodoTitile('')
        }
    }

    return (
        <Context.Provider value={{
            dispatch
        }}>
            <div className="container">
                <h1>Todo app</h1>

                <div className="input-field">
                    <input type="text"
                           value={todoTitle}
                           onChange={onChangeTodoTitle}
                        // при нажатиит на enter добавляем todo
                           onKeyPress={addTodo}
                    />
                    <label>Todo name</label>
                </div>

                 <TodoList todos={state}/>
            </div>
        </Context.Provider>
    );

}