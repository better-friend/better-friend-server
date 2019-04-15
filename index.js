const express = require("express");
const server = express();

server.use(express.json());

server.listen(5000, () => {
    console.log("We are in the server!");
})