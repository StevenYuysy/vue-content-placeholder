const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const base = require('./webpack.base.conf')

const config = Object.assign({}, base)

config.output.filename = 'vue-content-placeholder.min.js'

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.UglifyJsPlugin({
    compress: {warnings: false}
  }),
  new CopyWebpackPlugin([
    {from: './src/ContentPlaceholder.vue'},
    {from: './src/utils.js'}
  ]),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  })
])

module.exports = config
