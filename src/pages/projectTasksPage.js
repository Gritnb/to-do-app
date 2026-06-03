import { user } from "../userData/userData"

export default function projectTasksPage(id) {

    const projectTasks = user.getTask(id, "project").tasks
    console.log(projectTasks)

}
