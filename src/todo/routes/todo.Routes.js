const TodoRoutes = require('express').Router()

const {
    createTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo
} = require('../controller/todo.controller')

TodoRoutes.post("/", createTodo)
TodoRoutes.get("/", getTodos)
TodoRoutes.get("/:id", getTodo)
TodoRoutes.put("/:id", updateTodo)
TodoRoutes.delete("/:id", deleteTodo)

module.exports = TodoRoutes