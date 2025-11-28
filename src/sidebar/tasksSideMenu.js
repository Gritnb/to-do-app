import { user } from "../userData/userData"
import taskButton from "../components/taskButton"
import sortByDate from "../utils/sortByDate"
import navButtons from "./navButtons"

export default function tasksSideMenu() {
    // Navigation Button Indicators
    const numberOfTodayTasks = document.getElementById("today-tasks")
    const numberOfUpcomingTasks = document.getElementById("upcoming-tasks")
    const numberOfOverdueTasks = document.getElementById("overdue-tasks")
    numberOfTodayTasks.textContent = ``
    numberOfUpcomingTasks.textContent = ``
    // Tasks Containers
    // My Tasks
    const numberOfAllFutureTasks = document.getElementById("total-tasks")
    const futureTasksContainer = document.getElementById('task-view')

    numberOfAllFutureTasks.textContent = ``
    futureTasksContainer.textContent = ``

    const allFutureTasks = sortByDate(user.getPendingTasks())

    allFutureTasks.forEach(task => {
       futureTasksContainer.append(taskButton(task))
    })

    const overdueTasks = user.getOverdueTasks()
    // Projects
    numberOfTodayTasks.textContent = 
        `${user.getTodayTasks().length > 0 ? user.getTodayTasks().length: ""}`
    numberOfUpcomingTasks.textContent =
        `${user.getUpcomingTasks().length > 0 ? user.getUpcomingTasks().length: ""}`
    numberOfAllFutureTasks.textContent = 
        `${allFutureTasks.length > 0 ? allFutureTasks.length : ""}`
    numberOfOverdueTasks.textContent = 
        `${overdueTasks.length > 0 ? overdueTasks.length : ""}`
    navButtons()
}
