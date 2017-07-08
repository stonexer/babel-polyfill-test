import path from 'path';

const webpackConfig = {
    entry: {
        'transform-plugins': './src/transform-plugins',
        'transform-runtime': './src/transform-runtime',
        polyfill: './src/polyfill',
        ie9: './src/ie9',
        chrome: './src/chrome',
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
