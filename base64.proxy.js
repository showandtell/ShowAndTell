var express = require("express");
var request = require("request");
var path = require("path");
 
var app = express.createServer(express.logger(), express.bodyParser());

app.use(express.static(path.join(__dirname, '')));

app.get("/batch", function(req, res) {
    if(!req.param("data")) return;
 
    var data = req.param("data");
    var callback = req.param("callback") || 'callback';
 
    if(!Array.isArray(data)) {
        data = [data];
    }
 
    var pending = data.length;
    var images = Object.create(null);
 
    data.forEach(function(current, index) {
        request({ uri: decodeURIComponent(current), encoding: 'binary'}, function(error, response, body) {
            var prefix, image;
            
            if(!error && response.statusCode == 200) {
                prefix = "data:" + response.headers["content-type"] + ";base64,";
                image = new Buffer(body.toString(), "binary").toString("base64");
                images[current] = prefix + image;
            } else {
                images[current] = null;
            }
 
            if(!--pending) {
                res.send(callback + '(' + JSON.stringify(images) + ');');
            }
        });
    });
});
 
app.listen(8080);
