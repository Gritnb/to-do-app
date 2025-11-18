import { format } from "date-fns"
import handleClear from "../handlers/handleClear"
import handleTaskForm from "../handlers/handleTaskForm"

export default function addTask() {
    const content = document.getElementById("content")
    content.innerHTML = ``

    const form = document.createElement("form")
    form.classList.add("new-task")

    const header = document.createElement("h1")
    header.textContent = `New Task`

    const required = document.createElement("span")
    required.classList.add("required")
    required.textContent = ` *`

    const checkmark = document.createElement("span")
    checkmark.classList.add("checkmark")
    // Title field
    const titleField = document.createElement("fieldset")
    titleField.classList.add("title-field")

    const titleLabel = document.createElement("label")
    titleLabel.htmlFor = "task-title"
    titleLabel.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24"
             class="icon-small">
             <title>Edit</title>
             <path fill="var(--icon-color)"
                   d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
        </svg>
    `

    const titleInput = document.createElement("input")
    titleInput.type = "text"
    titleInput.id = "task-title"
    titleInput.name = "title"
    titleInput.minLength = "3"
    titleInput.maxLength = "24"
    titleInput.placeholder = "Title"
    titleInput.autocomplete = "off"
    titleInput.required = true

    titleField.append(titleLabel)
    titleField.append(titleInput)
    // Description field
    const descriptionField = document.createElement("fieldset")
    descriptionField.classList.add("vertical-fields")

    const descriptionLabel = document.createElement("label")
    descriptionLabel.htmlFor = "task-description"
    descriptionLabel.textContent = "Description"
    const descriptionReq = required.cloneNode(true)
    descriptionLabel.append(descriptionReq)

    const descriptionInput = document.createElement("textarea")
    descriptionInput.id = "task-description"
    descriptionInput.name = "description"
    descriptionInput.autocomplete = "off"
    descriptionInput.required = true

    descriptionField.append(descriptionLabel)
    descriptionField.append(descriptionInput)
    // Priority field
    const priorityField = document.createElement("fieldset")
    priorityField.classList.add("vertical-fields")

    const priorityLabel = document.createElement("label")
    priorityLabel.textContent = "Priority"
    const priorityReq = required.cloneNode(true)
    priorityLabel.append(priorityReq)

    const priorityContainer = document.createElement("div")
    priorityContainer.classList.add("prio-buttons")

    const lowPrio = document.createElement("label")
    lowPrio.className = "radio low-badge"
    lowPrio.textContent = "Low"

    const lowPrioRadio = document.createElement("input")
    lowPrioRadio.type = "radio"
    lowPrioRadio.className = "radio-btn"
    lowPrioRadio.name = "priority"
    lowPrioRadio.value = "low"
    lowPrioRadio.checked = true
    const lowPrioCheck = checkmark.cloneNode(true)

    lowPrio.append(lowPrioRadio)
    lowPrio.append(lowPrioCheck)

    const normalPrio = document.createElement("label")
    normalPrio.classList.add("radio")
    normalPrio.classList.add("normal-badge")
    normalPrio.textContent = "Normal"

    const normalPrioRadio = document.createElement("input")
    normalPrioRadio.type = "radio"
    normalPrioRadio.className = "radio-btn"
    normalPrioRadio.name = "priority"
    normalPrioRadio.value = "normal"
    const normalPrioCheck = checkmark.cloneNode(true)

    normalPrio.append(normalPrioRadio)
    normalPrio.append(normalPrioCheck)

    const highPrio = document.createElement("label")
    highPrio.classList.add("radio")
    highPrio.classList.add("high-badge")
    highPrio.textContent = "High"

    const highPrioRadio = document.createElement("input")
    highPrioRadio.type = "radio"
    highPrioRadio.className = "radio-btn"
    highPrioRadio.name = "priority"
    highPrioRadio.value = "high"

    const highPrioCheck = checkmark.cloneNode(true)

    highPrio.append(highPrioRadio)
    highPrio.append(highPrioCheck)

    const urgentPrio = document.createElement("label")
    urgentPrio.classList.add("radio")
    urgentPrio.classList.add("urgent-badge")
    urgentPrio.textContent = "Urgent"

    const urgentPrioRadio = document.createElement("input")
    urgentPrioRadio.type = "radio"
    urgentPrioRadio.className = "radio-btn"
    urgentPrioRadio.name = "priority"
    urgentPrioRadio.value = "urgent"

    const urgentPrioCheck = checkmark.cloneNode(true)

    urgentPrio.append(urgentPrioRadio)
    urgentPrio.append(urgentPrioCheck)

    priorityContainer.append(lowPrio)
    priorityContainer.append(normalPrio)
    priorityContainer.append(highPrio)
    priorityContainer.append(urgentPrio)

    priorityField.append(priorityLabel)
    priorityField.append(priorityContainer)
    // Date
    const dateField = document.createElement("fieldset")
    dateField.className = "vertical-fields"

    const dateLabel = document.createElement("label")
    dateLabel.htmlFor = "task-date"
    dateLabel.textContent = "Due Date"
    const dateReq = required.cloneNode(true)
    dateLabel.append(dateReq)

    const dateInput = document.createElement("input")
    dateInput.type = "datetime-local"
    dateInput.id = "task-date"
    dateInput.name = "date"
    dateInput.min = `${format(new Date(), "yyyy-MM-dd'T'HH:mm")}`
    dateInput.max = "9999-12-30T16:30"
    dateInput.required = true

    dateField.append(dateLabel)
    dateField.append(dateInput)
    // Buttons
    const buttonsField = document.createElement("div")
    buttonsField.className = "form-buttons"

    const clearButton = document.createElement("button")
    clearButton.type = "reset"
    clearButton.className = "form-btn clear-btn"
    clearButton.textContent = "Clear"

    const addButton = document.createElement("button")
    addButton.type = "submit"
    addButton.className = "form-btn submit-btn"
    addButton.textContent = "Add Task"
    
    buttonsField.append(clearButton)
    buttonsField.append(addButton)

    form.append(header)
    form.append(titleField)
    form.append(descriptionField)
    form.append(priorityField)
    form.append(dateField)
    form.append(buttonsField)

    content.append(form)

    clearButton.addEventListener('click', handleClear)
    form.addEventListener('submit', handleTaskForm)
}
