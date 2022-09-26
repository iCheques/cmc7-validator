# cmc7-validator
validator de CM7 em JavaScript.

## Installation
Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install cmc7-validator --save
```

This package is provided in these module formats:

- UMD

## TL;DR ##

```js
import CMC7Validator from 'cmc7-validator';
new CMC7Validator('450445043466147665081657326823').isValid(); // returns true
new CMC7Validator('45044504 34661476650816 57326823').isValid(); // returns true
new CMC7Validator('Oi! Oi! Oi!').isValid(); // returns false
```


## Dependencies

- checkdigit

## Dev Dependencies

- [buble](https://github.com/Rich-Harris/buble): The blazing fast, batteries-included ES2015 compiler
- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript): Airbnb's base JS ESLint config, following our styleguide
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import): Import with sanity.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- eslint
- rollup
- rollup-plugin-buble
- rollup-plugin-commonjs
- rollup-plugin-node-resolve


## License
[GPLv3](https://www.gnu.org/licenses/quick-guide-gplv3.pt-br.html)
