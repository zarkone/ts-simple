const { CheckerPlugin } = require('awesome-typescript-loader');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const nodeExternals = require('webpack-node-externals');


module.exports = [
    {
        entry: {
            browser: './src/browser.tsx',
        },

        watchOptions: {
            aggregateTimeout: 10000,
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].js',
        },
        // Currently we need to add '.ts' to the resolve.extensions array.
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },

        // Source maps support ('inline-source-map' also works)
        devtool: 'source-map',

        // Add the loader for .ts files.
        module: {
            loaders: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                }
            ],
        },
        plugins: [new LiveReloadPlugin({ delay: 500 }), new CheckerPlugin()],
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
    },
    {
        entry: {
            server: './src/server.tsx',
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].js',
        },
        // Currently we need to add '.ts' to the resolve.extensions array.
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },

        // Source maps support ('inline-source-map' also works)
        devtool: 'source-map',

        // Add the loader for .ts files.
        module: {
            loaders: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                }
            ],
        },
        plugins: [new CheckerPlugin()],
        target: 'node',
        externals: [nodeExternals()],
    },
];
