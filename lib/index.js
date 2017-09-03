
function serial(tasks, fn) {
    return tasks.reduce((promise, task) => promise.then(previous => fn(task, previous)), Promise.resolve(null))
}

function parallel(tasks, fn) {
    return Promise.all(tasks.map(task => fn(task)))
}

module.exports = {
    serial,
    parallel
}