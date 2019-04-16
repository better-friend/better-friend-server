const express = require("express");
const server = express();
var cors = require('cors')
var moment = require('moment');

const http = require('http');

const datesRouter = require("./routers/datesRouter.js");
const usersRouter = require("./routers/usersRouter.js");

const app = http.createServer((req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');

});

server.use(express.json());
server.use(cors());

const port = process.env.PORT || 5000;

server.use("/dates", datesRouter);
server.use("/users", usersRouter);

server.listen(port, () => {
    console.log("We are in the server!");
})