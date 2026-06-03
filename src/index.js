import "./styles.css"
import { welcome, welcomeProject } from "./utils/welcome.js"
import { user } from "./userData/userData.js"
import today from "./pages/today.js"
import expandTask from "./sidebar/expandTask.js"
import tasksSideMenu from "./sidebar/tasksSideMenu.js"

(function display() {
    // Hooks
    const todayButton = document.getElementById("view-today")
    // Set localStorage
    if (JSON.parse(localStorage.getItem("datafortodoapp"))) {
        user.setData(JSON.parse(localStorage.getItem("datafortodoapp")))
        todayButton.classList.add("selected")
        today()
    } else {
        user.addTask(welcome)
        user.addProject(welcomeProject)
        window.addEventListener("DOMContentLoaded", () => {
            tasksSideMenu()
            expandTask(document.getElementById(`${welcome.id}`), welcome.type)  
        })
    }
    tasksSideMenu()
})()
