import { user } from "../userData/userData"
import { isToday, parse } from "date-fns"
import { colors } from "../utils/colors"
import displayTask from "../sidebar/displayTask"

export default function today() {
    // const todayTasks = user.data.tasks.filter(task => {
    //     return isToday(parse(task.date, "d MMMM yyyy HH:mm", new Date()))
    // })

    // Empty today test data
    const todayTasks = []

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
        card.id = task.id
        card.className = "card"
        card.style.borderLeft = `5px solid ${colors[task.priority]}`

        const title = document.createElement("h2")
        title.textContent = `${task.title}`
        
        const description = document.createElement("p")
        description.className = "single-description"
        description.textContent = `${task.description}`

        // Add erase - complete buttons

        card.append(title)
        card.append(description)
        cardsContainer.append(card)
    })

    container.append(headerContainer)
    container.append(cardsContainer)
    content.append(container)

    Array.from(document.querySelectorAll(".card"))
        .forEach(card => {
            card.addEventListener("click", (event) => {
                displayTask(event.currentTarget)
            })
        })
}

// Check if task deadline passed
