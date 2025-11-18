function userData() {
    const data = {
        projects: [],
        tasks: [],
    }

    const addTask = task => {
        data.tasks.push(task)
    }

    return { data, addTask }
}

const user = new userData()

export { user }
