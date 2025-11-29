export default function handleClear() {
    const form = document.querySelector(".new-task")
    form.reset()
    //Recheck the default options
    document.getElementById("task-type-id").checked = true
    document.getElementById("low-prio-id").checked = true
}
