export default function changeTheme() {
    const root = document.documentElement
    const lightIcon = document.getElementById('light-icon')
    const darkIcon = document.getElementById('dark-icon')

    const newTheme = root.className === "dark" ? "light" : "dark"

    if (newTheme === "light") {
        darkIcon.classList.remove("inactive")
        lightIcon.classList.add("inactive")
    } else {
        lightIcon.classList.remove("inactive")
        darkIcon.classList.add("inactive")
    }
    root.className = newTheme
}
