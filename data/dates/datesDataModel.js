const db = require("../dbConfig.js");

module.exports = {
    getAllDatesByUsername,
    getDatesById,
    getDatesByPersonName,
    insertDate,
    updateDate,
    deleteDate
}

function getAllDatesByUsername(user_id){
    return db("dates").where("user_id", user_id);
}

function getDatesById(user_id, date_id){
    return db("dates").where({"user_id": user_id, "date_id": date_id});
}

function getDatesByPersonName(user_id, person) {

    return db("dates").where({"user_id": username, "person": person});
}

function insertDate(dateData) {
    
    let user_id = db("users").where("user_id", dateData.username).first().user_id;
    dateData.user_id = user_id; 

    return db("dates").insert(dateData);
}

function updateDate(user_id, date_id, dateData) {
    return db("dates").where({"user_id": user_id, "date_id": date_id}).insert(dateData);
}

function deleteDate(user_id, id) {
    return db("dates").where({"user_id": user_id, "id": id})
}

