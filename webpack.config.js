const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/script.js',
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer:{
      static:'./dist',
      headers: {
        'Access-Control-Allow-Origin': 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
      },
  }
};