import Task from "../factories/task"
import Project from "../factories/project"
import { user } from "../userData/userData"

export default function handleTaskData(title, description, priority, date, type) {
    if (type === "task") {
        const newTask = new Task(title, description, priority, date, type)
        user.addTask(newTask)
    }
    if (type === "project") {
        const newProject = new Project(title, description, priority, date, type)
        user.addProject(newProject)
    }
    
}
