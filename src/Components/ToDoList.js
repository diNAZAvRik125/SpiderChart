import React from 'react'
import Variants from './Variants'
import style from "../App.module.css";


export default function TodoList (props) {
    return(
        <ul className={style.todoStyle}>{
         props.todos.map(todo => {
             return <Variants todo={todo}/>
         })
        }
        </ul>
    )
}
