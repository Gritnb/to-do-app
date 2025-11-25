import { user } from "../userData/userData"
import taskCards from "../components/tasksCards"

export default function upcoming() {
    const upcoming = user.getUpcomingTasks()
    taskCards(upcoming, "upcoming")
}
