import React, {useState} from "react"
import TodoList from "./Components/ToDoList"
import './App.module.css'
import Quiz from "./Quiz"

const ButtonDoTest = () => {
  const [quizActive, setQuizActive] = useState(false)
  return (
    <div className="Button">
      <h1>
          <p>Далее</p>
          <button className='small_btn' onClick={() => setQuizActive(true)}>Пройти тест</button>
      </h1>
      <TodoList />
      <Quiz active={quizActive} setActive={setQuizActive}/>
    </div>
  )
}

export default Button;
