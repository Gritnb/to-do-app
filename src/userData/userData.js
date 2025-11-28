import { parse, isPast, isToday, isFuture } from "date-fns"
import syncData from "./syncData"

function userData() {
    let data = {
        tasks: [],
        projects: [],
    }

    let viewingModeDate = true

    const getViewingMode = () => viewingModeDate

    const setViewingMode = () => viewingModeDate = !viewingModeDate

    const getTask = id => data.tasks.filter(target => target.id === id)[0]

    const getTaskIndex = id => {
        return data.tasks.findIndex(item => item.id === id)
    }

    const addTask = task => {
        data.tasks.push(task)
        syncData()
    }

    const changeTaskTitle = (id, title) => {
        const index = getTaskIndex(id)
        data.tasks[index].title = title
        syncData()
    }

    const changeTaskDescription = (id, description) => {
        const index = getTaskIndex(id)
        data.tasks[index].description = description
        syncData()
    }

    const changeTaskDate = (id, date) => {
        const index = getTaskIndex(id)
        data.tasks[index]. date = date
        syncData()
    }

    const changePriority = (id, priority) => {
        const index = getTaskIndex(id)
        data.tasks[index].priority = priority
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

    const removeTask = id => {
        const index = data.tasks.findIndex(item => item.id === id)
        data.tasks.splice(index, 1)
        syncData()
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
        setViewingMode
    }
}

const user = new userData()

export { user }
