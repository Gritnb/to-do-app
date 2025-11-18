import { user } from "../userData/userData"
import { colors } from "../utils/colors"

export default function displayMyTasks() {
    const numberOfTasks = document.getElementById('total-tasks')
    const taskSelector = document.getElementById('task-view')
    const tasks = user.data.tasks

    taskSelector.textContent = ``
    numberOfTasks.textContent = ``

    tasks.forEach(task => {
        const taskTitle = document.createElement('button')
        taskTitle.className = "task-element"
        taskTitle.id = task.id

        const hash = document.createElement('span')
        hash.className = "hash"
        hash.textContent = "# "
        hash.style.color = `${colors[task.priority]}`
        
        taskTitle.textContent = `${task.title}`
        taskTitle.prepend(hash)

        taskSelector.append(taskTitle)
    })
    
    numberOfTasks.textContent = `${tasks.length}` || ``
}
