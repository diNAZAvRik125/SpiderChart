import React, {useEffect, useState} from "react"
import TodoList from "./Components/ToDoList"
import style from "./App.module.css"
import ButtonDoTest from "./Components/ButtonDoTest"
// import GazpromLogo from "./Components/GazpromLogo";
import {HeaderPre} from "./Components/Header";
import Bar from "./Components/Left-Bar";
import Quiz from "./Quiz";
// import axios from "axios";
// import data from "package.json"


function Page_with_test() {
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
    // const [quiz, setQuiz] = useState([])
    const [todos, setTodos] = useState(quastion)
    // (args) =>{
    //     return a
    // } <=> arg => a

    // useEffect(() => {
    //     axios.get("http://192.168.1.224:8080/api/quiz").then(r => r.data).then(data => {
    //         setQuiz(data);
    //     }).catch(e => {
    //         console.error(e);
    //     }).finally(() => setIsLoading(false))
    //
    // }, [])
    // if (isLoading)
    //     return <>Сосу писю </>
    //
    // console.log(quiz);
    return (
        <div>
            <HeaderPre></HeaderPre>
            <Bar></Bar>
            <div className={style.quizQuastions}>
                <div>
                    <div className={style.TextUpStile}>Пройдите тест для определения вашего уровня компетенций</div>
                    <div className={style.TextDouwstile}>Какие из следущих методов используются для оценки запасов
                        предприятия?
                    </div>
                </div>
                <TodoList todos={todos}/>
                <ButtonDoTest></ButtonDoTest>
            </div>
            <Quiz active={quizActive} setActive={setQuizActive}/>
        </div>
    )
        ;
}

export default Page_with_test;
