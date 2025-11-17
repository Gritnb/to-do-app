import Todo from "../factories/todo"
import userData from "../userData/userData"

export default function handleTaskData(title, description, priority, date) {
    const newTodo = new Todo(title, description, priority, date)
    userData.addTask(newTodo)
    console.log(userData.data)
}

