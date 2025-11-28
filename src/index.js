import "./styles.css"
import { welcome } from "./utils/welcome.js"
import { user } from "./userData/userData.js"
import changeTheme from "./utils/changeTheme"
import today from "./pages/today.js"
import displayTask from "./sidebar/expandTask.js"
import displayMyTasks from "./sidebar/tasksSideMenu.js"
import navButtons from "./sidebar/navButtons.js"

(function display() {
    window.addEventListener("load", () => {
        console.log("load")
    })
    // Hooks
    const theme = document.getElementById("theme-button")
    const todayButton = document.getElementById("view-today")
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
    navButtons()
    // Listeners
    theme.addEventListener('click', changeTheme)
})()
