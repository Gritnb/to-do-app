import "./styles.css"
import Todo from './todo'

console.log('works')
const todo1 = Todo('First', 'Your First Task', '12-04-2025', 'Important', ['1', '2', '3'])

console.log(todo1)

const theme = document.getElementById("theme-button")

theme.addEventListener('click', changeTheme)

function changeTheme() {
    const root = document.documentElement
    const lightIcon = document.getElementById('light-icon')
    const darkIcon = document.getElementById('dark-icon')

    const newTheme = root.className === "dark" ? "light" : "dark"

    if (newTheme === "light") {
        darkIcon.classList.remove("inactive")
        lightIcon.classList.add("inactive")
    } else {
        lightIcon.classList.remove("inactive")
        darkIcon.classList.add("inactive")
    }
    root.className = newTheme
}
