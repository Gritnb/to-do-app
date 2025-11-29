import "./styles.css"
import { welcome } from "./utils/welcome.js"
import { user } from "./userData/userData.js"
import today from "./pages/today.js"
import displayTask from "./sidebar/expandTask.js"
import tasksSideMenu from "./sidebar/tasksSideMenu.js"
// Testing
import addTask from "./pages/addTask.js"

(function display() {
    // Hooks
    const todayButton = document.getElementById("view-today")
    // Set localStorage
    if (JSON.parse(localStorage.getItem("datafortodoapp"))) {
        user.setData(JSON.parse(localStorage.getItem("datafortodoapp")))
        todayButton.classList.add("selected")
        addTask()
    } else {
        user.addTask(welcome)
        window.addEventListener("DOMContentLoaded", () => {
            tasksSideMenu()
            displayTask(document.getElementById(`${welcome.id}`))  
        })
    }
    tasksSideMenu()
})()
