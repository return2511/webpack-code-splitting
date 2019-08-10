const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        ensure: './src/dynamic/page1',
        venor: ['lodash']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        publicPath: './dist/'
    },
    // pulgin: [
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name: ['vender', 'manifest'],
    //         minChunks: Infinity
    //     })
    // ]
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};