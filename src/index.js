import "./styles.css"
import { welcome } from "./utils/welcome.js"
import { user } from "./userData/userData.js"
import changeTheme from "./utils/changeTheme"
import removeIndications from "./utils/selectedUI.js"
import syncData from "./userData/syncData.js"
import addTask from "./pages/addTask.js"
import today from "./pages/today.js"
import displayTask from "./sidebar/displayTask.js"
import displayMyTasks from "./sidebar/myTasks.js"


(function display() {
    // Hooks
    const theme = document.getElementById("theme-button")
    const newTaskButton = document.getElementById("new-todo")
    const todayButton = document.getElementById("view-today")
    // Set localStorage
    if (JSON.parse(localStorage.getItem("datafortodoapp"))) {
        user.setData(JSON.parse(localStorage.getItem("datafortodoapp")))
        syncData()
        todayButton.classList.add("selected")
        today()
    } else {
        user.addTask(welcome)
        window.addEventListener("DOMContentLoaded", () => {
            displayTask(document.getElementById(welcome.id))
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

    
})()
