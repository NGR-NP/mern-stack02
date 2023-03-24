const Todo = require("../../models/Todo")

const createTodo = async (req, res, next) => {
    try {
        const { title } = req.body;
        if (!title) {
            res.status(400).json({ message: 'Title is required' });
            return;
        }
        const foundTodo = await Todo.findOne({ title })
        if (foundTodo) {
            res.status(401).json({ message: 'todo is already in pending' })
            return;
        }
        const newTodo = new Todo({
            title
        });
        const savedTodo = await newTodo.save();
        res.json(savedTodo);
    } catch (err) {
        next(err);
    }
}


const getTodos = async (_req, res, next) => {
    try {
        const todos = await Todo.find()
        if (todos) {
            res.json(todos)

        } else {
            res.json({ message: "todo not found" })
        }
    } catch (err) {
        next(err)
    }
}

const getTodo = async (req, res, next) => {
    try {
        const { id } = req.params
        const todo = await Todo.findById({ _id: id })
        if (todo) {
            res.json(todo)
        } else {
            res.json({ message: "todo not found" })
        }
    } catch (err) {
        next(err)
    }
}

const updateTodo = async (req, res, next) => {
    try {
        const { id } = req.params
        const { title, status } = req.body;
        const updatedTodo = await Todo.findOneAndUpdate(
            { _id: id },
            { title, status },
            { new: true, select: '_id title status' }
        );
        if (updatedTodo.status === "completed") {
            await Todo.findByIdAndDelete({ _id: id })
            res.json({ message: "todo completed!" })
        } else {
            res.json(updatedTodo)
        }

    } catch (err) {
        next(err)
    }
}

const deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.params
        await Todo.findByIdAndDelete({ _id: id })
        res.json({ message: "todo deleted!" })
    } catch (err) {
        next(err)
    }
}
module.exports =
{
    createTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo
}