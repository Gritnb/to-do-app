import "./styles.css"
import changeTheme from "./utils/changeTheme"
import addTask from "./pages/addTask.js"

console.log("Launched")

(function display() {
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
