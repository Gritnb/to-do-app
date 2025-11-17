export default function Todo(title, description, priority, date) {
    return {
        id: crypto.randomUUID(),
        title,
        description,
        priority,
        date
    }
}
