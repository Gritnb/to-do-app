import addTask from "../pages/addTask"
import removeIndications from "../utils/selectedUI"

export default function emptyPage() {
    const emptyPage = document.createElement("div")
    emptyPage.className = "nothing-container"

    const icon = document.createElement("p")
    icon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            class="nothing-icon">
            <title>Nothing Here</title>
            <path fill="var(--icon-color)"
            d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.2L4 17.2V4H20V16M17 11H15V9H17M13 11H11V9H13M9 11H7V9H9" /></svg>
    `

    const message = document.createElement("h1")
    message.textContent = "Nothing Here"

    const prompt = document.createElement("p")
    prompt.className = "nothing-prompt"
    prompt.textContent = "There are no tasks for today. "
    
    const newTasksLink = document.createElement("span")
    newTasksLink.className = "upcoming"
    newTasksLink.textContent = "Add new tasks"

    prompt.append(newTasksLink)
    emptyPage.append(icon)
    emptyPage.append(message)
    emptyPage.append(prompt)

    newTasksLink.addEventListener("click", () => {
        removeIndications()
        document.getElementById("new-todo").classList.add("selected")
        addTask()
    })

    return emptyPage
}
