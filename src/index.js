import "./styles.css"
import changeTheme from "./utils/changeTheme"
import Todo from './todo'

(function display() {

    const theme = document.getElementById("theme-button")

    theme.addEventListener('click', changeTheme)
})()


// console.log('works')
// const todo1 = Todo('First', 'Your First Task', '12-04-2025', 'Important', ['1', '2', '3'])

// console.log(todo1)
