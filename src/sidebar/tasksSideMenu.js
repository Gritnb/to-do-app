import { user } from "../userData/userData"
import FullToMs from "../utils/fullDateToMs"
import taskButton from "../components/taskButton"

export default function tasksSideMenu() {
    // Navigation Buttons
    const numberOfTodayTasks = document.getElementById("today-tasks")
    const numberOfUpcomingTasks = document.getElementById("upcoming-tasks")
    numberOfTodayTasks.textContent = ``
    numberOfUpcomingTasks.textContent = ``
    // Tasks Containers
    // My Tasks
    const numberOfAllFutureTasks = document.getElementById("total-tasks")
    const futureTasksContainer = document.getElementById('task-view')

    numberOfAllFutureTasks.textContent = ``
    futureTasksContainer.textContent = ``

    const allFutureTasks = user.getPendingTasks().sort((a, b) => {
        return FullToMs(a.date) - FullToMs(b.date)
    })

    allFutureTasks.forEach(task => {
       futureTasksContainer.append(taskButton(task))
    })
    // Projects
    numberOfTodayTasks.textContent = 
        `${user.getTodayTasks().length > 0 ? user.getTodayTasks().length: ""}`
    numberOfUpcomingTasks.textContent =
        `${user.getUpcomingTasks().length > 0 ? user.getUpcomingTasks().length: ""}`
    numberOfAllFutureTasks.textContent = 
        `${allFutureTasks.length > 0 ? allFutureTasks.length : ""}`
}
