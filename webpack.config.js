const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[name].bundle.js',
    library: 'app'
  },
  module: {
    rules: [
      // Dependent HTML files
      // https://webpack.js.org/loaders/html-loader/#export-into-html-files
      {
        test: /\.html$/,
        exclude: path.resolve(__dirname, 'public/index.html'),
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]', outputPath: 'pages/' }
          },
          'extract-loader',
          { loader: 'html-loader', options: { minimize: true } }
        ]
      },
      // Markdown
      {
        test: /\.md$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].html', outputPath: 'pages/' }
          },
          'extract-loader',
          { loader: 'html-loader' },
          { loader: 'markdown-loader' }
        ]
      },
      // Stylesheets
      {
        test: /\.(scss)$/,
        use: [
          { loader: 'style-loader' }, // inject CSS to page
          { loader: 'css-loader' }, // translates CSS into CommonJS modules
          {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              // postcss plugins, can be exported to postcss.config.js
              plugins: function() {
                return [require('autoprefixer')];
              }
            }
          },
          { loader: 'sass-loader' } // compiles Sass to CSS
        ]
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
        'theme-color': '#81d8d0',
        description: 'Testing Workbox'
      },
      // for reading/debugging
      minify: false
    }),
    // Cleaner
    new CleanWebpackPlugin(['dist'], { verbose: true }),
    // Manifest
    new ManifestPlugin({
      seed: {
        name: 'Workbox',
        short_name: 'workbox',
        icons: [
          {
            src: './img/miku-chibi-by-chipmunkintheblender-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './img/miku-chibi-by-chipmunkintheblender-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        start_url: './index.html',
        display: 'standalone',
        background_color: '#101111',
        theme_color: '#81d8d0'
      }
    }),
    // Workbox plugin
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/sw.js'
    })
  ]
};
