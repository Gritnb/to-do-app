import { user } from "../userData/userData"
import fullToMs from "../utils/fullDateToMs"
import taskCards from "../components/tasksCards"

export default function today() {
    const todayTasks = user.getTodayTasks().sort((a, b) => {
        return fullToMs(a.date) - fullToMs(b.date)
    })    
    taskCards(todayTasks, "today")
}
