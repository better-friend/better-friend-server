const express = require("express");
const router = express();

const bcrypt = require("bcryptjs");
const db = require("../data/users/usersDataModel");


const authenticate = require("../middleware/authenticationMiddleware.js");

router.use(express.json());

router.post("/register", (req,res) => {
    let {username, password} = req.body; 
    let hashedPassword = bcrypt.hashSync(password, 32);

    if(!username || !hashedPassword){
        return res.status(404).json({errorMessage: "You are missing a username or password!"})
    }

    else {
        db.register({username, hashedPassword})
            .then(() => res.status(202).json({message: "Successful register!"}))
            .catch(() => res.status(500).json({message: "There was a server error to accessing our database"}));
    }
})

router.get("/login", (req,res) => {

    let {username, password} = req.body; 

    bcrypt.compareSync()

    db.login({username, hashedPassword})
        .then(() => res.status(202).json({message: "Successful register!"}))
        .catch(() => res.status(500).json({message: "There was a server error to accessing our database"}));
})

module.exports = router;