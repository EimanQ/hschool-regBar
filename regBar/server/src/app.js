const express = require("express");
const bodyParser = require("body-parser")
const api = require("./api/api.controller")
const app = express();

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());

app.use("/api", api);

app.use((error, request, response, next) => {
    response.status(500).send(error.message);
})


module.exports = app;