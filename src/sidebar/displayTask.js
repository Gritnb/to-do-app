import { isToday, format, parseISO, isPast } from "date-fns";
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
    // Utility DOM Elements
    const taskDivider = document.createElement("hr")
    taskDivider.className = "single-divider"
    
    const editButton = document.createElement("button")
    editButton.className = "misc-btn-change"
    editButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24"
             class="icon-small">
             <title>Edit</title>
             <path fill="var(--icon-color)"
                   d="M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z" />
        </svg>
    `

    const errorMessage = document.createElement("span")
    errorMessage.className = "change-error-msg"
    errorMessage.style.display = "none"
    // Utility DOM Elements
    const container = document.createElement("div")
    container.className = "single-task"

    const taskTitle = document.createElement('h1')
    taskTitle.className = "single-title"
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
    // Edit date
    const changeDateError = errorMessage.cloneNode(true)
    changeDateError.textContent = "Invalid Date!"
    changeDateError.className = "change-error-msg"
    changeDateError.id = "date-error-msg"

    const changeDate = document.createElement("input")
    changeDate.type = "datetime-local"
    changeDate.className = "change-date-input"
    changeDate.min = `${format(new Date(), "yyyy-MM-dd'T'HH:mm")}`
    changeDate.max = "9999-12-30T16:30"
    changeDate.onblur = () => {
        if (changeDate.validity.badInput || 
            !changeDate.value || 
            isPast(changeDate.value)) {
            changeDate.style.display = "none"
            taskDate.style.display = "block"
            changeDate.value = ''
            changeDateError.display = "block"
            changeDateError.style.display = "inline"
                setTimeout(() => {
                    changeDateError.style.display = "none"
                }, "1500")
            return
        } else {
            const date = parseISO(changeDate.value)
            const dateFormatted = format(date, "dd MMMM yyyy HH:mm")
            changeDate.style.display = "none"
            taskDate.style.display = "block"
            user.changeTaskDate(taskToDisplay.id, dateFormatted)
            syncData()
            displayMyTasks()
            displayTask(task)
        }
    }

    taskDate.prepend(due)
    infoContainer.append(taskDate)
    infoContainer.append(changeDate)
    infoContainer.append(changeDateError)
    infoContainer.append(taskPriority)
    infoContainer.append(buttonsContainer)
    // Edit Title
    const changeTitle = editButton.cloneNode(true)
    taskTitle.append(changeTitle)

    const changeTitleContainer = document.createElement("div")
    changeTitleContainer.className = "change-container"
    changeTitleContainer.style.display = "none"

    const changeTitleInput = document.createElement("input")
    changeTitleInput.type = "text"
    changeTitleInput.className = "change-title"
    
    const taskTitleError = errorMessage.cloneNode(true)
    taskTitleError.textContent = `Between 1 and 24 characters!`
    taskTitle.append(taskTitleError)

    changeTitleContainer.append(changeTitleInput)
    // Edit Description
    const changeDescription = editButton.cloneNode(true)
    changeDescription.id = "description-btn"
    taskDescription.append(changeDescription)

    const changeDescriptionInput = document.createElement("textarea")
    changeDescriptionInput.id = "task-description-change"
    changeDescriptionInput.style.display = "none"

    const taskDescriptionError = errorMessage.cloneNode(true)
    taskDescriptionError.textContent = `Description required!`
    taskDescriptionError.id = "desc-error-msg"
    taskDescription.append(taskDescriptionError)

    container.append(taskTitle)
    container.append(changeTitleContainer)
    container.append(titleDivider)
    container.append(taskDescription)
    container.append(changeDescriptionInput)
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
                // Temporary
            })
        })
    
    // Change title listeners.
    changeTitle.addEventListener("click", () => {
        taskTitle.style.display = 'none'
        changeTitleContainer.style.display = "flex"
        changeTitleInput.value = taskToDisplay.title
        changeTitleInput.focus()
    })

    changeTitleInput.addEventListener("input", (event) => {
        event.target.style.width = `${taskToDisplay.length + 1}ch`
    })

    changeTitleInput.addEventListener("keypress", (event) => {
        if (event.key === 'Enter') {
            if ((event.target.value).trim().length === 0 ||
                 event.target.value.length >= 24) {
                taskTitleError.style.display = "inline"
                setTimeout(() => {
                    taskTitleError.style.display = "none"
                }, "1500")
            } else {
                user.changeTaskTitle(taskToDisplay.id, changeTitleInput.value)
                syncData()
                displayMyTasks()
                displayTask(task)
            }
            taskTitle.style.display = "flex"
            changeTitleInput.value = ""
            changeTitleContainer.style.display = "none"
        }
    })
    // Change description listeners
    const keys = {
        Enter: false,
        ShiftLeft: false
    };

    changeDescription.addEventListener("click", () => {
        taskDescription.style.display = "none"
        changeDescriptionInput.style.display = "block"
        changeDescriptionInput.value = taskToDisplay.description
            .replace(/^[ \t]+(?=\S)/gm, '')
            .trim();
        changeDescriptionInput.focus()
    })

    changeDescriptionInput.addEventListener("keydown", (event) => {
        if (event.code in keys) {
            keys[event.code] = true;
        }

        if (keys.Enter && !keys.ShiftLeft) {
            if ((event.target.value).trim().length === 0) {
                taskDescriptionError.style.display = "inline"
                setTimeout(() => {
                    taskDescriptionError.style.display = "none"
                }, "1500")
            } else {
                user.changeTaskDescription(
                    taskToDisplay.id, 
                    changeDescriptionInput.value.trim()
                )
                syncData()
                displayMyTasks()
                displayTask(task)
            }
            taskDescription.style.display = "block"
            changeDescriptionInput.value = ""
            changeDescriptionInput.style.display = "none"
        }
    })

    changeDescriptionInput.addEventListener("keyup", (event) => {
        if (event.code in keys) {
            keys[event.code] = false;
        }
    })
    // Edit time listeners
    taskDate.addEventListener("click", () => {
        taskDate.style.display = "none"
        changeDate.style.display = "block"
    })
}
