import "./styles.css"
import { welcome } from "./utils/welcome.js"
import changeTheme from "./utils/changeTheme"
import addTask from "./pages/addTask.js"
import { user } from "./userData/userData.js"
import displayMyTasks from "./sidebar/myTasks.js"


(function display() {
    if (JSON.parse(localStorage.getItem("datafortodoapp"))) {
        user.setData(JSON.parse(localStorage.getItem("datafortodoapp")))
    } else {
        user.addTask(welcome)
    }
    displayMyTasks()
    // Hooks
    // const content = document.getElementById("content")
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
    syncData()
})()
