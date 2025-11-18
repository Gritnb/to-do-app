import { constructNow, format } from "date-fns";

import Task from "../factories/task";

const welcome = new Task(
    "Welcome!",
    "With this app, you can manage all of your tasks!",
    "urgent",
    format(constructNow(), 'dd MMMM yyyy')
)

export { welcome }
