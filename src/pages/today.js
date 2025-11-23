import { user } from "../userData/userData"
import { isToday, parse } from "date-fns"
import { colors } from "../utils/colors"

export default function today() {
    const todayTasks = user.data.tasks.filter(task => {
        return isToday(parse(task.date, "d MMMM yyyy HH:mm", new Date()))
    })

    const content = document.getElementById("content")
    content.innerHTML = ``

    const container = document.createElement("div")
    container.className = "container"

    const headerContainer = document.createElement("div")
    headerContainer.className = "today-container today-header"
    
    const header = document.createElement("h1")
    header.textContent = "Today's Tasks"

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

    todayTasks.forEach(task => {
        const card = document.createElement("div")
        card.className = "card"
        card.style.borderLeft = `5px solid ${colors[task.priority]}`

        console.log(colors[task.priority])

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

}

// Check if task deadline passed
