import "./styles.css"
import Todo from './todo'

console.log('works')
const todo1 = Todo('First', 'Your First Task', '12-04-2025', 'Important', ['1', '2', '3'])

console.log(todo1)

const theme = document.getElementById("theme")

theme.addEventListener('click', changeTheme)

function changeTheme() {
    const root = document.documentElement

    const newTheme = root.className === "dark" ? "light" : "dark"
    root.className = newTheme
}
