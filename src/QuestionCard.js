import React from "react";
import Button from "./Components/Button";
import style from "./App.module.css";
import TodoList from "./Components/ToDoList";
import {DEFAULT_TODOS} from "./DefaultTodos";

const QuestionCard = (props) => {
    const {question, isLast, onNextClick} = props;

    const todos = question.todos ? question.todos : DEFAULT_TODOS;
    const title = isLast ? "завершить" : "далее";

    return (
        <div className={style.quizQuastions}>
            <div>
                <div className={style.TextUpStile}>Пройдите тест для опредиления вашего уровня компетенций</div>
                <div className={style.TextDouwstile}>{question.title}</div>
            </div>
            <TodoList todos={todos} />
            <Button onClick={console.log("next")} title={title} />
        </div>
    );
    };

export default QuestionCard;