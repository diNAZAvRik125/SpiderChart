import React from 'react'

export default function Variants({todo}){
    return <li key={todo}>
        <p>
            <input type="checkbox"/>
            {todo.text}
        </p>
    </li>
}