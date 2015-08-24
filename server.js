// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');

// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true,
//   stats: {
//     colors: true
//   }
// }).listen(process.env.PORT || 3000, function (err) {
//   if (err) {
//     console.log(err);
//   }

//   console.log('Listening at localhost:3000');
// });

var express = require("express");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 3000;

app.use('/static', express.static("static"));

app.get('/', function (req, res) {
  var html = fs.readFileSync(__dirname + '/index.html', { encoding:'utf8' });
  return res.status(200).send(html);
});

app.listen(PORT, function () {
  console.log("Server Listen on", PORT);
});
