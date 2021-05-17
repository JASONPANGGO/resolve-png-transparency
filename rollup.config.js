import babel from 'rollup-plugin-babel'

export default {
    input: './src/png.browser.js',
    output: {
        file: './build/png.browser.min.js',
        format: 'iife',
        name: 'bundle'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}