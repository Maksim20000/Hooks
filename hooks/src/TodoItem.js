import React, {useContext} from 'react'
import {Context} from "./assets/context";

export default function TodoItem({title, id, completed}) {
    // поставлена ли галочка возле поля
    const {toggleTodo, removeTodo} = useContext(Context)

    const cls = ['todo']

    if(completed){
        cls.push('completed')
    }

    return (
        <li className={cls.join(' ')}>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange = {() => toggleTodo(id)}
                />
                <span>{title}</span>

                <button
                    onClick={() => removeTodo(id)}
                    className="material-icons red-text"
                >
                    delete
                </button>
            </label>
        </li>
    )
}