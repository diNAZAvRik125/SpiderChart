import React, {useState} from "react"
import TodoList from "./components/TodoList"
import './App.css'
import Quiz from "./components/Quiz";

const App = () => {
  const [quizActive, setQuizActive] = useState(false)
  return (
    <div className="App">
      <h1>
          <p>Оно работает!!!</p>
          <button className='Quiz-Start-button' onClick={() => setQuizActive(true)}>Пройти тест</button>
      </h1>
      <TodoList />
      <Quiz active={quizActive} setActive={setQuizActive}/>
    </div>
  )
}

export default App;
