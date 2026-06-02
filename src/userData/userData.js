import { parse, isPast, isToday, isFuture } from "date-fns"
import syncData from "./syncData"

function userData() {
    let data = {
        tasks: [],
        projects: [],
    }

    let viewingModeDate = true

    const getViewingMode = () => viewingModeDate

    const toggleViewingMode = () => viewingModeDate = !viewingModeDate

    const getTask = (id, type) => {
        if (type === "task") {
            return data.tasks.filter(target => target.id === id)[0]
        }
        if (type === "project") {
            return data.projects.filter(target => target.id === id)[0]
        }
    }

    const getTaskIndex = (id, type) => {
        if (type === "task") {
            return data.tasks.findIndex(item => item.id === id)
        }
        if (type === "project") {
            return data.projects.findIndex(item => item.id === id)
        }
    }

    const addTask = task => {
        data.tasks.push(task)
        syncData()
    }

    const addProject = project => {
        data.projects.push(project)
        syncData()
    }

    const changeTaskTitle = (id, title, type) => {
        const index = getTaskIndex(id, type)
        if (type === "task") {
            data.tasks[index].title = title
        }
        if (type === "project") {
            data.projects[index].title = title
        }
        syncData()
    }

    const changeTaskDescription = (id, description, type) => {
        const index = getTaskIndex(id, type)
        if (type === "task") {
            data.tasks[index].description = description
        }
        if (type === "project") {
            data.projects[index].description = description
        }
        syncData()
    }

    const changeTaskDate = (id, date, type) => {
        const index = getTaskIndex(id, type)
        if (type === "task") {
            data.tasks[index]. date = date
        }
        if (type === "project") {
            data.projects[index]. date = date
        }
        syncData()
    }

    const changePriority = (id, priority, type) => {
        const index = getTaskIndex(id, type)
        if (type === "task") {
            data.tasks[index].priority = priority
        }
        if (type === "project") {
            data.projects[index].priority = priority
        }
        syncData() 
    }

    const getTodayTasks = () => {
        return data.tasks.filter(task => {
            return isToday(parse(task.date, "d MMMM yyyy HH:mm", new Date())) &&
                   !isPast(parse(task.date, "d MMMM yyyy HH:mm", new Date())) 
        })
    }

    const getPendingTasks = () => {
        return data.tasks.filter(task => {
            return isFuture(parse(task.date, "d MMMM yyyy HH:mm", new Date())) ||
                   isToday(parse(task.date, "d MMMM yyyy", new Date()))
        })
    }

    const getUpcomingTasks = () => {
        return data.tasks.filter(task => {
            return  isFuture(parse(task.date, "d MMMM yyyy HH:mm", new Date())) &&
                    !isToday(parse(task.date, "d MMMM yyyy HH:mm", new Date()))
        })
    }

    const getOverdueTasks = () => {
        return data.tasks.filter(task => {
            return isPast(parse(task.date, "d MMMM yyyy HH:mm", new Date()))
        })
    }

    const removeTask = (id, type) => {
        if (type === "task") {
            const index = data.tasks.findIndex(item => item.id === id)
            data.tasks.splice(index, 1)
        }
        if (type === "project") {
            const index = data.projects.findIndex(item => item.id === id)
            data.projects.splice(index, 1)
        }
        syncData()
    }

    const getProjects = () =>{
        return data.projects
    }

    const setData = storage => {
        data.tasks = storage.tasks || []
        data.projects = storage.projects || []
        syncData()
    }

    return { 
        data, 
        setData, 
        getTask, 
        addTask,
        addProject, 
        removeTask, 
        changeTaskTitle, 
        changeTaskDescription,
        changeTaskDate,
        changePriority,
        getTodayTasks,
        getPendingTasks,
        getUpcomingTasks,
        getOverdueTasks,
        getViewingMode,
        toggleViewingMode,
        getProjects
    }
}

const user = new userData()

export { user }
