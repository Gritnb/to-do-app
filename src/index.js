import "./styles.css"
import { welcome } from "./utils/welcome.js"
import { user } from "./userData/userData.js"
import changeTheme from "./utils/changeTheme"
import selectedUI from "./utils/selectedUI.js"
import syncData from "./userData/syncData.js"
import addTask from "./pages/addTask.js"

import displayTask from "./sidebar/displayTask.js"
import displayMyTasks from "./sidebar/myTasks.js"


(function display() {
    // const content = document.getElementById("content")
    // Set localStorage
    if (JSON.parse(localStorage.getItem("datafortodoapp"))) {
        user.setData(JSON.parse(localStorage.getItem("datafortodoapp")))
        syncData()
        // VIEW TODAY IF TASK EXIST ELSE MESSAGE 'NOTHING TO DO TODAY'
    } else {
        user.addTask(welcome)
        window.addEventListener("DOMContentLoaded", () => {
            displayTask(document.getElementById(welcome.id))
        })
    }
    displayMyTasks()
    // Hooks
    const theme = document.getElementById("theme-button")
    const newTask = document.getElementById("new-todo")
    const today = document.getElementById("view-today")
    
    // Listeners
    theme.addEventListener('click', changeTheme)
  
    newTask.addEventListener("click", () => {
        selectedUI()
        newTask.classList.add("selected")
        addTask()
    })

    today.addEventListener("click", () => {
        selectedUI()
        today.classList.add("selected")
        console.log("today")
    })

    
})()
