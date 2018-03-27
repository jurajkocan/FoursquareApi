// @ts-check

const path = require('path');
const Webpack = require('webpack');

const config = {
    context: __dirname,
    entry: {
        app: './lib/frontend/RenderAppClient.tsx'
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader?configFile=tsconfig.json',
                options: {
                    configFile: 'tsconfig.json'
                }
            }
        ]
    }
};

module.exports = config;
