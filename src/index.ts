export function serial<T extends unknown[], U = unknown> (tasks: T, fn: (task: T[number], previous: U) => Promise<U>) {
  return tasks.reduce<Promise<U>>((promise, task) => promise.then(previous => fn(task, previous as U)), Promise.resolve(null as U))
}

export function parallel<T extends unknown[], U extends unknown[]> (tasks: T, fn: (task: T[number]) => Promise<U[number]>) {
  return Promise.all(tasks.map(task => fn(task)))
}
