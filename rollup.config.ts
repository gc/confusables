import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import progress from 'rollup-plugin-progress';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: './dist/index.js',
			format: 'cjs',
			exports: 'named',
			sourcemap: true
		},
		{
			file: './dist/index.es.js',
			format: 'es',
			exports: 'named',
			sourcemap: true
		},
		{
			file: './dist/index.umd.js',
			name: 'confusables',
			format: 'umd',
			exports: 'named',
			sourcemap: true
		}
	],
	plugins: [
		progress(),
		resolve(),
		typescript({
			rollupCommonJSResolveHack: true,
			clean: true
		}),
		commonjs(),
		terser({ ecma: 6 })
	]
};
