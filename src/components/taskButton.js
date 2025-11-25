import displayTask from "../sidebar/expandTask"
import { colors } from "../utils/colors"

export default function taskButton(task) {
    const taskTitle = document.createElement('button')
    taskTitle.className = "task-element"
    taskTitle.id = task.id

    const hash = document.createElement('span')
    hash.className = "hash"
    hash.textContent = "# "
    hash.style.color = `${colors[task.priority]}`
            
    taskTitle.textContent = `${task.title}`
    taskTitle.prepend(hash)
    
    taskTitle.addEventListener('click', (event) => {
        displayTask(event.currentTarget)
    })
    return taskTitle
}
