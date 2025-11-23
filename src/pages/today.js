import { user } from "../userData/userData"
import { isToday, parse } from "date-fns"

export default function today() {
    const content = document.getElementById("content")
    content.innerHTML = ``

    const todayTasks = user.data.tasks.filter(task => {
        return isToday(parse(task.date, "d MMMM yyyy HH:mm", new Date()))
    })
    
}

// Check if task deadline passed
