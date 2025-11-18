function userData() {
    let data = {
        tasks: [],
        projects: [],
    }

    const addTask = task => {
        data.tasks.push(task)
    }

    const setData = storage => {
        data.tasks = storage.tasks || []
        data.projects = storage.projects || []
    }

    return { data, addTask, setData }
}


const user = new userData()

export { user }
