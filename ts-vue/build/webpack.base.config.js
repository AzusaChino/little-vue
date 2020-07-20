const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'app': 'src/index.ts'
  },
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader'
        }],
        exclude: /node_modules/
      }
    ]
  }
}
