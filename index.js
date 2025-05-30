// ========================================================================
// Server init
// ========================================================================

// Filesystem reading functions
const fs = require("fs-extra");

// Load settings
try {
  stats = fs.lstatSync(__dirname + "/json/settings.json");
} catch (e) {
  // If settings do not yet exist
  if (e.code == "ENOENT") {
    try {
      fs.copySync("settings.example.json", "settings.json");
      console.log("Created new settings file.");
    } catch (e) {
      console.log(e);
      throw "Could not create new settings file.";
    }
    // Else, there was a misc error (permissions?)
  } else {
    console.log(e);
    throw "Could not read 'settings.json'.";
  }
}
// Load settings into memory
const settings = require("./json/settings.json");
// Setup basic express server
var express = require("express");
var app = express();
if (settings.express.serveStatic) app.use(express.static("./web/www"));
app.get('/readme.html', function(req, res) {
  res.sendFile(__dirname + '/web/www/readme/index.html');
});
app.get('/rules.html', function(req, res) {
  res.sendFile(__dirname + '/web/www/rules/index.html');
});
app.use(function(req, res) {
  res.status(404).type('html').sendFile(__dirname + '/404.html')
})
var server = require("http").createServer(app);

// Init socket.io
var io = require("socket.io")(server);
var port = process.env.PORT || settings.port;

exports.io = io;

const isReplit = settings.isReplit;
if (isReplit === true) {
	var port = process.env.port || settings.port;
} else {
	var port = process.env.port || settings.port;
}

// Init winston loggers (hi there)
const Log = require("./log.js");
Log.init();
const log = Log.log;

// Init sanitize-html
var sanitize = require("sanitize-html");

// Load ban list
const Ban = require("./ban.js");
Ban.init();

// Start actually listening
server.listen(port, function () {
  console.log(
    " Welcome to BonziWORLD Anony Edition Remastered!!\n", "HTTP Express Server listening on port " + port + "\n", "=+.----------------*-<|{ Logs }|>-*----------------.+=\n",
  );
});
app.use(express.static(__dirname + "/public"));

// ========================================================================
// Banning functions
// ========================================================================

// ========================================================================
// Helper functions
// ========================================================================

const Utils = require("./utils.js");

// ========================================================================
// The Beef(TM)
// ========================================================================

const Meat = require("./meat.js");
Meat.beat();

// Console commands
const Console = require("./console.js");
Console.listen();




const markup = require("./markup.js");