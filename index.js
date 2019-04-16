const express = require("express");
const server = express();
var cors = require('cors')

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

res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hello World</h1>');

server.use("/dates", datesRouter);
server.use("/users", usersRouter);

server.listen(5000, () => {
    console.log("We are in the server!");
})