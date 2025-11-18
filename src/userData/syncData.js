import { user } from "./userData.js"

export default function syncData() {
    localStorage.setItem("datafortodoapp", JSON.stringify(user.data))
}
