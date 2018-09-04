const express = require('express')
const path = require('path')
const html = require('./template')

const DIST_DIR = path.join(__dirname, "../dist"),
    PORT = 3000,
    app = express()

//Serving the static files from the dist folder
app.use(express.static(DIST_DIR))

//Send javascript html template when the user access the web
app.get("*", (req, res) => res.send(html) )

app.listen(PORT, () => console.log('Example app listening on port 3000!'))
