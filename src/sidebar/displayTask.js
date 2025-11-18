import { user } from "../userData/userData.js"

export default function displayTask(task) {
    const content = document.getElementById("content")
    content.innerHTML = ``

    const otherTasks = Array.from(document.querySelectorAll('.task-element'))
    otherTasks.forEach(task => task.classList.remove("selected"))
    task.classList.add("selected")

    const taskToDisplay = user.getTask(task.id)

    const taskDivider = document.createElement("hr")
    taskDivider.className = "single-divider"
    
    const container = document.createElement("div")
    container.className = "single-task"

    const taskTitle = document.createElement('h1')
    taskTitle.textContent = `${taskToDisplay.title}`
    const titleDivider = taskDivider.cloneNode(true)

    const taskDescription = document.createElement("p")
    taskDescription.className = "single-description"
    taskDescription.textContent = `${taskToDisplay.description}`
    const descriptionDivider = taskDivider.cloneNode(true)

    const infoContainer = document.createElement("div")
    infoContainer.className = "single-misc"

    const taskDate = document.createElement("span")
    taskDate.className = "single-date"
    taskDate.textContent = `${taskToDisplay.date}`

    const taskPriority = document.createElement("span")
    taskPriority.className = `badge ${taskToDisplay.priority}-badge`
    taskPriority.textContent = 
        taskToDisplay.priority[0].toUpperCase() +
        taskToDisplay.priority.slice(1).toLowerCase()

    infoContainer.append(taskDate)
    infoContainer.append(taskPriority)

    container.append(taskTitle)
    container.append(titleDivider)
    container.append(taskDescription)
    container.append(descriptionDivider)
    container.append(infoContainer)
    content.append(container)
}
