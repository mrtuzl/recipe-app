const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
  },
  
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    resolve: {
        alias: {
          'react-icons': path.resolve(__dirname, 'node_modules/react-icons/'),
        },
      },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                }
            },
            {
                    test: /\.scss$/,  
                    use: ['style-loader', 'css-loader', 'sass-loader'],  
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images/',
                    },
                  },
                ]
            }
        ]
    }

}