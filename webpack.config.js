const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = true;

module.exports = {
  entry: './assets/scss/index.scss',
  output: {
    path: `${__dirname}/assets/css`
  },
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  resolve: {
    extensions: ['.scss']
  }
};
