import React, {useState} from 'react'
import style from "../App.module.css";
import Quiz from "../Quiz";

export default function Button(props) {
    const [quizActive, setQuizActive] = useState(false)

    return(
        <div>
            <button className={style.small_btn} onClick={props.onClick}>{props.title}</button>
        </div>
    )
}