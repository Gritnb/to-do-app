import { user } from "../userData/userData"
import FullToMs from "../utils/fullDateToMs"
import taskCards from "../components/tasksCards"

export default function upcoming() {
    const upcoming = user.getUpcomingTasks().sort((a, b) => {
        return FullToMs(a.date) - FullToMs(b.date)
    })
    taskCards(upcoming, "upcoming")
}
