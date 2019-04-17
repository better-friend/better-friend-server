const router = require('express').Router();

const db = require("../data/dates/datesDataModel");
const restricted = require("../middleware/restrictedMiddleware.js");
var cors = require('cors')

router.get("/:user_id", restricted, (req,res) => {
    let user_id = req.params.user_id;
    
    db.getAllDatesByUserId(user_id)
    .then((result) => res.status(200).json(result))
    .catch(err => res.status(400).json({errorMessage: "We could not find the dates with this username"}))

})

// router.get("/:user_id/:date_id", restricted, (req,res) => {
//     let user_id = req.params.user_id;

//     let date_id = req.params.date_id;

//     db.getDatesByDateId(user_id,date_id)
//     .then((result) => res.status(200).json(result))
//     .catch(err => res.status(400).json({errorMessage: "We could not find the data with this username"}))
// })

router.get("/:user_id/:person", restricted, (req,res) => {
    let user_id = req.params.user_id;
    let person = req.params.person;

    console.log(req.params);

    db.getDatesByPersonName(user_id,person)
    .then(result => {
        console.log(result);
        return res.status(200).json(result)})
    .catch(err => res.status(400).json({errorMessage: "We could not find the data with this username"}))
})

router.post("/:user_id", restricted, (req,res) => {
    
    let dateData = req.body; 
    user_id = req.params.user_id;

    dateData = {...dateData, "user_id": user_id};

    if(!dateData.user_id || !dateData.username || !dateData.date || !dateData.personToSendMessageTo || 
        !dateData.phone_number || !dateData.message || dateData.sent == null ) {
            return res.status(404).json({message: "You are missing a field in your post data request!"})
        }
    else {
        db.insertDate(dateData)
        .then((result) => res.status(200).json({message: "Successful upload of data!"}))
        .catch(err =>{ 
            console.log(err);
            return res.status(500).json({errorMessage: err})})
    }
})

router.put("/:user_id/:date_id", restricted, (req,res) => {

    let date_id = req.params.date_id;
    console.log(date_id);
    let dateData = req.body; 

    db.updateDate(date_id, dateData)
    .then(() => res.status(200).json({message: "Successful upload of data!"}))
    .catch(err => res.status(500).json({errorMessage: "The server has issues uploading data"}))
})

router.delete("/:user_id/:date_id", restricted, (req,res) => {
    let user_id = req.params.user_id;
    let date_id = req.params.date_id;

    console.log(date_id);
    db.deleteDate(user_id,date_id)
    .then(() => res.status(200).json({message: "Successful deleting of data!"}))
    .catch(err => res.status(500).json({errorMessage: "The server has issues uploading data"}))
})



module.exports = router;