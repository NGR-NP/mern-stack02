import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [data, setData] = useState([])

  const handleChange = (e) => {
    setData(e.target.value)
  }
  const handleSubmit = (e) => {

    setTodo('')
  }
  useEffect(() => {
    if (data === 0) {
      empty.style.display = 'block'
    } else {

    }
  }, [data])

  return (
    <section class="sec">
      <h1 class="title">Todo App</h1>
      <form class="todoForm">
        <input value={todo} onChange={handleChange} type="text" class="formInput" id="newTask" />
        <button onClick={handleSubmit} type="button" class="addBtn" id="addTask">Add Task</button>
      </form>
      <fieldset class="lists">
        <legend>
          My Todo List
        </legend>
        <div id="empty">No task on the list</div>
        <ul id="todoList"></ul>
      </fieldset>
    </section>
  )
}

export default App
