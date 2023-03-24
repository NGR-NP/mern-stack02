import axios from "axios"
import { useEffect, useState } from "react"
const useTodo = () => {
    const [todos, setTodos] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        fetchTodo()
    }, [])

    useEffect(() => {
        setError('')
    }, [todos])

    const fetchTodo = async () => {
        try {
            const res = await axios.get(
                `http://localhost:8080/api/todo/`
            )
            setTodos(res.data)
        } catch (err) {
            setError(err.response.data.message)
        }
    }
    const addTodo = async (title) => {
        try {
            const res = await axios.post(
                `http://localhost:8080/api/todo/`,
                { title }
            )
            setTodos([...todos, res.data])
        } catch (err) {
            setError(err.response.data.message)
        }
    }
    const updateTodo = async (_id, title) => {
        try {
            const res = await axios.put(`http://localhost:8080/api/todo/${_id}`, { title })
            if (res.data.status === "completed") {
                console.log("completed")
            } else {
                setTodos([...todos, res.data])
            }
        } catch (err) {
            setError(err.response.data.message)
        }
    }
    const completedTodo = async (_id) => {
        try {
            const res = await axios.put(`http://localhost:8080/api/todo/${_id}`, { status: "completed" })
            console.log(res.data.message)
            setTodos(todos.filter(todo => todo._id !== _id))
        } catch (err) {
            setError(err.response.data.message)
        }
    }
    const deleteTodo = async (_id) => {
        try {
            const res = await axios.delete(`http://localhost:8080/api/todo/${_id}`)
            console.log(res.data.message)
            if (res.data.message === "todo deleted!") {
                setTodos(todos.filter(todo => todo._id !== _id))
            }
        } catch (err) {
            setError(err.response.data.message)
        }
    }

    return { todos, setTodos, error, fetchTodo, addTodo, updateTodo, completedTodo, deleteTodo }
}
export default useTodo