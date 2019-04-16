const express = require("express");
const server = express();

const datesRouter = require("./routers/datesRouter.js");
const usersRouter = require("./routers/usersRouter.js");

server.use(express.json());

server.use("/dates", datesRouter);
server.use("/users", usersRouter);

server.listen(5000, () => {
    console.log("We are in the server!");
})