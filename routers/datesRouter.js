const express = require("express");
const router = express();

const db = require("../data/dates/datesDataModel");
const restricted = require("../middleware/restrictedMiddleware.js");

router.use(express.json());

router.get("/:username", restricted, (req,res) => {
    let username = req.params.username;
    
    db.getAllDatesByUsername(username)
    .then((result) => res.status(200).json(result.data))
    .catch(err => res.status(400).json({errorMessage: "We could not find the dates with this username"}))
})

router.get("/:username/:date_id", restricted, (req,res) => {
    let username = req.params.username;
    let date_id = req.params.date_id;

    db.getDateByDateId(username,date_id)
    .then((result) => res.status(200).json(result.data))
    .catch(err => res.status(400).json({errorMessage: "We could not find the data with this username"}))
})

router.get("/:username/:person", restricted, (req,res) => {
    let username = req.params.username;
    let person = req.params.person;

    db.getAllDatesByPersonName(username,person)
    .then((result) => res.status(200).json(result.data))
    .catch(err => res.status(400).json({errorMessage: "We could not find the data with this username"}))
})

router.post("/:username/", restricted, (req,res) => {
    
    let username = req.params.username;
    let dateData = req.body; 

    db.insertDate(username,dateData)
    .then(() => res.status(200).json({message: "Successful upload of data!"}))
    .catch(err => res.status(500).json({errorMessage: "The server has issues uploading data"}))

})

router.put("/:username/:date_id", restricted, (req,res) => {

    let username = req.params.username;
    let date_id = req.params.date_id;

    db.updateDate(username,date_id, dateData)
    .then(() => res.status(200).json({message: "Successful upload of data!"}))
    .catch(err => res.status(500).json({errorMessage: "The server has issues uploading data"}))
})

router.delete("/:username/:date_id", restricted, (req,res) => {
    let username = req.params.username;
    let date_id = req.params.date_id;

    db.deleteDate(username,date_id)
    .then(() => res.status(200).json({message: "Successful deleting of data!"}))
    .catch(err => res.status(500).json({errorMessage: "The server has issues uploading data"}))
})

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