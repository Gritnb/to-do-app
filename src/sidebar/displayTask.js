import { user } from "../userData/userData.js"

export default function displayTask(task) {
    const content = document.getElementById("content")
    content.innerHTML = ``

    const otherTasks = Array.from(document.querySelectorAll('.task-element'))
    otherTasks.forEach(task => task.classList.remove("selected"))
    task.classList.add("selected")

    const taskToDisplay = user.getTask(task.id)
    
    console.log(taskToDisplay)
    
}
