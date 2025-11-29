import removeIndications from "../utils/selectedUI"
import addTask from "../pages/addTask"
import today from "../pages/today"
import upcoming from "../pages/upcoming"
import overdue from "../pages/overdue"

export default function navButtons() {
    const newTaskButton = document.getElementById("new-todo")
    const newProjectButton = document.getElementById("new-project")
    const todayButton = document.getElementById("view-today")
    const upcomingButton = document.getElementById("view-upcoming")
    const overdueButton = document.getElementById("view-overdue")

    newTaskButton.addEventListener("click", () => {
        removeIndications()
        newTaskButton.classList.add("selected")
        addTask()
    })
    
    newProjectButton.addEventListener("click", () => {
        removeIndications()
        newProjectButton.classList.add("selected")
        addTask()
    })

    todayButton.addEventListener("click", () => {
        removeIndications()
        todayButton.classList.add("selected")
        today()
    })
    
    upcomingButton.addEventListener("click", () => {
        removeIndications()
        upcomingButton.classList.add("selected")
        upcoming()
    })
    
    overdueButton.addEventListener("click", () => {
        removeIndications()
        overdueButton.classList.add("selected")
        overdue()
    })
}
