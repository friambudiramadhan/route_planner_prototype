const path = require('path')

module.exports = {
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    mode: 'development',
    module: {
        rules: []
    },
    watch: true,
    watchOptions: {
        ignored: './node_modules/'
    }
}