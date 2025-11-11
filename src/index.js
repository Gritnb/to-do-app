import "./styles.css"
import changeTheme from "./utils/changeTheme"
import today from "./pages/today"

(function display() {
    // Hooks
    const content = document.getElementById("content")
    const theme = document.getElementById("theme-button")
    const navItems = Array.from(document.querySelectorAll(".nav-btn"))
    const todayButton = document.getElementById("view-today")

    // Listeners
    // TESTER
    window.addEventListener('load', () => {
        todayButton.classList.add("selected")
        today()
    })
    // TESTER
    theme.addEventListener('click', changeTheme)
    navItems.forEach(item => {
        item.classList.remove("selected")
    })

    todayButton.addEventListener('click', (event) => {
        event.currentTarget.classList.add("selected")
        today()
    })
})()


// console.log('works')
// const todo1 = Todo('First', 'Your First Task', '12-04-2025', 'Important', ['1', '2', '3'])

// console.log(todo1)
