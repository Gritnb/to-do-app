export default function Task(title, description, priority, date, type) {
    
    return {
        id: crypto.randomUUID(),
        title,
        description,
        priority,
        date,
        type
    }
}
