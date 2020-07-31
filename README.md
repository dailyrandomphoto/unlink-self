# unlink-self

[![NPM Version][npm-version-image]][npm-url]
[![LICENSE][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![code style: prettier][code-style-prettier-image]][code-style-prettier-url]

Delete symbolic link(`node_modules/"package-name"`) of current package before run `npm install`.

## Installation

```sh
npm install unlink-self
```

## Usages

Add this to "`scripts`" of `package.json`.

```
"preinstall": "unlink-self 2>&1 | echo unlink-self"
```

## License

Copyright (c) 2020 [dailyrandomphoto][my-url]. Licensed under the [MIT license][license-url].

[my-url]: https://github.com/dailyrandomphoto
[npm-url]: https://www.npmjs.com/package/unlink-self
[travis-url]: https://travis-ci.org/dailyrandomphoto/unlink-self
[license-url]: LICENSE
[code-style-prettier-url]: https://github.com/prettier/prettier
[npm-downloads-image]: https://img.shields.io/npm/dm/unlink-self
[npm-version-image]: https://img.shields.io/npm/v/unlink-self
[license-image]: https://img.shields.io/npm/l/unlink-self
[travis-image]: https://img.shields.io/travis/dailyrandomphoto/unlink-self
[code-style-prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
