import { constructNow, format } from "date-fns";
import Task from "../factories/task";

const welcome = new Task(
    "Welcome!",
    `With this app, you can manage all of your tasks!
    Choose a title , a brief description, a date and priority.
    
    You can also create a project for associated tasks in one organized folder.

    In your dashboards (Today and Upcoming), you can sort by date or priority.

    This app is under development thus shall be used for presentational purposes only.
`,
    "normal",
    format(constructNow(), 'dd MMMM yyyy')
)

welcome.id = "welcome"

export { welcome }
