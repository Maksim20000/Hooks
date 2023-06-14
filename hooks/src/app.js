import React, {Component, useState} from 'react'
import TodoList from './TodoList'

// export class App extends Component {
//     state = {
//         todos: [
//             {id: 1, title: 'First todo', completed: false},
//             {id: 2, title: 'Second todo', completed: true},
//         ]
//     }
//
//     render() {
//         return (
//             <div className="container">
//                 <h1>Todo app</h1>
//
//                 <div className="input-field">
//                     <input type="text" />
//                     <label>Todo name</label>
//                 </div>
//
//                 <TodoList todos={this.state.todos} />
//             </div>
//         );
//     }
// }

export const App = () => {
    const [todos, setTodos] = useState([
            {id: 1, title: 'First todo', completed: false},
            {id: 2, title: 'Second todo', completed: true},
        ])

    const [todoTitle, setTodoTitile] = useState('')

    const onChangeTodoTitle = (e) => {
        setTodoTitile(e.target.value)
    }


    const addTodo = (event) => {
        if(event.key === 'Enter'){
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
    );

}