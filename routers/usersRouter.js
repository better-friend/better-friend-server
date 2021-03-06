const router = require('express').Router();

const bcrypt = require("bcryptjs");
const db = require("../data/users/usersDataModel.js");
const jwt = require('jsonwebtoken');
var cors = require('cors');

router.post("/register", (req,res) => {
    let {username, password} = req.body; 
    let hashedPassword = bcrypt.hashSync(password, 12);

    if(!username || !password){
        return res.status(404).json({errorMessage: "You are missing a username or password!"})
    }

    else {
        let user = {
          "username": username,
          "password": hashedPassword 
        }
        db.register(user)
            .then(() => res.status(202).json({message: "Successful register!"}))
            .catch(() => res.status(500).json({message: "There was a server error to accessing our database"}));
    }
})

router.post("/login", (req,res) => {

    let {username, password} = req.body; 
    
    db.login(username).then(
        user => {
    
          if(user && bcrypt.compareSync(password,user.password) )  {
            let token = generateToken(user);
     
            console.log("You've logged in!");
            res.status(200).json({user_id: user.user_id, username: user.username, token: token});
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