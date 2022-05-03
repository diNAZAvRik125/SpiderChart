import React from "react";
import "./quiz.css"

const Quiz = ({active, setActive}) => {
    return (
        <div className={active ? "quiz active" : "quiz"}>
            <div className={active ? "quiz__answers active" : "quiz__answers"}>
                <div>
                    <p>Поздравляем, вы прошли тест!</p>
                </div>
                <button className='Quiz-Close-button' onClick={() => setActive(false)}>Закрыть тест</button>
            </div>
        </div>
    )
}

export default Quiz;