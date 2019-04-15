const express = require("express");
const router = express();

const bcrypt = require("bcryptjs");
const db = require("../data/users/usersDataModel");
const jwt = require('jsonwebtoken');

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

    db.login(username).then(
        user => {
    
          if(user && bcrypt.compareSync(password,user.password) )  {
            let token = generateToken(user);
    
            localStorage.setItem(userToken, token); 
            console.log("You've logged in!");
            res.status(200).send(token);
          }
          else {
            res.status(401).json({errorMessage: "Incorrect password entered. Pleae enter a different password"})
          }
        }  
      )
})

function generateToken(user) {
    let payload = {
        username: user.username,
        password: user.password 
      }
    
      let secretKey = "mySecretKey"; 
    
      let signOptions = {
        expiresIn: "24h",
      }; 
    
      return jwt.sign(payload,secretKey,signOptions);
}


module.exports = router;