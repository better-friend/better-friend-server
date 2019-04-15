const express = require("express");
const server = express();
const cors = require("cors");

const datesRouter = require("./routers/datesRouter.js");
const usersRouter = require("./routers/usersRouter.js");

server.use(express.json());

server.use("/api/dates", datesRouter);
server.use("/api/users", usersRouter);

server.listen(5000, () => {
    console.log("We are in the server!");
})