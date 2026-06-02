export default function Project(title, description, priority, date, type) {
    const tasks = []

    return {
        id: crypto.randomUUID(),
        title,
        description,
        priority,
        date,
        tasks,
        type
    }
}
