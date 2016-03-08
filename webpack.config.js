var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  devtool: 'source-maps',

  entry: [
    './src/index.js',
    './src/styles/main.less'
  ],

  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      },

      // { test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      // },

      {
        test: /\.less$/,
        // loader: "style!css!autoprefixer!less"
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader!autoprefixer")
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};


