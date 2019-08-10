const webpack = require('webpack');
const path = require('path');

// webpack 4 已经废弃了ensure 方法
module.exports = {
    entry: {
        ensure: './src/ensure/page1',
        venor: ['lodash']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    pulgin: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vender', 'manifest'],
            minChunks: Infinity
        })
    ]
}