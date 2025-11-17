import Task from "../factories/task"
import userData from "../userData/userData"

export default function handleTaskData(title, description, priority, date) {
    const newTask = new Task(title, description, priority, date)
    userData.addTask(newTask)
    console.log(userData.data)
}
