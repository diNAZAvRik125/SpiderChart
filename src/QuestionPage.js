import React, {useEffect, useState} from "react"
import QuestionCard from "./QuestionCard";
import axios from "axios";
import style from './App.module.css';
import Button from "./Components/Button";
import Quiz from "./Quiz";


const URL = "http://192.168.1.224:8080/api/quiz";

const QuestionPage = (props) => {
    const {quiz, onNextClick, onPrevClick} = props;

    const [questions, setQuestions] = useState([]); // fetch data from back
    const [selectedQuestionId, setSelectedQuestionId] = useState(0); // текущий выбранный вопрос
    const [quizActive, setQuizActive] = useState(false)

    useEffect(() => {
        axios.get(URL)
            .then(r => r.data)
            .then(data => setQuestions(data))
            .catch(e => console.error(e))
    }, []);

    // вопросов нет вообще
    if (questions.length === 0) {
        return (
            <div className={style.quizQuastions}>
                <div className={style.TextUpStile}>Нет вопросов</div>
                <Button onClick={console.log("next")} title="завершить тест" />
            </div>
        ); // нет вопросов
    }

    // вопросы закончись
    if (selectedQuestionId === questions.length) {
        return (
            <div>
                <Button onClick={console.log("next")} title="завершить тест"/>
                <Quiz active={quizActive} setActive={setQuizActive}/>
            </div>
        );
    }

    // вопросы есть
    return
    <QuestionCard
        source={questions[selectedQuestionId]} // текущий вопрос
        isLast={selectedQuestionId === (questions.length - 1)}
        onNextClick={() => setSelectedQuestionId(selectedQuestionId + 1)} // нажали далее
    />;
}

export default QuestionPage;
