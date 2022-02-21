const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/script.js',
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer:{
      static:'./dist',
  }
};