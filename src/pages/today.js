import { user } from "../userData/userData"
import sortByDate from "../utils/sortByDate"
import taskCards from "../components/tasksCards"

export default function today() {
    const todayTasks = sortByDate(user.getTodayTasks())
    taskCards(todayTasks, "today")
}
