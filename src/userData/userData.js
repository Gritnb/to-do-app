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

    const removeTask = id => {
        const index = data.tasks.findIndex(item => item.id === id)
        data.tasks.splice(index, 1)
    }

    const setData = storage => {
        data.tasks = storage.tasks || []
        data.projects = storage.projects || []
    }

    return { data, setData, getTask, addTask, removeTask, changeTaskTitle }
}

const user = new userData()

export { user }
