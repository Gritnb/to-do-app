import { parse } from "date-fns"

export default function fullToMs(item) {
    const date = parse(item, "d MMMM yyyy HH:mm", new Date())
    return date.getTime()
}
