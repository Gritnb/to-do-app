import "./styles.css"
import changeTheme from "./utils/changeTheme"
import addTask from "./pages/addTask.js"
import { user } from "./userData/userData.js"
import displayMyTasks from "./sidebar/myTasks.js"


(function display() {
    if (JSON.parse(localStorage.getItem("datafortodoapp"))) {
        user.setData(JSON.parse(localStorage.getItem("datafortodoapp")))
        displayMyTasks()
    }
    // Hooks
    // const content = document.getElementById("content")
    const theme = document.getElementById("theme-button")
    const navItems = Array.from(document.querySelectorAll(".nav-btn"))
    const newTask = document.getElementById('new-todo')
    
    // Listeners
    theme.addEventListener('click', changeTheme)
    navItems.forEach(item => {
        item.classList.remove("selected")
    })

    newTask.addEventListener('click', () => {
        newTask.classList.add("selected")
        addTask()
    })
})()
