import { user } from "../userData/userData"
import FullToMs from "../utils/fullDateToMs"
import taskCards from "../components/tasksCards"

export default function today() {
    const todayTasks = user.getTodayTasks().sort((a, b) => {
        return FullToMs(a.date) - FullToMs(b.date)
    })    
    taskCards(todayTasks, "today")
}
