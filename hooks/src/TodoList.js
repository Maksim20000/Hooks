import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
    return (
        <ul>
            {props.todos.map(item => <TodoItem key={item.id} {...item} />)}
        </ul>
    )
}