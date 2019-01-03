const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // Stylesheets
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      // Pictures
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // HTMl plugin
    new HtmlWebpackPlugin({
      title: 'Workbox',
      favicon: path.resolve(__dirname, 'src', 'favicon.ico'),
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html',
      // https://github.com/joshbuchea/HEAD#meta
      meta: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        'theme-color': '#1fa3c4',
        description: 'Testing Workbox'
      },
      // for reading/debugging
      minify: false
    }),
    // Workbox plugin
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/sw.js'
    })
  ]
};
