const express = require("express");
const router = express();

const datesDB = require("../data/dates/datesDataModel");
const restricted = require("../middleware/restrictedMiddleware.js");

router.use(express.json());

router.get("/:username", restricted, (req,res) => {

})

router.get("/:username/:id", restricted, (req,res) => {
    
})

router.get("/:username/:category", restricted, (req,res) => {
    
})

router.get("/:username/:relationship", restricted, (req,res) => {
    
})

router.get("/:username/:person", restricted, (req,res) => {
    
})

router.post("/:username/", restricted, (req,res) => {
    
})

router.put("/:username/:id", restricted, (req,res) => {
    
})

router.delete("/:username/:id", restricted (req,res) => {
    
})



module.exports = router;