import { user } from "../userData/userData"
import sortByDate from "../utils/sortByDate"
import taskCards from "../components/tasksCards"

export default function upcoming() {
    const upcoming = sortByDate(user.getUpcomingTasks())
    taskCards(upcoming, "upcoming")
}
