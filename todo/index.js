const todoList = document.getElementById("todoList");
const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");
const empty = document.getElementById("empty")
if (todoList.children.length === 0) {
    empty.style.display = 'block'
}
addTaskButton.addEventListener("click", () => {
    const newTaskText = newTaskInput.value;

    if (newTaskText !== "") {
        const newTaskItem = document.createElement("li");
        newTaskItem.innerHTML = `<div>⏺ ${newTaskText}</div>`

        const removeTaskButton = document.createElement("button");
        removeTaskButton.innerHTML = `<div class="remove">X</div>`
        removeTaskButton.addEventListener("click", () => {
            newTaskItem.remove();
            if (todoList.children.length === 0) {
                empty.style.display = "block"
            }
        });

        newTaskItem.appendChild(removeTaskButton);
        todoList.appendChild(newTaskItem);
        newTaskInput.value = "";
        empty.style.display = "none";
    }
});
