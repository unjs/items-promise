# items-promise

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

> Bare minimum async methods using promises. (Inspired by [items](https://www.npmjs.com/package/items))

## Usage

Install package:

```sh
# npm
npm install items-promise

# yarn
yarn add items-promise

# pnpm
pnpm install items-promise
```

Import:

```js
// ESM
import { serial, parallel } from "items-promise"

// CommonJS
const { serial, parallel } = require("items-promise")
```

`tasks` should be always an array and `fn` should be a function which returns a `Promise`.

### serial(tasks, fn)

Run tasks one by one by calling `fn(task, previous)` in a promise chain.

Return value is of type `Promise<*>` which resolves to the **last** `fn` result.

### parallel(tasks, fn)

Run all tasks in parallel by calling `fn(tasks)` and await using `Promise.all`.

Return value is of type `Promise<*[]>` which resolves to results of **all** `fn`s in the array.

## Development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/items-promise?style=flat-square
[npm-version-href]: https://npmjs.com/package/items-promise
[npm-downloads-src]: https://img.shields.io/npm/dm/items-promise?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/items-promise
[github-actions-src]: https://img.shields.io/github/workflow/status/unjs/items-promise/ci/main?style=flat-square
[github-actions-href]: https://github.com/unjs/items-promise/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/items-promise/main?style=flat-square
[codecov-href]: https://codecov.io/gh/unjs/items-promise
