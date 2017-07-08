import path from 'path';

const webpackConfig = {
    entry: {
        polyfill: './src/polyfill',
        ie9: './src/ie9',
        chrome: './src/chrome',
        transform: './src/transform',
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
};

module.exports = webpackConfig;
