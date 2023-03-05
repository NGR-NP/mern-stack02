import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [lists, setLists] = useState([])

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleSubmit = (e) => {
    setLists(prev => [...prev, todo])
    setTodo('')
  }
  const handleRemove = (value) => {
    const filterTodo = lists.filter((data) => data !== value)
    setLists(filterTodo)
  }

  return (
    <section className="sec">
      <h1 className="title">Todo App</h1>
      <form className="todoForm">
        <input value={todo} onChange={handleChange} type="text" className="formInput" id="newTask" />
        <button onClick={handleSubmit} type="button" className="addBtn" id="addTask">Add Task</button>
      </form>
      <fieldset className="lists">
        <legend>
          My Todo List
        </legend>
        {
          lists.length == 0 &&
          <div id="empty">No task on the list</div>
        }

        <ul id="todoList">
          {
            lists.map((data, idx) => {
              return (
                <li key={idx}>
                  <div>⏺ {data}</div>
                  <div onClick={() => handleRemove(data)} className="remove">X</div>
                </li>
              )
            })
          }
        </ul>
      </fieldset>
    </section>
  )
}

export default App
