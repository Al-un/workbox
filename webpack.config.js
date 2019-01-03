const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/sw.js'
    })
  ]
};
