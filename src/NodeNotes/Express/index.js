const express = require('express')
const app = express();

// app.get(path, callbackFunction AKA RouteHandler (req, res) => {

// }) 
// )

app.get("/", (req, res) => {
    res.send("hello world")
});

app.listen(3000, () => console.log('listening on port 3000'))