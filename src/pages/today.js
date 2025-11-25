import { user } from "../userData/userData"
import taskCards from "../components/tasksCards"

export default function today() {
    const todayTasks = user.getTodayTasks()
    taskCards(todayTasks, "today")
}
