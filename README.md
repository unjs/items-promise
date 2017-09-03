# items-promise
Bare minimum async methods using promises. (Inspired by [items](https://www.npmjs.com/package/items))

```bash
>_ yarn add items-promise
```

OR using NPM

```bash
>_ npm install items-promise
```

```js
const { serial, parallel } = require('items-promise')

// OR

import { serial, parallel } from 'items-promise'
```

# Usage
`tasks` should be always an array and `fn` should be a function witch returns a **Promise** object.

## serial(tasks, fn)

Run tasks one by one by calling `fn(task, previous)` in a promise chain.

Return value is of type `Promise<*>` which resolves to the **last** fn result.

## parallel(tasks, fn)

Run all tasks in parallel by calling `fn(tasks)` and await using `Promise.all`.

Return value is of type `Promise<Array[*]>` which resolves to results of **all** fns in an array.


# License
Released under The MIT [LICENSE](./LICENSE)

Copyright (c) 2017 Pooya Parsa
