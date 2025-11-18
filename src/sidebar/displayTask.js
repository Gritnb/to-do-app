import { isToday } from "date-fns";
import { user } from "../userData/userData.js"
import syncData from "../userData/syncData.js";
import displayMyTasks from "./myTasks.js";
import addTask from "../pages/addTask.js";

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

    const due = document.createElement("span")
    due.className = "single-date"
    due.textContent = "Due: "

    const taskDate = document.createElement("span")
    taskDate.className = `single-date ${isToday(taskToDisplay.date) ? "today" : "rest"}`
    taskDate.textContent = `${isToday(taskToDisplay.date)
        ? `Today`
        : taskToDisplay.date
    }`

    const taskPriority = document.createElement("span")
    taskPriority.className = `badge ${taskToDisplay.priority}-badge`
    taskPriority.textContent = 
        taskToDisplay.priority[0].toUpperCase() +
        taskToDisplay.priority.slice(1).toLowerCase()

    const buttonsContainer = document.createElement("div")
    buttonsContainer.className = "misc-btn-container"

    const deleteTask = document.createElement("button")
    deleteTask.className = "misc-btn delete-task"
    deleteTask.id = `${taskToDisplay.id}`
    deleteTask.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24"
             class="icon-small">
             <title>Delete</title>
             <path fill="var(--icon-color)"
                d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
        </svg>
    `
    
    const completeTask = document.createElement("button")
    completeTask.className = "misc-btn complete-task"
    completeTask.id = `${taskToDisplay.id}`
    completeTask.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24"
             class="icon-small">
             <title>Complete</title>
             <path fill="var(--icon-color)"
                   d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </svg>
    `

    buttonsContainer.append(deleteTask)
    buttonsContainer.append(completeTask)

    taskDate.prepend(due)
    infoContainer.append(taskDate)
    infoContainer.append(taskPriority)
    infoContainer.append(buttonsContainer)

    container.append(taskTitle)
    container.append(titleDivider)
    container.append(taskDescription)
    container.append(descriptionDivider)
    container.append(infoContainer)
    content.append(container)

    Array.from(document.querySelectorAll(".nav-btn")).forEach(item => {
        item.classList.remove("selected")
    })

    Array.from(document.querySelectorAll('.misc-btn'))
            .forEach(button => {
                button.addEventListener("click", (event) => {
                    user.removeTask(event.currentTarget.id)
                    syncData()
                    displayMyTasks()
                    // Display something when user deletes the task
                    // Temporary
                    document.getElementById('new-todo').classList.add("selected")
                    addTask()
                    
                })
            })
}
