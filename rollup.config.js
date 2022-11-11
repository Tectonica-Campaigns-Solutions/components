import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: './src/index.js',
    output: [
      { file: 'dist/index.js', format: 'es'}
    ],
    plugins: [
      babel(),
      commonjs(),
      peerDepsExternal(),
      nodeResolve(),
    ]
  }
]