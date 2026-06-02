import { user } from "../userData/userData"
import taskButton from "../components/taskButton"
import sortByDate from "../utils/sortByDate"
import navButtons from "./navButtons"

export default function tasksSideMenu() {
    // Navigation Button Indicators
    // Today
    const numberOfTodayTasks = document.getElementById("today-tasks")
    numberOfTodayTasks.textContent = ``
    numberOfTodayTasks.textContent = 
        `${user.getTodayTasks().length > 0 ? user.getTodayTasks().length: ""}`

    // Upcoming
    const numberOfUpcomingTasks = document.getElementById("upcoming-tasks")
    numberOfUpcomingTasks.textContent = ``
    numberOfUpcomingTasks.textContent =
        `${user.getUpcomingTasks().length > 0 ? user.getUpcomingTasks().length: ""}`

    // Overdue
    const numberOfOverdueTasks = document.getElementById("overdue-tasks")
    numberOfOverdueTasks.textContent = ``
    numberOfOverdueTasks.textContent = 
        `${user.getOverdueTasks().length > 0 ? user.getOverdueTasks().length : ""}`    
    // Tasks Container
    // My Tasks
    const allFutureTasks = sortByDate(user.getPendingTasks())
    const numberOfAllFutureTasks = document.getElementById("total-tasks")
    numberOfAllFutureTasks.textContent = ``
    numberOfAllFutureTasks.textContent = 
        `${allFutureTasks.length > 0 ? allFutureTasks.length : ""}`

    // Task elements for navigation
    const futureTasksContainer = document.getElementById('task-view')
    futureTasksContainer.textContent = ``
    allFutureTasks.forEach(task => {
       futureTasksContainer.append(taskButton(task))
    })
    // Projects Container
    const allProjects = sortByDate(user.getProjects())
    console.log(allProjects)
    const numberOfProjects = document.getElementById("total-projects")
    numberOfProjects.textContent = ``
    numberOfProjects.textContent = 
        `${allProjects.length > 0 ? allProjects.length : ""}`
    // Project elements for navigation
    const projectsContainer = document.getElementById("project-view")
    projectsContainer.textContent = ``
    allProjects.forEach(project => {
        projectsContainer.append(taskButton(project))
    })
    // Initiate navigation
    navButtons()
}
