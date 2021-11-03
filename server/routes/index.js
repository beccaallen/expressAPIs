const express = require("express");
const chirpsRouter = require("./chirps");

let app = express.Router();

//adding routers to router

app.use("/chirps", chirpsRouter);

module.exports = app;
