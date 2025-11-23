import { user } from "../userData/userData"
import { format } from "date-fns"
import { colors } from "../utils/colors"
import syncData from "../userData/syncData"
import displayTask from "../sidebar/displayTask"
import displayMyTasks from "../sidebar/myTasks"

export default function today() {
    const todayTasks = user.getTodayTasks()

    const content = document.getElementById("content")
    content.innerHTML = ``

    const container = document.createElement("div")
    container.className = "container"

    const headerContainer = document.createElement("div")
    headerContainer.className = "today-container today-header"
    
    const header = document.createElement("h1")
    header.textContent = "Your Tasks"

    const headerControls = document.createElement("div")
    headerControls.className = "user-controls"

    const headerSpan = document.createElement("span")
    headerSpan.textContent = "Sort By: "

    const dateButton = document.createElement("button")
    dateButton.textContent = "Date"

    const priorityButton = document.createElement("button")
    priorityButton.textContent = "Priority"

    headerControls.append(headerSpan)
    headerControls.append(dateButton)
    headerControls.append(priorityButton)
    headerContainer.append(header)
    headerContainer.append(headerControls)

    const cardsContainer = document.createElement("div")
    cardsContainer.className = "today-container"

    if (todayTasks.length === 0) {
        const icon = document.createElement("p")
        icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24"
             class="nothing-icon">
             <title>Nothing Here</title>
             <path fill="var(--icon-color)"
                d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.2L4 17.2V4H20V16M17 11H15V9H17M13 11H11V9H13M9 11H7V9H9" /></svg>
        `

        const message = document.createElement("h1")
        message.textContent = "Nothing Here"

        const prompt = document.createElement("p")
        prompt.className = "nothing-prompt"
        prompt.textContent = "There are no tasks for today. "
        
        const upcomingLink = document.createElement("span")
        upcomingLink.className = "upcoming"
        upcomingLink.textContent = "See Upcoming"

        prompt.append(upcomingLink)
        cardsContainer.classList.add("nothing-container")
        cardsContainer.append(icon)
        cardsContainer.append(message)
        cardsContainer.append(prompt)
    }

    todayTasks.forEach(task => {
        const card = document.createElement("div")
        card.className = "card"
        card.style.borderLeft = `5px solid ${colors[task.priority]}`

        const infoContainer = document.createElement("div")
        infoContainer.className= "card-info"
        infoContainer.id = task.id

        const title = document.createElement("h2")
        title.textContent = `${task.title}`
        
        const description = document.createElement("p")
        description.className = "info-description"
        description.textContent = `${task.description}`

        const due = document.createElement("p")
        due.className = "info-due"
        due.textContent = `Due: ${format(task.date, "HH:mm")}`

        infoContainer.append(title)
        infoContainer.append(description)
        infoContainer.append(due)

        const buttonsContainer = document.createElement("div")
        buttonsContainer.className = "misc-btn-container"

        const deleteTask = document.createElement("button")
        deleteTask.className = "misc-btn delete-task"
        deleteTask.id = `${task.id}`
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
        completeTask.id = `${task.id}`
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

        card.append(infoContainer)
        card.append(buttonsContainer)
        cardsContainer.append(card)
    })

    container.append(headerContainer)
    container.append(cardsContainer)
    content.append(container)

    Array.from(document.querySelectorAll(".card-info"))
        .forEach(card => {
            card.addEventListener("click", (event) => {
                displayTask(event.currentTarget)
            })
        })

    Array.from(document.querySelectorAll('.misc-btn'))
        .forEach(button => {
            button.addEventListener("click", (event) => {
                user.removeTask(event.currentTarget.id)
                syncData()
                today()
                displayMyTasks()
            })
        })
}

// Check if task deadline passed
