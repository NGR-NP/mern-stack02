import { useState } from "react";
import useTodo from "./useTodo"
import './App.css'
import DangerousIcon from '@mui/icons-material/Dangerous';
import CheckCircle from "@mui/icons-material/CheckCircle";
import { Edit } from "@mui/icons-material";

function App() {
  const { todos, error, addTodo, updateTodo, setTodos, deleteTodo, completedTodo } = useTodo()
  const [todo, setTodo] = useState('')
  const newTodos = Array.from(todos).reverse()
  const handleChange = (_id, newTitle) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo._id === _id);
    newTodos[todoIndex].title = newTitle;
    setTodos(newTodos);
  }
  const handleClick = (_id, newTitle) => {
    updateTodo(_id, newTitle)
  }
  return (
    <section className="sec">
      <h1 className="title">Todo App</h1>
      <form className="todoForm">
        <input type="text" className="formInput" value={todo} onChange={(e) => setTodo(e.target.value)} id="newTask" />
        <button type="button" className="addBtn" onClick={() => addTodo(todo)}>Add Task</button>
      </form>
      {error && <p className="error">{error}s</p>}
      <fieldset className="lists">
        <legend>
          My Todo List
        </legend>
        {todos.length === 0 ? (
          <div id="empty">No task on the list</div>
        ) : (
          newTodos.map((data) => {
            return (
              <div className="listCont" key={data._id}>
                <ul className="list">
                  <b className="listNum">
                  {newTodos.indexOf(data) + 1}
                  </b>
                  <input className="todoInput" type="text" value={data.title} onChange={(e) => handleChange(data._id, e.target.value)} />
                </ul>
                <div className="icon">
                  <Edit className="edit" onClick={(e) => handleClick(data._id, data.title)} />
                  <CheckCircle className="check" onClick={(e) => completedTodo(data._id)} />
                  <DangerousIcon onClick={() => deleteTodo(data._id)} className="delete" />
                </div>
              </div>
            );
          })
        )}

      </fieldset>
    </section>
  )
}

export default App
