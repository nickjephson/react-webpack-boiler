var express = require('express')
var path = require('path')
var app = express()

var DIST_DIR = path.join(__dirname, "../dist"),
    PORT = 3000,
    app = express();

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get("*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => console.log('Example app listening on port 3000!'));
