const db = require("../dbConfig.js");

module.exports = {
    getAllDatesByUsername,
    getDatesById,
    getDatesByPersonName,
    insertDate,
    updateDate,
    deleteDate
}

function getUserId(username) {
    let user_id = db("users").where("username", dateData.username).first().user_id;
    return user_id; 
}

function getAllDatesByUsername(username){
    let user_id = getUserId(username);
    return db("dates").where("user_id", user_id);
}

function getDatesById(username, date_id){
    let user_id = getUserId(username);
    return db("dates").where({"user_id": user_id, "date_id": date_id});
}

function getDatesByPersonName(username, person) {
    let user_id = getUserId(username);
    return db("dates").where({"user_id": user_id, "person": person});
}

function insertDate(dateData) {
    
    let user_id = getUserId(username);
    dateData.user_id = user_id; 

    return db("dates").insert(dateData);
}

function updateDate(username, date_id, dateData) {

    let user_id = getUserId(username);
    return db("dates").where({"user_id": user_id, "date_id": date_id}).insert(dateData);
}

function deleteDate(username, id) {
    let user_id = getUserId(username);
    
    return db("dates").where({"user_id": user_id, "id": id})
}

