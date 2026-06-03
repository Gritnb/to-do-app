import sortByDate from "../utils/sortByDate"
import sortByPrio from "../utils/sortByPrio"
import { user } from "../userData/userData"
import taskCards from "./tasksCards"

export default function displaySorter(tasks, period) {
    tasks = user.getViewingMode() 
        ? sortByDate(tasks)
        : sortByPrio(tasks)

    const headerControls = document.createElement("div")
    headerControls.className = "user-controls"

    const headerSpan = document.createElement("span")
    headerSpan.textContent = "Sort By: "

    const dateButton = document.createElement("button")
    dateButton.textContent = "Date"
    dateButton.className = 
        `sort-btn left-btn ${user.getViewingMode() && "button-selected"}`
    dateButton.disabled = user.getViewingMode()

    const priorityButton = document.createElement("button")
    priorityButton.textContent = "Priority"
    priorityButton.className = 
        `sort-btn right-btn ${!user.getViewingMode() && "button-selected"}`
    priorityButton.disabled = !user.getViewingMode()

    headerControls.append(headerSpan)
    headerControls.append(dateButton)
    headerControls.append(priorityButton)

    dateButton.addEventListener("click", () => {
        user.toggleViewingMode()
        tasks = sortByDate(tasks)
        taskCards(tasks, period)
    })

    priorityButton.addEventListener("click", () => {
        user.toggleViewingMode()
        tasks = sortByPrio(tasks)
        taskCards(tasks, period)
    })

    return headerControls
}
