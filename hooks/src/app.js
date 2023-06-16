import React, {useEffect, useState} from 'react'
import TodoList from './TodoList'
import {Context} from './assets/context'

// todos: [
//     {id: 1, title: 'First todo', completed: false},
//     {id: 2, title: 'Second todo', completed: true},
// ]

export const App = () => {
    const [todos, setTodos] = useState([])
    const [todoTitle, setTodoTitile] = useState('')

    const onChangeTodoTitle = (e) => {
        setTodoTitile(e.target.value)
    }
    // component did mount
    useEffect(() => {
        let raw = localStorage.getItem('todos') || []
        // "[{\"id\":1686789727401,\"title\":\"1221\",\"completed\":false},{\"id\":1686789729147,\"title\":\"1221\",\"completed\":false}]"
        // если приходит вот такая фигня использую этот метод
        setTodos(JSON.parse(raw))
    }, [])


    const handleClick = () => {
        console.log('click')
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)
        // save on localHost dataBase
        localStorage.setItem('todos', JSON.stringify(todos))

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [todos])


    const addTodo = (event) => {
        if (event.key === 'Enter') {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    title: todoTitle,
                    completed: false
                }
            ])
            setTodoTitile('')
        }
    }


    return (
        <Context.Provider value={{
            toggleTodo, removeTodo
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

                 <TodoList todos={todos}/>
            </div>
        </Context.Provider>
    );

}