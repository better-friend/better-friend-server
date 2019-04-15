
const db = require("../dbConfig.js");

module.exports = {
    register,
    login
}

function register(userData) {
    return db("users").insert(userData);
}

function login(username, password) {
    return db("users").where({username}).first().then(
        user => {
    
          if(user && bcrypt.compareSync(password,user.password) )  {
            let token = generateToken(user);
    
            // localStorage.setItem(userToken, token); 
            console.log("You've logged in!");
            res.status(200).send(token);
          }
          else {
            res.status(401).json({errorMessage: "Incorrect password entered. Pleae enter a different password"})
          }
        }  
      )
}