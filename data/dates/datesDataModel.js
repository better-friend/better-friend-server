const db = require("../dbConfig.js");

module.exports = {
    getAllUnsentDates,
    markDateSent,
    getAllDatesByUserId,
    getDatesByPersonName,
    insertDate,
    updateDate,
    deleteDate
}

function getAllUnsentDates(date){
    return db("dates").where({date: date, sent: false});
}

function findDateByDateId(date_id) {
    return db('photos')
        .where("date_id", date_id)
        .first();
}

function markDateSent(date_ids){
    return db("dates").whereIn("date_id", date_ids).update({sent: true });
}

function getAllDatesByUserId(user_id){
    console.log(db("dates").where("user_id", user_id));
    return db("dates").where({user_id: user_id});
}

// function getDatesByDateId(user_id, date_id){
//     return db("dates").where({user_id: user_id, date_id: date_id});
// }

function getDatesByPersonName(user_id, person) {
    return db("dates").where({user_id: user_id, personToSendMessageTo: person});
}

function insertDate(dateData) {
    
    return db("dates").returning("date_id").insert(dateData);
}

function updateDate(d_id, dateData) {

    return db("dates").returning("date_id").where({date_id: d_id}).update(dateData);
}

function deleteDate(user_id, date_id) {

    return db("dates").where({date_id: date_id}).delete();
}