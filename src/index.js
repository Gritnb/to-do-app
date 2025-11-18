import "./styles.css"
import { welcome } from "./utils/welcome.js"
import changeTheme from "./utils/changeTheme"
import addTask from "./pages/addTask.js"
import { user } from "./userData/userData.js"
import displayTask from "./sidebar/displayTask.js"
import displayMyTasks from "./sidebar/myTasks.js"
import syncData from "./userData/syncData.js"

(function display() {
    // const content = document.getElementById("content")
    // Set localStorage
    if (JSON.parse(localStorage.getItem("datafortodoapp"))) {
        user.setData(JSON.parse(localStorage.getItem("datafortodoapp")))
        syncData()
    } else {
        user.addTask(welcome)
    }
    displayMyTasks()
    // Initial view
    window.addEventListener("DOMContentLoaded", () => {
        displayTask(document.getElementById(welcome.id))
    })
    // Hooks
    const theme = document.getElementById("theme-button")
    const navItems = Array.from(document.querySelectorAll(".nav-btn"))
    const taskItems = Array.from(document.querySelectorAll(".task-element"))
    const newTask = document.getElementById('new-todo')
    
    // Listeners
    theme.addEventListener('click', changeTheme)
   
    navItems.forEach(item => {
        item.classList.remove("selected")
    })

    newTask.addEventListener('click', () => {
        newTask.classList.add("selected")
        taskItems.forEach(item => {item.classList.remove("selected")})
        addTask()
    })
})()
