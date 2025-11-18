import { format, parseISO } from "date-fns";
import handleTaskData from "./handleTaskData"
import displayMyTasks from "../sidebar/myTasks"

export default function handleForm(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const title = data.get("title")
    const description = data.get("description")
    const priority = data.get("priority")
    const date = parseISO(data.get("date"))
    const dateFormatted = format(date, "dd MMMM yyyy HH:mm")
    handleTaskData(title, description, priority, dateFormatted)
    event.target.reset()
    displayMyTasks()
}
