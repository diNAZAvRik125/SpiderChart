import React, {useState} from 'react'
import style from "../App.module.css";
import Quiz from "../Quiz";

export default function Button(props) {
    const [quizActive, setQuizActive] = useState(false)
    return(
        <div>
            <button className={style.small_btn} onClick={() => setQuizActive(true)}>Пройти тест</button>
            <Quiz active={quizActive} setActive={setQuizActive}/>
        </div>
    )
}