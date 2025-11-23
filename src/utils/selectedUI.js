export default function selectedUI() {
    const navItems = Array.from(document.querySelectorAll(".nav-btn"))
    navItems.forEach(item => {
        item.classList.remove("selected")
    })
    const taskItems = Array.from(document.querySelectorAll(".task-element"))
    taskItems.forEach(item => {
        item.classList.remove("selected")
    })
}
