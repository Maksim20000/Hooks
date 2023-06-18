import React, {useContext} from 'react'
import {Context} from "./assets/context";

export default function TodoItem(props) {
    // поставлена ли галочка возле поля
    const {dispatch} = useContext(Context)

    const cls = ['todo']

    if(props.completed){
        cls.push('completed')
    }

    const toggleTodoCreator = {
        type: 'toggle-todo',
        id: props.id
    }

    const removeTodoCreator = {
        id: props.id,
        type: 'remove-todo'
    }

    return (
        <li className={cls.join(' ')}>
            <label>
                <input
                    type="checkbox"
                    checked={props.completed}
                    onChange = {() => dispatch(toggleTodoCreator)}
                />
                <span>{props.title}</span>

                <button
                    onClick={() => dispatch(removeTodoCreator)}
                    className="material-icons red-text"
                >
                    delete
                </button>
            </label>
        </li>
    )
}