import fullToMs from "./fullDateToMs"

export default function sortByDate(tasks) {
    return tasks.sort((a, b) => {
        return fullToMs(a.date) - fullToMs(b.date)
    })
}
