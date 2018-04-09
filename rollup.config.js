const buble = require('rollup-plugin-buble');
const commonjs = require('rollup-plugin-commonjs');
const node = require('rollup-plugin-node-resolve');


module.exports = {
  input: './lib/cmc7-validador.js',
  plugins: [
    node({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    buble(),
  ],
  output: {
    name: 'CMC7Validator',
    exports: 'default',
    file: 'bundle.js',
    format: 'umd',
  },
};
