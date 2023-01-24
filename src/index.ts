export function serial<T extends unknown[], U = unknown>(
  [firstTask, ...restTasks]: T,
  fn: (task: T[number], previous: U | null) => Promise<U>
) {
  /* eslint-disable-next-line unicorn/no-null */
  let promise = fn(firstTask, null);

  for (const task of restTasks) {
    promise = promise.then((previous) => fn(task, previous));
  }

  return promise;
}

export function parallel<T extends unknown[], U extends unknown[]>(
  tasks: T,
  fn: (task: T[number]) => Promise<U[number]>
) {
  return Promise.all(tasks.map((task) => fn(task)));
}
