# @nice-move/commitlint-config [<img src="https://commitlint.js.org/assets/icon.svg" alt="commitlint" height="80" align="right">][commitlint]

A [commitlint] config created by personal preferences.

[![npm][npm-badge]][npm-url]
[![github][github-badge]][github-url]
![node][node-badge]

[commitlint]: https://commitlint.js.org/
[npm-url]: https://www.npmjs.com/package/@nice-move/commitlint-config
[npm-badge]: https://img.shields.io/npm/v/@nice-move/commitlint-config.svg?style=flat-square&logo=npm
[github-url]: https://github.com/airkro/nice-move/tree/master/packages/commitlint-config
[github-badge]: https://img.shields.io/npm/l/@nice-move/commitlint-config.svg?style=flat-square&colorB=blue&logo=github
[node-badge]: https://img.shields.io/node/v/@nice-move/commitlint-config.svg?style=flat-square&colorB=green&logo=node.js

## Installation

```bash
npm install husky commitlint @nice-move/commitlint-config --save-dev
```

## Usage

Add to package.json

```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "commitlint": {
    "extends": "@nice-move/commitlint-config"
  }
}
```

## Tips

This config including [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)