const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config.base')
module.exports = {
    ...base,
    mode: 'production',
    module: {

        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ],
            },
        ],
    },

    plugins: [...base.plugins,
        new MiniCssExtractPlugin({
        filename: '[style].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),],
};