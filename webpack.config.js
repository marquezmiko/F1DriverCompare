const path = require('path');

//Webpack configuration to serve assets

var SRC_DIR = path.join(__dirname, 'client/src');

// Update this next variable to point to the folder
// where webpack will write the final bundled file.
// Have this variable resolve to the "dist" folder inside of "./client"
var DIST_DIR = path.join(__dirname, 'client/dist');


module.exports = {

  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },


  module: {

    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
};
