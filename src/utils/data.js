import Todo from "../todo"; 

export const userData = {
    projects: [],
    todos: [
        {
            test: (new Todo("Welcome", "It's your first task", "now", "urgent", "test")),
            test1: (new Todo("Your first task", "It's your first task", "now", "urgent", "test"))
        }   
    ]
}
