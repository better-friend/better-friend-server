const db = require("../dbConfig.js");

module.exports = {
    getAllDatesByUserId,
    getDatesByDateId,
    getDatesByPersonName,
    insertDate,
    updateDate,
    deleteDate
}

function getAllDatesByUserId(user_id){
    console.log(db("dates").where("user_id", user_id));
    return db("dates").where("user_id", user_id);
}

function getDatesByDateId(user_id, date_id){
    return db("dates").where({"user_id": user_id, "date_id": date_id});
}

function getDatesByPersonName(user_id, person) {
    return db("dates").where({"user_id": user_id, "personToSendMessageTo": person});
}

function insertDate(dateData) {
    
    return db("dates").insert(dateData);
}

function updateDate(user_id, date_id, dateData) {

    return db("dates").where({"user_id": user_id, "date_id": date_id}).insert(dateData);
}

function deleteDate(user_id, date_id) {

    return db("dates").where({"user_id": user_id, "date_id": date_id})
}