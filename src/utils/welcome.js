import { constructNow, format } from "date-fns";
import Task from "../factories/task";
import Project from "../factories/project";

const welcome = new Task(
    "Welcome!",
    `With this app, you can manage all of your tasks!
    Choose a title , a brief description, a date and priority.
    
    You can also create a project for associated tasks in one organized folder.

    In your dashboards (Today and Upcoming), you can sort by date or priority.

    This app is under development thus shall be used for presentational purposes only.
    `,
    "normal",
    format(constructNow(), 'dd MMMM yyyy',),
    "task"
)

welcome.id = "welcome"

const welcomeProject = new Project(
    "Welcome!",
    `With this app, you can manage all of your projects!
    Choose a title , a brief description, a date and priority.
    
    You can also create a single task if the job is simple enough!

    In your dashboards (Today and Upcoming), you can sort by date or priority.

    This app is under development thus shall be used for presentational purposes only.
    `,
    "normal",
    format(constructNow(), 'dd MMMM yyyy',),
    "project"
)

welcomeProject.id = "welcome-project"

export { welcome, welcomeProject }
