import { user } from "../userData/userData"
import fullToMs from "../utils/fullDateToMs"
import taskCards from "../components/tasksCards"

export default function overdue() {
    const overdue = user.getOverdueTasks().sort((a, b) => {
        return fullToMs(b.date) - fullToMs(a.date)
    })
    taskCards(overdue, "overdue")
}
