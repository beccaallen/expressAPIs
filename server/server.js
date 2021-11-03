const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes");

let app = express();

//middleware : parses JSON
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// middleware from index.js

app.use("/api", apiRoutes);
app.use(express.static("client"))

app.listen(3000);
