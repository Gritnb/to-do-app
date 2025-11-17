import Task from "../factories/task"
import { user } from "../userData/userData"

export default function handleTaskData(title, description, priority, date) {
    const newTask = new Task(title, description, priority, date)
    user.addTask(newTask)
    console.log(user.data)
}
