const Todo = require("../../models/Todo")

const createTodo = async (req, res, next) => {
    const { title } = req.body;
    try {
        const newTodo = new Todo({
            title
        })
        const saveTodo = await newTodo.save()
        res.json(saveTodo)
    } catch (err) {
        next(err)
    }
}