import handleTaskData from "./handleTaskData"
import displayMyTasks from "../sidebar/myTasks"

export default function handleForm(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const title = data.get("title")
    const description = data.get("description")
    const priority = data.get("priority")
    const date = data.get("date")
    handleTaskData(title, description, priority, date)
    event.target.reset()
    displayMyTasks()
}
