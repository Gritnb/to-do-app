import "./styles.css"
import changeTheme from "./utils/changeTheme"
import addTask from "./pages/addTask.js"

(function display() {
    // Hooks
    const content = document.getElementById("content")
    const theme = document.getElementById("theme-button")
    const navItems = Array.from(document.querySelectorAll(".nav-btn"))
    const newTask = document.getElementById('new-todo')
    // Listeners
    theme.addEventListener('click', changeTheme)
    navItems.forEach(item => {
        item.classList.remove("selected")
    })
 
    // TESTER
    window.addEventListener('load', () => {
        newTask.classList.add("selected")
        addTask()
    })
})()


// console.log('works')
// const todo1 = Todo('First', 'Your First Task', '12-04-2025', 'Important', ['1', '2', '3'])

// console.log(todo1)
