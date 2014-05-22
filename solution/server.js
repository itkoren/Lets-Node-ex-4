// Include The 'http' Module
var http = require("http");

// Include The 'url' Module
var url = require("url");

// Include The 'request' Module
var request = require("request");

// Include The 'sentiment' Module
var sentiment = require("sentiment");

// Create the HTTP Server
var server = http.createServer(function(req, res) {
    // Handle HTTP Request

}).listen(process.env.PORT || 8000, process.env.HOST || "0.0.0.0", function() {
    console.log("HTTP Server Started. Listening on " + server.address().address + " : Port " + server.address().port);
});