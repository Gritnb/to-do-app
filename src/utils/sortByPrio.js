import fullToMs from "./fullDateToMs"

export default function sortByPrio(tasks) {
    return tasks.sort((a, b) => {
        return fullToMs(b.date) - fullToMs(a.date)
        // Currently sorts by date descending for testing.
    })
}
