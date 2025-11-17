function userData() {
    const data = {
        projects: [],
        tasks: [],
    }

    const addTask = task => {
        data.tasks.push(task)
        localStorage.setItem("datafortodoapp", JSON.stringify(data))
    }

    return { data, addTask }
}

const user = new userData()

export { user }
