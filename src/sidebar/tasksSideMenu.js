import { user } from "../userData/userData"
import FullToMs from "../utils/fullDateToMs"
import taskButton from "../components/taskButton"

export default function tasksSideMenu() {
    const numberOfAllPendingTasks = document.getElementById("total-tasks")
    const numberOfTodayTasks = document.getElementById("today-tasks")
    const myTasksContainer = document.getElementById('task-view')

    numberOfAllPendingTasks.textContent = ``
    numberOfTodayTasks.textContent = ``
    myTasksContainer.textContent = ``

    const pendingTasks = user.getPendingTasks().sort((a, b) => {
        return FullToMs(a.date) - FullToMs(b.date)
    })

    pendingTasks.forEach(task => {
       myTasksContainer.append(taskButton(task))
    })

    numberOfAllPendingTasks.textContent = 
        `${pendingTasks.length > 0 ? pendingTasks.length : ""}`
    numberOfTodayTasks.textContent = 
        `${user.getTodayTasks().length > 0 ? user.getTodayTasks().length: ""}`
}
