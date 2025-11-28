import { priorityMap } from "./priotityMap"

export default function sortByPrio(tasks) {
    return tasks.sort((a, b) => {
        return priorityMap[b.priority] - priorityMap[a.priority]
    })
}
