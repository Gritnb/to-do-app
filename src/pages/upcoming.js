import { user } from "../userData/userData"
import fullToMs from "../utils/fullDateToMs"
import taskCards from "../components/tasksCards"

export default function upcoming() {
    const upcoming = user.getUpcomingTasks().sort((a, b) => {
        return fullToMs(a.date) - fullToMs(b.date)
    })
    taskCards(upcoming, "upcoming")
}
