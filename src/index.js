import "./styles.css"
import { welcome } from "./utils/welcome.js"
import { user } from "./userData/userData.js"
import changeTheme from "./utils/changeTheme"
import removeIndications from "./utils/selectedUI.js"
import addTask from "./pages/addTask.js"
import today from "./pages/today.js"
import upcoming from "./pages/upcoming.js"
import displayTask from "./sidebar/expandTask.js"
import displayMyTasks from "./sidebar/tasksSideMenu.js"

(function display() {
    window.addEventListener("load", () => {
        console.log("load")
        // remove overdue tasks or handlethem
    })
    // Hooks
    const theme = document.getElementById("theme-button")
    const newTaskButton = document.getElementById("new-todo")
    const todayButton = document.getElementById("view-today")
    const upcomingButton = document.getElementById("view-upcoming")
    // Set localStorage
    if (JSON.parse(localStorage.getItem("datafortodoapp"))) {
        user.setData(JSON.parse(localStorage.getItem("datafortodoapp")))
        todayButton.classList.add("selected")
        today()
    } else {
        user.addTask(welcome)
        window.addEventListener("DOMContentLoaded", () => {
            displayMyTasks()
            displayTask(document.getElementById(`${welcome.id}`))  
        })
    }
    displayMyTasks()
    // Listeners
    theme.addEventListener('click', changeTheme)
  
    newTaskButton.addEventListener("click", () => {
        removeIndications()
        newTaskButton.classList.add("selected")
        addTask()
    })

    todayButton.addEventListener("click", () => {
        removeIndications()
        todayButton.classList.add("selected")
        today()
    })

    upcomingButton.addEventListener("click", () => {
        removeIndications()
        upcomingButton.classList.add("selected")
        upcoming()
    })
})()
