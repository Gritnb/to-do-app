export default function Task(title, description, priority, date) {
    
    return {
        id: crypto.randomUUID(),
        title,
        description,
        priority,
        date
    }
}
