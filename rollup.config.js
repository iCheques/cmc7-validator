import buble from '@rollup/plugin-buble';
import commonjs from '@rollup/plugin-commonjs';
import node from '@rollup/plugin-node-resolve';

export default {
  input: './lib/cmc7-validator.js',
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