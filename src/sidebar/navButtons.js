import removeIndications from "../utils/selectedUI"
import addTask from "../pages/addTask"
import today from "../pages/today"
import upcoming from "../pages/upcoming"
import overdue from "../pages/overdue"

export default function navButtons() {
    const newTaskButton = document.getElementById("new-todo")
    const todayButton = document.getElementById("view-today")
    const upcomingButton = document.getElementById("view-upcoming")
    const overdueButton = document.getElementById("view-overdue")

    newTaskButton.addEventListener("click", () => {
        removeIndications()
        newTaskButton.classList.add("selected")
        addTask("task")
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
