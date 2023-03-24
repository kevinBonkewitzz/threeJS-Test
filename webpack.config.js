const path = require('path');

// module.exports = {
//     mode: 'development',
//   entry: './src/index.ts',
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };

// //Ensure html-webpack-plugin is pre-installed via npm.
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
            {
                test: /\.txt$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimise: true }
                    }
                ]
            },
        ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: "./index.html"
        }),
    ],  

    // Ensure HMR (hot module replacement) for ordinary files in dev server
    devServer: {
        hot:true,
        open:true,
        watchFiles: ['src/**/*']
      },
};