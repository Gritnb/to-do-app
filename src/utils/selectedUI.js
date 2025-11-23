export default function removeIndications() {
    Array.from(document.querySelectorAll(".nav-btn")).forEach(item => {
        item.classList.remove("selected")
    })
    Array.from(document.querySelectorAll(".task-element")).forEach(item => {
        item.classList.remove("selected")
    })
}
