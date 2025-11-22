function userData() {
    let data = {
        tasks: [],
        projects: [],
    }

    const getTask = id => data.tasks.filter(target => target.id === id)[0]

    const addTask = task => {
        data.tasks.push(task)
    }

    const changeTaskTitle = (id, title) => {
        const index = data.tasks.findIndex(item => item.id === id)
        data.tasks[index].title = title
    }

    const changeTaskDescription = (id, description) => {
        const index = data.tasks.findIndex(item => item.id === id)
        data.tasks[index].description = description
    }

    const changeTaskDate = (id, date) => {
        const index = data.tasks.findIndex(item => item.id === id)
        data.tasks[index]. date = date
    }

    const changePriority = (id, priority) => {
        const index = data.tasks.findIndex(item => item.id === id)
        data.tasks[index].priority = priority
    }

    const removeTask = id => {
        const index = data.tasks.findIndex(item => item.id === id)
        data.tasks.splice(index, 1)
    }

    const setData = storage => {
        data.tasks = storage.tasks || []
        data.projects = storage.projects || []
    }

    return { 
        data, 
        setData, 
        getTask, 
        addTask, 
        removeTask, 
        changeTaskTitle, 
        changeTaskDescription,
        changeTaskDate,
        changePriority
    }
}

const user = new userData()

export { user }
