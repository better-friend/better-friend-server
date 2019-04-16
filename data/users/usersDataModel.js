
const db = require("../dbConfig.js");

module.exports = {
    register,
    login
}

function register(userData) {
    return db("users").insert({"username": userData.username, "password": userData.password});
}

function login(username) {
    return db("users").where({username}).first();
}