export function project(title, description, priority, date) {
    const tasks = []

    return {
        id: crypto.randomUUID(),
        title,
        description,
        priority,
        date,
    }
}
