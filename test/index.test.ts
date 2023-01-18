import { expect, it, describe } from 'vitest'
import { serial, parallel } from '../src'

describe('items-promise', () => {
  it('returns result of the last task', async () => {
    const tasks = [1, '2', 3, 4]

    const result = await serial(tasks, (task, previous) => {
      return Promise.resolve(Number(task) + Number(previous))
    })

    expect(result).equal(10)
  })

  it('returns results of tasks', async () => {
    const tasks = [1, '2', 3, 4]

    const result = await parallel(tasks, task => Promise.resolve(Number(task) + 1))

    expect(result).toStrictEqual([2, 3, 4, 5])
  })
})
