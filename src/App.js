import React, {useState} from "react"
import TodoList from "./Components/ToDoList"
import style from "./App.module.css"
import Button from "./Components/Button"
import GazpromLogo from "./Components/GazpromLogo";
import Quiz from "./Quiz";

function App() {
    const [quizActive, setQuizActive] = useState(false)
    const quastion = [
        {
            id: 1,
            text: "Метод Лифо",
            comleted: false,
        },
        {
            id: 2,
            text: "Метод скользящей целой",
            comleted: false,
        },
        {
            id: 3,
            text: "Метод поштучной оценки",
            comleted: false,
        },
        {
            id: 4,
            text: "Метод средней стоимости",
            comleted: false,
        },
        {
            id: 5,
            text: "Метод индексированной стоимости",
            comleted: false,
        },
        {
            id: 6,
            text: "Метод ФИФО",
            comleted: false,
        },
    ]
    const [todos, setTodos] = useState(quastion)
    return (
        <div>
            <GazpromLogo></GazpromLogo>
            <div className={style.quizQuastions}>
                <div>
                    <div className={style.TextUpStile}>Пройдите тест для определения вашего уровня компетенций</div>
                    <div className={style.TextDouwstile}>Какие из следущих методов используются для оценки запасов
                        предприятия?
                    </div>
                </div>
                <TodoList todos={todos}/>
                <Button></Button>
            </div>
            <Quiz active={quizActive} setActive={setQuizActive}/>
        </div>
)
    ;
}

export default App;
