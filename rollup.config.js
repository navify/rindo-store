import pkg from './package.json';

export default {
  input: 'build/index.js',

  output: [
    {
      format: 'cjs',
      file: pkg.main,
    },
    {
      format: 'esm',
      file: pkg.module,
    },
  ],
  external: ['@rindo/core']
};
