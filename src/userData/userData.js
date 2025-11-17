export default (function userData() {
    const data = []

    const add = (todo) => data.push(todo)

    return { data, add }
})()
