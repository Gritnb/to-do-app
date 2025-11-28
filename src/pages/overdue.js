import { user } from "../userData/userData"
import sortByDate from "../utils/sortByDate"
import taskCards from "../components/tasksCards"

export default function overdue() {
    const overdue = sortByDate(user.getOverdueTasks())
    taskCards(overdue, "overdue")
}
