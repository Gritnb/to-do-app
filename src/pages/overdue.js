import { user } from "../userData/userData"
import FullToMs from "../utils/fullDateToMs"
import taskCards from "../components/tasksCards"

export default function overdue() {
    const overdue = user.getOverdueTasks().sort((a, b) => {
        return FullToMs(a.date) - FullToMs(b.date)
    })
    taskCards(overdue, "overdue")
}
