const express = require("express");
const router = express();

const authenticate = require("../middleware/authenticationMiddleware.js");

router.use(express.json());

router.post("/register",(req,res) => {

})

router.get("/login", authenticate, (req,res)=> {

})

module.exports = router;