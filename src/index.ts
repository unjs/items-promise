export function serial<T extends unknown[], U = unknown> ([firstTask, ...restTasks]: T, fn: (task: T[number], previous: U | null) => Promise<U>) {
  return restTasks.reduce<Promise<U>>((promise, task) => promise.then(previous => fn(task, previous as U)), fn(firstTask, null))
}

export function parallel<T extends unknown[], U extends unknown[]> (tasks: T, fn: (task: T[number]) => Promise<U[number]>) {
  return Promise.all(tasks.map(task => fn(task)))
}
